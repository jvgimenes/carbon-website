"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[1677],{28399:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67294),r=a(88650),l=a.n(r),o=a(1597),s=a(64905),i=a(81151),c=a(75900),d=a.n(c);var m=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:s,branch:i}=a||r,c=`${l}/edit/${i}${s}/src/pages${t}`;return l?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(56328),g=a(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),s=t===r,i=new RegExp(`${r}/?(#.*)?$`),c=a.replace(i,t);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component);var b=h,E=a(17680),f=a(75387),v=a(50041);var y=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(v.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:r,Title:c}=e;const{frontmatter:d={},relativePagePath:g,titleType:h}=t,{tabs:v,title:w,theme:k,description:P,keywords:N,date:T}=d,{interiorTheme:C}=(0,f.Z)(),{site:{pathPrefix:x}}=(0,o.useStaticQuery)("2456312558"),D=x?r.pathname.replace(x,""):r.pathname,Z=v?D.split("/").filter(Boolean).slice(-1)[0]||l()(v[0],{lower:!0}):"",B=k||C;return n.createElement(i.Z,{tabs:v,homepage:!1,theme:B,pageTitle:w,pageDescription:P,pageKeywords:N,titleType:h},n.createElement(m,{title:c?n.createElement(c,null):w,label:"label",tabs:v,theme:B}),v&&n.createElement(b,{title:w,slug:D,tabs:v,currentTab:Z}),n.createElement(E.Z,{padded:!0},a,n.createElement(u,{relativePagePath:g}),n.createElement(y,{date:T})),n.createElement(p.Z,{pageContext:t,location:r,slug:D,tabs:v,currentTab:Z}),n.createElement(s.Z,null))}},37185:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return u}});var n=a(45987),r=(a(67294),a(64983)),l=a(28399);const o=["components"],s={},i=(c="PageDescription",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const d={_frontmatter:s},m=l.Z;function u(e){let{components:t}=e,a=(0,n.Z)(e,o);return(0,r.kt)(m,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i,{mdxType:"PageDescription"},(0,r.kt)("p",null,"Carbon is always getting better. This happens through feature and usability\nupgrades to our elements, components, and patterns. It also happens through\nexploration and experimentation by the individuals and teams who use Carbon.")),(0,r.kt)("h2",null,"About Community"),(0,r.kt)("p",null,"Here we share work developed and maintained by the Carbon community. Our goal is\nto surface future resources and get them into the hands of teams who will use\nthem and refine them."),(0,r.kt)("p",null,"You can help elevate these resources by working with the maintainers to\ncontribute feedback, code, and design. Through contributions, feedback, and\nadoption this work may become a core part of the Carbon Design System."),(0,r.kt)("p",null,"Currently, part of this content is behind the IBM firewall but we are working on\nways to make it open source and available to all."))}u.isMDXComponent=!0}}]);