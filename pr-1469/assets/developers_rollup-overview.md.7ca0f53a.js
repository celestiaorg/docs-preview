import{_ as e,o as t,c as a,Q as r}from"./chunks/framework.90e78144.js";const m=JSON.parse('{"title":"Deploy a rollup","description":"Learn how to deploy rollups on Celestia.","frontmatter":{"description":"Learn how to deploy rollups on Celestia.","head":[["meta",{"name":"og:title","content":"Deploy a rollup | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/rollup-overview.md","filePath":"developers/rollup-overview.md","lastUpdated":1710175415000}'),o={name:"developers/rollup-overview.md"},l=r('<h1 id="deploy-a-rollup" tabindex="-1">Deploy a rollup <a class="header-anchor" href="#deploy-a-rollup" aria-label="Permalink to &quot;Deploy a rollup&quot;">​</a></h1><p>This section provides various guides and tutorials that cover different options for deploying rollups on Celestia.</p><h2 id="what-is-a-rollup" tabindex="-1">What is a rollup? <a class="header-anchor" href="#what-is-a-rollup" aria-label="Permalink to &quot;What is a rollup?&quot;">​</a></h2><p>A rollup is a type of blockchain that offloads some work to a layer 1, like Celestia. Rollups host applications and process user transactions. Once those transactions get processed, they are then published to layer 1. It’s layer 1s job to order those transactions and check that they are available, at minimum.</p><p>Over time, two primary designs emerged for rollups: <a href="https://celestia.org/glossary/optimistic-rollup/" target="_blank" rel="noreferrer">optimistic</a> and <a href="https://celestia.org/glossary/zk-rollup" target="_blank" rel="noreferrer">zk</a> rollups.</p><h2 id="section-contents" tabindex="-1">Section contents <a class="header-anchor" href="#section-contents" aria-label="Permalink to &quot;Section contents&quot;">​</a></h2><ul><li><a href="./rollkit">Rollkit</a></li><li><a href="./intro-to-op-stack#what-are-optimism-and-the-op-stack">Optimism</a><ul><li><a href="./intro-to-op-stack">Introduction to OP Stack integration</a></li><li><a href="./bubs-testnet">Introduction to Bubs Testnet</a></li><li><a href="./deploy-on-bubs">Deploy a smart contract on Bubs testnet</a></li><li><a href="./gm-portal-bubs">Deploy a dapp on Bubs testnet</a></li><li><a href="./optimism-devnet">Deploy an OP Stack devnet</a></li><li><a href="./optimism">Deploy an OP Stack devnet on Celestia</a></li><li><a href="https://thirdweb.com/bubs-testnet" target="_blank" rel="noreferrer">Deploy a dapp on Thirdweb</a></li><li><a href="https://docs.celestia.org/category/rollups-as-a-service/" target="_blank" rel="noreferrer">Rollups as a Service</a></li></ul></li><li>Astria <ul><li><a href="http://docs.astria.org/" target="_blank" rel="noreferrer">Explore the shared sequencer documentation</a></li><li><a href="https://docs.astria.org/docs/dusknet/overview/" target="_blank" rel="noreferrer">Learn about the Astria Dusknet</a></li></ul></li><li>Sovereign SDK <ul><li><a href="https://github.com/Sovereign-Labs/sovereign-sdk/tree/stable/examples/demo-rollup#demo-rollup" target="_blank" rel="noreferrer">Create a zk-rollup and run a full node using Sovereign SDK</a></li></ul></li><li><a href="https://docs.vistara.dev/" target="_blank" rel="noreferrer">Deploy a rollup with Vistara</a></li><li><a href="https://docs.dymension.xyz/build/roller" target="_blank" rel="noreferrer">Build a rollapp with Dymension&#39;s Roller</a></li></ul>',7),i=[l];function s(n,p,c,d,h,u){return t(),a("div",null,i)}const b=e(o,[["render",s]]);export{m as __pageData,b as default};
