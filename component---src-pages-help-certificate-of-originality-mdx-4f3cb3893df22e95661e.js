"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[54533],{28399:function(e,t,a){a.d(t,{Z:function(){return k}});var r=a(67294),n=a(88650),l=a.n(n),o=a(1597),i=a(64905),s=a(81151),m=a(75900),c=a.n(m);var d=e=>{let{title:t,theme:a,tabs:n=[]}=e;return r.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},r.createElement("div",{className:"cds--grid"},r.createElement("div",{className:"cds--row"},r.createElement("div",{className:"cds--col-lg-12"},r.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:i,branch:s}=a||n,m=`${l}/edit/${s}${i}/src/pages${t}`;return l?r.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},r.createElement("div",{className:"cds--col"},r.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},p=a(56328),g=a(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),i=t===n,s=new RegExp(`${n}/?(#.*)?$`),m=a.replace(s,t);return r.createElement("li",{key:e,className:c()({"PageTabs-module--selected-item--aBB0K":i},"PageTabs-module--list-item--024o6")},r.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:`${m}`},e))}));return r.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},r.createElement("div",{className:"cds--grid"},r.createElement("div",{className:"cds--row"},r.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},r.createElement("nav",{"aria-label":e},r.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(r.Component);var f=b,h=a(17680),E=a(75387),v=a(50041);var N=e=>{let{date:t}=e;const a=new Date(t);return t?r.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},r.createElement(v.sg,null,r.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var k=e=>{let{pageContext:t,children:a,location:n,Title:m}=e;const{frontmatter:c={},relativePagePath:g,titleType:b}=t,{tabs:v,title:k,theme:P,description:y,keywords:w,date:M}=c,{interiorTheme:C}=(0,E.Z)(),{site:{pathPrefix:T}}=(0,o.useStaticQuery)("2456312558"),B=T?n.pathname.replace(T,""):n.pathname,x=v?B.split("/").filter(Boolean).slice(-1)[0]||l()(v[0],{lower:!0}):"",D=P||C;return r.createElement(s.Z,{tabs:v,homepage:!1,theme:D,pageTitle:k,pageDescription:y,pageKeywords:w,titleType:b},r.createElement(d,{title:m?r.createElement(m,null):k,label:"label",tabs:v,theme:D}),v&&r.createElement(f,{title:k,slug:B,tabs:v,currentTab:x}),r.createElement(h.Z,{padded:!0},a,r.createElement(u,{relativePagePath:g}),r.createElement(N,{date:M})),r.createElement(p.Z,{pageContext:t,location:n,slug:B,tabs:v,currentTab:x}),r.createElement(i.Z,null))}},53042:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return u}});var r=a(45987),n=(a(67294),a(64983)),l=a(28399);const o=["components"],i={},s=(m="PageDescription",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var m;const c={_frontmatter:i},d=l.Z;function u(e){let{components:t}=e,a=(0,r.Z)(e,o);return(0,n.kt)(d,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s,{mdxType:"PageDescription"},(0,n.kt)("p",null,"This information is for IBM teams building with Carbon.")),(0,n.kt)("h3",null,"Carbon v10.x"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"COO record ID: 95607540"),(0,n.kt)("li",{parentName:"ul"},"COO reference number: COO20190204"),(0,n.kt)("li",{parentName:"ul"},"Name of IBM material (with version number): IBM Design System ","[Version 10,\nRelease n/a, Modification n/a]"),(0,n.kt)("li",{parentName:"ul"},"Last release date: March 31, 2019"),(0,n.kt)("li",{parentName:"ul"},"Name of Product/Program manager or author of material: Matt Rosno/US/IBM")),(0,n.kt)("h3",null,"Carbon v9.x"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"COO number of IBM material (if any): AUS720180239"),(0,n.kt)("li",{parentName:"ul"},"Name of IBM material (with version number): IBM Design System ","[Version 9,\nRelease n/a, Modification n/a]"),(0,n.kt)("li",{parentName:"ul"},"Last release date: June 4, 2018"),(0,n.kt)("li",{parentName:"ul"},"Name of Product/Program manager or author of material: Matt Rosno/US/IBM")))}u.isMDXComponent=!0}}]);