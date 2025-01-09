import{a as Wu}from"./chunk-PYI5D3D4.js";import{a as N,b as W,d as Dr,f as tr,i as _r,l as L,m as re,n as _e,o as Jo,p as Ve}from"./chunk-LM3PONRF.js";var tl=tr((pa,da)=>{(function(t,e){typeof pa=="object"&&typeof da<"u"?da.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis<"u"?globalThis:t||self).dayjs=e()})(pa,function(){"use strict";var t=1e3,e=6e4,r=36e5,o="millisecond",i="second",n="minute",a="hour",s="day",c="week",x="month",S="quarter",E="year",Y="date",j="Invalid Date",J=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,fe=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,te={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(v){var g=["th","st","nd","rd"],y=v%100;return"["+v+(g[(y-20)%10]||g[y]||g[0])+"]"}},xe=function(v,g,y){var h=String(v);return!h||h.length>=g?v:""+Array(g+1-h.length).join(y)+v},$={s:xe,z:function(v){var g=-v.utcOffset(),y=Math.abs(g),h=Math.floor(y/60),m=y%60;return(g<=0?"+":"-")+xe(h,2,"0")+":"+xe(m,2,"0")},m:function v(g,y){if(g.date()<y.date())return-v(y,g);var h=12*(y.year()-g.year())+(y.month()-g.month()),m=g.clone().add(h,x),_=y-m<0,C=g.clone().add(h+(_?-1:1),x);return+(-(h+(y-m)/(_?m-C:C-m))||0)},a:function(v){return v<0?Math.ceil(v)||0:Math.floor(v)},p:function(v){return{M:x,y:E,w:c,d:s,D:Y,h:a,m:n,s:i,ms:o,Q:S}[v]||String(v||"").toLowerCase().replace(/s$/,"")},u:function(v){return v===void 0}},he="en",ee={};ee[he]=te;var De="$isDayjsObject",Fe=function(v){return v instanceof w||!(!v||!v[De])},at=function v(g,y,h){var m;if(!g)return he;if(typeof g=="string"){var _=g.toLowerCase();ee[_]&&(m=_),y&&(ee[_]=y,m=_);var C=g.split("-");if(!m&&C.length>1)return v(C[0])}else{var P=g.name;ee[P]=g,m=P}return!h&&m&&(he=m),m||!h&&he},p=function(v,g){if(Fe(v))return v.clone();var y=typeof g=="object"?g:{};return y.date=v,y.args=arguments,new w(y)},d=$;d.l=at,d.i=Fe,d.w=function(v,g){return p(v,{locale:g.$L,utc:g.$u,x:g.$x,$offset:g.$offset})};var w=function(){function v(y){this.$L=at(y.locale,null,!0),this.parse(y),this.$x=this.$x||y.x||{},this[De]=!0}var g=v.prototype;return g.parse=function(y){this.$d=function(h){var m=h.date,_=h.utc;if(m===null)return new Date(NaN);if(d.u(m))return new Date;if(m instanceof Date)return new Date(m);if(typeof m=="string"&&!/Z$/i.test(m)){var C=m.match(J);if(C){var P=C[2]-1||0,F=(C[7]||"0").substring(0,3);return _?new Date(Date.UTC(C[1],P,C[3]||1,C[4]||0,C[5]||0,C[6]||0,F)):new Date(C[1],P,C[3]||1,C[4]||0,C[5]||0,C[6]||0,F)}}return new Date(m)}(y),this.init()},g.init=function(){var y=this.$d;this.$y=y.getFullYear(),this.$M=y.getMonth(),this.$D=y.getDate(),this.$W=y.getDay(),this.$H=y.getHours(),this.$m=y.getMinutes(),this.$s=y.getSeconds(),this.$ms=y.getMilliseconds()},g.$utils=function(){return d},g.isValid=function(){return this.$d.toString()!==j},g.isSame=function(y,h){var m=p(y);return this.startOf(h)<=m&&m<=this.endOf(h)},g.isAfter=function(y,h){return p(y)<this.startOf(h)},g.isBefore=function(y,h){return this.endOf(h)<p(y)},g.$g=function(y,h,m){return d.u(y)?this[h]:this.set(m,y)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(y,h){var m=this,_=!!d.u(h)||h,C=d.p(y),P=function(Pe,We){var vt=d.w(m.$u?Date.UTC(m.$y,We,Pe):new Date(m.$y,We,Pe),m);return _?vt:vt.endOf(s)},F=function(Pe,We){return d.w(m.toDate()[Pe].apply(m.toDate("s"),(_?[0,0,0,0]:[23,59,59,999]).slice(We)),m)},z=this.$W,X=this.$M,me=this.$D,Te="set"+(this.$u?"UTC":"");switch(C){case E:return _?P(1,0):P(31,11);case x:return _?P(1,X):P(0,X+1);case c:var ce=this.$locale().weekStart||0,ge=(z<ce?z+7:z)-ce;return P(_?me-ge:me+(6-ge),X);case s:case Y:return F(Te+"Hours",0);case a:return F(Te+"Minutes",1);case n:return F(Te+"Seconds",2);case i:return F(Te+"Milliseconds",3);default:return this.clone()}},g.endOf=function(y){return this.startOf(y,!1)},g.$set=function(y,h){var m,_=d.p(y),C="set"+(this.$u?"UTC":""),P=(m={},m[s]=C+"Date",m[Y]=C+"Date",m[x]=C+"Month",m[E]=C+"FullYear",m[a]=C+"Hours",m[n]=C+"Minutes",m[i]=C+"Seconds",m[o]=C+"Milliseconds",m)[_],F=_===s?this.$D+(h-this.$W):h;if(_===x||_===E){var z=this.clone().set(Y,1);z.$d[P](F),z.init(),this.$d=z.set(Y,Math.min(this.$D,z.daysInMonth())).$d}else P&&this.$d[P](F);return this.init(),this},g.set=function(y,h){return this.clone().$set(y,h)},g.get=function(y){return this[d.p(y)]()},g.add=function(y,h){var m,_=this;y=Number(y);var C=d.p(h),P=function(X){var me=p(_);return d.w(me.date(me.date()+Math.round(X*y)),_)};if(C===x)return this.set(x,this.$M+y);if(C===E)return this.set(E,this.$y+y);if(C===s)return P(1);if(C===c)return P(7);var F=(m={},m[n]=e,m[a]=r,m[i]=t,m)[C]||1,z=this.$d.getTime()+y*F;return d.w(z,this)},g.subtract=function(y,h){return this.add(-1*y,h)},g.format=function(y){var h=this,m=this.$locale();if(!this.isValid())return m.invalidDate||j;var _=y||"YYYY-MM-DDTHH:mm:ssZ",C=d.z(this),P=this.$H,F=this.$m,z=this.$M,X=m.weekdays,me=m.months,Te=m.meridiem,ce=function(We,vt,er,rt){return We&&(We[vt]||We(h,_))||er[vt].slice(0,rt)},ge=function(We){return d.s(P%12||12,We,"0")},Pe=Te||function(We,vt,er){var rt=We<12?"AM":"PM";return er?rt.toLowerCase():rt};return _.replace(fe,function(We,vt){return vt||function(er){switch(er){case"YY":return String(h.$y).slice(-2);case"YYYY":return d.s(h.$y,4,"0");case"M":return z+1;case"MM":return d.s(z+1,2,"0");case"MMM":return ce(m.monthsShort,z,me,3);case"MMMM":return ce(me,z);case"D":return h.$D;case"DD":return d.s(h.$D,2,"0");case"d":return String(h.$W);case"dd":return ce(m.weekdaysMin,h.$W,X,2);case"ddd":return ce(m.weekdaysShort,h.$W,X,3);case"dddd":return X[h.$W];case"H":return String(P);case"HH":return d.s(P,2,"0");case"h":return ge(1);case"hh":return ge(2);case"a":return Pe(P,F,!0);case"A":return Pe(P,F,!1);case"m":return String(F);case"mm":return d.s(F,2,"0");case"s":return String(h.$s);case"ss":return d.s(h.$s,2,"0");case"SSS":return d.s(h.$ms,3,"0");case"Z":return C}return null}(We)||C.replace(":","")})},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(y,h,m){var _,C=this,P=d.p(h),F=p(y),z=(F.utcOffset()-this.utcOffset())*e,X=this-F,me=function(){return d.m(C,F)};switch(P){case E:_=me()/12;break;case x:_=me();break;case S:_=me()/3;break;case c:_=(X-z)/6048e5;break;case s:_=(X-z)/864e5;break;case a:_=X/r;break;case n:_=X/e;break;case i:_=X/t;break;default:_=X}return m?_:d.a(_)},g.daysInMonth=function(){return this.endOf(x).$D},g.$locale=function(){return ee[this.$L]},g.locale=function(y,h){if(!y)return this.$L;var m=this.clone(),_=at(y,h,!0);return _&&(m.$L=_),m},g.clone=function(){return d.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},v}(),R=w.prototype;return p.prototype=R,[["$ms",o],["$s",i],["$m",n],["$H",a],["$W",s],["$M",x],["$y",E],["$D",Y]].forEach(function(v){R[v[1]]=function(g){return this.$g(g,v[0],v[1])}}),p.extend=function(v,g){return v.$i||(v(g,w,p),v.$i=!0),p},p.locale=at,p.isDayjs=Fe,p.unix=function(v){return p(1e3*v)},p.en=ee[he],p.Ls=ee,p.p={},p})});var rl=tr((fa,ha)=>{(function(t,e){typeof fa=="object"&&typeof ha<"u"?ha.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis<"u"?globalThis:t||self).dayjs_locale_en=e()})(fa,function(){"use strict";return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}}})});var ol=tr((ma,ga)=>{(function(t,e){typeof ma=="object"&&typeof ga<"u"?ga.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis<"u"?globalThis:t||self).dayjs_plugin_relativeTime=e()})(ma,function(){"use strict";return function(t,e,r){t=t||{};var o=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function n(s,c,x,S){return o.fromToBase(s,c,x,S)}r.en.relativeTime=i,o.fromToBase=function(s,c,x,S,E){for(var Y,j,J,fe=x.$locale().relativeTime||i,te=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],xe=te.length,$=0;$<xe;$+=1){var he=te[$];he.d&&(Y=S?r(s).diff(x,he.d,!0):x.diff(s,he.d,!0));var ee=(t.rounding||Math.round)(Math.abs(Y));if(J=Y>0,ee<=he.r||!he.r){ee<=1&&$>0&&(he=te[$-1]);var De=fe[he.l];E&&(ee=E(""+ee)),j=typeof De=="string"?De.replace("%d",ee):De(ee,c,he.l,J);break}}if(c)return j;var Fe=J?fe.future:fe.past;return typeof Fe=="function"?Fe(j):Fe.replace("%s",j)},o.to=function(s,c){return n(s,c,this,!0)},o.from=function(s,c){return n(s,c,this)};var a=function(s){return s.$u?r.utc():r()};o.toNow=function(s){return this.to(a(this),s)},o.fromNow=function(s){return this.from(a(this),s)}}})});var il=tr((wa,va)=>{(function(t,e){typeof wa=="object"&&typeof va<"u"?va.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis<"u"?globalThis:t||self).dayjs_plugin_updateLocale=e()})(wa,function(){"use strict";return function(t,e,r){r.updateLocale=function(o,i){var n=r.Ls[o];if(n)return(i?Object.keys(i):[]).forEach(function(a){n[a]=i[a]}),n}}})});var E1=tr(In=>{"use strict";In.byteLength=Dp;In.toByteArray=Fp;In.fromByteArray=Hp;var qt=[],It=[],Bp=typeof Uint8Array<"u"?Uint8Array:Array,Ja="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(oo=0,C1=Ja.length;oo<C1;++oo)qt[oo]=Ja[oo],It[Ja.charCodeAt(oo)]=oo;var oo,C1;It[45]=62;It[95]=63;function _1(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");r===-1&&(r=e);var o=r===e?0:4-r%4;return[r,o]}function Dp(t){var e=_1(t),r=e[0],o=e[1];return(r+o)*3/4-o}function jp(t,e,r){return(e+r)*3/4-r}function Fp(t){var e,r=_1(t),o=r[0],i=r[1],n=new Bp(jp(t,o,i)),a=0,s=i>0?o-4:o,c;for(c=0;c<s;c+=4)e=It[t.charCodeAt(c)]<<18|It[t.charCodeAt(c+1)]<<12|It[t.charCodeAt(c+2)]<<6|It[t.charCodeAt(c+3)],n[a++]=e>>16&255,n[a++]=e>>8&255,n[a++]=e&255;return i===2&&(e=It[t.charCodeAt(c)]<<2|It[t.charCodeAt(c+1)]>>4,n[a++]=e&255),i===1&&(e=It[t.charCodeAt(c)]<<10|It[t.charCodeAt(c+1)]<<4|It[t.charCodeAt(c+2)]>>2,n[a++]=e>>8&255,n[a++]=e&255),n}function zp(t){return qt[t>>18&63]+qt[t>>12&63]+qt[t>>6&63]+qt[t&63]}function Zp(t,e,r){for(var o,i=[],n=e;n<r;n+=3)o=(t[n]<<16&16711680)+(t[n+1]<<8&65280)+(t[n+2]&255),i.push(zp(o));return i.join("")}function Hp(t){for(var e,r=t.length,o=r%3,i=[],n=16383,a=0,s=r-o;a<s;a+=n)i.push(Zp(t,a,a+n>s?s:a+n));return o===1?(e=t[r-1],i.push(qt[e>>2]+qt[e<<4&63]+"==")):o===2&&(e=(t[r-2]<<8)+t[r-1],i.push(qt[e>>10]+qt[e>>4&63]+qt[e<<2&63]+"=")),i.join("")}});var S1=tr(Xa=>{Xa.read=function(t,e,r,o,i){var n,a,s=i*8-o-1,c=(1<<s)-1,x=c>>1,S=-7,E=r?i-1:0,Y=r?-1:1,j=t[e+E];for(E+=Y,n=j&(1<<-S)-1,j>>=-S,S+=s;S>0;n=n*256+t[e+E],E+=Y,S-=8);for(a=n&(1<<-S)-1,n>>=-S,S+=o;S>0;a=a*256+t[e+E],E+=Y,S-=8);if(n===0)n=1-x;else{if(n===c)return a?NaN:(j?-1:1)*(1/0);a=a+Math.pow(2,o),n=n-x}return(j?-1:1)*a*Math.pow(2,n-o)};Xa.write=function(t,e,r,o,i,n){var a,s,c,x=n*8-i-1,S=(1<<x)-1,E=S>>1,Y=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,j=o?0:n-1,J=o?1:-1,fe=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=S):(a=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-a))<1&&(a--,c*=2),a+E>=1?e+=Y/c:e+=Y*Math.pow(2,1-E),e*c>=2&&(a++,c/=2),a+E>=S?(s=0,a=S):a+E>=1?(s=(e*c-1)*Math.pow(2,i),a=a+E):(s=e*Math.pow(2,E-1)*Math.pow(2,i),a=0));i>=8;t[r+j]=s&255,j+=J,s/=256,i-=8);for(a=a<<i|s,x+=i;x>0;t[r+j]=a&255,j+=J,a/=256,x-=8);t[r+j-J]|=fe*128}});var z1=tr(Fo=>{"use strict";var Qa=E1(),Do=S1(),A1=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Fo.Buffer=M;Fo.SlowBuffer=Kp;Fo.INSPECT_MAX_BYTES=50;var Nn=2147483647;Fo.kMaxLength=Nn;M.TYPED_ARRAY_SUPPORT=Wp();!M.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Wp(){try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch{return!1}}Object.defineProperty(M.prototype,"parent",{enumerable:!0,get:function(){if(M.isBuffer(this))return this.buffer}});Object.defineProperty(M.prototype,"offset",{enumerable:!0,get:function(){if(M.isBuffer(this))return this.byteOffset}});function wr(t){if(t>Nn)throw new RangeError('The value "'+t+'" is invalid for option "size"');let e=new Uint8Array(t);return Object.setPrototypeOf(e,M.prototype),e}function M(t,e,r){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return os(t)}return I1(t,e,r)}M.poolSize=8192;function I1(t,e,r){if(typeof t=="string")return Gp(t,e);if(ArrayBuffer.isView(t))return qp(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Yt(t,ArrayBuffer)||t&&Yt(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Yt(t,SharedArrayBuffer)||t&&Yt(t.buffer,SharedArrayBuffer)))return ts(t,e,r);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let o=t.valueOf&&t.valueOf();if(o!=null&&o!==t)return M.from(o,e,r);let i=Yp(t);if(i)return i;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return M.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}M.from=function(t,e,r){return I1(t,e,r)};Object.setPrototypeOf(M.prototype,Uint8Array.prototype);Object.setPrototypeOf(M,Uint8Array);function N1(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function Vp(t,e,r){return N1(t),t<=0?wr(t):e!==void 0?typeof r=="string"?wr(t).fill(e,r):wr(t).fill(e):wr(t)}M.alloc=function(t,e,r){return Vp(t,e,r)};function os(t){return N1(t),wr(t<0?0:is(t)|0)}M.allocUnsafe=function(t){return os(t)};M.allocUnsafeSlow=function(t){return os(t)};function Gp(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!M.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let r=O1(t,e)|0,o=wr(r),i=o.write(t,e);return i!==r&&(o=o.slice(0,i)),o}function es(t){let e=t.length<0?0:is(t.length)|0,r=wr(e);for(let o=0;o<e;o+=1)r[o]=t[o]&255;return r}function qp(t){if(Yt(t,Uint8Array)){let e=new Uint8Array(t);return ts(e.buffer,e.byteOffset,e.byteLength)}return es(t)}function ts(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');let o;return e===void 0&&r===void 0?o=new Uint8Array(t):r===void 0?o=new Uint8Array(t,e):o=new Uint8Array(t,e,r),Object.setPrototypeOf(o,M.prototype),o}function Yp(t){if(M.isBuffer(t)){let e=is(t.length)|0,r=wr(e);return r.length===0||t.copy(r,0,0,e),r}if(t.length!==void 0)return typeof t.length!="number"||as(t.length)?wr(0):es(t);if(t.type==="Buffer"&&Array.isArray(t.data))return es(t.data)}function is(t){if(t>=Nn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Nn.toString(16)+" bytes");return t|0}function Kp(t){return+t!=t&&(t=0),M.alloc(+t)}M.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==M.prototype};M.compare=function(e,r){if(Yt(e,Uint8Array)&&(e=M.from(e,e.offset,e.byteLength)),Yt(r,Uint8Array)&&(r=M.from(r,r.offset,r.byteLength)),!M.isBuffer(e)||!M.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;let o=e.length,i=r.length;for(let n=0,a=Math.min(o,i);n<a;++n)if(e[n]!==r[n]){o=e[n],i=r[n];break}return o<i?-1:i<o?1:0};M.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};M.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return M.alloc(0);let o;if(r===void 0)for(r=0,o=0;o<e.length;++o)r+=e[o].length;let i=M.allocUnsafe(r),n=0;for(o=0;o<e.length;++o){let a=e[o];if(Yt(a,Uint8Array))n+a.length>i.length?(M.isBuffer(a)||(a=M.from(a)),a.copy(i,n)):Uint8Array.prototype.set.call(i,a,n);else if(M.isBuffer(a))a.copy(i,n);else throw new TypeError('"list" argument must be an Array of Buffers');n+=a.length}return i};function O1(t,e){if(M.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Yt(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let r=t.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&r===0)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return rs(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return F1(t).length;default:if(i)return o?-1:rs(t).length;e=(""+e).toLowerCase(),i=!0}}M.byteLength=O1;function Jp(t,e,r){let o=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,e>>>=0,r<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return sd(this,e,r);case"utf8":case"utf-8":return L1(this,e,r);case"ascii":return nd(this,e,r);case"latin1":case"binary":return ad(this,e,r);case"base64":return od(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ld(this,e,r);default:if(o)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),o=!0}}M.prototype._isBuffer=!0;function io(t,e,r){let o=t[e];t[e]=t[r],t[r]=o}M.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let r=0;r<e;r+=2)io(this,r,r+1);return this};M.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let r=0;r<e;r+=4)io(this,r,r+3),io(this,r+1,r+2);return this};M.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let r=0;r<e;r+=8)io(this,r,r+7),io(this,r+1,r+6),io(this,r+2,r+5),io(this,r+3,r+4);return this};M.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?L1(this,0,e):Jp.apply(this,arguments)};M.prototype.toLocaleString=M.prototype.toString;M.prototype.equals=function(e){if(!M.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:M.compare(this,e)===0};M.prototype.inspect=function(){let e="",r=Fo.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"};A1&&(M.prototype[A1]=M.prototype.inspect);M.prototype.compare=function(e,r,o,i,n){if(Yt(e,Uint8Array)&&(e=M.from(e,e.offset,e.byteLength)),!M.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),o===void 0&&(o=e?e.length:0),i===void 0&&(i=0),n===void 0&&(n=this.length),r<0||o>e.length||i<0||n>this.length)throw new RangeError("out of range index");if(i>=n&&r>=o)return 0;if(i>=n)return-1;if(r>=o)return 1;if(r>>>=0,o>>>=0,i>>>=0,n>>>=0,this===e)return 0;let a=n-i,s=o-r,c=Math.min(a,s),x=this.slice(i,n),S=e.slice(r,o);for(let E=0;E<c;++E)if(x[E]!==S[E]){a=x[E],s=S[E];break}return a<s?-1:s<a?1:0};function P1(t,e,r,o,i){if(t.length===0)return-1;if(typeof r=="string"?(o=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,as(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0)if(i)r=0;else return-1;if(typeof e=="string"&&(e=M.from(e,o)),M.isBuffer(e))return e.length===0?-1:T1(t,e,r,o,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):T1(t,[e],r,o,i);throw new TypeError("val must be string, number or Buffer")}function T1(t,e,r,o,i){let n=1,a=t.length,s=e.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(t.length<2||e.length<2)return-1;n=2,a/=2,s/=2,r/=2}function c(S,E){return n===1?S[E]:S.readUInt16BE(E*n)}let x;if(i){let S=-1;for(x=r;x<a;x++)if(c(t,x)===c(e,S===-1?0:x-S)){if(S===-1&&(S=x),x-S+1===s)return S*n}else S!==-1&&(x-=x-S),S=-1}else for(r+s>a&&(r=a-s),x=r;x>=0;x--){let S=!0;for(let E=0;E<s;E++)if(c(t,x+E)!==c(e,E)){S=!1;break}if(S)return x}return-1}M.prototype.includes=function(e,r,o){return this.indexOf(e,r,o)!==-1};M.prototype.indexOf=function(e,r,o){return P1(this,e,r,o,!0)};M.prototype.lastIndexOf=function(e,r,o){return P1(this,e,r,o,!1)};function Xp(t,e,r,o){r=Number(r)||0;let i=t.length-r;o?(o=Number(o),o>i&&(o=i)):o=i;let n=e.length;o>n/2&&(o=n/2);let a;for(a=0;a<o;++a){let s=parseInt(e.substr(a*2,2),16);if(as(s))return a;t[r+a]=s}return a}function Qp(t,e,r,o){return On(rs(e,t.length-r),t,r,o)}function ed(t,e,r,o){return On(dd(e),t,r,o)}function td(t,e,r,o){return On(F1(e),t,r,o)}function rd(t,e,r,o){return On(fd(e,t.length-r),t,r,o)}M.prototype.write=function(e,r,o,i){if(r===void 0)i="utf8",o=this.length,r=0;else if(o===void 0&&typeof r=="string")i=r,o=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(o)?(o=o>>>0,i===void 0&&(i="utf8")):(i=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let n=this.length-r;if((o===void 0||o>n)&&(o=n),e.length>0&&(o<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let a=!1;for(;;)switch(i){case"hex":return Xp(this,e,r,o);case"utf8":case"utf-8":return Qp(this,e,r,o);case"ascii":case"latin1":case"binary":return ed(this,e,r,o);case"base64":return td(this,e,r,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return rd(this,e,r,o);default:if(a)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),a=!0}};M.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function od(t,e,r){return e===0&&r===t.length?Qa.fromByteArray(t):Qa.fromByteArray(t.slice(e,r))}function L1(t,e,r){r=Math.min(t.length,r);let o=[],i=e;for(;i<r;){let n=t[i],a=null,s=n>239?4:n>223?3:n>191?2:1;if(i+s<=r){let c,x,S,E;switch(s){case 1:n<128&&(a=n);break;case 2:c=t[i+1],(c&192)===128&&(E=(n&31)<<6|c&63,E>127&&(a=E));break;case 3:c=t[i+1],x=t[i+2],(c&192)===128&&(x&192)===128&&(E=(n&15)<<12|(c&63)<<6|x&63,E>2047&&(E<55296||E>57343)&&(a=E));break;case 4:c=t[i+1],x=t[i+2],S=t[i+3],(c&192)===128&&(x&192)===128&&(S&192)===128&&(E=(n&15)<<18|(c&63)<<12|(x&63)<<6|S&63,E>65535&&E<1114112&&(a=E))}}a===null?(a=65533,s=1):a>65535&&(a-=65536,o.push(a>>>10&1023|55296),a=56320|a&1023),o.push(a),i+=s}return id(o)}var k1=4096;function id(t){let e=t.length;if(e<=k1)return String.fromCharCode.apply(String,t);let r="",o=0;for(;o<e;)r+=String.fromCharCode.apply(String,t.slice(o,o+=k1));return r}function nd(t,e,r){let o="";r=Math.min(t.length,r);for(let i=e;i<r;++i)o+=String.fromCharCode(t[i]&127);return o}function ad(t,e,r){let o="";r=Math.min(t.length,r);for(let i=e;i<r;++i)o+=String.fromCharCode(t[i]);return o}function sd(t,e,r){let o=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>o)&&(r=o);let i="";for(let n=e;n<r;++n)i+=hd[t[n]];return i}function ld(t,e,r){let o=t.slice(e,r),i="";for(let n=0;n<o.length-1;n+=2)i+=String.fromCharCode(o[n]+o[n+1]*256);return i}M.prototype.slice=function(e,r){let o=this.length;e=~~e,r=r===void 0?o:~~r,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),r<0?(r+=o,r<0&&(r=0)):r>o&&(r=o),r<e&&(r=e);let i=this.subarray(e,r);return Object.setPrototypeOf(i,M.prototype),i};function Ye(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}M.prototype.readUintLE=M.prototype.readUIntLE=function(e,r,o){e=e>>>0,r=r>>>0,o||Ye(e,r,this.length);let i=this[e],n=1,a=0;for(;++a<r&&(n*=256);)i+=this[e+a]*n;return i};M.prototype.readUintBE=M.prototype.readUIntBE=function(e,r,o){e=e>>>0,r=r>>>0,o||Ye(e,r,this.length);let i=this[e+--r],n=1;for(;r>0&&(n*=256);)i+=this[e+--r]*n;return i};M.prototype.readUint8=M.prototype.readUInt8=function(e,r){return e=e>>>0,r||Ye(e,1,this.length),this[e]};M.prototype.readUint16LE=M.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||Ye(e,2,this.length),this[e]|this[e+1]<<8};M.prototype.readUint16BE=M.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||Ye(e,2,this.length),this[e]<<8|this[e+1]};M.prototype.readUint32LE=M.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||Ye(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};M.prototype.readUint32BE=M.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||Ye(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};M.prototype.readBigUInt64LE=$r(function(e){e=e>>>0,jo(e,"offset");let r=this[e],o=this[e+7];(r===void 0||o===void 0)&&ki(e,this.length-8);let i=r+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,n=this[++e]+this[++e]*2**8+this[++e]*2**16+o*2**24;return BigInt(i)+(BigInt(n)<<BigInt(32))});M.prototype.readBigUInt64BE=$r(function(e){e=e>>>0,jo(e,"offset");let r=this[e],o=this[e+7];(r===void 0||o===void 0)&&ki(e,this.length-8);let i=r*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],n=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+o;return(BigInt(i)<<BigInt(32))+BigInt(n)});M.prototype.readIntLE=function(e,r,o){e=e>>>0,r=r>>>0,o||Ye(e,r,this.length);let i=this[e],n=1,a=0;for(;++a<r&&(n*=256);)i+=this[e+a]*n;return n*=128,i>=n&&(i-=Math.pow(2,8*r)),i};M.prototype.readIntBE=function(e,r,o){e=e>>>0,r=r>>>0,o||Ye(e,r,this.length);let i=r,n=1,a=this[e+--i];for(;i>0&&(n*=256);)a+=this[e+--i]*n;return n*=128,a>=n&&(a-=Math.pow(2,8*r)),a};M.prototype.readInt8=function(e,r){return e=e>>>0,r||Ye(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};M.prototype.readInt16LE=function(e,r){e=e>>>0,r||Ye(e,2,this.length);let o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o};M.prototype.readInt16BE=function(e,r){e=e>>>0,r||Ye(e,2,this.length);let o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o};M.prototype.readInt32LE=function(e,r){return e=e>>>0,r||Ye(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};M.prototype.readInt32BE=function(e,r){return e=e>>>0,r||Ye(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};M.prototype.readBigInt64LE=$r(function(e){e=e>>>0,jo(e,"offset");let r=this[e],o=this[e+7];(r===void 0||o===void 0)&&ki(e,this.length-8);let i=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(o<<24);return(BigInt(i)<<BigInt(32))+BigInt(r+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});M.prototype.readBigInt64BE=$r(function(e){e=e>>>0,jo(e,"offset");let r=this[e],o=this[e+7];(r===void 0||o===void 0)&&ki(e,this.length-8);let i=(r<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+o)});M.prototype.readFloatLE=function(e,r){return e=e>>>0,r||Ye(e,4,this.length),Do.read(this,e,!0,23,4)};M.prototype.readFloatBE=function(e,r){return e=e>>>0,r||Ye(e,4,this.length),Do.read(this,e,!1,23,4)};M.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||Ye(e,8,this.length),Do.read(this,e,!0,52,8)};M.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||Ye(e,8,this.length),Do.read(this,e,!1,52,8)};function ut(t,e,r,o,i,n){if(!M.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<n)throw new RangeError('"value" argument is out of bounds');if(r+o>t.length)throw new RangeError("Index out of range")}M.prototype.writeUintLE=M.prototype.writeUIntLE=function(e,r,o,i){if(e=+e,r=r>>>0,o=o>>>0,!i){let s=Math.pow(2,8*o)-1;ut(this,e,r,o,s,0)}let n=1,a=0;for(this[r]=e&255;++a<o&&(n*=256);)this[r+a]=e/n&255;return r+o};M.prototype.writeUintBE=M.prototype.writeUIntBE=function(e,r,o,i){if(e=+e,r=r>>>0,o=o>>>0,!i){let s=Math.pow(2,8*o)-1;ut(this,e,r,o,s,0)}let n=o-1,a=1;for(this[r+n]=e&255;--n>=0&&(a*=256);)this[r+n]=e/a&255;return r+o};M.prototype.writeUint8=M.prototype.writeUInt8=function(e,r,o){return e=+e,r=r>>>0,o||ut(this,e,r,1,255,0),this[r]=e&255,r+1};M.prototype.writeUint16LE=M.prototype.writeUInt16LE=function(e,r,o){return e=+e,r=r>>>0,o||ut(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2};M.prototype.writeUint16BE=M.prototype.writeUInt16BE=function(e,r,o){return e=+e,r=r>>>0,o||ut(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2};M.prototype.writeUint32LE=M.prototype.writeUInt32LE=function(e,r,o){return e=+e,r=r>>>0,o||ut(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4};M.prototype.writeUint32BE=M.prototype.writeUInt32BE=function(e,r,o){return e=+e,r=r>>>0,o||ut(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function M1(t,e,r,o,i){j1(e,o,i,t,r,7);let n=Number(e&BigInt(4294967295));t[r++]=n,n=n>>8,t[r++]=n,n=n>>8,t[r++]=n,n=n>>8,t[r++]=n;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=a,a=a>>8,t[r++]=a,a=a>>8,t[r++]=a,a=a>>8,t[r++]=a,r}function $1(t,e,r,o,i){j1(e,o,i,t,r,7);let n=Number(e&BigInt(4294967295));t[r+7]=n,n=n>>8,t[r+6]=n,n=n>>8,t[r+5]=n,n=n>>8,t[r+4]=n;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=a,a=a>>8,t[r+2]=a,a=a>>8,t[r+1]=a,a=a>>8,t[r]=a,r+8}M.prototype.writeBigUInt64LE=$r(function(e,r=0){return M1(this,e,r,BigInt(0),BigInt("0xffffffffffffffff"))});M.prototype.writeBigUInt64BE=$r(function(e,r=0){return $1(this,e,r,BigInt(0),BigInt("0xffffffffffffffff"))});M.prototype.writeIntLE=function(e,r,o,i){if(e=+e,r=r>>>0,!i){let c=Math.pow(2,8*o-1);ut(this,e,r,o,c-1,-c)}let n=0,a=1,s=0;for(this[r]=e&255;++n<o&&(a*=256);)e<0&&s===0&&this[r+n-1]!==0&&(s=1),this[r+n]=(e/a>>0)-s&255;return r+o};M.prototype.writeIntBE=function(e,r,o,i){if(e=+e,r=r>>>0,!i){let c=Math.pow(2,8*o-1);ut(this,e,r,o,c-1,-c)}let n=o-1,a=1,s=0;for(this[r+n]=e&255;--n>=0&&(a*=256);)e<0&&s===0&&this[r+n+1]!==0&&(s=1),this[r+n]=(e/a>>0)-s&255;return r+o};M.prototype.writeInt8=function(e,r,o){return e=+e,r=r>>>0,o||ut(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1};M.prototype.writeInt16LE=function(e,r,o){return e=+e,r=r>>>0,o||ut(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2};M.prototype.writeInt16BE=function(e,r,o){return e=+e,r=r>>>0,o||ut(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2};M.prototype.writeInt32LE=function(e,r,o){return e=+e,r=r>>>0,o||ut(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4};M.prototype.writeInt32BE=function(e,r,o){return e=+e,r=r>>>0,o||ut(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};M.prototype.writeBigInt64LE=$r(function(e,r=0){return M1(this,e,r,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});M.prototype.writeBigInt64BE=$r(function(e,r=0){return $1(this,e,r,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function U1(t,e,r,o,i,n){if(r+o>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function B1(t,e,r,o,i){return e=+e,r=r>>>0,i||U1(t,e,r,4,34028234663852886e22,-34028234663852886e22),Do.write(t,e,r,o,23,4),r+4}M.prototype.writeFloatLE=function(e,r,o){return B1(this,e,r,!0,o)};M.prototype.writeFloatBE=function(e,r,o){return B1(this,e,r,!1,o)};function D1(t,e,r,o,i){return e=+e,r=r>>>0,i||U1(t,e,r,8,17976931348623157e292,-17976931348623157e292),Do.write(t,e,r,o,52,8),r+8}M.prototype.writeDoubleLE=function(e,r,o){return D1(this,e,r,!0,o)};M.prototype.writeDoubleBE=function(e,r,o){return D1(this,e,r,!1,o)};M.prototype.copy=function(e,r,o,i){if(!M.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!i&&i!==0&&(i=this.length),r>=e.length&&(r=e.length),r||(r=0),i>0&&i<o&&(i=o),i===o||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-r<i-o&&(i=e.length-r+o);let n=i-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,o,i):Uint8Array.prototype.set.call(e,this.subarray(o,i),r),n};M.prototype.fill=function(e,r,o,i){if(typeof e=="string"){if(typeof r=="string"?(i=r,r=0,o=this.length):typeof o=="string"&&(i=o,o=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!M.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(e.length===1){let a=e.charCodeAt(0);(i==="utf8"&&a<128||i==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<o)throw new RangeError("Out of range index");if(o<=r)return this;r=r>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);let n;if(typeof e=="number")for(n=r;n<o;++n)this[n]=e;else{let a=M.isBuffer(e)?e:M.from(e,i),s=a.length;if(s===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(n=0;n<o-r;++n)this[n+r]=a[n%s]}return this};var Bo={};function ns(t,e,r){Bo[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(i){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:i,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}ns("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);ns("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError);ns("ERR_OUT_OF_RANGE",function(t,e,r){let o=`The value of "${t}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>2**32?i=R1(String(r)):typeof r=="bigint"&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=R1(i)),i+="n"),o+=` It must be ${e}. Received ${i}`,o},RangeError);function R1(t){let e="",r=t.length,o=t[0]==="-"?1:0;for(;r>=o+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function cd(t,e,r){jo(e,"offset"),(t[e]===void 0||t[e+r]===void 0)&&ki(e,t.length-(r+1))}function j1(t,e,r,o,i,n){if(t>r||t<e){let a=typeof e=="bigint"?"n":"",s;throw n>3?e===0||e===BigInt(0)?s=`>= 0${a} and < 2${a} ** ${(n+1)*8}${a}`:s=`>= -(2${a} ** ${(n+1)*8-1}${a}) and < 2 ** ${(n+1)*8-1}${a}`:s=`>= ${e}${a} and <= ${r}${a}`,new Bo.ERR_OUT_OF_RANGE("value",s,t)}cd(o,i,n)}function jo(t,e){if(typeof t!="number")throw new Bo.ERR_INVALID_ARG_TYPE(e,"number",t)}function ki(t,e,r){throw Math.floor(t)!==t?(jo(t,r),new Bo.ERR_OUT_OF_RANGE(r||"offset","an integer",t)):e<0?new Bo.ERR_BUFFER_OUT_OF_BOUNDS:new Bo.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}var ud=/[^+/0-9A-Za-z-_]/g;function pd(t){if(t=t.split("=")[0],t=t.trim().replace(ud,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function rs(t,e){e=e||1/0;let r,o=t.length,i=null,n=[];for(let a=0;a<o;++a){if(r=t.charCodeAt(a),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&n.push(239,191,189);continue}else if(a+1===o){(e-=3)>-1&&n.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&n.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&n.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;n.push(r)}else if(r<2048){if((e-=2)<0)break;n.push(r>>6|192,r&63|128)}else if(r<65536){if((e-=3)<0)break;n.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((e-=4)<0)break;n.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return n}function dd(t){let e=[];for(let r=0;r<t.length;++r)e.push(t.charCodeAt(r)&255);return e}function fd(t,e){let r,o,i,n=[];for(let a=0;a<t.length&&!((e-=2)<0);++a)r=t.charCodeAt(a),o=r>>8,i=r%256,n.push(i),n.push(o);return n}function F1(t){return Qa.toByteArray(pd(t))}function On(t,e,r,o){let i;for(i=0;i<o&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function Yt(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function as(t){return t!==t}var hd=function(){let t="0123456789abcdef",e=new Array(256);for(let r=0;r<16;++r){let o=r*16;for(let i=0;i<16;++i)e[o+i]=t[r]+t[i]}return e}();function $r(t){return typeof BigInt>"u"?md:t}function md(){throw new Error("BigInt not supported")}});var fu=tr((qk,du)=>{"use strict";function If(t){try{return JSON.stringify(t)}catch{return'"[Circular]"'}}du.exports=Nf;function Nf(t,e,r){var o=r&&r.stringify||If,i=1;if(typeof t=="object"&&t!==null){var n=e.length+i;if(n===1)return t;var a=new Array(n);a[0]=o(t);for(var s=1;s<n;s++)a[s]=o(e[s]);return a.join(" ")}if(typeof t!="string")return t;var c=e.length;if(c===0)return t;for(var x="",S=1-i,E=-1,Y=t&&t.length||0,j=0;j<Y;){if(t.charCodeAt(j)===37&&j+1<Y){switch(E=E>-1?E:0,t.charCodeAt(j+1)){case 100:case 102:if(S>=c||e[S]==null)break;E<j&&(x+=t.slice(E,j)),x+=Number(e[S]),E=j+2,j++;break;case 105:if(S>=c||e[S]==null)break;E<j&&(x+=t.slice(E,j)),x+=Math.floor(Number(e[S])),E=j+2,j++;break;case 79:case 111:case 106:if(S>=c||e[S]===void 0)break;E<j&&(x+=t.slice(E,j));var J=typeof e[S];if(J==="string"){x+="'"+e[S]+"'",E=j+2,j++;break}if(J==="function"){x+=e[S].name||"<anonymous>",E=j+2,j++;break}x+=o(e[S]),E=j+2,j++;break;case 115:if(S>=c)break;E<j&&(x+=t.slice(E,j)),x+=String(e[S]),E=j+2,j++;break;case 37:E<j&&(x+=t.slice(E,j)),x+="%",E=j+2,j++,S--;break}++S}++j}return E===-1?t:(E<Y&&(x+=t.slice(E)),x)}});var As=tr((Yk,wu)=>{"use strict";var hu=fu();wu.exports=Kt;var $i=Ff().console||{},Of={mapHttpRequest:Vn,mapHttpResponse:Vn,wrapRequestSerializer:Es,wrapResponseSerializer:Es,wrapErrorSerializer:Es,req:Vn,res:Vn,err:Uf};function Pf(t,e){return Array.isArray(t)?t.filter(function(o){return o!=="!stdSerializers.err"}):t===!0?Object.keys(e):!1}function Kt(t){t=t||{},t.browser=t.browser||{};let e=t.browser.transmit;if(e&&typeof e.send!="function")throw Error("pino: transmit option must have a send function");let r=t.browser.write||$i;t.browser.write&&(t.browser.asObject=!0);let o=t.serializers||{},i=Pf(t.browser.serialize,o),n=t.browser.serialize;Array.isArray(t.browser.serialize)&&t.browser.serialize.indexOf("!stdSerializers.err")>-1&&(n=!1);let a=["error","fatal","warn","info","debug","trace"];typeof r=="function"&&(r.error=r.fatal=r.warn=r.info=r.debug=r.trace=r),t.enabled===!1&&(t.level="silent");let s=t.level||"info",c=Object.create(r);c.log||(c.log=Ui),Object.defineProperty(c,"levelVal",{get:S}),Object.defineProperty(c,"level",{get:E,set:Y});let x={transmit:e,serialize:i,asObject:t.browser.asObject,levels:a,timestamp:Bf(t)};c.levels=Kt.levels,c.level=s,c.setMaxListeners=c.getMaxListeners=c.emit=c.addListener=c.on=c.prependListener=c.once=c.prependOnceListener=c.removeListener=c.removeAllListeners=c.listeners=c.listenerCount=c.eventNames=c.write=c.flush=Ui,c.serializers=o,c._serialize=i,c._stdErrSerialize=n,c.child=j,e&&(c._logEvent=Ss());function S(){return this.level==="silent"?1/0:this.levels.values[this.level]}function E(){return this._level}function Y(J){if(J!=="silent"&&!this.levels.values[J])throw Error("unknown level "+J);this._level=J,Wo(x,c,"error","log"),Wo(x,c,"fatal","error"),Wo(x,c,"warn","error"),Wo(x,c,"info","log"),Wo(x,c,"debug","log"),Wo(x,c,"trace","log")}function j(J,fe){if(!J)throw new Error("missing bindings for child Pino");fe=fe||{},i&&J.serializers&&(fe.serializers=J.serializers);let te=fe.serializers;if(i&&te){var xe=Object.assign({},o,te),$=t.browser.serialize===!0?Object.keys(xe):i;delete J.serializers,Gn([J],$,xe,this._stdErrSerialize)}function he(ee){this._childLevel=(ee._childLevel|0)+1,this.error=Vo(ee,J,"error"),this.fatal=Vo(ee,J,"fatal"),this.warn=Vo(ee,J,"warn"),this.info=Vo(ee,J,"info"),this.debug=Vo(ee,J,"debug"),this.trace=Vo(ee,J,"trace"),xe&&(this.serializers=xe,this._serialize=$),e&&(this._logEvent=Ss([].concat(ee._logEvent.bindings,J)))}return he.prototype=this,new he(this)}return c}Kt.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}};Kt.stdSerializers=Of;Kt.stdTimeFunctions=Object.assign({},{nullTime:mu,epochTime:gu,unixTime:Df,isoTime:jf});function Wo(t,e,r,o){let i=Object.getPrototypeOf(e);e[r]=e.levelVal>e.levels.values[r]?Ui:i[r]?i[r]:$i[r]||$i[o]||Ui,Lf(t,e,r)}function Lf(t,e,r){!t.transmit&&e[r]===Ui||(e[r]=function(o){return function(){let n=t.timestamp(),a=new Array(arguments.length),s=Object.getPrototypeOf&&Object.getPrototypeOf(this)===$i?$i:this;for(var c=0;c<a.length;c++)a[c]=arguments[c];if(t.serialize&&!t.asObject&&Gn(a,this._serialize,this.serializers,this._stdErrSerialize),t.asObject?o.call(s,Mf(this,r,a,n)):o.apply(s,a),t.transmit){let x=t.transmit.level||e.level,S=Kt.levels.values[x],E=Kt.levels.values[r];if(E<S)return;$f(this,{ts:n,methodLevel:r,methodValue:E,transmitLevel:x,transmitValue:Kt.levels.values[t.transmit.level||e.level],send:t.transmit.send,val:e.levelVal},a)}}}(e[r]))}function Mf(t,e,r,o){t._serialize&&Gn(r,t._serialize,t.serializers,t._stdErrSerialize);let i=r.slice(),n=i[0],a={};o&&(a.time=o),a.level=Kt.levels.values[e];let s=(t._childLevel|0)+1;if(s<1&&(s=1),n!==null&&typeof n=="object"){for(;s--&&typeof i[0]=="object";)Object.assign(a,i.shift());n=i.length?hu(i.shift(),i):void 0}else typeof n=="string"&&(n=hu(i.shift(),i));return n!==void 0&&(a.msg=n),a}function Gn(t,e,r,o){for(let i in t)if(o&&t[i]instanceof Error)t[i]=Kt.stdSerializers.err(t[i]);else if(typeof t[i]=="object"&&!Array.isArray(t[i]))for(let n in t[i])e&&e.indexOf(n)>-1&&n in r&&(t[i][n]=r[n](t[i][n]))}function Vo(t,e,r){return function(){let o=new Array(1+arguments.length);o[0]=e;for(var i=1;i<o.length;i++)o[i]=arguments[i-1];return t[r].apply(this,o)}}function $f(t,e,r){let o=e.send,i=e.ts,n=e.methodLevel,a=e.methodValue,s=e.val,c=t._logEvent.bindings;Gn(r,t._serialize||Object.keys(t.serializers),t.serializers,t._stdErrSerialize===void 0?!0:t._stdErrSerialize),t._logEvent.ts=i,t._logEvent.messages=r.filter(function(x){return c.indexOf(x)===-1}),t._logEvent.level.label=n,t._logEvent.level.value=a,o(n,t._logEvent,s),t._logEvent=Ss(c)}function Ss(t){return{ts:0,messages:[],bindings:t||[],level:{label:"",value:0}}}function Uf(t){let e={type:t.constructor.name,msg:t.message,stack:t.stack};for(let r in t)e[r]===void 0&&(e[r]=t[r]);return e}function Bf(t){return typeof t.timestamp=="function"?t.timestamp:t.timestamp===!1?mu:gu}function Vn(){return{}}function Es(t){return t}function Ui(){}function mu(){return!1}function gu(){return Date.now()}function Df(){return Math.round(Date.now()/1e3)}function jf(){return new Date(Date.now()).toISOString()}function Ff(){function t(e){return typeof e<"u"&&e}try{return typeof globalThis<"u"||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch{return t(self)||t(window)||t(this)||{}}}});var Gi=globalThis,qi=Gi.ShadowRoot&&(Gi.ShadyCSS===void 0||Gi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oa=Symbol(),js=new WeakMap,Xo=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==oa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(qi&&e===void 0){let o=r!==void 0&&r.length===1;o&&(e=js.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&js.set(r,e))}return e}toString(){return this.cssText}},st=t=>new Xo(typeof t=="string"?t:t+"",void 0,oa),A=(t,...e)=>{let r=t.length===1?t[0]:e.reduce((o,i,n)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new Xo(r,t,oa)},ia=(t,e)=>{if(qi)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let o=document.createElement("style"),i=Gi.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,t.appendChild(o)}},Yi=qi?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let o of e.cssRules)r+=o.cssText;return st(r)})(t):t;var{is:Vu,defineProperty:Gu,getOwnPropertyDescriptor:qu,getOwnPropertyNames:Yu,getOwnPropertySymbols:Ku,getPrototypeOf:Ju}=Object,Ki=globalThis,Fs=Ki.trustedTypes,Xu=Fs?Fs.emptyScript:"",Qu=Ki.reactiveElementPolyfillSupport,Qo=(t,e)=>t,ei={toAttribute(t,e){switch(e){case Boolean:t=t?Xu:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Ji=(t,e)=>!Vu(t,e),zs={attribute:!0,type:String,converter:ei,reflect:!1,hasChanged:Ji};Symbol.metadata??=Symbol("metadata"),Ki.litPropertyMetadata??=new WeakMap;var rr=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=zs){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){let o=Symbol(),i=this.getPropertyDescriptor(e,o,r);i!==void 0&&Gu(this.prototype,e,i)}}static getPropertyDescriptor(e,r,o){let{get:i,set:n}=qu(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return i?.call(this)},set(a){let s=i?.call(this);n.call(this,a),this.requestUpdate(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??zs}static _$Ei(){if(this.hasOwnProperty(Qo("elementProperties")))return;let e=Ju(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Qo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Qo("properties"))){let r=this.properties,o=[...Yu(r),...Ku(r)];for(let i of o)this.createProperty(i,r[i])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[o,i]of r)this.elementProperties.set(o,i)}this._$Eh=new Map;for(let[r,o]of this.elementProperties){let i=this._$Eu(r,o);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let i of o)r.unshift(Yi(i))}else e!==void 0&&r.push(Yi(e));return r}static _$Eu(e,r){let o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ia(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$EC(e,r){let o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(i!==void 0&&o.reflect===!0){let n=(o.converter?.toAttribute!==void 0?o.converter:ei).toAttribute(r,o.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,r){let o=this.constructor,i=o._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let n=o.getPropertyOptions(i),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:ei;this._$Em=i,this[i]=a.fromAttribute(r,n.type),this._$Em=null}}requestUpdate(e,r,o){if(e!==void 0){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??Ji)(this[e],r))return;this.P(e,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,o){this._$AL.has(e)||this._$AL.set(e,r),o.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}_$ET(){return L(this,null,function*(){this.isUpdatePending=!0;try{yield this._$ES}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[i,n]of o)n.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],n)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(r=>this._$EC(r,this[r])),this._$EU()}updated(e){}firstUpdated(e){}};rr.elementStyles=[],rr.shadowRootOptions={mode:"open"},rr[Qo("elementProperties")]=new Map,rr[Qo("finalized")]=new Map,Qu?.({ReactiveElement:rr}),(Ki.reactiveElementVersions??=[]).push("2.0.4");var aa=globalThis,Xi=aa.trustedTypes,Zs=Xi?Xi.createPolicy("lit-html",{createHTML:t=>t}):void 0,sa="$lit$",or=`lit$${Math.random().toFixed(9).slice(2)}$`,la="?"+or,ep=`<${la}>`,zr=document,ri=()=>zr.createComment(""),oi=t=>t===null||typeof t!="object"&&typeof t!="function",ca=Array.isArray,Ys=t=>ca(t)||typeof t?.[Symbol.iterator]=="function",na=`[ 	
\f\r]`,ti=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Hs=/-->/g,Ws=/>/g,jr=RegExp(`>|${na}(?:([^\\s"'>=/]+)(${na}*=${na}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vs=/'/g,Gs=/"/g,Ks=/^(?:script|style|textarea|title)$/i,ua=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),f=ua(1),b=ua(2),bh=ua(3),ir=Symbol.for("lit-noChange"),Le=Symbol.for("lit-nothing"),qs=new WeakMap,Fr=zr.createTreeWalker(zr,129);function Js(t,e){if(!ca(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zs!==void 0?Zs.createHTML(e):e}var Xs=(t,e)=>{let r=t.length-1,o=[],i,n=e===2?"<svg>":e===3?"<math>":"",a=ti;for(let s=0;s<r;s++){let c=t[s],x,S,E=-1,Y=0;for(;Y<c.length&&(a.lastIndex=Y,S=a.exec(c),S!==null);)Y=a.lastIndex,a===ti?S[1]==="!--"?a=Hs:S[1]!==void 0?a=Ws:S[2]!==void 0?(Ks.test(S[2])&&(i=RegExp("</"+S[2],"g")),a=jr):S[3]!==void 0&&(a=jr):a===jr?S[0]===">"?(a=i??ti,E=-1):S[1]===void 0?E=-2:(E=a.lastIndex-S[2].length,x=S[1],a=S[3]===void 0?jr:S[3]==='"'?Gs:Vs):a===Gs||a===Vs?a=jr:a===Hs||a===Ws?a=ti:(a=jr,i=void 0);let j=a===jr&&t[s+1].startsWith("/>")?" ":"";n+=a===ti?c+ep:E>=0?(o.push(x),c.slice(0,E)+sa+c.slice(E)+or+j):c+or+(E===-2?s:j)}return[Js(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]},ii=class t{constructor({strings:e,_$litType$:r},o){let i;this.parts=[];let n=0,a=0,s=e.length-1,c=this.parts,[x,S]=Xs(e,r);if(this.el=t.createElement(x,o),Fr.currentNode=this.el.content,r===2||r===3){let E=this.el.content.firstChild;E.replaceWith(...E.childNodes)}for(;(i=Fr.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let E of i.getAttributeNames())if(E.endsWith(sa)){let Y=S[a++],j=i.getAttribute(E).split(or),J=/([.?@])?(.*)/.exec(Y);c.push({type:1,index:n,name:J[2],strings:j,ctor:J[1]==="."?en:J[1]==="?"?tn:J[1]==="@"?rn:Hr}),i.removeAttribute(E)}else E.startsWith(or)&&(c.push({type:6,index:n}),i.removeAttribute(E));if(Ks.test(i.tagName)){let E=i.textContent.split(or),Y=E.length-1;if(Y>0){i.textContent=Xi?Xi.emptyScript:"";for(let j=0;j<Y;j++)i.append(E[j],ri()),Fr.nextNode(),c.push({type:2,index:++n});i.append(E[Y],ri())}}}else if(i.nodeType===8)if(i.data===la)c.push({type:2,index:n});else{let E=-1;for(;(E=i.data.indexOf(or,E+1))!==-1;)c.push({type:7,index:n}),E+=or.length-1}n++}}static createElement(e,r){let o=zr.createElement("template");return o.innerHTML=e,o}};function Zr(t,e,r=t,o){if(e===ir)return e;let i=o!==void 0?r._$Co?.[o]:r._$Cl,n=oi(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,r,o)),o!==void 0?(r._$Co??=[])[o]=i:r._$Cl=i),i!==void 0&&(e=Zr(t,i._$AS(t,e.values),i,o)),e}var Qi=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:r},parts:o}=this._$AD,i=(e?.creationScope??zr).importNode(r,!0);Fr.currentNode=i;let n=Fr.nextNode(),a=0,s=0,c=o[0];for(;c!==void 0;){if(a===c.index){let x;c.type===2?x=new wo(n,n.nextSibling,this,e):c.type===1?x=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(x=new on(n,this,e)),this._$AV.push(x),c=o[++s]}a!==c?.index&&(n=Fr.nextNode(),a++)}return Fr.currentNode=zr,i}p(e){let r=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}},wo=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,o,i){this.type=2,this._$AH=Le,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Zr(this,e,r),oi(e)?e===Le||e==null||e===""?(this._$AH!==Le&&this._$AR(),this._$AH=Le):e!==this._$AH&&e!==ir&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ys(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Le&&oi(this._$AH)?this._$AA.nextSibling.data=e:this.T(zr.createTextNode(e)),this._$AH=e}$(e){let{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=ii.createElement(Js(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(r);else{let n=new Qi(i,this),a=n.u(this.options);n.p(r),this.T(a),this._$AH=n}}_$AC(e){let r=qs.get(e.strings);return r===void 0&&qs.set(e.strings,r=new ii(e)),r}k(e){ca(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,o,i=0;for(let n of e)i===r.length?r.push(o=new t(this.O(ri()),this.O(ri()),this,this.options)):o=r[i],o._$AI(n),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){let o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Hr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,i,n){this.type=1,this._$AH=Le,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Le}_$AI(e,r=this,o,i){let n=this.strings,a=!1;if(n===void 0)e=Zr(this,e,r,0),a=!oi(e)||e!==this._$AH&&e!==ir,a&&(this._$AH=e);else{let s=e,c,x;for(e=n[0],c=0;c<n.length-1;c++)x=Zr(this,s[o+c],r,c),x===ir&&(x=this._$AH[c]),a||=!oi(x)||x!==this._$AH[c],x===Le?e=Le:e!==Le&&(e+=(x??"")+n[c+1]),this._$AH[c]=x}a&&!i&&this.j(e)}j(e){e===Le?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},en=class extends Hr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Le?void 0:e}},tn=class extends Hr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Le)}},rn=class extends Hr{constructor(e,r,o,i,n){super(e,r,o,i,n),this.type=5}_$AI(e,r=this){if((e=Zr(this,e,r,0)??Le)===ir)return;let o=this._$AH,i=e===Le&&o!==Le||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==Le&&(o===Le||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},on=class{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Zr(this,e)}},Qs={M:sa,P:or,A:la,C:1,L:Xs,R:Qi,D:Ys,V:Zr,I:wo,H:Hr,N:tn,U:rn,B:en,F:on},tp=aa.litHtmlPolyfillSupport;tp?.(ii,wo),(aa.litHtmlVersions??=[]).push("3.2.1");var el=(t,e,r)=>{let o=r?.renderBefore??e,i=o._$litPart$;if(i===void 0){let n=r?.renderBefore??null;o._$litPart$=i=new wo(e.insertBefore(ri(),n),n,void 0,r??{})}return i._$AI(t),i};var T=class extends rr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=el(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ir}};T._$litElement$=!0,T.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:T});var rp=globalThis.litElementPolyfillSupport;rp?.({LitElement:T});(globalThis.litElementVersions??=[]).push("4.1.1");var Mh=b`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4189">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 0L139.008 -0.00694413L139.001 -1H138.008V0ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM189.992 0V-1H188.999L188.992 -0.00694413L189.992 0ZM188.914 10.1564L189.854 10.4984V10.4984L188.914 10.1564ZM178.156 20.9145L177.814 19.9748V19.9748L178.156 20.9145ZM149.844 20.9145L150.186 19.9748V19.9748L149.844 20.9145ZM139.086 10.1564L138.146 10.4984V10.4984L139.086 10.1564ZM40 1H138.008V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM288 99H40V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM189.992 1H288V-1H189.992V1ZM188.992 -0.00694413C188.958 4.90792 188.778 7.60788 187.975 9.81434L189.854 10.4984C190.793 7.9177 190.958 4.87452 190.992 0.00694413L188.992 -0.00694413ZM187.975 9.81434C186.256 14.5364 182.536 18.2561 177.814 19.9748L178.498 21.8542C183.776 19.9333 187.933 15.7759 189.854 10.4984L187.975 9.81434ZM177.814 19.9748C175.039 20.9848 171.536 21 164 21V23C171.362 23 175.308 23.0152 178.498 21.8542L177.814 19.9748ZM164 21C156.464 21 152.961 20.9848 150.186 19.9748L149.502 21.8542C152.692 23.0152 156.638 23 164 23V21ZM150.186 19.9748C145.464 18.2561 141.744 14.5364 140.025 9.81434L138.146 10.4984C140.067 15.7759 144.224 19.9333 149.502 21.8542L150.186 19.9748ZM140.025 9.81434C139.222 7.60788 139.042 4.90792 139.008 -0.00694413L137.008 0.00694413C137.042 4.87452 137.207 7.9177 138.146 10.4984L140.025 9.81434Z"
    mask="url(#path-1-inside-1_18299_4189)"
  />
</svg>`;var Bh=b`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4168">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 100V101H139.001L139.008 100.007L138.008 100ZM139.086 89.8436L138.146 89.5016L139.086 89.8436ZM149.844 79.0855L150.186 80.0252L149.844 79.0855ZM178.156 79.0855L177.814 80.0252L178.156 79.0855ZM188.914 89.8436L189.854 89.5016L188.914 89.8436ZM189.992 100L188.992 100.007L188.999 101H189.992V100ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM138.008 99H40V101H138.008V99ZM139.008 100.007C139.042 95.0921 139.222 92.3921 140.025 90.1857L138.146 89.5016C137.207 92.0823 137.042 95.1255 137.008 99.9931L139.008 100.007ZM140.025 90.1857C141.744 85.4636 145.464 81.7439 150.186 80.0252L149.502 78.1458C144.224 80.0667 140.067 84.2241 138.146 89.5016L140.025 90.1857ZM150.186 80.0252C152.961 79.0152 156.464 79 164 79V77C156.638 77 152.692 76.9848 149.502 78.1458L150.186 80.0252ZM164 79C171.536 79 175.039 79.0152 177.814 80.0252L178.498 78.1458C175.308 76.9848 171.362 77 164 77V79ZM177.814 80.0252C182.536 81.7439 186.256 85.4636 187.975 90.1857L189.854 89.5016C187.933 84.2241 183.776 80.0667 178.498 78.1458L177.814 80.0252ZM187.975 90.1857C188.778 92.3921 188.958 95.0921 188.992 100.007L190.992 99.9931C190.958 95.1255 190.793 92.0823 189.854 89.5016L187.975 90.1857ZM288 99H189.992V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM40 1H288V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497Z"
    mask="url(#path-1-inside-1_18299_4168)"
  />
</svg>`;var Wr=_r(tl(),1),nl=_r(rl(),1),al=_r(ol(),1),sl=_r(il(),1);Wr.default.extend(al.default);Wr.default.extend(sl.default);var op=W(N({},nl.default),{name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});Wr.default.locale("en-web3-modal",op);var ya={getYear(t=new Date().toISOString()){return(0,Wr.default)(t).year()},getRelativeDateFromNow(t){return(0,Wr.default)(t).locale("en-web3-modal").fromNow(!0)},formatDate(t,e="DD MMM"){return(0,Wr.default)(t).format(e)}};var ni={caipNetworkIdToNumber(t){return t?Number(t.split(":")[1]):void 0},parseEvmChainId(t){return typeof t=="string"?this.caipNetworkIdToNumber(t):t}};var ip=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,xa=Math.ceil,bt=Math.floor,lt="[BigNumber Error] ",ll=lt+"Number primitive has more than 15 significant digits: ",Lt=1e14,ie=14,ba=9007199254740991,Ca=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],Er=1e7,Ge=1e9;function cl(t){var e,r,o,i=$.prototype={constructor:$,toString:null,valueOf:null},n=new $(1),a=20,s=4,c=-7,x=21,S=-1e7,E=1e7,Y=!1,j=1,J=0,fe={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xA0",suffix:""},te="0123456789abcdefghijklmnopqrstuvwxyz",xe=!0;function $(p,d){var w,R,v,g,y,h,m,_,C=this;if(!(C instanceof $))return new $(p,d);if(d==null){if(p&&p._isBigNumber===!0){C.s=p.s,!p.c||p.e>E?C.c=C.e=null:p.e<S?C.c=[C.e=0]:(C.e=p.e,C.c=p.c.slice());return}if((h=typeof p=="number")&&p*0==0){if(C.s=1/p<0?(p=-p,-1):1,p===~~p){for(g=0,y=p;y>=10;y/=10,g++);g>E?C.c=C.e=null:(C.e=g,C.c=[p]);return}_=String(p)}else{if(!ip.test(_=String(p)))return o(C,_,h);C.s=_.charCodeAt(0)==45?(_=_.slice(1),-1):1}(g=_.indexOf("."))>-1&&(_=_.replace(".","")),(y=_.search(/e/i))>0?(g<0&&(g=y),g+=+_.slice(y+1),_=_.substring(0,y)):g<0&&(g=_.length)}else{if(Me(d,2,te.length,"Base"),d==10&&xe)return C=new $(p),Fe(C,a+C.e+1,s);if(_=String(p),h=typeof p=="number"){if(p*0!=0)return o(C,_,h,d);if(C.s=1/p<0?(_=_.slice(1),-1):1,$.DEBUG&&_.replace(/^0\.0*|\./,"").length>15)throw Error(ll+p)}else C.s=_.charCodeAt(0)===45?(_=_.slice(1),-1):1;for(w=te.slice(0,d),g=y=0,m=_.length;y<m;y++)if(w.indexOf(R=_.charAt(y))<0){if(R=="."){if(y>g){g=m;continue}}else if(!v&&(_==_.toUpperCase()&&(_=_.toLowerCase())||_==_.toLowerCase()&&(_=_.toUpperCase()))){v=!0,y=-1,g=0;continue}return o(C,String(p),h,d)}h=!1,_=r(_,d,10,C.s),(g=_.indexOf("."))>-1?_=_.replace(".",""):g=_.length}for(y=0;_.charCodeAt(y)===48;y++);for(m=_.length;_.charCodeAt(--m)===48;);if(_=_.slice(y,++m)){if(m-=y,h&&$.DEBUG&&m>15&&(p>ba||p!==bt(p)))throw Error(ll+C.s*p);if((g=g-y-1)>E)C.c=C.e=null;else if(g<S)C.c=[C.e=0];else{if(C.e=g,C.c=[],y=(g+1)%ie,g<0&&(y+=ie),y<m){for(y&&C.c.push(+_.slice(0,y)),m-=ie;y<m;)C.c.push(+_.slice(y,y+=ie));y=ie-(_=_.slice(y)).length}else y-=m;for(;y--;_+="0");C.c.push(+_)}}else C.c=[C.e=0]}$.clone=cl,$.ROUND_UP=0,$.ROUND_DOWN=1,$.ROUND_CEIL=2,$.ROUND_FLOOR=3,$.ROUND_HALF_UP=4,$.ROUND_HALF_DOWN=5,$.ROUND_HALF_EVEN=6,$.ROUND_HALF_CEIL=7,$.ROUND_HALF_FLOOR=8,$.EUCLID=9,$.config=$.set=function(p){var d,w;if(p!=null)if(typeof p=="object"){if(p.hasOwnProperty(d="DECIMAL_PLACES")&&(w=p[d],Me(w,0,Ge,d),a=w),p.hasOwnProperty(d="ROUNDING_MODE")&&(w=p[d],Me(w,0,8,d),s=w),p.hasOwnProperty(d="EXPONENTIAL_AT")&&(w=p[d],w&&w.pop?(Me(w[0],-Ge,0,d),Me(w[1],0,Ge,d),c=w[0],x=w[1]):(Me(w,-Ge,Ge,d),c=-(x=w<0?-w:w))),p.hasOwnProperty(d="RANGE"))if(w=p[d],w&&w.pop)Me(w[0],-Ge,-1,d),Me(w[1],1,Ge,d),S=w[0],E=w[1];else if(Me(w,-Ge,Ge,d),w)S=-(E=w<0?-w:w);else throw Error(lt+d+" cannot be zero: "+w);if(p.hasOwnProperty(d="CRYPTO"))if(w=p[d],w===!!w)if(w)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))Y=w;else throw Y=!w,Error(lt+"crypto unavailable");else Y=w;else throw Error(lt+d+" not true or false: "+w);if(p.hasOwnProperty(d="MODULO_MODE")&&(w=p[d],Me(w,0,9,d),j=w),p.hasOwnProperty(d="POW_PRECISION")&&(w=p[d],Me(w,0,Ge,d),J=w),p.hasOwnProperty(d="FORMAT"))if(w=p[d],typeof w=="object")fe=w;else throw Error(lt+d+" not an object: "+w);if(p.hasOwnProperty(d="ALPHABET"))if(w=p[d],typeof w=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(w))xe=w.slice(0,10)=="0123456789",te=w;else throw Error(lt+d+" invalid: "+w)}else throw Error(lt+"Object expected: "+p);return{DECIMAL_PLACES:a,ROUNDING_MODE:s,EXPONENTIAL_AT:[c,x],RANGE:[S,E],CRYPTO:Y,MODULO_MODE:j,POW_PRECISION:J,FORMAT:fe,ALPHABET:te}},$.isBigNumber=function(p){if(!p||p._isBigNumber!==!0)return!1;if(!$.DEBUG)return!0;var d,w,R=p.c,v=p.e,g=p.s;e:if({}.toString.call(R)=="[object Array]"){if((g===1||g===-1)&&v>=-Ge&&v<=Ge&&v===bt(v)){if(R[0]===0){if(v===0&&R.length===1)return!0;break e}if(d=(v+1)%ie,d<1&&(d+=ie),String(R[0]).length==d){for(d=0;d<R.length;d++)if(w=R[d],w<0||w>=Lt||w!==bt(w))break e;if(w!==0)return!0}}}else if(R===null&&v===null&&(g===null||g===1||g===-1))return!0;throw Error(lt+"Invalid BigNumber: "+p)},$.maximum=$.max=function(){return ee(arguments,-1)},$.minimum=$.min=function(){return ee(arguments,1)},$.random=function(){var p=9007199254740992,d=Math.random()*p&2097151?function(){return bt(Math.random()*p)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(w){var R,v,g,y,h,m=0,_=[],C=new $(n);if(w==null?w=a:Me(w,0,Ge),y=xa(w/ie),Y)if(crypto.getRandomValues){for(R=crypto.getRandomValues(new Uint32Array(y*=2));m<y;)h=R[m]*131072+(R[m+1]>>>11),h>=9e15?(v=crypto.getRandomValues(new Uint32Array(2)),R[m]=v[0],R[m+1]=v[1]):(_.push(h%1e14),m+=2);m=y/2}else if(crypto.randomBytes){for(R=crypto.randomBytes(y*=7);m<y;)h=(R[m]&31)*281474976710656+R[m+1]*1099511627776+R[m+2]*4294967296+R[m+3]*16777216+(R[m+4]<<16)+(R[m+5]<<8)+R[m+6],h>=9e15?crypto.randomBytes(7).copy(R,m):(_.push(h%1e14),m+=7);m=y/7}else throw Y=!1,Error(lt+"crypto unavailable");if(!Y)for(;m<y;)h=d(),h<9e15&&(_[m++]=h%1e14);for(y=_[--m],w%=ie,y&&w&&(h=Ca[ie-w],_[m]=bt(y/h)*h);_[m]===0;_.pop(),m--);if(m<0)_=[g=0];else{for(g=-1;_[0]===0;_.splice(0,1),g-=ie);for(m=1,h=_[0];h>=10;h/=10,m++);m<ie&&(g-=ie-m)}return C.e=g,C.c=_,C}}(),$.sum=function(){for(var p=1,d=arguments,w=new $(d[0]);p<d.length;)w=w.plus(d[p++]);return w},r=function(){var p="0123456789";function d(w,R,v,g){for(var y,h=[0],m,_=0,C=w.length;_<C;){for(m=h.length;m--;h[m]*=R);for(h[0]+=g.indexOf(w.charAt(_++)),y=0;y<h.length;y++)h[y]>v-1&&(h[y+1]==null&&(h[y+1]=0),h[y+1]+=h[y]/v|0,h[y]%=v)}return h.reverse()}return function(w,R,v,g,y){var h,m,_,C,P,F,z,X,me=w.indexOf("."),Te=a,ce=s;for(me>=0&&(C=J,J=0,w=w.replace(".",""),X=new $(R),F=X.pow(w.length-me),J=C,X.c=d(nr(xt(F.c),F.e,"0"),10,v,p),X.e=X.c.length),z=d(w,R,v,y?(h=te,p):(h=p,te)),_=C=z.length;z[--C]==0;z.pop());if(!z[0])return h.charAt(0);if(me<0?--_:(F.c=z,F.e=_,F.s=g,F=e(F,X,Te,ce,v),z=F.c,P=F.r,_=F.e),m=_+Te+1,me=z[m],C=v/2,P=P||m<0||z[m+1]!=null,P=ce<4?(me!=null||P)&&(ce==0||ce==(F.s<0?3:2)):me>C||me==C&&(ce==4||P||ce==6&&z[m-1]&1||ce==(F.s<0?8:7)),m<1||!z[0])w=P?nr(h.charAt(1),-Te,h.charAt(0)):h.charAt(0);else{if(z.length=m,P)for(--v;++z[--m]>v;)z[m]=0,m||(++_,z=[1].concat(z));for(C=z.length;!z[--C];);for(me=0,w="";me<=C;w+=h.charAt(z[me++]));w=nr(w,_,h.charAt(0))}return w}}(),e=function(){function p(R,v,g){var y,h,m,_,C=0,P=R.length,F=v%Er,z=v/Er|0;for(R=R.slice();P--;)m=R[P]%Er,_=R[P]/Er|0,y=z*m+_*F,h=F*m+y%Er*Er+C,C=(h/g|0)+(y/Er|0)+z*_,R[P]=h%g;return C&&(R=[C].concat(R)),R}function d(R,v,g,y){var h,m;if(g!=y)m=g>y?1:-1;else for(h=m=0;h<g;h++)if(R[h]!=v[h]){m=R[h]>v[h]?1:-1;break}return m}function w(R,v,g,y){for(var h=0;g--;)R[g]-=h,h=R[g]<v[g]?1:0,R[g]=h*y+R[g]-v[g];for(;!R[0]&&R.length>1;R.splice(0,1));}return function(R,v,g,y,h){var m,_,C,P,F,z,X,me,Te,ce,ge,Pe,We,vt,er,rt,Ko,yt=R.s==v.s?1:-1,ot=R.c,Ue=v.c;if(!ot||!ot[0]||!Ue||!Ue[0])return new $(!R.s||!v.s||(ot?Ue&&ot[0]==Ue[0]:!Ue)?NaN:ot&&ot[0]==0||!Ue?yt*0:yt/0);for(me=new $(yt),Te=me.c=[],_=R.e-v.e,yt=g+_+1,h||(h=Lt,_=Ct(R.e/ie)-Ct(v.e/ie),yt=yt/ie|0),C=0;Ue[C]==(ot[C]||0);C++);if(Ue[C]>(ot[C]||0)&&_--,yt<0)Te.push(1),P=!0;else{for(vt=ot.length,rt=Ue.length,C=0,yt+=2,F=bt(h/(Ue[0]+1)),F>1&&(Ue=p(Ue,F,h),ot=p(ot,F,h),rt=Ue.length,vt=ot.length),We=rt,ce=ot.slice(0,rt),ge=ce.length;ge<rt;ce[ge++]=0);Ko=Ue.slice(),Ko=[0].concat(Ko),er=Ue[0],Ue[1]>=h/2&&er++;do{if(F=0,m=d(Ue,ce,rt,ge),m<0){if(Pe=ce[0],rt!=ge&&(Pe=Pe*h+(ce[1]||0)),F=bt(Pe/er),F>1)for(F>=h&&(F=h-1),z=p(Ue,F,h),X=z.length,ge=ce.length;d(z,ce,X,ge)==1;)F--,w(z,rt<X?Ko:Ue,X,h),X=z.length,m=1;else F==0&&(m=F=1),z=Ue.slice(),X=z.length;if(X<ge&&(z=[0].concat(z)),w(ce,z,ge,h),ge=ce.length,m==-1)for(;d(Ue,ce,rt,ge)<1;)F++,w(ce,rt<ge?Ko:Ue,ge,h),ge=ce.length}else m===0&&(F++,ce=[0]);Te[C++]=F,ce[0]?ce[ge++]=ot[We]||0:(ce=[ot[We]],ge=1)}while((We++<vt||ce[0]!=null)&&yt--);P=ce[0]!=null,Te[0]||Te.splice(0,1)}if(h==Lt){for(C=1,yt=Te[0];yt>=10;yt/=10,C++);Fe(me,g+(me.e=C+_*ie-1)+1,y,P)}else me.e=_,me.r=+P;return me}}();function he(p,d,w,R){var v,g,y,h,m;if(w==null?w=s:Me(w,0,8),!p.c)return p.toString();if(v=p.c[0],y=p.e,d==null)m=xt(p.c),m=R==1||R==2&&(y<=c||y>=x)?an(m,y):nr(m,y,"0");else if(p=Fe(new $(p),d,w),g=p.e,m=xt(p.c),h=m.length,R==1||R==2&&(d<=g||g<=c)){for(;h<d;m+="0",h++);m=an(m,g)}else if(d-=y,m=nr(m,g,"0"),g+1>h){if(--d>0)for(m+=".";d--;m+="0");}else if(d+=g-h,d>0)for(g+1==h&&(m+=".");d--;m+="0");return p.s<0&&v?"-"+m:m}function ee(p,d){for(var w,R,v=1,g=new $(p[0]);v<p.length;v++)R=new $(p[v]),(!R.s||(w=Vr(g,R))===d||w===0&&g.s===d)&&(g=R);return g}function De(p,d,w){for(var R=1,v=d.length;!d[--v];d.pop());for(v=d[0];v>=10;v/=10,R++);return(w=R+w*ie-1)>E?p.c=p.e=null:w<S?p.c=[p.e=0]:(p.e=w,p.c=d),p}o=function(){var p=/^(-?)0([xbo])(?=\w[\w.]*$)/i,d=/^([^.]+)\.$/,w=/^\.([^.]+)$/,R=/^-?(Infinity|NaN)$/,v=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(g,y,h,m){var _,C=h?y:y.replace(v,"");if(R.test(C))g.s=isNaN(C)?null:C<0?-1:1;else{if(!h&&(C=C.replace(p,function(P,F,z){return _=(z=z.toLowerCase())=="x"?16:z=="b"?2:8,!m||m==_?F:P}),m&&(_=m,C=C.replace(d,"$1").replace(w,"0.$1")),y!=C))return new $(C,_);if($.DEBUG)throw Error(lt+"Not a"+(m?" base "+m:"")+" number: "+y);g.s=null}g.c=g.e=null}}();function Fe(p,d,w,R){var v,g,y,h,m,_,C,P=p.c,F=Ca;if(P){e:{for(v=1,h=P[0];h>=10;h/=10,v++);if(g=d-v,g<0)g+=ie,y=d,m=P[_=0],C=bt(m/F[v-y-1]%10);else if(_=xa((g+1)/ie),_>=P.length)if(R){for(;P.length<=_;P.push(0));m=C=0,v=1,g%=ie,y=g-ie+1}else break e;else{for(m=h=P[_],v=1;h>=10;h/=10,v++);g%=ie,y=g-ie+v,C=y<0?0:bt(m/F[v-y-1]%10)}if(R=R||d<0||P[_+1]!=null||(y<0?m:m%F[v-y-1]),R=w<4?(C||R)&&(w==0||w==(p.s<0?3:2)):C>5||C==5&&(w==4||R||w==6&&(g>0?y>0?m/F[v-y]:0:P[_-1])%10&1||w==(p.s<0?8:7)),d<1||!P[0])return P.length=0,R?(d-=p.e+1,P[0]=F[(ie-d%ie)%ie],p.e=-d||0):P[0]=p.e=0,p;if(g==0?(P.length=_,h=1,_--):(P.length=_+1,h=F[ie-g],P[_]=y>0?bt(m/F[v-y]%F[y])*h:0),R)for(;;)if(_==0){for(g=1,y=P[0];y>=10;y/=10,g++);for(y=P[0]+=h,h=1;y>=10;y/=10,h++);g!=h&&(p.e++,P[0]==Lt&&(P[0]=1));break}else{if(P[_]+=h,P[_]!=Lt)break;P[_--]=0,h=1}for(g=P.length;P[--g]===0;P.pop());}p.e>E?p.c=p.e=null:p.e<S&&(p.c=[p.e=0])}return p}function at(p){var d,w=p.e;return w===null?p.toString():(d=xt(p.c),d=w<=c||w>=x?an(d,w):nr(d,w,"0"),p.s<0?"-"+d:d)}return i.absoluteValue=i.abs=function(){var p=new $(this);return p.s<0&&(p.s=1),p},i.comparedTo=function(p,d){return Vr(this,new $(p,d))},i.decimalPlaces=i.dp=function(p,d){var w,R,v,g=this;if(p!=null)return Me(p,0,Ge),d==null?d=s:Me(d,0,8),Fe(new $(g),p+g.e+1,d);if(!(w=g.c))return null;if(R=((v=w.length-1)-Ct(this.e/ie))*ie,v=w[v])for(;v%10==0;v/=10,R--);return R<0&&(R=0),R},i.dividedBy=i.div=function(p,d){return e(this,new $(p,d),a,s)},i.dividedToIntegerBy=i.idiv=function(p,d){return e(this,new $(p,d),0,1)},i.exponentiatedBy=i.pow=function(p,d){var w,R,v,g,y,h,m,_,C,P=this;if(p=new $(p),p.c&&!p.isInteger())throw Error(lt+"Exponent not an integer: "+at(p));if(d!=null&&(d=new $(d)),h=p.e>14,!P.c||!P.c[0]||P.c[0]==1&&!P.e&&P.c.length==1||!p.c||!p.c[0])return C=new $(Math.pow(+at(P),h?p.s*(2-nn(p)):+at(p))),d?C.mod(d):C;if(m=p.s<0,d){if(d.c?!d.c[0]:!d.s)return new $(NaN);R=!m&&P.isInteger()&&d.isInteger(),R&&(P=P.mod(d))}else{if(p.e>9&&(P.e>0||P.e<-1||(P.e==0?P.c[0]>1||h&&P.c[1]>=24e7:P.c[0]<8e13||h&&P.c[0]<=9999975e7)))return g=P.s<0&&nn(p)?-0:0,P.e>-1&&(g=1/g),new $(m?1/g:g);J&&(g=xa(J/ie+2))}for(h?(w=new $(.5),m&&(p.s=1),_=nn(p)):(v=Math.abs(+at(p)),_=v%2),C=new $(n);;){if(_){if(C=C.times(P),!C.c)break;g?C.c.length>g&&(C.c.length=g):R&&(C=C.mod(d))}if(v){if(v=bt(v/2),v===0)break;_=v%2}else if(p=p.times(w),Fe(p,p.e+1,1),p.e>14)_=nn(p);else{if(v=+at(p),v===0)break;_=v%2}P=P.times(P),g?P.c&&P.c.length>g&&(P.c.length=g):R&&(P=P.mod(d))}return R?C:(m&&(C=n.div(C)),d?C.mod(d):g?Fe(C,J,s,y):C)},i.integerValue=function(p){var d=new $(this);return p==null?p=s:Me(p,0,8),Fe(d,d.e+1,p)},i.isEqualTo=i.eq=function(p,d){return Vr(this,new $(p,d))===0},i.isFinite=function(){return!!this.c},i.isGreaterThan=i.gt=function(p,d){return Vr(this,new $(p,d))>0},i.isGreaterThanOrEqualTo=i.gte=function(p,d){return(d=Vr(this,new $(p,d)))===1||d===0},i.isInteger=function(){return!!this.c&&Ct(this.e/ie)>this.c.length-2},i.isLessThan=i.lt=function(p,d){return Vr(this,new $(p,d))<0},i.isLessThanOrEqualTo=i.lte=function(p,d){return(d=Vr(this,new $(p,d)))===-1||d===0},i.isNaN=function(){return!this.s},i.isNegative=function(){return this.s<0},i.isPositive=function(){return this.s>0},i.isZero=function(){return!!this.c&&this.c[0]==0},i.minus=function(p,d){var w,R,v,g,y=this,h=y.s;if(p=new $(p,d),d=p.s,!h||!d)return new $(NaN);if(h!=d)return p.s=-d,y.plus(p);var m=y.e/ie,_=p.e/ie,C=y.c,P=p.c;if(!m||!_){if(!C||!P)return C?(p.s=-d,p):new $(P?y:NaN);if(!C[0]||!P[0])return P[0]?(p.s=-d,p):new $(C[0]?y:s==3?-0:0)}if(m=Ct(m),_=Ct(_),C=C.slice(),h=m-_){for((g=h<0)?(h=-h,v=C):(_=m,v=P),v.reverse(),d=h;d--;v.push(0));v.reverse()}else for(R=(g=(h=C.length)<(d=P.length))?h:d,h=d=0;d<R;d++)if(C[d]!=P[d]){g=C[d]<P[d];break}if(g&&(v=C,C=P,P=v,p.s=-p.s),d=(R=P.length)-(w=C.length),d>0)for(;d--;C[w++]=0);for(d=Lt-1;R>h;){if(C[--R]<P[R]){for(w=R;w&&!C[--w];C[w]=d);--C[w],C[R]+=Lt}C[R]-=P[R]}for(;C[0]==0;C.splice(0,1),--_);return C[0]?De(p,C,_):(p.s=s==3?-1:1,p.c=[p.e=0],p)},i.modulo=i.mod=function(p,d){var w,R,v=this;return p=new $(p,d),!v.c||!p.s||p.c&&!p.c[0]?new $(NaN):!p.c||v.c&&!v.c[0]?new $(v):(j==9?(R=p.s,p.s=1,w=e(v,p,0,3),p.s=R,w.s*=R):w=e(v,p,0,j),p=v.minus(w.times(p)),!p.c[0]&&j==1&&(p.s=v.s),p)},i.multipliedBy=i.times=function(p,d){var w,R,v,g,y,h,m,_,C,P,F,z,X,me,Te,ce=this,ge=ce.c,Pe=(p=new $(p,d)).c;if(!ge||!Pe||!ge[0]||!Pe[0])return!ce.s||!p.s||ge&&!ge[0]&&!Pe||Pe&&!Pe[0]&&!ge?p.c=p.e=p.s=null:(p.s*=ce.s,!ge||!Pe?p.c=p.e=null:(p.c=[0],p.e=0)),p;for(R=Ct(ce.e/ie)+Ct(p.e/ie),p.s*=ce.s,m=ge.length,P=Pe.length,m<P&&(X=ge,ge=Pe,Pe=X,v=m,m=P,P=v),v=m+P,X=[];v--;X.push(0));for(me=Lt,Te=Er,v=P;--v>=0;){for(w=0,F=Pe[v]%Te,z=Pe[v]/Te|0,y=m,g=v+y;g>v;)_=ge[--y]%Te,C=ge[y]/Te|0,h=z*_+C*F,_=F*_+h%Te*Te+X[g]+w,w=(_/me|0)+(h/Te|0)+z*C,X[g--]=_%me;X[g]=w}return w?++R:X.splice(0,1),De(p,X,R)},i.negated=function(){var p=new $(this);return p.s=-p.s||null,p},i.plus=function(p,d){var w,R=this,v=R.s;if(p=new $(p,d),d=p.s,!v||!d)return new $(NaN);if(v!=d)return p.s=-d,R.minus(p);var g=R.e/ie,y=p.e/ie,h=R.c,m=p.c;if(!g||!y){if(!h||!m)return new $(v/0);if(!h[0]||!m[0])return m[0]?p:new $(h[0]?R:v*0)}if(g=Ct(g),y=Ct(y),h=h.slice(),v=g-y){for(v>0?(y=g,w=m):(v=-v,w=h),w.reverse();v--;w.push(0));w.reverse()}for(v=h.length,d=m.length,v-d<0&&(w=m,m=h,h=w,d=v),v=0;d;)v=(h[--d]=h[d]+m[d]+v)/Lt|0,h[d]=Lt===h[d]?0:h[d]%Lt;return v&&(h=[v].concat(h),++y),De(p,h,y)},i.precision=i.sd=function(p,d){var w,R,v,g=this;if(p!=null&&p!==!!p)return Me(p,1,Ge),d==null?d=s:Me(d,0,8),Fe(new $(g),p,d);if(!(w=g.c))return null;if(v=w.length-1,R=v*ie+1,v=w[v]){for(;v%10==0;v/=10,R--);for(v=w[0];v>=10;v/=10,R++);}return p&&g.e+1>R&&(R=g.e+1),R},i.shiftedBy=function(p){return Me(p,-ba,ba),this.times("1e"+p)},i.squareRoot=i.sqrt=function(){var p,d,w,R,v,g=this,y=g.c,h=g.s,m=g.e,_=a+4,C=new $("0.5");if(h!==1||!y||!y[0])return new $(!h||h<0&&(!y||y[0])?NaN:y?g:1/0);if(h=Math.sqrt(+at(g)),h==0||h==1/0?(d=xt(y),(d.length+m)%2==0&&(d+="0"),h=Math.sqrt(+d),m=Ct((m+1)/2)-(m<0||m%2),h==1/0?d="5e"+m:(d=h.toExponential(),d=d.slice(0,d.indexOf("e")+1)+m),w=new $(d)):w=new $(h+""),w.c[0]){for(m=w.e,h=m+_,h<3&&(h=0);;)if(v=w,w=C.times(v.plus(e(g,v,_,1))),xt(v.c).slice(0,h)===(d=xt(w.c)).slice(0,h))if(w.e<m&&--h,d=d.slice(h-3,h+1),d=="9999"||!R&&d=="4999"){if(!R&&(Fe(v,v.e+a+2,0),v.times(v).eq(g))){w=v;break}_+=4,h+=4,R=1}else{(!+d||!+d.slice(1)&&d.charAt(0)=="5")&&(Fe(w,w.e+a+2,1),p=!w.times(w).eq(g));break}}return Fe(w,w.e+a+1,s,p)},i.toExponential=function(p,d){return p!=null&&(Me(p,0,Ge),p++),he(this,p,d,1)},i.toFixed=function(p,d){return p!=null&&(Me(p,0,Ge),p=p+this.e+1),he(this,p,d)},i.toFormat=function(p,d,w){var R,v=this;if(w==null)p!=null&&d&&typeof d=="object"?(w=d,d=null):p&&typeof p=="object"?(w=p,p=d=null):w=fe;else if(typeof w!="object")throw Error(lt+"Argument not an object: "+w);if(R=v.toFixed(p,d),v.c){var g,y=R.split("."),h=+w.groupSize,m=+w.secondaryGroupSize,_=w.groupSeparator||"",C=y[0],P=y[1],F=v.s<0,z=F?C.slice(1):C,X=z.length;if(m&&(g=h,h=m,m=g,X-=g),h>0&&X>0){for(g=X%h||h,C=z.substr(0,g);g<X;g+=h)C+=_+z.substr(g,h);m>0&&(C+=_+z.slice(g)),F&&(C="-"+C)}R=P?C+(w.decimalSeparator||"")+((m=+w.fractionGroupSize)?P.replace(new RegExp("\\d{"+m+"}\\B","g"),"$&"+(w.fractionGroupSeparator||"")):P):C}return(w.prefix||"")+R+(w.suffix||"")},i.toFraction=function(p){var d,w,R,v,g,y,h,m,_,C,P,F,z=this,X=z.c;if(p!=null&&(h=new $(p),!h.isInteger()&&(h.c||h.s!==1)||h.lt(n)))throw Error(lt+"Argument "+(h.isInteger()?"out of range: ":"not an integer: ")+at(h));if(!X)return new $(z);for(d=new $(n),_=w=new $(n),R=m=new $(n),F=xt(X),g=d.e=F.length-z.e-1,d.c[0]=Ca[(y=g%ie)<0?ie+y:y],p=!p||h.comparedTo(d)>0?g>0?d:_:h,y=E,E=1/0,h=new $(F),m.c[0]=0;C=e(h,d,0,1),v=w.plus(C.times(R)),v.comparedTo(p)!=1;)w=R,R=v,_=m.plus(C.times(v=_)),m=v,d=h.minus(C.times(v=d)),h=v;return v=e(p.minus(w),R,0,1),m=m.plus(v.times(_)),w=w.plus(v.times(R)),m.s=_.s=z.s,g=g*2,P=e(_,R,g,s).minus(z).abs().comparedTo(e(m,w,g,s).minus(z).abs())<1?[_,R]:[m,w],E=y,P},i.toNumber=function(){return+at(this)},i.toPrecision=function(p,d){return p!=null&&Me(p,1,Ge),he(this,p,d,2)},i.toString=function(p){var d,w=this,R=w.s,v=w.e;return v===null?R?(d="Infinity",R<0&&(d="-"+d)):d="NaN":(p==null?d=v<=c||v>=x?an(xt(w.c),v):nr(xt(w.c),v,"0"):p===10&&xe?(w=Fe(new $(w),a+v+1,s),d=nr(xt(w.c),w.e,"0")):(Me(p,2,te.length,"Base"),d=r(nr(xt(w.c),v,"0"),10,p,R,!0)),R<0&&w.c[0]&&(d="-"+d)),d},i.valueOf=i.toJSON=function(){return at(this)},i._isBigNumber=!0,i[Symbol.toStringTag]="BigNumber",i[Symbol.for("nodejs.util.inspect.custom")]=i.valueOf,t!=null&&$.set(t),$}function Ct(t){var e=t|0;return t>0||t===e?e:e-1}function xt(t){for(var e,r,o=1,i=t.length,n=t[0]+"";o<i;){for(e=t[o++]+"",r=ie-e.length;r--;e="0"+e);n+=e}for(i=n.length;n.charCodeAt(--i)===48;);return n.slice(0,i+1||1)}function Vr(t,e){var r,o,i=t.c,n=e.c,a=t.s,s=e.s,c=t.e,x=e.e;if(!a||!s)return null;if(r=i&&!i[0],o=n&&!n[0],r||o)return r?o?0:-s:a;if(a!=s)return a;if(r=a<0,o=c==x,!i||!n)return o?0:!i^r?1:-1;if(!o)return c>x^r?1:-1;for(s=(c=i.length)<(x=n.length)?c:x,a=0;a<s;a++)if(i[a]!=n[a])return i[a]>n[a]^r?1:-1;return c==x?0:c>x^r?1:-1}function Me(t,e,r,o){if(t<e||t>r||t!==bt(t))throw Error(lt+(o||"Argument")+(typeof t=="number"?t<e||t>r?" out of range: ":" not an integer: ":" not a primitive number: ")+String(t))}function nn(t){var e=t.c.length-1;return Ct(t.e/ie)==e&&t.c[e]%2!=0}function an(t,e){return(t.length>1?t.charAt(0)+"."+t.slice(1):t)+(e<0?"e":"e+")+e}function nr(t,e,r){var o,i;if(e<0){for(i=r+".";++e;i+=r);t=i+t}else if(o=t.length,++e>o){for(i=r,e-=o;--e;i+=r);t+=i}else e<o&&(t=t.slice(0,e)+"."+t.slice(e));return t}var ai=cl();var be={bigNumber(t){return new ai(t)},multiply(t,e){if(t===void 0||e===void 0)return ai(0);let r=new ai(t),o=new ai(e);return r.multipliedBy(o)},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}};var ap={numericInputKeyDown(t,e,r){let o=["Backspace","Meta","Ctrl","a","A","c","C","x","X","v","V","ArrowLeft","ArrowRight","Tab"],i=t.metaKey||t.ctrlKey,n=t.key,a=n.toLocaleLowerCase(),s=a==="a",c=a==="c",x=a==="v",S=a==="x",E=n===",",Y=n===".",j=n>="0"&&n<="9";!i&&(s||c||x||S)&&t.preventDefault(),e==="0"&&!E&&!Y&&n==="0"&&t.preventDefault(),e==="0"&&j&&(r(n),t.preventDefault()),(E||Y)&&(e||(r("0."),t.preventDefault()),(e?.includes(".")||e?.includes(","))&&t.preventDefault()),!j&&!o.includes(n)&&!Y&&!E&&t.preventDefault()}};var _a=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}];var sp={URLS:{FAQ:"https://walletconnect.com/faq"}};var $e={WC_NAME_SUFFIX:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CHAIN:{EVM:"evm",SOLANA:"solana"},CHAIN_NAME_MAP:{evm:"Ethereum",solana:"Solana"}};function jt(t,e){return e==="light"?{"--w3m-accent":t?.["--w3m-accent"]||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":t?.["--w3m-accent"]||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}var si,Sr,Ar;function lp(t,e){si=document.createElement("style"),Sr=document.createElement("style"),Ar=document.createElement("style"),si.textContent=vo(t).core.cssText,Sr.textContent=vo(t).dark.cssText,Ar.textContent=vo(t).light.cssText,document.head.appendChild(si),document.head.appendChild(Sr),document.head.appendChild(Ar),ul(e)}function ul(t){Sr&&Ar&&(t==="light"?(Sr.removeAttribute("media"),Ar.media="enabled"):(Ar.removeAttribute("media"),Sr.media="enabled"))}function cp(t){si&&Sr&&Ar&&(si.textContent=vo(t).core.cssText,Sr.textContent=vo(t).dark.cssText,Ar.textContent=vo(t).light.cssText)}function vo(t){return{core:A`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${st(t?.["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${st(t?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${st(t?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${st(t?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${st(t?.["--w3m-z-index"]||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:A`
      :root {
        --w3m-color-mix: ${st(t?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${st(jt(t,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${st(jt(t,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;
      }
    `,dark:A`
      :root {
        --w3m-color-mix: ${st(t?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${st(jt(t,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${st(jt(t,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);
      }
    `}}var O=A`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,U=A`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Tr=A`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function up(t,e){let{kind:r,elements:o}=e;return{kind:r,elements:o,finisher(i){customElements.get(t)||customElements.define(t,i)}}}function pp(t,e){return customElements.get(t)||customElements.define(t,e),e}function I(t){return function(r){return typeof r=="function"?pp(t,r):up(t,r)}}var pl=A`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var dp=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Ea=class extends T{render(){return f`<slot></slot>`}};Ea.styles=[O,pl];Ea=dp([I("wui-card")],Ea);var fp={attribute:!0,type:String,converter:ei,reflect:!1,hasChanged:Ji},hp=(t=fp,e,r)=>{let{kind:o,metadata:i}=r,n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(r.name,t),o==="accessor"){let{name:a}=r;return{set(s){let c=e.get.call(this);e.set.call(this,s),this.requestUpdate(a,c,t)},init(s){return s!==void 0&&this.P(a,void 0,t),s}}}if(o==="setter"){let{name:a}=r;return function(s){let c=this[a];e.call(this,s),this.requestUpdate(a,c,t)}}throw Error("Unsupported decorator location: "+o)};function l(t){return(e,r)=>typeof r=="object"?hp(t,e,r):((o,i,n)=>{let a=i.hasOwnProperty(n);return i.constructor.createProperty(n,a?W(N({},o),{wrapped:!0}):o),a?Object.getOwnPropertyDescriptor(i,n):void 0})(t,e,r)}function kr(t){return l(W(N({},t),{state:!0,attribute:!1}))}var dl=A`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`;var fl=b`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#667dff"
  /></svg
>`;var hl=b`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`;var ml=b`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`;var gl=b`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`;var wl=b`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;var vl=b`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var yl=b`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`;var xl=b`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var bl=b`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`;var Cl=b`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`;var _l=b`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`;var El=b`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`;var Sl=b`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`;var Al=b`<svg
  width="28"
  height="28"
  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.5297 4.92733C26.1221 5.4242 26.1996 6.30724 25.7027 6.89966L12.2836 22.8997C12.0316 23.2001 11.6652 23.3811 11.2735 23.3986C10.8817 23.4161 10.5006 23.2686 10.2228 22.9919L2.38218 15.1815C1.83439 14.6358 1.83268 13.7494 2.37835 13.2016C2.92403 12.6538 3.81046 12.6521 4.35825 13.1978L11.1183 19.9317L23.5573 5.10036C24.0542 4.50794 24.9372 4.43047 25.5297 4.92733Z"
    fill="#26D962"/>
</svg>
`;var Tl=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`;var kl=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`;var Rl=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`;var Il=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`;var Nl=b`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`;var Ol=b`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M7.00235 2C4.24 2 2.00067 4.23858 2.00067 7C2.00067 9.76142 4.24 12 7.00235 12C9.7647 12 12.004 9.76142 12.004 7C12.004 4.23858 9.7647 2 7.00235 2ZM0 7C0 3.13401 3.13506 0 7.00235 0C10.8696 0 14.0047 3.13401 14.0047 7C14.0047 10.866 10.8696 14 7.00235 14C3.13506 14 0 10.866 0 7ZM7.00235 3C7.55482 3 8.00269 3.44771 8.00269 4V6.58579L9.85327 8.43575C10.2439 8.82627 10.2439 9.45944 9.85327 9.84996C9.46262 10.2405 8.82924 10.2405 8.43858 9.84996L6.29501 7.70711C6.10741 7.51957 6.00201 7.26522 6.00201 7V4C6.00201 3.44771 6.44988 3 7.00235 3Z" 
    fill="currentColor"
  />
</svg>`;var Pl=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`;var Ll=b`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`;var Ml=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`;var $l=b`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`;var Ul=b` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`;var Bl=b`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `;var Dl=b`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`;var jl=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`;var Fl=b`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`;var zl=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`;var Zl=b`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`;var Hl=b`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var Wl=b`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;var Vl=b`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`;var Gl=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var ql=b`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;var Yl=b`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`;var Kl=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`;var Jl=b`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M4.98926 3.73932C4.2989 3.73932 3.73926 4.29896 3.73926 4.98932C3.73926 5.67968 4.2989 6.23932 4.98926 6.23932C5.67962 6.23932 6.23926 5.67968 6.23926 4.98932C6.23926 4.29896 5.67962 3.73932 4.98926 3.73932Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.60497 0.500001H6.39504C5.41068 0.499977 4.59185 0.499958 3.93178 0.571471C3.24075 0.64634 2.60613 0.809093 2.04581 1.21619C1.72745 1.44749 1.44749 1.72745 1.21619 2.04581C0.809093 2.60613 0.64634 3.24075 0.571471 3.93178C0.499958 4.59185 0.499977 5.41065 0.500001 6.39501V7.57815C0.499998 8.37476 0.499995 9.05726 0.534869 9.62725C0.570123 10.2034 0.644114 10.7419 0.828442 11.2302C0.925651 11.4877 1.05235 11.7287 1.21619 11.9542C1.44749 12.2726 1.72745 12.5525 2.04581 12.7838C2.60613 13.1909 3.24075 13.3537 3.93178 13.4285C4.59185 13.5001 5.41066 13.5 6.39503 13.5H7.60496C8.58933 13.5 9.40815 13.5001 10.0682 13.4285C10.7593 13.3537 11.3939 13.1909 11.9542 12.7838C12.2726 12.5525 12.5525 12.2726 12.7838 11.9542C13.1909 11.3939 13.3537 10.7593 13.4285 10.0682C13.5 9.40816 13.5 8.58935 13.5 7.60497V6.39505C13.5 5.41068 13.5 4.59185 13.4285 3.93178C13.3537 3.24075 13.1909 2.60613 12.7838 2.04581C12.5525 1.72745 12.2726 1.44749 11.9542 1.21619C11.3939 0.809093 10.7593 0.64634 10.0682 0.571471C9.40816 0.499958 8.58933 0.499977 7.60497 0.500001ZM3.22138 2.83422C3.38394 2.71612 3.62634 2.61627 4.14721 2.55984C4.68679 2.50138 5.39655 2.5 6.45 2.5H7.55C8.60345 2.5 9.31322 2.50138 9.8528 2.55984C10.3737 2.61627 10.6161 2.71612 10.7786 2.83422C10.9272 2.94216 11.0578 3.07281 11.1658 3.22138C11.2839 3.38394 11.3837 3.62634 11.4402 4.14721C11.4986 4.68679 11.5 5.39655 11.5 6.45V6.49703C10.9674 6.11617 10.386 5.84936 9.74213 5.81948C8.40536 5.75745 7.3556 6.73051 6.40509 7.84229C6.33236 7.92737 6.27406 7.98735 6.22971 8.02911L6.1919 8.00514L6.17483 7.99427C6.09523 7.94353 5.98115 7.87083 5.85596 7.80302C5.56887 7.64752 5.18012 7.4921 4.68105 7.4921C4.66697 7.4921 4.6529 7.49239 4.63884 7.49299C3.79163 7.52878 3.09922 8.1106 2.62901 8.55472C2.58751 8.59392 2.54594 8.6339 2.50435 8.6745C2.50011 8.34653 2.5 7.97569 2.5 7.55V6.45C2.5 5.39655 2.50138 4.68679 2.55984 4.14721C2.61627 3.62634 2.71612 3.38394 2.83422 3.22138C2.94216 3.07281 3.07281 2.94216 3.22138 2.83422ZM10.3703 8.14825C10.6798 8.37526 11.043 8.71839 11.4832 9.20889C11.4744 9.44992 11.4608 9.662 11.4402 9.8528C11.3837 10.3737 11.2839 10.6161 11.1658 10.7786C11.0578 10.9272 10.9272 11.0578 10.7786 11.1658C10.6161 11.2839 10.3737 11.3837 9.8528 11.4402C9.31322 11.4986 8.60345 11.5 7.55 11.5H6.45C5.39655 11.5 4.68679 11.4986 4.14721 11.4402C3.62634 11.3837 3.38394 11.2839 3.22138 11.1658C3.15484 11.1174 3.0919 11.0645 3.03298 11.0075C3.10126 10.9356 3.16806 10.8649 3.23317 10.7959L3.29772 10.7276C3.55763 10.4525 3.78639 10.2126 4.00232 10.0087C4.22016 9.80294 4.39412 9.66364 4.53524 9.57742C4.63352 9.51738 4.69022 9.49897 4.71275 9.49345C4.76387 9.49804 4.81803 9.51537 4.90343 9.56162C4.96409 9.59447 5.02355 9.63225 5.11802 9.69238L5.12363 9.69595C5.20522 9.74789 5.32771 9.82587 5.46078 9.89278C5.76529 10.0459 6.21427 10.186 6.74977 10.0158C7.21485 9.86796 7.59367 9.52979 7.92525 9.14195C8.91377 7.98571 9.38267 7.80495 9.64941 7.81733C9.7858 7.82366 10.0101 7.884 10.3703 8.14825Z" fill="currentColor"/>
</svg>`;var Xl=b`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`;var Ql=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`;var ec=b`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`;var tc=b`<svg fill="none" viewBox="0 0 41 40">
  <path
    style="fill: var(--wui-color-fg-100);"
    fill-opacity=".05"
    d="M.6 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z"
  />
  <path
    fill="#949E9E"
    d="M15.6 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM23.1 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM28.1 22.81a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</svg>`;var rc=b`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`;var oc=b`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`;var ic=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`;var nc=b` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`;var ac=b`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`;var sc=b`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`;var lc=b`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`;var cc=b`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`;var uc=b`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`;var pc=b`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`;var dc=b`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`;var fc=b`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`;var hc=b`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`;var mc=b`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`;var gc=b`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var wc=b`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`;var vc=b`<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 3.71875C6.0335 3.71875 5.25 2.93525 5.25 1.96875C5.25 1.00225 6.0335 0.21875 7 0.21875C7.9665 0.21875 8.75 1.00225 8.75 1.96875C8.75 2.93525 7.9665 3.71875 7 3.71875Z" fill="#949E9E"/>
  <path d="M7 8.96875C6.0335 8.96875 5.25 8.18525 5.25 7.21875C5.25 6.25225 6.0335 5.46875 7 5.46875C7.9665 5.46875 8.75 6.25225 8.75 7.21875C8.75 8.18525 7.9665 8.96875 7 8.96875Z" fill="#949E9E"/>
  <path d="M5.25 12.4688C5.25 13.4352 6.0335 14.2187 7 14.2187C7.9665 14.2187 8.75 13.4352 8.75 12.4688C8.75 11.5023 7.9665 10.7188 7 10.7188C6.0335 10.7188 5.25 11.5023 5.25 12.4688Z" fill="#949E9E"/>
</svg>`;var yc=b`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;var xc=b`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`;var bc=b`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`;var Cc=b`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`;var _c=b`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`;var Ec=b`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`;var Sc=b`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`;var Ac=b`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var Tc=b`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00177 1.78569C3.8179 1.78569 2.85819 2.74508 2.85819 3.92855C2.85819 4.52287 3.09928 5.05956 3.49077 5.4485L3.5005 5.45817C3.64381 5.60054 3.76515 5.72108 3.85631 5.81845C3.93747 5.90512 4.05255 6.03218 4.12889 6.1805C4.16999 6.26034 4.19 6.30843 4.21768 6.39385C4.22145 6.40546 4.22499 6.41703 4.22833 6.42855H5.77521C5.77854 6.41703 5.78208 6.40547 5.78585 6.39385C5.81353 6.30843 5.83354 6.26034 5.87464 6.1805C5.95098 6.03218 6.06606 5.90512 6.14722 5.81845C6.23839 5.72108 6.35973 5.60053 6.50304 5.45816L6.51276 5.4485C6.90425 5.05956 7.14534 4.52287 7.14534 3.92855C7.14534 2.74508 6.18563 1.78569 5.00177 1.78569ZM5.71629 7.85712H4.28724C4.28724 8.21403 4.28876 8.40985 4.30703 8.54571C4.30727 8.54748 4.30751 8.54921 4.30774 8.55091C4.30944 8.55115 4.31118 8.55138 4.31295 8.55162C4.44884 8.56989 4.64474 8.5714 5.00177 8.5714C5.3588 8.5714 5.55469 8.56989 5.69059 8.55162C5.69236 8.55138 5.69409 8.55115 5.69579 8.55091C5.69603 8.54921 5.69627 8.54748 5.6965 8.54571C5.71477 8.40985 5.71629 8.21403 5.71629 7.85712ZM2.85819 7.14283C2.85819 6.9948 2.85796 6.91114 2.8548 6.85032C2.85461 6.84656 2.85441 6.84309 2.85421 6.83988C2.84393 6.8282 2.83047 6.81334 2.81301 6.79469C2.74172 6.71856 2.63908 6.61643 2.48342 6.46178C1.83307 5.81566 1.42914 4.91859 1.42914 3.92855C1.42914 1.9561 3.02866 0.357117 5.00177 0.357117C6.97487 0.357117 8.57439 1.9561 8.57439 3.92855C8.57439 4.91859 8.17047 5.81566 7.52012 6.46178C7.36445 6.61643 7.26182 6.71856 7.19053 6.79469C7.17306 6.81334 7.1596 6.8282 7.14932 6.83988C7.14912 6.84309 7.14892 6.84656 7.14873 6.85032C7.14557 6.91114 7.14534 6.9948 7.14534 7.14283V7.85712C7.14534 7.87009 7.14535 7.88304 7.14535 7.89598C7.14541 8.19889 7.14547 8.49326 7.11281 8.73606C7.076 9.00978 6.98631 9.32212 6.72678 9.58156C6.46726 9.841 6.15481 9.93065 5.881 9.96745C5.63813 10.0001 5.34365 10 5.04064 9.99998C5.0277 9.99998 5.01474 9.99998 5.00177 9.99998C4.98879 9.99998 4.97583 9.99998 4.96289 9.99998C4.65988 10 4.36541 10.0001 4.12253 9.96745C3.84872 9.93065 3.53628 9.841 3.27675 9.58156C3.01722 9.32212 2.92753 9.00978 2.89072 8.73606C2.85807 8.49326 2.85812 8.19889 2.85818 7.89598C2.85819 7.88304 2.85819 7.87008 2.85819 7.85712V7.14283ZM7.1243 6.86977C7.12366 6.87069 7.1233 6.87116 7.12327 6.87119C7.12323 6.87123 7.12356 6.87076 7.1243 6.86977ZM2.88027 6.8712C2.88025 6.87119 2.87988 6.8707 2.87921 6.86975C2.87995 6.87072 2.88028 6.8712 2.88027 6.8712Z" fill="#949E9E"/>
</svg>`;var kc=b`<svg
 xmlns="http://www.w3.org/2000/svg"
 width="28"
 height="28"
 viewBox="0 0 28 28"
 fill="none">
  <path
    fill="#949E9E"
    fill-rule="evenodd"
    d="M7.974 2.975h12.052c1.248 0 2.296 0 3.143.092.89.096 1.723.307 2.461.844a4.9 4.9 0 0 1 1.084 1.084c.537.738.748 1.57.844 2.461.092.847.092 1.895.092 3.143v6.802c0 1.248 0 2.296-.092 3.143-.096.89-.307 1.723-.844 2.461a4.9 4.9 0 0 1-1.084 1.084c-.738.537-1.57.748-2.461.844-.847.092-1.895.092-3.143.092H7.974c-1.247 0-2.296 0-3.143-.092-.89-.096-1.723-.307-2.461-.844a4.901 4.901 0 0 1-1.084-1.084c-.537-.738-.748-1.571-.844-2.461C.35 19.697.35 18.649.35 17.4v-6.802c0-1.248 0-2.296.092-3.143.096-.89.307-1.723.844-2.461A4.9 4.9 0 0 1 2.37 3.91c.738-.537 1.571-.748 2.461-.844.847-.092 1.895-.092 3.143-.092ZM5.133 5.85c-.652.071-.936.194-1.117.326a2.1 2.1 0 0 0-.465.465c-.132.181-.255.465-.325 1.117-.074.678-.076 1.573-.076 2.917v6.65c0 1.344.002 2.239.076 2.917.07.652.193.936.325 1.117a2.1 2.1 0 0 0 .465.465c.181.132.465.255 1.117.326.678.073 1.574.075 2.917.075h11.9c1.344 0 2.239-.002 2.917-.075.652-.071.936-.194 1.117-.326.179-.13.335-.286.465-.465.132-.181.255-.465.326-1.117.073-.678.075-1.573.075-2.917v-6.65c0-1.344-.002-2.239-.075-2.917-.071-.652-.194-.936-.326-1.117a2.1 2.1 0 0 0-.465-.465c-.181-.132-.465-.255-1.117-.326-.678-.073-1.573-.075-2.917-.075H8.05c-1.343 0-2.239.002-2.917.075Zm.467 7.275a3.15 3.15 0 1 1 6.3 0 3.15 3.15 0 0 1-6.3 0Zm8.75-1.75a1.4 1.4 0 0 1 1.4-1.4h3.5a1.4 1.4 0 0 1 0 2.8h-3.5a1.4 1.4 0 0 1-1.4-1.4Zm0 5.25a1.4 1.4 0 0 1 1.4-1.4H21a1.4 1.4 0 1 1 0 2.8h-5.25a1.4 1.4 0 0 1-1.4-1.4Z"
    clip-rule="evenodd"/>
</svg>`;var Sa=b`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`;var ln=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},mp={add:fl,allWallets:hl,arrowBottomCircle:ml,appStore:gl,apple:wl,arrowBottom:vl,arrowLeft:yl,arrowRight:xl,arrowTop:bl,bank:Cl,browser:_l,card:El,checkmark:Al,checkmarkBold:Sl,chevronBottom:Tl,chevronLeft:kl,chevronRight:Rl,chevronTop:Il,chromeStore:Nl,clock:Ol,close:Pl,compass:Ml,coinPlaceholder:Ll,copy:$l,cursor:Ul,cursorTransparent:Bl,desktop:Dl,disconnect:jl,discord:Fl,etherscan:zl,extension:Zl,externalLink:Hl,facebook:Wl,farcaster:Vl,filters:Gl,github:ql,google:Yl,helpCircle:Kl,image:Jl,id:kc,infoCircle:Xl,lightbulb:Tc,mail:Ql,mobile:ec,more:tc,networkPlaceholder:rc,nftPlaceholder:oc,off:ic,playStore:nc,plus:ac,qrCode:sc,recycleHorizontal:lc,refresh:cc,search:uc,send:pc,swapHorizontal:dc,swapHorizontalMedium:hc,swapHorizontalBold:fc,swapHorizontalRoundedBold:mc,swapVertical:gc,telegram:wc,threeDots:vc,twitch:yc,twitter:Sa,twitterIcon:xc,verify:bc,verifyFilled:Cc,wallet:Ec,walletConnect:Sc,walletPlaceholder:_c,warningCircle:Ac,x:Sa},yo=class extends T{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,f`${mp[this.name]}`}};yo.styles=[O,Tr,dl];ln([l()],yo.prototype,"size",void 0);ln([l()],yo.prototype,"name",void 0);ln([l()],yo.prototype,"color",void 0);yo=ln([I("wui-icon")],yo);var Rc=A`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var cn=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},xo=class extends T{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,f`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};xo.styles=[O,Tr,Rc];cn([l()],xo.prototype,"src",void 0);cn([l()],xo.prototype,"alt",void 0);cn([l()],xo.prototype,"size",void 0);xo=cn([I("wui-image")],xo);var Ic=A`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var gp=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Aa=class extends T{render(){return f`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Aa.styles=[O,Ic];Aa=gp([I("wui-loading-hexagon")],Aa);var Nc=A`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var Ta=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},li=class extends T{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,f`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};li.styles=[O,Nc];Ta([l()],li.prototype,"color",void 0);Ta([l()],li.prototype,"size",void 0);li=Ta([I("wui-loading-spinner")],li);var Oc=A`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Pc=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},un=class extends T{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,o=36-e,i=116+o,n=245+o,a=360+o*1.75;return f`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${i} ${n}"
          stroke-dashoffset=${a}
        />
      </svg>
    `}};un.styles=[O,Oc];Pc([l({type:Number})],un.prototype,"radius",void 0);un=Pc([I("wui-loading-thumbnail")],un);var Lc=A`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var ci=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Gr=class extends T{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,f`<slot></slot>`}};Gr.styles=[Lc];ci([l()],Gr.prototype,"width",void 0);ci([l()],Gr.prototype,"height",void 0);ci([l()],Gr.prototype,"borderRadius",void 0);ci([l()],Gr.prototype,"variant",void 0);Gr=ci([I("wui-shimmer")],Gr);var pn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ui=t=>(...e)=>({_$litDirective$:t,values:e}),bo=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this._$Ct=e,this._$AM=r,this._$Ci=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var dn=ui(class extends bo{constructor(t){if(super(t),t.type!==pn.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(let o in e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}let r=t.element.classList;for(let o of this.st)o in e||(r.remove(o),this.st.delete(o));for(let o in e){let i=!!e[o];i===this.st.has(o)||this.nt?.has(o)||(i?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return ir}});var Mc=A`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var pi=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},qr=class extends T{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){let e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,f`<slot class=${dn(e)}></slot>`}};qr.styles=[O,Mc];pi([l()],qr.prototype,"variant",void 0);pi([l()],qr.prototype,"color",void 0);pi([l()],qr.prototype,"align",void 0);pi([l()],qr.prototype,"lineClamp",void 0);qr=pi([I("wui-text")],qr);var $c=b`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `;var Uc=b`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `;var Bc=b`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`;var Dc=b`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `;var jc=b`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `;var Fc=b`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`;var zc=b`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`;var Zc=b`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `;var Hc=b`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`;var Wc=b`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `;var Vc=b`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`;var Gc=b`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `;var qc=b`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `;var Yc=b`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`;var Kc=b`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`;var Jc=b`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`;var Xc=b`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`;var Qc=b`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`;var e0=b`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`;var t0=b`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`;var r0=b`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`;var o0=b`<svg width="40" height="42" viewBox="0 0 40 42" fill="none">
<path opacity="0.7" d="M19.9526 41.9076L7.3877 34.655V26.1226L19.9526 33.3751V41.9076Z" fill="url(#paint0_linear_2113_32117)"/>
<path opacity="0.7" d="M19.9521 41.9076L32.5171 34.655V26.1226L19.9521 33.3751V41.9076Z" fill="url(#paint1_linear_2113_32117)"/>
<path opacity="0.7" d="M39.9095 7.34521V21.8562L32.5166 26.1225V11.6114L39.9095 7.34521Z" fill="url(#paint2_linear_2113_32117)"/>
<path d="M39.9099 7.34536L27.345 0.0927734L19.9521 4.359L32.5171 11.6116L39.9099 7.34536Z" fill="url(#paint3_linear_2113_32117)"/>
<path d="M0 7.34536L12.5649 0.0927734L19.9519 4.359L7.387 11.6116L0 7.34536Z" fill="#F969D3"/>
<path opacity="0.7" d="M0 7.34521V21.8562L7.387 26.1225V11.6114L0 7.34521Z" fill="url(#paint4_linear_2113_32117)"/>
<defs>
<linearGradient id="paint0_linear_2113_32117" x1="18.6099" y1="41.8335" x2="7.73529" y2="8.31842" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
<linearGradient id="paint1_linear_2113_32117" x1="26.2346" y1="26.1226" x2="26.2346" y2="41.9076" gradientUnits="userSpaceOnUse">
<stop stop-color="#719DED"/>
<stop offset="1" stop-color="#2545BE"/>
</linearGradient>
<linearGradient id="paint2_linear_2113_32117" x1="36.213" y1="7.34521" x2="36.213" y2="26.1225" gradientUnits="userSpaceOnUse">
<stop stop-color="#93EBFF"/>
<stop offset="1" stop-color="#197DDB"/>
</linearGradient>
<linearGradient id="paint3_linear_2113_32117" x1="29.931" y1="0.0927734" x2="38.2156" y2="14.8448" gradientUnits="userSpaceOnUse">
<stop stop-color="#F969D3"/>
<stop offset="1" stop-color="#4F51C0"/>
</linearGradient>
<linearGradient id="paint4_linear_2113_32117" x1="18.1251" y1="44.2539" x2="-7.06792" y2="15.2763" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
</defs>
</svg>`;var i0=A`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var ka=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},wp={browser:$c,dao:Uc,defi:Bc,defiAlt:Dc,eth:jc,layers:Fc,lock:zc,login:Zc,network:Hc,nft:Wc,noun:Vc,profile:Gc,system:qc,coinbase:Yc,meld:o0,onrampCard:Qc,moonpay:Kc,stripe:Jc,paypal:Xc,google:e0,pencil:t0,lightbulb:r0},di=class extends T{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--wui-visual-size-${this.size});
   `,f`${wp[this.name]}`}};di.styles=[O,i0];ka([l()],di.prototype,"name",void 0);ka([l()],di.prototype,"size",void 0);di=ka([I("wui-visual")],di);var Je=t=>t??Le;var ne={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:e,charsEnd:r,truncate:o}){return t.length<=e+r?t:o==="end"?`${t.substring(0,e)}...`:o==="start"?`...${t.substring(t.length-r)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(r))}`},generateAvatarColors(t){let r=t.toLowerCase().replace(/^0x/iu,"").substring(0,6),o=this.hexToRgb(r),i=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),a=100-3*Number(i?.replace("px","")),s=`${a}% ${a}% at 65% 40%`,c=[];for(let x=0;x<5;x+=1){let S=this.tintColor(o,.15*x);c.push(`rgb(${S[0]}, ${S[1]}, ${S[2]})`)}return`
    --local-color-1: ${c[0]};
    --local-color-2: ${c[1]};
    --local-color-3: ${c[2]};
    --local-color-4: ${c[3]};
    --local-color-5: ${c[4]};
    --local-radial-circle: ${s}
   `},hexToRgb(t){let e=parseInt(t,16),r=e>>16&255,o=e>>8&255,i=e&255;return[r,o,i]},tintColor(t,e){let[r,o,i]=t,n=Math.round(r+(255-r)*e),a=Math.round(o+(255-o)*e),s=Math.round(i+(255-i)*e);return[n,a,s]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")},splitBalance(t){let e=t.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(t,e,r){return t.toString().length>=e?Number(t).toFixed(r):t},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}};var n0=A`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var mt=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},it=class extends T{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&ne.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&ne.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&ne.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&ne.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&ne.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&ne.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&ne.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&ne.getSpacingStyles(this.margin,3)};
    `,f`<slot></slot>`}};it.styles=[O,n0];mt([l()],it.prototype,"flexDirection",void 0);mt([l()],it.prototype,"flexWrap",void 0);mt([l()],it.prototype,"flexBasis",void 0);mt([l()],it.prototype,"flexGrow",void 0);mt([l()],it.prototype,"flexShrink",void 0);mt([l()],it.prototype,"alignItems",void 0);mt([l()],it.prototype,"justifyContent",void 0);mt([l()],it.prototype,"columnGap",void 0);mt([l()],it.prototype,"rowGap",void 0);mt([l()],it.prototype,"gap",void 0);mt([l()],it.prototype,"padding",void 0);mt([l()],it.prototype,"margin",void 0);it=mt([I("wui-flex")],it);var a0=A`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var fi=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Yr=class extends T{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`
    --local-width: var(--wui-icon-box-size-${this.size});
    --local-height: var(--wui-icon-box-size-${this.size});
    `,f`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",f`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=ne.generateAvatarColors(this.address);return this.style.cssText+=`
 ${e}`,null}return this.dataset.variant="default",null}};Yr.styles=[O,a0];fi([l()],Yr.prototype,"imageSrc",void 0);fi([l()],Yr.prototype,"alt",void 0);fi([l()],Yr.prototype,"address",void 0);fi([l()],Yr.prototype,"size",void 0);Yr=fi([I("wui-avatar")],Yr);var s0=A`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var ar=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Mt=class extends T{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e=this.iconSize||this.size,r=this.size==="lg",o=this.size==="xl",i=r?"12%":"16%",n=r?"xxs":o?"s":"3xl",a=this.background==="gray",s=this.background==="opaque",c=this.backgroundColor==="accent-100"&&s||this.backgroundColor==="success-100"&&s||this.backgroundColor==="error-100"&&s||this.backgroundColor==="inverse-100"&&s,x=`var(--wui-color-${this.backgroundColor})`;return c?x=`var(--wui-icon-box-bg-${this.backgroundColor})`:a&&(x=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${x};
       --local-bg-mix: ${c||a?"100%":i};
       --local-border-radius: var(--wui-border-radius-${n});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,f` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};Mt.styles=[O,U,s0];ar([l()],Mt.prototype,"size",void 0);ar([l()],Mt.prototype,"backgroundColor",void 0);ar([l()],Mt.prototype,"iconColor",void 0);ar([l()],Mt.prototype,"iconSize",void 0);ar([l()],Mt.prototype,"background",void 0);ar([l({type:Boolean})],Mt.prototype,"border",void 0);ar([l()],Mt.prototype,"borderColor",void 0);ar([l()],Mt.prototype,"icon",void 0);Mt=ar([I("wui-icon-box")],Mt);var l0=A`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var Ft=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},_t=class extends T{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return f`
      <button
        ?disabled=${this.disabled}
        class=${Je(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?ne.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return f` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){let e=this.networkSrc?f`<wui-image src=${this.networkSrc}></wui-image>`:f`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return f`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `}return null}};_t.styles=[O,U,l0];Ft([l()],_t.prototype,"networkSrc",void 0);Ft([l()],_t.prototype,"avatarSrc",void 0);Ft([l()],_t.prototype,"balance",void 0);Ft([l({type:Boolean})],_t.prototype,"isUnsupportedChain",void 0);Ft([l({type:Boolean})],_t.prototype,"disabled",void 0);Ft([l()],_t.prototype,"address",void 0);Ft([l()],_t.prototype,"profileName",void 0);Ft([l()],_t.prototype,"charsStart",void 0);Ft([l()],_t.prototype,"charsEnd",void 0);_t=Ft([I("wui-account-button")],_t);var c0=A`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var Kr=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},sr=class extends T{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),f`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?f`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?f`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:f`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};sr.styles=[O,c0];Kr([l()],sr.prototype,"size",void 0);Kr([l()],sr.prototype,"name",void 0);Kr([l()],sr.prototype,"imageSrc",void 0);Kr([l()],sr.prototype,"walletIcon",void 0);Kr([l({type:Boolean})],sr.prototype,"installed",void 0);Kr([l()],sr.prototype,"badgeSize",void 0);sr=Kr([I("wui-wallet-image")],sr);var u0=A`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var p0=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Ra=4,fn=class extends T{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<Ra;return f`${this.walletImages.slice(0,Ra).map(({src:r,walletName:o})=>f`
            <wui-wallet-image
              size="inherit"
              imageSrc=${r}
              name=${Je(o)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(Ra-this.walletImages.length)].map(()=>f` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};fn.styles=[O,u0];p0([l({type:Array})],fn.prototype,"walletImages",void 0);fn=p0([I("wui-all-wallets-image")],fn);var d0=A`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var zt=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},f0={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},vp={lg:"paragraph-600",md:"small-600"},yp={lg:"md",md:"md"},Et=class extends T{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;let e=this.textVariant??vp[this.size];return f`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){let e=yp[this.size],r=this.disabled?f0.disabled:f0[this.variant];return f`<wui-loading-spinner color=${r} size=${e}></wui-loading-spinner>`}return f``}};Et.styles=[O,U,d0];zt([l()],Et.prototype,"size",void 0);zt([l({type:Boolean})],Et.prototype,"disabled",void 0);zt([l({type:Boolean})],Et.prototype,"fullWidth",void 0);zt([l({type:Boolean})],Et.prototype,"loading",void 0);zt([l()],Et.prototype,"variant",void 0);zt([l({type:Boolean})],Et.prototype,"hasIconLeft",void 0);zt([l({type:Boolean})],Et.prototype,"hasIconRight",void 0);zt([l()],Et.prototype,"borderRadius",void 0);zt([l()],Et.prototype,"textVariant",void 0);Et=zt([I("wui-button")],Et);var hn=b`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var h0=A`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }
`;var m0=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},mn=class extends T{constructor(){super(...arguments),this.type="wallet"}render(){return f`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?f` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${hn}`:f`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};mn.styles=[O,U,h0];m0([l()],mn.prototype,"type",void 0);mn=m0([I("wui-card-select-loader")],mn);var g0=b`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;var w0=b`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var v0=A`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var Jr=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},lr=class extends T{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:g0,md:hn,lg:w0},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--wui-spacing-3xl);
      --local-height: var(--wui-spacing-3xl);
      --local-icon-size: var(--wui-spacing-l);
    `):this.style.cssText=`

      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,f`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?f`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:f`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};lr.styles=[O,v0];Jr([l()],lr.prototype,"size",void 0);Jr([l()],lr.prototype,"name",void 0);Jr([l({type:Object})],lr.prototype,"networkImagesBySize",void 0);Jr([l()],lr.prototype,"imageSrc",void 0);Jr([l({type:Boolean})],lr.prototype,"selected",void 0);Jr([l({type:Boolean})],lr.prototype,"round",void 0);lr=Jr([I("wui-network-image")],lr);var y0=A`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }
`;var Xr=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},cr=class extends T{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return f`
      <button data-selected=${Je(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?f`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${Je(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:f`
      <wui-wallet-image
        size="md"
        imageSrc=${Je(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};cr.styles=[O,U,y0];Xr([l()],cr.prototype,"name",void 0);Xr([l()],cr.prototype,"type",void 0);Xr([l()],cr.prototype,"imageSrc",void 0);Xr([l({type:Boolean})],cr.prototype,"disabled",void 0);Xr([l({type:Boolean})],cr.prototype,"selected",void 0);Xr([l({type:Boolean})],cr.prototype,"installed",void 0);cr=Xr([I("wui-card-select")],cr);var x0=A`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon,
  a[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`;var Qr=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},ur=class extends T{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){let r=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return f`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${r} color="inherit">
          ${this.title?this.title:ne.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?f`<wui-image src=${this.imageSrc}></wui-image>`:null}};ur.styles=[O,U,x0];Qr([l()],ur.prototype,"variant",void 0);Qr([l()],ur.prototype,"imageSrc",void 0);Qr([l({type:Boolean})],ur.prototype,"disabled",void 0);Qr([l()],ur.prototype,"icon",void 0);Qr([l()],ur.prototype,"href",void 0);Qr([l()],ur.prototype,"text",void 0);ur=Qr([I("wui-chip")],ur);var b0=A`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var Ia=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},hi=class extends T{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let e=this.size==="md"?"paragraph-600":"small-600";return f`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?f`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};hi.styles=[O,U,b0];Ia([l()],hi.prototype,"size",void 0);Ia([l({type:Boolean})],hi.prototype,"loading",void 0);hi=Ia([I("wui-connect-button")],hi);var C0=A`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var gn=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Co=class extends T{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return f`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Co.styles=[O,U,C0];gn([l({type:Boolean})],Co.prototype,"disabled",void 0);gn([l()],Co.prototype,"label",void 0);gn([l()],Co.prototype,"buttonLabel",void 0);Co=gn([I("wui-cta-button")],Co);var _0=A`
  :host {
    display: block;
    padding: var(--wui-spacing-l) var(--wui-spacing-m);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
  }
`;var xp=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Na=class extends T{render(){return f`
      <wui-flex gap="xl" flexDirection="column" justifyContent="space-between" alignItems="center">
        <slot></slot>
      </wui-flex>
    `}};Na.styles=[O,U,_0];Na=xp([I("wui-details-group")],Na);var E0=A`
  :host {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-l);
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }
`;var S0=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},wn=class extends T{constructor(){super(...arguments),this.name=""}render(){return f`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">${this.name}</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <slot></slot>
        </wui-flex>
      </wui-flex>
    `}};wn.styles=[O,U,E0];S0([l()],wn.prototype,"name",void 0);wn=S0([I("wui-details-group-item")],wn);var A0=A`
  :host {
    z-index: calc(var(--w3m-z-index) + 1);
    width: 200px;
    padding: var(--wui-spacing-3xs);
    align-items: center;
    display: inherit;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-fg-base-125);
    /* Dark/Elevation/L */
    box-shadow:
      0px 8px 22px -6px rgba(0, 0, 0, 0.12),
      0px 14px 64px -4px rgba(0, 0, 0, 0.12);
  }
`;var Oa=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},mi=class extends T{constructor(){super(...arguments),this.actions=[],this.isOpen=!1}render(){return this.isOpen?f`
      <wui-flex flexDirection="column" gap="4xs">
        ${this.actions.map(e=>f`
            <wui-list-item
              icon=${e.icon}
              iconSize="sm"
              variant="icon"
              @click=${e.onClick}
            >
              <wui-text variant="small-400" color="fg-100">${e.label}</wui-text>
            </wui-list-item>
          `)}
      </wui-flex>
    `:null}};mi.styles=[O,U,A0];Oa([l({type:Array})],mi.prototype,"actions",void 0);Oa([l({type:Boolean})],mi.prototype,"isOpen",void 0);mi=Oa([I("wui-dropdown-menu")],mi);var{I:hy}=Qs;var T0=t=>t.strings===void 0;var gi=(t,e)=>{let r=t._$AN;if(r===void 0)return!1;for(let o of r)o._$AO?.(e,!1),gi(o,e);return!0},vn=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while(r?.size===0)},k0=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),_p(e)}};function bp(t){this._$AN!==void 0?(vn(this),this._$AM=t,k0(this)):this._$AM=t}function Cp(t,e=!1,r=0){let o=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(o))for(let n=r;n<o.length;n++)gi(o[n],!1),vn(o[n]);else o!=null&&(gi(o,!1),vn(o));else gi(this,t)}var _p=t=>{t.type==pn.CHILD&&(t._$AP??=Cp,t._$AQ??=bp)},yn=class extends bo{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,o){super._$AT(e,r,o),k0(this),this.isConnected=e._$AU}_$AO(e,r=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),r&&(gi(this,e),vn(this))}setValue(e){if(T0(this._$Ct))this._$Ct._$AI(e,this);else{let r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};var _o=()=>new La,La=class{},Pa=new WeakMap,Eo=ui(class extends yn{render(t){return Le}update(t,[e]){let r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),Le}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){let e=this.ht??globalThis,r=Pa.get(e);r===void 0&&(r=new WeakMap,Pa.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return typeof this.Y=="function"?Pa.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var R0=A`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var pr=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},$t=class extends T{constructor(){super(...arguments),this.inputElementRef=_o(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){let e=`wui-padding-right-${this.inputRightPadding}`,o={[`wui-size-${this.size}`]:!0,[e]:!!this.inputRightPadding};return f`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${Eo(this.inputElementRef)}
        class=${dn(o)}
        type=${this.type}
        enterkeyhint=${Je(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
      />
      <slot></slot>`}templateIcon(){return this.icon?f`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};$t.styles=[O,U,R0];pr([l()],$t.prototype,"size",void 0);pr([l()],$t.prototype,"icon",void 0);pr([l({type:Boolean})],$t.prototype,"disabled",void 0);pr([l()],$t.prototype,"placeholder",void 0);pr([l()],$t.prototype,"type",void 0);pr([l()],$t.prototype,"keyHint",void 0);pr([l()],$t.prototype,"value",void 0);pr([l()],$t.prototype,"inputRightPadding",void 0);$t=pr([I("wui-input-text")],$t);var I0=A`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var xn=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},So=class extends T{constructor(){super(...arguments),this.disabled=!1}render(){return f`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?f`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};So.styles=[O,I0];xn([l()],So.prototype,"errorMessage",void 0);xn([l({type:Boolean})],So.prototype,"disabled",void 0);xn([l()],So.prototype,"value",void 0);So=xn([I("wui-email-input")],So);var N0=A`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`;var wi=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},eo=class extends T{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return f`
      <wui-input-text
        value=${Je(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return f`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${$e.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?f`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){return this.errorMessage?f`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`:null}};eo.styles=[O,N0];wi([l()],eo.prototype,"errorMessage",void 0);wi([l({type:Boolean})],eo.prototype,"disabled",void 0);wi([l()],eo.prototype,"value",void 0);wi([l({type:Boolean})],eo.prototype,"loading",void 0);eo=wi([I("wui-ens-input")],eo);var O0=A`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var vi=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},to=class extends T{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){let e=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",r=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${r});
`,f`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};to.styles=[O,U,Tr,O0];vi([l()],to.prototype,"size",void 0);vi([l({type:Boolean})],to.prototype,"disabled",void 0);vi([l()],to.prototype,"icon",void 0);vi([l()],to.prototype,"iconColor",void 0);to=vi([I("wui-icon-link")],to);var P0=A`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var L0=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},bn=class extends T{constructor(){super(...arguments),this.icon="copy"}render(){return f`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};bn.styles=[O,U,P0];L0([l()],bn.prototype,"icon",void 0);bn=L0([I("wui-input-element")],bn);var M0=A`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`;var Ma=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},yi=class extends T{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return f`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};yi.styles=[O,U,M0];Ma([l({type:Boolean})],yi.prototype,"disabled",void 0);Ma([l({type:String})],yi.prototype,"value",void 0);yi=Ma([I("wui-input-numeric")],yi);var $0=A`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var $a=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},xi=class extends T{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return f`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};xi.styles=[O,U,$0];$a([l({type:Boolean})],xi.prototype,"disabled",void 0);$a([l()],xi.prototype,"color",void 0);xi=$a([I("wui-link")],xi);var U0=A`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Zt=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},St=class extends T{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return f`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${Je(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return f`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return f`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){let e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",r=this.iconVariant==="square-blue"?"mdl":"md",o=this.iconSize?this.iconSize:r;return f`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${o}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${r}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?f`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:f``}chevronTemplate(){return this.chevron?f`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};St.styles=[O,U,U0];Zt([l()],St.prototype,"icon",void 0);Zt([l()],St.prototype,"iconSize",void 0);Zt([l()],St.prototype,"variant",void 0);Zt([l()],St.prototype,"iconVariant",void 0);Zt([l({type:Boolean})],St.prototype,"disabled",void 0);Zt([l()],St.prototype,"imageSrc",void 0);Zt([l()],St.prototype,"alt",void 0);Zt([l({type:Boolean})],St.prototype,"chevron",void 0);Zt([l({type:Boolean})],St.prototype,"loading",void 0);St=Zt([I("wui-list-item")],St);var Ua=function(t){return t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn",t}(Ua||{});var B0=A`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var ro=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},dr=class extends T{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){let[e,r]=this.images,o=e?.type==="NFT",i=r?.url?r.type==="NFT":o,n=o?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",a=i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${n};
    --local-right-border-radius: ${a};
    `,f`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[e,r]=this.images,o=e?.type;return this.images.length===2&&(e?.url||r?.url)?f`<div class="swap-images-container">
        ${e?.url?f`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${r?.url?f`<wui-image src=${r.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?f`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:o==="NFT"?f`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:f`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",r;return r=this.getIcon(),this.status&&(e=this.getStatusColor()),r?f`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${r}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};dr.styles=[B0];ro([l()],dr.prototype,"type",void 0);ro([l()],dr.prototype,"status",void 0);ro([l()],dr.prototype,"direction",void 0);ro([l({type:Boolean})],dr.prototype,"onlyDirectionIcon",void 0);ro([l({type:Array})],dr.prototype,"images",void 0);ro([l({type:Object})],dr.prototype,"secondImage",void 0);dr=ro([I("wui-transaction-visual")],dr);var D0=A`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var Ut=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},gt=class extends T{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return f`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${Je(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${Je(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${Ua[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let e=this.descriptions?.[0];return e?f`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){let e=this.descriptions?.[1];return e?f`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};gt.styles=[O,D0];Ut([l()],gt.prototype,"type",void 0);Ut([l({type:Array})],gt.prototype,"descriptions",void 0);Ut([l()],gt.prototype,"date",void 0);Ut([l({type:Boolean})],gt.prototype,"onlyDirectionIcon",void 0);Ut([l()],gt.prototype,"status",void 0);Ut([l()],gt.prototype,"direction",void 0);Ut([l({type:Array})],gt.prototype,"images",void 0);Ut([l({type:Array})],gt.prototype,"price",void 0);Ut([l({type:Array})],gt.prototype,"amount",void 0);Ut([l({type:Array})],gt.prototype,"symbol",void 0);gt=Ut([I("wui-transaction-list-item")],gt);var j0=A`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var Ep=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Ba=class extends T{render(){return f`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};Ba.styles=[O,j0];Ba=Ep([I("wui-transaction-list-item-loader")],Ba);var F0=A`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var Da=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},bi=class extends T{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;let e=this.size==="md"?"mini-700":"micro-700";return f`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};bi.styles=[O,F0];Da([l()],bi.prototype,"variant",void 0);Da([l()],bi.prototype,"size",void 0);bi=Da([I("wui-tag")],bi);var z0=A`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var Bt=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},wt=class extends T{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return f`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?f` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?f` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?f`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?f`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?f`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?f`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};wt.styles=[O,U,z0];Bt([l({type:Array})],wt.prototype,"walletImages",void 0);Bt([l()],wt.prototype,"imageSrc",void 0);Bt([l()],wt.prototype,"name",void 0);Bt([l()],wt.prototype,"tagLabel",void 0);Bt([l()],wt.prototype,"tagVariant",void 0);Bt([l()],wt.prototype,"icon",void 0);Bt([l()],wt.prototype,"walletIcon",void 0);Bt([l({type:Boolean})],wt.prototype,"installed",void 0);Bt([l({type:Boolean})],wt.prototype,"disabled",void 0);Bt([l({type:Boolean})],wt.prototype,"showAllWallets",void 0);wt=Bt([I("wui-list-wallet")],wt);var Z0=A`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var H0=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Cn=class extends T{constructor(){super(...arguments),this.logo="google"}render(){return f`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};Cn.styles=[O,Z0];H0([l()],Cn.prototype,"logo",void 0);Cn=H0([I("wui-logo")],Cn);var W0=A`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var ja=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Ci=class extends T{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return f`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Ci.styles=[O,U,W0];ja([l()],Ci.prototype,"logo",void 0);ja([l({type:Boolean})],Ci.prototype,"disabled",void 0);Ci=ja([I("wui-logo-select")],Ci);var V0=A`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;var _n=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Ao=class extends T{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return f`
      <button data-testid="w3m-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?f`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?f`<wui-image src=${this.imageSrc}></wui-image>`:f`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Ao.styles=[O,U,V0];_n([l()],Ao.prototype,"imageSrc",void 0);_n([l({type:Boolean})],Ao.prototype,"isUnsupportedChain",void 0);_n([l({type:Boolean})],Ao.prototype,"disabled",void 0);Ao=_n([I("wui-network-button")],Ao);var G0=A`
  :host {
    position: relative;
    display: block;
  }
`;var En=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},To=class extends T{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(o=>o!==""),this.handleKeyDown=(e,r)=>{let o=e.target,i=this.getInputElement(o),n=["ArrowLeft","ArrowRight","Shift","Delete"];if(!i)return;n.includes(e.key)&&e.preventDefault();let a=i.selectionStart;switch(e.key){case"ArrowLeft":a&&i.setSelectionRange(a+1,a+1),this.focusInputField("prev",r);break;case"ArrowRight":this.focusInputField("next",r);break;case"Shift":this.focusInputField("next",r);break;case"Delete":i.value===""?this.focusInputField("prev",r):this.updateInput(i,r,"");break;case"Backspace":i.value===""?this.focusInputField("prev",r):this.updateInput(i,r,"");break;default:}},this.focusInputField=(e,r)=>{if(e==="next"){let o=r+1;if(!this.shouldInputBeEnabled(o))return;let i=this.numerics[o<this.length?o:r],n=i?this.getInputElement(i):void 0;n&&(n.disabled=!1,n.focus())}if(e==="prev"){let o=r-1,i=this.numerics[o>-1?o:r],n=i?this.getInputElement(i):void 0;n&&n.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));let e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),this.numerics[0]?.focus()}render(){return f`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,r)=>f`
            <wui-input-numeric
              @input=${o=>this.handleInput(o,r)}
              @click=${o=>this.selectInput(o)}
              @keydown=${o=>this.handleKeyDown(o,r)}
              .disabled=${!this.shouldInputBeEnabled(r)}
              .value=${this.values[r]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,r,o){let i=this.numerics[r],n=e||(i?this.getInputElement(i):void 0);n&&(n.value=o,this.values=this.values.map((a,s)=>s===r?o:a))}selectInput(e){let r=e.target;r&&this.getInputElement(r)?.select()}handleInput(e,r){let o=e.target,i=this.getInputElement(o);if(i){let n=i.value;e.inputType==="insertFromPaste"?this.handlePaste(i,n,r):ne.isNumber(n)&&e.data?(this.updateInput(i,r,e.data),this.focusInputField("next",r)):this.updateInput(i,r,"")}this.dispatchInputChangeEvent()}handlePaste(e,r,o){let i=r[0];if(i&&ne.isNumber(i)){this.updateInput(e,o,i);let a=r.substring(1);if(o+1<this.length&&a.length){let s=this.numerics[o+1],c=s?this.getInputElement(s):void 0;c&&this.handlePaste(c,a,o+1)}else this.focusInputField("next",o)}else this.updateInput(e,o,"")}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){let e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};To.styles=[O,G0];En([l({type:Number})],To.prototype,"length",void 0);En([l({type:String})],To.prototype,"otp",void 0);En([kr()],To.prototype,"values",void 0);To=En([I("wui-otp")],To);var Y0=_r(Wu(),1),Sp=.1,q0=2.5,fr=7;function Fa(t,e,r){return t===e?!1:(t-e<0?e-t:t-e)<=r+Sp}function Ap(t,e){let r=Array.prototype.slice.call(Y0.default.create(t,{errorCorrectionLevel:e}).modules.data,0),o=Math.sqrt(r.length);return r.reduce((i,n,a)=>(a%o===0?i.push([n]):i[i.length-1].push(n))&&i,[])}var K0={generate(t,e,r){let o="#141414",i="transparent",a=[],s=Ap(t,"Q"),c=e/s.length,x=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];x.forEach(({x:fe,y:te})=>{let xe=(s.length-fr)*c*fe,$=(s.length-fr)*c*te,he=.45;for(let ee=0;ee<x.length;ee+=1){let De=c*(fr-ee*2);a.push(b`
            <rect
              fill=${ee===2?o:i}
              width=${ee===0?De-5:De}
              rx= ${ee===0?(De-5)*he:De*he}
              ry= ${ee===0?(De-5)*he:De*he}
              stroke=${o}
              stroke-width=${ee===0?5:0}
              height=${ee===0?De-5:De}
              x= ${ee===0?$+c*ee+5/2:$+c*ee}
              y= ${ee===0?xe+c*ee+5/2:xe+c*ee}
            />
          `)}});let S=Math.floor((r+25)/c),E=s.length/2-S/2,Y=s.length/2+S/2-1,j=[];s.forEach((fe,te)=>{fe.forEach((xe,$)=>{if(s[te][$]&&!(te<fr&&$<fr||te>s.length-(fr+1)&&$<fr||te<fr&&$>s.length-(fr+1))&&!(te>E&&te<Y&&$>E&&$<Y)){let he=te*c+c/2,ee=$*c+c/2;j.push([he,ee])}})});let J={};return j.forEach(([fe,te])=>{J[fe]?J[fe]?.push(te):J[fe]=[te]}),Object.entries(J).map(([fe,te])=>{let xe=te.filter($=>te.every(he=>!Fa($,he,c)));return[Number(fe),xe]}).forEach(([fe,te])=>{te.forEach(xe=>{a.push(b`<circle cx=${fe} cy=${xe} fill=${o} r=${c/q0} />`)})}),Object.entries(J).filter(([fe,te])=>te.length>1).map(([fe,te])=>{let xe=te.filter($=>te.some(he=>Fa($,he,c)));return[Number(fe),xe]}).map(([fe,te])=>{te.sort(($,he)=>$<he?-1:1);let xe=[];for(let $ of te){let he=xe.find(ee=>ee.some(De=>Fa($,De,c)));he?he.push($):xe.push([$])}return[fe,xe.map($=>[$[0],$[$.length-1]])]}).forEach(([fe,te])=>{te.forEach(([xe,$])=>{a.push(b`
              <line
                x1=${fe}
                x2=${fe}
                y1=${xe}
                y2=${$}
                stroke=${o}
                stroke-width=${c/(q0/2)}
                stroke-linecap="round"
              />
            `)})}),a}};var J0=A`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Rr=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Ht=class extends T{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,f`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e=this.theme==="light"?this.size:this.size-32;return b`
      <svg height=${e} width=${e}>
        ${K0.generate(this.uri,e,this.arenaClear?0:e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?f`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?f`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:f`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Ht.styles=[O,J0];Rr([l()],Ht.prototype,"uri",void 0);Rr([l({type:Number})],Ht.prototype,"size",void 0);Rr([l()],Ht.prototype,"theme",void 0);Rr([l()],Ht.prototype,"imageSrc",void 0);Rr([l()],Ht.prototype,"alt",void 0);Rr([l({type:Boolean})],Ht.prototype,"arenaClear",void 0);Rr([l({type:Boolean})],Ht.prototype,"farcaster",void 0);Ht=Rr([I("wui-qr-code")],Ht);var X0=A`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var Tp=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},za=class extends T{constructor(){super(...arguments),this.inputComponentRef=_o()}render(){return f`
      <wui-input-text
        ${Eo(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let r=this.inputComponentRef.value?.inputElementRef.value;r&&(r.value="",r.focus(),r.dispatchEvent(new Event("input")))}};za.styles=[O,X0];za=Tp([I("wui-search-bar")],za);var Q0=A`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var ko=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Ir=class extends T{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1}render(){return f`
      ${this.loading?f`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:f`<wui-icon-box
            size="sm"
            iconSize="xs"
            iconColor=${this.iconColor}
            backgroundColor=${this.backgroundColor}
            icon=${this.icon}
            background="opaque"
          ></wui-icon-box>`}
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};Ir.styles=[O,Q0];ko([l()],Ir.prototype,"backgroundColor",void 0);ko([l()],Ir.prototype,"iconColor",void 0);ko([l()],Ir.prototype,"icon",void 0);ko([l()],Ir.prototype,"message",void 0);ko([l()],Ir.prototype,"loading",void 0);Ir=ko([I("wui-snackbar")],Ir);var e1=A`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var Nr=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Wt=class extends T{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,r)=>{let o=r===this.activeTab;return f`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(r)}
          data-active=${o}
          data-testid="tab-${e.label?.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?f`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,r){let o=this.buttons[this.activeTab],i=this.buttons[e],n=o?.querySelector("wui-text"),a=i?.querySelector("wui-text"),s=i?.getBoundingClientRect(),c=a?.getBoundingClientRect();o&&n&&!r&&e!==this.activeTab&&(n.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),o.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&s&&c&&a&&(e!==this.activeTab||r)&&(this.localTabWidth=`${Math.round(s.width+c.width)+6}px`,i.animate([{width:`${s.width+c.width}px`}],{duration:r?0:500,fill:"forwards",easing:"ease"}),a.animate([{opacity:1}],{duration:r?0:125,delay:r?0:200,fill:"forwards",easing:"ease"}))}};Wt.styles=[O,U,e1];Nr([l({type:Array})],Wt.prototype,"tabs",void 0);Nr([l()],Wt.prototype,"onTabChange",void 0);Nr([l({type:Array})],Wt.prototype,"buttons",void 0);Nr([l({type:Boolean})],Wt.prototype,"disabled",void 0);Nr([l()],Wt.prototype,"localTabWidth",void 0);Nr([kr()],Wt.prototype,"activeTab",void 0);Nr([kr()],Wt.prototype,"isDense",void 0);Wt=Nr([I("wui-tabs")],Wt);var t1=A`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-l);
    background: var(--wui-color-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var Za=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},_i=class extends T{constructor(){super(...arguments),this.text=""}render(){return f`
      <button ontouchstart>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?f`<wui-image src=${this.imageSrc}></wui-image>`:f`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};_i.styles=[O,U,t1];Za([l()],_i.prototype,"imageSrc",void 0);Za([l()],_i.prototype,"text",void 0);_i=Za([I("wui-token-button")],_i);var r1=A`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Sn=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Ro=class extends T{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,f`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${this.variant==="fill"?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Ro.styles=[O,U,r1];Sn([l()],Ro.prototype,"placement",void 0);Sn([l()],Ro.prototype,"variant",void 0);Sn([l()],Ro.prototype,"message",void 0);Ro=Sn([I("wui-tooltip")],Ro);var o1=A`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var Or=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Vt=class extends T{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver(e=>{e.forEach(r=>{r.isIntersecting?this.visible=!0:this.visible=!1})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){if(!this.visible)return null;let e=this.amount&&this.price?be.multiply(this.price,this.amount)?.toFixed(3):null;return f`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${e?f`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${ne.formatNumberToLocalString(e,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?f`<wui-text variant="small-400" color="fg-200">
                  ${ne.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?f`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?f`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};Vt.styles=[O,U,o1];Or([l()],Vt.prototype,"imageSrc",void 0);Or([l()],Vt.prototype,"name",void 0);Or([l()],Vt.prototype,"symbol",void 0);Or([l()],Vt.prototype,"price",void 0);Or([l()],Vt.prototype,"amount",void 0);Or([kr()],Vt.prototype,"visible",void 0);Or([kr()],Vt.prototype,"imageError",void 0);Vt=Or([I("wui-token-list-item")],Vt);var i1=A`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var An=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Io=class extends T{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,f`${this.templateVisual()}`}templateVisual(){return this.imageSrc?f`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:f`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Io.styles=[O,i1];An([l()],Io.prototype,"imageSrc",void 0);An([l()],Io.prototype,"alt",void 0);An([l({type:Boolean})],Io.prototype,"borderRadiusFull",void 0);Io=An([I("wui-visual-thumbnail")],Io);var n1=A`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;var Tn=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},No=class extends T{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return f`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};No.styles=[O,U,n1];Tn([l()],No.prototype,"label",void 0);Tn([l()],No.prototype,"description",void 0);Tn([l()],No.prototype,"icon",void 0);No=Tn([I("wui-notice-card")],No);var a1=A`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-150), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var Wa=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Ha=100,Ei=class extends T{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(e){super.updated(e),(e.has("textTitle")||e.has("overflowedContent"))&&setTimeout(()=>{this.checkHeight()},1)}checkHeight(){this.updateComplete.then(()=>{let e=this.shadowRoot?.querySelector(".heightContent"),r=this.shadowRoot?.querySelector(".textContent");if(e&&r){this.scrollElement=e;let o=r?.scrollHeight;o&&o>Ha&&(this.enableAccordion=!0,this.scrollHeightElement=o,this.requestUpdate())}})}render(){return f`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${this.enableAccordion?!!this.toggled:!0}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){let e=this.shadowRoot?.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?`${Ha}px`:`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:`${Ha}px`}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?f` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};Ei.styles=[O,U,a1];Wa([l()],Ei.prototype,"textTitle",void 0);Wa([l()],Ei.prototype,"overflowedContent",void 0);Ei=Wa([I("wui-list-accordion")],Ei);var s1=A`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var kn=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Oo=class extends T{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return f`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?f`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?f` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:f`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Oo.styles=[O,U,s1];kn([l()],Oo.prototype,"imageSrc",void 0);kn([l()],Oo.prototype,"textTitle",void 0);kn([l()],Oo.prototype,"textValue",void 0);Oo=kn([I("wui-list-content")],Oo);var l1=A`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Po=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Pr=class extends T{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return f`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?f`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?f`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:f`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};Pr.styles=[O,U,l1];Po([l()],Pr.prototype,"imageSrc",void 0);Po([l()],Pr.prototype,"name",void 0);Po([l({type:Boolean})],Pr.prototype,"disabled",void 0);Po([l({type:Boolean})],Pr.prototype,"selected",void 0);Po([l({type:Boolean})],Pr.prototype,"transparent",void 0);Pr=Po([I("wui-list-network")],Pr);var c1=A`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Lo=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Lr=class extends T{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return f`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?f`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:f`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Lr.styles=[O,U,c1];Lo([l()],Lr.prototype,"amount",void 0);Lo([l()],Lr.prototype,"networkCurreny",void 0);Lo([l()],Lr.prototype,"networkImageUrl",void 0);Lo([l()],Lr.prototype,"receiverAddress",void 0);Lo([l()],Lr.prototype,"addressExplorerUrl",void 0);Lr=Lo([I("wui-list-wallet-transaction")],Lr);var u1=A`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-060);
    }
  }
`;var p1=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Rn=class extends T{constructor(){super(...arguments),this.text=""}render(){return f`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};Rn.styles=[O,U,u1];p1([l()],Rn.prototype,"text",void 0);Rn=p1([I("wui-promo")],Rn);var d1=A`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var Va=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Si=class extends T{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return f`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};Si.styles=[O,d1];Va([l()],Si.prototype,"dollars",void 0);Va([l()],Si.prototype,"pennies",void 0);Si=Va([I("wui-balance")],Si);var f1=A`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var Mo=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Mr=class extends T{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return f`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${ne.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?f`<wui-image src=${this.networkSrc}></wui-image>`:f`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Mr.styles=[O,U,f1];Mo([l()],Mr.prototype,"networkSrc",void 0);Mo([l()],Mr.prototype,"avatarSrc",void 0);Mo([l()],Mr.prototype,"profileName",void 0);Mo([l()],Mr.prototype,"address",void 0);Mo([l()],Mr.prototype,"icon",void 0);Mr=Mo([I("wui-profile-button")],Mr);var h1=A`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;function Ee(t,e,r,o){let i=t[e];return _e(t,()=>{let n=t[e];Object.is(i,n)||r(i=n)},o)}var qA=Symbol();function m1(t){let e=re({data:Array.from(t||[]),has(r){return this.data.some(o=>o[0]===r)},set(r,o){let i=this.data.find(n=>n[0]===r);return i?i[1]=o:this.data.push([r,o]),this},get(r){var o;return(o=this.data.find(i=>i[0]===r))==null?void 0:o[1]},delete(r){let o=this.data.findIndex(i=>i[0]===r);return o===-1?!1:(this.data.splice(o,1),!0)},clear(){this.data.splice(0)},get size(){return this.data.length},toJSON(){return new Map(this.data)},forEach(r){this.data.forEach(o=>{r(o[1],o[0],this)})},keys(){return this.data.map(r=>r[0]).values()},values(){return this.data.map(r=>r[1]).values()},entries(){return new Map(this.data).entries()},get[Symbol.toStringTag](){return"Map"},[Symbol.iterator](){return this.entries()}});return Object.defineProperties(e,{data:{enumerable:!1},size:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(e),e}var Ga="https://secure.walletconnect.org",qa=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:"",supportedChains:["evm"]},{label:"Meld.io",name:"meld",feeRange:"1-2%",url:"https://meldcrypto.com",supportedChains:["evm","solana"]}];var g1="WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU",Ie={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:Ga,SECURE_SITE_DASHBOARD:`${Ga}/dashboard`,SECURE_SITE_FAVICON:`${Ga}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NATIVE_TOKEN_ADDRESS:{evm:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111"},CONVERT_SLIPPAGE_TOLERANCE:1,DEFAULT_FEATURES:{swaps:!0,onramp:!0,analytics:!0,allWallets:"SHOW",disableAppend:!1,enableEIP6963:!1}};var Ce={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(t,e=""){return t?.id.toLocaleLowerCase().includes(e.toLowerCase())},isAndroid(){let t=window.navigator.userAgent.toLowerCase();return Ce.isMobile()&&t.includes("android")},isIos(){let t=window.navigator.userAgent.toLowerCase();return Ce.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=Ie.TEN_SEC_MS:!0},isAllowedRetry(t){return Date.now()-t>=Ie.ONE_SEC_MS},copyToClopboard(t){navigator.clipboard.writeText(t)},getPairingExpiry(){return Date.now()+Ie.FOUR_MINUTES_MS},getNetworkId(t){return t?.split(":")[1]},getPlainAddress(t){return t?.split(":")[2]},wait(t){return L(this,null,function*(){return new Promise(e=>{setTimeout(e,t)})})},debounce(t,e=500){let r;return(...o)=>{function i(){t(...o)}r&&clearTimeout(r),r=setTimeout(i,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if(Ce.isHttpUrl(t))return this.formatUniversalUrl(t,e);let r=t;r.includes("://")||(r=t.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`);let o=encodeURIComponent(e);return{redirect:`${r}wc?uri=${o}`,href:r}},formatUniversalUrl(t,e){if(!Ce.isHttpUrl(t))return this.formatNativeUrl(t,e);let r=t;r.endsWith("/")||(r=`${r}/`);let o=encodeURIComponent(e);return{redirect:`${r}wc?uri=${o}`,href:r}},openHref(t,e,r){window.open(t,e,r||"noreferrer noopener")},returnOpenHref(t,e,r){return window.open(t,e,r||"noreferrer noopener")},preloadImage(t){return L(this,null,function*(){let e=new Promise((r,o)=>{let i=new Image;i.onload=r,i.onerror=o,i.crossOrigin="anonymous",i.src=t});return Promise.race([e,Ce.wait(2e3)])})},formatBalance(t,e){let r="0.000";if(typeof t=="string"){let o=Number(t);if(o){let i=Math.floor(o*1e3)/1e3;i&&(r=i.toString())}}return`${r}${e?` ${e}`:""}`},formatBalance2(t,e){let r;if(t==="0")r="0";else if(typeof t=="string"){let o=Number(t);o&&(r=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return{value:r??"0",rest:r==="0"?"000":"",symbol:e}},getApiUrl(){return $e.W3M_API_URL},getBlockchainApiUrl(){return $e.BLOCKCHAIN_API_RPC_URL},getAnalyticsUrl(){return $e.PULSE_API_URL},getUUID(){return crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{let e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})},parseError(t){return typeof t=="string"?t:typeof t?.issues?.[0]?.message=="string"?t.issues[0].message:t instanceof Error?t.message:"Unknown error"},sortRequestedNetworks(t,e=[]){let r={};return e&&t&&(t.forEach((o,i)=>{r[o]=i}),e.sort((o,i)=>{let n=r[o.id],a=r[i.id];return n!==void 0&&a!==void 0?n-a:n!==void 0?-1:a!==void 0?1:0})),e},calculateBalance(t){let e=0;for(let r of t)e+=r.value??0;return e},formatTokenBalance(t){let e=t.toFixed(2),[r,o]=e.split(".");return{dollars:r,pennies:o}},isAddress(t,e="evm"){switch(e){case"evm":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(t)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(t)||/^(?:0x)?[0-9A-F]{40}$/iu.test(t))return!0}else return!1;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(t);default:return!1}},uniqueBy(t,e){let r=new Set;return t.filter(o=>{let i=o[e];return r.has(i)?!1:(r.add(i),!0)})}};function Ai(...t){return L(this,null,function*(){let e=yield fetch(...t);if(!e.ok)throw new Error(`HTTP status code: ${e.status}`,{cause:e});return e})}var hr=class{constructor({baseUrl:e,clientId:r}){this.baseUrl=e,this.clientId=r}get(n){return L(this,null,function*(){var a=n,{headers:e,signal:r,cache:o}=a,i=Dr(a,["headers","signal","cache"]);let s=this.createUrl(i);return(yield Ai(s,{method:"GET",headers:e,signal:r,cache:o})).json()})}getBlob(i){return L(this,null,function*(){var n=i,{headers:e,signal:r}=n,o=Dr(n,["headers","signal"]);let a=this.createUrl(o);return(yield Ai(a,{method:"GET",headers:e,signal:r})).blob()})}post(n){return L(this,null,function*(){var a=n,{body:e,headers:r,signal:o}=a,i=Dr(a,["body","headers","signal"]);let s=this.createUrl(i);return(yield Ai(s,{method:"POST",headers:r,body:e?JSON.stringify(e):void 0,signal:o})).json()})}put(n){return L(this,null,function*(){var a=n,{body:e,headers:r,signal:o}=a,i=Dr(a,["body","headers","signal"]);let s=this.createUrl(i);return(yield Ai(s,{method:"PUT",headers:r,body:e?JSON.stringify(e):void 0,signal:o})).json()})}delete(n){return L(this,null,function*(){var a=n,{body:e,headers:r,signal:o}=a,i=Dr(a,["body","headers","signal"]);let s=this.createUrl(i);return(yield Ai(s,{method:"DELETE",headers:r,body:e?JSON.stringify(e):void 0,signal:o})).json()})}createUrl({path:e,params:r}){let o=new URL(e,this.baseUrl);return r&&Object.entries(r).forEach(([i,n])=>{n&&o.searchParams.append(i,n)}),this.clientId&&o.searchParams.append("clientId",this.clientId),o}};var Ya="WALLETCONNECT_DEEPLINK_CHOICE",w1="@w3m/recent",v1="@w3m/connected_connector",y1="@w3m/connected_social",kp="@w3m-storage/SOCIAL_USERNAME",Qe={setWalletConnectDeepLink({href:t,name:e}){try{localStorage.setItem(Ya,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let t=localStorage.getItem(Ya);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(Ya)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(t){try{let e=Qe.getRecentWallets();e.find(o=>o.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),localStorage.setItem(w1,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let t=localStorage.getItem(w1);return t?JSON.parse(t):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedConnector(t){try{localStorage.setItem(v1,t)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(v1)}catch{console.info("Unable to get Connected Connector")}},setConnectedSocialProvider(t){try{localStorage.setItem(y1,t)}catch{console.info("Unable to set Connected Social Provider")}},getConnectedSocialProvider(){try{return localStorage.getItem(y1)}catch{console.info("Unable to get Connected Social Provider")}},getConnectedSocialUsername(){try{return localStorage.getItem(kp)}catch{console.info("Unable to get Connected Social Username")}}};var At=re({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),ct={state:At,subscribeNetworkImages(t){return _e(At.networkImages,()=>t(At.networkImages))},subscribeKey(t,e){return Ee(At,t,e)},subscribe(t){return _e(At,()=>t(At))},setWalletImage(t,e){At.walletImages[t]=e},setNetworkImage(t,e){At.networkImages[t]=e},setChainImage(t,e){At.chainImages[t]=e},setConnectorImage(t,e){At.connectorImages[t]=e},setTokenImage(t,e){At.tokenImages[t]=e},setCurrencyImage(t,e){At.currencyImages[t]=e}};var mr=re({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),$o={state:mr,subscribe(t){return _e(mr,()=>t(mr))},setThemeMode(t){mr.themeMode=t;try{let e=Tt.getAuthConnector();if(e){let r=$o.getSnapshot().themeVariables;e.provider.syncTheme({themeMode:t,themeVariables:r,w3mThemeVariables:jt(r,t)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(t){mr.themeVariables=N(N({},mr.themeVariables),t);try{let e=Tt.getAuthConnector();if(e){let r=$o.getSnapshot().themeVariables;e.provider.syncTheme({themeVariables:r,w3mThemeVariables:jt(mr.themeVariables,mr.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot(){return Jo(mr)}};var Gt=re({unMergedConnectors:[],connectors:[]}),Tt={state:Gt,subscribeKey(t,e){return Ee(Gt,t,e)},setConnectors(t){t.forEach(this.syncIfAuthConnector),Gt.unMergedConnectors=[...Gt.unMergedConnectors,...t].filter(e=>{try{if(!!!re(e))throw new Error("Connector is not available");return!0}catch(r){return console.error("ConnectorController.setConnectors: Not possible to add connector",{connector:e,error:r}),!1}}),Gt.connectors=this.mergeMultiChainConnectors(Gt.unMergedConnectors)},mergeMultiChainConnectors(t){let e=this.generateConnectorMapByName(t);return Array.from(e.values()).map(o=>o.length>1?{name:o[0]?.name,imageUrl:o[0]?.imageUrl,imageId:o[0]?.imageId,providers:this.getUniqueConnectorsByName(o),type:"MULTI_CHAIN"}:o[0])},generateConnectorMapByName(t){let e=new Map;return t.forEach(r=>{let{name:o}=r;if(!o)return;let i=e.get(o)||[];i.find(a=>a.chain===r.chain)||i.push(r),e.set(o,i)}),e},getUniqueConnectorsByName(t){let e=[];return t.forEach(r=>{e.find(o=>o.chain===r.chain)||e.push(W(N({},r),{name:$e.CHAIN_NAME_MAP[r.chain]}))}),e},addConnector(t){this.setConnectors([t])},getAuthConnector(){return Gt.connectors.find(t=>t.type==="AUTH")},getAnnouncedConnectorRdns(){return Gt.connectors.filter(t=>t.type==="ANNOUNCED").map(t=>t.info?.rdns)},getConnectors(){return Gt.connectors},getConnector(t,e){return Gt.connectors.find(r=>r.explorerId===t||r.info?.rdns===e)},syncIfAuthConnector(t){if(t.id!=="w3mAuth")return;let e=t,r=Jo(ae.state),o=$o.getSnapshot().themeMode,i=$o.getSnapshot().themeVariables;e?.provider?.syncDappData?.({metadata:r.metadata,sdkVersion:r.sdkVersion,projectId:r.projectId}),e.provider.syncTheme({themeMode:o,themeVariables:i,w3mThemeVariables:jt(i,o)})}};var Rp=Ce.getAnalyticsUrl(),Ip=new hr({baseUrl:Rp,clientId:null}),Np=["MODAL_CREATED"],Uo=re({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),ze={state:Uo,subscribe(t){return _e(Uo,()=>t(Uo))},_getApiHeaders(){let{projectId:t,sdkType:e,sdkVersion:r}=ae.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":r}},_sendAnalyticsEvent(t){return L(this,null,function*(){try{if(Np.includes(t.data.event)||typeof window>"u")return;yield Ip.post({path:"/e",headers:ze._getApiHeaders(),body:{eventId:Ce.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:t.data}})}catch{}})},sendEvent(t){Uo.timestamp=Date.now(),Uo.data=t,ae.state.enableAnalytics&&ze._sendAnalyticsEvent(Uo)}};var Ti=re({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0}),kt={state:Ti,subscribe(t){return _e(Ti,()=>t(Ti))},set(t){Object.assign(Ti,N(N({},Ti),t))}};var Op={isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]},Pp={supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]},we=re({chains:m1(),activeChain:void 0,activeCaipNetwork:void 0}),D={state:we,subscribeKey(t,e){return Ee(we,t,e)},subscribeChain(t){let e;return _e(we.chains,()=>{let r=we.activeChain;if(r){let o=we.chains.get(r);(!e||e!==o)&&(e=o,t(o))}})},subscribeChainProp(t,e){let r;return _e(we.chains,()=>{let o=we.activeChain;if(o){let i=we.chains.get(o)?.[t];r!==i&&(r=i,e(i))}})},initialize(t){let e=t?.[0];if(!e)throw new Error("Adapter is required to initialize ChainController");we.activeChain=e.chain,kt.set({activeChain:e.chain}),this.setActiveCaipNetwork(e.defaultChain),t.forEach(r=>{we.chains.set(r.chain,{chain:r.chain,connectionControllerClient:r.connectionControllerClient,networkControllerClient:r.networkControllerClient,accountState:Op,networkState:Pp})})},setChainNetworkData(t,e,r=!1){if(!t)throw new Error("Chain is required to update chain network data");let o=we.chains.get(t);o&&(o.networkState=Ve(N(N({},o.networkState),e)),we.chains.set(t,Ve(o)),(r||we.chains.size===1||we.activeChain===t)&&ue.replaceState(o.networkState))},setChainAccountData(t,e,r=!0){if(!t)throw new Error("Chain is required to update chain account data");let o=we.chains.get(t);o&&(o.accountState=Ve(N(N({},o.accountState),e)),we.chains.set(t,o),(r||we.chains.size===1||we.activeChain===t)&&pe.replaceState(o.accountState))},setAccountProp(t,e,r){this.setChainAccountData(r,{[t]:e})},setActiveChain(t){let e=t?we.chains.get(t):void 0;e&&e.chain!==we.activeChain&&(we.activeChain=e.chain,we.activeCaipNetwork=e.networkState?.caipNetwork?Ve(e.networkState?.caipNetwork):void 0,pe.replaceState(e.accountState),ue.replaceState(e.networkState),this.setCaipNetwork(e.chain,e.networkState?.caipNetwork),kt.set({activeChain:t,selectedNetworkId:e.networkState?.caipNetwork?.id}))},setActiveCaipNetwork(t){t&&(t.chain!==we.activeChain&&this.setActiveChain(t.chain),we.activeCaipNetwork=Ve(t),we.activeChain=t.chain,this.setCaipNetwork(t.chain,t,!0),kt.set({activeChain:t.chain,selectedNetworkId:t?.id}))},setCaipNetwork(t,e,r=!1){this.setChainNetworkData(t,{caipNetwork:e},r)},setActiveConnector(t){t&&(we.activeConnector=Ve(t))},getNetworkControllerClient(){let t=we.activeChain;if(!t)throw new Error("Chain is required to get network controller client");let e=we.chains.get(t);if(!e)throw new Error("Chain adapter not found");if(!e.networkControllerClient)throw new Error("NetworkController client not set");return e.networkControllerClient},getConnectionControllerClient(t){let e=t||we.activeChain;if(!e)throw new Error("Chain is required to get connection controller client");let r=we.chains.get(e);if(!r)throw new Error("Chain adapter not found");if(!r.connectionControllerClient)throw new Error("ConnectionController client not set");return r.connectionControllerClient},getAccountProp(t,e){let r=we.activeChain;if(e&&(r=e),!r)return;let o=we.chains.get(r)?.accountState;if(o)return o[t]},getNetworkProp(t){let e=we.activeChain;if(!e)return;let r=we.chains.get(e)?.networkState;if(r)return r[t]},resetAccount(t){let e=t;if(!e)throw new Error("Chain is required to set account prop");this.setChainAccountData(e,Ve({isConnected:!1,smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountType:void 0,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0}))}};var Ka=re({supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]}),ue={state:Ka,replaceState(t){t&&Object.assign(Ka,Ve(t))},subscribeKey(t,e){let r;return D.subscribeChainProp("networkState",o=>{if(o){let i=o[t];r!==i&&(r=i,e(i))}})},_getClient(){return D.getNetworkControllerClient()},initializeDefaultNetwork(){let t=this.getRequestedCaipNetworks();t.length>0&&this.setCaipNetwork(t[0])},setDefaultCaipNetwork(t){t&&(D.setCaipNetwork(t.chain,t,!0),D.setChainNetworkData(t.chain,{isDefaultCaipNetwork:!0}),kt.set({selectedNetworkId:t.id}))},setActiveCaipNetwork(t){t&&(D.setActiveCaipNetwork(t),D.setChainNetworkData(t.chain,{caipNetwork:t}),kt.set({activeChain:t.chain,selectedNetworkId:t?.id}),D.state.chains.get(t.chain)?.networkState?.allowUnsupportedChain||this.checkIfSupportedNetwork()||this.showUnsupportedChainUI())},setCaipNetwork(t){if(t){if(!t?.chain)throw new Error("chain is required to set active network");D.setCaipNetwork(t?.chain,t),D.state.chains.get(t.chain)?.networkState?.allowUnsupportedChain||this.checkIfSupportedNetwork()||this.showUnsupportedChainUI()}},setRequestedCaipNetworks(t,e){D.setChainNetworkData(e,{requestedCaipNetworks:t})},setAllowUnsupportedChain(t,e){D.setChainNetworkData(e||D.state.activeChain,{allowUnsupportedChain:t})},setSmartAccountEnabledNetworks(t,e){D.setChainNetworkData(e,{smartAccountEnabledNetworks:t})},getRequestedCaipNetworks(t){let e;if(!D.state.activeChain)throw new Error("activeChain is required to get requested networks");if(t){let n=t;if(!n)throw new Error("chain is required to get requested networks");e=[n]}else e=[...D.state.chains.keys()];let r=[],o=[];return e.forEach(n=>{D.state.chains.get(n)?.networkState?.approvedCaipNetworkIds&&r.push(...D.state.chains.get(n)?.networkState?.approvedCaipNetworkIds||[]),D.state.chains.get(n)?.networkState?.requestedCaipNetworks&&o.push(...D.state.chains.get(n)?.networkState?.requestedCaipNetworks||[])}),Ce.sortRequestedNetworks(r,o)},switchActiveNetwork(t){return L(this,null,function*(){let e=t?D.state.chains.get(t.chain)?.networkControllerClient:void 0;if(!e)throw new Error("networkControllerClient not found for given network object");D.setActiveCaipNetwork(t),yield e?.switchCaipNetwork(t),t&&ze.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:t.id}})})},getApprovedCaipNetworkIds(t){if(t){let r=t;if(!r)throw new Error("chain is required to get approved network IDs");return D.state.chains.get(r)?.networkState?.approvedCaipNetworkIds}let e=[];return Object.values(D.state.chains).forEach(r=>{r.networkState.approvedCaipNetworkIds&&e.push(...r.networkState?.approvedCaipNetworkIds||[])}),e},setApprovedCaipNetworksData(t){return L(this,null,function*(){let r=yield D.getNetworkControllerClient().getApprovedCaipNetworksData();if(!t)throw new Error("chain is required to set approved network data");D.setChainNetworkData(t,{approvedCaipNetworkIds:r?.approvedCaipNetworkIds,supportsAllNetworks:r?.supportsAllNetworks||!1})})},checkIfSupportedNetwork(){let t=D.state.activeChain;if(!t)return!1;let e=D.state.chains.get(t)?.networkState?.caipNetwork,r=this.getRequestedCaipNetworks();return r.length?r?.some(o=>o.id===e?.id):!0},checkIfSmartAccountEnabled(){let t=ni.caipNetworkIdToNumber(Ka.caipNetwork?.id);if(!D.state.activeChain)throw new Error("activeChain is required to check if smart account is enabled");return t?!!D.getNetworkProp("smartAccountEnabledNetworks")?.includes(t):!1},checkIfNamesSupported(){let t=D.state.activeChain;return t?D.state.chains.get(t)?.networkState?.caipNetwork?.chain===$e.CHAIN.EVM:!1},resetNetwork(){let t=D.state.activeChain;if(!t)throw new Error("chain is required to reset network");D.setChainNetworkData(t,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]})},getSupportsAllNetworks(){let t=D.state.activeChain;if(!t)throw new Error("chain is required to check if network supports all networks");return D.state.chains.get(t)?.networkState?.supportsAllNetworks},showUnsupportedChainUI(){setTimeout(()=>{gr.open({view:"UnsupportedChain"})},300)},getActiveNetworkTokenAddress(){let t=Ie.NATIVE_TOKEN_ADDRESS[this.state.caipNetwork?.chain||"evm"];return`${this.state.caipNetwork?.id||"eip155:1"}:${t}`}};var Lp=Ce.getApiUrl(),et=new hr({baseUrl:Lp,clientId:null}),Mp="40",x1="4",$p=20,qe=re({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1,excludedRDNS:[]}),de={state:qe,subscribeKey(t,e){return Ee(qe,t,e)},_getApiHeaders(){let{projectId:t,sdkType:e,sdkVersion:r}=ae.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":r}},_filterOutExtensions(t){return ae.state.isUniversalProvider?t.filter(e=>!!(e.mobile_link||e.desktop_link||e.webapp_link)):t},_fetchWalletImage(t){return L(this,null,function*(){let e=`${et.baseUrl}/getWalletImage/${t}`,r=yield et.getBlob({path:e,headers:de._getApiHeaders()});ct.setWalletImage(t,URL.createObjectURL(r))})},_fetchNetworkImage(t){return L(this,null,function*(){let e=`${et.baseUrl}/public/getAssetImage/${t}`,r=yield et.getBlob({path:e,headers:de._getApiHeaders()});ct.setNetworkImage(t,URL.createObjectURL(r))})},_fetchConnectorImage(t){return L(this,null,function*(){let e=`${et.baseUrl}/public/getAssetImage/${t}`,r=yield et.getBlob({path:e,headers:de._getApiHeaders()});ct.setConnectorImage(t,URL.createObjectURL(r))})},_fetchCurrencyImage(t){return L(this,null,function*(){let e=`${et.baseUrl}/public/getCurrencyImage/${t}`,r=yield et.getBlob({path:e,headers:de._getApiHeaders()});ct.setCurrencyImage(t,URL.createObjectURL(r))})},_fetchTokenImage(t){return L(this,null,function*(){let e=`${et.baseUrl}/public/getTokenImage/${t}`,r=yield et.getBlob({path:e,headers:de._getApiHeaders()});ct.setTokenImage(t,URL.createObjectURL(r))})},fetchNetworkImages(){return L(this,null,function*(){let e=ue.getRequestedCaipNetworks()?.map(({imageId:r})=>r).filter(Boolean);e&&(yield Promise.allSettled(e.map(r=>de._fetchNetworkImage(r))))})},fetchConnectorImages(){return L(this,null,function*(){let{connectors:t}=Tt.state,e=t.map(({imageId:r})=>r).filter(Boolean);yield Promise.allSettled(e.map(r=>de._fetchConnectorImage(r)))})},fetchCurrencyImages(){return L(this,arguments,function*(t=[]){yield Promise.allSettled(t.map(e=>de._fetchCurrencyImage(e)))})},fetchTokenImages(){return L(this,arguments,function*(t=[]){yield Promise.allSettled(t.map(e=>de._fetchTokenImage(e)))})},fetchFeaturedWallets(){return L(this,null,function*(){let{featuredWalletIds:t}=ae.state;if(t?.length){let{data:e}=yield et.get({path:"/getWallets",headers:de._getApiHeaders(),params:{page:"1",entries:t?.length?String(t.length):x1,include:t?.join(",")}});e.sort((o,i)=>t.indexOf(o.id)-t.indexOf(i.id));let r=e.map(o=>o.image_id).filter(Boolean);yield Promise.allSettled(r.map(o=>de._fetchWalletImage(o))),qe.featured=e}})},fetchRecommendedWallets(){return L(this,null,function*(){let{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:r}=ae.state,o=[...e??[],...r??[]].filter(Boolean),{data:i,count:n}=yield et.get({path:"/getWallets",headers:de._getApiHeaders(),params:{page:"1",chains:ue.state.caipNetwork?.id,entries:x1,include:t?.join(","),exclude:o?.join(",")}}),a=Qe.getRecentWallets(),s=i.map(x=>x.image_id).filter(Boolean),c=a.map(x=>x.image_id).filter(Boolean);yield Promise.allSettled([...s,...c].map(x=>de._fetchWalletImage(x))),qe.recommended=i,qe.count=n??0})},fetchWallets(e){return L(this,arguments,function*({page:t}){let{includeWalletIds:r,excludeWalletIds:o,featuredWalletIds:i}=ae.state,n=[...qe.recommended.map(({id:x})=>x),...o??[],...i??[]].filter(Boolean),{data:a,count:s}=yield et.get({path:"/getWallets",headers:de._getApiHeaders(),params:{page:String(t),entries:Mp,chains:ue.state.caipNetwork?.id,include:r?.join(","),exclude:n.join(",")}}),c=a.slice(0,$p).map(x=>x.image_id).filter(Boolean);yield Promise.allSettled(c.map(x=>de._fetchWalletImage(x))),qe.wallets=Ce.uniqueBy([...qe.wallets,...de._filterOutExtensions(a)],"id"),qe.count=s>qe.count?s:qe.count,qe.page=t})},searchWalletByIds(e){return L(this,arguments,function*({ids:t}){let{data:r}=yield et.get({path:"/getWallets",headers:de._getApiHeaders(),params:{page:"1",entries:String(t.length),chains:ue.state.caipNetwork?.id,include:t?.join(",")}});r&&r.forEach(o=>{o?.rdns&&qe.excludedRDNS.push(o.rdns)})})},searchWallet(e){return L(this,arguments,function*({search:t}){let{includeWalletIds:r,excludeWalletIds:o}=ae.state;qe.search=[];let{data:i}=yield et.get({path:"/getWallets",headers:de._getApiHeaders(),params:{page:"1",entries:"100",search:t?.trim(),chains:ue.state.caipNetwork?.id,include:r?.join(","),exclude:o?.join(",")}}),n=i.map(a=>a.image_id).filter(Boolean);yield Promise.allSettled([...n.map(a=>de._fetchWalletImage(a)),Ce.wait(300)]),qe.search=de._filterOutExtensions(i)})},reFetchWallets(){return L(this,null,function*(){qe.page=1,qe.wallets=[],yield de.fetchFeaturedWallets(),yield de.fetchRecommendedWallets()})},prefetch(){let t=[de.fetchFeaturedWallets(),de.fetchRecommendedWallets(),de.fetchNetworkImages(),de.fetchConnectorImages()];ae.state.enableAnalytics&&t.push(de.fetchAnalyticsConfig()),qe.prefetchPromise=Promise.race([Promise.allSettled(t)])},fetchAnalyticsConfig(){return L(this,null,function*(){let{isAnalyticsEnabled:t}=yield et.get({path:"/getAnalyticsConfig",headers:de._getApiHeaders()});ae.setEnableAnalytics(t)})}};var Be=re({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined",enableAnalytics:Ie.DEFAULT_FEATURES.analytics,enableOnramp:Ie.DEFAULT_FEATURES.onramp,enableSwaps:Ie.DEFAULT_FEATURES.swaps,allWallets:Ie.DEFAULT_FEATURES.allWallets,disableAppend:Ie.DEFAULT_FEATURES.disableAppend,enableEIP6963:Ie.DEFAULT_FEATURES.enableEIP6963}),ae={state:Be,subscribeKey(t,e){return Ee(Be,t,e)},setOptions(t){Object.assign(Be,t)},setProjectId(t){Be.projectId=t},setAllWallets(t=Ie.DEFAULT_FEATURES.allWallets){Be.allWallets=t},setIncludeWalletIds(t){Be.includeWalletIds=t},setExcludeWalletIds(t){Be.excludeWalletIds=t,t&&de.searchWalletByIds({ids:t})},setFeaturedWalletIds(t){Be.featuredWalletIds=t},setTokens(t){Be.tokens=t},setTermsConditionsUrl(t){Be.termsConditionsUrl=t},setPrivacyPolicyUrl(t){Be.privacyPolicyUrl=t},setCustomWallets(t){Be.customWallets=t},setIsSiweEnabled(t){Be.isSiweEnabled=t},setIsUniversalProvider(t){Be.isUniversalProvider=t},setEnableAnalytics(t=Ie.DEFAULT_FEATURES.analytics){Be.enableAnalytics=t},setSdkVersion(t){Be.sdkVersion=t},setMetadata(t){Be.metadata=t},setOnrampEnabled(t=Ie.DEFAULT_FEATURES.onramp){Be.enableOnramp=t},setDisableAppend(t=Ie.DEFAULT_FEATURES.disableAppend){Be.disableAppend=t},setEIP6963Enabled(t=Ie.DEFAULT_FEATURES.enableEIP6963){Be.enableEIP6963=t},setHasMultipleAddresses(t){Be.hasMultipleAddresses=t},setEnableSwaps(t=Ie.DEFAULT_FEATURES.swaps){Be.enableSwaps=t}};var Up={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},b1=Ce.getBlockchainApiUrl(),Ze=re({clientId:null,api:new hr({baseUrl:b1,clientId:null})}),Ae={state:Ze,fetchIdentity({address:t}){return Ze.api.get({path:`/v1/identity/${t}`,params:{projectId:ae.state.projectId,sender:pe.state.address}})},fetchTransactions({account:t,projectId:e,cursor:r,onramp:o,signal:i,cache:n,chainId:a}){return Ze.api.get({path:`/v1/account/${t}/history`,params:{projectId:e,cursor:r,onramp:o,chainId:a},signal:i,cache:n})},fetchSwapQuote({projectId:t,amount:e,userAddress:r,from:o,to:i,gasPrice:n}){return Ze.api.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{projectId:t,amount:e,userAddress:r,from:o,to:i,gasPrice:n}})},fetchSwapTokens({projectId:t,chainId:e}){return Ze.api.get({path:"/v1/convert/tokens",params:{projectId:t,chainId:e}})},fetchTokenPrice({projectId:t,addresses:e}){return Ze.api.post({path:"/v1/fungible/price",body:{projectId:t,currency:"usd",addresses:e},headers:{"Content-Type":"application/json"}})},fetchSwapAllowance({projectId:t,tokenAddress:e,userAddress:r}){let{sdkType:o,sdkVersion:i}=ae.state;return Ze.api.get({path:"/v1/convert/allowance",params:{projectId:t,tokenAddress:e,userAddress:r},headers:{"Content-Type":"application/json","x-sdk-type":o,"x-sdk-version":i}})},fetchGasPrice({projectId:t,chainId:e}){let{sdkType:r,sdkVersion:o}=ae.state;return Ze.api.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json","x-sdk-type":r,"x-sdk-version":o},params:{projectId:t,chainId:e}})},generateSwapCalldata({amount:t,from:e,projectId:r,to:o,userAddress:i}){return Ze.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:t,eip155:{slippage:Ie.CONVERT_SLIPPAGE_TOLERANCE},from:e,projectId:r,to:o,userAddress:i}})},generateApproveCalldata({from:t,projectId:e,to:r,userAddress:o}){let{sdkType:i,sdkVersion:n}=ae.state;return Ze.api.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json","x-sdk-type":i,"x-sdk-version":n},params:{projectId:e,userAddress:o,from:t,to:r}})},getBalance(t,e,r){return L(this,null,function*(){let{sdkType:o,sdkVersion:i}=ae.state;return Ze.api.get({path:`/v1/account/${t}/balance`,headers:{"x-sdk-type":o,"x-sdk-version":i},params:{currency:"usd",projectId:ae.state.projectId,chainId:e,forceUpdate:r}})})},lookupEnsName(t){return L(this,null,function*(){return Ze.api.get({path:`/v1/profile/account/${t}${$e.WC_NAME_SUFFIX}`,params:{projectId:ae.state.projectId,apiVersion:"2"}})})},reverseLookupEnsName(e){return L(this,arguments,function*({address:t}){return Ze.api.get({path:`/v1/profile/reverse/${t}`,params:{sender:pe.state.address,projectId:ae.state.projectId,apiVersion:"2"}})})},getEnsNameSuggestions(t){return L(this,null,function*(){return Ze.api.get({path:`/v1/profile/suggestions/${t}`,params:{projectId:ae.state.projectId}})})},registerEnsName(i){return L(this,arguments,function*({coinType:t,address:e,message:r,signature:o}){return Ze.api.post({path:"/v1/profile/account",body:{coin_type:t,address:e,message:r,signature:o},headers:{"Content-Type":"application/json"}})})},generateOnRampURL(n){return L(this,arguments,function*({destinationWallets:t,partnerUserId:e,defaultNetwork:r,purchaseAmount:o,paymentAmount:i}){return(yield Ze.api.post({path:"/v1/generators/onrampurl",params:{projectId:ae.state.projectId},body:{destinationWallets:t,defaultNetwork:r,partnerUserId:e,defaultExperience:"buy",presetCryptoAmount:o,presetFiatAmount:i}})).url})},getOnrampOptions(){return L(this,null,function*(){try{return yield Ze.api.get({path:"/v1/onramp/options",params:{projectId:ae.state.projectId}})}catch{return Up}})},getOnrampQuote(i){return L(this,arguments,function*({purchaseCurrency:t,paymentCurrency:e,amount:r,network:o}){try{return yield Ze.api.post({path:"/v1/onramp/quote",params:{projectId:ae.state.projectId},body:{purchaseCurrency:t,paymentCurrency:e,amount:r,network:o}})}catch{return{coinbaseFee:{amount:r,currency:e.id},networkFee:{amount:r,currency:e.id},paymentSubtotal:{amount:r,currency:e.id},paymentTotal:{amount:r,currency:e.id},purchaseAmount:{amount:r,currency:e.id},quoteId:"mocked-quote-id"}}})},setClientId(t){Ze.clientId=t,Ze.api=new hr({baseUrl:b1,clientId:t})}};var Rt=re({message:"",variant:"success",open:!1}),Ne={state:Rt,subscribeKey(t,e){return Ee(Rt,t,e)},showLoading(t){Rt.message=t,Rt.variant="loading",Rt.open=!0},showSuccess(t){Rt.message=t,Rt.variant="success",Rt.open=!0},showError(t){let e=Ce.parseError(t);Rt.message=e,Rt.variant="error",Rt.open=!0},hide(){Rt.open=!1}};var Z1=_r(z1(),1);typeof window<"u"&&(window.Buffer||(window.Buffer=Z1.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));var H1=process.env.NEXT_PUBLIC_SECURE_SITE_SDK_URL||"https://secure.walletconnect.org/sdk",W1=process.env.NEXT_PUBLIC_DEFAULT_LOG_LEVEL||"error",q={APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",SOCIAL_USERNAME:"SOCIAL_USERNAME",SOCIAL:"@w3m/connected_social",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_CONNECT_SOCIAL:"@w3m-app/CONNECT_SOCIAL",APP_GET_SOCIAL_REDIRECT_URI:"@w3m-app/GET_SOCIAL_REDIRECT_URI",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",APP_CONNECT_FARCASTER:"@w3m-app/CONNECT_FARCASTER",APP_GET_FARCASTER_URI:"@w3m-app/GET_FARCASTER_URI",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_CONNECT_SOCIAL_SUCCESS:"@w3m-frame/CONNECT_SOCIAL_SUCCESS",FRAME_CONNECT_SOCIAL_ERROR:"@w3m-frame/CONNECT_SOCIAL_ERROR",FRAME_CONNECT_FARCASTER_SUCCESS:"@w3m-frame/CONNECT_FARCASTER_SUCCESS",FRAME_CONNECT_FARCASTER_ERROR:"@w3m-frame/CONNECT_FARCASTER_ERROR",FRAME_GET_FARCASTER_URI_SUCCESS:"@w3m-frame/GET_FARCASTER_URI_SUCCESS",FRAME_GET_FARCASTER_URI_ERROR:"@w3m-frame/GET_FARCASTER_URI_ERROR",FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",RPC_RESPONSE_TYPE_ERROR:"RPC_RESPONSE_ERROR",RPC_RESPONSE_TYPE_TX:"RPC_RESPONSE_TRANSACTION_HASH",RPC_RESPONSE_TYPE_OBJECT:"RPC_RESPONSE_OBJECT"},ke={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}};var ve;(function(t){t.assertEqual=i=>i;function e(i){}t.assertIs=e;function r(i){throw new Error}t.assertNever=r,t.arrayToEnum=i=>{let n={};for(let a of i)n[a]=a;return n},t.getValidEnumValues=i=>{let n=t.objectKeys(i).filter(s=>typeof i[i[s]]!="number"),a={};for(let s of n)a[s]=i[s];return t.objectValues(a)},t.objectValues=i=>t.objectKeys(i).map(function(n){return i[n]}),t.objectKeys=typeof Object.keys=="function"?i=>Object.keys(i):i=>{let n=[];for(let a in i)Object.prototype.hasOwnProperty.call(i,a)&&n.push(a);return n},t.find=(i,n)=>{for(let a of i)if(n(a))return a},t.isInteger=typeof Number.isInteger=="function"?i=>Number.isInteger(i):i=>typeof i=="number"&&isFinite(i)&&Math.floor(i)===i;function o(i,n=" | "){return i.map(a=>typeof a=="string"?`'${a}'`:a).join(n)}t.joinValues=o,t.jsonStringifyReplacer=(i,n)=>typeof n=="bigint"?n.toString():n})(ve||(ve={}));var q1=function(t){return t.mergeShapes=(e,r)=>N(N({},e),r),t}(q1||{}),Z=ve.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Ur=t=>{switch(typeof t){case"undefined":return Z.undefined;case"string":return Z.string;case"number":return isNaN(t)?Z.nan:Z.number;case"boolean":return Z.boolean;case"function":return Z.function;case"bigint":return Z.bigint;case"symbol":return Z.symbol;case"object":return Array.isArray(t)?Z.array:t===null?Z.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?Z.promise:typeof Map<"u"&&t instanceof Map?Z.map:typeof Set<"u"&&t instanceof Set?Z.set:typeof Date<"u"&&t instanceof Date?Z.date:Z.object;default:return Z.unknown}},B=ve.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),gd=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:"),vr=(()=>{class t extends Error{constructor(r){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};let o=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,o):this.__proto__=o,this.name="ZodError",this.issues=r}get errors(){return this.issues}format(r){let o=r||function(a){return a.message},i={_errors:[]},n=a=>{for(let s of a.issues)if(s.code==="invalid_union")s.unionErrors.map(n);else if(s.code==="invalid_return_type")n(s.returnTypeError);else if(s.code==="invalid_arguments")n(s.argumentsError);else if(s.path.length===0)i._errors.push(o(s));else{let c=i,x=0;for(;x<s.path.length;){let S=s.path[x];x===s.path.length-1?(c[S]=c[S]||{_errors:[]},c[S]._errors.push(o(s))):c[S]=c[S]||{_errors:[]},c=c[S],x++}}};return n(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,ve.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(r=o=>o.message){let o={},i=[];for(let n of this.issues)n.path.length>0?(o[n.path[0]]=o[n.path[0]]||[],o[n.path[0]].push(r(n))):i.push(r(n));return{formErrors:i,fieldErrors:o}}get formErrors(){return this.flatten()}}return t.create=e=>new t(e),t})(),Ii=(t,e)=>{let r;switch(t.code){case B.invalid_type:t.received===Z.undefined?r="Required":r=`Expected ${t.expected}, received ${t.received}`;break;case B.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(t.expected,ve.jsonStringifyReplacer)}`;break;case B.unrecognized_keys:r=`Unrecognized key(s) in object: ${ve.joinValues(t.keys,", ")}`;break;case B.invalid_union:r="Invalid input";break;case B.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${ve.joinValues(t.options)}`;break;case B.invalid_enum_value:r=`Invalid enum value. Expected ${ve.joinValues(t.options)}, received '${t.received}'`;break;case B.invalid_arguments:r="Invalid function arguments";break;case B.invalid_return_type:r="Invalid function return type";break;case B.invalid_date:r="Invalid date";break;case B.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(r=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(r=`${r} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?r=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?r=`Invalid input: must end with "${t.validation.endsWith}"`:ve.assertNever(t.validation):t.validation!=="regex"?r=`Invalid ${t.validation}`:r="Invalid";break;case B.too_small:t.type==="array"?r=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?r=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?r=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?r=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:r="Invalid input";break;case B.too_big:t.type==="array"?r=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?r=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?r=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?r=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?r=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:r="Invalid input";break;case B.custom:r="Invalid input";break;case B.invalid_intersection_types:r="Intersection results could not be merged";break;case B.not_multiple_of:r=`Number must be a multiple of ${t.multipleOf}`;break;case B.not_finite:r="Number must be finite";break;default:r=e.defaultError,ve.assertNever(t)}return{message:r}},Y1=Ii;function wd(t){Y1=t}function Ln(){return Y1}var Mn=t=>{let{data:e,path:r,errorMaps:o,issueData:i}=t,n=[...r,...i.path||[]],a=W(N({},i),{path:n}),s="",c=o.filter(x=>!!x).slice().reverse();for(let x of c)s=x(a,{data:e,defaultError:s}).message;return W(N({},i),{path:n,message:i.message||s})},vd=[];function H(t,e){let r=Mn({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Ln(),Ii].filter(o=>!!o)});t.common.issues.push(r)}var tt=class t{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,r){let o=[];for(let i of r){if(i.status==="aborted")return oe;i.status==="dirty"&&e.dirty(),o.push(i.value)}return{status:e.value,value:o}}static mergeObjectAsync(e,r){return L(this,null,function*(){let o=[];for(let i of r)o.push({key:yield i.key,value:yield i.value});return t.mergeObjectSync(e,o)})}static mergeObjectSync(e,r){let o={};for(let i of r){let{key:n,value:a}=i;if(n.status==="aborted"||a.status==="aborted")return oe;n.status==="dirty"&&e.dirty(),a.status==="dirty"&&e.dirty(),n.value!=="__proto__"&&(typeof a.value<"u"||i.alwaysSet)&&(o[n.value]=a.value)}return{status:e.value,value:o}}},oe=Object.freeze({status:"aborted"}),K1=t=>({status:"dirty",value:t}),nt=t=>({status:"valid",value:t}),ls=t=>t.status==="aborted",cs=t=>t.status==="dirty",Ni=t=>t.status==="valid",$n=t=>typeof Promise<"u"&&t instanceof Promise,K=function(t){return t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e?.message,t}(K||{}),Nt=class{constructor(e,r,o,i){this._cachedPath=[],this.parent=e,this.data=r,this._path=o,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},V1=(t,e)=>{if(Ni(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let r=new vr(t.common.issues);return this._error=r,this._error}}};function se(t){if(!t)return{};let{errorMap:e,invalid_type_error:r,required_error:o,description:i}=t;if(e&&(r||o))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:i}:{errorMap:(a,s)=>a.code!=="invalid_type"?{message:s.defaultError}:typeof s.data>"u"?{message:o??s.defaultError}:{message:r??s.defaultError},description:i}}var le=class{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Ur(e.data)}_getOrReturnCtx(e,r){return r||{common:e.parent.common,data:e.data,parsedType:Ur(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new tt,ctx:{common:e.parent.common,data:e.data,parsedType:Ur(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let r=this._parse(e);if($n(r))throw new Error("Synchronous parse encountered promise.");return r}_parseAsync(e){let r=this._parse(e);return Promise.resolve(r)}parse(e,r){let o=this.safeParse(e,r);if(o.success)return o.data;throw o.error}safeParse(e,r){var o;let i={common:{issues:[],async:(o=r?.async)!==null&&o!==void 0?o:!1,contextualErrorMap:r?.errorMap},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Ur(e)},n=this._parseSync({data:e,path:i.path,parent:i});return V1(i,n)}parseAsync(e,r){return L(this,null,function*(){let o=yield this.safeParseAsync(e,r);if(o.success)return o.data;throw o.error})}safeParseAsync(e,r){return L(this,null,function*(){let o={common:{issues:[],contextualErrorMap:r?.errorMap,async:!0},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Ur(e)},i=this._parse({data:e,path:o.path,parent:o}),n=yield $n(i)?i:Promise.resolve(i);return V1(o,n)})}refine(e,r){let o=i=>typeof r=="string"||typeof r>"u"?{message:r}:typeof r=="function"?r(i):r;return this._refinement((i,n)=>{let a=e(i),s=()=>n.addIssue(N({code:B.custom},o(i)));return typeof Promise<"u"&&a instanceof Promise?a.then(c=>c?!0:(s(),!1)):a?!0:(s(),!1)})}refinement(e,r){return this._refinement((o,i)=>e(o)?!0:(i.addIssue(typeof r=="function"?r(o,i):r),!1))}_refinement(e){return new so({schema:this,typeName:Q.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return ao.create(this,this._def)}nullable(){return Pi.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Oi.create(this,this._def)}promise(){return Hn.create(this,this._def)}or(e){return ws.create([this,e],this._def)}and(e){return vs.create(this,e,this._def)}transform(e){return new so(W(N({},se(this._def)),{schema:this,typeName:Q.ZodEffects,effect:{type:"transform",transform:e}}))}default(e){let r=typeof e=="function"?e:()=>e;return new Cs(W(N({},se(this._def)),{innerType:this,defaultValue:r,typeName:Q.ZodDefault}))}brand(){return new Fn(N({typeName:Q.ZodBranded,type:this},se(this._def)))}catch(e){let r=typeof e=="function"?e:()=>e;return new ru(W(N({},se(this._def)),{innerType:this,catchValue:r,typeName:Q.ZodCatch}))}describe(e){let r=this.constructor;return new r(W(N({},this._def),{description:e}))}pipe(e){return Li.create(this,e)}readonly(){return iu.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},yd=/^c[^\s-]{8,}$/i,xd=/^[a-z][a-z0-9]*$/,bd=/^[0-9A-HJKMNP-TV-Z]{26}$/,Cd=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,_d=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Ed="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",ss,Sd=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,Ad=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,Td=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function kd(t,e){return!!((e==="v4"||!e)&&Sd.test(t)||(e==="v6"||!e)&&Ad.test(t))}var zn=(()=>{class t extends le{_parse(r){if(this._def.coerce&&(r.data=String(r.data)),this._getType(r)!==Z.string){let a=this._getOrReturnCtx(r);return H(a,{code:B.invalid_type,expected:Z.string,received:a.parsedType}),oe}let i=new tt,n;for(let a of this._def.checks)if(a.kind==="min")r.data.length<a.value&&(n=this._getOrReturnCtx(r,n),H(n,{code:B.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")r.data.length>a.value&&(n=this._getOrReturnCtx(r,n),H(n,{code:B.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){let s=r.data.length>a.value,c=r.data.length<a.value;(s||c)&&(n=this._getOrReturnCtx(r,n),s?H(n,{code:B.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):c&&H(n,{code:B.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")_d.test(r.data)||(n=this._getOrReturnCtx(r,n),H(n,{validation:"email",code:B.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")ss||(ss=new RegExp(Ed,"u")),ss.test(r.data)||(n=this._getOrReturnCtx(r,n),H(n,{validation:"emoji",code:B.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")Cd.test(r.data)||(n=this._getOrReturnCtx(r,n),H(n,{validation:"uuid",code:B.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")yd.test(r.data)||(n=this._getOrReturnCtx(r,n),H(n,{validation:"cuid",code:B.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")xd.test(r.data)||(n=this._getOrReturnCtx(r,n),H(n,{validation:"cuid2",code:B.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")bd.test(r.data)||(n=this._getOrReturnCtx(r,n),H(n,{validation:"ulid",code:B.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(r.data)}catch{n=this._getOrReturnCtx(r,n),H(n,{validation:"url",code:B.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(r.data)||(n=this._getOrReturnCtx(r,n),H(n,{validation:"regex",code:B.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?r.data=r.data.trim():a.kind==="includes"?r.data.includes(a.value,a.position)||(n=this._getOrReturnCtx(r,n),H(n,{code:B.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?r.data=r.data.toLowerCase():a.kind==="toUpperCase"?r.data=r.data.toUpperCase():a.kind==="startsWith"?r.data.startsWith(a.value)||(n=this._getOrReturnCtx(r,n),H(n,{code:B.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?r.data.endsWith(a.value)||(n=this._getOrReturnCtx(r,n),H(n,{code:B.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?Td(a).test(r.data)||(n=this._getOrReturnCtx(r,n),H(n,{code:B.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?kd(r.data,a.version)||(n=this._getOrReturnCtx(r,n),H(n,{validation:"ip",code:B.invalid_string,message:a.message}),i.dirty()):ve.assertNever(a);return{status:i.value,value:r.data}}_regex(r,o,i){return this.refinement(n=>r.test(n),N({validation:o,code:B.invalid_string},K.errToObj(i)))}_addCheck(r){return new t(W(N({},this._def),{checks:[...this._def.checks,r]}))}email(r){return this._addCheck(N({kind:"email"},K.errToObj(r)))}url(r){return this._addCheck(N({kind:"url"},K.errToObj(r)))}emoji(r){return this._addCheck(N({kind:"emoji"},K.errToObj(r)))}uuid(r){return this._addCheck(N({kind:"uuid"},K.errToObj(r)))}cuid(r){return this._addCheck(N({kind:"cuid"},K.errToObj(r)))}cuid2(r){return this._addCheck(N({kind:"cuid2"},K.errToObj(r)))}ulid(r){return this._addCheck(N({kind:"ulid"},K.errToObj(r)))}ip(r){return this._addCheck(N({kind:"ip"},K.errToObj(r)))}datetime(r){var o;return typeof r=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:r}):this._addCheck(N({kind:"datetime",precision:typeof r?.precision>"u"?null:r?.precision,offset:(o=r?.offset)!==null&&o!==void 0?o:!1},K.errToObj(r?.message)))}regex(r,o){return this._addCheck(N({kind:"regex",regex:r},K.errToObj(o)))}includes(r,o){return this._addCheck(N({kind:"includes",value:r,position:o?.position},K.errToObj(o?.message)))}startsWith(r,o){return this._addCheck(N({kind:"startsWith",value:r},K.errToObj(o)))}endsWith(r,o){return this._addCheck(N({kind:"endsWith",value:r},K.errToObj(o)))}min(r,o){return this._addCheck(N({kind:"min",value:r},K.errToObj(o)))}max(r,o){return this._addCheck(N({kind:"max",value:r},K.errToObj(o)))}length(r,o){return this._addCheck(N({kind:"length",value:r},K.errToObj(o)))}nonempty(r){return this.min(1,K.errToObj(r))}trim(){return new t(W(N({},this._def),{checks:[...this._def.checks,{kind:"trim"}]}))}toLowerCase(){return new t(W(N({},this._def),{checks:[...this._def.checks,{kind:"toLowerCase"}]}))}toUpperCase(){return new t(W(N({},this._def),{checks:[...this._def.checks,{kind:"toUpperCase"}]}))}get isDatetime(){return!!this._def.checks.find(r=>r.kind==="datetime")}get isEmail(){return!!this._def.checks.find(r=>r.kind==="email")}get isURL(){return!!this._def.checks.find(r=>r.kind==="url")}get isEmoji(){return!!this._def.checks.find(r=>r.kind==="emoji")}get isUUID(){return!!this._def.checks.find(r=>r.kind==="uuid")}get isCUID(){return!!this._def.checks.find(r=>r.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(r=>r.kind==="cuid2")}get isULID(){return!!this._def.checks.find(r=>r.kind==="ulid")}get isIP(){return!!this._def.checks.find(r=>r.kind==="ip")}get minLength(){let r=null;for(let o of this._def.checks)o.kind==="min"&&(r===null||o.value>r)&&(r=o.value);return r}get maxLength(){let r=null;for(let o of this._def.checks)o.kind==="max"&&(r===null||o.value<r)&&(r=o.value);return r}}return t.create=e=>{var r;return new t(N({checks:[],typeName:Q.ZodString,coerce:(r=e?.coerce)!==null&&r!==void 0?r:!1},se(e)))},t})();function Rd(t,e){let r=(t.toString().split(".")[1]||"").length,o=(e.toString().split(".")[1]||"").length,i=r>o?r:o,n=parseInt(t.toFixed(i).replace(".","")),a=parseInt(e.toFixed(i).replace(".",""));return n%a/Math.pow(10,i)}var ps=(()=>{class t extends le{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(r){if(this._def.coerce&&(r.data=Number(r.data)),this._getType(r)!==Z.number){let a=this._getOrReturnCtx(r);return H(a,{code:B.invalid_type,expected:Z.number,received:a.parsedType}),oe}let i,n=new tt;for(let a of this._def.checks)a.kind==="int"?ve.isInteger(r.data)||(i=this._getOrReturnCtx(r,i),H(i,{code:B.invalid_type,expected:"integer",received:"float",message:a.message}),n.dirty()):a.kind==="min"?(a.inclusive?r.data<a.value:r.data<=a.value)&&(i=this._getOrReturnCtx(r,i),H(i,{code:B.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),n.dirty()):a.kind==="max"?(a.inclusive?r.data>a.value:r.data>=a.value)&&(i=this._getOrReturnCtx(r,i),H(i,{code:B.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),n.dirty()):a.kind==="multipleOf"?Rd(r.data,a.value)!==0&&(i=this._getOrReturnCtx(r,i),H(i,{code:B.not_multiple_of,multipleOf:a.value,message:a.message}),n.dirty()):a.kind==="finite"?Number.isFinite(r.data)||(i=this._getOrReturnCtx(r,i),H(i,{code:B.not_finite,message:a.message}),n.dirty()):ve.assertNever(a);return{status:n.value,value:r.data}}gte(r,o){return this.setLimit("min",r,!0,K.toString(o))}gt(r,o){return this.setLimit("min",r,!1,K.toString(o))}lte(r,o){return this.setLimit("max",r,!0,K.toString(o))}lt(r,o){return this.setLimit("max",r,!1,K.toString(o))}setLimit(r,o,i,n){return new t(W(N({},this._def),{checks:[...this._def.checks,{kind:r,value:o,inclusive:i,message:K.toString(n)}]}))}_addCheck(r){return new t(W(N({},this._def),{checks:[...this._def.checks,r]}))}int(r){return this._addCheck({kind:"int",message:K.toString(r)})}positive(r){return this._addCheck({kind:"min",value:0,inclusive:!1,message:K.toString(r)})}negative(r){return this._addCheck({kind:"max",value:0,inclusive:!1,message:K.toString(r)})}nonpositive(r){return this._addCheck({kind:"max",value:0,inclusive:!0,message:K.toString(r)})}nonnegative(r){return this._addCheck({kind:"min",value:0,inclusive:!0,message:K.toString(r)})}multipleOf(r,o){return this._addCheck({kind:"multipleOf",value:r,message:K.toString(o)})}finite(r){return this._addCheck({kind:"finite",message:K.toString(r)})}safe(r){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:K.toString(r)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:K.toString(r)})}get minValue(){let r=null;for(let o of this._def.checks)o.kind==="min"&&(r===null||o.value>r)&&(r=o.value);return r}get maxValue(){let r=null;for(let o of this._def.checks)o.kind==="max"&&(r===null||o.value<r)&&(r=o.value);return r}get isInt(){return!!this._def.checks.find(r=>r.kind==="int"||r.kind==="multipleOf"&&ve.isInteger(r.value))}get isFinite(){let r=null,o=null;for(let i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(o===null||i.value>o)&&(o=i.value):i.kind==="max"&&(r===null||i.value<r)&&(r=i.value)}return Number.isFinite(o)&&Number.isFinite(r)}}return t.create=e=>new t(N({checks:[],typeName:Q.ZodNumber,coerce:e?.coerce||!1},se(e))),t})(),ds=(()=>{class t extends le{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(r){if(this._def.coerce&&(r.data=BigInt(r.data)),this._getType(r)!==Z.bigint){let a=this._getOrReturnCtx(r);return H(a,{code:B.invalid_type,expected:Z.bigint,received:a.parsedType}),oe}let i,n=new tt;for(let a of this._def.checks)a.kind==="min"?(a.inclusive?r.data<a.value:r.data<=a.value)&&(i=this._getOrReturnCtx(r,i),H(i,{code:B.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),n.dirty()):a.kind==="max"?(a.inclusive?r.data>a.value:r.data>=a.value)&&(i=this._getOrReturnCtx(r,i),H(i,{code:B.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),n.dirty()):a.kind==="multipleOf"?r.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(r,i),H(i,{code:B.not_multiple_of,multipleOf:a.value,message:a.message}),n.dirty()):ve.assertNever(a);return{status:n.value,value:r.data}}gte(r,o){return this.setLimit("min",r,!0,K.toString(o))}gt(r,o){return this.setLimit("min",r,!1,K.toString(o))}lte(r,o){return this.setLimit("max",r,!0,K.toString(o))}lt(r,o){return this.setLimit("max",r,!1,K.toString(o))}setLimit(r,o,i,n){return new t(W(N({},this._def),{checks:[...this._def.checks,{kind:r,value:o,inclusive:i,message:K.toString(n)}]}))}_addCheck(r){return new t(W(N({},this._def),{checks:[...this._def.checks,r]}))}positive(r){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:K.toString(r)})}negative(r){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:K.toString(r)})}nonpositive(r){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:K.toString(r)})}nonnegative(r){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:K.toString(r)})}multipleOf(r,o){return this._addCheck({kind:"multipleOf",value:r,message:K.toString(o)})}get minValue(){let r=null;for(let o of this._def.checks)o.kind==="min"&&(r===null||o.value>r)&&(r=o.value);return r}get maxValue(){let r=null;for(let o of this._def.checks)o.kind==="max"&&(r===null||o.value<r)&&(r=o.value);return r}}return t.create=e=>{var r;return new t(N({checks:[],typeName:Q.ZodBigInt,coerce:(r=e?.coerce)!==null&&r!==void 0?r:!1},se(e)))},t})(),fs=(()=>{class t extends le{_parse(r){if(this._def.coerce&&(r.data=!!r.data),this._getType(r)!==Z.boolean){let i=this._getOrReturnCtx(r);return H(i,{code:B.invalid_type,expected:Z.boolean,received:i.parsedType}),oe}return nt(r.data)}}return t.create=e=>new t(N({typeName:Q.ZodBoolean,coerce:e?.coerce||!1},se(e))),t})(),hs=(()=>{class t extends le{_parse(r){if(this._def.coerce&&(r.data=new Date(r.data)),this._getType(r)!==Z.date){let a=this._getOrReturnCtx(r);return H(a,{code:B.invalid_type,expected:Z.date,received:a.parsedType}),oe}if(isNaN(r.data.getTime())){let a=this._getOrReturnCtx(r);return H(a,{code:B.invalid_date}),oe}let i=new tt,n;for(let a of this._def.checks)a.kind==="min"?r.data.getTime()<a.value&&(n=this._getOrReturnCtx(r,n),H(n,{code:B.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?r.data.getTime()>a.value&&(n=this._getOrReturnCtx(r,n),H(n,{code:B.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):ve.assertNever(a);return{status:i.value,value:new Date(r.data.getTime())}}_addCheck(r){return new t(W(N({},this._def),{checks:[...this._def.checks,r]}))}min(r,o){return this._addCheck({kind:"min",value:r.getTime(),message:K.toString(o)})}max(r,o){return this._addCheck({kind:"max",value:r.getTime(),message:K.toString(o)})}get minDate(){let r=null;for(let o of this._def.checks)o.kind==="min"&&(r===null||o.value>r)&&(r=o.value);return r!=null?new Date(r):null}get maxDate(){let r=null;for(let o of this._def.checks)o.kind==="max"&&(r===null||o.value<r)&&(r=o.value);return r!=null?new Date(r):null}}return t.create=e=>new t(N({checks:[],coerce:e?.coerce||!1,typeName:Q.ZodDate},se(e))),t})(),J1=(()=>{class t extends le{_parse(r){if(this._getType(r)!==Z.symbol){let i=this._getOrReturnCtx(r);return H(i,{code:B.invalid_type,expected:Z.symbol,received:i.parsedType}),oe}return nt(r.data)}}return t.create=e=>new t(N({typeName:Q.ZodSymbol},se(e))),t})(),ms=(()=>{class t extends le{_parse(r){if(this._getType(r)!==Z.undefined){let i=this._getOrReturnCtx(r);return H(i,{code:B.invalid_type,expected:Z.undefined,received:i.parsedType}),oe}return nt(r.data)}}return t.create=e=>new t(N({typeName:Q.ZodUndefined},se(e))),t})(),gs=(()=>{class t extends le{_parse(r){if(this._getType(r)!==Z.null){let i=this._getOrReturnCtx(r);return H(i,{code:B.invalid_type,expected:Z.null,received:i.parsedType}),oe}return nt(r.data)}}return t.create=e=>new t(N({typeName:Q.ZodNull},se(e))),t})(),Un=(()=>{class t extends le{constructor(){super(...arguments),this._any=!0}_parse(r){return nt(r.data)}}return t.create=e=>new t(N({typeName:Q.ZodAny},se(e))),t})(),Ri=(()=>{class t extends le{constructor(){super(...arguments),this._unknown=!0}_parse(r){return nt(r.data)}}return t.create=e=>new t(N({typeName:Q.ZodUnknown},se(e))),t})(),no=(()=>{class t extends le{_parse(r){let o=this._getOrReturnCtx(r);return H(o,{code:B.invalid_type,expected:Z.never,received:o.parsedType}),oe}}return t.create=e=>new t(N({typeName:Q.ZodNever},se(e))),t})(),X1=(()=>{class t extends le{_parse(r){if(this._getType(r)!==Z.undefined){let i=this._getOrReturnCtx(r);return H(i,{code:B.invalid_type,expected:Z.void,received:i.parsedType}),oe}return nt(r.data)}}return t.create=e=>new t(N({typeName:Q.ZodVoid},se(e))),t})(),Oi=(()=>{class t extends le{_parse(r){let{ctx:o,status:i}=this._processInputParams(r),n=this._def;if(o.parsedType!==Z.array)return H(o,{code:B.invalid_type,expected:Z.array,received:o.parsedType}),oe;if(n.exactLength!==null){let s=o.data.length>n.exactLength.value,c=o.data.length<n.exactLength.value;(s||c)&&(H(o,{code:s?B.too_big:B.too_small,minimum:c?n.exactLength.value:void 0,maximum:s?n.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:n.exactLength.message}),i.dirty())}if(n.minLength!==null&&o.data.length<n.minLength.value&&(H(o,{code:B.too_small,minimum:n.minLength.value,type:"array",inclusive:!0,exact:!1,message:n.minLength.message}),i.dirty()),n.maxLength!==null&&o.data.length>n.maxLength.value&&(H(o,{code:B.too_big,maximum:n.maxLength.value,type:"array",inclusive:!0,exact:!1,message:n.maxLength.message}),i.dirty()),o.common.async)return Promise.all([...o.data].map((s,c)=>n.type._parseAsync(new Nt(o,s,o.path,c)))).then(s=>tt.mergeArray(i,s));let a=[...o.data].map((s,c)=>n.type._parseSync(new Nt(o,s,o.path,c)));return tt.mergeArray(i,a)}get element(){return this._def.type}min(r,o){return new t(W(N({},this._def),{minLength:{value:r,message:K.toString(o)}}))}max(r,o){return new t(W(N({},this._def),{maxLength:{value:r,message:K.toString(o)}}))}length(r,o){return new t(W(N({},this._def),{exactLength:{value:r,message:K.toString(o)}}))}nonempty(r){return this.min(1,r)}}return t.create=(e,r)=>new t(N({type:e,minLength:null,maxLength:null,exactLength:null,typeName:Q.ZodArray},se(r))),t})();function zo(t){if(t instanceof Zo){let e={};for(let r in t.shape){let o=t.shape[r];e[r]=ao.create(zo(o))}return new Zo(W(N({},t._def),{shape:()=>e}))}else return t instanceof Oi?new Oi(W(N({},t._def),{type:zo(t.element)})):t instanceof ao?ao.create(zo(t.unwrap())):t instanceof Pi?Pi.create(zo(t.unwrap())):t instanceof Ho?Ho.create(t.items.map(e=>zo(e))):t}var Zo=(()=>{class t extends le{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let r=this._def.shape(),o=ve.objectKeys(r);return this._cached={shape:r,keys:o}}_parse(r){if(this._getType(r)!==Z.object){let S=this._getOrReturnCtx(r);return H(S,{code:B.invalid_type,expected:Z.object,received:S.parsedType}),oe}let{status:i,ctx:n}=this._processInputParams(r),{shape:a,keys:s}=this._getCached(),c=[];if(!(this._def.catchall instanceof no&&this._def.unknownKeys==="strip"))for(let S in n.data)s.includes(S)||c.push(S);let x=[];for(let S of s){let E=a[S],Y=n.data[S];x.push({key:{status:"valid",value:S},value:E._parse(new Nt(n,Y,n.path,S)),alwaysSet:S in n.data})}if(this._def.catchall instanceof no){let S=this._def.unknownKeys;if(S==="passthrough")for(let E of c)x.push({key:{status:"valid",value:E},value:{status:"valid",value:n.data[E]}});else if(S==="strict")c.length>0&&(H(n,{code:B.unrecognized_keys,keys:c}),i.dirty());else if(S!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{let S=this._def.catchall;for(let E of c){let Y=n.data[E];x.push({key:{status:"valid",value:E},value:S._parse(new Nt(n,Y,n.path,E)),alwaysSet:E in n.data})}}return n.common.async?Promise.resolve().then(()=>L(this,null,function*(){let S=[];for(let E of x){let Y=yield E.key;S.push({key:Y,value:yield E.value,alwaysSet:E.alwaysSet})}return S})).then(S=>tt.mergeObjectSync(i,S)):tt.mergeObjectSync(i,x)}get shape(){return this._def.shape()}strict(r){return K.errToObj,new t(N(W(N({},this._def),{unknownKeys:"strict"}),r!==void 0?{errorMap:(o,i)=>{var n,a,s,c;let x=(s=(a=(n=this._def).errorMap)===null||a===void 0?void 0:a.call(n,o,i).message)!==null&&s!==void 0?s:i.defaultError;return o.code==="unrecognized_keys"?{message:(c=K.errToObj(r).message)!==null&&c!==void 0?c:x}:{message:x}}}:{}))}strip(){return new t(W(N({},this._def),{unknownKeys:"strip"}))}passthrough(){return new t(W(N({},this._def),{unknownKeys:"passthrough"}))}extend(r){return new t(W(N({},this._def),{shape:()=>N(N({},this._def.shape()),r)}))}merge(r){return new t({unknownKeys:r._def.unknownKeys,catchall:r._def.catchall,shape:()=>N(N({},this._def.shape()),r._def.shape()),typeName:Q.ZodObject})}setKey(r,o){return this.augment({[r]:o})}catchall(r){return new t(W(N({},this._def),{catchall:r}))}pick(r){let o={};return ve.objectKeys(r).forEach(i=>{r[i]&&this.shape[i]&&(o[i]=this.shape[i])}),new t(W(N({},this._def),{shape:()=>o}))}omit(r){let o={};return ve.objectKeys(this.shape).forEach(i=>{r[i]||(o[i]=this.shape[i])}),new t(W(N({},this._def),{shape:()=>o}))}deepPartial(){return zo(this)}partial(r){let o={};return ve.objectKeys(this.shape).forEach(i=>{let n=this.shape[i];r&&!r[i]?o[i]=n:o[i]=n.optional()}),new t(W(N({},this._def),{shape:()=>o}))}required(r){let o={};return ve.objectKeys(this.shape).forEach(i=>{if(r&&!r[i])o[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof ao;)a=a._def.innerType;o[i]=a}}),new t(W(N({},this._def),{shape:()=>o}))}keyof(){return tu(ve.objectKeys(this.shape))}}return t.create=(e,r)=>new t(N({shape:()=>e,unknownKeys:"strip",catchall:no.create(),typeName:Q.ZodObject},se(r))),t.strictCreate=(e,r)=>new t(N({shape:()=>e,unknownKeys:"strict",catchall:no.create(),typeName:Q.ZodObject},se(r))),t.lazycreate=(e,r)=>new t(N({shape:e,unknownKeys:"strip",catchall:no.create(),typeName:Q.ZodObject},se(r))),t})(),ws=(()=>{class t extends le{_parse(r){let{ctx:o}=this._processInputParams(r),i=this._def.options;function n(a){for(let c of a)if(c.result.status==="valid")return c.result;for(let c of a)if(c.result.status==="dirty")return o.common.issues.push(...c.ctx.common.issues),c.result;let s=a.map(c=>new vr(c.ctx.common.issues));return H(o,{code:B.invalid_union,unionErrors:s}),oe}if(o.common.async)return Promise.all(i.map(a=>L(this,null,function*(){let s=W(N({},o),{common:W(N({},o.common),{issues:[]}),parent:null});return{result:yield a._parseAsync({data:o.data,path:o.path,parent:s}),ctx:s}}))).then(n);{let a,s=[];for(let x of i){let S=W(N({},o),{common:W(N({},o.common),{issues:[]}),parent:null}),E=x._parseSync({data:o.data,path:o.path,parent:S});if(E.status==="valid")return E;E.status==="dirty"&&!a&&(a={result:E,ctx:S}),S.common.issues.length&&s.push(S.common.issues)}if(a)return o.common.issues.push(...a.ctx.common.issues),a.result;let c=s.map(x=>new vr(x));return H(o,{code:B.invalid_union,unionErrors:c}),oe}}get options(){return this._def.options}}return t.create=(e,r)=>new t(N({options:e,typeName:Q.ZodUnion},se(r))),t})(),Pn=t=>t instanceof ys?Pn(t.schema):t instanceof so?Pn(t.innerType()):t instanceof xs?[t.value]:t instanceof Zn?t.options:t instanceof bs?Object.keys(t.enum):t instanceof Cs?Pn(t._def.innerType):t instanceof ms?[void 0]:t instanceof gs?[null]:null,Bn=class t extends le{_parse(e){let{ctx:r}=this._processInputParams(e);if(r.parsedType!==Z.object)return H(r,{code:B.invalid_type,expected:Z.object,received:r.parsedType}),oe;let o=this.discriminator,i=r.data[o],n=this.optionsMap.get(i);return n?r.common.async?n._parseAsync({data:r.data,path:r.path,parent:r}):n._parseSync({data:r.data,path:r.path,parent:r}):(H(r,{code:B.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[o]}),oe)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,r,o){let i=new Map;for(let n of r){let a=Pn(n.shape[e]);if(!a)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let s of a){if(i.has(s))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(s)}`);i.set(s,n)}}return new t(N({typeName:Q.ZodDiscriminatedUnion,discriminator:e,options:r,optionsMap:i},se(o)))}};function us(t,e){let r=Ur(t),o=Ur(e);if(t===e)return{valid:!0,data:t};if(r===Z.object&&o===Z.object){let i=ve.objectKeys(e),n=ve.objectKeys(t).filter(s=>i.indexOf(s)!==-1),a=N(N({},t),e);for(let s of n){let c=us(t[s],e[s]);if(!c.valid)return{valid:!1};a[s]=c.data}return{valid:!0,data:a}}else if(r===Z.array&&o===Z.array){if(t.length!==e.length)return{valid:!1};let i=[];for(let n=0;n<t.length;n++){let a=t[n],s=e[n],c=us(a,s);if(!c.valid)return{valid:!1};i.push(c.data)}return{valid:!0,data:i}}else return r===Z.date&&o===Z.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}var vs=(()=>{class t extends le{_parse(r){let{status:o,ctx:i}=this._processInputParams(r),n=(a,s)=>{if(ls(a)||ls(s))return oe;let c=us(a.value,s.value);return c.valid?((cs(a)||cs(s))&&o.dirty(),{status:o.value,value:c.data}):(H(i,{code:B.invalid_intersection_types}),oe)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,s])=>n(a,s)):n(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}return t.create=(e,r,o)=>new t(N({left:e,right:r,typeName:Q.ZodIntersection},se(o))),t})(),Ho=(()=>{class t extends le{_parse(r){let{status:o,ctx:i}=this._processInputParams(r);if(i.parsedType!==Z.array)return H(i,{code:B.invalid_type,expected:Z.array,received:i.parsedType}),oe;if(i.data.length<this._def.items.length)return H(i,{code:B.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),oe;!this._def.rest&&i.data.length>this._def.items.length&&(H(i,{code:B.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),o.dirty());let a=[...i.data].map((s,c)=>{let x=this._def.items[c]||this._def.rest;return x?x._parse(new Nt(i,s,i.path,c)):null}).filter(s=>!!s);return i.common.async?Promise.all(a).then(s=>tt.mergeArray(o,s)):tt.mergeArray(o,a)}get items(){return this._def.items}rest(r){return new t(W(N({},this._def),{rest:r}))}}return t.create=(e,r)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new t(N({items:e,typeName:Q.ZodTuple,rest:null},se(r)))},t})(),Dn=class t extends le{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:r,ctx:o}=this._processInputParams(e);if(o.parsedType!==Z.object)return H(o,{code:B.invalid_type,expected:Z.object,received:o.parsedType}),oe;let i=[],n=this._def.keyType,a=this._def.valueType;for(let s in o.data)i.push({key:n._parse(new Nt(o,s,o.path,s)),value:a._parse(new Nt(o,o.data[s],o.path,s))});return o.common.async?tt.mergeObjectAsync(r,i):tt.mergeObjectSync(r,i)}get element(){return this._def.valueType}static create(e,r,o){return r instanceof le?new t(N({keyType:e,valueType:r,typeName:Q.ZodRecord},se(o))):new t(N({keyType:zn.create(),valueType:e,typeName:Q.ZodRecord},se(r)))}},Q1=(()=>{class t extends le{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(r){let{status:o,ctx:i}=this._processInputParams(r);if(i.parsedType!==Z.map)return H(i,{code:B.invalid_type,expected:Z.map,received:i.parsedType}),oe;let n=this._def.keyType,a=this._def.valueType,s=[...i.data.entries()].map(([c,x],S)=>({key:n._parse(new Nt(i,c,i.path,[S,"key"])),value:a._parse(new Nt(i,x,i.path,[S,"value"]))}));if(i.common.async){let c=new Map;return Promise.resolve().then(()=>L(this,null,function*(){for(let x of s){let S=yield x.key,E=yield x.value;if(S.status==="aborted"||E.status==="aborted")return oe;(S.status==="dirty"||E.status==="dirty")&&o.dirty(),c.set(S.value,E.value)}return{status:o.value,value:c}}))}else{let c=new Map;for(let x of s){let S=x.key,E=x.value;if(S.status==="aborted"||E.status==="aborted")return oe;(S.status==="dirty"||E.status==="dirty")&&o.dirty(),c.set(S.value,E.value)}return{status:o.value,value:c}}}}return t.create=(e,r,o)=>new t(N({valueType:r,keyType:e,typeName:Q.ZodMap},se(o))),t})(),eu=(()=>{class t extends le{_parse(r){let{status:o,ctx:i}=this._processInputParams(r);if(i.parsedType!==Z.set)return H(i,{code:B.invalid_type,expected:Z.set,received:i.parsedType}),oe;let n=this._def;n.minSize!==null&&i.data.size<n.minSize.value&&(H(i,{code:B.too_small,minimum:n.minSize.value,type:"set",inclusive:!0,exact:!1,message:n.minSize.message}),o.dirty()),n.maxSize!==null&&i.data.size>n.maxSize.value&&(H(i,{code:B.too_big,maximum:n.maxSize.value,type:"set",inclusive:!0,exact:!1,message:n.maxSize.message}),o.dirty());let a=this._def.valueType;function s(x){let S=new Set;for(let E of x){if(E.status==="aborted")return oe;E.status==="dirty"&&o.dirty(),S.add(E.value)}return{status:o.value,value:S}}let c=[...i.data.values()].map((x,S)=>a._parse(new Nt(i,x,i.path,S)));return i.common.async?Promise.all(c).then(x=>s(x)):s(c)}min(r,o){return new t(W(N({},this._def),{minSize:{value:r,message:K.toString(o)}}))}max(r,o){return new t(W(N({},this._def),{maxSize:{value:r,message:K.toString(o)}}))}size(r,o){return this.min(r,o).max(r,o)}nonempty(r){return this.min(1,r)}}return t.create=(e,r)=>new t(N({valueType:e,minSize:null,maxSize:null,typeName:Q.ZodSet},se(r))),t})(),jn=class t extends le{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:r}=this._processInputParams(e);if(r.parsedType!==Z.function)return H(r,{code:B.invalid_type,expected:Z.function,received:r.parsedType}),oe;function o(s,c){return Mn({data:s,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,Ln(),Ii].filter(x=>!!x),issueData:{code:B.invalid_arguments,argumentsError:c}})}function i(s,c){return Mn({data:s,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,Ln(),Ii].filter(x=>!!x),issueData:{code:B.invalid_return_type,returnTypeError:c}})}let n={errorMap:r.common.contextualErrorMap},a=r.data;if(this._def.returns instanceof Hn){let s=this;return nt(function(...c){return L(this,null,function*(){let x=new vr([]),S=yield s._def.args.parseAsync(c,n).catch(j=>{throw x.addIssue(o(c,j)),x}),E=yield Reflect.apply(a,this,S);return yield s._def.returns._def.type.parseAsync(E,n).catch(j=>{throw x.addIssue(i(E,j)),x})})})}else{let s=this;return nt(function(...c){let x=s._def.args.safeParse(c,n);if(!x.success)throw new vr([o(c,x.error)]);let S=Reflect.apply(a,this,x.data),E=s._def.returns.safeParse(S,n);if(!E.success)throw new vr([i(S,E.error)]);return E.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new t(W(N({},this._def),{args:Ho.create(e).rest(Ri.create())}))}returns(e){return new t(W(N({},this._def),{returns:e}))}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,r,o){return new t(N({args:e||Ho.create([]).rest(Ri.create()),returns:r||Ri.create(),typeName:Q.ZodFunction},se(o)))}},ys=(()=>{class t extends le{get schema(){return this._def.getter()}_parse(r){let{ctx:o}=this._processInputParams(r);return this._def.getter()._parse({data:o.data,path:o.path,parent:o})}}return t.create=(e,r)=>new t(N({getter:e,typeName:Q.ZodLazy},se(r))),t})(),xs=(()=>{class t extends le{_parse(r){if(r.data!==this._def.value){let o=this._getOrReturnCtx(r);return H(o,{received:o.data,code:B.invalid_literal,expected:this._def.value}),oe}return{status:"valid",value:r.data}}get value(){return this._def.value}}return t.create=(e,r)=>new t(N({value:e,typeName:Q.ZodLiteral},se(r))),t})();function tu(t,e){return new Zn(N({values:t,typeName:Q.ZodEnum},se(e)))}var Zn=(()=>{class t extends le{_parse(r){if(typeof r.data!="string"){let o=this._getOrReturnCtx(r),i=this._def.values;return H(o,{expected:ve.joinValues(i),received:o.parsedType,code:B.invalid_type}),oe}if(this._def.values.indexOf(r.data)===-1){let o=this._getOrReturnCtx(r),i=this._def.values;return H(o,{received:o.data,code:B.invalid_enum_value,options:i}),oe}return nt(r.data)}get options(){return this._def.values}get enum(){let r={};for(let o of this._def.values)r[o]=o;return r}get Values(){let r={};for(let o of this._def.values)r[o]=o;return r}get Enum(){let r={};for(let o of this._def.values)r[o]=o;return r}extract(r){return t.create(r)}exclude(r){return t.create(this.options.filter(o=>!r.includes(o)))}}return t.create=tu,t})(),bs=(()=>{class t extends le{_parse(r){let o=ve.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(r);if(i.parsedType!==Z.string&&i.parsedType!==Z.number){let n=ve.objectValues(o);return H(i,{expected:ve.joinValues(n),received:i.parsedType,code:B.invalid_type}),oe}if(o.indexOf(r.data)===-1){let n=ve.objectValues(o);return H(i,{received:i.data,code:B.invalid_enum_value,options:n}),oe}return nt(r.data)}get enum(){return this._def.values}}return t.create=(e,r)=>new t(N({values:e,typeName:Q.ZodNativeEnum},se(r))),t})(),Hn=(()=>{class t extends le{unwrap(){return this._def.type}_parse(r){let{ctx:o}=this._processInputParams(r);if(o.parsedType!==Z.promise&&o.common.async===!1)return H(o,{code:B.invalid_type,expected:Z.promise,received:o.parsedType}),oe;let i=o.parsedType===Z.promise?o.data:Promise.resolve(o.data);return nt(i.then(n=>this._def.type.parseAsync(n,{path:o.path,errorMap:o.common.contextualErrorMap})))}}return t.create=(e,r)=>new t(N({type:e,typeName:Q.ZodPromise},se(r))),t})(),so=(()=>{class t extends le{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Q.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(r){let{status:o,ctx:i}=this._processInputParams(r),n=this._def.effect||null,a={addIssue:s=>{H(i,s),s.fatal?o.abort():o.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),n.type==="preprocess"){let s=n.transform(i.data,a);return i.common.issues.length?{status:"dirty",value:i.data}:i.common.async?Promise.resolve(s).then(c=>this._def.schema._parseAsync({data:c,path:i.path,parent:i})):this._def.schema._parseSync({data:s,path:i.path,parent:i})}if(n.type==="refinement"){let s=c=>{let x=n.refinement(c,a);if(i.common.async)return Promise.resolve(x);if(x instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return c};if(i.common.async===!1){let c=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return c.status==="aborted"?oe:(c.status==="dirty"&&o.dirty(),s(c.value),{status:o.value,value:c.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(c=>c.status==="aborted"?oe:(c.status==="dirty"&&o.dirty(),s(c.value).then(()=>({status:o.value,value:c.value}))))}if(n.type==="transform")if(i.common.async===!1){let s=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Ni(s))return s;let c=n.transform(s.value,a);if(c instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:o.value,value:c}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(s=>Ni(s)?Promise.resolve(n.transform(s.value,a)).then(c=>({status:o.value,value:c})):s);ve.assertNever(n)}}return t.create=(e,r,o)=>new t(N({schema:e,typeName:Q.ZodEffects,effect:r},se(o))),t.createWithPreprocess=(e,r,o)=>new t(N({schema:r,effect:{type:"preprocess",transform:e},typeName:Q.ZodEffects},se(o))),t})(),ao=(()=>{class t extends le{_parse(r){return this._getType(r)===Z.undefined?nt(void 0):this._def.innerType._parse(r)}unwrap(){return this._def.innerType}}return t.create=(e,r)=>new t(N({innerType:e,typeName:Q.ZodOptional},se(r))),t})(),Pi=(()=>{class t extends le{_parse(r){return this._getType(r)===Z.null?nt(null):this._def.innerType._parse(r)}unwrap(){return this._def.innerType}}return t.create=(e,r)=>new t(N({innerType:e,typeName:Q.ZodNullable},se(r))),t})(),Cs=(()=>{class t extends le{_parse(r){let{ctx:o}=this._processInputParams(r),i=o.data;return o.parsedType===Z.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:o.path,parent:o})}removeDefault(){return this._def.innerType}}return t.create=(e,r)=>new t(N({innerType:e,typeName:Q.ZodDefault,defaultValue:typeof r.default=="function"?r.default:()=>r.default},se(r))),t})(),ru=(()=>{class t extends le{_parse(r){let{ctx:o}=this._processInputParams(r),i=W(N({},o),{common:W(N({},o.common),{issues:[]})}),n=this._def.innerType._parse({data:i.data,path:i.path,parent:N({},i)});return $n(n)?n.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new vr(i.common.issues)},input:i.data})})):{status:"valid",value:n.status==="valid"?n.value:this._def.catchValue({get error(){return new vr(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}return t.create=(e,r)=>new t(N({innerType:e,typeName:Q.ZodCatch,catchValue:typeof r.catch=="function"?r.catch:()=>r.catch},se(r))),t})(),ou=(()=>{class t extends le{_parse(r){if(this._getType(r)!==Z.nan){let i=this._getOrReturnCtx(r);return H(i,{code:B.invalid_type,expected:Z.nan,received:i.parsedType}),oe}return{status:"valid",value:r.data}}}return t.create=e=>new t(N({typeName:Q.ZodNaN},se(e))),t})(),Id=Symbol("zod_brand"),Fn=class extends le{_parse(e){let{ctx:r}=this._processInputParams(e),o=r.data;return this._def.type._parse({data:o,path:r.path,parent:r})}unwrap(){return this._def.type}},Li=class t extends le{_parse(e){let{status:r,ctx:o}=this._processInputParams(e);if(o.common.async)return L(this,null,function*(){let n=yield this._def.in._parseAsync({data:o.data,path:o.path,parent:o});return n.status==="aborted"?oe:n.status==="dirty"?(r.dirty(),K1(n.value)):this._def.out._parseAsync({data:n.value,path:o.path,parent:o})});{let i=this._def.in._parseSync({data:o.data,path:o.path,parent:o});return i.status==="aborted"?oe:i.status==="dirty"?(r.dirty(),{status:"dirty",value:i.value}):this._def.out._parseSync({data:i.value,path:o.path,parent:o})}}static create(e,r){return new t({in:e,out:r,typeName:Q.ZodPipeline})}},iu=(()=>{class t extends le{_parse(r){let o=this._def.innerType._parse(r);return Ni(o)&&(o.value=Object.freeze(o.value)),o}}return t.create=(e,r)=>new t(N({innerType:e,typeName:Q.ZodReadonly},se(r))),t})(),nu=(t,e={},r)=>t?Un.create().superRefine((o,i)=>{var n,a;if(!t(o)){let s=typeof e=="function"?e(o):typeof e=="string"?{message:e}:e,c=(a=(n=s.fatal)!==null&&n!==void 0?n:r)!==null&&a!==void 0?a:!0,x=typeof s=="string"?{message:s}:s;i.addIssue(W(N({code:"custom"},x),{fatal:c}))}}):Un.create(),Nd={object:Zo.lazycreate},Q=function(t){return t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly",t}(Q||{}),Od=(t,e={message:`Input not instance of ${t.name}`})=>nu(r=>r instanceof t,e),au=zn.create,su=ps.create,Pd=ou.create,Ld=ds.create,lu=fs.create,Md=hs.create,$d=J1.create,Ud=ms.create,Bd=gs.create,Dd=Un.create,jd=Ri.create,Fd=no.create,zd=X1.create,Zd=Oi.create,Hd=Zo.create,Wd=Zo.strictCreate,Vd=ws.create,Gd=Bn.create,qd=vs.create,Yd=Ho.create,Kd=Dn.create,Jd=Q1.create,Xd=eu.create,Qd=jn.create,e2=ys.create,t2=xs.create,r2=Zn.create,o2=bs.create,i2=Hn.create,G1=so.create,n2=ao.create,a2=Pi.create,s2=so.createWithPreprocess,l2=Li.create,c2=()=>au().optional(),u2=()=>su().optional(),p2=()=>lu().optional(),d2={string:t=>zn.create(W(N({},t),{coerce:!0})),number:t=>ps.create(W(N({},t),{coerce:!0})),boolean:t=>fs.create(W(N({},t),{coerce:!0})),bigint:t=>ds.create(W(N({},t),{coerce:!0})),date:t=>hs.create(W(N({},t),{coerce:!0}))},f2=oe,u=Object.freeze({__proto__:null,defaultErrorMap:Ii,setErrorMap:wd,getErrorMap:Ln,makeIssue:Mn,EMPTY_PATH:vd,addIssueToContext:H,ParseStatus:tt,INVALID:oe,DIRTY:K1,OK:nt,isAborted:ls,isDirty:cs,isValid:Ni,isAsync:$n,get util(){return ve},get objectUtil(){return q1},ZodParsedType:Z,getParsedType:Ur,ZodType:le,ZodString:zn,ZodNumber:ps,ZodBigInt:ds,ZodBoolean:fs,ZodDate:hs,ZodSymbol:J1,ZodUndefined:ms,ZodNull:gs,ZodAny:Un,ZodUnknown:Ri,ZodNever:no,ZodVoid:X1,ZodArray:Oi,ZodObject:Zo,ZodUnion:ws,ZodDiscriminatedUnion:Bn,ZodIntersection:vs,ZodTuple:Ho,ZodRecord:Dn,ZodMap:Q1,ZodSet:eu,ZodFunction:jn,ZodLazy:ys,ZodLiteral:xs,ZodEnum:Zn,ZodNativeEnum:bs,ZodPromise:Hn,ZodEffects:so,ZodTransformer:so,ZodOptional:ao,ZodNullable:Pi,ZodDefault:Cs,ZodCatch:ru,ZodNaN:ou,BRAND:Id,ZodBranded:Fn,ZodPipeline:Li,ZodReadonly:iu,custom:nu,Schema:le,ZodSchema:le,late:Nd,get ZodFirstPartyTypeKind(){return Q},coerce:d2,any:Dd,array:Zd,bigint:Ld,boolean:lu,date:Md,discriminatedUnion:Gd,effect:G1,enum:r2,function:Qd,instanceof:Od,intersection:qd,lazy:e2,literal:t2,map:Jd,nan:Pd,nativeEnum:o2,never:Fd,null:Bd,nullable:a2,number:su,object:Hd,oboolean:p2,onumber:u2,optional:n2,ostring:c2,pipeline:l2,preprocess:s2,promise:i2,record:Kd,set:Xd,strictObject:Wd,string:au,symbol:$d,transformer:G1,tuple:Yd,undefined:Ud,union:Vd,unknown:jd,void:zd,NEVER:f2,ZodIssueCode:B,quotelessJson:gd,ZodError:vr});var je=u.object({message:u.string()});function V(t){return u.literal(q[t])}var Ok=u.object({accessList:u.array(u.string()),blockHash:u.string().nullable(),blockNumber:u.string().nullable(),chainId:u.string().or(u.number()),from:u.string(),gas:u.string(),hash:u.string(),input:u.string().nullable(),maxFeePerGas:u.string(),maxPriorityFeePerGas:u.string(),nonce:u.string(),r:u.string(),s:u.string(),to:u.string(),transactionIndex:u.string().nullable(),type:u.string(),v:u.string(),value:u.string()}),h2=u.object({chainId:u.string().or(u.number())}),m2=u.object({email:u.string().email()}),g2=u.object({otp:u.string()}),w2=u.object({uri:u.string()}),v2=u.object({chainId:u.optional(u.string().or(u.number())),preferredAccountType:u.optional(u.string())}),y2=u.object({provider:u.enum(["google","github","apple","facebook","x","discord"])}),x2=u.object({email:u.string().email()}),b2=u.object({otp:u.string()}),C2=u.object({otp:u.string()}),_2=u.object({themeMode:u.optional(u.enum(["light","dark"])),themeVariables:u.optional(u.record(u.string(),u.string().or(u.number()))),w3mThemeVariables:u.optional(u.record(u.string(),u.string()))}),E2=u.object({metadata:u.object({name:u.string(),description:u.string(),url:u.string(),icons:u.array(u.string())}).optional(),sdkVersion:u.string(),projectId:u.string()}),S2=u.object({type:u.string()}),A2=u.object({action:u.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),T2=u.object({url:u.string()}),k2=u.object({userName:u.string()}),R2=u.object({email:u.string(),address:u.string(),chainId:u.string().or(u.number()),accounts:u.array(u.object({address:u.string(),type:u.enum([ke.ACCOUNT_TYPES.EOA,ke.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),userName:u.string().optional()}),I2=u.object({action:u.enum(["VERIFY_PRIMARY_OTP","VERIFY_SECONDARY_OTP"])}),N2=u.object({email:u.string().email().optional().nullable(),address:u.string(),chainId:u.string().or(u.number()),smartAccountDeployed:u.optional(u.boolean()),accounts:u.array(u.object({address:u.string(),type:u.enum([ke.ACCOUNT_TYPES.EOA,ke.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),preferredAccountType:u.optional(u.string())}),O2=u.object({uri:u.string()}),P2=u.object({isConnected:u.boolean()}),L2=u.object({chainId:u.string().or(u.number())}),M2=u.object({chainId:u.string().or(u.number())}),$2=u.object({newEmail:u.string().email()}),U2=u.object({smartAccountEnabledNetworks:u.array(u.number())}),Pk=u.object({address:u.string(),isDeployed:u.boolean()}),B2=u.object({type:u.string(),address:u.string()}),D2=u.any(),j2=u.object({method:u.literal("eth_accounts")}),F2=u.object({method:u.literal("eth_blockNumber")}),z2=u.object({method:u.literal("eth_call"),params:u.array(u.any())}),Z2=u.object({method:u.literal("eth_chainId")}),H2=u.object({method:u.literal("eth_estimateGas"),params:u.array(u.any())}),W2=u.object({method:u.literal("eth_feeHistory"),params:u.array(u.any())}),V2=u.object({method:u.literal("eth_gasPrice")}),G2=u.object({method:u.literal("eth_getAccount"),params:u.array(u.any())}),q2=u.object({method:u.literal("eth_getBalance"),params:u.array(u.any())}),Y2=u.object({method:u.literal("eth_getBlockByHash"),params:u.array(u.any())}),K2=u.object({method:u.literal("eth_getBlockByNumber"),params:u.array(u.any())}),J2=u.object({method:u.literal("eth_getBlockReceipts"),params:u.array(u.any())}),X2=u.object({method:u.literal("eth_getBlockTransactionCountByHash"),params:u.array(u.any())}),Q2=u.object({method:u.literal("eth_getBlockTransactionCountByNumber"),params:u.array(u.any())}),ef=u.object({method:u.literal("eth_getCode"),params:u.array(u.any())}),tf=u.object({method:u.literal("eth_getFilterChanges"),params:u.array(u.any())}),rf=u.object({method:u.literal("eth_getFilterLogs"),params:u.array(u.any())}),of=u.object({method:u.literal("eth_getLogs"),params:u.array(u.any())}),nf=u.object({method:u.literal("eth_getProof"),params:u.array(u.any())}),af=u.object({method:u.literal("eth_getStorageAt"),params:u.array(u.any())}),sf=u.object({method:u.literal("eth_getTransactionByBlockHashAndIndex"),params:u.array(u.any())}),lf=u.object({method:u.literal("eth_getTransactionByBlockNumberAndIndex"),params:u.array(u.any())}),cf=u.object({method:u.literal("eth_getTransactionByHash"),params:u.array(u.any())}),uf=u.object({method:u.literal("eth_getTransactionCount"),params:u.array(u.any())}),pf=u.object({method:u.literal("eth_getTransactionReceipt"),params:u.array(u.any())}),df=u.object({method:u.literal("eth_getUncleCountByBlockHash"),params:u.array(u.any())}),ff=u.object({method:u.literal("eth_getUncleCountByBlockNumber"),params:u.array(u.any())}),hf=u.object({method:u.literal("eth_maxPriorityFeePerGas")}),mf=u.object({method:u.literal("eth_newBlockFilter")}),gf=u.object({method:u.literal("eth_newFilter"),params:u.array(u.any())}),wf=u.object({method:u.literal("eth_newPendingTransactionFilter")}),vf=u.object({method:u.literal("eth_sendRawTransaction"),params:u.array(u.any())}),yf=u.object({method:u.literal("eth_syncing"),params:u.array(u.any())}),xf=u.object({method:u.literal("eth_uninstallFilter"),params:u.array(u.any())}),cu=u.object({method:u.literal("personal_sign"),params:u.array(u.any())}),bf=u.object({method:u.literal("eth_signTypedData_v4"),params:u.array(u.any())}),uu=u.object({method:u.literal("eth_sendTransaction"),params:u.array(u.any())}),Cf=u.object({method:u.literal("solana_signMessage"),params:u.object({message:u.string(),pubkey:u.string()})}),_f=u.object({method:u.literal("solana_signTransaction"),params:u.object({transaction:u.string()})}),Ef=u.object({method:u.literal("solana_signAllTransactions"),params:u.object({transactions:u.array(u.string())})}),Sf=u.object({method:u.literal("solana_signAndSendTransaction"),params:u.object({transaction:u.string(),options:u.object({skipPreflight:u.boolean().optional(),preflightCommitment:u.enum(["processed","confirmed","finalized","recent","single","singleGossip","root","max"]).optional(),maxRetries:u.number().optional(),minContextSlot:u.number().optional()}).optional()})}),Af=u.object({method:u.literal("wallet_sendCalls"),params:u.array(u.object({chainId:u.string().or(u.number()).optional(),from:u.string().optional(),version:u.string().optional(),capabilities:u.any().optional(),calls:u.array(u.object({to:u.string().startsWith("0x"),data:u.string().startsWith("0x").optional(),value:u.string().optional()}))}))}),Tf=u.object({method:u.literal("wallet_getCallsStatus"),params:u.array(u.string())}),kf=u.object({method:u.literal("wallet_getCapabilities")}),Rf=u.object({method:u.literal("wallet_grantPermissions"),params:u.array(u.any())}),pu=u.object({token:u.string()}),G=u.object({id:u.string().optional()}),lo={appEvent:G.extend({type:V("APP_SWITCH_NETWORK"),payload:h2}).or(G.extend({type:V("APP_CONNECT_EMAIL"),payload:m2})).or(G.extend({type:V("APP_CONNECT_DEVICE")})).or(G.extend({type:V("APP_CONNECT_OTP"),payload:g2})).or(G.extend({type:V("APP_CONNECT_SOCIAL"),payload:w2})).or(G.extend({type:V("APP_GET_FARCASTER_URI")})).or(G.extend({type:V("APP_CONNECT_FARCASTER")})).or(G.extend({type:V("APP_GET_USER"),payload:u.optional(v2)})).or(G.extend({type:V("APP_GET_SOCIAL_REDIRECT_URI"),payload:y2})).or(G.extend({type:V("APP_SIGN_OUT")})).or(G.extend({type:V("APP_IS_CONNECTED"),payload:u.optional(pu)})).or(G.extend({type:V("APP_GET_CHAIN_ID")})).or(G.extend({type:V("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(G.extend({type:V("APP_INIT_SMART_ACCOUNT")})).or(G.extend({type:V("APP_SET_PREFERRED_ACCOUNT"),payload:S2})).or(G.extend({type:V("APP_RPC_REQUEST"),payload:cu.or(uu).or(j2).or(F2).or(z2).or(Z2).or(H2).or(W2).or(V2).or(G2).or(q2).or(Y2).or(K2).or(J2).or(X2).or(Q2).or(ef).or(tf).or(rf).or(of).or(nf).or(af).or(sf).or(lf).or(cf).or(uf).or(pf).or(df).or(ff).or(hf).or(mf).or(gf).or(wf).or(vf).or(yf).or(xf).or(cu).or(bf).or(uu).or(Cf).or(_f).or(Ef).or(Sf).or(Tf).or(Af).or(kf).or(Rf)})).or(G.extend({type:V("APP_UPDATE_EMAIL"),payload:x2})).or(G.extend({type:V("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:b2})).or(G.extend({type:V("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:C2})).or(G.extend({type:V("APP_SYNC_THEME"),payload:_2})).or(G.extend({type:V("APP_SYNC_DAPP_DATA"),payload:E2})),frameEvent:G.extend({type:V("FRAME_SWITCH_NETWORK_ERROR"),payload:je}).or(G.extend({type:V("FRAME_SWITCH_NETWORK_SUCCESS"),payload:M2})).or(G.extend({type:V("FRAME_CONNECT_EMAIL_SUCCESS"),payload:A2})).or(G.extend({type:V("FRAME_CONNECT_EMAIL_ERROR"),payload:je})).or(G.extend({type:V("FRAME_GET_FARCASTER_URI_SUCCESS"),payload:T2})).or(G.extend({type:V("FRAME_GET_FARCASTER_URI_ERROR"),payload:je})).or(G.extend({type:V("FRAME_CONNECT_FARCASTER_SUCCESS"),payload:k2})).or(G.extend({type:V("FRAME_CONNECT_FARCASTER_ERROR"),payload:je})).or(G.extend({type:V("FRAME_CONNECT_OTP_ERROR"),payload:je})).or(G.extend({type:V("FRAME_CONNECT_OTP_SUCCESS")})).or(G.extend({type:V("FRAME_CONNECT_DEVICE_ERROR"),payload:je})).or(G.extend({type:V("FRAME_CONNECT_DEVICE_SUCCESS")})).or(G.extend({type:V("FRAME_CONNECT_SOCIAL_SUCCESS"),payload:R2})).or(G.extend({type:V("FRAME_CONNECT_SOCIAL_ERROR"),payload:je})).or(G.extend({type:V("FRAME_GET_USER_ERROR"),payload:je})).or(G.extend({type:V("FRAME_GET_USER_SUCCESS"),payload:N2})).or(G.extend({type:V("FRAME_GET_SOCIAL_REDIRECT_URI_ERROR"),payload:je})).or(G.extend({type:V("FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS"),payload:O2})).or(G.extend({type:V("FRAME_SIGN_OUT_ERROR"),payload:je})).or(G.extend({type:V("FRAME_SIGN_OUT_SUCCESS")})).or(G.extend({type:V("FRAME_IS_CONNECTED_ERROR"),payload:je})).or(G.extend({type:V("FRAME_IS_CONNECTED_SUCCESS"),payload:P2})).or(G.extend({type:V("FRAME_GET_CHAIN_ID_ERROR"),payload:je})).or(G.extend({type:V("FRAME_GET_CHAIN_ID_SUCCESS"),payload:L2})).or(G.extend({type:V("FRAME_RPC_REQUEST_ERROR"),payload:je})).or(G.extend({type:V("FRAME_RPC_REQUEST_SUCCESS"),payload:D2})).or(G.extend({type:V("FRAME_SESSION_UPDATE"),payload:pu})).or(G.extend({type:V("FRAME_UPDATE_EMAIL_ERROR"),payload:je})).or(G.extend({type:V("FRAME_UPDATE_EMAIL_SUCCESS"),payload:I2})).or(G.extend({type:V("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:je})).or(G.extend({type:V("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(G.extend({type:V("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:je})).or(G.extend({type:V("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:$2})).or(G.extend({type:V("FRAME_SYNC_THEME_ERROR"),payload:je})).or(G.extend({type:V("FRAME_SYNC_THEME_SUCCESS")})).or(G.extend({type:V("FRAME_SYNC_DAPP_DATA_ERROR"),payload:je})).or(G.extend({type:V("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(G.extend({type:V("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:U2})).or(G.extend({type:V("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:je})).or(G.extend({type:V("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:je})).or(G.extend({type:V("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:B2})).or(G.extend({type:V("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:je}))};var He={set(t,e){pt.isClient&&localStorage.setItem(`${q.STORAGE_KEY}${t}`,e)},get(t){return pt.isClient?localStorage.getItem(`${q.STORAGE_KEY}${t}`):null},delete(t,e){pt.isClient&&(e?localStorage.removeItem(t):localStorage.removeItem(`${q.STORAGE_KEY}${t}`))}};var _s={address:/^0x(?:[A-Fa-f0-9]{40})$/u,transactionHash:/^0x(?:[A-Fa-f0-9]{64})$/u,signedMessage:/^0x(?:[a-fA-F0-9]{62,})$/u};var Wn=30*1e3,pt={checkIfAllowedToTriggerEmail(){let t=He.get(q.LAST_EMAIL_LOGIN_TIME);if(t){let e=Date.now()-Number(t);if(e<Wn){let r=Math.ceil((Wn-e)/1e3);throw new Error(`Please try again after ${r} seconds`)}}},getTimeToNextEmailLogin(){let t=He.get(q.LAST_EMAIL_LOGIN_TIME);if(t){let e=Date.now()-Number(t);if(e<Wn)return Math.ceil((Wn-e)/1e3)}return 0},checkIfRequestExists(t){return ke.NOT_SAFE_RPC_METHODS.includes(t.method)||ke.SAFE_RPC_METHODS.includes(t.method)},getResponseType(t){return typeof t=="string"&&(t?.match(_s.transactionHash)||t?.match(_s.signedMessage))?q.RPC_RESPONSE_TYPE_TX:q.RPC_RESPONSE_TYPE_OBJECT},checkIfRequestIsSafe(t){return ke.SAFE_RPC_METHODS.includes(t.method)},isClient:typeof window<"u"};var Mi=class{constructor(e,r=!1,o="eip155:1"){if(this.iframe=null,this.rpcUrl=$e.BLOCKCHAIN_API_RPC_URL,this.events={registerFrameEventHandler:(i,n,a)=>{function s({data:c}){if(!c.type?.includes(q.FRAME_EVENT_KEY))return;let x=lo.frameEvent.parse(c);x.id===i&&(n(x),window.removeEventListener("message",s))}pt.isClient&&(window.addEventListener("message",s),a.addEventListener("abort",()=>{window.removeEventListener("message",s)}))},onFrameEvent:i=>{pt.isClient&&window.addEventListener("message",({data:n})=>{if(!n.type?.includes(q.FRAME_EVENT_KEY))return;let a=lo.frameEvent.parse(n);i(a)})},onAppEvent:i=>{pt.isClient&&window.addEventListener("message",({data:n})=>{if(!n.type?.includes(q.APP_EVENT_KEY))return;let a=lo.appEvent.parse(n);i(a)})},postAppEvent:i=>{if(pt.isClient){if(!this.iframe?.contentWindow)throw new Error("W3mFrame: iframe is not set");lo.appEvent.parse(i),this.iframe.contentWindow.postMessage(i,"*")}},postFrameEvent:i=>{if(pt.isClient){if(!parent)throw new Error("W3mFrame: parent is not set");lo.frameEvent.parse(i),parent.postMessage(i,"*")}}},this.projectId=e,this.frameLoadPromise=new Promise((i,n)=>{this.frameLoadPromiseResolver={resolve:i,reject:n}}),r&&(this.frameLoadPromise=new Promise((i,n)=>{this.frameLoadPromiseResolver={resolve:i,reject:n}}),pt.isClient)){let i=document.createElement("iframe");i.id="w3m-iframe",i.src=`${H1}?projectId=${e}&chainId=${o}`,i.name="w3m-secure-iframe",i.style.position="fixed",i.style.zIndex="999999",i.style.display="none",i.style.animationDelay="0s, 50ms",i.style.borderBottomLeftRadius="clamp(0px, var(--wui-border-radius-l), 44px)",i.style.borderBottomRightRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(i),this.iframe=i,this.iframe.onload=()=>{this.frameLoadPromiseResolver?.resolve(void 0)},this.iframe.onerror=()=>{this.frameLoadPromiseResolver?.reject("Unable to load email login dependency")}}}get networks(){let e=["eip155:1","eip155:5","eip155:11155111","eip155:10","eip155:420","eip155:42161","eip155:421613","eip155:137","eip155:80001","eip155:42220","eip155:1313161554","eip155:1313161555","eip155:56","eip155:97","eip155:43114","eip155:43113","eip155:324","eip155:280","eip155:100","eip155:8453","eip155:84531","eip155:84532","eip155:7777777","eip155:999","solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp","solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z","solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1"].map(r=>({[r]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=${r}&projectId=${this.projectId}`,chainId:r}}));return Object.assign({},...e)}};var yr=_r(As()),Hf=_r(As());var zf=t=>JSON.stringify(t,(e,r)=>typeof r=="bigint"?r.toString()+"n":r),Zf=t=>{let e=/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,r=t.replace(e,'$1"$2n"$3');return JSON.parse(r,(o,i)=>typeof i=="string"&&i.match(/^\d+n$/)?BigInt(i.substring(0,i.length-1)):i)};function Kk(t){if(typeof t!="string")throw new Error(`Cannot safe json parse value of type ${typeof t}`);try{return Zf(t)}catch{return t}}function Ts(t){return typeof t=="string"?t:zf(t)||""}var Wf={level:"info"},Bi="custom_context",Ns=1e3*1024,ks=class{constructor(e){this.nodeValue=e,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null}get value(){return this.nodeValue}get size(){return this.sizeInBytes}},qn=class{constructor(e){this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=e,this.sizeInBytes=0}append(e){let r=new ks(e);if(r.size>this.maxSizeInBytes)throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${r.size}`);for(;this.size+r.size>this.maxSizeInBytes;)this.shift();this.head?(this.tail&&(this.tail.next=r),this.tail=r):(this.head=r,this.tail=r),this.lengthInNodes++,this.sizeInBytes+=r.size}shift(){if(!this.head)return;let e=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=e.size}toArray(){let e=[],r=this.head;for(;r!==null;)e.push(r.value),r=r.next;return e}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let e=this.head;return{next:()=>{if(!e)return{done:!0,value:null};let r=e.value;return e=e.next,{done:!1,value:r}}}}},Yn=class{constructor(e,r=Ns){this.level=e??"error",this.levelValue=yr.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=r,this.logs=new qn(this.MAX_LOG_SIZE_IN_BYTES)}forwardToConsole(e,r){r===yr.levels.values.error?console.error(e):r===yr.levels.values.warn?console.warn(e):r===yr.levels.values.debug?console.debug(e):r===yr.levels.values.trace?console.trace(e):console.log(e)}appendToLogs(e){this.logs.append(Ts({timestamp:new Date().toISOString(),log:e}));let r=typeof e=="string"?JSON.parse(e).level:e.level;r>=this.levelValue&&this.forwardToConsole(e,r)}getLogs(){return this.logs}clearLogs(){this.logs=new qn(this.MAX_LOG_SIZE_IN_BYTES)}getLogArray(){return Array.from(this.logs)}logsToBlob(e){let r=this.getLogArray();return r.push(Ts({extraMetadata:e})),new Blob(r,{type:"application/json"})}},Rs=class{constructor(e,r=Ns){this.baseChunkLogger=new Yn(e,r)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}downloadLogsBlobInBrowser(e){let r=URL.createObjectURL(this.logsToBlob(e)),o=document.createElement("a");o.href=r,o.download=`walletconnect-logs-${new Date().toISOString()}.txt`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(r)}},Is=class{constructor(e,r=Ns){this.baseChunkLogger=new Yn(e,r)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}},Vf=Object.defineProperty,Gf=Object.defineProperties,qf=Object.getOwnPropertyDescriptors,vu=Object.getOwnPropertySymbols,Yf=Object.prototype.hasOwnProperty,Kf=Object.prototype.propertyIsEnumerable,yu=(t,e,r)=>e in t?Vf(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Kn=(t,e)=>{for(var r in e||(e={}))Yf.call(e,r)&&yu(t,r,e[r]);if(vu)for(var r of vu(e))Kf.call(e,r)&&yu(t,r,e[r]);return t},Jn=(t,e)=>Gf(t,qf(e));function xu(t){return Jn(Kn({},t),{level:t?.level||Wf.level})}function Jf(t,e=Bi){return t[e]||""}function Xf(t,e,r=Bi){return t[r]=e,t}function Qf(t,e=Bi){let r="";return typeof t.bindings>"u"?r=Jf(t,e):r=t.bindings().context||"",r}function eh(t,e,r=Bi){let o=Qf(t,r);return o.trim()?`${o}/${e}`:e}function bu(t,e,r=Bi){let o=eh(t,e,r),i=t.child({context:o});return Xf(i,o,r)}function th(t){var e,r;let o=new Rs((e=t.opts)==null?void 0:e.level,t.maxSizeInBytes);return{logger:(0,yr.default)(Jn(Kn({},t.opts),{level:"trace",browser:Jn(Kn({},(r=t.opts)==null?void 0:r.browser),{write:i=>o.write(i)})})),chunkLoggerController:o}}function rh(t){var e;let r=new Is((e=t.opts)==null?void 0:e.level,t.maxSizeInBytes);return{logger:(0,yr.default)(Jn(Kn({},t.opts),{level:"trace"}),r),chunkLoggerController:r}}function Cu(t){return typeof t.loggerOverride<"u"&&typeof t.loggerOverride!="string"?{logger:t.loggerOverride,chunkLoggerController:null}:typeof window<"u"?th(t):rh(t)}var Xn=class{constructor(e){let r=xu({level:W1}),{logger:o,chunkLoggerController:i}=Cu({opts:r});this.logger=bu(o,this.constructor.name),this.chunkLoggerController=i,typeof window<"u"&&this.chunkLoggerController?.downloadLogsBlobInBrowser&&(window.downloadAppKitLogsBlob||(window.downloadAppKitLogsBlob={}),window.downloadAppKitLogsBlob.sdk=()=>{this.chunkLoggerController?.downloadLogsBlobInBrowser&&this.chunkLoggerController.downloadLogsBlobInBrowser({projectId:e})})}};var Os=class{constructor(e,r){this.openRpcRequests=[],this.w3mLogger=new Xn(e),this.w3mFrame=new Mi(e,!0,r)}getLoginEmailUsed(){return!!He.get(q.EMAIL_LOGIN_USED_KEY)}getEmail(){return He.get(q.EMAIL)}connectEmail(e){return L(this,null,function*(){try{pt.checkIfAllowedToTriggerEmail();let r=yield this.appEvent({type:q.APP_CONNECT_EMAIL,payload:e});return this.setNewLastEmailLoginTime(),r}catch(r){throw this.w3mLogger.logger.error({error:r},"Error connecting email"),r}})}connectDevice(){return L(this,null,function*(){try{return this.appEvent({type:q.APP_CONNECT_DEVICE})}catch(e){throw this.w3mLogger.logger.error({error:e},"Error connecting device"),e}})}connectOtp(e){return L(this,null,function*(){try{return this.appEvent({type:q.APP_CONNECT_OTP,payload:e})}catch(r){throw this.w3mLogger.logger.error({error:r},"Error connecting otp"),r}})}isConnected(){return L(this,null,function*(){try{let e=yield this.appEvent({type:q.APP_IS_CONNECTED});return e.isConnected||this.deleteAuthLoginCache(),e}catch(e){throw this.deleteAuthLoginCache(),this.w3mLogger.logger.error({error:e},"Error checking connection"),e}})}getChainId(){return L(this,null,function*(){try{let e=yield this.appEvent({type:q.APP_GET_CHAIN_ID});return this.setLastUsedChainId(e.chainId),e}catch(e){throw this.w3mLogger.logger.error({error:e},"Error getting chain id"),e}})}getSocialRedirectUri(e){return L(this,null,function*(){try{return this.appEvent({type:q.APP_GET_SOCIAL_REDIRECT_URI,payload:e})}catch(r){throw this.w3mLogger.logger.error({error:r},"Error getting social redirect uri"),r}})}updateEmail(e){return L(this,null,function*(){try{let r=yield this.appEvent({type:q.APP_UPDATE_EMAIL,payload:e});return this.setNewLastEmailLoginTime(),r}catch(r){throw this.w3mLogger.logger.error({error:r},"Error updating email"),r}})}updateEmailPrimaryOtp(e){return L(this,null,function*(){try{return this.appEvent({type:q.APP_UPDATE_EMAIL_PRIMARY_OTP,payload:e})}catch(r){throw this.w3mLogger.logger.error({error:r},"Error updating email primary otp"),r}})}updateEmailSecondaryOtp(e){return L(this,null,function*(){try{let r=yield this.appEvent({type:q.APP_UPDATE_EMAIL_SECONDARY_OTP,payload:e});return this.setLoginSuccess(r.newEmail),r}catch(r){throw this.w3mLogger.logger.error({error:r},"Error updating email secondary otp"),r}})}syncTheme(e){return L(this,null,function*(){try{return this.appEvent({type:q.APP_SYNC_THEME,payload:e})}catch(r){throw this.w3mLogger.logger.error({error:r},"Error syncing theme"),r}})}syncDappData(e){return L(this,null,function*(){try{return this.appEvent({type:q.APP_SYNC_DAPP_DATA,payload:e})}catch(r){throw this.w3mLogger.logger.error({error:r},"Error syncing dapp data"),r}})}getSmartAccountEnabledNetworks(){return L(this,null,function*(){try{let e=yield this.appEvent({type:q.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS});return this.persistSmartAccountEnabledNetworks(e.smartAccountEnabledNetworks),e}catch(e){throw this.persistSmartAccountEnabledNetworks([]),this.w3mLogger.logger.error({error:e},"Error getting smart account enabled networks"),e}})}setPreferredAccount(e){return L(this,null,function*(){try{return this.appEvent({type:q.APP_SET_PREFERRED_ACCOUNT,payload:{type:e}})}catch(r){throw this.w3mLogger.logger.error({error:r},"Error setting preferred account"),r}})}connect(e){return L(this,null,function*(){try{let r=e?.chainId??this.getLastUsedChainId()??1,o=yield this.appEvent({type:q.APP_GET_USER,payload:W(N({},e),{chainId:r})});return this.setLoginSuccess(o.email),this.setLastUsedChainId(o.chainId),o}catch(r){throw this.w3mLogger.logger.error({error:r},"Error connecting"),r}})}connectSocial(e){return L(this,null,function*(){try{let r=yield this.appEvent({type:q.APP_CONNECT_SOCIAL,payload:{uri:e}});return r.userName&&this.setSocialLoginSuccess(r.userName),r}catch(r){throw this.w3mLogger.logger.error({error:r},"Error connecting social"),r}})}getFarcasterUri(){return L(this,null,function*(){try{return yield this.appEvent({type:q.APP_GET_FARCASTER_URI})}catch(e){throw this.w3mLogger.logger.error({error:e},"Error getting farcaster uri"),e}})}connectFarcaster(){return L(this,null,function*(){try{let e=yield this.appEvent({type:q.APP_CONNECT_FARCASTER});return e.userName&&this.setSocialLoginSuccess(e.userName),e}catch(e){throw this.w3mLogger.logger.error({error:e},"Error connecting farcaster"),e}})}switchNetwork(e){return L(this,null,function*(){try{let r=yield this.appEvent({type:q.APP_SWITCH_NETWORK,payload:{chainId:e}});return this.setLastUsedChainId(r.chainId),r}catch(r){throw this.w3mLogger.logger.error({error:r},"Error switching network"),r}})}disconnect(){return L(this,null,function*(){try{let e=yield this.appEvent({type:q.APP_SIGN_OUT});return this.deleteAuthLoginCache(),e}catch(e){throw this.w3mLogger.logger.error({error:e},"Error disconnecting"),e}})}request(e){return L(this,null,function*(){try{if(ke.GET_CHAIN_ID===e.method)return this.getLastUsedChainId();this.rpcRequestHandler?.(e);let r=yield this.appEvent({type:q.APP_RPC_REQUEST,payload:e});return this.rpcSuccessHandler?.(r,e),r}catch(r){throw this.rpcErrorHandler?.(r,e),this.w3mLogger.logger.error({error:r},"Error requesting"),r}})}onRpcRequest(e){this.rpcRequestHandler=e}onRpcSuccess(e){this.rpcSuccessHandler=e}onRpcError(e){this.rpcErrorHandler=e}onIsConnected(e){this.w3mFrame.events.onFrameEvent(r=>{r.type===q.FRAME_GET_USER_SUCCESS&&e(r.payload)})}onNotConnected(e){this.w3mFrame.events.onFrameEvent(r=>{r.type===q.FRAME_IS_CONNECTED_ERROR&&e(),r.type===q.FRAME_IS_CONNECTED_SUCCESS&&!r.payload.isConnected&&e()})}getCapabilities(){return L(this,null,function*(){try{return(yield this.request({method:"wallet_getCapabilities"}))||{}}catch{return{}}})}onSetPreferredAccount(e){this.w3mFrame.events.onFrameEvent(r=>{r.type===q.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS?e(r.payload):r.type===q.FRAME_SET_PREFERRED_ACCOUNT_ERROR&&e({type:ke.ACCOUNT_TYPES.EOA})})}onGetSmartAccountEnabledNetworks(e){this.w3mFrame.events.onFrameEvent(r=>{r.type===q.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS?e(r.payload.smartAccountEnabledNetworks):r.type===q.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR&&e([])})}getAvailableChainIds(){return Object.keys(this.w3mFrame.networks)}rejectRpcRequests(){try{this.openRpcRequests.forEach(({abortController:e,method:r})=>{ke.SAFE_RPC_METHODS.includes(r)||e.abort()}),this.openRpcRequests=[]}catch(e){this.w3mLogger.logger.error({error:e},"Error aborting RPC request")}}appEvent(e){return L(this,null,function*(){yield this.w3mFrame.frameLoadPromise;let r=e.type.replace("@w3m-app/","");return new Promise((o,i)=>{let n=Math.random().toString(36).substring(7);this.w3mLogger.logger.info?.({event:e,id:n},"Sending app event"),this.w3mFrame.events.postAppEvent(W(N({},e),{id:n}));let a=new AbortController;if(r==="RPC_REQUEST"){let c=e;this.openRpcRequests=[...this.openRpcRequests,W(N({},c.payload),{abortController:a})]}a.signal.addEventListener("abort",()=>{r==="RPC_REQUEST"&&i(new Error("Request was aborted"))});function s(c){c.type===`@w3m-frame/${r}_SUCCESS`?("payload"in c&&o(c.payload),o(void 0)):c.type===`@w3m-frame/${r}_ERROR`&&("payload"in c&&i(new Error(c.payload?.message||"An error occurred")),i(new Error("An error occurred")))}this.w3mFrame.events.registerFrameEventHandler(n,s,a.signal)})})}setNewLastEmailLoginTime(){He.set(q.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setSocialLoginSuccess(e){He.set(q.SOCIAL_USERNAME,e)}setLoginSuccess(e){e&&He.set(q.EMAIL,e),He.set(q.EMAIL_LOGIN_USED_KEY,"true"),He.delete(q.LAST_EMAIL_LOGIN_TIME)}deleteAuthLoginCache(){He.delete(q.EMAIL_LOGIN_USED_KEY),He.delete(q.EMAIL),He.delete(q.LAST_USED_CHAIN_KEY),He.delete(q.SOCIAL_USERNAME),He.delete(q.SOCIAL,!0)}setLastUsedChainId(e){He.set(q.LAST_USED_CHAIN_KEY,String(e))}getLastUsedChainId(){return Number(He.get(q.LAST_USED_CHAIN_KEY))}persistSmartAccountEnabledNetworks(e){He.set(q.SMART_ACCOUNT_ENABLED_NETWORKS,e.join(","))}};var Re=re({transactions:[],coinbaseTransactions:{},transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),Ps={state:Re,subscribe(t){return _e(Re,()=>t(Re))},setLastNetworkInView(t){Re.lastNetworkInView=t},fetchTransactions(t,e){return L(this,null,function*(){let{projectId:r}=ae.state;if(!r||!t)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");Re.loading=!0;try{let o=yield Ae.fetchTransactions({account:t,projectId:r,cursor:Re.next,onramp:e,cache:e==="coinbase"?"no-cache":void 0,chainId:ue.state.caipNetwork?.id}),i=this.filterSpamTransactions(o.data),n=this.filterByConnectedChain(i),a=[...Re.transactions,...n];Re.loading=!1,e==="coinbase"?Re.coinbaseTransactions=this.groupTransactionsByYearAndMonth(Re.coinbaseTransactions,o.data):(Re.transactions=a,Re.transactionsByYear=this.groupTransactionsByYearAndMonth(Re.transactionsByYear,n)),Re.empty=a.length===0,Re.next=o.next?o.next:void 0}catch{ze.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:t,projectId:r,cursor:Re.next,isSmartAccount:pe.state.preferredAccountType===ke.ACCOUNT_TYPES.SMART_ACCOUNT}}),Ne.showError("Failed to fetch transactions"),Re.loading=!1,Re.empty=!0,Re.next=void 0}})},groupTransactionsByYearAndMonth(t={},e=[]){let r=t;return e.forEach(o=>{let i=new Date(o.metadata.minedAt).getFullYear(),n=new Date(o.metadata.minedAt).getMonth(),a=r[i]??{},c=(a[n]??[]).filter(x=>x.id!==o.id);r[i]=W(N({},a),{[n]:[...c,o].sort((x,S)=>new Date(S.metadata.minedAt).getTime()-new Date(x.metadata.minedAt).getTime())})}),r},filterSpamTransactions(t){return t.filter(e=>!e.transfers.every(o=>o.nft_info?.flags.is_spam===!0))},filterByConnectedChain(t){let e=ue.state.caipNetwork?.id;return t.filter(o=>o.metadata.chain===e)},clearCursor(){Re.next=void 0},resetTransactions(){Re.transactions=[],Re.transactionsByYear={},Re.lastNetworkInView=void 0,Re.loading=!1,Re.empty=!1,Re.next=void 0}};var dt=re({wcError:!1,buffering:!1}),Xe={state:dt,subscribeKey(t,e){return Ee(dt,t,e)},_getClient(t){return D.getConnectionControllerClient(t)},setClient(t){dt._client=Ve(t)},connectWalletConnect(){return L(this,null,function*(){Qe.setConnectedConnector("WALLET_CONNECT"),yield this._getClient().connectWalletConnect(t=>{dt.wcUri=t,dt.wcPairingExpiry=Ce.getPairingExpiry()})})},connectExternal(t,e){return L(this,null,function*(){yield this._getClient(e).connectExternal?.(t),D.setActiveChain(e),Qe.setConnectedConnector(t.type)})},reconnectExternal(t){return L(this,null,function*(){yield this._getClient().reconnectExternal?.(t),Qe.setConnectedConnector(t.type)})},setPreferredAccountType(t){return L(this,null,function*(){gr.setLoading(!0);let e=Tt.getAuthConnector();e&&(yield e?.provider.setPreferredAccount(t),yield this.reconnectExternal(e),gr.setLoading(!1),ze.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:t,network:ue.state.caipNetwork?.id||""}}))})},signMessage(t){return L(this,null,function*(){return this._getClient().signMessage(t)})},parseUnits(t,e){return this._getClient().parseUnits(t,e)},formatUnits(t,e){return this._getClient().formatUnits(t,e)},sendTransaction(t){return L(this,null,function*(){return this._getClient().sendTransaction(t)})},estimateGas(t){return L(this,null,function*(){return this._getClient().estimateGas(t)})},writeContract(t){return L(this,null,function*(){return this._getClient().writeContract(t)})},getEnsAddress(t){return L(this,null,function*(){return this._getClient().getEnsAddress(t)})},getEnsAvatar(t){return L(this,null,function*(){return this._getClient().getEnsAvatar(t)})},checkInstalled(t,e){return this._getClient(e).checkInstalled?.(t)||!1},resetWcConnection(){dt.wcUri=void 0,dt.wcPairingExpiry=void 0,dt.wcLinking=void 0,dt.recentWallet=void 0,Ps.resetTransactions(),Qe.deleteWalletConnectDeepLink()},setWcLinking(t){dt.wcLinking=t},setWcError(t){dt.wcError=t,dt.buffering=!1},setRecentWallet(t){dt.recentWallet=t},setBuffering(t){dt.buffering=t},disconnect(){return L(this,null,function*(){let t=this._getClient();try{yield t.disconnect(),this.resetWcConnection()}catch{throw new Error("Failed to disconnect")}})}};var co={getTokenList(){return L(this,null,function*(){let t=ue.state.caipNetwork;return(yield Ae.fetchSwapTokens({chainId:t?.id,projectId:ae.state.projectId}))?.tokens?.map(o=>W(N({},o),{eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0}))||[]})},fetchGasPrice(){return L(this,null,function*(){let t=ae.state.projectId,e=ue.state.caipNetwork;if(!e)return null;try{switch(e.chain){case"solana":let r=(yield Xe.estimateGas({chainNamespace:"solana"})).toString();return{standard:r,fast:r,instant:r};case"evm":default:return yield Ae.fetchGasPrice({projectId:t,chainId:e.id})}}catch{return null}})},fetchSwapAllowance(i){return L(this,arguments,function*({tokenAddress:t,userAddress:e,sourceTokenAmount:r,sourceTokenDecimals:o}){let n=ae.state.projectId,a=yield Ae.fetchSwapAllowance({projectId:n,tokenAddress:t,userAddress:e});if(a?.allowance&&r&&o){let s=Xe.parseUnits(r,o)||0;return BigInt(a.allowance)>=s}return!1})},getMyTokensWithBalance(t){return L(this,null,function*(){let e=pe.state.address,r=ue.state.caipNetwork;if(!e||!r)return[];let i=(yield Ae.getBalance(e,r.id,t)).balances.filter(n=>n.quantity.decimals!=="0");return pe.setTokenBalance(i,D.state.activeChain),this.mapBalancesToSwapTokens(i)})},mapBalancesToSwapTokens(t){return t?.map(e=>W(N({},e),{address:e?.address?e.address:ue.getActiveNetworkTokenAddress(),decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1}))||[]}};var Oe=re({view:"Connect",history:["Connect"],transactionStack:[]}),Se={state:Oe,subscribeKey(t,e){return Ee(Oe,t,e)},pushTransactionStack(t){Oe.transactionStack.push(t)},popTransactionStack(t){let e=Oe.transactionStack.pop();e&&(t?(this.goBack(),e?.onCancel?.()):(e.goBack?this.goBack():e.view&&this.reset(e.view),e?.onSuccess?.()))},push(t,e){t!==Oe.view&&(Oe.view=t,Oe.history.push(t),Oe.data=e)},reset(t){Oe.view=t,Oe.history=[t]},replace(t,e){Oe.history.length>=1&&Oe.history.at(-1)!==t&&(Oe.view=t,Oe.history[Oe.history.length-1]=t,Oe.data=e)},goBack(){if(Oe.history.length>1){Oe.history.pop();let[t]=Oe.history.slice(-1);t&&(Oe.view=t)}},goBackToIndex(t){if(Oe.history.length>1){Oe.history=Oe.history.slice(0,t+1);let[e]=Oe.history.slice(-1);e&&(Oe.view=e)}}};var Jt={getGasPriceInEther(t,e){let r=e*t;return Number(r)/1e18},getGasPriceInUSD(t,e,r){let o=Jt.getGasPriceInEther(e,r);return be.bigNumber(t).multipliedBy(o).toNumber()},getPriceImpact({sourceTokenAmount:t,sourceTokenPriceInUSD:e,toTokenPriceInUSD:r,toTokenAmount:o}){let i=be.bigNumber(t).multipliedBy(e),n=be.bigNumber(o).multipliedBy(r);return i.minus(n).dividedBy(i).multipliedBy(100).toNumber()},getMaxSlippage(t,e){let r=be.bigNumber(t).dividedBy(100);return be.multiply(e,r).toNumber()},getProviderFee(t,e=.0085){return be.bigNumber(t).multipliedBy(e).toString()},isInsufficientNetworkTokenForGas(t,e){let r=e||"0";return be.bigNumber(t).isZero()?!0:be.bigNumber(be.bigNumber(r)).isGreaterThan(t)},isInsufficientSourceTokenForSwap(t,e,r){let o=r?.find(n=>n.address===e)?.quantity?.numeric;return be.bigNumber(o||"0").isLessThan(t)},getToTokenAmount({sourceToken:t,toToken:e,sourceTokenPrice:r,toTokenPrice:o,sourceTokenAmount:i}){if(i==="0"||!t||!e)return"0";let n=t.decimals,a=r,s=e.decimals,c=o;if(c<=0)return"0";let x=be.bigNumber(i).multipliedBy(.0085),E=be.bigNumber(i).minus(x).multipliedBy(be.bigNumber(10).pow(n)),Y=be.bigNumber(a).dividedBy(c),j=n-s;return E.multipliedBy(Y).dividedBy(be.bigNumber(10).pow(j)).dividedBy(be.bigNumber(10).pow(s)).toFixed(s).toString()}};var _u=15e4,oh=6;var ft={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:Ie.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},k=re(ft),Go={state:k,subscribe(t){return _e(k,()=>t(k))},subscribeKey(t,e){return Ee(k,t,e)},getParams(){let t=pe.state.address,e=ue.getActiveNetworkTokenAddress(),r=Qe.getConnectedConnector(),o=Tt.getAuthConnector();if(!t)throw new Error("No address found to swap the tokens from.");let i=pe.state.caipAddress,n=!k.toToken?.address||!k.toToken?.decimals,a=!k.sourceToken?.address||!k.sourceToken?.decimals||!be.bigNumber(k.sourceTokenAmount).isGreaterThan(0),s=!k.sourceTokenAmount;return{networkAddress:e,fromAddress:t,fromCaipAddress:pe.state.caipAddress,sourceTokenAddress:k.sourceToken?.address,toTokenAddress:k.toToken?.address,toTokenAmount:k.toTokenAmount,toTokenDecimals:k.toToken?.decimals,sourceTokenAmount:k.sourceTokenAmount,sourceTokenDecimals:k.sourceToken?.decimals,invalidToToken:n,invalidSourceToken:a,invalidSourceTokenAmount:s,availableToSwap:i&&!n&&!a&&!s,isAuthConnector:o?.walletFeatures&&r==="AUTH"}},setSourceToken(t){if(!t){k.sourceToken=t,k.sourceTokenAmount="",k.sourceTokenPriceInUSD=0;return}k.sourceToken=t,this.setTokenPrice(t.address,"sourceToken")},setSourceTokenAmount(t){k.sourceTokenAmount=t},setToToken(t){if(!t){k.toToken=t,k.toTokenAmount="",k.toTokenPriceInUSD=0;return}k.toToken=t,this.setTokenPrice(t.address,"toToken")},setToTokenAmount(t){k.toTokenAmount=t?be.formatNumberToLocalString(t,oh):""},setTokenPrice(t,e){return L(this,null,function*(){let{availableToSwap:r}=this.getParams(),o=k.tokensPriceMap[t]||0;o||(k.loadingPrices=!0,o=yield this.getAddressPrice(t)),e==="sourceToken"?k.sourceTokenPriceInUSD=o:e==="toToken"&&(k.toTokenPriceInUSD=o),k.loadingPrices&&(k.loadingPrices=!1,r&&this.swapTokens())})},switchTokens(){if(k.initializing||!k.initialized)return;let t=k.toToken?N({},k.toToken):void 0,e=k.sourceToken?N({},k.sourceToken):void 0,r=t&&k.toTokenAmount===""?"1":k.toTokenAmount;this.setSourceToken(t),this.setToToken(e),this.setSourceTokenAmount(r),this.setToTokenAmount(""),this.swapTokens()},resetState(){k.myTokensWithBalance=ft.myTokensWithBalance,k.tokensPriceMap=ft.tokensPriceMap,k.initialized=ft.initialized,k.sourceToken=ft.sourceToken,k.sourceTokenAmount=ft.sourceTokenAmount,k.sourceTokenPriceInUSD=ft.sourceTokenPriceInUSD,k.toToken=ft.toToken,k.toTokenAmount=ft.toTokenAmount,k.toTokenPriceInUSD=ft.toTokenPriceInUSD,k.networkPrice=ft.networkPrice,k.networkTokenSymbol=ft.networkTokenSymbol,k.networkBalanceInUSD=ft.networkBalanceInUSD,k.inputError=ft.inputError},resetValues(){let{networkAddress:t}=this.getParams(),e=k.tokens?.find(r=>r.address===t);this.setSourceToken(e),this.setToToken(void 0)},getApprovalLoadingState(){return k.loadingApprovalTransaction},clearError(){k.transactionError=void 0},initializeState(){return L(this,null,function*(){if(!k.initializing){if(k.initializing=!0,!k.initialized)try{yield this.fetchTokens(),k.initialized=!0}catch{k.initialized=!1,Ne.showError("Failed to initialize swap"),Se.goBack()}k.initializing=!1}})},fetchTokens(){return L(this,null,function*(){let{networkAddress:t}=this.getParams();yield this.getTokenList(),yield this.getNetworkTokenPrice(),yield this.getMyTokensWithBalance();let e=k.tokens?.find(r=>r.address===t);e&&(k.networkTokenSymbol=e.symbol,this.setSourceToken(e),this.setSourceTokenAmount("1"))})},getTokenList(){return L(this,null,function*(){let t=yield co.getTokenList();k.tokens=t,k.popularTokens=t.sort((e,r)=>e.symbol<r.symbol?-1:e.symbol>r.symbol?1:0),k.suggestedTokens=t.filter(e=>!!Ie.SWAP_SUGGESTED_TOKENS.includes(e.symbol),{})})},getAddressPrice(t){return L(this,null,function*(){let e=k.tokensPriceMap[t];if(e)return e;let o=(yield Ae.fetchTokenPrice({projectId:ae.state.projectId,addresses:[t]})).fungibles||[],n=[...k.tokens||[],...k.myTokensWithBalance||[]]?.find(c=>c.address===t)?.symbol,a=o.find(c=>c.symbol.toLowerCase()===n?.toLowerCase())?.price||0,s=parseFloat(a.toString());return k.tokensPriceMap[t]=s,s})},getNetworkTokenPrice(){return L(this,null,function*(){let{networkAddress:t}=this.getParams(),r=(yield Ae.fetchTokenPrice({projectId:ae.state.projectId,addresses:[t]}).catch(()=>(Ne.showError("Failed to fetch network token price"),{fungibles:[]}))).fungibles?.[0],o=r?.price.toString()||"0";k.tokensPriceMap[t]=parseFloat(o),k.networkTokenSymbol=r?.symbol||"",k.networkPrice=o})},getMyTokensWithBalance(t){return L(this,null,function*(){let e=yield co.getMyTokensWithBalance(t);e&&(yield this.getInitialGasPrice(),this.setBalances(e))})},setBalances(t){let{networkAddress:e}=this.getParams(),r=ue.state.caipNetwork;if(!r)return;let o=t.find(i=>i.address===e);t.forEach(i=>{k.tokensPriceMap[i.address]=i.price||0}),k.myTokensWithBalance=t.filter(i=>i.address.startsWith(r.id)),k.networkBalanceInUSD=o?be.multiply(o.quantity.numeric,o.price).toString():"0"},getInitialGasPrice(){return L(this,null,function*(){let t=yield co.fetchGasPrice();if(!t)return{gasPrice:null,gasPriceInUSD:null};switch(ue.state.caipNetwork?.chain){case"solana":return k.gasFee=t.standard,k.gasPriceInUSD=be.multiply(t.standard,k.networkPrice).dividedBy(1e9).toNumber(),{gasPrice:BigInt(k.gasFee),gasPriceInUSD:Number(k.gasPriceInUSD)};case"evm":default:let e=t.standard,r=BigInt(e),o=BigInt(_u),i=Jt.getGasPriceInUSD(k.networkPrice,o,r);return k.gasFee=e,k.gasPriceInUSD=i,{gasPrice:r,gasPriceInUSD:i}}})},swapTokens(){return L(this,null,function*(){let t=pe.state.address,e=k.sourceToken,r=k.toToken,o=be.bigNumber(k.sourceTokenAmount).isGreaterThan(0);if(!r||!e||k.loadingPrices||!o)return;k.loadingQuote=!0;let i=be.bigNumber(k.sourceTokenAmount).multipliedBy(10**e.decimals),n=yield Ae.fetchSwapQuote({userAddress:t,projectId:ae.state.projectId,from:e.address,to:r.address,gasPrice:k.gasFee,amount:i.toString()});k.loadingQuote=!1;let a=n?.quotes?.[0]?.toAmount;if(!a)return;let s=be.bigNumber(a).dividedBy(10**r.decimals).toString();this.setToTokenAmount(s),this.hasInsufficientToken(k.sourceTokenAmount,e.address)?k.inputError="Insufficient balance":(k.inputError=void 0,this.setTransactionDetails())})},getTransaction(){return L(this,null,function*(){let{fromCaipAddress:t,availableToSwap:e}=this.getParams(),r=k.sourceToken,o=k.toToken;if(!(!t||!e||!r||!o||k.loadingQuote))try{k.loadingBuildTransaction=!0;let i=yield co.fetchSwapAllowance({userAddress:t,tokenAddress:r.address,sourceTokenAmount:k.sourceTokenAmount,sourceTokenDecimals:r.decimals}),n;return i?n=yield this.createSwapTransaction():n=yield this.createAllowanceTransaction(),k.loadingBuildTransaction=!1,k.fetchError=!1,n}catch{Se.goBack(),Ne.showError("Failed to check allowance"),k.loadingBuildTransaction=!1,k.approvalTransaction=void 0,k.swapTransaction=void 0,k.fetchError=!0;return}})},createAllowanceTransaction(){return L(this,null,function*(){let{fromCaipAddress:t,fromAddress:e,sourceTokenAddress:r,toTokenAddress:o}=this.getParams();if(!(!t||!o)){if(!r)throw new Error("createAllowanceTransaction - No source token address found.");try{let i=yield Ae.generateApproveCalldata({projectId:ae.state.projectId,from:r,to:o,userAddress:t}),n=yield Xe.estimateGas({address:e,to:Ce.getPlainAddress(i.tx.to),data:i.tx.data}),a={data:i.tx.data,to:Ce.getPlainAddress(i.tx.from),gas:n,gasPrice:BigInt(i.tx.eip155.gasPrice),value:BigInt(i.tx.value),toAmount:k.toTokenAmount};return k.swapTransaction=void 0,k.approvalTransaction=a,a}catch{Se.goBack(),Ne.showError("Failed to create approval transaction"),k.approvalTransaction=void 0,k.swapTransaction=void 0,k.fetchError=!0;return}}})},createSwapTransaction(){return L(this,null,function*(){let{networkAddress:t,fromCaipAddress:e,sourceTokenAmount:r}=this.getParams(),o=k.sourceToken,i=k.toToken;if(!e||!r||!o||!i)return;let n=Xe.parseUnits(r,o.decimals).toString();try{let a=yield Ae.generateSwapCalldata({projectId:ae.state.projectId,userAddress:e,from:o.address,to:i.address,amount:n}),s=o.address===t,c=BigInt(a.tx.eip155.gas),x=BigInt(a.tx.eip155.gasPrice),S={data:a.tx.data,to:Ce.getPlainAddress(a.tx.to),gas:c,gasPrice:x,value:BigInt(s?n:"0"),toAmount:k.toTokenAmount};return k.gasPriceInUSD=Jt.getGasPriceInUSD(k.networkPrice,c,x),k.approvalTransaction=void 0,k.swapTransaction=S,S}catch{Se.goBack(),Ne.showError("Failed to create transaction"),k.approvalTransaction=void 0,k.swapTransaction=void 0,k.fetchError=!0;return}})},sendTransactionForApproval(t){return L(this,null,function*(){let{fromAddress:e,isAuthConnector:r}=this.getParams();k.loadingApprovalTransaction=!0;let o="Approve limit increase in your wallet";r?Se.pushTransactionStack({view:null,goBack:!0,onSuccess(){Ne.showLoading(o)}}):Ne.showLoading(o);try{yield Xe.sendTransaction({address:e,to:t.to,data:t.data,value:BigInt(t.value),gasPrice:BigInt(t.gasPrice)}),yield this.swapTokens(),yield this.getTransaction(),k.approvalTransaction=void 0,k.loadingApprovalTransaction=!1}catch(i){let n=i;k.transactionError=n?.shortMessage,k.loadingApprovalTransaction=!1,Ne.showError(n?.shortMessage||"Transaction error")}})},sendTransactionForSwap(t){return L(this,null,function*(){if(!t)return;let{fromAddress:e,toTokenAmount:r,isAuthConnector:o}=this.getParams();k.loadingTransaction=!0;let i=`Swapping ${k.sourceToken?.symbol} to ${be.formatNumberToLocalString(r,3)} ${k.toToken?.symbol}`,n=`Swapped ${k.sourceToken?.symbol} to ${be.formatNumberToLocalString(r,3)} ${k.toToken?.symbol}`;o?Se.pushTransactionStack({view:"Account",goBack:!1,onSuccess(){Ne.showLoading(i),Go.resetState()}}):Ne.showLoading("Confirm transaction in your wallet");try{let a=[k.sourceToken?.address,k.toToken?.address].join(","),s=yield Xe.sendTransaction({address:e,to:t.to,data:t.data,gas:t.gas,gasPrice:BigInt(t.gasPrice),value:t.value});return k.loadingTransaction=!1,Ne.showSuccess(n),ze.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:ue.state.caipNetwork?.id||"",swapFromToken:this.state.sourceToken?.symbol||"",swapToToken:this.state.toToken?.symbol||"",swapFromAmount:this.state.sourceTokenAmount||"",swapToAmount:this.state.toTokenAmount||"",isSmartAccount:pe.state.preferredAccountType===ke.ACCOUNT_TYPES.SMART_ACCOUNT}}),Go.resetState(),o||Se.replace("Account"),Go.getMyTokensWithBalance(a),s}catch(a){let s=a;k.transactionError=s?.shortMessage,k.loadingTransaction=!1,Ne.showError(s?.shortMessage||"Transaction error"),ze.sendEvent({type:"track",event:"SWAP_ERROR",properties:{network:ue.state.caipNetwork?.id||"",swapFromToken:this.state.sourceToken?.symbol||"",swapToToken:this.state.toToken?.symbol||"",swapFromAmount:this.state.sourceTokenAmount||"",swapToAmount:this.state.toTokenAmount||"",isSmartAccount:pe.state.preferredAccountType===ke.ACCOUNT_TYPES.SMART_ACCOUNT}});return}})},hasInsufficientToken(t,e){let r=Jt.isInsufficientSourceTokenForSwap(t,e,k.myTokensWithBalance);return Jt.isInsufficientNetworkTokenForGas(k.networkBalanceInUSD,k.gasPriceInUSD)||r},setTransactionDetails(){let{toTokenAddress:t,toTokenDecimals:e}=this.getParams();!t||!e||(k.gasPriceInUSD=Jt.getGasPriceInUSD(k.networkPrice,BigInt(k.gasFee),BigInt(_u)),k.priceImpact=Jt.getPriceImpact({sourceTokenAmount:k.sourceTokenAmount,sourceTokenPriceInUSD:k.sourceTokenPriceInUSD,toTokenPriceInUSD:k.toTokenPriceInUSD,toTokenAmount:k.toTokenAmount}),k.maxSlippage=Jt.getMaxSlippage(k.slippage,k.toTokenAmount),k.providerFee=Jt.getProviderFee(k.sourceTokenAmount))}};var Eu=re({isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]}),pe={state:Eu,replaceState(t){t&&Object.assign(Eu,Ve(t))},subscribe(t){return D.subscribeChainProp("accountState",e=>{if(e)return t(e)})},subscribeKey(t,e){let r;return D.subscribeChainProp("accountState",o=>{if(o){let i=o[t];r!==i&&(r=i,e(i))}})},setIsConnected(t,e){D.setAccountProp("isConnected",t,e)},getChainIsConnected(t){return D.getAccountProp("isConnected",t)},setCaipAddress(t,e){let r=t?Ce.getPlainAddress(t):void 0;D.setAccountProp("caipAddress",t,e),D.setAccountProp("address",r,e)},setBalance(t,e,r){D.setAccountProp("balance",t,r),D.setAccountProp("balanceSymbol",e,r)},setProfileName(t,e){D.setAccountProp("profileName",t,e)},setProfileImage(t,e){D.setAccountProp("profileImage",t,e)},setAddressExplorerUrl(t,e){D.setAccountProp("addressExplorerUrl",t,e)},setSmartAccountDeployed(t,e){D.setAccountProp("smartAccountDeployed",t,e)},setCurrentTab(t){D.setAccountProp("currentTab",t,D.state.activeChain)},setTokenBalance(t,e){t&&D.setAccountProp("tokenBalance",t,e)},setShouldUpdateToAddress(t,e){D.setAccountProp("shouldUpdateToAddress",t,e)},setAllAccounts(t,e){D.setAccountProp("allAccounts",t,e)},addAddressLabel(t,e,r){let o=D.getAccountProp("addressLabels",r)||new Map;o.set(t,e),D.setAccountProp("addressLabels",o,D.state.activeChain)},removeAddressLabel(t,e){let r=D.getAccountProp("addressLabels",e)||new Map;r.delete(t),D.setAccountProp("addressLabels",r,D.state.activeChain)},setConnectedWalletInfo(t,e){D.setAccountProp("connectedWalletInfo",t,e)},setPreferredAccountType(t,e){D.setAccountProp("preferredAccountType",t,e)},setSocialProvider(t,e){t&&D.setAccountProp("socialProvider",t,e)},setSocialWindow(t,e){t&&D.setAccountProp("socialWindow",Ve(t),e)},setFarcasterUrl(t,e){t&&D.setAccountProp("farcasterUrl",t,e)},fetchTokenBalance(){return L(this,null,function*(){let t=ue.state.caipNetwork?.id,e=ue.state.caipNetwork?.chain,r=pe.state.address;try{if(r&&t&&e){let o=yield Ae.getBalance(r,t),i=o.balances.filter(n=>n.quantity.decimals!=="0");this.setTokenBalance(i,e),Go.setBalances(co.mapBalancesToSwapTokens(o.balances))}}catch{Ne.showError("Failed to fetch token balance")}})},resetAccount(t){D.resetAccount(t)}};var Xt=re({loading:!1,open:!1,shake:!1}),gr={state:Xt,subscribe(t){return _e(Xt,()=>t(Xt))},subscribeKey(t,e){return Ee(Xt,t,e)},open(t){return L(this,null,function*(){yield de.state.prefetchPromise;let e=pe.state.isConnected;t?.view?Se.reset(t.view):e?Se.reset("Account"):Se.reset("Connect"),Xt.open=!0,kt.set({open:!0}),ze.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:e}})})},close(){let t=pe.state.isConnected||!1;Xt.open=!1,kt.set({open:!1}),ze.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:t}})},setLoading(t){Xt.loading=t,kt.set({loading:t})},shake(){Xt.shake||(Xt.shake=!0,setTimeout(()=>{Xt.shake=!1},500))}};var Di={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},Ls={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},ih={providers:qa,selectedProvider:null,error:null,purchaseCurrency:Di,paymentCurrency:Ls,purchaseCurrencies:[Di],paymentCurrencies:[],quotesLoading:!1},ye=re(ih),nh={state:ye,subscribe(t){return _e(ye,()=>t(ye))},subscribeKey(t,e){return Ee(ye,t,e)},setSelectedProvider(t){if(t&&t.name==="meld"){let e=g1,r=D.state.activeChain===$e.CHAIN.SOLANA?"SOL":"USDC",o=pe.state.address??"",i=new URL(t.url);i.searchParams.append("publicKey",e),i.searchParams.append("destinationCurrencyCode",r),i.searchParams.append("walletAddress",o),t.url=i.toString()}ye.selectedProvider=t},setPurchaseCurrency(t){ye.purchaseCurrency=t},setPaymentCurrency(t){ye.paymentCurrency=t},setPurchaseAmount(t){this.state.purchaseAmount=t},setPaymentAmount(t){this.state.paymentAmount=t},getAvailableCurrencies(){return L(this,null,function*(){let t=yield Ae.getOnrampOptions();ye.purchaseCurrencies=t.purchaseCurrencies,ye.paymentCurrencies=t.paymentCurrencies,ye.paymentCurrency=t.paymentCurrencies[0]||Ls,ye.purchaseCurrency=t.purchaseCurrencies[0]||Di,yield de.fetchCurrencyImages(t.paymentCurrencies.map(e=>e.id)),yield de.fetchTokenImages(t.purchaseCurrencies.map(e=>e.symbol))})},getQuote(){return L(this,null,function*(){ye.quotesLoading=!0;try{let t=yield Ae.getOnrampQuote({purchaseCurrency:ye.purchaseCurrency,paymentCurrency:ye.paymentCurrency,amount:ye.paymentAmount?.toString()||"0",network:ye.purchaseCurrency?.symbol});return ye.quotesLoading=!1,ye.purchaseAmount=Number(t.purchaseAmount.amount),t}catch(t){return ye.error=t.message,ye.quotesLoading=!1,null}finally{ye.quotesLoading=!1}})},resetState(){ye.providers=qa,ye.selectedProvider=null,ye.error=null,ye.purchaseCurrency=Di,ye.paymentCurrency=Ls,ye.purchaseCurrencies=[Di],ye.paymentCurrencies=[],ye.paymentAmount=void 0,ye.purchaseAmount=void 0,ye.quotesLoading=!1}};var Ke=re({loading:!1}),ah={state:Ke,subscribe(t){return _e(Ke,()=>t(Ke))},subscribeKey(t,e){return Ee(Ke,t,e)},setToken(t){t&&(Ke.token=Ve(t))},setTokenAmount(t){Ke.sendTokenAmount=t},setReceiverAddress(t){Ke.receiverAddress=t},setReceiverProfileImageUrl(t){Ke.receiverProfileImageUrl=t},setReceiverProfileName(t){Ke.receiverProfileName=t},setGasPrice(t){Ke.gasPrice=t},setGasPriceInUsd(t){Ke.gasPriceInUSD=t},setLoading(t){Ke.loading=t},sendToken(){switch(D.state.activeCaipNetwork?.chain){case"evm":this.sendEvmToken();return;case"solana":this.sendSolanaToken();return;default:throw new Error("Unsupported chain")}},sendEvmToken(){this.state.token?.address&&this.state.sendTokenAmount&&this.state.receiverAddress?(ze.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:pe.state.preferredAccountType===ke.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token.address,amount:this.state.sendTokenAmount,network:ue.state.caipNetwork?.id||""}}),this.sendERC20Token({receiverAddress:this.state.receiverAddress,tokenAddress:this.state.token.address,sendTokenAmount:this.state.sendTokenAmount,decimals:this.state.token.quantity.decimals})):this.state.receiverAddress&&this.state.sendTokenAmount&&this.state.gasPrice&&this.state.token?.quantity.decimals&&(ze.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:pe.state.preferredAccountType===ke.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token?.symbol,amount:this.state.sendTokenAmount,network:ue.state.caipNetwork?.id||""}}),this.sendNativeToken({receiverAddress:this.state.receiverAddress,sendTokenAmount:this.state.sendTokenAmount,gasPrice:this.state.gasPrice,decimals:this.state.token.quantity.decimals}))},sendNativeToken(t){return L(this,null,function*(){Se.pushTransactionStack({view:"Account",goBack:!1});let e=t.receiverAddress,r=pe.state.address,o=Xe.parseUnits(t.sendTokenAmount.toString(),Number(t.decimals)),i="0x";try{yield Xe.sendTransaction({to:e,address:r,data:i,value:o,gasPrice:t.gasPrice}),Ne.showSuccess("Transaction started"),ze.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:pe.state.preferredAccountType===ke.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token?.symbol||"",amount:t.sendTokenAmount,network:ue.state.caipNetwork?.id||""}}),this.resetSend()}catch{ze.sendEvent({type:"track",event:"SEND_ERROR",properties:{isSmartAccount:pe.state.preferredAccountType===ke.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token?.symbol||"",amount:t.sendTokenAmount,network:ue.state.caipNetwork?.id||""}}),Ne.showError("Something went wrong")}})},sendERC20Token(t){return L(this,null,function*(){Se.pushTransactionStack({view:"Account",goBack:!1});let e=Xe.parseUnits(t.sendTokenAmount.toString(),Number(t.decimals));try{pe.state.address&&t.sendTokenAmount&&t.receiverAddress&&t.tokenAddress&&(yield Xe.writeContract({fromAddress:pe.state.address,tokenAddress:Ce.getPlainAddress(t.tokenAddress),receiverAddress:t.receiverAddress,tokenAmount:e,method:"transfer",abi:_a}),Ne.showSuccess("Transaction started"),this.resetSend())}catch{Ne.showError("Something went wrong")}})},sendSolanaToken(){if(!this.state.sendTokenAmount||!this.state.receiverAddress){Ne.showError("Please enter a valid amount and receiver address");return}Se.pushTransactionStack({view:"Account",goBack:!1}),Xe.sendTransaction({chainNamespace:"solana",to:this.state.receiverAddress,value:this.state.sendTokenAmount}).then(()=>{this.resetSend(),pe.fetchTokenBalance()}).catch(t=>{Ne.showError("Failed to send transaction. Please try again."),console.error("SendController:sendToken - failed to send solana transaction",t)})},resetSend(){Ke.token=void 0,Ke.sendTokenAmount=void 0,Ke.receiverAddress=void 0,Ke.receiverProfileImageUrl=void 0,Ke.receiverProfileName=void 0,Ke.loading=!1}};var Dt=re({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),sh={state:Dt,subscribe(t){return _e(Dt,()=>t(Dt))},subscribeKey(t,e){return Ee(Dt,t,e)},showTooltip({message:t,triggerRect:e,variant:r}){Dt.open=!0,Dt.message=t,Dt.triggerRect=e,Dt.variant=r},hide(){Dt.open=!1,Dt.message="",Dt.triggerRect={width:0,height:0,top:0,left:0}}};var Su={convertEVMChainIdToCoinType(t){if(t>=2147483648)throw new Error("Invalid chainId");return(2147483648|t)>>>0}};var Ot=re({suggestions:[],loading:!1}),lh={state:Ot,subscribe(t){return _e(Ot,()=>t(Ot))},subscribeKey(t,e){return Ee(Ot,t,e)},resolveName(t){return L(this,null,function*(){try{return yield Ae.lookupEnsName(t)}catch(e){let r=e;throw new Error(r?.reasons?.[0]?.description||"Error resolving name")}})},isNameRegistered(t){return L(this,null,function*(){try{return yield Ae.lookupEnsName(t),!0}catch{return!1}})},getSuggestions(t){return L(this,null,function*(){try{Ot.loading=!0,Ot.suggestions=[];let e=yield Ae.getEnsNameSuggestions(t);return Ot.suggestions=e.suggestions.map(r=>W(N({},r),{name:r.name.replace($e.WC_NAME_SUFFIX,"")}))||[],Ot.suggestions}catch(e){let r=this.parseEnsApiError(e,"Error fetching name suggestions");throw new Error(r)}finally{Ot.loading=!1}})},getNamesForAddress(t){return L(this,null,function*(){try{return ue.state.caipNetwork?yield Ae.reverseLookupEnsName({address:t}):[]}catch(e){let r=this.parseEnsApiError(e,"Error fetching names for address");throw new Error(r)}})},registerName(t){return L(this,null,function*(){let e=ue.state.caipNetwork;if(!e)throw new Error("Network not found");let r=pe.state.address,o=Tt.getAuthConnector();if(!r||!o)throw new Error("Address or auth connector not found");Ot.loading=!0;try{let i=JSON.stringify({name:`${t}${$e.WC_NAME_SUFFIX}`,attributes:{},timestamp:Math.floor(Date.now()/1e3)});Se.pushTransactionStack({view:"RegisterAccountNameSuccess",goBack:!1,replace:!0,onCancel(){Ot.loading=!1}});let n=yield Xe.signMessage(i),a=ni.caipNetworkIdToNumber(e.id);if(!a)throw new Error("Network not found");let s=Su.convertEVMChainIdToCoinType(a);yield Ae.registerEnsName({coinType:s,address:r,signature:n,message:i}),pe.setProfileName(`${t}${$e.WC_NAME_SUFFIX}`,D.state.activeChain),Se.replace("RegisterAccountNameSuccess")}catch(i){let n=this.parseEnsApiError(i,`Error registering name ${t}`);throw Se.replace("RegisterAccountName"),new Error(n)}finally{Ot.loading=!1}})},validateName(t){return/^[a-zA-Z0-9-]{4,}$/u.test(t)},parseEnsApiError(t,e){return t?.reasons?.[0]?.description||e}};var ch={evm:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"a1b58899-f671-4276-6a5e-56ca5bd59700"},uh={fetchWalletImage(t){return L(this,null,function*(){if(t)return yield de._fetchWalletImage(t),this.getWalletImageById(t)})},getWalletImageById(t){if(t)return ct.state.walletImages[t]},getWalletImage(t){if(t?.image_url)return t?.image_url;if(t?.image_id)return ct.state.walletImages[t.image_id]},getNetworkImage(t){if(t?.imageUrl)return t?.imageUrl;if(t?.imageId)return ct.state.networkImages[t.imageId]},getNetworkImageById(t){if(t)return ct.state.networkImages[t]},getConnectorImage(t){if(t?.imageUrl)return t.imageUrl;if(t?.imageId)return ct.state.connectorImages[t.imageId]},getChainImage(t){return ct.state.networkImages[ch[t]]}};var ph={goBackOrCloseModal(){Se.state.history.length>1?Se.goBack():gr.close()},navigateAfterNetworkSwitch(){let{history:t}=Se.state,e=t.findIndex(r=>r==="Networks");e>=1?Se.goBackToIndex(e-1):gr.close()},navigateAfterPreferredAccountTypeSelect(){let{isSiweEnabled:t}=ae.state;t&&D.state.activeChain===$e.CHAIN.EVM?Se.push("ConnectingSiwe"):Se.push("Account")}};var uo=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},xr=class extends T{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail",this.connectedConnector=Qe.getConnectedConnector(),this.shouldShowIcon=this.connectedConnector==="AUTH"}render(){return f`<button ontouchstart data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.shouldShowIcon?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${ne.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(e){if(e.target instanceof HTMLElement&&e.target.id==="copy-address"){this.onCopyClick?.(e);return}this.onProfileClick?.(e)}getIconTemplate(e){return f`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${e||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};xr.styles=[O,U,h1];uo([l()],xr.prototype,"avatarSrc",void 0);uo([l()],xr.prototype,"profileName",void 0);uo([l()],xr.prototype,"address",void 0);uo([l()],xr.prototype,"icon",void 0);uo([l()],xr.prototype,"onProfileClick",void 0);uo([l()],xr.prototype,"onCopyClick",void 0);xr=uo([I("wui-profile-button-v2")],xr);var Au=A`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var po=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},br=class extends T{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){let e=this.size==="sm"?"small-600":"paragraph-600";return f`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?f`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};br.styles=[O,U,Au];po([l()],br.prototype,"variant",void 0);po([l()],br.prototype,"imageSrc",void 0);po([l({type:Boolean})],br.prototype,"disabled",void 0);po([l()],br.prototype,"icon",void 0);po([l()],br.prototype,"size",void 0);po([l()],br.prototype,"text",void 0);br=po([I("wui-chip-button")],br);var Tu=A`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var Ms=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},ji=class extends T{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return f`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){let e=this.networkImages.slice(0,5);return f` <wui-flex class="networks">
      ${e?.map(r=>f` <wui-flex class="network-icon"> <wui-image src=${r}></wui-image> </wui-flex>`)}
    </wui-flex>`}};ji.styles=[O,U,Tu];Ms([l({type:Array})],ji.prototype,"networkImages",void 0);Ms([l()],ji.prototype,"text",void 0);ji=Ms([I("wui-compatible-network")],ji);var ku=A`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var $s=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Fi=class extends T{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return f`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Fi.styles=[O,U,ku];$s([l()],Fi.prototype,"icon",void 0);$s([l()],Fi.prototype,"text",void 0);Fi=$s([I("wui-banner")],Fi);var Ru=A`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var Qn=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},qo=class extends T{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size=""}render(){return f`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};qo.styles=[O,U,Ru];Qn([l()],qo.prototype,"imageSrc",void 0);Qn([l()],qo.prototype,"text",void 0);Qn([l()],qo.prototype,"size",void 0);qo=Qn([I("wui-banner-img")],qo);var Iu=A`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var fo=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Cr=class extends T{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return f`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${ne.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?f`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:f`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};Cr.styles=[O,U,Iu];fo([l()],Cr.prototype,"tokenName",void 0);fo([l()],Cr.prototype,"tokenImageUrl",void 0);fo([l({type:Number})],Cr.prototype,"tokenValue",void 0);fo([l()],Cr.prototype,"tokenAmount",void 0);fo([l()],Cr.prototype,"tokenCurrency",void 0);fo([l({type:Boolean})],Cr.prototype,"clickable",void 0);Cr=fo([I("wui-list-token")],Cr);var Nu=A`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var Br=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Qt=class extends T{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return f`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?f` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:f`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};Qt.styles=[O,U,Nu];Br([l()],Qt.prototype,"icon",void 0);Br([l()],Qt.prototype,"text",void 0);Br([l()],Qt.prototype,"description",void 0);Br([l()],Qt.prototype,"tag",void 0);Br([l()],Qt.prototype,"iconBackgroundColor",void 0);Br([l()],Qt.prototype,"iconColor",void 0);Br([l({type:Boolean})],Qt.prototype,"disabled",void 0);Qt=Br([I("wui-list-description")],Qt);var Ou=A`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`;var Pu=/[.*+?^${}()|[\]\\]/gu,Lu=/[0-9,.]/u;var ea=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Yo=class extends T{constructor(){super(...arguments),this.inputElementRef=_o(),this.disabled=!1,this.value="",this.placeholder="0"}render(){return this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),f`<input
      ${Eo(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){let r=e.data;if(r&&this.inputElementRef?.value)if(r===","){let o=this.inputElementRef.value.value.replace(",",".");this.inputElementRef.value.value=o,this.value=`${this.value}${o}`}else Lu.test(r)||(this.inputElementRef.value.value=this.value.replace(new RegExp(r.replace(Pu,"\\$&"),"gu"),""));this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};Yo.styles=[O,U,Ou];ea([l({type:Boolean})],Yo.prototype,"disabled",void 0);ea([l({type:String})],Yo.prototype,"value",void 0);ea([l({type:String})],Yo.prototype,"placeholder",void 0);Yo=ea([I("wui-input-amount")],Yo);var Mu=A`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`;var zi=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},ho=class extends T{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return f`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?f`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?f`<wui-image src=${this.imageSrc}></wui-image>`:f`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};ho.styles=[O,U,Mu];zi([l()],ho.prototype,"text",void 0);zi([l()],ho.prototype,"address",void 0);zi([l()],ho.prototype,"imageSrc",void 0);zi([l({type:Boolean})],ho.prototype,"isAddress",void 0);ho=zi([I("wui-preview-item")],ho);var $u=A`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var Zi=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},mo=class extends T{constructor(){super(...arguments),this.accountAddress="",this.accountType="",this.connectedConnector=Qe.getConnectedConnector(),this.labels=pe.state.addressLabels,this.caipNetwork=ue.state.caipNetwork,this.socialProvider=Qe.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){super.connectedCallback(),Ae.getBalance(this.accountAddress,this.caipNetwork?.id).then(e=>{let r=this.balance;e.balances.length>0&&(r=e.balances.reduce((o,i)=>o+(i?.value||0),0)),this.balance=r,this.fetchingBalance=!1,this.requestUpdate()})}render(){let e=this.getLabel();return this.shouldShowIcon=this.connectedConnector==="AUTH",f`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?f`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===ke.ACCOUNT_TYPES.EOA?this.socialProvider??"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:f`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${ne.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${e}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${this.fetchingBalance?f`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:f` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
          <slot name="action"></slot>
        </wui-flex>
      </wui-flex>
    `}getLabel(){let e=this.labels?.get(this.accountAddress);return!e&&this.connectedConnector==="AUTH"?e=`${this.accountType==="eoa"?this.socialProvider??"Email":"Smart"} Account`:!e&&this.connectedConnector==="INJECTED"||this.connectedConnector==="ANNOUNCED"?e="Injected Account":e||(e="EOA"),e}};mo.styles=[O,U,$u];Zi([l()],mo.prototype,"accountAddress",void 0);Zi([l()],mo.prototype,"accountType",void 0);Zi([l({type:Boolean})],mo.prototype,"selected",void 0);Zi([l({type:Function})],mo.prototype,"onSelect",void 0);mo=Zi([I("wui-list-account")],mo);var Uu=A`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`;var Us=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Hi=class extends T{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return f`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};Hi.styles=[O,U,Uu];Us([l()],Hi.prototype,"text",void 0);Us([l()],Hi.prototype,"icon",void 0);Hi=Us([I("wui-icon-button")],Hi);var Bu=A`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var Bs=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},Wi=class extends T{constructor(){super(...arguments),this.text="",this.disabled=!1}render(){return f`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};Wi.styles=[O,U,Bu];Bs([l()],Wi.prototype,"text",void 0);Bs([l({type:Boolean})],Wi.prototype,"disabled",void 0);Wi=Bs([I("wui-list-button")],Wi);var Du=A`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var Vi=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},go=class extends T{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return f`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return this.align==="center"?f` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};go.styles=[O,U,Du];Vi([l()],go.prototype,"logo",void 0);Vi([l()],go.prototype,"name",void 0);Vi([l()],go.prototype,"align",void 0);Vi([l({type:Boolean})],go.prototype,"disabled",void 0);go=Vi([I("wui-list-social")],go);var ju=A`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var Fu=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},ta=class extends T{constructor(){super(...arguments),this.imageSrc=""}render(){return f`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?f`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:f`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};ta.styles=[O,U,Tr,ju];Fu([l()],ta.prototype,"imageSrc",void 0);ta=Fu([I("wui-select")],ta);var zu=A`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Pt=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},ht=class extends T{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&ne.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&ne.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&ne.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&ne.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&ne.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&ne.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&ne.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&ne.getSpacingStyles(this.margin,3)};
    `,f`<slot></slot>`}};ht.styles=[O,zu];Pt([l()],ht.prototype,"gridTemplateRows",void 0);Pt([l()],ht.prototype,"gridTemplateColumns",void 0);Pt([l()],ht.prototype,"justifyItems",void 0);Pt([l()],ht.prototype,"alignItems",void 0);Pt([l()],ht.prototype,"justifyContent",void 0);Pt([l()],ht.prototype,"alignContent",void 0);Pt([l()],ht.prototype,"columnGap",void 0);Pt([l()],ht.prototype,"rowGap",void 0);Pt([l()],ht.prototype,"gap",void 0);Pt([l()],ht.prototype,"padding",void 0);Pt([l()],ht.prototype,"margin",void 0);ht=Pt([I("wui-grid")],ht);var Zu=A`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var Hu=function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},ra=class extends T{constructor(){super(...arguments),this.text=""}render(){return f`${this.template()}`}template(){return this.text?f`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};ra.styles=[O,Zu];Hu([l()],ra.prototype,"text",void 0);ra=Hu([I("wui-separator")],ra);var dh={interpolate(t,e,r){if(t.length!==2||e.length!==2)throw new Error("inputRange and outputRange must be an array of length 2");let o=t[0]||0,i=t[1]||0,n=e[0]||0,a=e[1]||0;return r<o?n:r>i?a:(a-n)/(i-o)*(r-o)+n}};var fh=3,hh=["receive","deposit","borrow","claim"],mh=["withdraw","repay","burn"],Ds={getMonthName(t){let e=new Date;return e.setMonth(t),e.toLocaleString("en-US",{month:"long"})},getTransactionGroupTitle(t,e){let r=ya.getYear(),o=this.getMonthName(e);return t===r?o:`${o} ${t}`},getTransactionImages(t){let[e,r]=t,o=!!e&&t?.every(a=>!!a.nft_info),i=t?.length>1;return t?.length===2&&!o?[this.getTransactionImage(e),this.getTransactionImage(r)]:i?t.map(a=>this.getTransactionImage(a)):[this.getTransactionImage(e)]},getTransactionImage(t){return{type:Ds.getTransactionTransferTokenType(t),url:Ds.getTransactionImageURL(t)}},getTransactionImageURL(t){let e,r=!!t?.nft_info,o=!!t?.fungible_info;return t&&r?e=t?.nft_info?.content?.preview?.url:t&&o&&(e=t?.fungible_info?.icon?.url),e},getTransactionTransferTokenType(t){if(t?.fungible_info)return"FUNGIBLE";if(t?.nft_info)return"NFT"},getTransactionDescriptions(t){let e=t?.metadata?.operationType,r=t?.transfers,o=t?.transfers?.length>0,i=t?.transfers?.length>1,n=o&&r?.every(E=>!!E?.fungible_info),[a,s]=r,c=this.getTransferDescription(a),x=this.getTransferDescription(s);if(!o)return(e==="send"||e==="receive")&&n?(c=ne.getTruncateString({string:t?.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),x=ne.getTruncateString({string:t?.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[c,x]):[t.metadata.status];if(i)return r.map(E=>this.getTransferDescription(E));let S="";return hh.includes(e)?S="+":mh.includes(e)&&(S="-"),c=S.concat(c),[c]},getTransferDescription(t){let e="";return t&&(t?.nft_info?e=t?.nft_info?.name||"-":t?.fungible_info&&(e=this.getFungibleTransferDescription(t)||"-")),e},getFungibleTransferDescription(t){return t?[this.getQuantityFixedValue(t?.quantity.numeric),t?.fungible_info?.symbol].join(" ").trim():null},getQuantityFixedValue(t){return t?parseFloat(t).toFixed(fh):null}};export{Ee as a,ya as b,ni as c,be as d,ap as e,sp as f,$e as g,jt as h,Ie as i,Ce as j,Qe as k,ct as l,$o as m,Tt as n,ze as o,kt as p,D as q,ue as r,de as s,ae as t,Ae as u,Ne as v,E1 as w,S1 as x,z1 as y,ke as z,pt as A,Kk as B,Ts as C,Hf as D,xu as E,Qf as F,bu as G,Cu as H,Os as I,Ps as J,Xe as K,Se as L,Go as M,pe as N,gr as O,nh as P,ah as Q,sh as R,lh as S,uh as T,ph as U,Mh as V,Bh as W,lp as X,ul as Y,cp as Z,I as _,Ea as $,yo as aa,xo as ba,Aa as ca,li as da,un as ea,Gr as fa,qr as ga,di as ha,ne as ia,it as ja,Yr as ka,Mt as la,_t as ma,sr as na,fn as oa,Et as pa,mn as qa,lr as ra,cr as sa,ur as ta,hi as ua,Co as va,Na as wa,wn as xa,mi as ya,$t as za,So as Aa,eo as Ba,to as Ca,bn as Da,yi as Ea,xi as Fa,St as Ga,dr as Ha,gt as Ia,Ba as Ja,bi as Ka,wt as La,Cn as Ma,Ci as Na,Ao as Oa,To as Pa,Ht as Qa,za as Ra,Ir as Sa,Wt as Ta,_i as Ua,Ro as Va,Vt as Wa,Io as Xa,No as Ya,Ei as Za,Oo as _a,Pr as $a,Lr as ab,Rn as bb,Si as cb,Mr as db,xr as eb,br as fb,ji as gb,Fi as hb,qo as ib,Cr as jb,Qt as kb,Yo as lb,ho as mb,mo as nb,Hi as ob,Wi as pb,go as qb,ta as rb,ht as sb,ra as tb,dh as ub,Ds as vb};
