"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4444],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,y=u["".concat(i,".").concat(d)]||u[d]||c[d]||l;return n?a.createElement(y,s(s({ref:t},p),{},{components:n})):a.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var m=2;m<l;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(4137));const l={draft:!1,author:"Stavis",title:"systemd - \u0434\u0435\u043c\u043e\u043d \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a\u0430",date:"2022-04-15",description:"Systemd \u0434\u0435\u043c\u043e\u043d \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043b\u0435\u0433\u043a\u043e \u043f\u0440\u0438\u0440\u0443\u0447\u0438\u0442\u044c, systemctl \u043a\u0430\u043a \u0441\u043f\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0432 linux",tags:["systemctl","\u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a \u043b\u0438\u043d\u0443\u043a\u0441","autostart"],categories:["devops","linux"],image:"https://timesofcloud.com/wp-content/uploads/2020/07/linux-systemd.jpg"},s=void 0,o={unversionedId:"manuals/systemd",id:"manuals/systemd",title:"systemd - \u0434\u0435\u043c\u043e\u043d \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a\u0430",description:"Systemd \u0434\u0435\u043c\u043e\u043d \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043b\u0435\u0433\u043a\u043e \u043f\u0440\u0438\u0440\u0443\u0447\u0438\u0442\u044c, systemctl \u043a\u0430\u043a \u0441\u043f\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0432 linux",source:"@site/docs/manuals/systemd.md",sourceDirName:"manuals",slug:"/manuals/systemd",permalink:"/manuals/systemd",draft:!1,editUrl:"https://github.com/stavis-dev/stavis-dev.github.io/tree/main/docs/manuals/systemd.md",tags:[{label:"systemctl",permalink:"/tags/systemctl"},{label:"\u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a \u043b\u0438\u043d\u0443\u043a\u0441",permalink:"/tags/\u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a-\u043b\u0438\u043d\u0443\u043a\u0441"},{label:"autostart",permalink:"/tags/autostart"}],version:"current",lastUpdatedBy:"Stavis",lastUpdatedAt:1693683246,formattedLastUpdatedAt:"2 \u0441\u0435\u043d\u0442. 2023 \u0433.",frontMatter:{draft:!1,author:"Stavis",title:"systemd - \u0434\u0435\u043c\u043e\u043d \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a\u0430",date:"2022-04-15",description:"Systemd \u0434\u0435\u043c\u043e\u043d \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043b\u0435\u0433\u043a\u043e \u043f\u0440\u0438\u0440\u0443\u0447\u0438\u0442\u044c, systemctl \u043a\u0430\u043a \u0441\u043f\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0432 linux",tags:["systemctl","\u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a \u043b\u0438\u043d\u0443\u043a\u0441","autostart"],categories:["devops","linux"],image:"https://timesofcloud.com/wp-content/uploads/2020/07/linux-systemd.jpg"},sidebar:"manualsSidebar",previous:{title:"Linux command line",permalink:"/manuals/linux-command-line"},next:{title:"\u0418\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438",permalink:"/manuals/the-art-of-command-line"}},i={},m=[{value:"C\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 systemctl",id:"c\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441-systemctl",level:2},{value:"\u0421\u043f\u0438\u0441\u043e\u043a \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u043a\u043e\u043c\u0430\u043d\u0434 \u0441\u0435\u0440\u0432\u0438\u0441\u0430",id:"\u0441\u043f\u0438\u0441\u043e\u043a-\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445-\u043a\u043e\u043c\u0430\u043d\u0434-\u0441\u0435\u0440\u0432\u0438\u0441\u0430",level:3},{value:"\u0410\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e systemd",id:"\u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-systemd",level:2}],p={toc:m},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u0412\u043c\u0435\u0441\u0442\u0435 \u0441 \u043f\u043e\u0434\u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," \u043f\u043e\u044f\u0432\u0438\u043b\u0430\u0441\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl"),".\n\u041e\u043d\u0430 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430\u043c\u0438 Linux.\n\u041d\u0438\u0436\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0430\u044f \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0432 \u0432\u0438\u0434\u0435 \u0448\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0438 \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0445 \u043a\u043e\u043c\u0430\u043d\u0434."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u0421\u043e\u0431\u0440\u0430\u043d\u043e \u043f\u043e \u043a\u0443\u0441\u043e\u0447\u043a\u0430\u043c \u0438\u0437 \u0440\u0430\u0437\u043d\u044b\u0445 \u0441\u0442\u0430\u0442\u0435\u0439 \u0432 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0435."),(0,r.kt)("p",{parentName:"blockquote"},"\u2014 ",(0,r.kt)("cite",null,"Stavis ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))))),(0,r.kt)("h2",{id:"c\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441-systemctl"},"C\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 systemctl"),(0,r.kt)("p",null,"\u0411\u0435\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432, ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl")," \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0445 \u0441\u043b\u0443\u0436\u0431,\n\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432, \u0442\u043e\u0447\u0435\u043a \u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u044e\u043d\u0438\u0442\u043e\u0432."),(0,r.kt)("h3",{id:"\u0441\u043f\u0438\u0441\u043e\u043a-\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445-\u043a\u043e\u043c\u0430\u043d\u0434-\u0441\u0435\u0440\u0432\u0438\u0441\u0430"},"\u0421\u043f\u0438\u0441\u043e\u043a \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u043a\u043e\u043c\u0430\u043d\u0434 \u0441\u0435\u0440\u0432\u0438\u0441\u0430"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041a\u043e\u043c\u0430\u043d\u0434\u0430"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u0441\u043b\u0443\u0436\u0431\u044b:"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"systemctl status network"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u0435\u0440\u0432\u0438\u0441:"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"systemctl start mysql"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0435\u0440\u0432\u0438\u0441:"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"systemctl stop mysql"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a \u0441\u043b\u0443\u0436\u0431\u044b:"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"systemctl enable mysql"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u041e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a \u0441\u043b\u0443\u0436\u0431\u044b:"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"systemctl disable mysql"))))),(0,r.kt)("h2",{id:"\u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-systemd"},"\u0410\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e systemd"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u0427\u0430\u0441\u0442\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f Unit \u0444\u0430\u0439\u043b\u0430."),(0,r.kt)("p",{parentName:"blockquote"},"\u2014 ",(0,r.kt)("cite",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 ",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))))),(0,r.kt)("p",null,"\u0412 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 \u0438\u043b\u0438 \u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0432."),(0,r.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c 2 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430.  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u0417\u0430\u043f\u0443\u0441\u043a \u043e\u0442 \u0438\u043c\u0435\u043d\u0438 \u0420\u0443\u0442\u0430"),(0,r.kt)("li",{parentName:"ol"},"\u0417\u0430\u043f\u0443\u0441\u043a \u043e\u0442 \u0438\u043c\u0435\u043d\u0438 \u042e\u0437\u0435\u0440\u0430")),(0,r.kt)("p",null,"\u0414\u043b\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"\u043f\u0435\u0440\u0432\u043e\u0433\u043e")," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0434\u043e\u043b\u0436\u0435\u043d\n\u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u0442\u044c\u0441\u044f \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0439 \u043f\u0430\u043f\u043a\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/"),"."),(0,r.kt)("p",null,'\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u044f \u0441\u043e\u0437\u0434\u0430\u044e "\u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a" \u0448\u0435\u043b\u043b \u0441\u043a\u0440\u0438\u043f\u0442\u0430 \u043d\u0430\u0445\u043e\u0434\u044f\u0449\u0435\u0433\u043e\u0441\u044f \u043f\u043e \u043f\u0443\u0442\u0438\n',(0,r.kt)("inlineCode",{parentName:"p"},"/home/username/mysell.sh")),(0,r.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u043c \u0444\u0430\u0439\u043b \u0441\u0435\u0440\u0432\u0438\u0441\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# system path for daemon\nvim /etc/systemd/system/myservice.service\n\n# user path for daemon\nvim ~/.config/systemd/user/myservice.service\n")),(0,r.kt)("p",null,"\u0412 \u0444\u0430\u0439\u043b \u043f\u0440\u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0437\u0430\u043f\u0443\u0441\u043a\u0430"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[Unit]\nDescription=My shell autorun script\nDocumentation=man:tmux(1)\n\n[Service]\n# Type=oneshot\n# RemainAfterExit=yes\nExecStart=/home/username/mysell.sh\nSyslogIdentifier=Myshell\n\n[Install]\nWantedBy=default.target\n# WantedBy=multi-user.target\n")),(0,r.kt)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0432 \u043f\u0430\u043f\u043a\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.config/systemd/user/"),"."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"The above quote is excerpted from Rob Pike's ",(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=PAAkCSZUG1c"},"talk")," during Gopherfest, November 18, 2015.",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"\u041d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u042e\u043d\u0438\u0442 \u0444\u0430\u0439\u043b\u043e\u0432 \u0446\u0435\u043b\u0430 \u0442\u0435\u043c\u0430. \u041f\u043e\u0434\u0440\u043e\u0431\u0435\u0435 \u043f\u0440\u043e \u043d\u0438\u0445 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u043d\u0430\n",(0,r.kt)("a",{parentName:"li",href:"https://linux-notes.org/pishem-systemd-unit-fajl/"},"\u0441\u0430\u0439\u0442\u0435"),".",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);