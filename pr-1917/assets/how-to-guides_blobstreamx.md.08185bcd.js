import{_ as e,o as t,c as o,Q as a}from"./chunks/framework.5f4bf297.js";const r="/docs-preview/pr-1917/img/blobstream/Celestia_Blobstream_X1b.png",s="/docs-preview/pr-1917/img/blobstream/Celestia_Blobstream_X2b.png",g=JSON.parse('{"title":"Blobstream X: the previous zk implementation of Blobstream","description":"What is BlobstreamX","frontmatter":{"description":"What is BlobstreamX","prev":{"text":"New SP1 Blobstream deployments","link":"/how-to-guides/sp1-blobstream-deploy"},"head":[["meta",{"property":"og:title","content":"Blobstream X: the previous zk implementation of Blobstream | Celestia Docs"}],["meta",{"property":"og:description","content":"What is BlobstreamX"}]]},"headers":[],"relativePath":"how-to-guides/blobstreamx.md","filePath":"how-to-guides/blobstreamx.md","lastUpdated":1741116848000}'),c={name:"how-to-guides/blobstreamx.md"},l=a('<h1 id="blobstream-x-the-previous-zk-implementation-of-blobstream" tabindex="-1">Blobstream X: the previous zk implementation of Blobstream <a class="header-anchor" href="#blobstream-x-the-previous-zk-implementation-of-blobstream" aria-label="Permalink to &quot;Blobstream X: the previous zk implementation of Blobstream&quot;">​</a></h1><p><img src="'+r+'" alt="blobstream x draft diagram"></p><h2 id="what-is-blobstream-x" tabindex="-1">What is Blobstream X? <a class="header-anchor" href="#what-is-blobstream-x" aria-label="Permalink to &quot;What is Blobstream X?&quot;">​</a></h2><p>Blobstream X is the previous implementation of Blobstream. It uses <a href="https://github.com/succinctlabs/succinctx/tree/main/plonky2x" target="_blank" rel="noreferrer">plonky2x</a> to create circuits that verify the Celestia consensus and generate the corresponding proofs.</p><p>Blobstream X is built and deployed with <a href="https://platform-docs.succinct.xyz" target="_blank" rel="noreferrer">Succinct&#39;s protocol</a>.</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>The Blobstream deployments below don&#39;t use the BlobstreamX circuits.</p></div><p>You can <a href="https://github.com/succinctlabs/blobstreamx" target="_blank" rel="noreferrer">find the repository for Blobstream X</a> along with code for:</p><ul><li><a href="https://github.com/succinctlabs/blobstreamx/blob/main/contracts/src/BlobstreamX.sol" target="_blank" rel="noreferrer">The Blobstream X smart contract - <code>BlobstreamX.sol</code></a></li><li><a href="https://alpha.succinct.xyz/celestia/blobstreamx" target="_blank" rel="noreferrer">The Blobstream X circuits</a></li><li><a href="https://github.com/succinctlabs/blobstreamx/blob/main/bindings/BlobstreamX.go" target="_blank" rel="noreferrer">The Blobstream X contract Golang bindings</a></li></ul><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>Custom ranges can be requested using the <code>BlobstreamX</code> contract to create proofs for specific Celestia block batches. These ranges can be constructed as <code>[latestBlock, customTargetBlock)</code>, with <code>latestBlock</code> as the latest block height that was committed to by the <code>BlobstreamX</code> contract, and <code>latestBlock &gt; customTargetBlock</code>, and <code>customTargetBlock - latestBlock &lt;= DATA_COMMITMENT_MAX</code>.</p><p>Block ranges that are before the contract&#39;s <code>latestBlock</code> can&#39;t be proven a second time in different batches.</p><p>More information can be found in the <a href="https://github.com/succinctlabs/blobstreamx/blob/364d3dc8c8dc9fd44b6f9f049cfb18479e56cec4/contracts/src/BlobstreamX.sol#L78-L101" target="_blank" rel="noreferrer"><code>requestHeaderRange(...)</code></a> method.</p></div><h2 id="how-blobstream-x-works" tabindex="-1">How Blobstream X works <a class="header-anchor" href="#how-blobstream-x-works" aria-label="Permalink to &quot;How Blobstream X works&quot;">​</a></h2><p>As shown in the diagram below, the entrypoint for updates to the Blobstream X contract is through the <code>SuccinctGateway</code> smart contract, which is a simple entrypoint contract that verifies proofs (against a deployed onchain verifier for the Blobstream X circuit) and then calls the <code>BlobstreamX.sol</code> contract to update it. <a href="https://platform-docs.succinct.xyz/platform/onchain-integration#succinct-gateway" target="_blank" rel="noreferrer">Find more information about the <code>SuccinctGateway</code></a>.</p><p><img src="'+s+'" alt="blobstream x overview diagram draft"></p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>If the Blobstream X contract is not deployed on a desired chain, it needs to be deployed before it can be used by your rollup. See the <a href="https://platform-docs.succinct.xyz/platform/onchain-integration#non-canonical-chain-contract-deployment" target="_blank" rel="noreferrer">deployment documentation</a> for more details.</p></div><h2 id="deploy-blobstream-x" tabindex="-1">Deploy Blobstream X <a class="header-anchor" href="#deploy-blobstream-x" aria-label="Permalink to &quot;Deploy Blobstream X&quot;">​</a></h2><p>It is possible to deploy and maintain a Blobstream x instance and have the same security guarantees.</p><p>First, you will need to create a multisig that governs the Blobstream X contract and also the function identifiers. The function identifiers can be registered in the <a href="https://platform-docs.succinct.xyz/platform/onchain-integration#register-circuits-with-your-deployed-succinct-gateway" target="_blank" rel="noreferrer">Succinct gateway</a>.</p><p>Then, check the <a href="https://github.com/succinctlabs/blobstreamx/blob/main/README.md#blobstreamx-contract-overview" target="_blank" rel="noreferrer">deployment</a> documentation for how to deploy the contract.</p><p>Then, you will need to run a relayer, which will generate the proofs and relay them to your deployed Blobstream X contract. Check the <a href="/docs-preview/pr-1917/how-to-guides/blobstream-x-requesting-data-commitment-ranges#local-proving">local proving documentation</a> for more information.</p><h2 id="community-implementations" tabindex="-1">Community implementations <a class="header-anchor" href="#community-implementations" aria-label="Permalink to &quot;Community implementations&quot;">​</a></h2><p>Learn more about the community <a href="https://github.com/CryptoKass/blobstreamx-example" target="_blank" rel="noreferrer">implementation of Blobstream proofs by CryptoKass</a>.</p>',20),i=[l];function n(m,b,h,p,d,u){return t(),o("div",null,i)}const y=e(c,[["render",n]]);export{g as __pageData,y as default};
