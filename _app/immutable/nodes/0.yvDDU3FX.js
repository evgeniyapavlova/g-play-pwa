import{s as b,o as k,e as y,c as v,b as S,f as u,m as q,i as L,u as P,p as $,q as w,k as R,r as U}from"../chunks/scheduler.6E1_5SkQ.js";import{S as j,i as E,t as H,b as O}from"../chunks/index.yqXT4q27.js";import{r as f}from"../chunks/reg_link.A6IQIixz.js";function C(a){let s,n;const o=a[1].default,t=k(o,a,a[0],null);return{c(){s=y("div"),t&&t.c(),this.h()},l(e){s=v(e,"DIV",{class:!0});var r=S(s);t&&t.l(r),r.forEach(u),this.h()},h(){q(s,"class","app svelte-a08u1e")},m(e,r){L(e,s,r),t&&t.m(s,null),n=!0},p(e,[r]){t&&t.p&&(!n||r&1)&&P(t,o,e,e[0],n?w(o,e[0],r,null):$(e[0]),null)},i(e){n||(H(t,e),n=!0)},o(e){O(t,e),n=!1},d(e){e&&u(s),t&&t.d(e)}}}function D(){const a=window.location.search,s=new URLSearchParams(a);return Object.fromEntries(s.entries())}function I(a,s,n){let o;R(a,f,i=>n(2,o=i));let{$$slots:t={},$$scope:e}=s;function r(){const i=D(),m=o,[p,_]=m.split("?"),c=new URLSearchParams(_);for(const[h,g]of Object.entries(i)){let l=h;l==="aff"?l="pid":l==="afftrack"&&(l="c"),c.set(l,g)}const d=p+"?"+c.toString();f.set(d)}return U(()=>{r()}),a.$$set=i=>{"$$scope"in i&&n(0,e=i.$$scope)},[e,t]}class z extends j{constructor(s){super(),E(this,s,I,C,b,{})}}export{z as component};