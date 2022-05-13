"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[69322],{28399:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(67294),s=a(88650),i=a.n(s),l=a(1597),o=a(64905),r=a(68636),c=a(75900),p=a.n(c);var d=e=>{let{title:t,theme:a,tabs:s=[]}=e;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":s.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:s}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:o,branch:r}=a||s,c=`${i}/edit/${r}${o}/src/pages${t}`;return i?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=a(56328),g=a(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,s=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=i()(e,{lower:!0,strict:!0}),o=t===s,r=new RegExp(`${s}/?(#.*)?$`),c=a.replace(r,t);return n.createElement("li",{key:e,className:p()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(n.Component);var h=b,f=a(17680),x=a(75387),A=a(50041);var k=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(A.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(A.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var y=e=>{let{pageContext:t,children:a,location:s,Title:c}=e;const{frontmatter:p={},relativePagePath:g,titleType:b}=t,{tabs:A,title:y,theme:v,description:w,keywords:E,date:T}=p,{interiorTheme:N}=(0,x.Z)(),{site:{pathPrefix:R}}=(0,l.useStaticQuery)("2456312558"),C=R?s.pathname.replace(R,""):s.pathname,L=A?C.split("/").filter(Boolean).slice(-1)[0]||i()(A[0],{lower:!0}):"",P=v||N;return n.createElement(r.Z,{tabs:A,homepage:!1,theme:P,pageTitle:y,pageDescription:w,pageKeywords:E,titleType:b},n.createElement(d,{title:c?n.createElement(c,null):y,label:"label",tabs:A,theme:P}),A&&n.createElement(h,{title:y,slug:C,tabs:A,currentTab:L}),n.createElement(f.Z,{padded:!0},a,n.createElement(m,{relativePagePath:g}),n.createElement(k,{date:T})),n.createElement(u.Z,{pageContext:t,location:s,slug:C,tabs:A,currentTab:L}),n.createElement(o.Z,null))}},59509:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return x}});var n=a(45987),s=(a(67294),a(64983)),i=a(28399);const l=["components"],o={},r=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},c=r("PageDescription"),p=r("AnchorLinks"),d=r("AnchorLink"),m=r("ComponentDemo"),u=r("ComponentVariant"),g=r("Row"),b=r("Column"),h={_frontmatter:o},f=i.Z;function x(e){let{components:t}=e,a=(0,n.Z)(e,l);return(0,s.kt)(f,Object.assign({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(c,{mdxType:"PageDescription"},(0,s.kt)("p",null,"Text inputs enable the user to interact with and input content and data. This\ncomponent can be used for long and short form entries.")),(0,s.kt)(p,{mdxType:"AnchorLinks"},(0,s.kt)(d,{mdxType:"AnchorLink"},"Overview"),(0,s.kt)(d,{mdxType:"AnchorLink"},"Live demo"),(0,s.kt)(d,{mdxType:"AnchorLink"},"Formatting"),(0,s.kt)(d,{mdxType:"AnchorLink"},"Content"),(0,s.kt)(d,{mdxType:"AnchorLink"},"Feedback")),(0,s.kt)("h2",null,"Overview"),(0,s.kt)("p",null,"There are instances, sometimes in the same form, where you need users to enter\nboth short and long form content. Allow the size of the text input box to\nreflect the length of the content you expect the user to enter."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Variant"),(0,s.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Text input"),(0,s.kt)("td",{parentName:"tr",align:null},"When the expected user input is a single line of text, as opposed to a paragraph.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Text area"),(0,s.kt)("td",{parentName:"tr",align:null},"When the expected user input is more than one sentence.")))),(0,s.kt)("h2",null,"Live demo"),(0,s.kt)(m,{components:[{id:"text-input",label:"Text input"},{id:"password-input",label:"Password input"},{id:"text-area",label:"Text area"}],mdxType:"ComponentDemo"},(0,s.kt)(u,{id:"text-input",knobs:{TextInput:["disabled","invalid","light"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-textinput--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-input--label",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtextinput--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-input--default"},mdxType:"ComponentVariant"},'\n    <div>\n      <TextInput\n        helperText="Optional helper text"\n        id="test2"\n        invalidText="A valid value is required"\n        labelText="Text input label"\n        placeholder="Placeholder text"\n      />\n    </div>\n  '),(0,s.kt)(u,{id:"password-input",links:{React:"https://react.carbondesignsystem.com/?path=/story/components-textinput--toggle-password-visibility",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-input--label",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtextinput--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-input--default"},mdxType:"ComponentVariant"},'\n    <div>\n    <TextInput.PasswordInput\n      helperText="Optional helper text"\n      hidePasswordLabel="Hide password"\n      id="test2"\n      invalidText="A valid value is required"\n      labelText="Text input label"\n      placeholder="Placeholder text"\n      showPasswordLabel="Show password"\n    />\n    </div>\n  '),(0,s.kt)(u,{id:"text-area",knobs:{TextArea:["disabled","invalid","light"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-textarea--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-input--textarea",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtextarea--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-textarea--default"},mdxType:"ComponentVariant"},'\n    <div>\n    <TextArea\n      cols={50}\n      helperText="Optional helper text"\n      id="test2"\n      invalidText="A valid value is required"\n      labelText="Text area label"\n      placeholder="Placeholder text"\n      rows={4}\n    />\n    </div>\n  ')),(0,s.kt)("h2",null,"Formatting"),(0,s.kt)("h3",null,"Default values"),(0,s.kt)("p",null,"Where possible, add programmatic assistance. Detect and pre-fill inputs to\nreduce errors and save time. When the software can’t determine the value that\nbelongs in an input, use type-ahead to make suggestions. Use sentence-case for\ndefault values, detected values, and auto-completion text."),(0,s.kt)("h3",null,"Validation and errors"),(0,s.kt)("p",null,"Real time validation helps to streamline the process and keep data clean when\nthe user is filling out forms. For full guidelines, refer to the\n",(0,s.kt)("a",{parentName:"p",href:"/components/form/usage"},"forms")," usage page."),(0,s.kt)(g,{mdxType:"Row"},(0,s.kt)(b,{colLg:8,mdxType:"Column"},(0,s.kt)("img",{src:"/fbba7bf70afc3d71bc666b918417d7bf/text-input-usage-2.gif",alt:"Validation text example"}))),(0,s.kt)("h3",null,"Character count"),(0,s.kt)("p",null,"Text fields and text areas may have a character limit and counter. Use the\ncharacter limit and counter to let users know how long their entry can be before\nthey begin typing."),(0,s.kt)("p",null,"While useful for data collection, character count is not an intuitive way to\ncommunicate content length to users. Character count allows a user to understand\nan input error if they surpass the character limit."),(0,s.kt)(g,{mdxType:"Row"},(0,s.kt)(b,{colLg:8,mdxType:"Column"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABLklEQVQoz32QzUrDQBDHpy0oRa0+m1jw4EF8FVErRfFpPFjtGxgvXSZmQ9KQj34Q2R037K1Z2aChKskffuxhdn6zswBbMcZs0zHGdC15nnfn83kvCIKe1rr7XavvNuaPsGa9XkMQBOB5HhDRv3pjfN+HOI4tO4g4RMQLxth5FEWnWZYNkyQ5CcPwjHN+TES95XJZDWqMUupnlaM0TTPOufF939gzDEOzWCzMarUyRMTLsuxvNpuqp1WotQat9SERRUII21xTFEWFUgo/leorpdqFUsqOEAKEEAdENLVSIvLsiyxSyncpZSyEeEyTZDdLE/jI8+aVEbH6eAtjbH82mw0YYzWIOHBdd+A4r3vj60u4v72Bl8lTs9B13VbsQHu+OQ7cja7gYTyC6fPkl+QLvnBHue+THeAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"An example of a text area.",title:"An example of a text area.",src:"/static/1e4ee34a654d1a89746846a9f266900e/3cbba/text-area-usage-1.png",srcSet:["/static/1e4ee34a654d1a89746846a9f266900e/7fc1e/text-area-usage-1.png 288w","/static/1e4ee34a654d1a89746846a9f266900e/a5df1/text-area-usage-1.png 576w","/static/1e4ee34a654d1a89746846a9f266900e/3cbba/text-area-usage-1.png 1152w","/static/1e4ee34a654d1a89746846a9f266900e/392b1/text-area-usage-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,s.kt)("h2",null,"Content"),(0,s.kt)("h3",null,"Labels"),(0,s.kt)("p",null,"Effective form labeling helps users understand what information to enter into a\ntext input. Using placeholder text in lieu of a label is sometimes employed as a\nspace-saving method. However, this is not recommended because it hides context\nand presents accessibility issues."),(0,s.kt)(g,{mdxType:"Row"},(0,s.kt)(b,{colLg:8,mdxType:"Column"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABdklEQVQoz4WRzYoTQRCAa9g38AFkz+IPCOLBZWHvevLkZRFRsuDBfQR1IbsKugdfLYRMesj0kMz0TKcr1TU1yeTnoLREWcXBgo+C6u6PqmqAGzEej2EwGIBSCrTWsFqtQESgaRqI4xicc3/UftEZ4VEQxnF8O03Tk+Vy+VhEnojIg9Fo9AgRj9q2DbWjpmlu/VeolIqGwyGkaXqcZdkXZn5PRJfM/FYp9a4sy89E9IGIPhHRHSICIoo6hUmSRPtxHyZJcm6tfcXMvcVi8Xw6nb7QWp/ned6r6/rMe3/IzMDM3UKtdZRlGRRFcW8ymZwZY14y8xtmfuace2qtfY2Ip4jYq6rqsKoqsNZ2C40xkTEm5JPZbPYtz/NL59zH+XwecuBCRMLIX40x94uigLIsu4UichB+UET6dV1/70JEAqf7uwedwrDg/aKPvffX3vu+9/7qL/pEdI2IdxERELG7w+12+5vdbvdPwtlms4H1eg3rtv2Zb8YPT9l8wWAkMfsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"An example of a text input.",title:"An example of a text input.",src:"/static/7f8884f598f41b58d770cbdfdaf76b2e/3cbba/text-input-header-usage.png",srcSet:["/static/7f8884f598f41b58d770cbdfdaf76b2e/7fc1e/text-input-header-usage.png 288w","/static/7f8884f598f41b58d770cbdfdaf76b2e/a5df1/text-input-header-usage.png 576w","/static/7f8884f598f41b58d770cbdfdaf76b2e/3cbba/text-input-header-usage.png 1152w","/static/7f8884f598f41b58d770cbdfdaf76b2e/0b124/text-input-header-usage.png 1728w","/static/7f8884f598f41b58d770cbdfdaf76b2e/99571/text-input-header-usage.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,s.kt)("h4",null,"Accessibility best practices for labels"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Labels must be visible when an input gets focus."),(0,s.kt)("li",{parentName:"ul"},"Labels must be announced to the screen reader on focus."),(0,s.kt)("li",{parentName:"ul"},"Ensure the helper text that appears under an input is read when an assistive\ntechnology user stops at an input using ARIA.")),(0,s.kt)("h3",null,"Placeholder text"),(0,s.kt)("p",null,"Placeholder text provides hints or examples of what to enter. Placeholder text\ndisappears after the user begins entering data into the input and should not\ncontain crucial information. Use sentence-style capitalization, and in most\ncases, write the text as a direct statement without punctuation."),(0,s.kt)(g,{mdxType:"Row"},(0,s.kt)(b,{colLg:8,mdxType:"Column"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAAxUlEQVQY04XQsWrEMAwGYJsu5UjvKW67a4duffrOJQQ/RGQZxU6iRNacYtODUC7tDx8SxvyDjNll27Y9W+ScbUrJrutqRaTOH+buML8KKxExKaU6VfWhw3RdVznnntq2fXfOfSDi27IsVxG5qepVVV9V9aKq9t/CeZ7rp5zzOcb4RUQTESERhWmaAjN7Zp6Z+ZOZn5nZFIcJIZhhGEyM0SDiqe/7FwBoELHx3jdlB4DydgIAc3cYIqr3Gsexlnvvq7L/ZZ9vj+nyZZD/2SYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Placeholder text example",title:"Placeholder text example",src:"/static/bd93103e22b2d470a35ac6a0f9b70c57/3cbba/text-input-usage-1.png",srcSet:["/static/bd93103e22b2d470a35ac6a0f9b70c57/7fc1e/text-input-usage-1.png 288w","/static/bd93103e22b2d470a35ac6a0f9b70c57/a5df1/text-input-usage-1.png 576w","/static/bd93103e22b2d470a35ac6a0f9b70c57/3cbba/text-input-usage-1.png 1152w","/static/bd93103e22b2d470a35ac6a0f9b70c57/392b1/text-input-usage-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,s.kt)("h3",null,"Helper text"),(0,s.kt)("p",null,"Helper text is pertinent information that assists the user in completing a\nfield. Helper text is always available when the input is focused and appears\nunderneath the label. Use sentence-style capitalization, and in most cases,\nwrite the text as full sentences with punctuation."),(0,s.kt)(g,{mdxType:"Row"},(0,s.kt)(b,{colLg:8,mdxType:"Column"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAAnUlEQVQoz5VRYQuCMBT0//+9oA8RQdRWOluSOpe6u2iYUxOGB8e9tx23x1vCCQCMGqd3DhqQcAEsHVz24RwrV8lamGksy8rQvls6kF2PGXs3nRDxwPPdcHcQ3B8lTxfNW95Q5sZTqJpXZdn2GwL1y1KkBWVWMH1UVE/D7Ku6ZlF1LBvnJ48Ghr1gTjgCzuvGHQYjhv5Xj8/8/fJ8wg+3sikHF5iSEgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Helper text example",title:"Helper text example",src:"/static/8d2f16aacef7d83f3efeb71b50ce7925/3cbba/text-input-usage-3.png",srcSet:["/static/8d2f16aacef7d83f3efeb71b50ce7925/7fc1e/text-input-usage-3.png 288w","/static/8d2f16aacef7d83f3efeb71b50ce7925/a5df1/text-input-usage-3.png 576w","/static/8d2f16aacef7d83f3efeb71b50ce7925/3cbba/text-input-usage-3.png 1152w","/static/8d2f16aacef7d83f3efeb71b50ce7925/392b1/text-input-usage-3.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,s.kt)("h2",null,"Feedback"),(0,s.kt)("p",null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"},"GitHub"),"."))}x.isMDXComponent=!0}}]);