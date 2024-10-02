import{_ as a,o as l,c as r,k as e,a as t}from"./chunks/framework.455c32ec.js";const s="/docs-preview/pr-1747/img/Celestia_ethereum-fallback.jpg",y=JSON.parse('{"title":"Ethereum fallback","description":"The DA fallback mechanism to Ethereum for rollups.","frontmatter":{"description":"The DA fallback mechanism to Ethereum for rollups.","next":{"text":"Blobstream rollups","link":"/developers/blobstream-rollups"},"prev":{"text":"Run an OP Stack devnet posting Celestia","link":"/developers/optimism"},"head":[["meta",{"name":"og:title","content":"Ethereum fallback | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/ethereum-fallback.md","filePath":"developers/ethereum-fallback.md","lastUpdated":1727858611000}'),n={name:"developers/ethereum-fallback.md"},o=e("h1",{id:"ethereum-fallback",tabindex:"-1"},[t("Ethereum fallback "),e("a",{class:"header-anchor",href:"#ethereum-fallback","aria-label":'Permalink to "Ethereum fallback"'},"​")],-1),i=e("p",null,"Ethereum fallback is a mechanism that enables Ethereum L2s (or L3s) to “fall back” to using Ethereum calldata for data availability in the event of downtime on Celestia Mainnet Beta. This feature is currently supported by Celestia integrations with:",-1),c=e("ul",null,[e("li",null,[e("a",{href:"./arbitrum-integration#ethereum-fallback-mechanism-in-nitro"},"Arbitrum Nitro")])],-1),h=e("p",null,"In the case of Celestia downtime or temporary unavailability, L2s can fallback to posting transactions as calldata on Ethereum or another DA layer for data availability instead of posting to Celestia. This mechanism ensures users can continue to transact securely and seamlessly, preventing disruptions and helping to ensure user funds do not get stuck in the L2's bridge on Ethereum.",-1),m=e("p",null,[t("Ethereum fallback is triggered whenever the sequencer has an error sending the "),e("code",null,"PayForBlobs"),t(" transaction on Celestia. Fallback can be triggered due to a congested mempool or nonce error and can be simulated with an error such as low balance or incorrect sequence. Fallback can also be triggered in the event Blobstream stops relaying attestations.")],-1),u=e("p",null,[e("img",{src:s,alt:"Ethereum fallback"})],-1),d=[o,i,c,h,m,u];function p(b,f,k,_,g,v){return l(),r("div",null,d)}const x=a(n,[["render",p]]);export{y as __pageData,x as default};
