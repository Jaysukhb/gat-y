"use strict";(self.webpackChunky2meta=self.webpackChunky2meta||[]).push([[9996],{59379:function(e,t,a){a.r(t),a.d(t,{Head:function(){return r},default:function(){return i}});var l=a(67294),n=a(11883),c=a(38032),o=a.p+"static/loading-9ac431f97180a831b3c84f50eea8440b.gif";var i=e=>{var t,i,r,s;const{0:d,1:m}=(0,l.useState)(!1),{0:g,1:u}=(0,l.useState)("en"),{0:b,1:h}=(0,l.useState)(!1),{0:p,1:f}=(0,l.useState)(),{0:x,1:v}=(0,l.useState)(!1),y=null==e||null===(t=e.location)||void 0===t||null===(i=t.state)||void 0===i?void 0:i.url;(0,l.useEffect)((()=>{v(!0);fetch("https://me0xn4hy3i.execute-api.us-east-1.amazonaws.com/staging/api/resolve/resolveYoutubeSearch?search="+y).then((e=>e.json())).then((e=>{v(!1),f(null==e?void 0:e.data)}))}),[y]);const E=e=>{u(e),h(!b)},w=[{lang:"en",label:"English",path:"/search/"}];return l.createElement(l.Fragment,null,l.createElement("div",{className:"mx-auto md:max-w-[890px] px-3"},l.createElement("header",{className:"h-[68px] flex items-center top-0"},l.createElement("div",{className:"container mx-auto"},l.createElement("div",{className:"flex justify-between items-center"},l.createElement("div",{className:"lg:w-0 lg:flex-1"},l.createElement(n.Link,{to:"/",className:"flex items-center"},l.createElement(c.S,{src:"../images/logo.png",loading:"eager",alt:"y2meta",width:50,quality:50,__imageData:a(42340)}),l.createElement("h1",{className:"text-2xl font-semibold w-auto z-50 pl-2"},"y2meta"))),l.createElement("div",{className:"md:hidden"},l.createElement("button",{onClick:()=>m(!d),"aria-label":"Toggle Menu",type:"button",className:"inline-flex items-center justify-center border border-solid border-heading py-1 px-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},l.createElement(c.S,{src:"../images/mobile.svg",loading:"eager",alt:"y2meta",width:25,quality:25,__imageData:a(41441)}))),l.createElement("nav",{className:"hidden md:flex"},l.createElement(n.Link,{className:"text-sm py-6\tpx-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr",to:"/"},"YouTube Downloader"),l.createElement(n.Link,{className:"text-sm py-6\tpx-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr",to:"/youtube-to-mp3/"},"YouTube to MP3"),l.createElement(n.Link,{className:"text-sm py-6\tpx-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr",to:"/youtube-to-mp4/"},"YouTube to MP4"),l.createElement("div",{className:"relative top-[21px]"},l.createElement("button",{className:"text-sm px-3.5 text-heading hover:text-heading-clr",onClick:()=>h(!b)},(null===(r=w.find((e=>e.lang===g)))||void 0===r?void 0:r.label)||"Language"),b&&l.createElement("div",{className:"absolute right-0 mt-2 py-2 w-40 bg-white rounded-md shadow-lg"},w.map((e=>l.createElement(n.Link,{key:e.lang,to:e.path,className:"block px-4 py-0.5 text-gray-800 hover:bg-gray-200",onClick:()=>E(e.lang)},e.label)))))))),l.createElement("div",{className:"absolute top-16 inset-x-0 transition transform origin-top-right md:!hidden z-20",style:{display:d?"block":"none"}},l.createElement("div",{className:"shadow-lg"},l.createElement("div",{className:"shadow-xs bg-background divide-y-2 divide-gray-50"},l.createElement("div",{className:"pt-5 pb-6 px-5 space-y-6"},l.createElement("div",null,l.createElement("nav",{className:"grid gap-y-8"},l.createElement(n.Link,{className:"-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300",to:"/"},"YouTube Downloader"),l.createElement(n.Link,{className:"-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300",to:"/youtube-to-mp3/"},"YouTube to MP3"),l.createElement(n.Link,{className:"-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300",to:"/youtube-to-mp4/"},"YouTube to MP4"),l.createElement("div",{className:"relative"},l.createElement("button",{className:"-m-3 p-3 flex items-center text-heading hover:text-heading-clr transition duration-300",onClick:()=>h(!b)},(null===(s=w.find((e=>e.lang===g)))||void 0===s?void 0:s.label)||"Language"),b&&l.createElement("div",{className:"absolute mt-2 py-2 w-40 bg-white rounded-md shadow-lg"},w.map((e=>l.createElement(n.Link,{key:e.lang,to:e.path,className:"block px-4 py-0.5 text-gray-800 hover:bg-gray-200",onClick:()=>E(e.lang)},e.label)))))))))))),l.createElement("div",{className:"bg-white p-4 mb-8 border border-solid rounded border-current border-solid-clr container mx-auto"},l.createElement("div",{className:"md:p-8 p-6 flex justify-around"},x?l.createElement("img",{src:o,alt:"spinner"}):l.createElement("div",{className:"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-9"},null==p?void 0:p.map((e=>l.createElement(n.Link,{className:"hover:text-btn-clr",key:null==e?void 0:e.videoId,to:"/download/",state:{url:"https://youtu.be/"+(null==e?void 0:e.videoId)}},l.createElement("img",{src:null==e?void 0:e.imgSrc,alt:"img"}),l.createElement("h3",{className:"absolute text-sm font-medium px-1 -mt-6\tbg-black\ttext-white"},null==e?void 0:e.duration),l.createElement("h3",{className:"text-start text-sm font-medium"},null==e?void 0:e.title)))))))),l.createElement("footer",null,l.createElement("div",{className:"md:py-14 py-5\ttext-sm\ttext-center border-solid\tborder-y border-inherit"},l.createElement("p",{className:"mb-5"},"@2023 y2meta.mobi"),l.createElement("ul",{className:"flex justify-center"},l.createElement("li",null,l.createElement(n.Link,{className:"mx-2",to:"/about-us/"},"About")),l.createElement("li",null,l.createElement(n.Link,{className:"mx-2",to:"/contact/"},"Contact")),l.createElement("li",null,l.createElement(n.Link,{className:"mx-2",to:"/terms-condition/"},"Terms of Service")),l.createElement("li",null,l.createElement(n.Link,{className:"mx-2",to:"/privacy-policy/"},"Privacy Policy"))))))};const r=()=>l.createElement(l.Fragment,null,l.createElement("html",{lang:"en"}),l.createElement("title",null,"Y2meta - Free Youtube Downloader | Download Youtube Video"),l.createElement("meta",{name:"description",content:"Y2meta is popular Free YouTube Downloader allow to Download YouTube video for Free with high quality in 1080p, 2160p, 2k, 4k, 8k without install software."}),l.createElement("meta",{name:"robots",content:"noindex,nofollow"}),l.createElement("link",{rel:"icon",href:"https://y2meta.mobi/icons/icon-256x256.png"}),l.createElement("link",{rel:"canonical",href:"https://y2meta.mobi/search/"}))},42340:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f85838","images":{"fallback":{"src":"/gat-y/static/0cddab075c6ff3429a9dd3509fc226cd/cb3fe/logo.png","srcSet":"/gat-y/static/0cddab075c6ff3429a9dd3509fc226cd/7f99e/logo.png 13w,\\n/gat-y/static/0cddab075c6ff3429a9dd3509fc226cd/114ed/logo.png 25w,\\n/gat-y/static/0cddab075c6ff3429a9dd3509fc226cd/cb3fe/logo.png 50w","sizes":"(min-width: 50px) 50px, 100vw"},"sources":[{"srcSet":"/gat-y/static/0cddab075c6ff3429a9dd3509fc226cd/62727/logo.webp 13w,\\n/gat-y/static/0cddab075c6ff3429a9dd3509fc226cd/266b2/logo.webp 25w,\\n/gat-y/static/0cddab075c6ff3429a9dd3509fc226cd/af6b6/logo.webp 50w","type":"image/webp","sizes":"(min-width: 50px) 50px, 100vw"}]},"width":50,"height":50}')},41441:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/gat-y/static/204fd887c2400a7c4f195800c49920c1/2c9de/mobile.svg","srcSet":"/gat-y/static/204fd887c2400a7c4f195800c49920c1/4067d/mobile.svg 6w,\\n/gat-y/static/204fd887c2400a7c4f195800c49920c1/17221/mobile.svg 12w,\\n/gat-y/static/204fd887c2400a7c4f195800c49920c1/2c9de/mobile.svg 24w","sizes":"(min-width: 24px) 24px, 100vw"},"sources":[{"srcSet":"/gat-y/static/204fd887c2400a7c4f195800c49920c1/69d0e/mobile.webp 6w,\\n/gat-y/static/204fd887c2400a7c4f195800c49920c1/dcc3e/mobile.webp 12w,\\n/gat-y/static/204fd887c2400a7c4f195800c49920c1/b2bf9/mobile.webp 24w","type":"image/webp","sizes":"(min-width: 24px) 24px, 100vw"}]},"width":25,"height":25}')}}]);
//# sourceMappingURL=component---src-pages-search-js-b0010fa45f04f58aa224.js.map