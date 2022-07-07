"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[33452],{28399:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(67294),o=n(88650),r=n.n(o),l=n(1597),i=n(64905),s=n(81151),c=n(75900),p=n.n(c);var d=e=>{let{title:t,theme:n,tabs:o=[]}=e;return a.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:o}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:i,branch:s}=n||o,c=`${r}/edit/${s}${i}/src/pages${t}`;return r?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=n(56328),k=n(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,k.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,o=n.split("/").filter(Boolean).slice(-1)[0],i=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),i=t===o,s=new RegExp(`${o}/?(#.*)?$`),c=n.replace(s,t);return a.createElement("li",{key:e,className:p()({"PageTabs-module--selected-item--aBB0K":i},"PageTabs-module--list-item--024o6")},a.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(a.Component);var h=g,b=n(17680),y=n(75387),f=n(50041);var N=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(f.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var C=e=>{let{pageContext:t,children:n,location:o,Title:c}=e;const{frontmatter:p={},relativePagePath:k,titleType:g}=t,{tabs:f,title:C,theme:w,description:v,keywords:x,date:E}=p,{interiorTheme:T}=(0,y.Z)(),{site:{pathPrefix:P}}=(0,l.useStaticQuery)("2456312558"),A=P?o.pathname.replace(P,""):o.pathname,I=f?A.split("/").filter(Boolean).slice(-1)[0]||r()(f[0],{lower:!0}):"",L=w||T;return a.createElement(s.Z,{tabs:f,homepage:!1,theme:L,pageTitle:C,pageDescription:v,pageKeywords:x,titleType:g},a.createElement(d,{title:c?a.createElement(c,null):C,label:"label",tabs:f,theme:L}),f&&a.createElement(h,{title:C,slug:A,tabs:f,currentTab:I}),a.createElement(b.Z,{padded:!0},n,a.createElement(m,{relativePagePath:k}),a.createElement(N,{date:E})),a.createElement(u.Z,{pageContext:t,location:o,slug:A,tabs:f,currentTab:I}),a.createElement(i.Z,null))}},94709:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return y}});var a=n(45987),o=(n(67294),n(64983)),r=n(28399);const l=["components"],i={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=s("PageDescription"),p=s("AnchorLinks"),d=s("AnchorLink"),m=s("Row"),u=s("Column"),k=s("ResourceCard"),g=s("MdxIcon"),h={_frontmatter:i},b=r.Z;function y(e){let{components:t}=e,n=(0,a.Z)(e,l);return(0,o.kt)(b,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Carbon icons are provided through a set of packages allowing the use of icons in\nmultiple frameworks. Icons are supported in vanilla, React, Angular, and Vue.")),(0,o.kt)(p,{mdxType:"AnchorLinks"},(0,o.kt)(d,{mdxType:"AnchorLink"},"Get started"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Usage"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Resources")),(0,o.kt)("h2",null,"Get started"),(0,o.kt)("p",null,"To install ",(0,o.kt)("inlineCode",{parentName:"p"},"@carbon/icons-react")," in your project, you will need to run the\nfollowing command using ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -S @carbon/icons-react\n")),(0,o.kt)("p",null,"If you prefer ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/en/"},"Yarn"),", use the following command\ninstead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @carbon/icons-react\n")),(0,o.kt)("h2",null,"Usage"),(0,o.kt)("p",null,"Icons in this package support the following sizes: ",(0,o.kt)("inlineCode",{parentName:"p"},"16"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"20"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"24"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"32"),"\npixels. These sizes refer to the width and height of the icon. You can import an\nicon component into your project by referring to its name and size:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Add24 } from '@carbon/icons-react';\n")),(0,o.kt)("p",null,"We also provide CommonJS and UMD files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"lib")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"umd")," directories,\nrespectively."),(0,o.kt)("p",null,"To import using CommonJS, you can do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { Add24 } = require('@carbon/icons-react');\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: if you would like to find the import path for an icon, you can reference\nour\n",(0,o.kt)("a",{parentName:"em",href:"https://www.carbondesignsystem.com/guidelines/iconography/library"},"Icon Library"))),(0,o.kt)("h3",null,"Icon fill"),(0,o.kt)("p",null,"All icons from the library support being styled by the ",(0,o.kt)("inlineCode",{parentName:"p"},"fill")," property. You can\nchange the color of an icon by passing in a custom class name that sets this\nproperty (preferred), or by passing in an inline style. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"// CSS custom class name to set the fill of the icon to `rebeccapurple`\nsvg.my-custom-class {\n  fill: rebeccapurple;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Add16 } from \'@carbon/icons-react\';\n\nfunction MyComponent() {\n  return (\n    <button>\n      <Add16 aria-label="Add" className="my-custom-class" />\n    </button>\n  );\n}\n')),(0,o.kt)("h4",null,"Two-tone icons"),(0,o.kt)("p",null,"Certain icons in the library support two distinct fill colors. You can target\nthe inner path by using the ",(0,o.kt)("inlineCode",{parentName:"p"},'[data-icon-path="inner-path"]')," attribute selector.\nFor example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"// CSS custom class name to set the fill of the icon to `yellow`\nsvg.outer-icon-fill {\n  fill: yellow;\n}\n\n// Use the `data-icon-path` attribute selector to target the inner path\n// where we want to set the fill to `black`. We also set `opacity` to `1` so\n// that this inner-path is visible.\nsvg.outer-icon-fill [data-icon-path='inner-path'] {\n  fill: black;\n  opacity: 1;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { WarningFilled16 } from \'@carbon/icons-react\';\n\nfunction MyComponent() {\n  return <WarningFilled16 aria-label="Add" className="my-custom-class" />;\n}\n')),(0,o.kt)("h3",null,"Focus and ",(0,o.kt)("inlineCode",{parentName:"h3"},"aria-label")),(0,o.kt)("p",null,"By default, the icon components from ",(0,o.kt)("inlineCode",{parentName:"p"},"@carbon/icons-react")," are treated as\ndecorative content. This means that we set ",(0,o.kt)("inlineCode",{parentName:"p"},'aria-hidden="true"')," unless certain\nprops are passed to the component."),(0,o.kt)("p",null,"If you would like the icon to be announced by a screen reader, you can supply an\n",(0,o.kt)("inlineCode",{parentName:"p"},"aria-label")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"aria-labelledby"),". For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Add16 } from '@carbon/icons-react';\n\nfunction MyComponent() {\n  return (\n    <button>\n      <Add16 aria-label=\"Add\" />\n    </button>\n  );\n}\n")),(0,o.kt)("p",null,"Doing this will add the appropriate ",(0,o.kt)("inlineCode",{parentName:"p"},"role")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<svg>")," node, as well."),(0,o.kt)("p",null,"If you would like the ",(0,o.kt)("inlineCode",{parentName:"p"},"<svg>")," to receive focus, you will need to pass in a\n",(0,o.kt)("inlineCode",{parentName:"p"},"tabIndex")," value. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Add16 } from \'@carbon/icons-react\';\n\nfunction MyComponent() {\n  return <Add16 aria-label="Add" tabIndex="0" />;\n}\n')),(0,o.kt)("p",null,"Including ",(0,o.kt)("inlineCode",{parentName:"p"},"tabIndex")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"aria-label")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"aria-labelledby"),") will set the\ncorresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"tabindex")," on the underlying ",(0,o.kt)("inlineCode",{parentName:"p"},"<svg>")," and verify support in older\nbrowsers like Internet Explorer 11 by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"focusable")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h2",null,"Resources"),(0,o.kt)(m,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(u,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(k,{subTitle:"Carbon icons package",href:"https://github.com/carbon-design-system/carbon/blob/v10/packages/icons",mdxType:"ResourceCard"},(0,o.kt)(g,{name:"bee",mdxType:"MdxIcon"}))),(0,o.kt)(u,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(k,{subTitle:"Icon package demo",href:"https://github.com/carbon-design-system/carbon/blob/v10/packages/icons",mdxType:"ResourceCard"},(0,o.kt)(g,{name:"bee",mdxType:"MdxIcon"})))))}y.isMDXComponent=!0}}]);