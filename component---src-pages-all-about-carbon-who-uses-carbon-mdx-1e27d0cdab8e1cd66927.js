"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[36704],{28399:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(67294),r=a(88650),i=a.n(r),s=a(1597),o=a(64905),l=a(81151),p=a(75900),u=a.n(p);var m=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:u()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var c=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:o,branch:l}=a||r,p=`${i}/edit/${l}${o}/src/pages${t}`;return i?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},d=a(56328),h=a(51721);let k=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=i()(e,{lower:!0,strict:!0}),o=t===r,l=new RegExp(`${r}/?(#.*)?$`),p=a.replace(l,t);return n.createElement("li",{key:e,className:u()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${p}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(n.Component);var g=k,b=a(17680),f=a(75387),N=a(50041);var w=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(N.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(N.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:t,children:a,location:r,Title:p}=e;const{frontmatter:u={},relativePagePath:h,titleType:k}=t,{tabs:N,title:v,theme:y,description:C,keywords:x,date:E}=u,{interiorTheme:P}=(0,f.Z)(),{site:{pathPrefix:M}}=(0,s.useStaticQuery)("2456312558"),S=M?r.pathname.replace(M,""):r.pathname,T=N?S.split("/").filter(Boolean).slice(-1)[0]||i()(N[0],{lower:!0}):"",D=y||P;return n.createElement(l.Z,{tabs:N,homepage:!1,theme:D,pageTitle:v,pageDescription:C,pageKeywords:x,titleType:k},n.createElement(m,{title:p?n.createElement(p,null):v,label:"label",tabs:N,theme:D}),N&&n.createElement(g,{title:v,slug:S,tabs:N,currentTab:T}),n.createElement(b.Z,{padded:!0},a,n.createElement(c,{relativePagePath:h}),n.createElement(w,{date:E})),n.createElement(d.Z,{pageContext:t,location:r,slug:S,tabs:N,currentTab:T}),n.createElement(o.Z,null))}},34050:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return h}});var n=a(45987),r=(a(67294),a(64983)),i=a(28399);const s=["components"],o={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=l("PageDescription"),u=l("AnchorLinks"),m=l("AnchorLink"),c={_frontmatter:o},d=i.Z;function h(e){let{components:t}=e,a=(0,n.Z)(e,s);return(0,r.kt)(d,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(p,{mdxType:"PageDescription"},(0,r.kt)("p",null,"Carbon is for each and every member of a cross-functional team—designers,\ndevelopers, marketers and offering managers. Every point along a user’s journey\nneeds to feel part of a holistic, branded experience and that’s where Carbon\ncomes in.")),(0,r.kt)(u,{mdxType:"AnchorLinks"},(0,r.kt)(m,{mdxType:"AnchorLink"},"Designers"),(0,r.kt)(m,{mdxType:"AnchorLink"},"Developers"),(0,r.kt)(m,{mdxType:"AnchorLink"},"Marketers"),(0,r.kt)(m,{mdxType:"AnchorLink"},"Product managers"),(0,r.kt)(m,{mdxType:"AnchorLink"},"Sales"),(0,r.kt)(m,{mdxType:"AnchorLink"},"Support")),(0,r.kt)("h2",null,"Designers"),(0,r.kt)("p",null,"Designers are passionate advocates for users, and Carbon helps them provide\nvalue to our users with accessible, fully-tested assets and guidance that\ndesigners can rely on to create cohesive experiences that are in line with other\nbusiness units."),(0,r.kt)("h3",null,"How Carbon helps designers"),(0,r.kt)("p",null,"Carbon supports designers with the tools to build excellent experiences for our\nusers that are consistent, delightful, and thoughtful. Designers can quickly\ncreate tailored solutions for our clients, drawing on Carbon’s reusable kit of\nparts. This saves valuable time that can be spent on innovating new solutions."),(0,r.kt)("p",null,"In addition, Carbon enables product and .com designers across the organization\nto explore and deliver the full potential of a design, leveraging the work of\nother teams where possible, avoiding redesign and duplication of efforts,\nkeeping the focus on the distinct client use cases."),(0,r.kt)("p",null,"Here are some ways designers can begin engaging with Carbon."),(0,r.kt)("h4",null,"Learn the system"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Familiarize yourself with the Carbon\n",(0,r.kt)("a",{parentName:"p",href:"/guidelines/2x-grid/overview"},"foundational elements"),", their usage\ndocumentation, and the system’s\n",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/design/language/"},"design principles"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Familiarize yourself with usage and style guidance for all of Carbon’s\n",(0,r.kt)("a",{parentName:"p",href:"/components/overview/"},"components")," and ",(0,r.kt)("a",{parentName:"p",href:"/patterns/overview/"},"patterns"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check out ",(0,r.kt)("a",{parentName:"p",href:"/designing/tutorials/"},"design tutorials")," to learn more about some\nof the foundational pieces of the design system."))),(0,r.kt)("h4",null,"Get the tools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Visit ",(0,r.kt)("a",{parentName:"p",href:"/designing/get-started/"},"Designing > Getting Started")," on the Carbon\nwebsite and install the design kits.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Visit the ",(0,r.kt)("a",{parentName:"p",href:"/designing/design-resources/"},"Other Resources")," page on the Carbon\nwebsite to find other useful tools and kit extensions like the Mobile Sketch\nkit and the Master Data Visualization file."))),(0,r.kt)("h4",null,"Connect with the team"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Find ",(0,r.kt)("a",{parentName:"p",href:"/whats-happening/meetups/"},"meetups")," for leveling up your skills,\nconnecting with your peers, and getting reviews on work in progress.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you’re confused or if you’ve spotted an inconsistency, reach out on our IBM\nSlack channels. At this time, the Slack channels are for IBMers only."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ibm-studios.slack.com/messages/C0M053VPT/"},"#carbon-design-system")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ibm-studios.slack.com/archives/C046Y0YUD"},"#carbon-components")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make a ",(0,r.kt)("a",{parentName:"p",href:"/contributing/bugs-and-requests/"},"GitHub issue")," when you find a bug or\nwant to request a feature."))),(0,r.kt)("h4",null,"Keep up with the latest"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Stay up to date with Carbon’s\n",(0,r.kt)("a",{parentName:"p",href:"/whats-happening/releases/"},"roadmap and releases"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Keep your eye on the ",(0,r.kt)("a",{parentName:"p",href:"/whats-happening/work-in-progress/"},"Work in progress"),"\nsection for new resources that are currently being worked on."))),(0,r.kt)("h4",null,"Contribute back to Carbon"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/contributing/overview/"},"Contribute")," component and/or pattern enhancements,\nor create new assets, stewarded by the Carbon team.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Author usage documentation for ",(0,r.kt)("a",{parentName:"p",href:"/contributing/pattern/"},"patterns")," and\n",(0,r.kt)("a",{parentName:"p",href:"/contributing/component/"},"components"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create tooling, especially as related to design kits in various frameworks.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Explore scalable system logic such as token additions or inline theming.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Connect with the Carbon team to share work in progress and assess its\nsuitability for universal guidance."))),(0,r.kt)("h2",null,"Developers"),(0,r.kt)("p",null,"Carbon provides developers with the tools they need to build more product in\nless time, while saving them from the mind-numbing work of creating the same\nbase components over and over again."),(0,r.kt)("h3",null,"How Carbon helps developers"),(0,r.kt)("p",null,"By leveraging Carbon’s pre-built assets, developers free themselves (and their\nbacklogs) up to do the innovative work that inspires them and ultimately\nelevates the user experience for our clients."),(0,r.kt)("p",null,"Developers can create products that are cohesive with other business\nunits—high-quality, consistent, and robust front-end experiences that share the\nIBM brand."),(0,r.kt)("p",null,"Here are some ways developers can begin engaging with Carbon."),(0,r.kt)("h4",null,"Learn the system"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Familiarize yourself with the\n",(0,r.kt)("a",{parentName:"p",href:"/guidelines/2x-grid/overview/"},"Carbon foundational elements"),", the usage\ndocumentation, and the system’s\n",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/design/language/"},"design principles"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check out a tutorial in your framework of choice\n(",(0,r.kt)("a",{parentName:"p",href:"/developing/react-tutorial/overview/"},"React"),",\n",(0,r.kt)("a",{parentName:"p",href:"/developing/angular-tutorial/overview/"},"Angular")," or\n",(0,r.kt)("a",{parentName:"p",href:"/developing/vue-tutorial/overview/"},"Vue"),") and get your Developer Essentials\nbadge."))),(0,r.kt)("h4",null,"Get the tools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Visit ",(0,r.kt)("a",{parentName:"p",href:"/developing/get-started/"},"Developing > Getting Started")," on the Carbon\nwebsite and install your framework of choice.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Visit ",(0,r.kt)("a",{parentName:"p",href:"/developing/dev-resources/"},"Developer resources")," to find Carbon tools,\nas well as our GitHub repos and Storybooks for your framework of choice."))),(0,r.kt)("h4",null,"Connect with the team"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Find ",(0,r.kt)("a",{parentName:"p",href:"/whats-happening/meetups/"},"meetups")," for leveling up your skills,\nconnecting with your peers, and getting reviews on work in progress.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you’re confused or if you’ve spotted an inconsistency, reach out on our IBM\nSlack channels. At this time, the Slack channels are for IBMers only."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ibm-studios.slack.com/messages/C0M053VPT/"},"#carbon-design-system")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ibm-studios.slack.com/archives/C046Y0YUD"},"#carbon-components")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ibm-studios.slack.com/archives/C2K6RFJ1G"},"#carbon-react")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ibm-studios.slack.com/archives/CBZC0LM2N"},"#carbon-ng")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ibm-studios.slack.com/archives/CAM5P6NR1"},"#carbon-vue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ibm-studios.slack.com/archives/CL83LMKSA"},"#carbon-web-components")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ibm-studios.slack.com/archives/CJUGA7P6H"},"#carbon-tutorial")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make a ",(0,r.kt)("a",{parentName:"p",href:"/contributing/bugs-and-requests/"},"GitHub issue")," when you find a bug or\nwant to request a feature."))),(0,r.kt)("h4",null,"Keep up with the latest"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Stay up to date with Carbon’s\n",(0,r.kt)("a",{parentName:"p",href:"/whats-happening/releases/"},"roadmap and releases"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Keep your eye on the ",(0,r.kt)("a",{parentName:"p",href:"/whats-happening/work-in-progress/"},"Work in progress"),"\nsection for new resources that are currently being worked on."))),(0,r.kt)("h4",null,"Contribute back to Carbon"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/contributing/overview"},"Contribute")," component and pattern enhancements or\ncreate new assets, stewarded by the Carbon team.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Author developer documentation for patterns and components.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create any relevant tooling to help developers within your PAL community or\nthe wider community build more efficiently with Carbon.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"As you learn and grow give back to the community in the support channels."))),(0,r.kt)("h2",null,"Marketers"),(0,r.kt)("p",null,"Carbon allows teams to build excellent experiences that differentiate IBM from\nthe competition."),(0,r.kt)("p",null,"Products and experiences built with Carbon provide an interoperability of\nexperience and visuals across products. More complex multiproduct stories are\neasier to tell when product experiences are in lock step."),(0,r.kt)("p",null,"Here are some ways marketers can begin engaging with Carbon:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/brand"},"IBM Brand Center")," to learn more about\nfoundational brand compliance, as well as for the hero brand systems that\ndrive IBM’s portfolio of products and experiences.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The majority of marketing experiences use Carbon web components. Visit\n",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/standards/web/carbon-for-ibm-dotcom/"},"Carbon for IBM.com"),"\nto ensure that these experiences are adhering to Carbon guidance.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Familiarize yourself with\n",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/standards/web/"},"IBM.com web standards")," to assess the\nlegal compliance of your experience.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make sure all digital experiences by third parties meet IBM-A accessibility\nrequirements:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/toolkit/launch/readiness#marketing-materials"},"Marketing materials")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://ibm.biz/SupplierAccessibility"},"Supplier and Partnership Accessibility Requirements and Process")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://blob:https//www.ibm.com/c4c955b3-b746-c74c-86de-c852f7f1462a"},"Accessibility guidelines for suppliers"))))),(0,r.kt)("h2",null,"Product managers"),(0,r.kt)("p",null,"Carbon accelerates team productivity and time to market. It improves business\noutcomes such as increased lifetime value, revenue, NPS, and decreased churn.\nTeams using Carbon have also won awards in both the\n",(0,r.kt)("a",{parentName:"p",href:"https://pages.github.ibm.com/cdai-design/awards"},"product")," and the\n",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/design-ibm/ibm-cloud-app-id-and-assist-me-win-indigo-design-awards-47600197f780"},"digital"),"\nrealms."),(0,r.kt)("p",null,"Here are some ways product managers can begin engaging with Carbon:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Stay current with Carbon’s ",(0,r.kt)("a",{parentName:"p",href:"/whats-happening/releases/"},"releases and roadmap"),"\nto prioritize upgrading Carbon’s new assets, upstream fixes,\ndesigner/developer workflow improvements, and tooling enhancements.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Provide the Carbon team with adoption and migration feedback, as well as\nmeasured product performance with regard to Carbon, providing a healthy\ncollaboration loop. Here are some\n",(0,r.kt)("a",{parentName:"p",href:"https://pages.github.ibm.com/cdai-design/dux/"},"migration worksheets and other resources"),"."))),(0,r.kt)("h2",null,"Sales"),(0,r.kt)("p",null,"Multiproduct stories are easier to tell and sell when product experiences work\ntogether seamlessly. Suites of products built on the same foundation, that have\nthe same interactions are a dream to demo."),(0,r.kt)("p",null,"Carbon also extends\n",(0,r.kt)("a",{parentName:"p",href:"https://blog.adobe.com/en/publish/2019/11/04/adobe-and-ibm-ix-extend-partnership-to-help-enterprises-design-powerful-and-consistent-customer-experiences.html#gs.101gaxd"},"IBM iX’s capabilities"),",\nallowing iX customers to implement and customize Carbon, showcasing its\nadaptability as a white-label design system."),(0,r.kt)("p",null,"Here are some ways people in sales can begin engaging with Carbon:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Consultants who are selling digital solutions to clients should understand the\nbenefits of Carbon for rapid prototyping, demo’ing and building.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Our IBM consultants are the champions of third party Carbon use. Carbon looks\nto them for the following:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Creating case studies that highlight the effective use and benefits of\nCarbon."),(0,r.kt)("li",{parentName:"ul"},"Providing information about gaps in third party capabilities, as well as\nprioritized client requests."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Stay up to date with Carbon’s\n",(0,r.kt)("a",{parentName:"p",href:"/whats-happening/releases/"},"roadmap and releases"),"."))),(0,r.kt)("h2",null,"Support"),(0,r.kt)("p",null,"Product experiences that are built on the same foundation and work together\nseamlessly to reduce cognitive load for users, thereby reducing user errors and\nquestions, and significantly reducing the need for support."),(0,r.kt)("p",null,"Consistent experiences also result in less need for extensive training and\nonboarding resources; learning can be leveraged across multiple spaces."),(0,r.kt)("p",null,"Here are some ways people in support roles can begin engaging with Carbon:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Stay up to date with Carbon’s\n",(0,r.kt)("a",{parentName:"p",href:"/whats-happening/releases/"},"roadmap and releases"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make a ",(0,r.kt)("a",{parentName:"p",href:"/contributing/bugs-and-requests/"},"GitHub issue")," to report bugs or\naddress gaps.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Report issues in these primary support Slack channels:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ibm-studios.slack.com/messages/C0M053VPT/"},"#carbon-design-system")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ibm-studios.slack.com/archives/C046Y0YUD"},"#carbon-components")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ibm-studios.slack.com/archives/C2K6RFJ1G"},"#carbon-react"))))))}h.isMDXComponent=!0}}]);