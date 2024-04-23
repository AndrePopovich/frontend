import{_ as Q}from"./BQToi7vg.js";import{r as w,x as $,y as W,g as F,z as Z,A as ee,B as te,C as re,D as se,E as ne,F as ae,G as V,H as oe,I as ie,J as ce,m as le,K as ue,L as fe,M as de,N as O,_ as pe,u as he,c as B,a as _,n as ye,q as T,v as P,t as U,s as N,b as me,w as ge,o as E,d as ve,p as we,e as _e}from"./CPMVF56r.js";const M=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function be(r,n){if(typeof r!="string")throw new TypeError("argument str must be a string");const s={},t=(n||{}).decode||De;let a=0;for(;a<r.length;){const o=r.indexOf("=",a);if(o===-1)break;let u=r.indexOf(";",a);if(u===-1)u=r.length;else if(u<o){a=r.lastIndexOf(";",o-1)+1;continue}const l=r.slice(a,o).trim();if(s[l]===void 0){let c=r.slice(o+1,u).trim();c.codePointAt(0)===34&&(c=c.slice(1,-1)),s[l]=Se(c,t)}a=u+1}return s}function I(r,n,s){const e=s||{},t=e.encode||ke;if(typeof t!="function")throw new TypeError("option encode is invalid");if(!M.test(r))throw new TypeError("argument name is invalid");const a=t(n);if(a&&!M.test(a))throw new TypeError("argument val is invalid");let o=r+"="+a;if(e.maxAge!==void 0&&e.maxAge!==null){const u=e.maxAge-0;if(Number.isNaN(u)||!Number.isFinite(u))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(u)}if(e.domain){if(!M.test(e.domain))throw new TypeError("option domain is invalid");o+="; Domain="+e.domain}if(e.path){if(!M.test(e.path))throw new TypeError("option path is invalid");o+="; Path="+e.path}if(e.expires){if(!xe(e.expires)||Number.isNaN(e.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+e.expires.toUTCString()}if(e.httpOnly&&(o+="; HttpOnly"),e.secure&&(o+="; Secure"),e.priority)switch(typeof e.priority=="string"?e.priority.toLowerCase():e.priority){case"low":o+="; Priority=Low";break;case"medium":o+="; Priority=Medium";break;case"high":o+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(e.sameSite)switch(typeof e.sameSite=="string"?e.sameSite.toLowerCase():e.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o}function xe(r){return Object.prototype.toString.call(r)==="[object Date]"||r instanceof Date}function Se(r,n){try{return n(r)}catch{return r}}function De(r){return r.includes("%")?decodeURIComponent(r):r}function ke(r){return encodeURIComponent(r)}const L=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function z(r,n){n?n={...L,...n}:n=L;const s=X(n);return s.dispatch(r),s.toString()}const Be=Object.freeze(["prototype","__proto__","constructor"]);function X(r){let n="",s=new Map;const e=t=>{n+=t};return{toString(){return n},getContext(){return s},dispatch(t){return r.replacer&&(t=r.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const a=Object.prototype.toString.call(t);let o="";const u=a.length;u<10?o="unknown:["+a+"]":o=a.slice(8,u-1),o=o.toLowerCase();let l=null;if((l=s.get(t))===void 0)s.set(t,s.size);else return this.dispatch("[CIRCULAR:"+l+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](t):r.ignoreUnknown||this.unkown(t,o);else{let c=Object.keys(t);r.unorderedObjects&&(c=c.sort());let i=[];r.respectType!==!1&&!H(t)&&(i=Be),r.excludeKeys&&(c=c.filter(f=>!r.excludeKeys(f)),i=i.filter(f=>!r.excludeKeys(f))),e("object:"+(c.length+i.length)+":");const y=f=>{this.dispatch(f),e(":"),r.excludeValues||this.dispatch(t[f]),e(",")};for(const f of c)y(f);for(const f of i)y(f)}},array(t,a){if(a=a===void 0?r.unorderedArrays!==!1:a,e("array:"+t.length+":"),!a||t.length<=1){for(const l of t)this.dispatch(l);return}const o=new Map,u=t.map(l=>{const c=X(r);c.dispatch(l);for(const[i,y]of c.getContext())o.set(i,y);return c.toString()});return s=o,u.sort(),this.array(u,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,a){if(e(a),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),H(t)?this.dispatch("[native]"):this.dispatch(t.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),r.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const a=[...t];return this.array(a,r.unorderedSets!==!1)},set(t){e("set:");const a=[...t];return this.array(a,r.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(r.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const G="[native code] }",Ee=G.length;function H(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-Ee)===G}class k{constructor(n,s){n=this.words=n||[],this.sigBytes=s===void 0?n.length*4:s}toString(n){return(n||Ce).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let s=0;s<n.sigBytes;s++){const e=n.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=e<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<n.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=n.words[s>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new k([...this.words])}}const Ce={stringify(r){const n=[];for(let s=0;s<r.sigBytes;s++){const e=r.words[s>>>2]>>>24-s%4*8&255;n.push((e>>>4).toString(16),(e&15).toString(16))}return n.join("")}},Oe={stringify(r){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let e=0;e<r.sigBytes;e+=3){const t=r.words[e>>>2]>>>24-e%4*8&255,a=r.words[e+1>>>2]>>>24-(e+1)%4*8&255,o=r.words[e+2>>>2]>>>24-(e+2)%4*8&255,u=t<<16|a<<8|o;for(let l=0;l<4&&e*8+l*6<r.sigBytes*8;l++)s.push(n.charAt(u>>>6*(3-l)&63))}return s.join("")}},Te={parse(r){const n=r.length,s=[];for(let e=0;e<n;e++)s[e>>>2]|=(r.charCodeAt(e)&255)<<24-e%4*8;return new k(s,n)}},Pe={parse(r){return Te.parse(unescape(encodeURIComponent(r)))}};class Ue{constructor(){this._data=new k,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new k,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=Pe.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,s){}_process(n){let s,e=this._data.sigBytes/(this.blockSize*4);n?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,a=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);s=this._data.words.splice(0,t),this._data.sigBytes-=a}return new k(s,a)}}class Ne extends Ue{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const K=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],je=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],C=[];class Re extends Ne{constructor(){super(...arguments),this._hash=new k([...K])}reset(){super.reset(),this._hash=new k([...K])}_doProcessBlock(n,s){const e=this._hash.words;let t=e[0],a=e[1],o=e[2],u=e[3],l=e[4],c=e[5],i=e[6],y=e[7];for(let f=0;f<64;f++){if(f<16)C[f]=n[s+f]|0;else{const p=C[f-15],b=(p<<25|p>>>7)^(p<<14|p>>>18)^p>>>3,d=C[f-2],j=(d<<15|d>>>17)^(d<<13|d>>>19)^d>>>10;C[f]=b+C[f-7]+j+C[f-16]}const v=l&c^~l&i,S=t&a^t&o^a&o,m=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),x=(l<<26|l>>>6)^(l<<21|l>>>11)^(l<<7|l>>>25),g=y+x+v+je[f]+C[f],h=m+S;y=i,i=c,c=l,l=u+g|0,u=o,o=a,a=t,t=g+h|0}e[0]=e[0]+t|0,e[1]=e[1]+a|0,e[2]=e[2]+o|0,e[3]=e[3]+u|0,e[4]=e[4]+l|0,e[5]=e[5]+c|0,e[6]=e[6]+i|0,e[7]=e[7]+y|0}finalize(n){super.finalize(n);const s=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(e+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Me(r){return new Re().finalize(r).toString(Oe)}function ze(r,n={}){const s=typeof r=="string"?r:z(r,n);return Me(s).slice(0,10)}function Fe(r,n,s={}){return r===n||z(r,s)===z(n,s)}function D(r){if(typeof r!="object")return r;var n,s,e=Object.prototype.toString.call(r);if(e==="[object Object]"){if(r.constructor!==Object&&typeof r.constructor=="function"){s=new r.constructor;for(n in r)r.hasOwnProperty(n)&&s[n]!==r[n]&&(s[n]=D(r[n]))}else{s={};for(n in r)n==="__proto__"?Object.defineProperty(s,n,{value:D(r[n]),configurable:!0,enumerable:!0,writable:!0}):s[n]=D(r[n])}return s}if(e==="[object Array]"){for(n=r.length,s=Array(n);n--;)s[n]=D(r[n]);return s}return e==="[object Set]"?(s=new Set,r.forEach(function(t){s.add(D(t))}),s):e==="[object Map]"?(s=new Map,r.forEach(function(t,a){s.set(D(a),D(t))}),s):e==="[object Date]"?new Date(+r):e==="[object RegExp]"?(s=new RegExp(r.source,r.flags),s.lastIndex=r.lastIndex,s):e==="[object DataView]"?new r.constructor(D(r.buffer)):e==="[object ArrayBuffer]"?r.slice(0):e.slice(-6)==="Array]"?new r.constructor(r):r}const Ae={path:"/",watch:!0,decode:r=>ee(decodeURIComponent(r)),encode:r=>encodeURIComponent(typeof r=="string"?r:JSON.stringify(r))},Ve=void 0;function Ie(r,n){var l;const s={...Ae,...n},e=q(s)||{};let t;s.maxAge!==void 0?t=s.maxAge*1e3:s.expires&&(t=s.expires.getTime()-Date.now());const a=t!==void 0&&t<=0,o=D(a?void 0:e[r]??((l=s.default)==null?void 0:l.call(s))),u=t&&!a?Ke(o,t,s.watch&&s.watch!=="shallow"):w(o);{let c=null;try{!Ve&&typeof BroadcastChannel<"u"&&(c=new BroadcastChannel(`nuxt:cookies:${r}`))}catch{}const i=()=>{s.readonly||Fe(u.value,e[r])||(He(r,u.value,s),e[r]=D(u.value),c==null||c.postMessage({value:s.encode(u.value)}))},y=v=>{var m;const S=v.refresh?(m=q(s))==null?void 0:m[r]:s.decode(v.value);f=!0,e[r]=u.value=S,te(()=>{f=!1})};let f=!1;$()&&W(()=>{f=!0,i(),c==null||c.close()}),c&&(c.onmessage=({data:v})=>y(v)),s.watch?F(u,()=>{f||i()},{deep:s.watch!=="shallow"}):i()}return u}function q(r={}){return be(document.cookie,r)}function Le(r,n,s={}){return n==null?I(r,n,{...s,maxAge:-1}):I(r,n,s)}function He(r,n,s={}){document.cookie=Le(r,n,s)}const J=2147483647;function Ke(r,n,s){let e,t,a=0;const o=s?w(r):{value:r};return $()&&W(()=>{t==null||t(),clearTimeout(e)}),Z((u,l)=>{s&&(t=F(o,l));function c(){clearTimeout(e);const i=n-a,y=i<J?i:J;e=setTimeout(()=>{if(a+=y,a<n)return c();o.value=void 0,l()},y)}return{get(){return u(),o.value},set(i){c(),o.value=i,l()}}})}const qe=r=>r==="defer"||r===!1;function Je(...r){var S;const n=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(n);let[s,e,t={}]=r;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const a=oe(),o=e,u=()=>null,l=()=>a.isHydrating?a.payload.data[s]:a.static.data[s];t.server=t.server??!0,t.default=t.default??u,t.getCachedData=t.getCachedData??l,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??re.deep,t.dedupe=t.dedupe??"cancel";const c=()=>t.getCachedData(s,a)!=null;if(!a._asyncData[s]||!t.immediate){(S=a.payload._errors)[s]??(S[s]=null);const m=t.deep?w:se;a._asyncData[s]={data:m(t.getCachedData(s,a)??t.default()),pending:w(!c()),error:ne(a.payload._errors,s),status:w("idle")}}const i={...a._asyncData[s]};i.refresh=i.execute=(m={})=>{if(a._asyncDataPromises[s]){if(qe(m.dedupe??t.dedupe))return a._asyncDataPromises[s];a._asyncDataPromises[s].cancelled=!0}if((m._initial||a.isHydrating&&m._initial!==!1)&&c())return Promise.resolve(t.getCachedData(s,a));i.pending.value=!0,i.status.value="pending";const x=new Promise((g,h)=>{try{g(o(a))}catch(p){h(p)}}).then(async g=>{if(x.cancelled)return a._asyncDataPromises[s];let h=g;t.transform&&(h=await t.transform(g)),t.pick&&(h=We(h,t.pick)),a.payload.data[s]=h,i.data.value=h,i.error.value=null,i.status.value="success"}).catch(g=>{if(x.cancelled)return a._asyncDataPromises[s];i.error.value=ie(g),i.data.value=ce(t.default()),i.status.value="error"}).finally(()=>{x.cancelled||(i.pending.value=!1,delete a._asyncDataPromises[s])});return a._asyncDataPromises[s]=x,a._asyncDataPromises[s]},i.clear=()=>$e(a,s);const y=()=>i.refresh({_initial:!0}),f=t.server!==!1&&a.payload.serverRendered;{const m=le();if(m&&!m._nuxtOnBeforeMountCbs){m._nuxtOnBeforeMountCbs=[];const g=m._nuxtOnBeforeMountCbs;m&&(ae(()=>{g.forEach(h=>{h()}),g.splice(0,g.length)}),V(()=>g.splice(0,g.length)))}f&&a.isHydrating&&(i.error.value||c())?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):m&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?m._nuxtOnBeforeMountCbs.push(y):t.immediate&&y(),t.watch&&F(t.watch,()=>i.refresh());const x=a.hook("app:data:refresh",async g=>{(!g||g.includes(s))&&await i.refresh()});m&&V(x)}const v=Promise.resolve(a._asyncDataPromises[s]).then(()=>i);return Object.assign(v,i),v}function $e(r,n){n in r.payload.data&&(r.payload.data[n]=void 0),n in r.payload._errors&&(r.payload._errors[n]=null),r._asyncData[n]&&(r._asyncData[n].data.value=void 0,r._asyncData[n].error.value=null,r._asyncData[n].pending.value=!1,r._asyncData[n].status.value="idle"),n in r._asyncDataPromises&&(r._asyncDataPromises[n].cancelled=!0,r._asyncDataPromises[n]=void 0)}function We(r,n){const s={};for(const e of n)s[e]=r[e];return s}function Xe(r,n,s){const[e={},t]=typeof n=="string"?[{},n]:[n,s],a=ue(()=>O(r)),o=e.key||ze([t,typeof a.value=="string"?a.value:"",...Ge(e)]);if(!o||typeof o!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+o);if(!r)throw new Error("[nuxt] [useFetch] request is missing.");const u=o===t?"$f"+o:o;if(!e.baseURL&&typeof a.value=="string"&&a.value[0]==="/"&&a.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:l,lazy:c,default:i,transform:y,pick:f,watch:v,immediate:S,getCachedData:m,deep:x,dedupe:g,...h}=e,p=fe({...de,...h,cache:typeof e.cache=="boolean"?void 0:e.cache}),b={server:l,lazy:c,default:i,transform:y,pick:f,immediate:S,getCachedData:m,deep:x,dedupe:g,watch:v===!1?[]:[p,a,...v||[]]};let d;return Je(u,()=>{var A;(A=d==null?void 0:d.abort)==null||A.call(d),d=typeof AbortController<"u"?new AbortController:{};const R=O(e.timeout);return R&&setTimeout(()=>d.abort(),R),(e.$fetch||globalThis.$fetch)(a.value,{signal:d.signal,...p})},b)}function Ge(r){var s;const n=[((s=O(r.method))==null?void 0:s.toUpperCase())||"GET",O(r.baseURL)];for(const e of[r.params||r.query]){const t=O(e);if(!t)continue;const a={};for(const[o,u]of Object.entries(t))a[O(o)]=O(u);n.push(a)}return n}const Y=r=>(we("data-v-44f3d446"),r=r(),_e(),r),Ye={class:"bg-gradient-to-b from-purple-900 to-purple-700 min-h-screen flex flex-col justify-center items-center px-4"},Qe=Y(()=>_("h1",{class:"text-4xl font-bold text-white mb-8"},"Вітаємо Вас в BuySell",-1)),Ze={class:"bg-white p-8 rounded-lg shadow-lg w-full max-w-md"},et={class:"flex flex-col"},tt={key:0,class:"text-red-500 text-xs"},rt={class:"flex flex-col"},st={key:0,class:"text-red-500 text-xs"},nt={class:"flex flex-col"},at={key:0,class:"text-red-500 text-xs"},ot={class:"flex flex-col"},it={key:0,class:"text-red-500 text-xs"},ct={class:"flex flex-col"},lt={key:0,class:"text-red-500 text-xs"},ut={class:"flex flex-col"},ft={key:0,class:"text-red-500 text-xs"},dt=Y(()=>_("button",{type:"submit",class:"btn bg-purple-500 text-white hover:bg-purple-600 w-full"},"Створити новий акаунт",-1)),pt="https://buy-sell-api.onrender.com/api/auth/register",ht={__name:"registration",setup(r){const n=w(""),s=w(""),e=w(""),t=w(""),a=w(""),o=w(""),u=he(),l=w(""),c=w(""),i=w(""),y=w(""),f=w(""),v=w(""),S=async()=>{const h=await m(),p=await x(e.value);if(console.log("isValid: ",h),console.log("isExist: ",!p),h)if(p)i.value="Така пошта вже існує!!!";else try{const b=Ie("XSRF-TOKEN"),d={firstname:n.value,lastname:s.value,email:e.value,password:a.value,phone:t.value},j=new Headers({"X-XSRF-TOKEN":b.value}),R=await Xe(pt,{credentials:"include",method:"POST",body:JSON.stringify(d),headers:j},"$s6FyUykKwa");console.log(R),u.push("/auth/")}catch(b){console.error("Помилка при реєстрації користувача:",b.message)}else console.log("Невірні дані!")};async function m(){g();let h=!0;return(n.value.length<3||n.value.length>20)&&(l.value="Ім'я повинно містити від 3 до 20 символів",h=!1),(s.value.length<3||s.value.length>20)&&(c.value="Фамілія повинна містити від 3 до 20 символів",h=!1),e.value.includes("@")||(i.value="Введіть коректну електронну адресу",h=!1),t.value.length!==10&&(y.value="Номер телефону повинен містити 10 символів",h=!1),(a.value.length<3||a.value.length>20)&&(f.value="Пароль повинен містити від 3 до 20 символів",h=!1),a.value!==o.value&&(v.value="Паролі не співпадають",h=!1),h}async function x(h){const p="https://buy-sell-api.onrender.com/api/auth/is-exist/"+h;try{const b=await fetch(p);if(!b.ok)throw new Error("Network response was not ok");return await b.json()}catch(b){return console.error("Error:",b),!0}}function g(){l.value="",c.value="",i.value="",y.value="",f.value="",v.value=""}return(h,p)=>{const b=Q;return E(),B("div",Ye,[Qe,_("div",Ze,[_("form",{onSubmit:ye(S,["prevent"]),class:"space-y-4"},[_("div",et,[T(_("input",{type:"text","onUpdate:modelValue":p[0]||(p[0]=d=>n.value=d),placeholder:"Введіть ім'я",required:"",class:"input"},null,512),[[P,n.value]]),l.value?(E(),B("span",tt,U(l.value),1)):N("",!0)]),_("div",rt,[T(_("input",{type:"text","onUpdate:modelValue":p[1]||(p[1]=d=>s.value=d),placeholder:"Введіть Фамілію",required:"",class:"input"},null,512),[[P,s.value]]),c.value?(E(),B("span",st,U(c.value),1)):N("",!0)]),_("div",nt,[T(_("input",{type:"text","onUpdate:modelValue":p[2]||(p[2]=d=>e.value=d),autocomplete:"email",placeholder:"Введіть електронну пошту",required:"",class:"input"},null,512),[[P,e.value]]),i.value?(E(),B("span",at,U(i.value),1)):N("",!0)]),_("div",ot,[T(_("input",{type:"text","onUpdate:modelValue":p[3]||(p[3]=d=>t.value=d),placeholder:"Введіть номер телефону",required:"",class:"input"},null,512),[[P,t.value]]),y.value?(E(),B("span",it,U(y.value),1)):N("",!0)]),_("div",ct,[T(_("input",{type:"password","onUpdate:modelValue":p[4]||(p[4]=d=>a.value=d),placeholder:"Введіть пароль",required:"",class:"input"},null,512),[[P,a.value]]),f.value?(E(),B("span",lt,U(f.value),1)):N("",!0)]),_("div",ut,[T(_("input",{type:"password","onUpdate:modelValue":p[5]||(p[5]=d=>o.value=d),placeholder:"Повторіть пароль",required:"",class:"input"},null,512),[[P,o.value]]),v.value?(E(),B("span",ft,U(v.value),1)):N("",!0)]),dt],32),me(b,{to:"/auth/",class:"text-center block mt-4 text-blue-600"},{default:ge(()=>[ve("Ввійти")]),_:1})])])}}},vt=pe(ht,[["__scopeId","data-v-44f3d446"]]);export{vt as default};
