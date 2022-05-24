"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[83714],{28399:function(e,a,t){t.d(a,{Z:function(){return w}});var n=t(67294),i=t(88650),o=t.n(i),s=t(1597),c=t(64905),r=t(81151),l=t(75900),d=t.n(l);var p=e=>{let{title:a,theme:t,tabs:i=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===t})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))};var m=e=>{let{relativePagePath:a,repository:t}=e;const{site:{siteMetadata:{repository:i}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:c,branch:r}=t||i,l=`${o}/edit/${r}${c}/src/pages${a}`;return o?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:l},"Edit this page on GitHub"))):null},g=t(56328),b=t(51721);let u=function(e){function a(){return e.apply(this,arguments)||this}return(0,b.Z)(a,e),a.prototype.render=function(){const{title:e,tabs:a,slug:t}=this.props,i=t.split("/").filter(Boolean).slice(-1)[0],c=a.map((e=>{const a=o()(e,{lower:!0,strict:!0}),c=a===i,r=new RegExp(`${i}/?(#.*)?$`),l=t.replace(r,a);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":c},"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${l}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},c))))))},a}(n.Component);var h=u,A=t(17680),y=t(75387),f=t(50041);var k=e=>{let{date:a}=e;const t=new Date(a);return a?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:a,children:t,location:i,Title:l}=e;const{frontmatter:d={},relativePagePath:b,titleType:u}=a,{tabs:f,title:w,theme:v,description:x,keywords:N,date:C}=d,{interiorTheme:E}=(0,y.Z)(),{site:{pathPrefix:S}}=(0,s.useStaticQuery)("2456312558"),T=S?i.pathname.replace(S,""):i.pathname,R=f?T.split("/").filter(Boolean).slice(-1)[0]||o()(f[0],{lower:!0}):"",D=v||E;return n.createElement(r.Z,{tabs:f,homepage:!1,theme:D,pageTitle:w,pageDescription:x,pageKeywords:N,titleType:u},n.createElement(p,{title:l?n.createElement(l,null):w,label:"label",tabs:f,theme:D}),f&&n.createElement(h,{title:w,slug:T,tabs:f,currentTab:R}),n.createElement(A.Z,{padded:!0},t,n.createElement(m,{relativePagePath:b}),n.createElement(k,{date:C})),n.createElement(g.Z,{pageContext:a,location:i,slug:T,tabs:f,currentTab:R}),n.createElement(c.Z,null))}},3736:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return c},default:function(){return A}});var n=t(45987),i=(t(67294),t(64983)),o=t(28399);const s=["components"],c={},r=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",a)},l=r("PageDescription"),d=r("AnchorLinks"),p=r("AnchorLink"),m=r("Row"),g=r("Column"),b=r("Caption"),u={_frontmatter:c},h=o.Z;function A(e){let{components:a}=e,t=(0,n.Z)(e,s);return(0,i.kt)(h,Object.assign({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"PageDescription"},(0,i.kt)("p",null,"Design annotations are needed for specific instances shown below, but for the\nstandard accordion component, Carbon already incorporates accessibility.")),(0,i.kt)(d,{mdxType:"AnchorLinks"},(0,i.kt)(p,{mdxType:"AnchorLink"},"What Carbon provides"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Design recommendations"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Development considerations")),(0,i.kt)("h2",null,"What Carbon provides"),(0,i.kt)("p",null,"Carbon bakes keyboard operation into its components, improving the experience of\nblind users and others who operate via the keyboard. Carbon incorporates many\nother accessibility considerations, some of which are described below."),(0,i.kt)("h3",null,"Keyboard interactions"),(0,i.kt)("p",null,"Each accordion is a tab stop. ",(0,i.kt)("inlineCode",{parentName:"p"},"Space")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter")," keys expand or collapse\naccordions, which are collapsed by default. Interactive elements within expanded\naccordions integrate into the tab order automatically."),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAABdUlEQVQoz6WSS2tbMRCF8/9X3aarrrLzKov+gyxqSmgS2tC0FOda0pXute/DemseRXaCY1pKSYbDQQjOiPk0Z/yGOiMiZv72WSzeL+chMPP+4v/CTIyAd5+axfly7D0zQyEA/KtwL0J6DjN7m+wUibHTG9G0ct3uJp8jRF9iKCkcPfocXIqhPIVTLFgICkafje6VbFulje50a6prI4UyppNCdV2fU4Hy4uUUymFsRDSmbZWQUjTrRkophFBKNc3j3hutNQCczAxA0WcE8jb9Wm1Xj4MUW+dsCME550/KIeIpsIqXUize5e02dZvkPRIyIhES1gMjECETMhSEgvgSGADOg59Hp5VZr6RYq3lyKZTgczxVxeYrtmM42LwbAxEOw7izY99vvI1QKCeozA+cn3Xo+BTOsQJ7uGk/Xnz5+bW9/HD9cCudt+MwTeNsrfvzt4+0g6tt7q/l4nz5405dvLv6fiMKJGcrrZTSvzasZMixvG63fwN0Ru8aQ1rXxgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"example of accordion keyboard interaction",title:"example of accordion keyboard interaction",src:"/static/dea09a7f0d8ecb15d3329e538e3b2d8d/3cbba/accordion-accessibility-1.png",srcSet:["/static/dea09a7f0d8ecb15d3329e538e3b2d8d/7fc1e/accordion-accessibility-1.png 288w","/static/dea09a7f0d8ecb15d3329e538e3b2d8d/a5df1/accordion-accessibility-1.png 576w","/static/dea09a7f0d8ecb15d3329e538e3b2d8d/3cbba/accordion-accessibility-1.png 1152w","/static/dea09a7f0d8ecb15d3329e538e3b2d8d/92c65/accordion-accessibility-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"Accordions and interactive elements in the expanded content are in the tab order and keyboard operable."))),(0,i.kt)("h3",null,"Labeling and states"),(0,i.kt)("p",null,"The collapsed or expanded state of the accordions is\n",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/able/requirements/requirements/#4_1_2"},"programmatically set"),"\nby default, eliminating the need for designers to provide\n",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/able/toolkit/design/content/#alternative-text-for-visuals"},"text equivalents"),"\nfor the chevron icons."),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAAAmklEQVQoz82S3QrDMAhG+/6vmQRtotKWuUJi0rH2poww9nOxnQvx5qB+OGxfMPxabq1ZqUdz1Cc8yqWY0DJNExExc865O6ovb22zYiIyjmOMkYhSSkdFRCICAGautfZvNjNEDDveewAIIQCA9x4RnXMxRjPrye2+ue5cdtZ1VdXrCVXtyyWbpGWeZ2YWkfduPqf9Ss5/8iSfyTeF9f+g5VR0TgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"expanded and collapsed accordions",title:"expanded and collapsed accordions",src:"/static/b453e5dc948ad37193a91af46e93b29a/3cbba/accordion-accessibility-2.png",srcSet:["/static/b453e5dc948ad37193a91af46e93b29a/7fc1e/accordion-accessibility-2.png 288w","/static/b453e5dc948ad37193a91af46e93b29a/a5df1/accordion-accessibility-2.png 576w","/static/b453e5dc948ad37193a91af46e93b29a/3cbba/accordion-accessibility-2.png 1152w","/static/b453e5dc948ad37193a91af46e93b29a/92c65/accordion-accessibility-2.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"Carbon handles the accessibility of the chevron indicators."))),(0,i.kt)("h2",null,"Design recommendations"),(0,i.kt)("p",null,"Design annotations are needed for the following instances."),(0,i.kt)("h3",null,"Headings"),(0,i.kt)("p",null,"Carbon accordions are not set as headings by default. For improved\naccessibility, annotate accordions as headings on the first occurrence in a\nproduct. Annotate the heading level of accordions as needed. See\n",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/able/toolkit/design/content/#headings"},"Indicate heading levels"),"."),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABXklEQVQoz6WNy0rDQBSGfYy46DvoQhF8DV/Dfa3u3LR7X8CFFwRFRFApiLUL3bmoaedMoiaZxCRM5+JMsKlKI1MvBKGg+PEvfg7n458q/sFUURRBELTb7cuL1mWr1f4LRq7X65ZlzS7OzyzMVSoVy7Kmf4eRwcHHh0d7S7WD5Ubz4vzsdMzJhJQw8mg0ent5jZs36VWXSzF4fjbHSSlh5EE+YCm1VzbxxlHCaJ9SwQV1CUUeBf87ffD796HgQn5h5OFwKDiPru3wBiVp8hjHyT0h6/tedcur7fhru97qjlfbfqhu+Y1DxaXOMq201vpTllK6xEN3DgaMMQYAdNuF2y50uqhjo47t9iDygkw+6RIlGbsYAQA4joMx7qGe47oIEAJAgAISmLEs+ynneS6lZIxRStM0ZWMopUmSMMa0UurJRCtTlVI/lznnURSFYUgI+ShxHFNKhRDfr2XtQ34HRTwdJmXEYe8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"H1 and H2 annotations for headings, plus direction to ‘include accordion titles as headings'",title:"H1 and H2 annotations for headings, plus direction to ‘include accordion titles as headings'",src:"/static/17544a8ac0e29807b3c82b3904fbe494/3cbba/accordion-accessibility-3.png",srcSet:["/static/17544a8ac0e29807b3c82b3904fbe494/7fc1e/accordion-accessibility-3.png 288w","/static/17544a8ac0e29807b3c82b3904fbe494/a5df1/accordion-accessibility-3.png 576w","/static/17544a8ac0e29807b3c82b3904fbe494/3cbba/accordion-accessibility-3.png 1152w","/static/17544a8ac0e29807b3c82b3904fbe494/92c65/accordion-accessibility-3.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"If accordion titles act as headings, annotate for development."))),(0,i.kt)("h3",null,"Alignment"),(0,i.kt)("p",null,"Carbon chevrons are right-aligned by default, but left-aligned chevrons are more\naccessible for users with low vision, as the expanded/collapsed indicator is\ncloser to the accordion title."),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAAz0lEQVQoz62RXQ6CMBCEObO++cNh9AX0DHoGEkxMDAkqiEqloFCglG4NoFE0kBD9Mo87O9OtJCpACIBGNSCJH5CAF4uvy9WuP7Xl+WE8s4eqNVL3Q8UaKJY82/UmRNsWsxy+kstW9IjxQse66WnGRTPCtRVvnEpkbbNbXDyLQ8VnbU4ZcbyAhOiKvTDIcvaeUB7kxZc5yaLt2ccYuS5yEU1SwQFy/hCHVnOahebJD3xUQikV9bQ2M1CWnnwSx1EJYwya+dNX1c7yrNrd3D35DrPegHvq3IgYAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"annotation stating ‘position chevrons on the left of accordion titles'",title:"annotation stating ‘position chevrons on the left of accordion titles'",src:"/static/cbd7a711dd8f050c4d7f9c5ec9986161/3cbba/accordion-accessibility-4.png",srcSet:["/static/cbd7a711dd8f050c4d7f9c5ec9986161/7fc1e/accordion-accessibility-4.png 288w","/static/cbd7a711dd8f050c4d7f9c5ec9986161/a5df1/accordion-accessibility-4.png 576w","/static/cbd7a711dd8f050c4d7f9c5ec9986161/3cbba/accordion-accessibility-4.png 1152w","/static/cbd7a711dd8f050c4d7f9c5ec9986161/92c65/accordion-accessibility-4.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"Annotate if the accordion chevrons should be left-aligned."))),(0,i.kt)("h2",null,"Development considerations"),(0,i.kt)("p",null,"Keep these considerations in mind if you are modifying Carbon or creating a\ncustom component:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The accordion header has a role of ",(0,i.kt)("inlineCode",{parentName:"li"},"<button>"),", with an ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-expanded"),"\nattribute set to ",(0,i.kt)("inlineCode",{parentName:"li"},'"true"')," or ",(0,i.kt)("inlineCode",{parentName:"li"},'"false"'),"."),(0,i.kt)("li",{parentName:"ul"},"The button has an ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-controls")," property set to the unique id of the panel\nit controls."),(0,i.kt)("li",{parentName:"ul"},"Since accordions are typically grouped together, Carbon puts each button\ninside a list item in an unordered list, which provides additional context to\nscreen reader users; where only one accordion is used, it should not be put in\na list."),(0,i.kt)("li",{parentName:"ul"},"When accordion titles are used as headings, the buttons are also wrapped in an\nelement with an appropriate heading level; ARIA can be used to set both the\nheading role and the level (via ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-level"),")."),(0,i.kt)("li",{parentName:"ul"},"See the\n",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices-1.2/#accordion"},"ARIA authoring practices"),"\nfor more guidance.")))}A.isMDXComponent=!0}}]);