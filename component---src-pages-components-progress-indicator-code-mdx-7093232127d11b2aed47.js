"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[42297],{28399:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(67294),o=n(88650),r=n.n(o),s=n(1597),i=n(64905),l=n(81151),c=n(75900),d=n.n(c);var m=e=>{let{title:t,theme:n,tabs:o=[]}=e;return a.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:o}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:i,branch:l}=n||o,c=`${r}/edit/${l}${i}/src/pages${t}`;return r?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=n(56328),g=n(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,o=n.split("/").filter(Boolean).slice(-1)[0],i=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),i=t===o,l=new RegExp(`${o}/?(#.*)?$`),c=n.replace(l,t);return a.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":i},"PageTabs-module--list-item--024o6")},a.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(a.Component);var h=b,y=n(17680),f=n(75387),v=n(50041);var k=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(v.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var E=e=>{let{pageContext:t,children:n,location:o,Title:c}=e;const{frontmatter:d={},relativePagePath:g,titleType:b}=t,{tabs:v,title:E,theme:C,description:T,keywords:w,date:x}=d,{interiorTheme:P}=(0,f.Z)(),{site:{pathPrefix:S}}=(0,s.useStaticQuery)("2456312558"),N=S?o.pathname.replace(S,""):o.pathname,D=v?N.split("/").filter(Boolean).slice(-1)[0]||r()(v[0],{lower:!0}):"",L=C||P;return a.createElement(l.Z,{tabs:v,homepage:!1,theme:L,pageTitle:E,pageDescription:T,pageKeywords:w,titleType:b},a.createElement(m,{title:c?a.createElement(c,null):E,label:"label",tabs:v,theme:L}),v&&a.createElement(h,{title:E,slug:N,tabs:v,currentTab:D}),a.createElement(y.Z,{padded:!0},n,a.createElement(p,{relativePagePath:g}),a.createElement(k,{date:x})),a.createElement(u.Z,{pageContext:t,location:o,slug:N,tabs:v,currentTab:D}),a.createElement(i.Z,null))}},60037:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return f}});var a=n(45987),o=(n(67294),n(64983)),r=n(28399);const s=["components"],i={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=l("PageDescription"),d=l("Row"),m=l("Column"),p=l("ResourceCard"),u=l("MdxIcon"),g=l("ComponentDemo"),b=l("ComponentVariant"),h={_frontmatter:i},y=r.Z;function f(e){let{components:t}=e,n=(0,a.Z)(e,s);return(0,o.kt)(y,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"title: Progress indicator\ndescription:\nA progress indicator is a visual representation of a user’s progress through a\nset of steps. It guides the user through a number of steps in order to\ncomplete a specified process.\ntabs: ","[‘Usage’, ‘Style’, ‘Code’, ‘Accessibility’]"),(0,o.kt)(c,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Preview the progress indicator component with the React live demo. For detailed\ncode usage documentation, see the Storybooks for each framework below.")),(0,o.kt)("h2",null,"Documentation"),(0,o.kt)(d,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(m,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-progressindicator--default",mdxType:"ResourceCard"},(0,o.kt)(u,{name:"react",mdxType:"MdxIcon"}))),(0,o.kt)(m,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-progress-indicator--basic",mdxType:"ResourceCard"},(0,o.kt)(u,{name:"angular",mdxType:"MdxIcon"}))),(0,o.kt)(m,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvprogress--default",mdxType:"ResourceCard"},(0,o.kt)(u,{name:"vue",mdxType:"MdxIcon"}))),(0,o.kt)(m,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"Web Components (Community)",href:"https://web-components.carbondesignsystem.com/?path=/story/components-progress-indicator--default",mdxType:"ResourceCard"},(0,o.kt)(u,{name:"webcomponents",mdxType:"MdxIcon"})))),(0,o.kt)("h2",null,"Live demo"),(0,o.kt)(g,{components:[{id:"progress-indicator",label:"Progress indicator"}],mdxType:"ComponentDemo"},(0,o.kt)(b,{id:"progress-indicator",knobs:{ProgressIndicator:["vertical"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-progressindicator--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-progress-indicator--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvprogress--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-progress-indicator--default"},mdxType:"ComponentVariant"},'\n  <div className="some-container">\n    <ProgressIndicator currentIndex={1}>\n        <ProgressStep\n          complete\n          label="First step"\n          description="Step 1: Getting started with Carbon Design System"\n          secondaryLabel="Optional label"\n        />\n        <ProgressStep\n          current\n          label="Second step with tooltip"\n          description="Step 2: Getting started with Carbon Design System"\n        />\n        <ProgressStep\n          label="Third step with tooltip"\n          description="Step 3: Getting started with Carbon Design System"\n        />\n        <ProgressStep\n          label="Fourth step"\n          description="Step 4: Getting started with Carbon Design System"\n          invalid\n          secondaryLabel="Example invalid step"\n        />\n        <ProgressStep\n          label="Fifth step"\n          description="Step 5: Getting started with Carbon Design System"\n          disabled\n        />\n      </ProgressIndicator>\n  </div>\n')))}f.isMDXComponent=!0}}]);