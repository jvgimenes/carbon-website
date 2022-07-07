"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[946],{28399:function(e,t,r){r.d(t,{Z:function(){return w}});var n=r(67294),s=r(88650),a=r.n(s),i=r(1597),o=r(64905),l=r(81151),d=r(75900),c=r.n(d);var u=e=>{let{title:t,theme:r,tabs:s=[]}=e;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":s.length,"PageHeader-module--dark-mode--WCeH8":"dark"===r})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:r}=e;const{site:{siteMetadata:{repository:s}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:a,subDirectory:o,branch:l}=r||s,d=`${a}/edit/${l}${o}/src/pages${t}`;return a?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},p=r(56328),h=r(51721);let k=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:r}=this.props,s=r.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=a()(e,{lower:!0,strict:!0}),o=t===s,l=new RegExp(`${s}/?(#.*)?$`),d=r.replace(l,t);return n.createElement("li",{key:e,className:c()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${d}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(n.Component);var g=k,y=r(17680),L=r(75387),b=r(50041);var S=e=>{let{date:t}=e;const r=new Date(t);return t?n.createElement(b.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(b.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",r.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:r,location:s,Title:d}=e;const{frontmatter:c={},relativePagePath:h,titleType:k}=t,{tabs:b,title:w,theme:T,description:x,keywords:f,date:C}=c,{interiorTheme:v}=(0,L.Z)(),{site:{pathPrefix:A}}=(0,i.useStaticQuery)("2456312558"),R=A?s.pathname.replace(A,""):s.pathname,I=b?R.split("/").filter(Boolean).slice(-1)[0]||a()(b[0],{lower:!0}):"",N=T||v;return n.createElement(l.Z,{tabs:b,homepage:!1,theme:N,pageTitle:w,pageDescription:x,pageKeywords:f,titleType:k},n.createElement(u,{title:d?n.createElement(d,null):w,label:"label",tabs:b,theme:N}),b&&n.createElement(g,{title:w,slug:R,tabs:b,currentTab:I}),n.createElement(y.Z,{padded:!0},r,n.createElement(m,{relativePagePath:h}),n.createElement(S,{date:C})),n.createElement(p.Z,{pageContext:t,location:s,slug:R,tabs:b,currentTab:I}),n.createElement(o.Z,null))}},17113:function(e,t,r){r.r(t),r.d(t,{_frontmatter:function(){return l},default:function(){return g}});var n=r(45987),s=(r(67294),r(64983)),a=r(28399),i=r(36569);const o=["components"],l={},d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},c=d("AnchorLinks"),u=d("AnchorLink"),m=d("Row"),p=d("Column"),h={_frontmatter:l},k=a.Z;function g(e){let{components:t}=e,r=(0,n.Z)(e,o);return(0,s.kt)(k,Object.assign({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(c,{mdxType:"AnchorLinks"},(0,s.kt)(u,{mdxType:"AnchorLink"},"How it works"),(0,s.kt)(u,{mdxType:"AnchorLink"},"Accessibility considerations"),(0,s.kt)(u,{mdxType:"AnchorLink"},"Resources"),(0,s.kt)(u,{mdxType:"AnchorLink"},"Accessibility testing")),(0,s.kt)("h2",null,"How it works"),(0,s.kt)("p",null,"The toggle Carbon component is a control that uses a two state checkbox commonly\nused to switch between two possible states such as on or off. The Tab key is\nused to move focus to each toggle control. Either the Enter or Space key can be\nused to toggle between a checked or unchecked positions. The ARIA state\n",(0,s.kt)("inlineCode",{parentName:"p"},'aria-checked="true"')," is set when the toggle switch is checked or in the on\nposition. When the toggle component is unchecked or in the off position, the\nARIA state is set to ",(0,s.kt)("inlineCode",{parentName:"p"},'aria-checked="false"'),". A toggle component identified as\ndisabled is ignored in the tab order."),(0,s.kt)("h2",null,"Accessibility considerations"),(0,s.kt)("p",null,"This component has been validated to meet the\n",(0,s.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG20/"},"WCAG 2.0 AA")," and\n",(0,s.kt)("a",{parentName:"p",href:"http://www.section508.gov/"},"Section 508")," accessibility guidelines, however\nchanges made by the content owner can affect accessibility compliance. Be sure\nto review and follow the guidance in this section when updating or adding new\ncontent to this component."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Each toggle control should have a clear and concise label."),(0,s.kt)("li",{parentName:"ol"},"Users should be warned if selecting a toggle component will cause a change in\ncontext."),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"id")," for each component must be unique when more then one Carbon toggle\ncomponent is present on a Web page."),(0,s.kt)("li",{parentName:"ol"},"If the toggle is a required field include the\n",(0,s.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/ARIA2.html"},"aria-required property")," and\nindicate that it is a required field and use the validation message for input\nerrors.")),(0,s.kt)("h2",null,"Resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices/#accordion"},"W3C WAI-ARIA Authoring Practices Accordion Design Pattern"),"\ncovers the usage of ARIA names, state and roles, as well as the expected\nkeyboard interactions."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/"},"IBM Accessibility Requirements:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#1_3_1"},"1.3.1 Info and Relationships"),"\n(WCAG Success Criteria\n",(0,s.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},"1.3.1"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#2_4_6"},"2.4.6 Headings and Labels"),"\n(WCAG Success Criteria\n",(0,s.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels"},"2.4.6"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#3_2_2"},"3.2.2 On Input"),"\n(WCAG Success Criteria\n",(0,s.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/on-input"},"3.2.2"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#4_1_2"},"4.1.2 Name, Role, Value"),"\n(WCAG Success Criteria\n",(0,s.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html"},"4.1.2"),")")))),(0,s.kt)("h2",null,"Accessibility testing"),(0,s.kt)("p",null,"Accessibility issues are tracked in the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/issues?q=is%3Aopen+label%3A%22type%3A+a11y+%E2%99%BF%22+label%3A%22component%3A+toggle%22+"},"Carbon Component GitHub repository"),"."),(0,s.kt)("h3",null,"Automated test"),(0,s.kt)(m,{mdxType:"Row"},(0,s.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,s.kt)(i.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,s.kt)(i.StructuredListHead,{mdxType:"StructuredListHead"},(0,s.kt)(i.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,s.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),(0,s.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,s.kt)(i.StructuredListBody,{mdxType:"StructuredListBody"},(0,s.kt)(i.StructuredListRow,{mdxType:"StructuredListRow"},(0,s.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,s.kt)("br",null),"- Chrome version 77.0.3865.90",(0,s.kt)("br",null),"- Dynamic Assessment Plugin (DAP) version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",(0,s.kt)("br",null),"- Carbon React version 7.7.1"),(0,s.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},(0,s.kt)("strong",null,"DAP test:"),(0,s.kt)("br",null),"- No violations")))))),(0,s.kt)("h3",null,"macOS screen reader tests"),(0,s.kt)(m,{mdxType:"Row"},(0,s.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,s.kt)(i.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,s.kt)(i.StructuredListHead,{mdxType:"StructuredListHead"},(0,s.kt)(i.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,s.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,s.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,s.kt)(i.StructuredListBody,{mdxType:"StructuredListBody"},(0,s.kt)(i.StructuredListRow,{mdxType:"StructuredListRow"},(0,s.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,s.kt)("br",null),"- Chrome version 77.0.3865.90",(0,s.kt)("br",null),"- Carbon React version 7.7.1"),(0,s.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},(0,s.kt)("strong",null,"VoiceOver(VO) Test:"),(0,s.kt)(i.OrderedList,{mdxType:"OrderedList"},(0,s.kt)(i.ListItem,{mdxType:"ListItem"},"Press the Tab key to navigate to the first toggle component. VO announces the label as Off, the state as unchecked, and that it is a checkbox."),(0,s.kt)(i.ListItem,{mdxType:"ListItem"},"Press the Space key to change the state of the toggle component On and Off."),(0,s.kt)(i.ListItem,{mdxType:"ListItem"},"Press the Tab key to navigate to the labeled toggle component. VO announces the label as Off, the state as unchecked, that it is a checkbox and the label."),(0,s.kt)(i.ListItem,{mdxType:"ListItem"},"Press the Tab key and the disabled toggle component is skipped."),(0,s.kt)(i.ListItem,{mdxType:"ListItem"},"Control-Option-Left arrow key back to the disabled toggle component. VO announces that it is a disabled checkbox, dimmed unchecked checkbox.")))),(0,s.kt)(i.StructuredListRow,{mdxType:"StructuredListRow"},(0,s.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,s.kt)("br",null),"- Safari version 13.0.2",(0,s.kt)("br",null),"- Carbon React version 7.7.1"),(0,s.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},(0,s.kt)("strong",null,"VoiceOver(VO) test:"),(0,s.kt)(i.OrderedList,{mdxType:"OrderedList"},(0,s.kt)(i.ListItem,{mdxType:"ListItem"},"Press the Tab key to navigate to the first toggle component. VO announces the label as off, the state as unchecked, and that it is a checkbox."),(0,s.kt)(i.ListItem,{mdxType:"ListItem"},"Press the Space key to change the state of the toggle component on and off."),(0,s.kt)(i.ListItem,{mdxType:"ListItem"},"Press the Tab key to navigate to the labeled toggle component. VO announces the label as off, the state as unchecked, that it is a checkbox and the label."),(0,s.kt)(i.ListItem,{mdxType:"ListItem"},"Press the Tab key and the disabled toggle component is skipped."),(0,s.kt)(i.ListItem,{mdxType:"ListItem"},"Control-Option-Left arrow key back to the disabled toggle component. VO announces that it is an off, dimmed unchecked checkbox.")))))))),(0,s.kt)("h3",null,"Windows screen reader tests"),(0,s.kt)(m,{mdxType:"Row"},(0,s.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,s.kt)(i.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,s.kt)(i.StructuredListHead,{mdxType:"StructuredListHead"},(0,s.kt)(i.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,s.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment"),(0,s.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,s.kt)(i.StructuredListBody,{mdxType:"StructuredListBody"},(0,s.kt)(i.StructuredListRow,{mdxType:"StructuredListRow"},(0,s.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",(0,s.kt)("br",null),"- JAWS 19.1810.64",(0,s.kt)("br",null),"- Chrome version 73.0.3683.103 (Official Build) (64-bit)",(0,s.kt)("br",null),"- Carbon React version 7.7.1"),(0,s.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},(0,s.kt)("strong",null,"JAWS test:"),(0,s.kt)(i.OrderedList,{mdxType:"OrderedList"},(0,s.kt)(i.ListItem,{mdxType:"ListItem"},"Navigate among the toggle component by pressing the Tab and Shift-Tab keys, or X and Shift+X keys to jump to next or previous checkboxes."),(0,s.kt)(i.ListItem,{mdxType:"ListItem"},"When navigating to a toggle, JAWS announces the label, checkbox, and the status of the checkbox."),(0,s.kt)(i.ListItem,{mdxType:"ListItem"},'Disabled toggle components can only be found by using the Up and Down Arrow keys, when JAWS announces "disabled checkbox checkbox unchecked unavailable".'),(0,s.kt)(i.ListItem,{mdxType:"ListItem"},"Press the Space key to select or deselect the toggle. JAWS announces the status of checked or unchecked.")))),(0,s.kt)(i.StructuredListRow,{mdxType:"StructuredListRow"},(0,s.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",(0,s.kt)("br",null),"- NVDA version 2018.4.1",(0,s.kt)("br",null),"- Chrome version 72.0.3683.103 (Official Build) (64-bit)",(0,s.kt)("br",null),"- Carbon React version 7.7.1"),(0,s.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},(0,s.kt)("strong",null,"NVDA test:"),(0,s.kt)(i.OrderedList,{mdxType:"OrderedList"},(0,s.kt)(i.ListItem,{mdxType:"ListItem"},"Navigate among the toggle components by pressing the Tab and Shift-Tab keys, or X and Shift+X keys to jump to next or previous checkboxes."),(0,s.kt)(i.ListItem,{mdxType:"ListItem"},"When navigating to a toggle, NVDA announces the label, checkbox, and the status of the checkbox, but repeats the information twice."),(0,s.kt)(i.ListItem,{mdxType:"ListItem"},'Disabled toggle components can only be found by using the Up and Down Arrow keys, or the the X and Shift+X keys. NVDA announces "checkbox unavailable not checked disabled checkbox".'),(0,s.kt)(i.ListItem,{mdxType:"ListItem"},"Press the Space or Enter key to select or deselect the toggle. NVDA announces the status of checked or unchecked.")))))))),(0,s.kt)("h3",null,"iOS screen reader tests"),(0,s.kt)(m,{mdxType:"Row"},(0,s.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,s.kt)(i.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,s.kt)(i.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,s.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,s.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results")),(0,s.kt)(i.StructuredListBody,{mdxType:"StructuredListBody"},(0,s.kt)(i.StructuredListRow,{mdxType:"StructuredListRow"},(0,s.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},"- iOS version 13.1.3 with VoiceOver",(0,s.kt)("br",null),"- Safari version 13.1.3",(0,s.kt)("br",null),"- Carbon React version 7.7.1"),(0,s.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},(0,s.kt)("strong",null,"VoiceOver test:"),(0,s.kt)(i.OrderedList,{mdxType:"OrderedList"},(0,s.kt)(i.ListItem,{mdxType:"ListItem"},"Navigate to the toggle components by swiping left or right, or press the Left or Right Arrow keys when quick navigation is turned on. VO announces,the label, field type, and the status of the checkbox."),(0,s.kt)(i.ListItem,{mdxType:"ListItem"},"When tapping on a toggle, or pressing VO+Space, VoiceOver announces the new status of the toggle component as checked or unchecked.")))))))),(0,s.kt)("h3",null,"Android screen reader tests"),(0,s.kt)(m,{mdxType:"Row"},(0,s.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,s.kt)(i.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,s.kt)(i.StructuredListHead,{mdxType:"StructuredListHead"},(0,s.kt)(i.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,s.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,s.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,s.kt)(i.StructuredListBody,{mdxType:"StructuredListBody"},(0,s.kt)(i.StructuredListRow,{mdxType:"StructuredListRow"},(0,s.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},"- Android version 9 with Talkback",(0,s.kt)("br",null),"- Chrome version 72.0.3683.103 (Official Build) (64-bit)",(0,s.kt)("br",null),"- Carbon React version 7.7.1"),(0,s.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},(0,s.kt)("strong",null,"Talkback test:"),(0,s.kt)(i.OrderedList,{mdxType:"OrderedList"},(0,s.kt)(i.ListItem,{mdxType:"ListItem"},"Navigate to the toggle components by swiping left or right, or press the Left or Right Arrow keys. Talkback announces,the label, field type, and the status of the checkbox."),(0,s.kt)(i.ListItem,{mdxType:"ListItem"},"When tapping on a toggle, or pressing the Alt-Enter keys, Talkback announces the new status of the toggle component as checked or not checked.")))))))))}g.isMDXComponent=!0}}]);