"use strict";(self.webpackChunkworkcell_doc=self.webpackChunkworkcell_doc||[]).push([[4147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},l="Workcell UI showcase",a={unversionedId:"tutorials/workcell-ui-showcase",id:"tutorials/workcell-ui-showcase",title:"Workcell UI showcase",description:"Automatically generate Input/Output UI by type hints.",source:"@site/docs/tutorials/workcell-ui-showcase.md",sourceDirName:"tutorials",slug:"/tutorials/workcell-ui-showcase",permalink:"/workcell-docs/docs/tutorials/workcell-ui-showcase",draft:!1,editUrl:"https://github.com/weanalyze/workcell-docs/edit/main/docs/tutorials/workcell-ui-showcase.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/workcell-docs/docs/category/tutorials"},next:{title:"Model serving",permalink:"/workcell-docs/docs/tutorials/model-serving"}},s={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"workcell-ui-showcase"},"Workcell UI showcase"),(0,o.kt)("p",null,"Automatically generate Input/Output UI by ",(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/typing.html"},"type hints"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import datetime\nfrom enum import Enum\nfrom typing import Dict, List, Optional, Set\nfrom pydantic import BaseModel, Field, SecretStr\nfrom workcell.integrations.types import FileContent\n\n\nclass SelectionValue(str, Enum):\n    FOO = "foo"\n    BAR = "bar"\n\n\nclass OtherData(BaseModel):\n    text: str\n    integer: int\n\n\nclass ShowcaseModel(BaseModel):\n    short_text: str = Field(..., max_length=60, description="Short text property")\n    password: SecretStr = Field(..., description="Password text property")\n    long_text: str = Field(..., description="Unlimited text property")\n    integer_in_range: int = Field(\n        20,\n        ge=10,\n        lt=30,\n        multiple_of=2,\n        description="Number property with a limited range. Optional because of default value.",\n    )\n    positive_integer: int = Field(\n        ..., ge=0, multiple_of=10, description="Positive integer with step count of 10."\n    )\n    float_number: float = Field(0.001)\n    date: Optional[datetime.date] = Field(\n        datetime.date.today(),\n        description="Date property. Optional because of default value.",\n    )\n    time: Optional[datetime.time] = Field(\n        datetime.datetime.now().time(),\n        description="Time property. Optional because of default value.",\n    )\n    string_list: List[str] = Field(\n        ..., max_items=20, description="List of string values"\n    )\n    int_list: List[int] = Field(..., description="List of int values")\n    boolean: bool = Field(\n        False,\n        description="Boolean property. Optional because of default value.",\n    )\n    file_list: Optional[List[FileContent]] = Field(\n        None,\n        description="A list of files. Optional property.",\n    )\n    single_file: Optional[FileContent] = Field(\n        None,\n        description="A single file. Optional property.",\n    )\n    string_dict: Dict[str, str] = Field(\n        ..., description="Dict property with string values"\n    )\n    float_dict: Dict[str, float] = Field(\n        ..., description="Dict property with float values"\n    )\n    single_selection: SelectionValue = Field(\n        ..., description="Only select a single item from a set."\n    )\n    multi_selection: Set[SelectionValue] = Field(\n        ..., description="Allows multiple items from a set."\n    )\n    single_object: OtherData = Field(\n        ...,\n        description="Another object embedded into this model.",\n    )\n    object_list: List[OtherData] = Field(\n        ...,\n        description="A list of objects embedded into this model.",\n    )\n\n\ndef showcase_components(input: ShowcaseModel) -> ShowcaseModel:\n    """Showcase of a variety of differnt property types and how they are shown in the UI.\n    This function only returns the input data.\n    """\n    return input\n')))}u.isMDXComponent=!0}}]);