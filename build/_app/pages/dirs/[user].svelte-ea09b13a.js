import{S as e,i as t,s,K as a,e as n,k as r,c as o,a as l,n as i,d as c,b as f,ae as p,f as $,J as m,r as u,u as d,v as h,L as g,M as y,z as w,B as x,$ as v,Q as _,j,m as k,o as b,R as E,w as I,O as S,l as z,T as B,U as C,af as D,t as N,g as O,h as P}from"../../chunks/vendor-ead3ceac.js";import{p as T}from"../../chunks/apis-4d445d78.js";import{a as U}from"../../chunks/Stores-a02b800d.js";import"../../chunks/preload-helper-9f12a5fd.js";function A(e,t,s){const a=e.slice();return a[7]=t[s].cliente,a[9]=s,a}function J(e){let t,s;return t=new _({props:{color:"primary",type:"border",size:"lg",style:"width: 5rem; height: 5rem;"}}),{c(){j(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){b(t,e,a),s=!0},p:E,i(e){s||(h(t.$$.fragment,e),s=!0)},o(e){u(t.$$.fragment,e),s=!1},d(e){I(t,e)}}}function K(e){let t,s;return t=new S({props:{$$slots:{default:[Q]},$$scope:{ctx:e}}}),{c(){j(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){b(t,e,a),s=!0},p(e,s){const a={};9&s&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){s||(h(t.$$.fragment,e),s=!0)},o(e){u(t.$$.fragment,e),s=!1},d(e){I(t,e)}}}function L(e){let t,s,a,f,p,d,g=e[7]+"";return t=new D({}),{c(){j(t.$$.fragment),s=N(" "),a=n("span"),f=N(g),p=r()},l(e){k(t.$$.fragment,e),s=O(e," "),a=o(e,"SPAN",{});var n=l(a);f=O(n,g),n.forEach(c),p=i(e)},m(e,n){b(t,e,n),$(e,s,n),$(e,a,n),m(a,f),$(e,p,n),d=!0},p(e,t){(!d||1&t)&&g!==(g=e[7]+"")&&P(f,g)},i(e){d||(h(t.$$.fragment,e),d=!0)},o(e){u(t.$$.fragment,e),d=!1},d(e){I(t,e),e&&c(s),e&&c(a),e&&c(p)}}}function M(e){let t,s;return t=new C({props:{tag:"a",href:"/clientes/"+e[7],action:!0,$$slots:{default:[L]},$$scope:{ctx:e}}}),{c(){j(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){b(t,e,a),s=!0},p(e,s){const a={};1&s&&(a.href="/clientes/"+e[7]),9&s&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){s||(h(t.$$.fragment,e),s=!0)},o(e){u(t.$$.fragment,e),s=!1},d(e){I(t,e)}}}function Q(e){let t,s,a=e[0],n=[];for(let o=0;o<a.length;o+=1)n[o]=M(A(e,a,o));const r=e=>u(n[e],1,1,(()=>{n[e]=null}));return{c(){for(let e=0;e<n.length;e+=1)n[e].c();t=z()},l(e){for(let t=0;t<n.length;t+=1)n[t].l(e);t=z()},m(e,a){for(let t=0;t<n.length;t+=1)n[t].m(e,a);$(e,t,a),s=!0},p(e,s){if(1&s){let o;for(a=e[0],o=0;o<a.length;o+=1){const r=A(e,a,o);n[o]?(n[o].p(r,s),h(n[o],1)):(n[o]=M(r),n[o].c(),h(n[o],1),n[o].m(t.parentNode,t))}for(x(),o=a.length;o<n.length;o+=1)r(o);d()}},i(e){if(!s){for(let e=0;e<a.length;e+=1)h(n[e]);s=!0}},o(e){n=n.filter(Boolean);for(let t=0;t<n.length;t+=1)u(n[t]);s=!1},d(e){B(n,e),e&&c(t)}}}function R(e){let t,s,y,w,v;const _=[K,J],j=[];function k(e,t){return e[0]?0:1}s=k(e),y=j[s]=_[s](e);const b=e[2].default,E=a(b,e,e[3],null);return{c(){t=n("div"),y.c(),w=r(),E&&E.c(),this.h()},l(e){t=o(e,"DIV",{class:!0,style:!0});var s=l(t);y.l(s),w=i(s),E&&E.l(s),s.forEach(c),this.h()},h(){f(t,"class","containerInicio d-flex justify-content-center align-items-center svelte-6ib7ya"),p(t,"min-height","80vh")},m(e,a){$(e,t,a),j[s].m(t,null),m(t,w),E&&E.m(t,null),v=!0},p(e,[a]){let n=s;s=k(e),s===n?j[s].p(e,a):(x(),u(j[n],1,1,(()=>{j[n]=null})),d(),y=j[s],y?y.p(e,a):(y=j[s]=_[s](e),y.c()),h(y,1),y.m(t,w)),E&&E.p&&(!v||8&a)&&g(E,b,e,e[3],a,null,null)},i(e){v||(h(y),h(E,e),v=!0)},o(e){u(y),u(E,e),v=!1},d(e){e&&c(t),j[s].d(),E&&E.d(e)}}}const V=async({page:e})=>({props:{profesional:e.params.user}});function q(e,t,s){let a;y(e,U,(e=>s(4,a=e)));let n,{$$slots:r={},$$scope:o}=t,{profesional:l}=t;w((async()=>{s(0,n=await i())}));const i=async()=>{const{response:e,json:t}=await T(a,"pacientesProfesional.php",{profesional:l});if(200===e.status)return t;v.fire({icon:"error",title:`Error de servidor ${e.status}`,text:e.statusText,showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"}})};return e.$$set=e=>{"profesional"in e&&s(1,l=e.profesional),"$$scope"in e&&s(3,o=e.$$scope)},[n,l,r,o]}export default class extends e{constructor(e){super(),t(this,e,q,R,s,{profesional:1})}}export{V as load};