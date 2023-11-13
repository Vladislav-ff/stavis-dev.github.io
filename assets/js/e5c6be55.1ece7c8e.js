"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7296],{4137:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>k});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),m=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},s=function(e){var a=m(e.components);return n.createElement(c.Provider,{value:a},e.children)},o="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),o=m(t),d=r,k=o["".concat(c,".").concat(d)]||o[d]||u[d]||l;return t?n.createElement(k,p(p({ref:a},s),{},{components:t})):n.createElement(k,p({ref:a},s))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=d;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[o]="string"==typeof e?e:r,p[1]=i;for(var m=2;m<l;m++)p[m]=t[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5061:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=t(7462),r=(t(7294),t(4137));const l={title:"pacman - \u0448\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430",author:"Stavis",description:"\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u0441 pacman \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 arch manjaro linux",tags:["pacman","linux"]},p=void 0,i={unversionedId:"manuals/pacman",id:"manuals/pacman",title:"pacman - \u0448\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430",description:"\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u0441 pacman \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 arch manjaro linux",source:"@site/docs/manuals/pacman.md",sourceDirName:"manuals",slug:"/manuals/pacman",permalink:"/manuals/pacman",draft:!1,editUrl:"https://github.com/stavis-dev/stavis-dev.github.io/tree/main/docs/manuals/pacman.md",tags:[{label:"pacman",permalink:"/tags/pacman"},{label:"linux",permalink:"/tags/linux"}],version:"current",lastUpdatedBy:"Stavis",lastUpdatedAt:1699889139,formattedLastUpdatedAt:"13 \u043d\u043e\u044f\u0431. 2023 \u0433.",frontMatter:{title:"pacman - \u0448\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430",author:"Stavis",description:"\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u0441 pacman \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 arch manjaro linux",tags:["pacman","linux"]},sidebar:"manualsSidebar",previous:{title:"Linux command line",permalink:"/manuals/linux-command-line"},next:{title:"systemd - \u0434\u0435\u043c\u043e\u043d \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a\u0430",permalink:"/manuals/systemd"}},c={},m=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u0430\u043a\u0435\u0442\u043e\u0432",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043f\u0430\u043a\u0435\u0442\u043e\u0432",level:2},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u043a\u0435\u0442 \u0445\u0440\u0430\u043d\u044f\u0449\u0438\u0439\u0441\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c-\u043f\u0430\u043a\u0435\u0442-\u0445\u0440\u0430\u043d\u044f\u0449\u0438\u0439\u0441\u044f-\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e",level:3},{value:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u043a\u0435\u0442 \u0438\u0437 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430",id:"\u0441\u043a\u0430\u0447\u0430\u0442\u044c-\u0438-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c-\u043f\u0430\u043a\u0435\u0442-\u0438\u0437-\u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e-\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430",level:3},{value:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439",id:"\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439",level:2},{value:"\u041f\u0430\u043a\u0435\u0442\u044b-\u0441\u0438\u0440\u043e\u0442\u044b",id:"\u043f\u0430\u043a\u0435\u0442\u044b-\u0441\u0438\u0440\u043e\u0442\u044b",level:3},{value:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u043a\u0435\u0442\u043e\u0432",id:"\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435-\u043f\u0430\u043a\u0435\u0442\u043e\u0432",level:2},{value:"\u041f\u043e\u0438\u0441\u043a \u0432 pacman",id:"\u043f\u043e\u0438\u0441\u043a-\u0432-pacman",level:2},{value:"\u041f\u043e\u0438\u0441\u043a \u0432 \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",id:"\u043f\u043e\u0438\u0441\u043a-\u0432-\u0431\u0430\u0437\u0435-\u0434\u0430\u043d\u043d\u044b\u0445",level:3},{value:"\u0418\u0441\u043a\u0430\u0442\u044c \u0441\u0440\u0435\u0434\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432",id:"\u0438\u0441\u043a\u0430\u0442\u044c-\u0441\u0440\u0435\u0434\u0438-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0445-\u043f\u0430\u043a\u0435\u0442\u043e\u0432",level:3},{value:"\u0418\u0441\u043a\u0430\u0442\u044c \u043f\u0430\u043a\u0435\u0442 \u0432 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f\u0445 \u043f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e \u0444\u0430\u0439\u043b\u0430",id:"\u0438\u0441\u043a\u0430\u0442\u044c-\u043f\u0430\u043a\u0435\u0442-\u0432-\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f\u0445-\u043f\u043e-\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e-\u0444\u0430\u0439\u043b\u0430",level:3},{value:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f pacman",id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-pacman",level:2},{value:"\u041a\u043e\u043d\u0444\u0438\u0433 \u0444\u0430\u0439\u043b",id:"\u043a\u043e\u043d\u0444\u0438\u0433-\u0444\u0430\u0439\u043b",level:3},{value:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0435\u0440\u043a\u0430\u043b",id:"\u0441\u043f\u0438\u0441\u043e\u043a-\u0437\u0435\u0440\u043a\u0430\u043b",level:3},{value:"\u0421\u0441\u044b\u043b\u043a\u0438",id:"\u0441\u0441\u044b\u043b\u043a\u0438",level:2}],s={toc:m},o="wrapper";function u(e){let{components:a,...t}=e;return(0,r.kt)(o,(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u0414\u043b\u044f \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0449\u0435\u0433\u043e \u043d\u0430\u0441 \u043f\u0430\u043a\u0435\u0442\u0430 \u0431\u0443\u0434\u0435\u0442 \u043d\u0430\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"package_name")),(0,r.kt)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043f\u0430\u043a\u0435\u0442\u043e\u0432"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u0430\u043a\u0435\u0442\u043e\u0432"),(0,r.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0438\u0437 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S package_name\n")),(0,r.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0441 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435\u043c \u0432 \u0442\u0435\u043e\u0440\u0438\u0438 \u0432\u044b\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0441 ",(0,r.kt)("inlineCode",{parentName:"p"},"--noconfirm"),(0,r.kt)("br",{parentName:"p"}),"\n","\u041d\u043e \u043e\u043d \u043d\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u043a\u0430\u043a ",(0,r.kt)("inlineCode",{parentName:"p"},"yes"),". \u0415\u0441\u043b\u0438 \u043f\u043e \u043a\u0430\u043a\u043e\u0439 \u0442\u043e \u043f\u0440\u0438\u0447\u0438\u043d\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"pacman"),"\u0443 \u043d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u043f\u0430\u043a\u0435\u0442,  \u043e\u043d \u0432\u0441\u0435 \u0440\u0430\u0432\u043d\u043e \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f."),(0,r.kt)("p",null,"\u0422\u0430\u043a \u0447\u0442\u043e \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u043d\u0435\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",(0,r.kt)("inlineCode",{parentName:"p"},"yes")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yes | sudo pacman -S package_name\n")),(0,r.kt)("h3",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c-\u043f\u0430\u043a\u0435\u0442-\u0445\u0440\u0430\u043d\u044f\u0449\u0438\u0439\u0441\u044f-\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u043a\u0435\u0442 \u0445\u0440\u0430\u043d\u044f\u0449\u0438\u0439\u0441\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -U /\u043f\u0443\u0442\u044c/\u043a/\u043f\u0430\u043a\u0435\u0442\u0443/\u0438\u043c\u044f_\u043f\u0430\u043a\u0435\u0442\u0430-\u0432\u0435\u0440\u0441\u0438\u044f.pkg.tar.zst\n")),(0,r.kt)("h3",{id:"\u0441\u043a\u0430\u0447\u0430\u0442\u044c-\u0438-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c-\u043f\u0430\u043a\u0435\u0442-\u0438\u0437-\u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e-\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430"},"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u043a\u0435\u0442 \u0438\u0437 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -U http://www.example.com/repo/example.pkg.tar.zst\n")),(0,r.kt)("h2",{id:"\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439"},"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439"),(0,r.kt)("p",null,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0430\u043a\u0435\u0442 \u0438 \u0442\u0435 \u0435\u0433\u043e ",(0,r.kt)("em",{parentName:"p"},"\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435 \u043d\u0443\u0436\u043d\u044b \u043d\u0438\u043a\u0430\u043a\u0438\u043c \u0434\u0440\u0443\u0433\u0438\u043c \u043f\u0430\u043a\u0435\u0442\u0430\u043c: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Rs package_name\n")),(0,r.kt)("h3",{id:"\u043f\u0430\u043a\u0435\u0442\u044b-\u0441\u0438\u0440\u043e\u0442\u044b"},"\u041f\u0430\u043a\u0435\u0442\u044b-\u0441\u0438\u0440\u043e\u0442\u044b"),(0,r.kt)("p",null,'\u0412\u044b\u0432\u0435\u0441\u0442\u0438 \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u0430\u043a\u0435\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u044e\u0442\u0441\u044f \u043a\u0430\u043a \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 ("\u043f\u0430\u043a\u0435\u0442\u044b-\u0441\u0438\u0440\u043e\u0442\u044b"):'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pacman -Qdt\n")),(0,r.kt)("p",null,'\u0423\u0434\u0430\u043b\u0438\u0442\u044c "\u043f\u0430\u043a\u0435\u0442\u044b-\u0441\u0438\u0440\u043e\u0442\u044b"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Rs $(pacman -Qdtq)\n")),(0,r.kt)("h2",{id:"\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435-\u043f\u0430\u043a\u0435\u0442\u043e\u0432"},"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u043a\u0435\u0442\u043e\u0432"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Syu\n")),(0,r.kt)("h2",{id:"\u043f\u043e\u0438\u0441\u043a-\u0432-pacman"},"\u041f\u043e\u0438\u0441\u043a \u0432 pacman"),(0,r.kt)("h3",{id:"\u043f\u043e\u0438\u0441\u043a-\u0432-\u0431\u0430\u0437\u0435-\u0434\u0430\u043d\u043d\u044b\u0445"},"\u041f\u043e\u0438\u0441\u043a \u0432 \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pacman -Ss package_name\n")),(0,r.kt)("h3",{id:"\u0438\u0441\u043a\u0430\u0442\u044c-\u0441\u0440\u0435\u0434\u0438-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0445-\u043f\u0430\u043a\u0435\u0442\u043e\u0432"},"\u0418\u0441\u043a\u0430\u0442\u044c \u0441\u0440\u0435\u0434\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pacman -Qs package_name\n")),(0,r.kt)("h3",{id:"\u0438\u0441\u043a\u0430\u0442\u044c-\u043f\u0430\u043a\u0435\u0442-\u0432-\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f\u0445-\u043f\u043e-\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e-\u0444\u0430\u0439\u043b\u0430"},"\u0418\u0441\u043a\u0430\u0442\u044c \u043f\u0430\u043a\u0435\u0442 \u0432 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f\u0445 \u043f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e \u0444\u0430\u0439\u043b\u0430"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pacman -F package_name\n")),(0,r.kt)("h2",{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-pacman"},"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f pacman"),(0,r.kt)("h3",{id:"\u043a\u043e\u043d\u0444\u0438\u0433-\u0444\u0430\u0439\u043b"},"\u041a\u043e\u043d\u0444\u0438\u0433 \u0444\u0430\u0439\u043b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"less /etc/pacman.conf\n")),(0,r.kt)("h3",{id:"\u0441\u043f\u0438\u0441\u043e\u043a-\u0437\u0435\u0440\u043a\u0430\u043b"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0435\u0440\u043a\u0430\u043b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"less /etc/pacman.d/mirrorlist\n")),(0,r.kt)("p",null,"\u042f \u0434\u043e\u0431\u0430\u0432\u0438\u043b \u0437\u0435\u0440\u043a\u0430\u043b\u043e \u043e\u0442 Yandex:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-config",metastring:'title="/etc/pacman.d/mirrorlist"',title:'"/etc/pacman.d/mirrorlist"'},"## Russia\nServer = https://mirror.yandex.ru/mirrors/manjaro/stable/$repo/$arch\n")),(0,r.kt)("h2",{id:"\u0441\u0441\u044b\u043b\u043a\u0438"},"\u0421\u0441\u044b\u043b\u043a\u0438"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u043f\u043e ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/title/Pacman_(%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9)"},"pacman")),(0,r.kt)("li",{parentName:"ul"},"\u0434\u043e\u043a \u043f\u043e ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/title/Official_repositories_(%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9)"},"\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438")),(0,r.kt)("li",{parentName:"ul"},"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u043f\u043e ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/title/Mirrors_(%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9)"},"\u0437\u0435\u0440\u043a\u0430\u043b\u0430\u043c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mirror.yandex.ru/"},"\u0437\u0435\u0440\u043a\u0430\u043b\u0430")," \u044f\u043d\u0434\u0435\u043a\u0441"),(0,r.kt)("li",{parentName:"ul"},"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u043f\u043e ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.manjaro.org/index.php/Pamac/ru"},"pamac")," \u043d\u0430 Manjaro")))}u.isMDXComponent=!0}}]);