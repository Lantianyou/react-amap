if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return c[s]||(e=new Promise(async e=>{if("document"in self){const c=document.createElement("script");c.src=s,document.head.appendChild(c),c.onload=e}else importScripts(s),e()})),e.then(()=>{if(!c[s])throw new Error(`Module ${s} didn’t register its module`);return c[s]})},e=(e,c)=>{Promise.all(e.map(s)).then(s=>c(1===s.length?s[0]:s))},c={require:Promise.resolve(e)};self.define=(e,a,i)=>{c[e]||(c[e]=Promise.resolve().then(()=>{let c={};const r={uri:location.origin+e.slice(1)};return Promise.all(a.map(e=>{switch(e){case"exports":return c;case"module":return r;default:return s(e)}})).then(s=>{const e=i(...s);return c.default||(c.default=e),c})}))}}define("./service-worker.js",["./workbox-8a532145"],(function(s){"use strict";self.addEventListener("message",s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()}),s.clientsClaim(),s.precacheAndRoute([{url:"./index.html",revision:"c348e9f124faf6ff5fc89424d0fad8c2"},{url:"./static/css/14.86d198b5.chunk.css",revision:"b8989a530125db28b4fdaac059bad664"},{url:"./static/css/main.e5c8cebb.chunk.css",revision:"286e3e90c70a20b3049ce204f0537a63"},{url:"./static/css/vendors-code-preview.01734955.chunk.css",revision:"e83e8fa50dcede04bf12b61442a601e0"},{url:"./static/css/vendors-markdown-preview.30002485.chunk.css",revision:"141ada0a17369b78ea4df3c6311b8e1a"},{url:"./static/css/vendors-uiwjs.613b6e64.chunk.css",revision:"587002ec1d11aab5d7b3c9adf4fb3a4a"},{url:"./static/css/vendors~main.306f0546.chunk.css",revision:"c0504b75a7517d870857e0522d448b77"},{url:"./static/js/14.a60b38f1.chunk.js",revision:"04a3dbf463515a8adfc09129bcf0e7b3"},{url:"./static/js/14.a60b38f1.chunk.js.LICENSE.txt",revision:"ca2d1517faad72dbae8e5307ae98bdc4"},{url:"./static/js/15.fc2be000.chunk.js",revision:"c9c3700db85f0171905fb1bd8e1143a0"},{url:"./static/js/20.3d12a7e5.chunk.js",revision:"a0d092848fac1a097e7e7bdfabe61891"},{url:"./static/js/21.35c03ccf.chunk.js",revision:"439d097cbda7447868baa156ab79ec9d"},{url:"./static/js/22.545db8e8.chunk.js",revision:"9ab42da59992f89c8d208468ce04cc8a"},{url:"./static/js/23.dc4c98a4.chunk.js",revision:"81a38cdd768f33f30f5f2d9daf3cba6c"},{url:"./static/js/24.80cabb3d.chunk.js",revision:"0b951a8ebe4d35873f0cc54c46e20ef1"},{url:"./static/js/25.c764f777.chunk.js",revision:"3c63d66ef26f03ac81054e49e1295997"},{url:"./static/js/26.bf28af85.chunk.js",revision:"8ba06381ae7326d6ccf5190dcda1f294"},{url:"./static/js/27.a4b54d71.chunk.js",revision:"73412904694ec4ffb4bbf7c915d8e9b0"},{url:"./static/js/28.8f60142f.chunk.js",revision:"e74c0bd89f3172147c00b2f6b19b8fe5"},{url:"./static/js/29.e3712572.chunk.js",revision:"f67ed8734090ede7d0b4dfecd5a39071"},{url:"./static/js/30.86991f72.chunk.js",revision:"535f935b5db548f5d8a879dd15cda99a"},{url:"./static/js/31.84117767.chunk.js",revision:"341619ef0373e8493549fb0c7385210a"},{url:"./static/js/32.44d564b9.chunk.js",revision:"4dd950eb4f23bd7fbb5d1e312838600f"},{url:"./static/js/33.83cc2356.chunk.js",revision:"c8227f634fd47cbb999dc1d82fc820db"},{url:"./static/js/34.cf140e73.chunk.js",revision:"d63f156a0765b2ddb1be943d33029710"},{url:"./static/js/35.04bdb99c.chunk.js",revision:"50d71ae6fbbe6d904b3ed9dc5391e9ae"},{url:"./static/js/main.c7e7f766.chunk.js",revision:"3d3da7bfcb9e9e4e607b67f6ae30b7e1"},{url:"./static/js/runtime-main.b112f6ac.js",revision:"df690b68ca6f616daaab58afce226037"},{url:"./static/js/vendors-code-preview.1c6da4cb.chunk.js",revision:"d2c051bac239524510024e4a3935c0d8"},{url:"./static/js/vendors-helper.f80e4040.chunk.js",revision:"d0ffdba6f30da6fee0cf8e130bfbda71"},{url:"./static/js/vendors-lodash.4a32101f.chunk.js",revision:"34d7995294f42c89957ac4c95da13fcd"},{url:"./static/js/vendors-markdown-preview.432ed291.chunk.js",revision:"ba5e1b37ceed333392383cc49d88d2bb"},{url:"./static/js/vendors-prismjs.d5c5c993.chunk.js",revision:"5aa3ad058e2c0cb3866067495d0fe2cf"},{url:"./static/js/vendors-prismjs.d5c5c993.chunk.js.LICENSE.txt",revision:"0e68a261e4846a1e390826c53c553105"},{url:"./static/js/vendors-react.cc85e922.chunk.js",revision:"36ac8f485d7a15bc7a46f067e030eaee"},{url:"./static/js/vendors-react.cc85e922.chunk.js.LICENSE.txt",revision:"b8bfa227b2637d417a788255e8f5194d"},{url:"./static/js/vendors-remark.bf8f5932.chunk.js",revision:"6c869c04899afbc5e92a59b910668674"},{url:"./static/js/vendors-runtime-core.defe97ab.chunk.js",revision:"2df00a236ac759c039cd628a51aac560"},{url:"./static/js/vendors-runtime-generator.97adc565.chunk.js",revision:"7ff77b0bdfb2b4b8d5afb678c44fbb0b"},{url:"./static/js/vendors-runtime-helpers.a9a02286.chunk.js",revision:"1f4c67d2576db59c178ef0bd27fdc7c6"},{url:"./static/js/vendors-runtime-template.2c5fe31d.chunk.js",revision:"163558cd565a84434a4aab155491f72a"},{url:"./static/js/vendors-runtime-traverse.37fcfdc3.chunk.js",revision:"0a97f5bb4ff79219f84a2a31a97e9038"},{url:"./static/js/vendors-runtime-types.0356eec6.chunk.js",revision:"040b8419d60d5b2d7c9b1af7fcc5d7af"},{url:"./static/js/vendors-standalone.15764074.chunk.js",revision:"75b425abdbfc42bed2c4b61b4a15c9b1"},{url:"./static/js/vendors-uiwjs.4d27362c.chunk.js",revision:"bf7a4a5e12146db0ce47b86834e6f3dd"},{url:"./static/js/vendors-uiwjs.4d27362c.chunk.js.LICENSE.txt",revision:"c16a7e8412480a23a3caacd8ea7b8b69"},{url:"./static/js/vendors~main.4cf34673.chunk.js",revision:"66499e2a3a61a5b6c475aea93bad9e5f"},{url:"./static/js/vendors~main.4cf34673.chunk.js.LICENSE.txt",revision:"31c9f757710e17ffc2a464c1fbf28c5d"}],{}),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("//index.html"),{denylist:[/^\/_/,/\/[^\/?]+\.[^\/]+$/]}))}));
//# sourceMappingURL=service-worker.js.map
