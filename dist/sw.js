if(!self.define){let e,i={};const n=(n,t)=>(n=new URL(n+".js",t).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const d=e=>n(e,r),f={module:{uri:r},exports:s,require:d};i[r]=Promise.all(t.map((e=>f[e]||d(e)))).then((e=>(o(...e),s)))}}define(["./workbox-919adfb7"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"7056c055.js",revision:"5e8575ac891d249afd596bab636667b2"},{url:"d6f3744c.js",revision:"4091a176db92a9ca496256820fadd12f"},{url:"index.html",revision:"24f053f03c981a5d98f705f5b3a84bee"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
