"use strict";(self.webpackChunkworkcell_doc=self.webpackChunkworkcell_doc||[]).push([[198],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,g=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},l="Deploy your workcell",i={unversionedId:"guides/deploy-your-workcell",id:"guides/deploy-your-workcell",title:"Deploy your workcell",description:"You can deploy your workcell to Hugging Face Spaces in 1-click! You'll be able to access your workcell from anywhere and share it with your team and collaborators.",source:"@site/docs/guides/deploy-your-workcell.md",sourceDirName:"guides",slug:"/guides/deploy-your-workcell",permalink:"/workcell-docs/docs/guides/deploy-your-workcell",draft:!1,editUrl:"https://github.com/weanalyze/workcell-docs/edit/main/docs/guides/deploy-your-workcell.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Workcell integration",permalink:"/workcell-docs/docs/guides/workcell-integration"},next:{title:"Congratulations!",permalink:"/workcell-docs/docs/guides/congratulations"}},c={},p=[{value:"Prepare a Hugging Face account",id:"prepare-a-hugging-face-account",level:2},{value:"Deploy your workcell to Hugging Face",id:"deploy-your-workcell-to-hugging-face",level:2},{value:"Workcell management",id:"workcell-management",level:2},{value:"More details",id:"more-details",level:2}],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-your-workcell"},"Deploy your workcell"),(0,o.kt)("p",null,"You can deploy your workcell to ",(0,o.kt)("a",{parentName:"p",href:"https://huggingface.co/spaces"},"Hugging Face Spaces")," in 1-click! You'll be able to access your workcell from anywhere and share it with your team and collaborators."),(0,o.kt)("h2",{id:"prepare-a-hugging-face-account"},"Prepare a Hugging Face account"),(0,o.kt)("p",null,"First you need a ",(0,o.kt)("a",{parentName:"p",href:"http://huggingface.co/"},"Hugging Face")," account, and prepare your ",(0,o.kt)("inlineCode",{parentName:"p"},"Username")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"User Access Token"),"."),(0,o.kt)("p",null,"Set environment variables like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export HUGGINGFACE_USERNAME={huggingface_username}\nexport HUGGINGFACE_TOKEN={huggingface_token}\n")),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"{huggingface_username}")," with your actual Hugging Face ",(0,o.kt)("inlineCode",{parentName:"p"},"Username"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"{huggingface_token}")," with your actual ",(0,o.kt)("inlineCode",{parentName:"p"},"User Access Token")," (format like ",(0,o.kt)("inlineCode",{parentName:"p"},"hf_xxx"),"). "),(0,o.kt)("p",null,"You can also store these environment variables in a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file in your project folder for convenience."),(0,o.kt)("h2",{id:"deploy-your-workcell-to-hugging-face"},"Deploy your workcell to Hugging Face"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wrap your function with ",(0,o.kt)("inlineCode",{parentName:"p"},"workcell.create_app")," like example above")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your project folder, package your workcell app using the following command:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"workcell pack app:hello_workcell\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"pack")," command will package your function with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," template into ",(0,o.kt)("inlineCode",{parentName:"p"},".workcell")," folder in your project folder.")),(0,o.kt)("p",null,"Once packaged, deploy your workcell app using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"workcell deploy\n")),(0,o.kt)("p",null,"\ud83e\udd17 Voila! The deployment process will start, and within a few minutes, your workcell will be available on Hugging Face Spaces, accessible by a unique URL."),(0,o.kt)("h2",{id:"workcell-management"},"Workcell management"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can monitor the deployment process and the logs in your terminal, and the deployment status will be shown in your Hugging Face Spaces repo.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can deploy multiple workcells, and they will be listed in your ",(0,o.kt)("a",{parentName:"p",href:"https://huggingface.co/spaces"},"Hugging Face Spaces")," account, you can manage them from there.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can also configure various deployment options like environment variables, system requirements, custom domain, etc., by using command line options or a ",(0,o.kt)("inlineCode",{parentName:"p"},"workcell.yaml")," from ",(0,o.kt)("inlineCode",{parentName:"p"},".workcell")," dir in your project folder."))),(0,o.kt)("h2",{id:"more-details"},"More details"),(0,o.kt)("p",null,"You can check ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../documents/workcell-cli"},"workcell-cli docs"))," for more details."))}d.isMDXComponent=!0}}]);