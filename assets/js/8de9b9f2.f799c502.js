"use strict";(self.webpackChunkworkcell_doc=self.webpackChunkworkcell_doc||[]).push([[569],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),g=o,k=u["".concat(i,".").concat(g)]||u[g]||d[g]||a;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9418:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:3},l="Workcell integration",c={unversionedId:"guides/workcell-integration",id:"guides/workcell-integration",title:"Workcell integration",description:"Use workcell as a python package",source:"@site/docs/guides/workcell-integration.md",sourceDirName:"guides",slug:"/guides/workcell-integration",permalink:"/workcell-docs/docs/guides/workcell-integration",draft:!1,editUrl:"https://github.com/weanalyze/workcell-docs/edit/main/docs/guides/workcell-integration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create a workcell",permalink:"/workcell-docs/docs/guides/create-a-workcell"},next:{title:"Deploy your workcell",permalink:"/workcell-docs/docs/guides/deploy-your-workcell"}},i={},p=[{value:"Use workcell as a python package",id:"use-workcell-as-a-python-package",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"workcell-integration"},"Workcell integration"),(0,o.kt)("h2",{id:"use-workcell-as-a-python-package"},"Use workcell as a python package"),(0,o.kt)("p",null,"Alternatively, you can import the workcell in your python project, and serve your function using an ASGI web server such as ",(0,o.kt)("a",{parentName:"p",href:"https://www.uvicorn.org/"},"Uvicorn")," or ",(0,o.kt)("a",{parentName:"p",href:"https://fastapi.tiangolo.com/"},"FastAPI"),". "),(0,o.kt)("p",null,"Simply wrap your function with ",(0,o.kt)("inlineCode",{parentName:"p"},"workcell.create_app")," like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pydantic import BaseModel\nimport workcell\n\nclass Input(BaseModel):\n    message: str\n\nclass Output(BaseModel):\n    message: str\n\ndef hello_workcell(input: Input) -> Output:\n    """Returns the `message` of the input data."""\n    return Output(message=input.message)\n\napp = workcell.create_app(hello_workcell)\n')),(0,o.kt)("p",null,"Then you can run the app using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"uvicorn app:app --host 0.0.0.0 --port 7860\n")))}d.isMDXComponent=!0}}]);