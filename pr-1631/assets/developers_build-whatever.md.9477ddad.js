import{_ as d,o as l,c as r,k as t,t as i,e as p,H as e,Q as s,a as n}from"./chunks/framework.3cedf6e3.js";const h="/docs-preview/pr-1631/img/da-and-validity.png";const m={name:"UrlImageButton",props:{url:String,imageSrc:String,text:String,notes:{type:String,default:""}}},b=["href"],g={class:"url-image-button"},f=["src"],y={class:"button-text"},k={key:0,class:"notes-text"};function _(c,u,o,B,T,D){return l(),r("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",class:"button-link"},[t("button",g,[t("img",{src:o.imageSrc,alt:"",class:"button-icon"},null,8,f),t("span",y,i(o.text),1),o.notes?(l(),r("span",k,i(o.notes),1)):p("",!0)])],8,b)}const a=d(m,[["render",_],["__scopeId","data-v-21baf7e3"]]),w=s('<h1 id="build-whatever" tabindex="-1">Build whatever <a class="header-anchor" href="#build-whatever" aria-label="Permalink to &quot;Build whatever&quot;">​</a></h1><p>If you&#39;re a developer and want to know what the benefits of modular blockchains are for you, you’ve come to the right place. This page will give you the rundown on modular blockchains and their benefits for developers like you.</p><p>This section provides various guides and tutorials that cover different options for deploying rollups on Celestia.</p><h2 id="quickstart-building-on-celestia" tabindex="-1">Quickstart - Building on Celestia <a class="header-anchor" href="#quickstart-building-on-celestia" aria-label="Permalink to &quot;Quickstart - Building on Celestia&quot;">​</a></h2><h3 id="choose-a-framework" tabindex="-1">Choose a framework <a class="header-anchor" href="#choose-a-framework" aria-label="Permalink to &quot;Choose a framework&quot;">​</a></h3><p>So, you’re ready to start experimenting and building on Celestia? Here are a few options that are currently available for developers.</p>',6),v={style:{display:"flex","flex-wrap":"wrap","justify-content":"center","align-items":"center","grid-template-columns":"repeat(auto-fill, minmax(150px, 1fr))",gap:"20px"}},x=t("h3",{id:"rollups-as-a-service",tabindex:"-1"},[n("Rollups as a Service "),t("a",{class:"header-anchor",href:"#rollups-as-a-service","aria-label":'Permalink to "Rollups as a Service"'},"​")],-1),S=t("p",null,"Deploy your rollup with a RaaS provider.",-1),C={style:{display:"flex","flex-wrap":"wrap","justify-content":"center","align-items":"center","grid-template-columns":"repeat(auto-fill, minmax(150px, 1fr))",gap:"20px"}},P=t("h3",{id:"smart-contracts",tabindex:"-1"},[n("Smart contracts "),t("a",{class:"header-anchor",href:"#smart-contracts","aria-label":'Permalink to "Smart contracts"'},"​")],-1),q=t("p",null,"Deploy your smart contracts on dedicated EVM-compatible rollups.",-1),A={style:{display:"flex","flex-wrap":"wrap","justify-content":"center","align-items":"center","grid-template-columns":"repeat(auto-fill, minmax(150px, 1fr))",gap:"20px"}},V=s('<h2 id="what-is-a-rollup" tabindex="-1">What is a rollup? <a class="header-anchor" href="#what-is-a-rollup" aria-label="Permalink to &quot;What is a rollup?&quot;">​</a></h2><p>A rollup is a type of blockchain that offloads some work to a layer 1, like Celestia. Rollups host applications and process user transactions. Once those transactions get processed, they are then published to layer 1. It’s layer 1s job to order those transactions and check that they are available, at minimum.</p><h2 id="what-is-a-modular-blockchain" tabindex="-1">What is a modular blockchain? <a class="header-anchor" href="#what-is-a-modular-blockchain" aria-label="Permalink to &quot;What is a modular blockchain?&quot;">​</a></h2><p>With blockchains there are more or less four core functions that they do.</p><ul><li><strong>Execution</strong>: transaction execution and state update.</li><li><strong>Settlement</strong>: finality and dispute resolution.</li><li><strong>Consensus</strong>: agreement on transaction ordering.</li><li><strong>Data availability</strong>: prove data was published to the network.</li></ul><p>Modular blockchains specialize in one or two of these functions rather than doing all of them like a monolithic blockchain. You probably know about layer 1s and layer 2s. That’s the general idea.</p><p>A typical example of a modular blockchain you might’ve heard of is a rollup. Rollups host smart contracts and execute transactions, much like any monolithic chain. But, the data of those transactions get sent to a layer 1 blockchain to carry out the remaining functions.</p><p>If you want to brush up on your understanding of modular blockchains, head over to <a href="https://celestia.org/learn/" target="_blank" rel="noreferrer">learn modular</a>.</p><h2 id="benefits-of-modular-blockchains" tabindex="-1">Benefits of modular blockchains <a class="header-anchor" href="#benefits-of-modular-blockchains" aria-label="Permalink to &quot;Benefits of modular blockchains&quot;">​</a></h2><h3 id="ease-of-deploying-a-chain" tabindex="-1">Ease of deploying a chain <a class="header-anchor" href="#ease-of-deploying-a-chain" aria-label="Permalink to &quot;Ease of deploying a chain&quot;">​</a></h3><p>One of the goals of modular blockchains is to make it as easy to deploy a blockchain as a smart contract. There are a few unique ways that modular blockchains can significantly reduce the cost of deploying a new blockchain.</p><ol><li><strong>No validator set is required</strong>. Rollups can deploy without sourcing their own set of validators or sequencers.</li><li><strong>Inherit security from the start</strong>. Rollups don’t need to build all their security from scratch.</li><li><strong>Any part of the stack can be delegated</strong>. Development time can be reduced by outsourcing functions of the rollup to external providers.</li></ol><p>All in all, builders will be able to outsource as much of the stack as they need. Deploying a new blockchain will be as simple as clicking a few options to initialize a production-ready rollup.</p><h3 id="scaling" tabindex="-1">Scaling <a class="header-anchor" href="#scaling" aria-label="Permalink to &quot;Scaling&quot;">​</a></h3><p>Of course, a much higher scale is necessary if we want to support many more users. And modular blockchains use some new innovative technologies that can help us get there.</p><ul><li><a href="https://celestia.org/glossary/data-availability-sampling/" target="_blank" rel="noreferrer">Data availability sampling</a> enables modular blockchains like Celestia to scale data availability with the number of light nodes - that means more capacity for rollups.</li><li><strong>Fraud and validity proofs</strong> make rollups vastly more efficient to verify. Nodes only need to verify a small proof of transaction validity (<a href="https://celestia.org/glossary/validity-proof/" target="_blank" rel="noreferrer">validity proof</a>) or assume transactions are valid by default (<a href="https://celestia.org/glossary/state-transition-fraud-proof/" target="_blank" rel="noreferrer">fraud proof</a>). This means rollups don’t require every node in the network to re-execute every transaction.</li></ul><p><img src="'+h+'" alt="image"></p><ul><li><strong>Decoupling execution from consensus</strong> lets developers define the VM that best fits the scaling needs of their application.</li><li><strong>Separating applications</strong> across multiple rollups isolates congestion. If an application congests the execution capacity of one rollup, all other rollups remain unaffected in their execution capacity.</li></ul><p>All these scaling properties combined make new types of applications and features possible, like onchain gaming, dynamic metadata, and ephemeral rollups, to name a few.</p><h3 id="customizability" tabindex="-1">Customizability <a class="header-anchor" href="#customizability" aria-label="Permalink to &quot;Customizability&quot;">​</a></h3><p>By design, modular blockchains don’t lock in any feature set. They promote experimentation and customization.</p><p>Remember how decoupling execution from consensus enables VM customizability? Well, rollups are the execution component. Applications can run on their own rollup and adjust the VM to maximize their application&#39;s performance. Developers have that flexibility because Celestia&#39;s execution logic doesn&#39;t restrict rollups.</p><p>Basically, rollups can be customized to integrate any new or existing VM stack.</p><p>With existing rollup frameworks, developers can run rollup testnets using the EVM or Cosmos SDK. In the future, one can imagine a variety of VMs that rollup frameworks support, providing developers with more out-of-the-box options for their applications.</p><p>Some customizations that could be made to a rollup&#39;s VM include custom precompiles, changing transaction processing from sequential to parallel, or adding support for private smart contracts.</p><p>All of this only scratches the surface.</p>',26),R=JSON.parse('{"title":"Build whatever","description":"Advantages of building on modular blockchains like Celestia.","frontmatter":{"description":"Advantages of building on modular blockchains like Celestia.","head":[["meta",{"name":"og:title","content":"Build whatever | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/build-whatever.md","filePath":"developers/build-whatever.md","lastUpdated":1719412878000}'),O={name:"developers/build-whatever.md"},I=Object.assign(O,{setup(c){return(u,o)=>(l(),r("div",null,[w,t("div",v,[e(a,{url:"/developers/intro-to-op-stack",imageSrc:"/build/opstack.webp",text:"OP Stack",notes:"EVM",target:"_self",alt:"OP Stack logo","aria-label":"OP Stack"}),e(a,{url:"/developers/arbitrum-integration",imageSrc:"/build/arbitrum.webp",text:"Arbitrum Orbit",notes:"EVM",target:"_self",alt:"Arbitrum logo","aria-label":"Arbitrum"}),e(a,{url:"https://github.com/Sovereign-Labs/sovereign-sdk/tree/stable/examples/demo-rollup#demo-rollup",imageSrc:"/build/sovereign.webp",text:"Sovereign SDK",notes:"Sovereign",alt:"Sovereign logo","aria-label":"Sovereign"}),e(a,{url:"https://docs.dymension.xyz/build/overview/",imageSrc:"/build/dymension.webp",text:"Dymension",alt:"Dymension logo","aria-label":"Dymension"}),e(a,{url:"https://rollkit.dev",imageSrc:"/build/rollkit.webp",text:"Rollkit",notes:"Sovereign",alt:"Rollkit logo","aria-label":"Rollkit"})]),x,S,t("div",C,[e(a,{url:"https://altlayer.io/raas/",imageSrc:"/build/altlayer.webp",text:"AltLayer",notes:"Orbit, OP Stack",alt:"AltLayer logo","aria-label":"AltLayer"}),e(a,{url:"https://www.astria.org/",imageSrc:"/build/astria.webp",text:"Astria",alt:"Astria logo","aria-label":"Astria"}),e(a,{url:"https://www.caldera.xyz/",imageSrc:"/build/caldera.webp",text:"Caldera",notes:"Orbit, OP Stack",alt:"Caldera logo","aria-label":"Caldera"}),e(a,{url:"https://conduit.xyz/",imageSrc:"/build/conduit.webp",text:"Conduit",notes:"Orbit, OP Stack",alt:"Conduit logo","aria-label":"Conduit"}),e(a,{url:"https://www.gelato.network/",imageSrc:"/build/gelato.webp",text:"Gelato",notes:"Orbit, OP Stack",alt:"Gelato logo","aria-label":"Gelato"}),e(a,{url:"https://www.karnot.xyz/",imageSrc:"/build/karnot.webp",text:"Karnot",notes:"Starknet",alt:"Karnot logo","aria-label":"Karnot"}),e(a,{url:"https://docs.vistara.dev/",imageSrc:"/build/vistara.webp",text:"Vistara",alt:"Vistara logo","aria-label":"Vistara"}),e(a,{url:"https://www.zeeve.io/",imageSrc:"/build/zeeve.webp",text:"Zeeve",notes:"Orbit, OP Stack",alt:"Zeeve logo","aria-label":"Zeeve"})]),P,q,t("div",A,[e(a,{url:"https://bubstestnet.com/",imageSrc:"/build/caldera.webp",text:"Bubs testnet",notes:"OP Stack",alt:"Caldera logo","aria-label":"Caldera Bubs testnet"}),e(a,{url:"https://raas.gelato.network/rollups/details/public/opcelestia-raspberry",imageSrc:"/build/gelato.webp",text:"Raspberry testnet",notes:"OP Stack",alt:"Gelato logo","aria-label":"Gelato Raspberry testnet"})]),V]))}});export{R as __pageData,I as default};
