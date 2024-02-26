import{_ as e,o as t,c as l,Q as o}from"./chunks/framework.dcb96843.js";const a="/docs-preview/pr-1442/img/rollkit.png",f=JSON.parse(`{"title":"Rollkit","description":"Learn how to build Cosmos-SDK applications that connect to Celestia's Data Availability Layer via Rollkit.","frontmatter":{"description":"Learn how to build Cosmos-SDK applications that connect to Celestia's Data Availability Layer via Rollkit.","prev":{"text":"Deploy an OP Stack devnet to Celestia","link":"/developers/optimism"},"next":{"text":"Create a wallet with celestia-node","link":"/developers/celestia-node-key"},"head":[["meta",{"name":"og:title","content":"Rollkit | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/rollkit.md","filePath":"developers/rollkit.md","lastUpdated":1708974301000}`),r={name:"developers/rollkit.md"},i=o('<h1 id="rollkit" tabindex="-1">Rollkit <a class="header-anchor" href="#rollkit" aria-label="Permalink to &quot;Rollkit&quot;">​</a></h1><p>Validator nodes allow you to participate in consensus in the Celestia network.</p><p><img src="'+a+'" alt="rollkit"></p><p><a href="https://rollkit.dev" target="_blank" rel="noreferrer">Rollkit</a> is an ABCI (Application Blockchain Interface) implementation for sovereign rollups to deploy on top of Celestia.</p><p>It is built by replacing Tendermint, the Cosmos-SDK consensus layer, with a drop-in replacement that communicates directly with Celestia&#39;s Data Availability layer.</p><p>It spins up a sovereign rollup, which collects transactions into blocks and posts them onto Celestia for consensus and data availability.</p><p>The goal of Rollkit is to enable anyone to design and deploy a sovereign rollup on Celestia in minutes.</p><p>Furthermore, while Rollkit allows you to build sovereign rollups on Celestia, it currently does not support fraud proofs yet and is therefore running in &quot;pessimistic&quot; mode, where nodes would need to re-execute the transactions to check the validity of the chain (i.e. a full node). Furthermore, Rollkit currently only supports a single sequencer.</p><h2 id="tutorials" tabindex="-1">Tutorials <a class="header-anchor" href="#tutorials" aria-label="Permalink to &quot;Tutorials&quot;">​</a></h2><p>The following tutorials will help you get started building Cosmos-SDK applications that connect to Celestia&#39;s Data Availability Layer via Rollkit. We call those chains Sovereign Rollups.</p><p>You can get started with the following tutorials:</p><ul><li><a href="https://rollkit.dev/tutorials/gm-world" target="_blank" rel="noreferrer">GM World rollup</a></li><li><a href="https://rollkit.dev/tutorials/gm-world-frontend" target="_blank" rel="noreferrer">GM World frontend</a></li><li><a href="https://rollkit.dev/tutorials/recipe-book" target="_blank" rel="noreferrer">Recipe Book rollup</a></li><li><a href="https://rollkit.dev/tutorials/wordle" target="_blank" rel="noreferrer">Wordle app</a></li><li><a href="https://rollkit.dev/tutorials/cosmwasm" target="_blank" rel="noreferrer">CosmWasm rollup</a></li><li><a href="https://rollkit.dev/tutorials/polaris-evm" target="_blank" rel="noreferrer">Polaris EVM rollup</a></li></ul>',12),s=[i];function n(p,c,d,h,u,k){return t(),l("div",null,s)}const _=e(r,[["render",n]]);export{f as __pageData,_ as default};
