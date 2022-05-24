"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[97569],{28399:function(e,t,o){o.d(t,{Z:function(){return v}});var n=o(67294),a=o(88650),r=o.n(a),s=o(1597),c=o(64905),m=o(81151),l=o(75900),i=o.n(l);var d=e=>{let{title:t,theme:o,tabs:a=[]}=e;return n.createElement("div",{className:i()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":a.length,"PageHeader-module--dark-mode--WCeH8":"dark"===o})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:o}=e;const{site:{siteMetadata:{repository:a}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:c,branch:m}=o||a,l=`${r}/edit/${m}${c}/src/pages${t}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:l},"Edit this page on GitHub"))):null},u=o(56328),g=o(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:o}=this.props,a=o.split("/").filter(Boolean).slice(-1)[0],c=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),c=t===a,m=new RegExp(`${a}/?(#.*)?$`),l=o.replace(m,t);return n.createElement("li",{key:e,className:i()({"PageTabs-module--selected-item--aBB0K":c},"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${l}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},c))))))},t}(n.Component);var h=b,k=o(17680),y=o(75387),x=o(50041);var T=e=>{let{date:t}=e;const o=new Date(t);return t?n.createElement(x.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(x.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",o.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:t,children:o,location:a,Title:l}=e;const{frontmatter:i={},relativePagePath:g,titleType:b}=t,{tabs:x,title:v,theme:f,description:C,keywords:M,date:w}=i,{interiorTheme:N}=(0,y.Z)(),{site:{pathPrefix:E}}=(0,s.useStaticQuery)("2456312558"),L=E?a.pathname.replace(E,""):a.pathname,R=x?L.split("/").filter(Boolean).slice(-1)[0]||r()(x[0],{lower:!0}):"",I=f||N;return n.createElement(m.Z,{tabs:x,homepage:!1,theme:I,pageTitle:v,pageDescription:C,pageKeywords:M,titleType:b},n.createElement(d,{title:l?n.createElement(l,null):v,label:"label",tabs:x,theme:I}),x&&n.createElement(h,{title:v,slug:L,tabs:x,currentTab:R}),n.createElement(k.Z,{padded:!0},o,n.createElement(p,{relativePagePath:g}),n.createElement(T,{date:w})),n.createElement(u.Z,{pageContext:t,location:a,slug:L,tabs:x,currentTab:R}),n.createElement(c.Z,null))}},4914:function(e,t,o){o.r(t),o.d(t,{_frontmatter:function(){return c},default:function(){return y}});var n=o(45987),a=(o(67294),o(64983)),r=o(28399);const s=["components"],c={},m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},l=m("PageDescription"),i=m("AnchorLinks"),d=m("AnchorLink"),p=m("Row"),u=m("Column"),g=m("ResourceCard"),b=m("MdxIcon"),h={_frontmatter:c},k=r.Z;function y(e){let{components:t}=e,o=(0,n.Z)(e,s);return(0,a.kt)(k,Object.assign({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l,{mdxType:"PageDescription"},(0,a.kt)("p",null,"The repository structure was overhauled during the transition from v9 to v10.\nCarbon code now lives in a monorepo.")),(0,a.kt)(i,{mdxType:"AnchorLinks"},(0,a.kt)(d,{mdxType:"AnchorLink"},"Repo architecture"),(0,a.kt)(d,{mdxType:"AnchorLink"},"Carbon components"),(0,a.kt)(d,{mdxType:"AnchorLink"},"Carbon elements")),(0,a.kt)("h2",null,"Repo architecture"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-themes"},"Carbon-themes")," was\ndeprecated in v10, and the themes package\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/tree/v10/packages/themes"},"@carbon/themes"),"\nnow lives in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon"},"Carbon"),"\nmonorepo."),(0,a.kt)(p,{className:"resource-card-group",mdxType:"Row"},(0,a.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(g,{subTitle:"@carbon/themes package",href:"https://github.com/carbon-design-system/carbon/tree/v10/packages/themes",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"github",mdxType:"MdxIcon"})))),(0,a.kt)("h2",null,"Carbon components"),(0,a.kt)("p",null,"Carbon components were reskinned in v10. The redesign was conducted with maximum\nbackwards compatibility in mind. Users of v9 should be able to upgrade to v10\nautomatically with minimal breakage."),(0,a.kt)("p",null,"Detailed technical migration docs for Carbon components are available in the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/blob/v10/packages/components/docs/migration/migrate-to-10.x.md"},"carbon-components repo"),".\nHere you will find links to component-level migration information, as well as a\nlist of those components that have been removed or are under development."),(0,a.kt)("p",null,"There is also a dedicated\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/blob/v10/packages/components/src/globals/scss/migrate-to-10.x.md"},"Sass migration guide"),"\nthat covers changes to global styling."),(0,a.kt)(p,{className:"resource-card-group",mdxType:"Row"},(0,a.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(g,{subTitle:"Migrate carbon-components",href:"https://github.com/carbon-design-system/carbon/blob/v10/packages/components/docs/migration/migrate-to-10.x.md",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"github",mdxType:"MdxIcon"}))),(0,a.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(g,{subTitle:"Migrate carbon-components-react",href:"https://github.com/carbon-design-system/carbon/tree/v10/packages/react/docs/migration",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"github",mdxType:"MdxIcon"}))),(0,a.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(g,{subTitle:"Migrate carbon-components Sass",href:"https://github.com/carbon-design-system/carbon/blob/v10/packages/components/src/globals/scss/migrate-to-10.x.md",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"github",mdxType:"MdxIcon"})))),(0,a.kt)("h2",null,"Carbon elements"),(0,a.kt)("p",null,"All technical migration docs for Carbon elements are available in the ",(0,a.kt)("inlineCode",{parentName:"p"},"carbon"),"\nmonorepo\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/tree/v10/docs/migration"},"docs folder"),"."),(0,a.kt)(p,{className:"resource-card-group",mdxType:"Row"},(0,a.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(g,{subTitle:"Migrate elements",href:"https://github.com/carbon-design-system/carbon/tree/v10/docs/migration",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"github",mdxType:"MdxIcon"})))),(0,a.kt)("h3",null,"Icons"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@carbon/icons")," package can be now be found in the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/tree/v10/packages/icons"},"Carbon monorepo"),"."),(0,a.kt)("p",null,"The\n",(0,a.kt)("a",{parentName:"p",href:"https://carbon-elements.netlify.com/icons/examples/preview/"},"Carbon icons demo"),"\ncontains a master table for all Carbon icons, including name, size, preview,\ndownload links, quick links for filing issues, module name, and relative path."),(0,a.kt)(p,{className:"resource-card-group",mdxType:"Row"},(0,a.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(g,{subTitle:"Carbon icon package",href:"https://github.com/carbon-design-system/carbon/tree/v10/packages/icons",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"github",mdxType:"MdxIcon"}))),(0,a.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(g,{subTitle:"Migrate icons",href:"https://github.com/carbon-design-system/carbon/blob/v10/docs/migration/10.x-icons.md",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"github",mdxType:"MdxIcon"}))),(0,a.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(g,{subTitle:"Icon demo",href:"https://carbon-elements.netlify.com/icons/examples/preview/",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"github",mdxType:"MdxIcon"})))),(0,a.kt)("h3",null,"Color"),(0,a.kt)("p",null,"The v10 color token architecture is based on the v9 architecture, with some\nminor changes to align with the design language. Carbon v9 product teams will\nsee automatic, non-breaking color updates when they upgrade to v10."),(0,a.kt)(p,{className:"resource-card-group",mdxType:"Row"},(0,a.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(g,{subTitle:"Migrate color",href:"https://github.com/carbon-design-system/carbon/blob/v10/docs/migration/10.x-color.md",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"github",mdxType:"MdxIcon"}))),(0,a.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(g,{subTitle:"Primary token-value mapping",href:"https://carbon-elements.netlify.com/colors/examples/preview/",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"github",mdxType:"MdxIcon"}))),(0,a.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(g,{subTitle:"Themes token-value mapping",href:"https://carbon-elements.netlify.com/themes/examples/preview/",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"github",mdxType:"MdxIcon"})))),(0,a.kt)("h3",null,"Type"),(0,a.kt)("p",null,"The type token architecture was redesigned for better clarity and flexibility.\nV10 moves from a basic type scale model to a more robust token-based\narchitecture."),(0,a.kt)(p,{className:"resource-card-group",mdxType:"Row"},(0,a.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(g,{subTitle:"Migrate type",href:"https://github.com/carbon-design-system/carbon/blob/v10/docs/migration/10.x-type.md",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"github",mdxType:"MdxIcon"}))),(0,a.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(g,{subTitle:"Type styles demo",href:"https://carbon-elements.netlify.com/type/examples/preview/",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"github",mdxType:"MdxIcon"})))),(0,a.kt)("h3",null,"Layout, grid, and spacing"),(0,a.kt)("p",null,"Token names changed in v10 but spacing values did not."),(0,a.kt)(p,{className:"resource-card-group",mdxType:"Row"},(0,a.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(g,{subTitle:"Migrate the grid",href:"https://github.com/carbon-design-system/carbon/blob/v10/packages/components/src/globals/grid/migrate-to-10.x.md",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"github",mdxType:"MdxIcon"}))),(0,a.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(g,{subTitle:"Migrate layout",href:"https://github.com/carbon-design-system/carbon/blob/v10/docs/migration/10.x-layout.md",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"github",mdxType:"MdxIcon"}))),(0,a.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(g,{subTitle:"Interactive grid examples",href:"https://carbon-elements.netlify.com/grid/examples/preview/",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"github",mdxType:"MdxIcon"})))),(0,a.kt)("h3",null,"Motion"),(0,a.kt)("p",null,"Carbon adheres to IBM Design Language motion standards. Motion updates should be\ncoordinated with your product’s design team."),(0,a.kt)(p,{className:"resource-card-group",mdxType:"Row"},(0,a.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(g,{subTitle:"IBM motion package",href:"https://github.com/carbon-design-system/carbon/tree/v10/packages/motion",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"github",mdxType:"MdxIcon"}))),(0,a.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(g,{subTitle:"Migrate motion",href:"https://github.com/carbon-design-system/carbon/blob/v10/docs/migration/10.x-motion.md",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"github",mdxType:"MdxIcon"})))))}y.isMDXComponent=!0}}]);