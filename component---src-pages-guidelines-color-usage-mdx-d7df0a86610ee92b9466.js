"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[75173],{28399:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(67294),l=a(88650),r=a.n(l),s=a(1597),i=a(64905),c=a(81151),o=a(75900),m=a.n(o);var d=e=>{let{title:t,theme:a,tabs:l=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:l}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:i,branch:c}=a||l,o=`${r}/edit/${c}${i}/src/pages${t}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:o},"Edit this page on GitHub"))):null},g=a(56328),p=a(51721);let E=function(e){function t(){return e.apply(this,arguments)||this}return(0,p.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),i=t===l,c=new RegExp(`${l}/?(#.*)?$`),o=a.replace(c,t);return n.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":i},"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${o}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(n.Component);var h=E,b=a(17680),v=a(75387),f=a(50041);var y=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var k=e=>{let{pageContext:t,children:a,location:l,Title:o}=e;const{frontmatter:m={},relativePagePath:p,titleType:E}=t,{tabs:f,title:k,theme:P,description:N,keywords:w,date:T}=m,{interiorTheme:x}=(0,v.Z)(),{site:{pathPrefix:C}}=(0,s.useStaticQuery)("2456312558"),Z=C?l.pathname.replace(C,""):l.pathname,B=f?Z.split("/").filter(Boolean).slice(-1)[0]||r()(f[0],{lower:!0}):"",D=P||x;return n.createElement(c.Z,{tabs:f,homepage:!1,theme:D,pageTitle:k,pageDescription:N,pageKeywords:w,titleType:E},n.createElement(d,{title:o?n.createElement(o,null):k,label:"label",tabs:f,theme:D}),f&&n.createElement(h,{title:k,slug:Z,tabs:f,currentTab:B}),n.createElement(b.Z,{padded:!0},a,n.createElement(u,{relativePagePath:p}),n.createElement(y,{date:T})),n.createElement(g.Z,{pageContext:t,location:l,slug:Z,tabs:f,currentTab:B}),n.createElement(i.Z,null))}},9493:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return d}});var n=a(45987),l=(a(67294),a(64983)),r=a(28399),s=a(15086);const i=["components"],c={},o={_frontmatter:c},m=r.Z;function d(e){let{components:t}=e,a=(0,n.Z)(e,i);return(0,l.kt)(m,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"title: Color\ndescription:\nMaintaining consistent and engaging digital interfaces throughout IBM, whether\napplications or experiences, demands extended guidance around color usage.\ntabs: ","[‘Overview’, ‘Usage’, ‘Code’, ‘Implementation’]"),(0,l.kt)("h2",null,"Tokens by theme"),(0,l.kt)(s.Z,{mdxType:"ColorTokenTable"}))}d.isMDXComponent=!0}}]);