if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return c[s]||(e=new Promise(async e=>{if("document"in self){const c=document.createElement("script");c.src=s,document.head.appendChild(c),c.onload=e}else importScripts(s),e()})),e.then(()=>{if(!c[s])throw new Error(`Module ${s} didn’t register its module`);return c[s]})},e=(e,c)=>{Promise.all(e.map(s)).then(s=>c(1===s.length?s[0]:s))},c={require:Promise.resolve(e)};self.define=(e,a,i)=>{c[e]||(c[e]=Promise.resolve().then(()=>{let c={};const r={uri:location.origin+e.slice(1)};return Promise.all(a.map(e=>{switch(e){case"exports":return c;case"module":return r;default:return s(e)}})).then(s=>{const e=i(...s);return c.default||(c.default=e),c})}))}}define("./service-worker.js",["./workbox-8a532145"],(function(s){"use strict";self.addEventListener("message",s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()}),s.clientsClaim(),s.precacheAndRoute([{url:"./index.html",revision:"fa8f05873954c2e31d02dc3ae5464fe3"},{url:"./static/css/14.86d198b5.chunk.css",revision:"b8989a530125db28b4fdaac059bad664"},{url:"./static/css/main.e5c8cebb.chunk.css",revision:"286e3e90c70a20b3049ce204f0537a63"},{url:"./static/css/vendors-code-preview.01734955.chunk.css",revision:"e83e8fa50dcede04bf12b61442a601e0"},{url:"./static/css/vendors-markdown-preview.30002485.chunk.css",revision:"141ada0a17369b78ea4df3c6311b8e1a"},{url:"./static/css/vendors-uiwjs.613b6e64.chunk.css",revision:"587002ec1d11aab5d7b3c9adf4fb3a4a"},{url:"./static/css/vendors~main.306f0546.chunk.css",revision:"c0504b75a7517d870857e0522d448b77"},{url:"./static/js/14.05578a1b.chunk.js",revision:"d773945d7de87ce937bef82f5bba9833"},{url:"./static/js/14.05578a1b.chunk.js.LICENSE.txt",revision:"ca2d1517faad72dbae8e5307ae98bdc4"},{url:"./static/js/15.ad2ad019.chunk.js",revision:"9c27b7b09722eacdd6fff1ef685489a9"},{url:"./static/js/20.052f3c5d.chunk.js",revision:"22d01adb8a5977b6cbae7f0fcd8a63f3"},{url:"./static/js/21.370081cf.chunk.js",revision:"84a1b0c3381fbdd24b3c85757a619833"},{url:"./static/js/22.edbc5ba7.chunk.js",revision:"6a7c4a6695be0a363daf90101e1b9641"},{url:"./static/js/23.406753fe.chunk.js",revision:"ac37cd1bf0476e50815b864d2b6315d4"},{url:"./static/js/24.87624e14.chunk.js",revision:"2930c7b86c233e37c7c995edd641a515"},{url:"./static/js/25.5497fd85.chunk.js",revision:"f28f3b56459c557d81bdb11e81d2ead2"},{url:"./static/js/26.4b1214f9.chunk.js",revision:"e350b44921a613a2b3bf64d3ed6a1b24"},{url:"./static/js/27.98da4b61.chunk.js",revision:"9b2c649b66d6deb1f9696f320eec65d0"},{url:"./static/js/28.f25c1238.chunk.js",revision:"b8fc9b96bcd1169a0051fa5b99ca82be"},{url:"./static/js/29.8999170b.chunk.js",revision:"c464bb86b63fa74428a6f060cfabbe31"},{url:"./static/js/30.dd7a933c.chunk.js",revision:"65ae901944f95f2565952b5d48749cf9"},{url:"./static/js/31.4cb9478d.chunk.js",revision:"2afa59997ce2340539c017fbd6f0be9a"},{url:"./static/js/32.97ba92c2.chunk.js",revision:"73ca528121c97cc7f33c8de3a0faf7b6"},{url:"./static/js/33.d667434f.chunk.js",revision:"cc3f523236722bdbbf0f796d3e130465"},{url:"./static/js/34.22509425.chunk.js",revision:"fb1e0746039eb99dc8b6f1ac8b099684"},{url:"./static/js/35.204fc3ab.chunk.js",revision:"83d9f6ee6adf99391fa8a25b722437f0"},{url:"./static/js/36.485ae603.chunk.js",revision:"3f82432695934e020795640186793a76"},{url:"./static/js/37.1e9f252e.chunk.js",revision:"580d75db550d0caece6c39ee0ebc620e"},{url:"./static/js/main.b8ec9c09.chunk.js",revision:"d93883f237ea902612def7fe0d76d8b6"},{url:"./static/js/runtime-main.1537c626.js",revision:"6272f246050aef385aa99f3565b9d38f"},{url:"./static/js/vendors-code-preview.a060478a.chunk.js",revision:"72057ae79fddbe1d3c5188af2214e8cf"},{url:"./static/js/vendors-helper.f80e4040.chunk.js",revision:"d0ffdba6f30da6fee0cf8e130bfbda71"},{url:"./static/js/vendors-lodash.2c280c79.chunk.js",revision:"07cb60d8aae6b23c85534024d908a176"},{url:"./static/js/vendors-markdown-preview.4f0fbf19.chunk.js",revision:"1c4e42a01d503a74dfa4f7dc8d703cfb"},{url:"./static/js/vendors-prismjs.d5c5c993.chunk.js",revision:"5aa3ad058e2c0cb3866067495d0fe2cf"},{url:"./static/js/vendors-prismjs.d5c5c993.chunk.js.LICENSE.txt",revision:"0e68a261e4846a1e390826c53c553105"},{url:"./static/js/vendors-react.cc85e922.chunk.js",revision:"36ac8f485d7a15bc7a46f067e030eaee"},{url:"./static/js/vendors-react.cc85e922.chunk.js.LICENSE.txt",revision:"b8bfa227b2637d417a788255e8f5194d"},{url:"./static/js/vendors-remark.bf8f5932.chunk.js",revision:"6c869c04899afbc5e92a59b910668674"},{url:"./static/js/vendors-runtime-core.11950229.chunk.js",revision:"60394c5c053d452eda0d1b4dba35575f"},{url:"./static/js/vendors-runtime-generator.97adc565.chunk.js",revision:"7ff77b0bdfb2b4b8d5afb678c44fbb0b"},{url:"./static/js/vendors-runtime-helpers.a9a02286.chunk.js",revision:"1f4c67d2576db59c178ef0bd27fdc7c6"},{url:"./static/js/vendors-runtime-template.2c5fe31d.chunk.js",revision:"163558cd565a84434a4aab155491f72a"},{url:"./static/js/vendors-runtime-traverse.8bb8196d.chunk.js",revision:"98270aed29895a5a47cda7fc6c555826"},{url:"./static/js/vendors-runtime-types.205be06d.chunk.js",revision:"c13560ddde2050dc53ee34e653bf11e0"},{url:"./static/js/vendors-standalone.15764074.chunk.js",revision:"75b425abdbfc42bed2c4b61b4a15c9b1"},{url:"./static/js/vendors-uiwjs.4d27362c.chunk.js",revision:"bf7a4a5e12146db0ce47b86834e6f3dd"},{url:"./static/js/vendors-uiwjs.4d27362c.chunk.js.LICENSE.txt",revision:"c16a7e8412480a23a3caacd8ea7b8b69"},{url:"./static/js/vendors~main.4cf34673.chunk.js",revision:"66499e2a3a61a5b6c475aea93bad9e5f"},{url:"./static/js/vendors~main.4cf34673.chunk.js.LICENSE.txt",revision:"31c9f757710e17ffc2a464c1fbf28c5d"}],{}),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("//index.html"),{denylist:[/^\/_/,/\/[^\/?]+\.[^\/]+$/]}))}));
//# sourceMappingURL=service-worker.js.map
