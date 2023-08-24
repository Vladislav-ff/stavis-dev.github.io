"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6565],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=o(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,s(s({ref:t},u),{},{components:n})):a.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=n(7462),r=(n(7294),n(4137));const l={title:"ssh - \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e \u043a\u043b\u044e\u0447\u0430\u043c.",description:"\u0417\u0430\u043a\u0440\u044b\u0432\u0430\u0435\u043c ssh \u0432\u0445\u043e\u0434 \u043f\u043e \u043f\u0430\u0440\u043e\u043b\u044e, \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e \u043a\u043b\u044e\u0447\u0430\u043c",authors:"stavis",tags:["ssh","DevOps"]},s=void 0,i={permalink:"/blog/2023/08/24/ssh-config",editUrl:"https://github.com/stavis-dev/stavis-dev.github.io/tree/main/blog/2023-08-24-ssh-config.md",source:"@site/blog/2023-08-24-ssh-config.md",title:"ssh - \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e \u043a\u043b\u044e\u0447\u0430\u043c.",description:"\u0417\u0430\u043a\u0440\u044b\u0432\u0430\u0435\u043c ssh \u0432\u0445\u043e\u0434 \u043f\u043e \u043f\u0430\u0440\u043e\u043b\u044e, \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e \u043a\u043b\u044e\u0447\u0430\u043c",date:"2023-08-24T00:00:00.000Z",formattedDate:"24 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2023 \u0433.",tags:[{label:"ssh",permalink:"/blog/tags/ssh"},{label:"DevOps",permalink:"/blog/tags/dev-ops"}],readingTime:1.155,hasTruncateMarker:!0,authors:[{name:"Stavis Vega",title:"This blog author",url:"https://github.com/stavis-dev",imageURL:"https://github.com/stavis-dev.png",key:"stavis"}],frontMatter:{title:"ssh - \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e \u043a\u043b\u044e\u0447\u0430\u043c.",description:"\u0417\u0430\u043a\u0440\u044b\u0432\u0430\u0435\u043c ssh \u0432\u0445\u043e\u0434 \u043f\u043e \u043f\u0430\u0440\u043e\u043b\u044e, \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e \u043a\u043b\u044e\u0447\u0430\u043c",authors:"stavis",tags:["ssh","DevOps"]},prevItem:{title:"Mac - \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u044b.",permalink:"/blog/2023/08/24/my-mac"},nextItem:{title:"DevOps \u0438\u0433\u0440\u0430 Bandit",permalink:"/blog/2023/08/23/linux-game"}},p={authorsImageUrls:[void 0]},o=[{value:"\u0424\u0430\u0439\u043b \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a",id:"\u0444\u0430\u0439\u043b-\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a",level:2},{value:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043f\u043e \u043f\u0430\u0440\u043e\u043b\u044e \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435",id:"\u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438-\u043f\u043e-\u043f\u0430\u0440\u043e\u043b\u044e-\u043d\u0430-\u0441\u0435\u0440\u0432\u0435\u0440\u0435",level:2},{value:"\u041c\u0435\u043d\u044f\u0435\u043c \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u043f\u043e\u0440\u0442",id:"\u043c\u0435\u043d\u044f\u0435\u043c-\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439-\u043f\u043e\u0440\u0442",level:2},{value:"\u041a\u043e\u043f\u0438\u0440\u0443\u0435\u043c \u043d\u0430\u0448\u0438 \u043a\u043b\u044e\u0447\u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440",id:"\u043a\u043e\u043f\u0438\u0440\u0443\u0435\u043c-\u043d\u0430\u0448\u0438-\u043a\u043b\u044e\u0447\u0438-\u043d\u0430-\u0441\u0435\u0440\u0432\u0435\u0440",level:2},{value:"\u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430",id:"\u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a-\u0441\u0435\u0440\u0432\u0438\u0441\u0430",level:2}],u={toc:o},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u0414\u0443\u043c\u0430\u044e \u044d\u0442\u043e \u0434\u0430\u0432\u043d\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430 \u0434\u043b\u044f \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ssh \u0434\u0435\u043c\u043e\u043d\u0430.\n\u041d\u043e \u043d\u0435 \u0441\u043c\u043e\u0442\u0440\u044f \u043d\u0430 \u043f\u0430\u043c\u044f\u0442\u044c - \u043a\u043e\u043f\u0438\u043f\u0430\u0441\u0442\u0438\u043d\u0433 \u0432\u0441\u0435 \u0440\u0430\u0432\u043d\u043e \u0431\u044b\u0441\u0442\u0440\u0435\u0439."),(0,r.kt)("h2",{id:"\u0444\u0430\u0439\u043b-\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"},"\u0424\u0430\u0439\u043b \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vim /etc/ssh/sshd_config\n")),(0,r.kt)("p",null,"\u041f\u043e\u0438\u0441\u043a\u043e\u043c \u0432 vim - \u043a\u043e\u043c\u0431\u0438\u0440\u0430\u0446\u0438\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"/\u043f\u043e\u0438\u0441\u043a\u043e\u0432\u0430\u044f_\u0444\u0440\u0430\u0437\u0430"),"\n\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043d\u0430\u0439\u0434\u0435\u043d\u0443\u044e \u043a\u043e\u043c\u0431\u0438\u0440\u0430\u0446\u044e\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),", \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0443\u044e ",(0,r.kt)("inlineCode",{parentName:"p"},"N")),(0,r.kt)("h2",{id:"\u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438-\u043f\u043e-\u043f\u0430\u0440\u043e\u043b\u044e-\u043d\u0430-\u0441\u0435\u0440\u0432\u0435\u0440\u0435"},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043f\u043e \u043f\u0430\u0440\u043e\u043b\u044e \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435"),(0,r.kt)("p",null,"\u041d\u0443\u0436\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfg"},"PasswordAuthentication no\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041d\u0430\u0445\u043e\u0434\u0438\u043c \u0441\u0442\u0440\u043e\u0447\u043a\u0443 ",(0,r.kt)("inlineCode",{parentName:"li"},"PasswordAuthentication")),(0,r.kt)("li",{parentName:"ul"},"\u041f\u0440\u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u043c ",(0,r.kt)("inlineCode",{parentName:"li"},"no"))),(0,r.kt)("h2",{id:"\u043c\u0435\u043d\u044f\u0435\u043c-\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439-\u043f\u043e\u0440\u0442"},"\u041c\u0435\u043d\u044f\u0435\u043c \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u043f\u043e\u0440\u0442"),(0,r.kt)("p",null,"\u041d\u0435 \u0434\u0443\u043c\u0430\u044e, \u0447\u0442\u043e \u044d\u0442\u043e \u043a\u0430\u043a \u0442\u043e \u0441\u043f\u0430\u0441\u0430\u0435\u0442 \u043e\u0442 \u0441\u043d\u0438\u0444\u0444\u0435\u0440\u043e\u0432, \u043d\u043e \u0447\u0430\u0441\u0442\u043e \u0442\u0440\u0435\u0431\u0443\u044e\u0442. \u0422\u0430\u043a \u0447\u0442\u043e.\n\u041d\u0443\u0436\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfg"},"Port 22\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041d\u0430\u0445\u043e\u0434\u0438\u043c \u0441\u0442\u0440\u043e\u0447\u043a\u0443 ",(0,r.kt)("inlineCode",{parentName:"li"},"Port")),(0,r.kt)("li",{parentName:"ul"},"\u041f\u0440\u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u043c \u043f\u043e\u0442\u0440 \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0445\u043e\u0442\u0438\u043c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,r.kt)("inlineCode",{parentName:"li"},"1234")),(0,r.kt)("li",{parentName:"ul"},"\u0442\u0435\u043f\u0435\u0440\u044c \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043f\u043e ",(0,r.kt)("inlineCode",{parentName:"li"},"ssh")," \u0432 \u0441\u0442\u0440\u043e\u043a\u0443 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0441\u0434\u0435\u043b\u0443\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043b\u044e\u0447 ",(0,r.kt)("inlineCode",{parentName:"li"},"-p 1234"),".")),(0,r.kt)("h2",{id:"\u043a\u043e\u043f\u0438\u0440\u0443\u0435\u043c-\u043d\u0430\u0448\u0438-\u043a\u043b\u044e\u0447\u0438-\u043d\u0430-\u0441\u0435\u0440\u0432\u0435\u0440"},"\u041a\u043e\u043f\u0438\u0440\u0443\u0435\u043c \u043d\u0430\u0448\u0438 \u043a\u043b\u044e\u0447\u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-copy-id username@remote_host\n")),(0,r.kt)("p",null,"\u0425\u0430\u0440\u0434\u043a\u043e\u0440 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0435\u0441\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh-copy-id")," \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u043d\u0435\u0442."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cat ~/.ssh/id_rsa.pub | ssh username@remote_host "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"\n')),(0,r.kt)("p",null,"\u041d\u0443 \u0438\u043b\u0438 \u0441\u043e\u0432\u0441\u0435\u043c \u0442\u0440\u0435\u0448"),(0,r.kt)("p",null,"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0443 \u0441\u0435\u0431\u044f \u043d\u0430 \u0445\u043e\u0441\u0442\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u0439 \u043a\u043b\u044e\u0447:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat ~/.ssh/id_rsa.pub\n")),(0,r.kt)("p",null,"\u041d\u0430 OS X, \u041c\u0430\u043a \u043e\u0441\u044f\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"pbcopy"),"; ",(0,r.kt)("inlineCode",{parentName:"p"},"pbpaste")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pbcopy < .ssh/id_rsa.pub\n")),(0,r.kt)("p",null,"\u041d\u0443 \u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0448\u044c \u043f\u0440\u044f\u043c\u043e \u0432 \u0444\u0430\u0439\u043b ",(0,r.kt)("inlineCode",{parentName:"p"},"authorized_keys"),"."),(0,r.kt)("p",null,"\u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e, \u0435\u0441\u0434\u0438 \u0435\u0435 \u0435\u0449\u0435 \u043d\u0435\u0442:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/.ssh\n")),(0,r.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043d\u0430\u0448 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u0439 \u043a\u043b\u044e\u0447 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0445:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo public_key_string >> ~/.ssh/authorized_keys\n")),(0,r.kt)("h2",{id:"\u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a-\u0441\u0435\u0440\u0432\u0438\u0441\u0430"},"\u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430"),(0,r.kt)("p",null,"\u041d\u0430 ",(0,r.kt)("strong",{parentName:"p"},"Ubuntu / Debian"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo service ssh restart\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CentOS/Fedora/Manjaro")," \u044d\u0442\u043e\u0442 \u0434\u0435\u043c\u043e\u043d \u043d\u043e\u0441\u0438\u0442 \u0438\u043c\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"sshd"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo service sshd restart\n")))}m.isMDXComponent=!0}}]);