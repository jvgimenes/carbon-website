"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[89796],{28399:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67294),i=a(88650),s=a.n(i),r=a(1597),o=a(64905),l=a(81151),c=a(75900),d=a.n(c);var m=e=>{let{title:t,theme:a,tabs:i=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:i}}}=(0,r.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:o,branch:l}=a||i,c=`${s}/edit/${l}${o}/src/pages${t}`;return s?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=a(56328),b=a(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,i=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),o=t===i,l=new RegExp(`${i}/?(#.*)?$`),c=a.replace(l,t);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},n.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(n.Component);var h=g,A=a(17680),y=a(75387),f=a(50041);var k=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:i,Title:c}=e;const{frontmatter:d={},relativePagePath:b,titleType:g}=t,{tabs:f,title:w,theme:v,description:x,keywords:T,date:E}=d,{interiorTheme:C}=(0,y.Z)(),{site:{pathPrefix:N}}=(0,r.useStaticQuery)("2456312558"),P=N?i.pathname.replace(N,""):i.pathname,B=f?P.split("/").filter(Boolean).slice(-1)[0]||s()(f[0],{lower:!0}):"",Q=v||C;return n.createElement(l.Z,{tabs:f,homepage:!1,theme:Q,pageTitle:w,pageDescription:x,pageKeywords:T,titleType:g},n.createElement(m,{title:c?n.createElement(c,null):w,label:"label",tabs:f,theme:Q}),f&&n.createElement(h,{title:w,slug:P,tabs:f,currentTab:B}),n.createElement(A.Z,{padded:!0},a,n.createElement(p,{relativePagePath:b}),n.createElement(k,{date:E})),n.createElement(u.Z,{pageContext:t,location:i,slug:P,tabs:f,currentTab:B}),n.createElement(o.Z,null))}},75896:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return A}});var n=a(45987),i=(a(67294),a(64983)),s=a(28399);a(36569);const r=["components"],o={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=l("PageDescription"),d=l("AnchorLinks"),m=l("AnchorLink"),p=l("Row"),u=l("Column"),b=l("Caption"),g={_frontmatter:o},h=s.Z;function A(e){let{components:t}=e,a=(0,n.Z)(e,r);return(0,i.kt)(h,Object.assign({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c,{mdxType:"PageDescription"},(0,i.kt)("p",null,"Design annotations are needed for specific instances shown below, but for the\nstandard number input component, Carbon already incorporates accessibility.")),(0,i.kt)(d,{mdxType:"AnchorLinks"},(0,i.kt)(m,{mdxType:"AnchorLink"},"What Carbon provides"),(0,i.kt)(m,{mdxType:"AnchorLink"},"Design recommendations"),(0,i.kt)(m,{mdxType:"AnchorLink"},"Development considerations")),(0,i.kt)("h2",null,"What Carbon provides"),(0,i.kt)("p",null,"Carbon bakes keyboard operation into its components, improving the experience of blind users and others who operate via the keyboard. Carbon incorporates many other accessibility considerations, some of which are described below."),(0,i.kt)("h3",null,"Keyboard interaction"),(0,i.kt)("p",null,"The Carbon number input replicates the behavior of the stock HTML component. The number input takes a single tab stop. The + and - buttons, operable by pointer, are not in the tab order. When the input has focus, the arrow keys give keyboard users the same ability to incrementally adjust the values. As well, users can directly type numeric values in the input. Only numerals are allowed to be entered."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(u,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB6klEQVQoz2NgYGBg8JTtZvBT7WM4sfUug5NIG0OU0TQmb/keJn/VfgY/5T6wPEkAbKByP4MJSx2Dk0g7Q7TxdAZv+R6GANUJYHGyDAzWnMRgw9vM4CLWwRptPD0kUH2CFwODDMOZQ7eZP3/+zATCX758YUJiM3758oXh8+fPmIaBcGPsNgYfxV42O4EWdheJtmw9hqqwHSvPM/z//5/h69eveDFWAw0Y6hhcxDo5JtZsZPr1/5nO////jb9+/Wbx7dtXy2/fvll++/oNTH94/8nq86fPtp8/f1YBWbZ69WpGMTExBhiGG1gevpxZk6GEvTJsnfijh0+v3rt77/+nT5//fvz48T8y/v7z64dPn8DsuRcvXAT5AKuBTN4KPZyWHE2MIFc/ffpU/tmzZxrPnj1Tg+EnT56qf/7+Trkzb2Pu4hmbXddsXCLPwMDAoaioyC0mJsaCbiCHq0Qno5NoOzgYnj97zvD8OSr+9O0dw96NFxgchdo9GRj0REDqNFR0uYSFhTmxGuit0MPgKNQGNvDVy1eMr169YkLGHz+9Yzp37BaTJUczPPzVVbUYhIWFGbB5mQPkbVh4wjAMRBhMZYgymsIQYzyLIdJwGpO9ejIDAzcDg5SEHIphyAYyesp2c3rKdjNjM5AUAACfSxbjVkYv2QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"example of number input keyboard interaction",title:"example of number input keyboard interaction",src:"/static/d3ce9d93baa71a6243f8a73518a1132a/3cbba/number-input-accessibility-1.png",srcSet:["/static/d3ce9d93baa71a6243f8a73518a1132a/7fc1e/number-input-accessibility-1.png 288w","/static/d3ce9d93baa71a6243f8a73518a1132a/a5df1/number-input-accessibility-1.png 576w","/static/d3ce9d93baa71a6243f8a73518a1132a/3cbba/number-input-accessibility-1.png 1152w","/static/d3ce9d93baa71a6243f8a73518a1132a/92c65/number-input-accessibility-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"The number input is reachable by Tab and changed with the arrow keys or by directly entering a number."))),(0,i.kt)("h3",null,"Error handling"),(0,i.kt)("p",null,"Carbon provides errors and warning messages to assistive technology. This is an improvement on the stock HTML number input, which simply prevents the typing of alphabetic characters without explanation. Carbon also adds an error or warning icon and puts error messages in red as a further visual cue."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(u,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVQoz9WOu0oDQRSG/x19CHtBsbHzEhR8h+QB7HwOQRttbETEFAoWIogoForiLReT7M7uxmQvUVDJlYRkZ8Z0gjqyuxYpYiNY+MPH+TnFdw7wV4lGo4jFYgF+7+VXkftHkP70kVL5rNaIV7CIsN0Qyya8aH93h3iJlMJ1E5waPwj3DgPZWyjER7UOz7Ih3FKI7UBYTtgdFyyZBjfy4IbZX5hZXMYugANAoccnM438/Vy39DglnFJEuKWIsN2IsB2/TwvHnWXJ9DA384G0b5rrm3gA8AQMdgqWLipV2a1UP17LFdmtN6SwHMlUKkWt/s6eX2RbpdutQhHtojXQV1ieX4B/ywSUxuraeCu+Pd3c2JpsxXcmuKaPsJw2ylTqzxGWVcc6p+dDLJGCd5vs/2FjaQVZIMC7ugFTKVhWDeAqBddouPumc3YBL5mGl0j9IFwOhRlfeJ1QuKYTltMIUynhutGDSTg1iHd+qbB0Bix1h/+VL9sMAz9OgwE0AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"The letter e is in the input, a red exclamation mark appears beside it, the border of the input is in red and a red text message appears underneath 'Number is not valid'",title:"The letter e is in the input, a red exclamation mark appears beside it, the border of the input is in red and a red text message appears underneath 'Number is not valid'",src:"/static/b241a0ae89ffbf94e8bac5dd325c0f5a/3cbba/number-input-accessibility-2.png",srcSet:["/static/b241a0ae89ffbf94e8bac5dd325c0f5a/7fc1e/number-input-accessibility-2.png 288w","/static/b241a0ae89ffbf94e8bac5dd325c0f5a/a5df1/number-input-accessibility-2.png 576w","/static/b241a0ae89ffbf94e8bac5dd325c0f5a/3cbba/number-input-accessibility-2.png 1152w","/static/b241a0ae89ffbf94e8bac5dd325c0f5a/92c65/number-input-accessibility-2.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"Messages are surfaced to assistive technologies, and color alone is not used to visually signal errors."))),(0,i.kt)("h2",null,"Design recommendations"),(0,i.kt)("p",null,"Design annotations are needed for the following instance."),(0,i.kt)("h3",null,"Cue users for value and step"),(0,i.kt)("p",null,"Carbon offers the ability for the author to set minimum and maximum values for the input. When setting limits on number entry, designers should warn the user in advance, instead of users discovering limits through an error message. This is particularly the case if designers alter the step value, which determines the increment change when activating the +/- buttons or arrow keys. If a user directly enters a value that does not match the step increment, it will be disallowed for no apparent reason, so advanced warnings are crucial."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(u,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCElEQVQoz9XPS2qFMBQG4KPtHrqATjsplHovLXQPujdx1lW4AE3AUSdZwXWg5iHBmAcOWlIil+LAPih00B8+zoGEkxOAv0qappBl2Sr0W7+K934r8t7HSqnYGLPSWn/Ucx8ZY0Br/aOBq3mewTkH1tov7YYQAhjjUCNCyIMQ4mlZlsRae3TObR2stY/OuevwWLCbsM15s0vG2IsQwmut35RSfmuaplcppZdSPnPOYRzHi92BZVlCURSQ53lc1/UNQuhYVdUhQAglGOP7pmnu6rpOCCG3QogrpRT0fb+/Ydd10LbtKlz6zjAMQCld627CQRh2Op3CxYhSGn+GMRZzziMhBIRv/6+8A2DCMuCBPFHiAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"a numeric input with helper text to enter values between 30 and 70, in increments of 5",title:"a numeric input with helper text to enter values between 30 and 70, in increments of 5",src:"/static/1f8be739222235db3a355bc8ce204812/3cbba/number-input-accessibility-3.png",srcSet:["/static/1f8be739222235db3a355bc8ce204812/7fc1e/number-input-accessibility-3.png 288w","/static/1f8be739222235db3a355bc8ce204812/a5df1/number-input-accessibility-3.png 576w","/static/1f8be739222235db3a355bc8ce204812/3cbba/number-input-accessibility-3.png 1152w","/static/1f8be739222235db3a355bc8ce204812/92c65/number-input-accessibility-3.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"Notify users of allowable input ranges through helper text."))),(0,i.kt)("h2",null,"Development considerations"),(0,i.kt)("p",null,"Keep this in mind if you’re modifying Carbon or creating a custom component."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Carbon uses ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-describedby")," to associate the helper text and error messages with the input."),(0,i.kt)("li",{parentName:"ul"},"The red error SVG icons have ",(0,i.kt)("inlineCode",{parentName:"li"},'aria-hidden="true"')," set, since the helper text provides the same information.")))}A.isMDXComponent=!0}}]);