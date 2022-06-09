"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[90334],{28399:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(67294),l=a(88650),s=a.n(l),o=a(1597),r=a(64905),i=a(81151),c=a(75900),m=a.n(c);var p=e=>{let{title:t,theme:a,tabs:l=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var d=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:l}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:r,branch:i}=a||l,c=`${s}/edit/${i}${r}/src/pages${t}`;return s?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=a(56328),g=a(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),r=t===l,i=new RegExp(`${l}/?(#.*)?$`),c=a.replace(i,t);return n.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":r},"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},t}(n.Component);var b=h,k=a(17680),f=a(75387),y=a(50041);var A=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var N=e=>{let{pageContext:t,children:a,location:l,Title:c}=e;const{frontmatter:m={},relativePagePath:g,titleType:h}=t,{tabs:y,title:N,theme:w,description:v,keywords:E,date:S}=m,{interiorTheme:x}=(0,f.Z)(),{site:{pathPrefix:T}}=(0,o.useStaticQuery)("2456312558"),C=T?l.pathname.replace(T,""):l.pathname,L=y?C.split("/").filter(Boolean).slice(-1)[0]||s()(y[0],{lower:!0}):"",B=w||x;return n.createElement(i.Z,{tabs:y,homepage:!1,theme:B,pageTitle:N,pageDescription:v,pageKeywords:E,titleType:h},n.createElement(p,{title:c?n.createElement(c,null):N,label:"label",tabs:y,theme:B}),y&&n.createElement(b,{title:N,slug:C,tabs:y,currentTab:L}),n.createElement(k.Z,{padded:!0},a,n.createElement(d,{relativePagePath:g}),n.createElement(A,{date:S})),n.createElement(u.Z,{pageContext:t,location:l,slug:C,tabs:y,currentTab:L}),n.createElement(r.Z,null))}},23126:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return f}});var n=a(45987),l=(a(67294),a(64983)),s=a(28399);const o=["components"],r={},i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},c=i("PageDescription"),m=i("AnchorLinks"),p=i("AnchorLink"),d=i("ComponentDemo"),u=i("ComponentVariant"),g=i("Row"),h=i("Column"),b={_frontmatter:r},k=s.Z;function f(e){let{components:t}=e,a=(0,n.Z)(e,o);return(0,l.kt)(k,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"title: Select\ndescription:\nThe select component allows users to choose one option from a list. It is used\nin forms for users to submit data.\ntabs: ","[‘Usage’, ‘Style’, ‘Code’, ‘Accessibility’]"),(0,l.kt)(c,{mdxType:"PageDescription"},(0,l.kt)("p",null,"The select component allows users to choose one option from a list. It is used\nin forms for users to submit data.")),(0,l.kt)(m,{mdxType:"AnchorLinks"},(0,l.kt)(p,{mdxType:"AnchorLink"},"Overview"),(0,l.kt)(p,{mdxType:"AnchorLink"},"Live demo"),(0,l.kt)(p,{mdxType:"AnchorLink"},"Variants"),(0,l.kt)(p,{mdxType:"AnchorLink"},"Best practices"),(0,l.kt)(p,{mdxType:"AnchorLink"},"Accessibility"),(0,l.kt)(p,{mdxType:"AnchorLink"},"Feedback")),(0,l.kt)("h2",null,"Overview"),(0,l.kt)("p",null,"Select is a type of input that is used in forms, where a user is submitting data\nand chooses one option from a list."),(0,l.kt)("h3",null,"Select versus Dropdown"),(0,l.kt)("p",null,"While the select and dropdown components look similar, they have different\nfunctions."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use the select component inside a form where users are selecting from a list\nof options and submitting data."),(0,l.kt)("li",{parentName:"ul"},"Use the dropdown component to filter or sort content on a page.")),(0,l.kt)("p",null,"Another important difference between the two components is the underlying code.\nThe select component’s appearance will be determined by the browser being used,\nwhile the dropdown component can be styled as needed."),(0,l.kt)("h2",null,"Live demo"),(0,l.kt)(d,{components:[{id:"select",label:"Select"}],mdxType:"ComponentDemo"},(0,l.kt)(u,{id:"select",knobs:{Select:["disabled","inline","invalid","light"],SelectItem:["disabled","hidden"],SelectItemGroup:["disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-select--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-select--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvselect--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-select--default"},mdxType:"ComponentVariant"},'\n<Select\n  defaultValue="placeholder-item"\n  helperText="Optional helper text"\n  id="select-1"\n  invalidText="A valid value is required"\n  labelText="Select"\n>\n  <SelectItem\n    text="Choose an option"\n    value="placeholder-item"\n  />\n  <SelectItemGroup\n    label="Category 1"\n  >\n    <SelectItem\n      text="Option 1"\n      value="option-1"\n    />\n    <SelectItem\n      text="Option 2"\n      value="option-2"\n    />\n  </SelectItemGroup>\n  <SelectItemGroup\n    label="Category 2"\n  >\n    <SelectItem\n      text="Option 3"\n      value="option-3"\n    />\n    <SelectItem\n      text="Option 4"\n      value="option-4"\n    />\n  </SelectItemGroup>\n</Select>\n  ')),(0,l.kt)("h2",null,"Variants"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variant"),(0,l.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},"Typically used in forms with a variety of other components.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Small select")),(0,l.kt)("td",{parentName:"tr",align:null},"When vertical space is a concern, or select is being paired with a larger component like ",(0,l.kt)("a",{parentName:"td",href:"/components/data-table/usage"},"data tables"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Inline select")),(0,l.kt)("td",{parentName:"tr",align:null},"When multiple selects are grouped together.")))),(0,l.kt)("h4",null,"Small select"),(0,l.kt)("p",null,"Small selects are commonly used in ",(0,l.kt)("a",{parentName:"p",href:"/components/data-table/usage"},"data tables"),".\nWhen using a small select for a number selection, the increments in the select\nshould be 10, 25, 50 and 100. The maximum amount of items a user can see per\npage is 100."),(0,l.kt)(g,{mdxType:"Row"},(0,l.kt)(h,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABPklEQVQoz2WSTWrDMBBGRbJoFyVN3Z8ctDfoHQq9RC/STdaFlLixFw4JHo0UxpKSzpQRtiGJ4KHRJ/Q0AhljjAEAY63NXNZt247ZsF4ul+Z4PBoReWVmEZEk/VDf5aEZACwA4Llt25cBADijaZo5M3+phJlPZ0LnnIomKkXEDwDwAPCLiLVzLgMAY22tzcQYuRfyldBaO9UOEfETAERBRHHOZay1efbe51z3Qwh84TvrcNo/OwtVMEgHgWYDvVAdJ2b+E5FMFnrvTVVVk6qqzG63e6/rut1sNqu6rsvtdlsiYrnf78umaUYQ8SfG6PonX3cYY8wQ0R0RPRLRQwihiDEWzrmCiApdp5SKruue1uv1DTO/iUjDzN8islLGDlNKGSIyIYSMXqCzXjjkmnVdZw6Hg36bW2aei8hMRO6VfzYh/Zp5ZnabAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a small select",title:"Example of a small select",src:"/static/507c49e5464a887be38252d0acbd577b/3cbba/select-usage-3.png",srcSet:["/static/507c49e5464a887be38252d0acbd577b/7fc1e/select-usage-3.png 288w","/static/507c49e5464a887be38252d0acbd577b/a5df1/select-usage-3.png 576w","/static/507c49e5464a887be38252d0acbd577b/3cbba/select-usage-3.png 1152w","/static/507c49e5464a887be38252d0acbd577b/392b1/select-usage-3.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)("h4",null,"Inline select"),(0,l.kt)("p",null,"Inline select is useful when you have multiple select fields within a form.\nInline selects have less visual weight on a page because they are borderless."),(0,l.kt)(g,{mdxType:"Row"},(0,l.kt)(h,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAA70lEQVQY032Pu07EMBBFx0hUG6j4BgpWW9Hw/902SSQ+IAF77fiBPXbiOKmCbAkpIIUjnWKk6+sZgB3btu0l2RgjMcaQEAKx1hLnHEFEMk0TxBhhHEc45E9hMYQAxpjy0FoLiAjee0gpwbqupfSQpml+vK/r+rVt2zdK6QURz+M4vjjnzt77SwjhOaV0tyzL/4X5nByY5/lJKfVujJFSyk+l1OCc+5BScq31l7X2ioiPeft8/mEh5xwYY1kyDMOJc15prSulVCWEqBhj2Qel1KnrOuj7vuQPkVL+UggBWutinm+3W/k0z5TSUpYze74BTBXyP8T1WRYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a small select",title:"Example of a small select",src:"/static/0e7f91451e6f36cb66a8f1146a776832/3cbba/select-usage-4.png",srcSet:["/static/0e7f91451e6f36cb66a8f1146a776832/7fc1e/select-usage-4.png 288w","/static/0e7f91451e6f36cb66a8f1146a776832/a5df1/select-usage-4.png 576w","/static/0e7f91451e6f36cb66a8f1146a776832/3cbba/select-usage-4.png 1152w","/static/0e7f91451e6f36cb66a8f1146a776832/392b1/select-usage-4.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)("h2",null,"Best practices"),(0,l.kt)("h3",null,"Labels"),(0,l.kt)("p",null,"Labels are essential to the usability of forms. Do not place a label inside a\n",(0,l.kt)("em",{parentName:"p"},"select")," element. Use sentence case and no more than three words."),(0,l.kt)("h3",null,"Validation"),(0,l.kt)("p",null,"Real-time validation helps to streamline the process and keep data clean when\nthe user is filling out forms. For full guidelines, refer to the\n",(0,l.kt)("a",{parentName:"p",href:"/components/form/usage"},"forms")," usage page."),(0,l.kt)(g,{mdxType:"Row"},(0,l.kt)(h,{colLg:8,mdxType:"Column"},(0,l.kt)("img",{src:"/ac25f08af4d2bd0cf92a44d6ab386003/select-usage-1.gif",alt:"Select invalid state"}))),(0,l.kt)("h3",null,"Order"),(0,l.kt)("p",null,"The order of the select list should be based on the frequency of use. If\napplicable, the list should be in increasing order relative to the content. In\ncases of forms, alternative orders such as alphabetical may be more fitting. A\nhorizontal rule can be used to group similar items together."),(0,l.kt)("h2",null,"Accessibility"),(0,l.kt)("h3",null,"Styling select dropdowns"),(0,l.kt)("p",null,"To maximize accessibility, it is strongly recommended not to style select\ndropdowns. One of the\n",(0,l.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG20-TECHS/G202.html"},"WCAG 2.0 standards")," for\naccessibility is “ensuring keyboard control for all functionality”. CSS\nalternatives to select elements do not meet this requirement."),(0,l.kt)("p",null,"While you can make a select element easily usable by a mouse, making it usable\nwith keyboard navigation is complex. The default select element should follow\nthis process:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"State"),(0,l.kt)("th",{parentName:"tr",align:null},"Mouse"),(0,l.kt)("th",{parentName:"tr",align:null},"Keyboard"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},":hover")),(0,l.kt)("td",{parentName:"tr",align:null},"move your cursor over the select element"),(0,l.kt)("td",{parentName:"tr",align:null},"use the tab key to focus the select element")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},":focus")),(0,l.kt)("td",{parentName:"tr",align:null},"click on the select element"),(0,l.kt)("td",{parentName:"tr",align:null},"press enter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},":")),(0,l.kt)("td",{parentName:"tr",align:null},"move your cursor over the desired option"),(0,l.kt)("td",{parentName:"tr",align:null},"use the top and bottom arrow keys to pick an option")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},":select"),(0,l.kt)("td",{parentName:"tr",align:null},"click on the desired option"),(0,l.kt)("td",{parentName:"tr",align:null},"press enter")))),(0,l.kt)("h2",null,"Feedback"),(0,l.kt)("p",null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"},"GitHub"),"."))}f.isMDXComponent=!0}}]);