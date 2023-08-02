"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8846],{4137:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=r.createContext({}),o=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=o(t.components);return r.createElement(m.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,m=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),p=o(n),d=a,k=p["".concat(m,".").concat(d)]||p[d]||c[d]||l;return n?r.createElement(k,i(i({ref:e},s),{},{components:n})):r.createElement(k,i({ref:e},s))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var u={};for(var m in e)hasOwnProperty.call(e,m)&&(u[m]=e[m]);u.originalType=t,u[p]="string"==typeof t?t:a,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2176:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var r=n(7462),a=(n(7294),n(4137));const l={author:"Stavis",title:"\u041f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e tmux",description:"\u0428\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430 \u043f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e tmux",tags:["tmux","devops","linux"],image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flightrains.com%2Fassets%2Fimg%2Fblog%2Ftmux-tips.png"},i="\u0428\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430 \u043f\u043e tmux",u={unversionedId:"manuals/tmux",id:"manuals/tmux",title:"\u041f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e tmux",description:"\u0428\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430 \u043f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e tmux",source:"@site/docs/manuals/tmux.md",sourceDirName:"manuals",slug:"/manuals/tmux",permalink:"/manuals/tmux",draft:!1,editUrl:"https://github.com/stavis-dev/stavis-dev.github.io/tree/main/docs/manuals/tmux.md",tags:[{label:"tmux",permalink:"/tags/tmux"},{label:"devops",permalink:"/tags/devops"},{label:"linux",permalink:"/tags/linux"}],version:"current",lastUpdatedBy:"Stavis",lastUpdatedAt:1691010388,formattedLastUpdatedAt:"2 \u0430\u0432\u0433. 2023 \u0433.",frontMatter:{author:"Stavis",title:"\u041f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e tmux",description:"\u0428\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430 \u043f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e tmux",tags:["tmux","devops","linux"],image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flightrains.com%2Fassets%2Fimg%2Fblog%2Ftmux-tips.png"},sidebar:"tutorialSidebar",previous:{title:"\u0418\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438",permalink:"/manuals/the-art-of-command-line"},next:{title:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b vim",permalink:"/manuals/vim/"}},m={},o=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",level:2},{value:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b",id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b",level:2},{value:"\u0420\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u043d\u0435\u043b\u0438",id:"\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435-\u043f\u0430\u043d\u0435\u043b\u0438",level:2},{value:"Environment",id:"environment",level:2},{value:"tmux as systemd",id:"tmux-as-systemd",level:2},{value:"Links",id:"links",level:2}],s={toc:o},p="wrapper";function c(t){let{components:e,...n}=t;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0448\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430-\u043f\u043e-tmux"},"\u0428\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430 \u043f\u043e tmux"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lightrains.com/assets/img/blog/tmux-tips.png",alt:"tmux"})),(0,a.kt)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# mac\nbrew install tmux\n\n#linux\nsudo pacman -S tmux\n")),(0,a.kt)("h2",{id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b"},"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"),(0,a.kt)("p",null,"\u041e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043e\u0442 \u0441\u0435\u0441\u0441\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+b d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u0437\u0430\u043f\u0443\u0441\u043a\ntmux\n\n# \u0437\u0430\u043f\u0443\u0441\u043a \u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435\u043c \u043d\u043e\u0432\u043e\u0439 \u0441\u0435\u0441\u0441\u0438\u0438 'name-session'\ntmux new-session -s name-session\n\n# \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u0441\u0435\u0441\u0441\u0438\u0438 \u0435\u0441\u043b\u0438 \u043e\u043d\u0430 \u043e\u0434\u043d\u0430\ntmux attach\n# \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u0441\u0435\u0441\u0441\u0438\u0438 name-session\ntmux attach -t name-session\n\n# \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0441\u0435\u0441\u0441\u0438 tmux\ntmux ls\n")),(0,a.kt)("h2",{id:"\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435-\u043f\u0430\u043d\u0435\u043b\u0438"},"\u0420\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u043d\u0435\u043b\u0438"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+b ?")," - help \u043f\u043e \u0433\u043e\u0440\u044f\u0447\u0438\u043c \u043a\u043b\u0430\u0432\u0438\u0448\u0430\u043c."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+b d")," - \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043e\u0442 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0441\u0435\u0441\u0441\u0438\u0438"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+b %")," - \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u043f\u0430\u043d\u0435\u043b\u044c \u043f\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u0438;"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'Ctrl+b "')," - \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u043f\u0430\u043d\u0435\u043b\u044c \u043f\u043e \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u0438;"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+b c")," - \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u043e\u043a\u043d\u043e;"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+b w")," - \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043e\u043a\u043d\u043e \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430;"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+b 0-9")," - \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e \u043f\u043e \u0435\u0433\u043e \u043d\u043e\u043c\u0435\u0440\u0443;"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+b ,")," - \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0435\u0435 \u043e\u043a\u043d\u043ei;"),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("p",null,"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u044b \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"tmux"),". \u041e\u0447\u0435\u043d\u044c \u0443\u0434\u043e\u0431\u043d\u0430\u044f \u0448\u0442\u0443\u043a\u0430,\n\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u043e\u0434\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430 \u0432 \u0434\u0440\u0443\u0433\u043e\u0435."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435\ntmux show-environment\n\n# \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e FOO\ntmux setenv FOO foo-one\n\ntmux setenv TV 192.168.1.55:5555\n\n# \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e\nexport FOO='foo-one'\n\nexport TV='192.168.1.55:5555'\n")),(0,a.kt)("p",null,"\u0412 \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0445 \u043e\u043a\u043d\u0430\u0445, \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"FOO"),"\n\u0431\u0443\u0434\u0443\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b."),(0,a.kt)("h2",{id:"tmux-as-systemd"},"tmux as systemd"),(0,a.kt)("p",null,"\u041d\u0438\u043a\u0430\u043a \u043d\u0435 \u043c\u043e\u0433\u0443 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c tmux \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435"),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tmux/tmux/wiki"},"tmux repo wiki")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tmux/tmux"},"tmux repo"))))}c.isMDXComponent=!0}}]);