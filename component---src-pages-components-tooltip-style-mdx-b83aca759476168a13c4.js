"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[22016],{28399:function(t,e,a){a.d(e,{Z:function(){return h}});var n=a(67294),l=a(88650),r=a.n(l),i=a(1597),o=a(64905),p=a(81151),d=a(75900),m=a.n(d);var s=t=>{let{title:e,theme:a,tabs:l=[]}=t;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},e)))))};var g=t=>{let{relativePagePath:e,repository:a}=t;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:o,branch:p}=a||l,d=`${r}/edit/${p}${o}/src/pages${e}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},c=a(56328),k=a(51721);let u=function(t){function e(){return t.apply(this,arguments)||this}return(0,k.Z)(e,t),e.prototype.render=function(){const{title:t,tabs:e,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],o=e.map((t=>{const e=r()(t,{lower:!0,strict:!0}),o=e===l,p=new RegExp(`${l}/?(#.*)?$`),d=a.replace(p,e);return n.createElement("li",{key:t,className:m()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${d}`},t))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},e}(n.Component);var b=u,N=a(17680),A=a(75387),y=a(50041);var f=t=>{let{date:e}=t;const a=new Date(e);return e?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var h=t=>{let{pageContext:e,children:a,location:l,Title:d}=t;const{frontmatter:m={},relativePagePath:k,titleType:u}=e,{tabs:y,title:h,theme:v,description:x,keywords:C,date:w}=m,{interiorTheme:E}=(0,A.Z)(),{site:{pathPrefix:S}}=(0,i.useStaticQuery)("2456312558"),P=S?l.pathname.replace(S,""):l.pathname,z=y?P.split("/").filter(Boolean).slice(-1)[0]||r()(y[0],{lower:!0}):"",I=v||E;return n.createElement(p.Z,{tabs:y,homepage:!1,theme:I,pageTitle:h,pageDescription:x,pageKeywords:C,titleType:u},n.createElement(s,{title:d?n.createElement(d,null):h,label:"label",tabs:y,theme:I}),y&&n.createElement(b,{title:h,slug:P,tabs:y,currentTab:z}),n.createElement(N.Z,{padded:!0},a,n.createElement(g,{relativePagePath:k}),n.createElement(f,{date:w})),n.createElement(c.Z,{pageContext:e,location:l,slug:P,tabs:y,currentTab:z}),n.createElement(o.Z,null))}},81887:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return o},default:function(){return k}});var n=a(45987),l=(a(67294),a(64983)),r=a(28399);const i=["components"],o={},p=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)},d=p("Row"),m=p("Column"),s=p("Caption"),g={_frontmatter:o},c=r.Z;function k(t){let{components:e}=t,a=(0,n.Z)(t,i);return(0,l.kt)(c,Object.assign({},g,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Color"),(0,l.kt)("h3",null,"Standard tooltip"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-secondary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Trigger button"),(0,l.kt)("td",{parentName:"tr",align:null},"svg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-secondary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Container"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$background-inverse"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:null},"color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-inverse"))))),(0,l.kt)("h4",null,"Interactive states"),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"State"),(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hover"),(0,l.kt)("td",{parentName:"tr",align:null},"trigger"),(0,l.kt)("td",{parentName:"tr",align:null},"svg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Active"),(0,l.kt)("td",{parentName:"tr",align:null},"trigger"),(0,l.kt)("td",{parentName:"tr",align:null},"svg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Focus"),(0,l.kt)("td",{parentName:"tr",align:null},"trigger"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus"))))),(0,l.kt)(d,{mdxType:"Row"},(0,l.kt)(m,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAAA+ElEQVQoz62RsWqEMBjH73XcHFwuuU3zDq4+hyDoYBx0Km7OPoCjD1DoVIq0WYLegSCYTYJDjUmH444iVpD6mwLJL/+P/3dS/+B0vCyE4JyP48g5n6ZpnyylnB9IKXfLv89PlrJc46+oxbP1ZMYYpbRpGkJIXdd933ddNwzD1tj3TCGE4zgQQoSQZVmmaSKEDMMIguB+uyVLKbMs830fYxyGIcY4iiLP84qiUErN83zQnrcL+xZqEjsLa9u2qipCvl7f3j+qz9vtSilljC22uF6Ybdu6rkMILxCA8xkAoGma67pbhT2/yPM8SZKXB2maxnFcluWRhf0AIHVC0ksDFvIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Closed and open states for a standard tooltip",title:"Closed and open states for a standard tooltip",src:"/static/eb1993199ac51c603b4b83e45fccb51a/3cbba/tooltip-style-1.png",srcSet:["/static/eb1993199ac51c603b4b83e45fccb51a/7fc1e/tooltip-style-1.png 288w","/static/eb1993199ac51c603b4b83e45fccb51a/a5df1/tooltip-style-1.png 576w","/static/eb1993199ac51c603b4b83e45fccb51a/3cbba/tooltip-style-1.png 1152w","/static/eb1993199ac51c603b4b83e45fccb51a/92c65/tooltip-style-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)(s,{mdxType:"Caption"},"Example of closed (top), hover (middle), and focus (bottom) states for a standard tooltip"),(0,l.kt)("h3",null,"Icon button tooltip"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Container"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$background-inverse"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:null},"color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-inverse"))))),(0,l.kt)("h4",null,"Interactive states"),(0,l.kt)("p",null,"Icon button tooltip states rely on what kind of button is being used. Refer to\nbutton styles for specific hover and focus states."),(0,l.kt)(d,{mdxType:"Row"},(0,l.kt)(m,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAAAv0lEQVQoz2P4TwFgwCP39x8Ikaz5z18QmT7739IjCC6xmv+BLbz/6v+bTwguac4m7Od/OMDfv3/RGJiAAVdQ/f//f/mxv/uv/oNziXX2z5+/Hj+4ld93om3eyWeP7/3FoZsBI6hA6j5//jx79pz5syfPmNq/aNHi////kRxg/8gOMLATQIjkAINE7M7L/y8/IT2ef/3+8+Ht84aF9xdsvfv5/ct/RCZPSIB9+vSpr6+/r7ulpal27tx5cHFqpjAAzk5sxEdF68sAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Closed and open states for an icon button tooltip",title:"Closed and open states for an icon button tooltip",src:"/static/5609cc7ebd7673529a65b6ecd5516a3b/3cbba/tooltip-style-2.png",srcSet:["/static/5609cc7ebd7673529a65b6ecd5516a3b/7fc1e/tooltip-style-2.png 288w","/static/5609cc7ebd7673529a65b6ecd5516a3b/a5df1/tooltip-style-2.png 576w","/static/5609cc7ebd7673529a65b6ecd5516a3b/3cbba/tooltip-style-2.png 1152w","/static/5609cc7ebd7673529a65b6ecd5516a3b/92c65/tooltip-style-2.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)(s,{mdxType:"Caption"},"Example of closed (top), hover (middle), and focus (bottom) states for an icon button tooltip"),(0,l.kt)("h3",null,"Definition tooltip"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-secondary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Trigger"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-strong"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Container"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$background-inverse"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:null},"color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-inverse"))))),(0,l.kt)("h4",null,"Interactive states"),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"State"),(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hover"),(0,l.kt)("td",{parentName:"tr",align:null},"trigger"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-interactive"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Active"),(0,l.kt)("td",{parentName:"tr",align:null},"trigger"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-interactive"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Focus"),(0,l.kt)("td",{parentName:"tr",align:null},"label and border"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus"))))),(0,l.kt)(d,{mdxType:"Row"},(0,l.kt)(m,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAABVElEQVQ4y7WSzWrCQBDHfQ6fxFIR6sWzCMX20iaR4qHgR2/1EbyJFu95AJ/Dk3ipryC2FdLMzm6S2V3JR+NHUApN/wzLsrO/+c8OW9DnpSJduFD4d1hFkWwOyuXh7HkeInLOEVEIkRj+wEQEyLnwGXIXWFowgYUQAMAYAwBEPHEmki5whsIF/PzansI5DCztNgurfeQ1MHVeMtKFC3+Df9929gUJTCSlpNiKIqWwUoqIlKSomTCVViykVYUXIPe48LPOPumNQ5ut9/EtA3ns7DjO62DQ6fZ7vZdOt29Z1nA41FoHQaC1Xq3eDdN6aj+brbbZajfv7pfLpdZaShnC6/W6VqtVqzdXpVK5fF0sFhuNRmjoh10sFot6vW6ZhvH40GzeViqV+Xy+hxljtm1Pp9PxeDyZvI1Go9lsFqfjFQDcKBhjnPP4PKfvSRkdTlseK5/vuQOKL3H0oDvw+AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"States for definition tooltip",title:"States for definition tooltip",src:"/static/b5df62ce17e663c285f6d00cd31ce3c6/3cbba/tooltip-style-3.png",srcSet:["/static/b5df62ce17e663c285f6d00cd31ce3c6/7fc1e/tooltip-style-3.png 288w","/static/b5df62ce17e663c285f6d00cd31ce3c6/a5df1/tooltip-style-3.png 576w","/static/b5df62ce17e663c285f6d00cd31ce3c6/3cbba/tooltip-style-3.png 1152w","/static/b5df62ce17e663c285f6d00cd31ce3c6/92c65/tooltip-style-3.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)(s,{mdxType:"Caption"},"Example of closed (top-left), hover (top-right), active (bottom-left) and focus (bottom-right) states for definition button tooltip"),(0,l.kt)("h2",null,"Typography"),(0,l.kt)("p",null,"Tooltip labels and text should be set in sentence case."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-size (px/rem)"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-weight"),(0,l.kt)("th",{parentName:"tr",align:null},"Type token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Body text"),(0,l.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$body-01"))))),(0,l.kt)("h2",null,"Structure"),(0,l.kt)("p",null,"All tooltip types have a varying height based on the amount of content they\ncontain."),(0,l.kt)("h3",null,"Standard tooltip"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Container"),(0,l.kt)("td",{parentName:"tr",align:null},"max-width"),(0,l.kt)("td",{parentName:"tr",align:null},"288 / 18"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"margin-top"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Trigger icon"),(0,l.kt)("td",{parentName:"tr",align:null},"height, width"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"margin-left"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAAA30lEQVQoz2P4TwFgwBT69///v3///sHZSFzCmhGm/Pjz7+cfEmz++/ffjY8fzzx/furpk70X7xy9evfC46dnnjy99vHD51+/0FyA0Pzn568/r97/+PW3csHCgLi40JTUkNTksIy06Jxst9CQrClTvv0HewCr5r/ff/1+8vr7jz/5U6c6uru5+fm5+vpYOzvZuroamZsnd3b+xqMZAn7/+bv39p3VJ0+tPXF6zbGTKw8fW3Xk2PKjx/bcvvOHhAD79///738g9JeUqPr7/9/ff//+wuPp/38QF1tkMVCSSABk0C2P0FyJWAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for a standard tooltip",title:"Structure and spacing measurements for a standard tooltip",src:"/static/a937954d151558bae1c26b3ddb577498/3cbba/tooltip-style-4.png",srcSet:["/static/a937954d151558bae1c26b3ddb577498/7fc1e/tooltip-style-4.png 288w","/static/a937954d151558bae1c26b3ddb577498/a5df1/tooltip-style-4.png 576w","/static/a937954d151558bae1c26b3ddb577498/3cbba/tooltip-style-4.png 1152w","/static/a937954d151558bae1c26b3ddb577498/392b1/tooltip-style-4.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(s,{mdxType:"Caption"},"Structure and spacing measurements for a standard tooltip | px / rem"),(0,l.kt)("h3",null,"Icon button tooltip"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Class"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Container"),(0,l.kt)("td",{parentName:"tr",align:null},"max-width"),(0,l.kt)("td",{parentName:"tr",align:null},"208 / 13"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left, padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding-top, padding-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"2 / 0.125"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Caret"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-top"),(0,l.kt)("td",{parentName:"tr",align:null},"4 / 0.25"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-02"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAAAVElEQVQoz2P4TwFgGE6af/79++Dt2+vXb754//7bnz+//vwhRfO//xsPHJo5dcbyzVvf/vz19+9fUpz999//H7////zz//vv/zh04vPzPxgalKENAFVkUXBB01bGAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for an icon button tooltip",title:"Structure and spacing measurements for an icon button tooltip",src:"/static/055d8c160420eeb129c609070b270b25/3cbba/tooltip-style-5.png",srcSet:["/static/055d8c160420eeb129c609070b270b25/7fc1e/tooltip-style-5.png 288w","/static/055d8c160420eeb129c609070b270b25/a5df1/tooltip-style-5.png 576w","/static/055d8c160420eeb129c609070b270b25/3cbba/tooltip-style-5.png 1152w","/static/055d8c160420eeb129c609070b270b25/392b1/tooltip-style-5.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(s,{mdxType:"Caption"},"Structure and spacing measurements for an icon button tooltip | px / rem"),(0,l.kt)("h3",null,"Definition tooltip"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Container"),(0,l.kt)("td",{parentName:"tr",align:null},"max-width"),(0,l.kt)("td",{parentName:"tr",align:null},"176 / 11"),(0,l.kt)("td",{parentName:"tr",align:null},"—")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding-top, padding-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / .5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-04"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left, padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / .5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-04"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"margin-top"),(0,l.kt)("td",{parentName:"tr",align:null},"4 / 0.25"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-02"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Trigger"),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"1 px"),(0,l.kt)("td",{parentName:"tr",align:null},"—")))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAAAkElEQVQoz2P4TwFgwCP3D4NBgmYybf7x8/f7rz/ff//57defL3//fvj549+/f4Q1/3r3+f+Hb6fuPUxvai6oq8+vrUtvbj7y6NH/////YujH0Pzh6/+PPw7fvhtZUBASE+MbFuYUGbnr9m2Qc37/JtLZv958/PLy2euXL96+/vj584+f33//+vnnD+0DjB6aAe60Q5WBqFJVAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for definition tooltip",title:"Structure and spacing measurements for definition tooltip",src:"/static/373deb6df712460d24a7065b02a6e868/3cbba/tooltip-style-6.png",srcSet:["/static/373deb6df712460d24a7065b02a6e868/7fc1e/tooltip-style-6.png 288w","/static/373deb6df712460d24a7065b02a6e868/a5df1/tooltip-style-6.png 576w","/static/373deb6df712460d24a7065b02a6e868/3cbba/tooltip-style-6.png 1152w","/static/373deb6df712460d24a7065b02a6e868/392b1/tooltip-style-6.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(s,{mdxType:"Caption"},"Structure and spacing measurements for definition tooltip | px / rem"),(0,l.kt)("h3",null,"Placement"),(0,l.kt)("p",null,"Tooltip directions by default are set to auto. Upon opening, tooltips can detect\nthe edges of the browser to properly be placed in view so the container does not\nget cutoff. Tooltips can instead use specific directions and may be\npositioned ",(0,l.kt)("strong",{parentName:"p"},"top"),", ",(0,l.kt)("strong",{parentName:"p"},"right"),", ",(0,l.kt)("strong",{parentName:"p"},"bottom"),", or ",(0,l.kt)("strong",{parentName:"p"},"left")," to the trigger item.\nTooltips should be placed at least 16px / 1rem off of the bottom of the page and\nnot bleed off page or behind other content. On mobile, tooltips can only appear\nbelow the tooltip icon."),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAABZElEQVQ4y82US2vCQBSF/V9VGt1IIA/FxJjQRRfi/3FV0JVNNhYtpV26a7H72tLa+KAttkFNghh1TDKPorQiXZhAETwcZjUfc7ln7o2QfyhySDAAYDgcGoYxGAxGo9FkMrFt23XdABhCSAg5V1VZlvP5/OlahUJBkqRGo0EIQQgFwMViMUFRaZ7nGIZnWZ7jjmOxy3p9c2EXfFYq0SwrKko6mxVyOUGWjyjq6uY6AMYYE0I6htFotW5fnpu63tT1+45+99p+syzHXc49d5/dxhhDhCCE/pb/tGo/Ly8WC9M0rS2ZpgkACJWzpmk0TYtrCYIgSVIymazVaqGiKpXL8Xg8lUqxLMvxK0Wj0UqlEgrWVJVjmBNFETMZSRSVnJygqItqNVTOtuM89fuPve5DR29/vPcMo/v1OZ5O574HfD9oMDxv7DjWbDZHEBC8JGR1IuRC6O3425sCfowQ/jVZF3Uwy+Ab1lBJ+AwVaUUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Placement examples for a tooltip",title:"Placement examples for a tooltip",src:"/static/4fd942a85638a366e11e60155d1602bf/3cbba/tooltip-style-7.png",srcSet:["/static/4fd942a85638a366e11e60155d1602bf/7fc1e/tooltip-style-7.png 288w","/static/4fd942a85638a366e11e60155d1602bf/a5df1/tooltip-style-7.png 576w","/static/4fd942a85638a366e11e60155d1602bf/3cbba/tooltip-style-7.png 1152w","/static/4fd942a85638a366e11e60155d1602bf/392b1/tooltip-style-7.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(s,{mdxType:"Caption"},"Placement examples for a tooltip"))}k.isMDXComponent=!0}}]);