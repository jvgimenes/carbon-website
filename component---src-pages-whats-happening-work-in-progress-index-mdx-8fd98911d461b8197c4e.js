"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[2856],{28399:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67294),r=a(88650),o=a.n(r),i=a(1597),s=a(64905),l=a(81151),c=a(75900),d=a.n(c);var m=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:s,branch:l}=a||r,c=`${o}/edit/${l}${s}/src/pages${t}`;return o?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=a(56328),g=a(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),s=t===r,l=new RegExp(`${r}/?(#.*)?$`),c=a.replace(l,t);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component);var b=h,f=a(17680),k=a(75387),y=a(50041);var v=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:r,Title:c}=e;const{frontmatter:d={},relativePagePath:g,titleType:h}=t,{tabs:y,title:w,theme:E,description:T,keywords:C,date:N}=d,{interiorTheme:P}=(0,k.Z)(),{site:{pathPrefix:x}}=(0,i.useStaticQuery)("2456312558"),D=x?r.pathname.replace(x,""):r.pathname,G=y?D.split("/").filter(Boolean).slice(-1)[0]||o()(y[0],{lower:!0}):"",Z=E||P;return n.createElement(l.Z,{tabs:y,homepage:!1,theme:Z,pageTitle:w,pageDescription:T,pageKeywords:C,titleType:h},n.createElement(m,{title:c?n.createElement(c,null):w,label:"label",tabs:y,theme:Z}),y&&n.createElement(b,{title:w,slug:D,tabs:y,currentTab:G}),n.createElement(f.Z,{padded:!0},a,n.createElement(p,{relativePagePath:g}),n.createElement(v,{date:N})),n.createElement(u.Z,{pageContext:t,location:r,slug:D,tabs:y,currentTab:G}),n.createElement(s.Z,null))}},91893:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return h}});var n=a(45987),r=(a(67294),a(64983)),o=a(28399);const i=["components"],s={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=l("PageDescription"),d=l("InlineNotification"),m=l("CardGroup"),p=l("MiniCard"),u={_frontmatter:s},g=o.Z;function h(e){let{components:t}=e,a=(0,n.Z)(e,i);return(0,r.kt)(g,Object.assign({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(c,{mdxType:"PageDescription"},(0,r.kt)("p",null,"An opportunity to see early Carbon concepts and ideas, and experiment with work\nin progress.")),(0,r.kt)(d,{mdxType:"InlineNotification"},"This work in progress is not actively supported by the Carbon team, and is not approved for production use. We gratefully accept feedback or comment."),(0,r.kt)("h2",null,"Introduction"),(0,r.kt)("p",null,"The Carbon team is always exploring different ways to serve our users. We work\nin the open, and this page is here to give you early previews of what we’re\nworking on."),(0,r.kt)("p",null,"That could mean making an unfinished Sketch kit available for download, linking\nto GitHub issues for proposed components and patterns, or sharing graphics files\nof concepts for how we might present content."),(0,r.kt)("p",null,"Not everything here may make it into production, while other pieces might become\ncentral pieces of the design system. It’s an early opportunity for you to\nprovide feedback and have a say in Carbon’s direction."),(0,r.kt)("h3",null,"Components and patterns"),(0,r.kt)(m,{mdxType:"CardGroup"},(0,r.kt)(p,{onClick:()=>fathom.trackGoal("B3AN6GVA",0),title:"Tree view component",href:"https://carbon-website-git-fork-designertyler-treeview03092020.carbon-design-system.now.sh/components/tree-view/usage",mdxType:"MiniCard"})),(0,r.kt)("h3",null,"Website design and content"),(0,r.kt)(m,{mdxType:"CardGroup"},(0,r.kt)(p,{onClick:()=>fathom.trackGoal("ZASURK2Q",0),title:"Activation concepts",href:"https://github.com/carbon-design-system/carbon-website/issues/1519",mdxType:"MiniCard"})))}h.isMDXComponent=!0}}]);