import{S as s,i as t,s as o,k as a,e,t as n,I as c,d as r,n as h,c as i,a as l,g as u,f as d,E as p,F as f,z as m}from"../chunks/vendor-9c647703.js";function g(s){let t,o,m;return{c(){t=a(),o=e("section"),m=n("working"),this.h()},l(s){c('[data-svelte="svelte-1anpopb"]',document.head).forEach(r),t=h(s),o=i(s,"SECTION",{});var a=l(o);m=u(a,"working"),a.forEach(r),this.h()},h(){document.title="Home"},m(s,a){d(s,t,a),d(s,o,a),p(o,m)},p:f,i:f,o:f,d(s){s&&r(t),s&&r(o)}}}const v=!0;function k(s){return m((()=>{fetch("http://localhost:8080/api/v1/user").then((s=>s.json())).then((s=>console.log(s))),console.log("Prod")})),[]}export default class extends s{constructor(s){super(),t(this,s,k,g,o,{})}}export{v as prerender};