if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const d=e=>i(e,t),f={module:{uri:t},exports:o,require:d};s[t]=Promise.all(n.map((e=>f[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CFrHlVwC.js",revision:null},{url:"assets/index-n_ryQ3BS.css",revision:null},{url:"index.html",revision:"4b1fdeeeca5a8edd8192ed2fea25da3f"},{url:"registerSW.js",revision:"881d9daca8271f1957ccf62ff679dbe3"},{url:"manifest.webmanifest",revision:"d1bf63966a9ee38f1c89a0dd8672b5cf"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
