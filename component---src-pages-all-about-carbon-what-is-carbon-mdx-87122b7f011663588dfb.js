"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[11348],{28399:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(67294),s=n(88650),r=n.n(s),i=n(1597),o=n(64905),l=n(81151),c=n(75900),d=n.n(c);var u=e=>{let{title:t,theme:n,tabs:s=[]}=e;return a.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":s.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:s}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:o,branch:l}=n||s,c=`${r}/edit/${l}${o}/src/pages${t}`;return r?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=n(56328),h=n(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,s=n.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),o=t===s,l=new RegExp(`${s}/?(#.*)?$`),c=n.replace(l,t);return a.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},a.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(a.Component);var b=g,k=n(17680),f=n(75387),y=n(50041);var w=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(y.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:t,children:n,location:s,Title:c}=e;const{frontmatter:d={},relativePagePath:h,titleType:g}=t,{tabs:y,title:v,theme:C,description:N,keywords:E,date:x}=d,{interiorTheme:T}=(0,f.Z)(),{site:{pathPrefix:P}}=(0,i.useStaticQuery)("2456312558"),B=P?s.pathname.replace(P,""):s.pathname,I=y?B.split("/").filter(Boolean).slice(-1)[0]||r()(y[0],{lower:!0}):"",M=C||T;return a.createElement(l.Z,{tabs:y,homepage:!1,theme:M,pageTitle:v,pageDescription:N,pageKeywords:E,titleType:g},a.createElement(u,{title:c?a.createElement(c,null):v,label:"label",tabs:y,theme:M}),y&&a.createElement(b,{title:v,slug:B,tabs:y,currentTab:I}),a.createElement(k.Z,{padded:!0},n,a.createElement(m,{relativePagePath:h}),a.createElement(w,{date:x})),a.createElement(p.Z,{pageContext:t,location:s,slug:B,tabs:y,currentTab:I}),a.createElement(o.Z,null))}},33129:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return h}});var a=n(45987),s=(n(67294),n(64983)),r=n(28399);const i=["components"],o={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},c=l("PageDescription"),d=l("AnchorLinks"),u=l("AnchorLink"),m={_frontmatter:o},p=r.Z;function h(e){let{components:t}=e,n=(0,a.Z)(e,i);return(0,s.kt)(p,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(c,{mdxType:"PageDescription"},(0,s.kt)("p",null,"Carbon is IBM’s open source design system for products and digital experiences.\nWith the IBM Design Language as its foundation, the system consists of working\ncode, design tools and resources, human interface guidelines, and a vibrant\ncommunity of contributors.")),(0,s.kt)(d,{mdxType:"AnchorLinks"},(0,s.kt)(u,{mdxType:"AnchorLink"},"Overview"),(0,s.kt)(u,{mdxType:"AnchorLink"},"How Carbon works"),(0,s.kt)(u,{mdxType:"AnchorLink"},"Carbon compliance at IBM"),(0,s.kt)(u,{mdxType:"AnchorLink"},"Contact us")),(0,s.kt)("h2",null,"Overview"),(0,s.kt)("p",null,"A design system is a collection of pre-built, reusable assets—components,\npatterns, guidance, and code—that allows its users to build consistent digital\nexperiences faster. By using the pre-built and universal assets of Carbon, the\ntime teams spend designing and building is minimized. Instead of building and\nre-building basic elements, they can spend that time customizing their products\nto address specific client use cases."),(0,s.kt)("h3",null,"Carbon is open source"),(0,s.kt)("p",null,"Carbon is funded and built by IBM, which means we build for the company’s\nbusiness needs, but we’ve made it open source for anyone to use and contribute\nback to. While being primarily open source, Carbon also serves various parts of\nthe IBM business that follow an inner source model."),(0,s.kt)("h2",null,"How Carbon works"),(0,s.kt)("p",null,"The Carbon team is committed to helping members of the community be successful\nin adoption and their use of Carbon assets."),(0,s.kt)("h3",null,"Our guiding principles"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Carbon is open.")," The design system is a distributed effort, guided by the\nprinciples of the\n",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open-source-software_movement"},"open source movement"),".\nCarbon’s users are also its makers, and everyone is encouraged to contribute."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Carbon is inclusive.")," It’s designed and built to be accessible to all,\nregardless of ability or situation."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Carbon is modular and flexible.")," The system’s modularity ensures maximum\nflexibility in execution. Its components are designed to work seamlessly with\neach other, in whichever combination suits the needs of the user."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Carbon puts the user first.")," Using rigorous research into users’ needs and\ndesires, Carbon is laser-focused on real people."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Carbon builds consistency.")," Based on the IBM Design Language, every element\nand component of Carbon was designed from the ground up to work elegantly\ntogether to ensure consistent, cohesive user experiences."),(0,s.kt)("h3",null,"We maintain assets"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Carbon maintains design kits containing Carbon components.")," We offer and\nmaintain design kits in ",(0,s.kt)("a",{parentName:"p",href:"/designing/kits/sketch"},"Sketch")," and\n",(0,s.kt)("a",{parentName:"p",href:"/designing/kits/adobe-xd"},"Adobe XD"),". We also have an\n",(0,s.kt)("a",{parentName:"p",href:"/designing/kits/axure"},"Axure")," kit, maintained by the community."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Carbon supports multiple code implementations.")," These reflect the\nproduction-level design libraries. The frameworks are listed below with their\nprimary maintainers:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon"},"React"),": Carbon team"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon"},"CSS/Vanilla"),": Carbon team"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://angular.carbondesignsystem.com/"},"Angular"),": Community maintained"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon-components-vue"},"Vue"),":\nCommunity maintained"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/ibm/carbon-components-svelte"},"Svelte"),": Community\nmaintained")),(0,s.kt)("p",null,"If you’re using a different framework, you can still build components by\nfollowing our guidelines for\n",(0,s.kt)("a",{parentName:"p",href:"/developing/frameworks/other-frameworks"},"other frameworks"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Design patterns are harvested from products built with Carbon.")," These become\npart of the design system. Teams can use these well-defined patterns in their\nwork and contribute patterns back to the system."),(0,s.kt)("h3",null,"We support adoption"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"We conduct training classes, run meetups, and offer certifications.")," We offer\ntutorials in Angular, React, and Vue. We run ",(0,s.kt)("a",{parentName:"p",href:"/whats-happening/meetups"},"meetups"),"\nand design reviews on a regular basis. We’re also available to teach at\nconferences, bootcamp labs, and wherever else we’re needed."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"We engage the community.")," We strive to be one of the world’s best design\nsystems and we’re\nalways ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md&title="},"open to feedback"),".\nWe communicate with you about Carbon’s state and roadmap through GitHub support,\nblog posts, and Twitter."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Contributed components and patterns include a list of maintainers.")," The\nCarbon team triages and supports maintenance requests that do not have a\nmaintainer."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"We provide support for users of the design system.")," The Carbon team engages\nwith users primarily through GitHub. A member of the Carbon team responds to all\nissues and pull requests."),(0,s.kt)("h2",null,"Carbon compliance at IBM"),(0,s.kt)("p",null,"Carbon compliance by the IBM community is critically important to the IBM brand.\nCarbon is the digital expression of the IBM brand and the chassis upon which all\nproducts and digital experiences are built. It is the foundation for every\ndigital experience people have throughout their relationship with IBM."),(0,s.kt)("p",null,"Making delightful user experiences rooted in human-centered design, high-quality\ndesign standards, and the IBM brand ensures we deliver consistency and\nexcellence to our users, and build a brand that people love across the entire\nproduct line."),(0,s.kt)("h2",null,"Contact us"),(0,s.kt)("p",null,"Have questions? Found a bug? Learn where to go and what to do by visiting\nthe ",(0,s.kt)("a",{parentName:"p",href:"https://carbondesignsystem.com/help/contact-us"},"Contact us page"),"."))}h.isMDXComponent=!0}}]);