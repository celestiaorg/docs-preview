import{_ as e,o as a,c as t,Q as r}from"./chunks/framework.1af124da.js";const l="/docs-preview/pr-1532/img/Celestia_ethereum-fallback.jpg",b=JSON.parse('{"title":"Ethereum fallback","description":"The DA fallback mechanism to Ethereum for rollups.","frontmatter":{"description":"The DA fallback mechanism to Ethereum for rollups.","head":[["meta",{"name":"og:title","content":"Ethereum fallback | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/ethereum-fallback.md","filePath":"developers/ethereum-fallback.md","lastUpdated":1713387352000}'),o={name:"developers/ethereum-fallback.md"},s=r('<h1 id="ethereum-fallback" tabindex="-1">Ethereum fallback <a class="header-anchor" href="#ethereum-fallback" aria-label="Permalink to &quot;Ethereum fallback&quot;">​</a></h1><p>Ethereum fallback is <a href="https://github.com/celestiaorg/optimism/pull/266" target="_blank" rel="noreferrer">a fallback mechanism</a> that enables Ethereum L2s (or L3s) to “fall back” to using Ethereum calldata for data availability in the event of downtime on Celestia Mainnet Beta. This feature is currently supported by Celestia integrations with:</p><ul><li><a href="./optimism-devnet#ethereum-fallback-mechanism-in-op-stack">OP Stack</a></li><li><a href="./arbitrum-integration#ethereum-fallback-mechanism-in-nitro">Arbitrum Nitro</a></li></ul><p>In the case of Celestia downtime or temporary unavailability, L2s can fallback to posting transactions as calldata on Ethereum or another DA layer for data availability instead of posting to Celestia. This mechanism ensures users can continue to transact securely and seamlessly, preventing disruptions and helping to ensure user funds do not get stuck in the L2&#39;s bridge on Ethereum.</p><p>Ethereum fallback is triggered whenever the sequencer has an error sending the <code>PayForBlobs</code> transaction on Celestia. Fallback can be triggered due to a congested mempool or nonce error and can be simulated with an error such as low balance or incorrect sequence. Fallback can also be triggered in the event Blobstream stops relaying attestations.</p><p><img src="'+l+'" alt="Ethereum fallback"></p>',6),n=[s];function i(c,m,h,u,d,p){return a(),t("div",null,n)}const _=e(o,[["render",i]]);export{b as __pageData,_ as default};