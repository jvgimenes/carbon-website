"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[5046],{28399:function(e,t,n){n.d(t,{Z:function(){return L}});var a=n(67294),s=n(88650),r=n.n(s),i=n(1597),l=n(64905),o=n(81151),d=n(75900),m=n.n(d);var c=e=>{let{title:t,theme:n,tabs:s=[]}=e;return a.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":s.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:s}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:l,branch:o}=n||s,d=`${r}/edit/${o}${l}/src/pages${t}`;return r?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},u=n(56328),g=n(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,s=n.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),l=t===s,o=new RegExp(`${s}/?(#.*)?$`),d=n.replace(o,t);return a.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},a.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${d}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(a.Component);var h=b,k=n(17680),y=n(75387),f=n(50041);var v=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(f.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var L=e=>{let{pageContext:t,children:n,location:s,Title:d}=e;const{frontmatter:m={},relativePagePath:g,titleType:b}=t,{tabs:f,title:L,theme:A,description:w,keywords:E,date:N}=m,{interiorTheme:x}=(0,y.Z)(),{site:{pathPrefix:I}}=(0,i.useStaticQuery)("2456312558"),T=I?s.pathname.replace(I,""):s.pathname,C=f?T.split("/").filter(Boolean).slice(-1)[0]||r()(f[0],{lower:!0}):"",P=A||x;return a.createElement(o.Z,{tabs:f,homepage:!1,theme:P,pageTitle:L,pageDescription:w,pageKeywords:E,titleType:b},a.createElement(c,{title:d?a.createElement(d,null):L,label:"label",tabs:f,theme:P}),f&&a.createElement(h,{title:L,slug:T,tabs:f,currentTab:C}),a.createElement(k.Z,{padded:!0},n,a.createElement(p,{relativePagePath:g}),a.createElement(v,{date:N})),a.createElement(u.Z,{pageContext:t,location:s,slug:T,tabs:f,currentTab:C}),a.createElement(l.Z,null))}},74445:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return y}});var a=n(45987),s=(n(67294),n(64983)),r=n(28399);const i=["components"],l={},o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},d=o("PageDescription"),m=o("AnchorLinks"),c=o("AnchorLink"),p=o("ComponentDemo"),u=o("ComponentVariant"),g=o("Row"),b=o("Column"),h={_frontmatter:l},k=r.Z;function y(e){let{components:t}=e,n=(0,a.Z)(e,i);return(0,s.kt)(k,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"title: List\ndescription:\nLists are vertical groupings of related content. List items begin with either\na number or a bullet.\ntabs: ","[‘Usage’, ‘Style’, ‘Code’, ‘Accessibility’]"),(0,s.kt)(d,{mdxType:"PageDescription"},(0,s.kt)("p",null,"Lists are vertical groupings of related content. List items begin with either a\nnumber or a bullet.")),(0,s.kt)(m,{mdxType:"AnchorLinks"},(0,s.kt)(c,{mdxType:"AnchorLink"},"Overview"),(0,s.kt)(c,{mdxType:"AnchorLink"},"Live demo"),(0,s.kt)(c,{mdxType:"AnchorLink"},"Variants"),(0,s.kt)(c,{mdxType:"AnchorLink"},"Content"),(0,s.kt)(c,{mdxType:"AnchorLink"},"Feedback")),(0,s.kt)("h2",null,"Overview"),(0,s.kt)("p",null,"Lists consist of related content grouped together and organized vertically."),(0,s.kt)("p",null,"Use bulleted lists when you don’t need to convey a specific order for list\nitems."),(0,s.kt)("p",null,"Use numbered lists when you need to convey a priority, hierarchy, or sequence\nbetween list items."),(0,s.kt)("h2",null,"Live demo"),(0,s.kt)(p,{components:[{id:"ordered",label:"Ordered list"},{id:"unordered",label:"Unordered list"}],mdxType:"ComponentDemo"},(0,s.kt)(u,{id:"ordered",links:{React:"https://react.carbondesignsystem.com/?path=/story/components-orderedlist--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-list--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvlist--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-list--ordered"},mdxType:"ComponentVariant"},"\n    <OrderedList>\n      <ListItem>\n        Ordered list level 1\n      </ListItem>\n      <ListItem>\n        Ordered list level 1\n        <OrderedList nested>\n          <ListItem>\n            Ordered list level 2\n          </ListItem>\n          <ListItem>\n            Ordered list level 2\n          </ListItem>\n          <ListItem>\n            Ordered list level 2\n          </ListItem>\n        </OrderedList>\n      </ListItem>\n      <ListItem>\n        Ordered list level 1\n      </ListItem>\n    </OrderedList>\n  "),(0,s.kt)(u,{id:"unordered",links:{React:"https://react.carbondesignsystem.com/?path=/story/components-unorderedlist--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-list--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvlist--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-list--unordered"},mdxType:"ComponentVariant"},"\n      <UnorderedList>\n        <ListItem>\n          Unordered list level 1\n        </ListItem>\n        <ListItem>\n          Unordered list level 1\n          <UnorderedList nested>\n            <ListItem>\n              Unordered list level 2\n            </ListItem>\n            <ListItem>\n              Unordered list level 2\n            </ListItem>\n            <ListItem>\n              Unordered list level 2\n            </ListItem>\n          </UnorderedList>\n        </ListItem>\n        <ListItem>\n          Unordered list level 1\n        </ListItem>\n      </UnorderedList>\n  ")),(0,s.kt)("h2",null,"Variants"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Variant"),(0,s.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Unordered lists"),(0,s.kt)("td",{parentName:"tr",align:null},"To present content of equal status or value.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Ordered lists"),(0,s.kt)("td",{parentName:"tr",align:null},"Imply sequence and order, and are commonly used when giving a set of instructions.")))),(0,s.kt)("h2",null,"Content"),(0,s.kt)("h4",null,"Length"),(0,s.kt)("p",null,"Generally, lists should be used to present simple pieces of information. For\nmore complex sets of data, consider using a\n",(0,s.kt)("a",{parentName:"p",href:"/components/data-table/usage"},"data table"),"."),(0,s.kt)("h4",null,"Order"),(0,s.kt)("p",null,"Arrange list items in a logical way. For example, if the list is about resource\nuse, the default order might be highest resource use to lowest. Grouping items\nin categories into smaller, more specific lists might be more meaningful in some\ncontexts. Alternatively, organize in alphabetical or numeric order."),(0,s.kt)("h4",null,"Text"),(0,s.kt)("p",null,"Use list items that are grammatically parallel. For example, do not mix passive\nvoice with active voice or declarative sentences (statements) with imperative\nsentences (direct command)."),(0,s.kt)(g,{mdxType:"Row"},(0,s.kt)(b,{colLg:8,mdxType:"Column"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAgklEQVQoz7XSywqDMBBAURWp1i5qF82dPFpo/v8jJXbqIuiiCQ5c4iaHkNg0OwOsGWO277y/5jQQeAACGL4zVIEicgEm4Kq1RaCIrMUYE/AEPsAbuFWBIYReoajNRff42+CcGwGfQ8Wg9z6BL32Qu8JDzQnT2mm91haD1trD//AIXAAQTxvxOdpD8gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a list",title:"Example of a list",src:"/static/d39c797afefd0f33c1a09e8517af24ab/3cbba/list-usage-1.png",srcSet:["/static/d39c797afefd0f33c1a09e8517af24ab/7fc1e/list-usage-1.png 288w","/static/d39c797afefd0f33c1a09e8517af24ab/a5df1/list-usage-1.png 576w","/static/d39c797afefd0f33c1a09e8517af24ab/3cbba/list-usage-1.png 1152w","/static/d39c797afefd0f33c1a09e8517af24ab/392b1/list-usage-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,s.kt)("h2",null,"Feedback"),(0,s.kt)("p",null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"},"GitHub"),"."))}y.isMDXComponent=!0}}]);