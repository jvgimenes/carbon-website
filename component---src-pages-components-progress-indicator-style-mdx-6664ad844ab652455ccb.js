"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[82083],{28399:function(t,e,a){a.d(e,{Z:function(){return A}});var n=a(67294),r=a(88650),l=a.n(r),i=a(1597),o=a(64905),d=a(81151),s=a(75900),p=a.n(s);var m=t=>{let{title:e,theme:a,tabs:r=[]}=t;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},e)))))};var c=t=>{let{relativePagePath:e,repository:a}=t;const{site:{siteMetadata:{repository:r}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:o,branch:d}=a||r,s=`${l}/edit/${d}${o}/src/pages${e}`;return l?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:s},"Edit this page on GitHub"))):null},g=a(56328),u=a(51721);let k=function(t){function e(){return t.apply(this,arguments)||this}return(0,u.Z)(e,t),e.prototype.render=function(){const{title:t,tabs:e,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],o=e.map((t=>{const e=l()(t,{lower:!0,strict:!0}),o=e===r,d=new RegExp(`${r}/?(#.*)?$`),s=a.replace(d,e);return n.createElement("li",{key:t,className:p()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${s}`},t))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},e}(n.Component);var N=k,b=a(17680),h=a(75387),y=a(50041);var f=t=>{let{date:e}=t;const a=new Date(e);return e?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var A=t=>{let{pageContext:e,children:a,location:r,Title:s}=t;const{frontmatter:p={},relativePagePath:u,titleType:k}=e,{tabs:y,title:A,theme:E,description:v,keywords:C,date:w}=p,{interiorTheme:x}=(0,h.Z)(),{site:{pathPrefix:S}}=(0,i.useStaticQuery)("2456312558"),P=S?r.pathname.replace(S,""):r.pathname,T=y?P.split("/").filter(Boolean).slice(-1)[0]||l()(y[0],{lower:!0}):"",B=E||x;return n.createElement(d.Z,{tabs:y,homepage:!1,theme:B,pageTitle:A,pageDescription:v,pageKeywords:C,titleType:k},n.createElement(m,{title:s?n.createElement(s,null):A,label:"label",tabs:y,theme:B}),y&&n.createElement(N,{title:A,slug:P,tabs:y,currentTab:T}),n.createElement(b.Z,{padded:!0},a,n.createElement(c,{relativePagePath:u}),n.createElement(f,{date:w})),n.createElement(g.Z,{pageContext:e,location:r,slug:P,tabs:y,currentTab:T}),n.createElement(o.Z,null))}},17897:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return o},default:function(){return c}});var n=a(45987),r=(a(67294),a(64983)),l=a(28399);const i=["components"],o={},d=(s="Caption",function(t){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)});var s;const p={_frontmatter:o},m=l.Z;function c(t){let{components:e}=t,a=(0,n.Z)(t,i);return(0,r.kt)(m,Object.assign({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"title: Progress indicator\ndescription:\nA progress indicator is a visual representation of a user’s progress through a\nset of steps. It guides the user through a number of steps in order to\ncomplete a specified process.\ntabs: ","[‘Usage’, ‘Style’, ‘Code’, ‘Accessibility’]"),(0,r.kt)("h2",null,"Color"),(0,r.kt)("p",null,"All steps that have been completed are indicated by an outlined circle with a\ncheckmark. The current step the user is on is indicated by a filled circle.\nSteps the user has not encountered yet, or future steps, are indicated by an\noutlined circle."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Element"),(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Current icon"),(0,r.kt)("td",{parentName:"tr",align:null},"fill"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$interactive"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Complete icon"),(0,r.kt)("td",{parentName:"tr",align:null},"fill"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$interactive"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Incomplete icon"),(0,r.kt)("td",{parentName:"tr",align:null},"fill"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$icon-primary"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Current step line"),(0,r.kt)("td",{parentName:"tr",align:null},"background-color"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$border-interactive"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Incomplete step line"),(0,r.kt)("td",{parentName:"tr",align:null},"background-color"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$border-subtle")," ","*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Label"),(0,r.kt)("td",{parentName:"tr",align:null},"text color"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Optional label"),(0,r.kt)("td",{parentName:"tr",align:null},"text color"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$text-secondary"))))),(0,r.kt)(d,{mdxType:"Caption"},"* Denotes a contextual color token that will change values based on the layer it is placed on."),(0,r.kt)("h3",null,"Interactive states"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Element"),(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Step:focus"),(0,r.kt)("td",{parentName:"tr",align:null},"border"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$focus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Label:hover"),(0,r.kt)("td",{parentName:"tr",align:null},"text color"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$link-primary-hover"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Icon:error"),(0,r.kt)("td",{parentName:"tr",align:null},"fill"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$support-error"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Icon:disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"fill"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$icon-disabled"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Line:disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"background-color"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$border-disabled"))))),(0,r.kt)("div",{className:"image--fixed"},(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.18055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABO0lEQVQoz5XOO0uCARSH8UfxVcPEN62UMKOilpaWCCVrjIbGMEQKUSHoomApBdHS0tbS1jdo6ku0aybhpcQs8VJTGFJxgmqs4X3gwH/6ceCP2q0W9XqdRqPxfc1mk3K5TLFYpFAoUCqV0FT16Zm7apNKrU2l1lIqj21T7vbenM2XlMxNkWy+rA2Mrq+Q3l4jHguwGQuqW9GAs5a57BF5UEQE6V5rA/G9grcL3jeY7Sj4Oib8YsQvBuYF/KLN00eEwYUjnHMpLJGXcft02GVdurAYUmLgXDDFPrSBjqSg7gtqWlD3xGg/FKP9QIyO+Kfi2HnHntD4oTIZZHjxBM/yGeapsK1/ZsPl8CYHrAlRrLuCGsqhuVFg4mfq3KAfAZ0tWkcNZeg9Fu2gBxj73UOAG1DDFfpWr7Cc/g9+AaXcdlmUGCbzAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Examples of current, completed, and future steps for progress indicator",title:"Examples of current, completed, and future steps for progress indicator",src:"/static/e7cac004bafa21c097f2560a5a574586/3cbba/progress-indicator-style-1.png",srcSet:["/static/e7cac004bafa21c097f2560a5a574586/7fc1e/progress-indicator-style-1.png 288w","/static/e7cac004bafa21c097f2560a5a574586/a5df1/progress-indicator-style-1.png 576w","/static/e7cac004bafa21c097f2560a5a574586/3cbba/progress-indicator-style-1.png 1152w","/static/e7cac004bafa21c097f2560a5a574586/392b1/progress-indicator-style-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,r.kt)(d,{mdxType:"Caption"},"Examples of current, completed, and future steps for progress indicator"),(0,r.kt)("h2",null,"Typography"),(0,r.kt)("p",null,"Labels should be one to two words only, with a limit of 16 characters total per\nlabel. All labels should be set in sentence case."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Element"),(0,r.kt)("th",{parentName:"tr",align:null},"Font-size (px/rem)"),(0,r.kt)("th",{parentName:"tr",align:null},"Font-weight"),(0,r.kt)("th",{parentName:"tr",align:null},"Type token"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Label"),(0,r.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,r.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$body-compact-01"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Optional label"),(0,r.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,r.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$label-01"))))),(0,r.kt)("h2",null,"Structure"),(0,r.kt)("p",null,"All icons can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/guidelines/icons/library"},"icons")," library."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Element"),(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,r.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Step"),(0,r.kt)("td",{parentName:"tr",align:null},"min-width"),(0,r.kt)("td",{parentName:"tr",align:null},"128 / 8"),(0,r.kt)("td",{parentName:"tr",align:null},"–")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Icon"),(0,r.kt)("td",{parentName:"tr",align:null},"height, width"),(0,r.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,r.kt)("td",{parentName:"tr",align:null},"–")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"margin-top, margin-right"),(0,r.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Label"),(0,r.kt)("td",{parentName:"tr",align:null},"margin-top"),(0,r.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$spacing-05"))))),(0,r.kt)("div",{className:"image--fixed"},(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABrklEQVQY0z3QT0iTARjH8e8mMmKydkhMhSRzaGR6cCBG1HKEhMprtOWlkBnWISRl76uHDmqz8s/UNUH0UF1T8VAH8xjoQbDMSlAz9m4vSKcQxD+HhMfed+ZzfB748Ht+rBQ/BBEkK5fq4C/kXIDVy60I0HQjgjnD8peW+BxVLoXAMmgrG9y+OWDdXuzsoukJOg2DTiMFJ6Azh5o760i+Yl8ta3OYu3vX0+CgHPLg1RyVzjquzoD6dR3F32/denf2UPUEHYZBhwl+utQO7WImsgfrFy8Grr0ufeR9m69NLJf3RabOv4uPuWe3f+cMfVgsiYZHc79vLLkm1jY9LyPThdPjcff7ra28fl0/E02liCWT8K24BQYEyXRkNNUtFHgq1NNvYjr18/MXfLXPzgL2XpFTzSMzBfdLGwonrzS6xoanSkK+rjzA1v1nO0tN6m4zoWYYx2CfIA4nQeULnnIN+WE2iO1J0aD1VlSE5thHvJm3YAhaf+r4/ekOe3b3CesJC9PMly3weRq8q3y2VZSF+T9Ps6PHHQqhkVm8GTUQgsebSXzV6Q679g5OQPUfeATvRrQ+4OsBQAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing for progress indicator",title:"Structure and spacing for progress indicator",src:"/static/42965deeaf92d2b3858659a772fa8d41/3cbba/progress-indicator-style-2.png",srcSet:["/static/42965deeaf92d2b3858659a772fa8d41/7fc1e/progress-indicator-style-2.png 288w","/static/42965deeaf92d2b3858659a772fa8d41/a5df1/progress-indicator-style-2.png 576w","/static/42965deeaf92d2b3858659a772fa8d41/3cbba/progress-indicator-style-2.png 1152w","/static/42965deeaf92d2b3858659a772fa8d41/392b1/progress-indicator-style-2.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,r.kt)(d,{mdxType:"Caption"},"Structure and spacing measurements for progress indicator | px / rem"))}c.isMDXComponent=!0}}]);