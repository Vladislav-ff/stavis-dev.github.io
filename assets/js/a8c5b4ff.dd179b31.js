"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8710],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(r),g=a,d=c["".concat(m,".").concat(g)]||c[g]||u[g]||o;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5690:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(4137));const o={title:"\u0410\u0434\u0430\u043f\u0442\u0430\u0446\u0438\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043f\u043e\u0434 \u0446\u0432\u0435\u0442 \u0442\u0435\u043c\u044b \u0441\u0430\u0439\u0442\u0430",description:"\u0410\u0434\u0430\u043f\u0442\u0430\u0446\u0438\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435, \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438 \u0441\u0432\u0435\u0442\u043b\u043e\u0439 \u0438\u043b\u0438 \u0442\u0435\u043c\u043d\u043e\u0439 \u0442\u0435\u043c\u0430\u0445",authors:"stavis",tags:["html","img","docusaurus"]},l=void 0,i={permalink:"/blog/2023/07/07/imageswitcher",editUrl:"https://github.com/stavis-dev/stavis-dev.github.io/tree/main/blog/2023-07-07-imageswitcher.md",source:"@site/blog/2023-07-07-imageswitcher.md",title:"\u0410\u0434\u0430\u043f\u0442\u0430\u0446\u0438\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043f\u043e\u0434 \u0446\u0432\u0435\u0442 \u0442\u0435\u043c\u044b \u0441\u0430\u0439\u0442\u0430",description:"\u0410\u0434\u0430\u043f\u0442\u0430\u0446\u0438\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435, \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438 \u0441\u0432\u0435\u0442\u043b\u043e\u0439 \u0438\u043b\u0438 \u0442\u0435\u043c\u043d\u043e\u0439 \u0442\u0435\u043c\u0430\u0445",date:"2023-07-07T00:00:00.000Z",formattedDate:"7 \u0438\u044e\u043b\u044f 2023 \u0433.",tags:[{label:"html",permalink:"/blog/tags/html"},{label:"img",permalink:"/blog/tags/img"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:.77,hasTruncateMarker:!0,authors:[{name:"Stavis Vega",title:"This blog author",url:"https://github.com/stavis-dev",imageURL:"https://github.com/stavis-dev.png",key:"stavis"}],frontMatter:{title:"\u0410\u0434\u0430\u043f\u0442\u0430\u0446\u0438\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043f\u043e\u0434 \u0446\u0432\u0435\u0442 \u0442\u0435\u043c\u044b \u0441\u0430\u0439\u0442\u0430",description:"\u0410\u0434\u0430\u043f\u0442\u0430\u0446\u0438\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435, \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438 \u0441\u0432\u0435\u0442\u043b\u043e\u0439 \u0438\u043b\u0438 \u0442\u0435\u043c\u043d\u043e\u0439 \u0442\u0435\u043c\u0430\u0445",authors:"stavis",tags:["html","img","docusaurus"]},nextItem:{title:"\u0427\u0442\u043e \u0434\u043e\u043b\u0436\u0435\u043d \u0437\u043d\u0430\u0442\u044c Python \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a",permalink:"/blog/2023/07/03/what-to-know-python"}},m={authorsImageUrls:[void 0]},p=[],s={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.stack.imgur.com/3e9D7.gif",alt:null})),(0,a.kt)("p",null,"\u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0442\u043e\u0433\u043e \u043a\u0430\u043a\u0430\u044f \u0442\u0435\u043c\u0430 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0430 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435, \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u0435\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f (\u0441\u043e \u0441\u0432\u0435\u0442\u043b\u044b\u043c \u0444\u043e\u043d\u043e\u043c \u0438 \u0442\u0435\u043c\u043d\u044b\u043c \u0444\u043e\u043d\u043e\u043c)"),(0,a.kt)("p",null,"\u041a\u0430\u043a \u044d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus")," \u044f \u043d\u0435 \u0437\u043d\u0430\u044e. \u041d\u043e \u043d\u0430\u0448\u0435\u043b \u0432\u0430\u0438\u0430\u043d\u0442 \u043a\u0430\u043a \u044d\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u043d\u043e \u0432 \u043f\u0440\u043e\u044d\u043a\u0442\u0435 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.venom.foundation/general/developer-programm"},"venom")),(0,a.kt)("p",null,"\u041d\u0430 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438 \u0442\u0435\u043c\u044b \u0441\u043e \u0441\u0432\u0435\u0442\u043b\u0443\u044e \u043d\u0430 \u0442\u0435\u043c\u043d\u0443\u044e, \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0438 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430."),(0,a.kt)("p",null,"\u0420\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e \u044d\u0442\u043e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/venom-blockchain/venom-blockchain.github.io/blob/main/docs/start/general/developer-programm.md?plain=1"},"github \u043a\u043e\u0434 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b"),"."),(0,a.kt)("p",null,"\u041e\u0441\u0442\u0430\u0432\u043b\u044e \u0441\u0435\u0431\u0435 \u043f\u0430\u043c\u044f\u0442\u043a\u0443, \u043d\u0430 \u0442\u043e\u0442 \u0441\u043b\u0443\u0447\u0430\u0439, \u043a\u043e\u0433\u0434\u0430 \u043c\u043d\u0435 \u044d\u0442\u043e \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f."),(0,a.kt)("p",null,"\u041a\u043e\u0434 \u0438\u043c\u043f\u043e\u0440\u0442\u0430 \u0438 \u0441\u0430\u043c\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u0440\u044f\u043c\u043e \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"markdown")," \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import ImageSwitcher from './../../../src/components/ImageSwitcher';\nimport program_logo_light from './assets/developer-programm/vf-dev-program-black.png';\nimport program_logo_dark from './assets/developer-programm/vf-dev-program-white.png';\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ImageSwitcher\n    lightImageSrc={program_logo_light}\n    darkImageSrc={program_logo_dark}\n    alt="Developer Program Logo"\n    width="400px"\n/>\n')),(0,a.kt)("p",null,"\u0424\u0430\u0439\u043b \u0436\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"ImageSwitcher")," \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="ImageSwitcher.tsx"',title:'"ImageSwitcher.tsx"'},"import React from 'react';\nimport { useColorMode } from '@docusaurus/theme-common';\n\nconst ImageSwitcher = ({ lightImageSrc, darkImageSrc, alt, ...props }) => {\n    const { isDarkTheme } = useColorMode();\n\n    return (\n        <img\n            src={isDarkTheme ? darkImageSrc.src : lightImageSrc.src}\n            alt={alt}\n            {...props}\n        />\n    )\n}\n\nexport default ImageSwitcher;\n")))}u.isMDXComponent=!0}}]);