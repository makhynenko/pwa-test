if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let d={};const o=e=>s(e,t),f={module:{uri:t},exports:d,require:o};i[t]=Promise.all(n.map((e=>f[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BwhHkL--.js",revision:null},{url:"assets/index-n_ryQ3BS.css",revision:null},{url:"index.html",revision:"2851413ec820ec31d0abc4d389457d3f"},{url:"registerSW.js",revision:"881d9daca8271f1957ccf62ff679dbe3"},{url:"logo.png",revision:"3632cb5dc6d260fd849f408040aaaa4d"},{url:"manifest.webmanifest",revision:"ed8e80933f25a3cfc0db15ff52dd8fd7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
