import{a6 as i,s,a7 as c,a8 as l,a9 as d,aa as f,ab as m,ac as h,ad as A,ae as g,af as y,ag as P,X as v,d as w,u as C,j as R,y as _,ah as b,ai as D,aj as E}from"./chunks/framework.b3007fd5.js";import{t as p}from"./chunks/theme.4a2c3924.js";const j={extends:p,Layout:()=>i(p.Layout,null,{}),enhanceApp({app:e,router:a,siteData:t}){}};function u(e){if(e.extends){const a=u(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=u(j),L=w({name:"VitePressApp",setup(){const{site:e}=C();return R(()=>{_(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),b(),D(),E(),o.setup&&o.setup(),()=>i(o.Layout)}});async function T(){const e=O(),a=x();a.provide(l,e);const t=d(e.route);return a.provide(f,t),a.component("Content",m),a.component("ClientOnly",h),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:A}),{app:a,router:e,data:t}}function x(){return g(L)}function O(){let e=s,a;return y(t=>{let n=P(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=v(()=>import(n),[])),s&&(e=!1),r},o.NotFound)}s&&T().then(({app:e,router:a,data:t})=>{a.go().then(()=>{c(a.route,t.site),e.mount("#app")})});export{T as createApp};
