"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5373],{4137:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>y});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),s=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=s(r),d=a,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(y,i(i({ref:e},c),{},{components:r})):n.createElement(y,i({ref:e},c))}));function y(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p[m]="string"==typeof t?t:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2191:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(7462),a=r(7294),o=r(4137);function i(t,e){return i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}const p=function(t){var e,r;function n(){return t.apply(this,arguments)||this}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,i(e,r);var o=n.prototype;return o.componentDidMount=function(){this._updateIframeContent()},o.componentDidUpdate=function(t,e){this._updateIframeContent()},o._defineUrl=function(){var t=this.props,e=t.id,r=t.file;return"https://gist.github.com/"+e+".js"+(r?"?file="+r:"")},o._updateIframeContent=function(){var t=this.props,e=t.id,r=t.file,n=this.iframeNode,a=n.document;n.contentDocument?a=n.contentDocument:n.contentWindow&&(a=n.contentWindow.document);var o='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(r?"gist-"+e+"-"+r:"gist-"+e)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";a.open(),a.writeln(o),a.close()},o.render=function(){var t=this,e=this.props,r=e.id,n=e.file;return a.createElement("iframe",{ref:function(e){t.iframeNode=e},width:"100%",frameBorder:0,id:n?"gist-"+r+"-"+n:"gist-"+r})},n}(a.PureComponent),l={sidebar_label:"Python",sidebar_position:1,title:"Python \u0448\u043f\u0430\u0433\u0440\u0430\u043b\u043a\u0438 \u0437\u0430\u043f\u0438\u0441\u043a\u0438",author:"stavis",description:"\u0427\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0432 python",tags:["python","programing"]},s=void 0,c={unversionedId:"python/readme",id:"python/readme",title:"Python \u0448\u043f\u0430\u0433\u0440\u0430\u043b\u043a\u0438 \u0437\u0430\u043f\u0438\u0441\u043a\u0438",description:"\u0427\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0432 python",source:"@site/docs/python/readme.md",sourceDirName:"python",slug:"/python/",permalink:"/python/",draft:!1,editUrl:"https://github.com/stavis-dev/stavis-dev.github.io/tree/main/docs/python/readme.md",tags:[{label:"python",permalink:"/tags/python"},{label:"programing",permalink:"/tags/programing"}],version:"current",lastUpdatedBy:"Stavis",lastUpdatedAt:1693331379,formattedLastUpdatedAt:"29 \u0430\u0432\u0433. 2023 \u0433.",sidebarPosition:1,frontMatter:{sidebar_label:"Python",sidebar_position:1,title:"Python \u0448\u043f\u0430\u0433\u0440\u0430\u043b\u043a\u0438 \u0437\u0430\u043f\u0438\u0441\u043a\u0438",author:"stavis",description:"\u0427\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0432 python",tags:["python","programing"]},sidebar:"pythonSidebar",next:{title:"\u0422\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 Python",permalink:"/python/types/tipy-dannykh-v-python"}},m={},u=[{value:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u043f\u043e Python",id:"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f-\u043f\u043e-python",level:2},{value:"Gists",id:"gists",level:2}],d={toc:u},y="wrapper";function h(t){let{components:e,...r}=t;return(0,o.kt)(y,(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f-\u043f\u043e-python"},"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u043f\u043e Python"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"pyneng-book: ",(0,o.kt)("a",{parentName:"p",href:"https://pyneng.readthedocs.io/ru/latest/"},"Python \u0434\u043b\u044f \u0441\u0435\u0442\u0435\u0432\u044b\u0445 \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u043e\u0432")," - \u0432\u0441\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043f\u043e\u0447\u0438\u0442\u0430\u0442\u044c, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/natenka/pyneng-book/tree/master"},"repo")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"\u0412 \u043a\u043d\u0438\u0433\u0435 \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043e\u0441\u043d\u043e\u0432\u044b Python \u0441 \u043f\u0440\u0438\u043c\u0435\u0440\u0430\u043c\u0438 \u0438 \u0437\u0430\u0434\u0430\u043d\u0438\u044f\u043c\u0438 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u043c\u0438 \u043d\u0430 \u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0435."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/pykili/pykili.github.io/tree/master/_docs/prog"},"repo")," - \u0421\u0430\u0439\u0442\u0430 \u043a\u0443\u0440\u0441\u0430 \xab\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u043b\u0438\u043d\u0433\u0432\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435\xbb")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/bitcoineazy/Study/tree/master"},"fa-university ")," - \u0442\u043e\u0436\u0435 \u043f\u0430\u0440\u0443 \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432 \u043f\u043e python"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e \u043f\u043e\u0447\u0438\u0430\u0442\u044c \u043f\u043e ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/bitcoineazy/Study/tree/master/Python_SQLAlchemy"},"Python_SQLAlchemy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bitcoineazy/Study/tree/master/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%D1%8B"},"\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bitcoineazy/Big_Data"},"Big-Data")," - \u0448\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0438 \u043f\u043e \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u0434\u0430\u043d\u043d\u044b\u043c")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.codewars.com/kata/556deca17c58da83c00002db/train/python"},"Stavis-dev Codewars"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://replit.com/@StavisViegha/CodeWars#main.py"},"Replit Codewars"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://colab.research.google.com/drive/1vSmI7E49MBA4kA38B_MT6mgWvBKgEorC"},"\u041a\u043b\u0430\u0441\u0441\u044b \u0432 \u0433\u0443\u0433\u043b \u043a\u043e\u043b\u0430\u0431"),"  ")),(0,o.kt)("h2",{id:"gists"},"Gists"),(0,o.kt)("p",null,"\u0426\u0432\u0435\u0442\u043d\u043e\u0439 \u0432\u044b\u0432\u043e\u0434 ",(0,o.kt)("inlineCode",{parentName:"p"},"print")," \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c"),(0,o.kt)(p,{id:"32f56f0f9cf9a7ba09e9e1964f80e91b",file:"color_print.py",mdxType:"Gist"}))}h.isMDXComponent=!0}}]);