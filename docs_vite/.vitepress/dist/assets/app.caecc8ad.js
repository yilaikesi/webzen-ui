import{o as u,A as c,B as l,b as d,u as r,x as f,d as m,a0 as o,ac as _,p as h,k as y,ad as A,ae as g,af as v,O as P,ag as w,ah as C,ai as D,aj as x,ak as R,al as b,am as k,an as L,ao as E,ap as O}from"./chunks/framework.2af5c26c.js";import{t as i}from"./chunks/theme.f692eab0.js";const j={mounted(){const e=r();this.isDark=e.isDark,f()},data(){return{isDark:!1}}},T=Object.assign(j,{__name:"Layout",setup(e){const{Layout:t}=i;return(a,n)=>(u(),c(d(t),null,{"doc-after":l(()=>[]),_:1}))}});const B={...i,Layout:T};function p(e){if(e.extends){const t=p(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=p(B),S=m({name:"VitePressApp",setup(){const{site:e}=r();return h(()=>{y(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),A(),g(),v(),s.setup&&s.setup(),()=>P(s.Layout)}});async function $(){const e=V(),t=F();t.provide(w,e);const a=C(e.route);return t.provide(D,a),t.component("Content",x),t.component("ClientOnly",R),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:b}),{app:t,router:e,data:a}}function F(){return k(S)}function V(){let e=o,t;return L(a=>{let n=E(a);return e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),o&&(e=!1),O(()=>import(n),[],import.meta.url)},s.NotFound)}o&&$().then(({app:e,router:t,data:a})=>{t.go().then(()=>{_(t.route,a.site),e.mount("#app")})});export{$ as createApp};
