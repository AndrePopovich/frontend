import{_ as P}from"./BQToi7vg.js";import{_ as N,a as I}from"./CkkgRTxT.js";import{_ as q,S,r as f,P as B,g as L,c,b,J as R,a as s,Q as U,R as j,o as r,w as D,t as p,p as E,e as F}from"./CPMVF56r.js";import{S as V}from"./DECCHyiM.js";const _=m=>(E("data-v-57106c34"),m=m(),F(),m),C={class:"bg-gray-200 min-h-screen p-8"},J={key:0,class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},M=_(()=>s("h2",{class:"big-center-text mb-4"},"Результати пошуку:",-1)),O={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"},Q={class:"aspect-w-1 aspect-h-1"},$=["src"],z={key:1,class:"bg-gray-300 flex items-center justify-center text-gray-600"},A={class:"p-4"},G={class:"text-lg font-semibold truncate mb-2"},H={class:"flex items-center"},K=_(()=>s("img",{src:N,alt:"Місто",class:"mr-2 inline-block h-4 w-4"},null,-1)),T={class:"flex items-center"},W=_(()=>s("img",{src:I,alt:"Категорія",class:"mr-2 inline-block h-4 w-4"},null,-1)),X=_(()=>s("hr",{class:"my-4 border-t border-gray-300"},null,-1)),Y={class:"font-bold text-xl my-4"},Z={key:1,class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-4xl font-bold my-4"},ee={__name:"index",setup(m){const t=S(),n=f([]),h=f({});async function y(){const a="https://buy-sell-api.onrender.com/api/search",i=t.query.adName||"",l=t.query.categoryName||"",e=t.query.cityName||"",u=t.query.minPrice||"",g=t.query.maxPrice||"",w=t.query.sortBy||"default",o=new URL(a);o.searchParams.append("adName",i),o.searchParams.append("categoryName",l),o.searchParams.append("cityName",e),o.searchParams.append("minPrice",u),o.searchParams.append("maxPrice",g),o.searchParams.append("sortBy",w);try{const d=await fetch(o);if(d.ok){const v=await d.json();n.value=v;for(const k of n.value)x(k.id)}else console.error("Помилка при отриманні даних")}catch(d){console.error("Помилка при виконанні запиту:",d)}}async function x(a){try{const l="https://buy-sell-api.onrender.com/api/search/preview/"+a,e=await fetch(l);if(!e.ok)throw new Error("Failed to load image");const u=await e.blob(),g=URL.createObjectURL(u);h.value[a]=g}catch(i){console.error("Error loading image:",i)}}return B(()=>{y();for(const a of n.value)x(a.id)}),L(()=>t.query,()=>{y()}),(a,i)=>{const l=P;return r(),c("div",C,[b(R(V)),n.value.length>0?(r(),c("div",J,[M,s("ul",O,[(r(!0),c(U,null,j(n.value,e=>(r(),c("li",{key:e.id,class:"bg-white rounded-lg shadow-md overflow-hidden min-w-0 min-h-0"},[b(l,{to:`/search/${e.id}`,class:"block"},{default:D(()=>[s("div",Q,[h.value[e.id]?(r(),c("img",{key:0,src:h.value[e.id],class:"thumb",alt:"Image"},null,8,$)):(r(),c("div",z,"Завантаження зображення..."))]),s("div",A,[s("h3",G,p(e.name),1),s("div",H,[K,s("p",null,p(e.city.name),1)]),s("div",T,[W,s("p",null,p(e.category.name),1)]),X,s("p",Y,p(e.price)+" грн",1)])]),_:2},1032,["to"])]))),128))])])):(r(),c("p",Z,"Немає результатів пошуку"))])}}},ce=q(ee,[["__scopeId","data-v-57106c34"]]);export{ce as default};
