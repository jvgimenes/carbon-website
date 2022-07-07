"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[42258],{28399:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67294),o=a(88650),r=a.n(o),l=a(1597),p=a(64905),i=a(81151),s=a(75900),c=a.n(s);var u=e=>{let{title:t,theme:a,tabs:o=[]}=e;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:o}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:p,branch:i}=a||o,s=`${r}/edit/${i}${p}/src/pages${t}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:s},"Edit this page on GitHub"))):null},d=a(56328),h=a(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,o=a.split("/").filter(Boolean).slice(-1)[0],p=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),p=t===o,i=new RegExp(`${o}/?(#.*)?$`),s=a.replace(i,t);return n.createElement("li",{key:e,className:c()({"PageTabs-module--selected-item--aBB0K":p},"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${s}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},p))))))},t}(n.Component);var k=g,b=a(17680),f=a(75387),N=a(50041);var y=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(N.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(N.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:o,Title:s}=e;const{frontmatter:c={},relativePagePath:h,titleType:g}=t,{tabs:N,title:w,theme:v,description:C,keywords:x,date:T}=c,{interiorTheme:A}=(0,f.Z)(),{site:{pathPrefix:I}}=(0,l.useStaticQuery)("2456312558"),P=I?o.pathname.replace(I,""):o.pathname,L=N?P.split("/").filter(Boolean).slice(-1)[0]||r()(N[0],{lower:!0}):"",E=v||A;return n.createElement(i.Z,{tabs:N,homepage:!1,theme:E,pageTitle:w,pageDescription:C,pageKeywords:x,titleType:g},n.createElement(u,{title:s?n.createElement(s,null):w,label:"label",tabs:N,theme:E}),N&&n.createElement(k,{title:w,slug:P,tabs:N,currentTab:L}),n.createElement(b.Z,{padded:!0},a,n.createElement(m,{relativePagePath:h}),n.createElement(y,{date:T})),n.createElement(d.Z,{pageContext:t,location:o,slug:P,tabs:N,currentTab:L}),n.createElement(p.Z,null))}},58292:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return k}});var n=a(45987),o=(a(67294),a(64983)),r=a(28399),l=a(80941);const p=["components"],i={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=s("PageDescription"),u=s("AnchorLinks"),m=s("AnchorLink"),d=s("InlineNotification"),h={_frontmatter:i},g=r.Z;function k(e){let{components:t}=e,a=(0,n.Z)(e,p);return(0,o.kt)(g,Object.assign({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{mdxType:"PageDescription"},(0,o.kt)("p",null,"This step takes our static components and populates them with data from the\nGitHub GraphQL API – loading states and all. We’ll be displaying Carbon\nrepository information in a data table.")),(0,o.kt)(u,{mdxType:"AnchorLinks"},(0,o.kt)(m,{mdxType:"AnchorLink"},"Fork, clone and branch"),(0,o.kt)(m,{mdxType:"AnchorLink"},"Install dependencies"),(0,o.kt)(m,{mdxType:"AnchorLink"},"Create access token"),(0,o.kt)(m,{mdxType:"AnchorLink"},"Connect to Apollo"),(0,o.kt)(m,{mdxType:"AnchorLink"},"Fetch data"),(0,o.kt)(m,{mdxType:"AnchorLink"},"Populate data table"),(0,o.kt)(m,{mdxType:"AnchorLink"},"Add loading"),(0,o.kt)(m,{mdxType:"AnchorLink"},"Add pagination"),(0,o.kt)(m,{mdxType:"AnchorLink"},"Submit pull request")),(0,o.kt)("h3",null,"Preview"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://developer.github.com/v4/"},"GitHub GraphQL API")," is very well\ndocumented, and even though the focus of this tutorial isn’t learning and using\nGraphQL, it’s a great opportunity to fetch Carbon-related data for this Carbon\ntutorial."),(0,o.kt)("p",null,"To do so, we’ll be using Apollo Client, the front-end component of the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/intro/platform"},"Apollo Platform"),". Apollo\nprovides several open source tools for using GraphQL throughout your\napplication’s stack. Apollo Client is a sophisticated GraphQL client that\nmanages data and state in an application."),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://angular-step-4-carbon-tutorial.netlify.com"},"preview")," of what you will\nbuild (see repositories page):"),(0,o.kt)(l.Z,{height:"400",title:"Carbon Tutorial Step 3",src:"https://angular-step-4-carbon-tutorial.netlify.com",frameBorder:"no",allowtransparency:"true",allowFullScreen:"true",mdxType:"Preview"}),(0,o.kt)(d,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," If you get lint errors when you copy the code from the snippets, run\n",(0,o.kt)("inlineCode",{parentName:"p"},"ng lint --fix")," to fix them.")),(0,o.kt)("h2",null,"Fork, clone and branch"),(0,o.kt)("p",null,"This tutorial has an accompanying GitHub repository called\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-tutorial-angular"},"carbon-tutorial-angular"),"\nthat we’ll use as a starting point for each step. If you haven’t forked and\ncloned that repository yet, and haven’t added the upstream remote, go ahead and\ndo so by following the\n",(0,o.kt)("a",{parentName:"p",href:"/developing/angular-tutorial/step-1#fork-clone-and-branch"},"step 1 instructions"),"."),(0,o.kt)("h3",null,"Branch"),(0,o.kt)("p",null,"With your repository all set up, let’s check out the branch for this tutorial\nstep’s starting point."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git fetch upstream\ngit checkout -b angular-step-3 upstream/angular-step-3\n")),(0,o.kt)("h3",null,"Build and start app"),(0,o.kt)("p",null,"Install the app’s dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,o.kt)("p",null,"Then, start the app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,o.kt)("p",null,"You should see something similar to where the\n",(0,o.kt)("a",{parentName:"p",href:"/developing/angular-tutorial/step-2"},"previous step")," left off. Stop your app\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL-C")," and let’s get everything installed."),(0,o.kt)("h2",null,"Install dependencies"),(0,o.kt)("p",null,"We’ll shortcut this using the Angular CLI, if you’d like more information head\nover to\n",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/angular/recipes/angular-cli/"},"Angular Apollo Installation"),"\nfor details."),(0,o.kt)(d,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," If you have not yet installed the Angular CLI, you will need to\n",(0,o.kt)("a",{parentName:"p",href:"https://cli.angular.io/"},"install the Angular CLI")," before running the Angular\nApollo Installation.")),(0,o.kt)("p",null,"Install the following"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"apollo-client")," - package containing everything you need to set up Apollo\nClient"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"graphql")," - parses your GraphQL queries"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"apollo-angular")," - Apollo integration for Angular")),(0,o.kt)("p",null,"Using the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ng add apollo-angular@v1\nng lint --fix\n")),(0,o.kt)(d,{mdxType:"InlineNotification"},(0,o.kt)("p",null,"​",(0,o.kt)("strong",{parentName:"p"},"Note:")," In case you receive\n",(0,o.kt)("inlineCode",{parentName:"p"},"ERROR in ../node_modules/graphql/subscription/subscribe.d.ts:44:3 - error TS2304: Cannot find name 'AsyncIterableIterator'."),",\nyou’ll have to add the code below in ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.app.json")," ",(0,o.kt)("inlineCode",{parentName:"p"},"lib"),": ​")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/tsconfig.app.json",path:"src/tsconfig.app.json"},'"lib": [\n  "es2016",\n  "dom",\n  "esnext.asynciterable"\n],\n')),(0,o.kt)(d,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," In case you receive\n",(0,o.kt)("inlineCode",{parentName:"p"},"typings.d.ts:2:13 - error TS2403: Subsequent variable declarations must have the same type. Variable 'module' must be of type 'NodeModule', but here has type '{ id: string; }'."),",\nyou’ll have to comment out or remove the code below in ",(0,o.kt)("inlineCode",{parentName:"p"},"typings.d.ts"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/typings.d.ts",path:"src/typings.d.ts"},"declare var module: {\n  id: string,\n};\n")),(0,o.kt)("h2",null,"Create access token"),(0,o.kt)("p",null,"You’ll need a personal access token from your GitHub account in order to make\nrequests to the GitHub API. Check out\n",(0,o.kt)("a",{parentName:"p",href:"https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line"},"this guide"),"\nto see how to get one."),(0,o.kt)("p",null,"When you get to the scope/permissions step, you can leave them all unchecked. We\ndon’t need any special permissions, we just need access to the public API."),(0,o.kt)("p",null,"Once you have your token, we need to put it in a place where we can use it in\nour app. When your application is being built and developed, our app will parse\nenvironmental variables in any ",(0,o.kt)("inlineCode",{parentName:"p"},"environment")," file and make them available."),(0,o.kt)("p",null,"​"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/environment/environment.ts",path:"src/environment/environment.ts"},"export const environment = {\n  production: false,\n  githubPersonalAccessToken: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',\n};\n")),(0,o.kt)("p",null,"Go ahead and start your app with ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start"),", or, if your app is running, you’ll\nneed to restart it to get access to this token."),(0,o.kt)("h2",null,"Connect to Apollo"),(0,o.kt)("p",null,"We need to import the environment at the top of every file that we decide to use\nit in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { environment } from '../environments/environment';\n")),(0,o.kt)("p",null,"Next, make your client by providing a URI for the GitHub GraphQL API as well as\nan authorization header using the environmental variable you just added to\n",(0,o.kt)("inlineCode",{parentName:"p"},"environment.ts"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/graphql.module.ts",path:"src/app/graphql.module.ts"},"import { HttpHeaders } from '@angular/common/http';\n\nconst uri = 'https://api.github.com/graphql'; // <-- add the URL of the GraphQL server here\nexport function createApollo(httpLink: HttpLink) {\n  return {\n    link: httpLink.create({\n      uri,\n      headers: new HttpHeaders({\n        Authorization: `Bearer ${environment.githubPersonalAccessToken}`,\n      }),\n    }),\n    cache: new InMemoryCache(),\n  };\n}\n")),(0,o.kt)("h2",null,"Fetch data"),(0,o.kt)("h3",null,"Imports"),(0,o.kt)("p",null,"Add the following import at the top of ",(0,o.kt)("inlineCode",{parentName:"p"},"repo-table.component.ts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repositories/repo-table/repo-table.component.ts",path:"src/app/repositories/repo-table/repo-table.component.ts"},"import { Apollo } from 'apollo-angular';\nimport gql from 'graphql-tag';\n")),(0,o.kt)("h3",null,"Query"),(0,o.kt)("p",null,"Next we’ll assemble our GraphQL query to fetch only the data we need from the\nGraphQL API. We’ll do this using the ",(0,o.kt)("inlineCode",{parentName:"p"},"gql")," helper we just imported. The ",(0,o.kt)("inlineCode",{parentName:"p"},"gql"),"\nhelper lets you write GraphQL queries using interpolated strings (backticks) in\nJavaScript."),(0,o.kt)("p",null,"You can use GitHub’s ",(0,o.kt)("a",{parentName:"p",href:"https://developer.github.com/v4/explorer/"},"explorer")," tool\nto write and test your own queries. Try copying the query below and experiment\nwith changing the properties. You can also click the “Docs” button in the top\nright of the explorer to view all of the available data and query parameters."),(0,o.kt)("p",null,"If you’d like some more information regarding writing queries, we recommend\n",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/tutorial/queries"},"Apollo’s documentation")," on\nthis topic."),(0,o.kt)("p",null,"First, we will add a private apollo parameter of type Apollo to the constructor\nto get access to the Apollo service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repositories/repo-table/repo-table.component.ts",path:"src/app/repositories/repo-table/repo-table.component.ts"},"constructor(private apollo: Apollo) { }\n")),(0,o.kt)("p",null,"Next, we will fetch the data in ",(0,o.kt)("inlineCode",{parentName:"p"},"ngOnInit()"),". Add the following code right below\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"model.header")," declaration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"path=src/app/repositories/repo-table/repo-table.component.ts",path:"src/app/repositories/repo-table/repo-table.component.ts"},"this.apollo.watchQuery({\n  query: gql`\n    query REPO_QUERY {\n      # Let's use carbon as our organization\n      organization(login: \"carbon-design-system\") {\n        # We'll grab all the repositories in one go. To load more resources\n        # continuously, see the advanced topics.\n        repositories(first: 75, orderBy: { field: UPDATED_AT, direction: DESC }) {\n          totalCount\n          nodes {\n            url\n            homepageUrl\n            issues(filterBy: { states: OPEN }) {\n              totalCount\n            }\n            stargazers {\n              totalCount\n            }\n            releases(first: 1) {\n              totalCount\n              nodes {\n                name\n              }\n            }\n            name\n            updatedAt\n            createdAt\n            description\n            id\n          }\n        }\n      }\n    }\n  `\n})\n")),(0,o.kt)("h3",null,"Custom data"),(0,o.kt)("p",null,"Our last column in the data table will be a comma-separated list of repository\nand home page links, so let’s create a custom cell template."),(0,o.kt)("p",null,"The column will have two values (",(0,o.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"homepageUrl"),") and will have the\nstructure of an unordered list. If the repository does not have a home page URL,\nonly render the repository link."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"path=src/app/repositories/repo-table/repo-table.component.html",path:"src/app/repositories/repo-table/repo-table.component.html"},'<ng-template #linkTemplate let-data="data">\n  <ul style="display: flex">\n    <li>\n      <a ibmLink [href]="data.github">Github</a>\n    </li>\n    <li *ngIf="data.homepage">\n      <span>&nbsp;|&nbsp;</span>\n      <a ibmLink [href]="data.homepage">HomePage</a>\n    </li>\n  </ul>\n</ng-template>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repositories/repo-table/repo-table.component.ts",path:"src/app/repositories/repo-table/repo-table.component.ts"},"@ViewChild('linkTemplate', null)\nprotected linkTemplate: TemplateRef<any>;\n")),(0,o.kt)(d,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Don’t forget to import ",(0,o.kt)("inlineCode",{parentName:"p"},"ViewChild")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TemplateRef"),".")),(0,o.kt)("p",null,"Now let’s create a function that transforms row data to our expected header\nkeys. Notice how we’re using our new ",(0,o.kt)("inlineCode",{parentName:"p"},"linkTemplate")," to generate the value of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"links")," key in each row."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repositories/repo-table/repo-table.component.ts",path:"src/app/repositories/repo-table/repo-table.component.ts"},"prepareData(data) {\n  const newData = [];\n\n  for (const datum of data) {\n    newData.push([\n      new TableItem({ data: datum.name, expandedData: datum.description }),\n      new TableItem({ data: new Date(datum.createdAt).toLocaleDateString() }),\n      new TableItem({ data: new Date(datum.updatedAt).toLocaleDateString() }),\n      new TableItem({ data: datum.issues.totalCount }),\n      new TableItem({ data: datum.stargazers.totalCount }),\n      new TableItem({\n        data: {\n          github: datum.url,\n          homepage: datum.homepageUrl\n        },\n        template: this.linkTemplate\n      })\n    ]);\n  }\n  return newData;\n}\n")),(0,o.kt)("h3",null,"Query component"),(0,o.kt)("p",null,"At this point, we should run our query and ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log()")," the results to verify\nthat the request is working."),(0,o.kt)("p",null,"If there’s an issue, we’ll render the corresponding error message. We will also\ncheck when loading is true, but add the implementation in the following steps."),(0,o.kt)("p",null,"Finally, if neither of those are true, it means we have our data! One nice\nadvantage of GraphQL is that as long as there are no errors, we can be certain\nthe properties on the data we requested aren’t ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,o.kt)("p",null,"At the end of the ",(0,o.kt)("inlineCode",{parentName:"p"},"watchQuery")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"ngOnInit()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repositories/repo-table/repo-table.component.ts",path:"src/app/repositories/repo-table/repo-table.component.ts"},".valueChanges.subscribe((response: any) => {\n  if (response.error) {\n    const errorData = [];\n    errorData.push([\n      new TableItem({data: 'error!' })\n    ]);\n    this.model.data = errorData;\n  } else if (response.loading) {\n    // Add loading state\n  } else {\n    console.log(response);\n  }\n});\n")),(0,o.kt)("p",null,"The page will look the same as we’re still rendering our static example rows,\nbut if you view your browser’s console (e.g.\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/chrome-devtools/"},"Chrome DevTools"),"),\nyou should see the response from GitHub!"),(0,o.kt)("h2",null,"Populate data table"),(0,o.kt)("p",null,"Now that we have that data, let’s populate the data table. Replace\n",(0,o.kt)("inlineCode",{parentName:"p"},"console.log(response);")," with the following that destructures the ",(0,o.kt)("inlineCode",{parentName:"p"},"organization"),"\nobject. Once we have the repositories, we can call our ",(0,o.kt)("inlineCode",{parentName:"p"},"prepareData()")," to build\nthe data table rows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repositories/repo-table/repo-table.component.ts",path:"src/app/repositories/repo-table/repo-table.component.ts"},"// If we're here, we've got our data!\nthis.model.data = this.prepareData(\n  response.data.organization.repositories.nodes\n);\n")),(0,o.kt)("p",null,"Then, in ",(0,o.kt)("inlineCode",{parentName:"p"},"ngOnInit()")," delete the static rows since we no longer need them."),(0,o.kt)("h2",null,"Add loading"),(0,o.kt)("p",null,"At this point, the first time that you visit the repositories page, we’re\nquerying the GitHub API and rendering the response through the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataTable"),"\ncomponent. We could stop here, but there’s more to be done! Let’s add the\n",(0,o.kt)("a",{parentName:"p",href:"https://angular.carbondesignsystem.com/?path=/story/table--skeleton"},"Table Skeleton"),"."),(0,o.kt)("p",null,"To do so, we will need to modify ",(0,o.kt)("inlineCode",{parentName:"p"},"repo-table.component.html")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"repo-table.component.ts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"path=src/app/repositories/repo-table/repo-table.component.html",path:"src/app/repositories/repo-table/repo-table.component.html"},'<ibm-table\n  [skeleton]="skeleton"\n  [model]="skeleton ? skeletonModel : model"\n  [showSelectionColumn]="false"\n  [striped]="false">\n</ibm-table>\n')),(0,o.kt)("p",null,"We need to tell the loading skeleton how many rows to render, so let’s use 10\nskeleton rows to prepare for the next enhancement…"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repositories/repo-table/repo-table.component.ts",path:"src/app/repositories/repo-table/repo-table.component.ts"},"skeletonModel = Table.skeletonModel(10, 6);\nskeleton = true;\n")),(0,o.kt)(d,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Don’t forget to import ",(0,o.kt)("inlineCode",{parentName:"p"},"Table"),".")),(0,o.kt)("p",null,"Then replace the comment with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repositories/repo-table/repo-table.component.ts",path:"src/app/repositories/repo-table/repo-table.component.ts"},"else if (response.loading) {\n  this.skeleton = true;\n}\n")),(0,o.kt)("p",null,"and at the top of the ",(0,o.kt)("inlineCode",{parentName:"p"},"prepareData()")," function add:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repositories/repo-table/repo-table.component.ts",path:"src/app/repositories/repo-table/repo-table.component.ts"},"this.skeleton = false;\n")),(0,o.kt)("h2",null,"Add pagination"),(0,o.kt)("p",null,"Pagination! Instead of rendering every repository, let’s add pagination to the\ndata table to only render 10 at a time. Depending on your specific requirements,\nyou may need to fetch new data each time that you interact with the pagination\ncomponent, but for simplicity, we’re going to make one request to fetch all\ndata, and then paginate the in-memory row data."),(0,o.kt)("p",null,"First we will create an array and populate it with 10 rows at a time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"data = [];\n")),(0,o.kt)("p",null,"Next, replace the code where we call ",(0,o.kt)("inlineCode",{parentName:"p"},"preapreData()")," with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repositories/repo-table/repo-table.component.ts",path:"src/app/repositories/repo-table/repo-table.component.ts"},"this.data = response.data.organization.repositories.nodes;\nthis.model.pageLength = 10;\nthis.model.totalDataLength = response.data.organization.repositories.totalCount;\nthis.selectPage(1);\n")),(0,o.kt)("p",null,"This initializes the page size to ",(0,o.kt)("inlineCode",{parentName:"p"},"10")," as we also specified in our loading\nskeleton."),(0,o.kt)("p",null,"Next we will call ",(0,o.kt)("inlineCode",{parentName:"p"},"selectPage()"),". This will initialize the offset and use\n",(0,o.kt)("inlineCode",{parentName:"p"},"prepareData()")," to only render the subset of rows for the current “page”."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repositories/repo-table/repo-table.component.ts",path:"src/app/repositories/repo-table/repo-table.component.ts"},"selectPage(page) {\n  const offset = this.model.pageLength * (page - 1);\n  const pageRawData = this.data.slice(offset, offset + this.model.pageLength);\n  this.model.data = this.prepareData(pageRawData);\n  this.model.currentPage = page;\n}\n")),(0,o.kt)(d,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," We only pass the rows that we want our table to display. We can do\nthis by slicing our array of rows depending on the first item and the page size.")),(0,o.kt)("p",null,"Finally, let’s import the ",(0,o.kt)("inlineCode",{parentName:"p"},"LinkModule")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PaginationModule")," to\n",(0,o.kt)("inlineCode",{parentName:"p"},"repositories.module.ts")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"repo-table.component.spec")," and add the template\nfor pagination."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repositories/repositories.module.ts,src/app/repositories/repo-table/repo-table.component.spec.ts",path:"src/app/repositories/repositories.module.ts,src/app/repositories/repo-table/repo-table.component.spec.ts"},"import { LinkModule, PaginationModule } from 'carbon-components-angular';\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"path=src/app/repositories/repositories.module.ts,src/app/repositories/repo-table/repo-table.component.spec.ts",path:"src/app/repositories/repositories.module.ts,src/app/repositories/repo-table/repo-table.component.spec.ts"},"imports: [LinkModule, PaginationModule];\n")),(0,o.kt)("p",null,"Immediately after the ",(0,o.kt)("inlineCode",{parentName:"p"},"ibm-table")," closing tag (",(0,o.kt)("inlineCode",{parentName:"p"},"/>"),"), add the ",(0,o.kt)("inlineCode",{parentName:"p"},"ibm-pagination"),"\ncomponent."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"path=src/app/repositories/repo-table/repo-table.component.html",path:"src/app/repositories/repo-table/repo-table.component.html"},'<ibm-pagination\n  [model]="model"\n  (selectPage)="selectPage($event)">\n</ibm-pagination>\n')),(0,o.kt)(d,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Like the other Carbon Angular component, ",(0,o.kt)("inlineCode",{parentName:"p"},"pagination")," component\nexamples can be found in\n",(0,o.kt)("a",{parentName:"p",href:"https://angular.carbondesignsystem.com/?path=/story/table--with-pagination"},"Storybook"),"\nby browsing the story and knobs.")),(0,o.kt)("p",null,"That does it! Your data table should fetch GitHub data on first render. You can\nexpand each row to see the repository’s description. You can modify the\npagination items per page and cycle through pages or jump to a specific page of\nrepositories."),(0,o.kt)("h2",null,"Submit pull request"),(0,o.kt)("p",null,"We’re going to submit a pull request to verify completion of this tutorial step."),(0,o.kt)("h3",null,"Continuous integration (CI) check"),(0,o.kt)("p",null,"Run the CI check to make sure we’re all set to submit a pull request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ng lint --fix\nnpm run lint && npm test\n")),(0,o.kt)(d,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Having issues running the CI check?\n",(0,o.kt)("a",{parentName:"p",href:"/developing/angular-tutorial/step-1#continuous-integration-(ci)-check"},"Step 1"),"\nhas troubleshooting notes that may help.")),(0,o.kt)("h3",null,"Git commit and push"),(0,o.kt)("p",null,"Before we can create a pull request, stage and commit all of your changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git add --all && git commit -m "feat(tutorial): complete step 3"\n')),(0,o.kt)("p",null,"Then, push to your repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git push origin angular-step-3\n")),(0,o.kt)(d,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Having issues pushing your changes?\n",(0,o.kt)("a",{parentName:"p",href:"/developing/angular-tutorial/step-1#git-commit-and-push"},"Step 1")," has\ntroubleshooting notes that may help.")),(0,o.kt)("h3",null,"Pull request (PR)"),(0,o.kt)("p",null,"Finally, visit\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-tutorial-angular"},"carbon-tutorial-angular"),"\nto “Compare & pull request”. In doing so, make sure that you are comparing to\n",(0,o.kt)("inlineCode",{parentName:"p"},"angular-step-3")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"base: angular-step-3"),"."),(0,o.kt)(d,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Your tutorial step will be automatically reviewed based on the status\nof your tests. Ensure that your tests pass when you submit your PR. Expect your\ntutorial step PRs to be reviewed by the Carbon team but not merged. We’ll close\nyour PR so we can keep the repository’s remote branches pristine and ready for\nthe next person!")))}k.isMDXComponent=!0}}]);