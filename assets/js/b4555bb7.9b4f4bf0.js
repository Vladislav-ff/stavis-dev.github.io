"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8227],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(l,".").concat(d)]||p[d]||g[d]||o;return r?a.createElement(m,s(s({ref:t},c),{},{components:r})):a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1274:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(4137));const o={sidebar_position:3},s="Create a Blog Post",i={unversionedId:"docusaurus-basics/create-a-blog-post",id:"docusaurus-basics/create-a-blog-post",title:"Create a Blog Post",description:"Docusaurus creates a page for each blog post, but also a blog index page, a tag system, an RSS feed...",source:"@site/docs/docusaurus-basics/create-a-blog-post.md",sourceDirName:"docusaurus-basics",slug:"/docusaurus-basics/create-a-blog-post",permalink:"/docusaurus-basics/create-a-blog-post",draft:!1,editUrl:"https://github.com/stavis-dev/stavis-dev.github.io/tree/main/docs/docusaurus-basics/create-a-blog-post.md",tags:[],version:"current",lastUpdatedBy:"Stavis",lastUpdatedAt:1706815957,formattedLastUpdatedAt:"1 \u0444\u0435\u0432\u0440. 2024 \u0433.",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create a Document",permalink:"/docusaurus-basics/create-a-document"},next:{title:"Markdown Features",permalink:"/docusaurus-basics/markdown-features"}},l={},u=[{value:"Create your first Post",id:"create-your-first-post",level:2},{value:"\u041e\u0431\u0440\u0435\u0437\u043a\u0430 \u0442\u0435\u043a\u0441\u0442\u0430",id:"\u043e\u0431\u0440\u0435\u0437\u043a\u0430-\u0442\u0435\u043a\u0441\u0442\u0430",level:2},{value:"\u0421\u0441\u044b\u043b\u043a\u0438",id:"\u0441\u0441\u044b\u043b\u043a\u0438",level:2}],c={toc:u},p="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-blog-post"},"Create a Blog Post"),(0,n.kt)("p",null,"Docusaurus creates a ",(0,n.kt)("strong",{parentName:"p"},"page for each blog post"),", but also a ",(0,n.kt)("strong",{parentName:"p"},"blog index page"),", a ",(0,n.kt)("strong",{parentName:"p"},"tag system"),", an ",(0,n.kt)("strong",{parentName:"p"},"RSS")," feed..."),(0,n.kt)("h2",{id:"create-your-first-post"},"Create your first Post"),(0,n.kt)("p",null,"Create a file at ",(0,n.kt)("inlineCode",{parentName:"p"},"blog/2021-02-28-greetings.md"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="blog/2021-02-28-greetings.md"',title:'"blog/2021-02-28-greetings.md"'},"---\nslug: greetings\ntitle: Greetings!\nauthors:\n  - name: Joel Marcey\n    title: Co-creator of Docusaurus 1\n    url: https://github.com/JoelMarcey\n    image_url: https://github.com/JoelMarcey.png\n  - name: S\xe9bastien Lorber\n    title: Docusaurus maintainer\n    url: https://sebastienlorber.com\n    image_url: https://github.com/slorber.png\ntags: [greetings]\n---\n\nCongratulations, you have made your first post!\n\nFeel free to play around and edit this post as much you like.\n")),(0,n.kt)("p",null,"A new blog post is now available at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/blog/greetings"},"http://localhost:3000/blog/greetings"),"."),(0,n.kt)("h2",{id:"\u043e\u0431\u0440\u0435\u0437\u043a\u0430-\u0442\u0435\u043a\u0441\u0442\u0430"},"\u041e\u0431\u0440\u0435\u0437\u043a\u0430 \u0442\u0435\u043a\u0441\u0442\u0430"),(0,n.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u043f\u043e\u0441\u0442\u0430\u043c\u0438 \u0431\u043b\u043e\u043a\u0430 \u0432\u0441\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0441\u0432\u043e\u0434\u043a\u0438. \u0414\u043b\u044f \u0431\u043b\u043e\u0433\u0430 \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d \u043c\u0430\u0440\u043a\u0435\u0440 ",(0,n.kt)("inlineCode",{parentName:"p"},"truncate"),',\n\u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 "\u0427\u0438\u0442\u0430\u0442\u044c \u0434\u0430\u043b\u044c\u0448\u0435"'),(0,n.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e \u0432 \u0442\u043e\u043c \u043c\u0435\u0441\u0442\u0435 \u0433\u0434\u0435 \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u0430\u043c\u0435\u0440\u0438, \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043c\u0430\u0440\u043a\u0435\u0440."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},"\x3c!--truncate--\x3e\n")),(0,n.kt)("h2",{id:"\u0441\u0441\u044b\u043b\u043a\u0438"},"\u0421\u0441\u044b\u043b\u043a\u0438"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,n.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog"},"\u0431\u043b\u043e\u0433\u0430")," \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f.")))}g.isMDXComponent=!0}}]);