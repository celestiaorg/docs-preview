import{_ as e,o as a,c as t,Q as s}from"./chunks/framework.39f61868.js";const n="/docs-preview/pr-1471/img/Celestia-Arbitrum.png",f=JSON.parse('{"title":"Introduction to Arbitrum rollups with Celestia as DA","description":"An overview of the integration of Arbitrum Nitro with Celestia, detailing the key features and benefits, including the Ethereum fallback mechanism.","frontmatter":{"description":"An overview of the integration of Arbitrum Nitro with Celestia, detailing the key features and benefits, including the Ethereum fallback mechanism.","head":[["meta",{"name":"og:title","content":"Introduction to Arbitrum rollups with Celestia as DA | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/arbitrum-integration.md","filePath":"developers/arbitrum-integration.md","lastUpdated":1710201924000}'),o={name:"developers/arbitrum-integration.md"},r=s('<h1 id="introduction-to-arbitrum-rollups-with-celestia-as-da" tabindex="-1">Introduction to Arbitrum rollups with Celestia as DA <a class="header-anchor" href="#introduction-to-arbitrum-rollups-with-celestia-as-da" aria-label="Permalink to &quot;Introduction to Arbitrum rollups with Celestia as DA&quot;">​</a></h1><p><img src="'+n+`" alt="Celestia_Arbitrum"></p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>The <a href="https://blog.celestia.org/celestia-is-first-modular-data-availability-network-to-integrate-with-arbitrum-orbit/" target="_blank" rel="noreferrer">integration of Celestia with Arbitrum Orbit</a> and the Nitro tech stack marks the first external contribution to the Arbitrum Orbit protocol layer, offering developers an additional option for selecting a data availability layer alongside Arbitrum AnyTrust. The integration allows developers to deploy an Arbitrum Rollup that uses Celestia for data availability and settles on Ethereum.</p><p><a href="https://docs.arbitrum.io/launch-orbit-chain/orbit-gentle-introduction" target="_blank" rel="noreferrer">Arbitrum Orbit</a> is a framework that enables the creation of customized, self-managed Arbitrum Rollup and AnyTrust chains. Key highlights of Arbitrum Orbit include:</p><ol><li><strong>Creation of custom chains</strong>: Orbit allows the creation of dedicated chains that settle to Arbitrum&#39;s Layer 2 chains (Arbitrum One, Nova, Goerli, Sepolia), with customizable features like throughput, privacy, gas token, and governance.</li><li><strong>Solving Ethereum&#39;s scalability</strong>: Orbit addresses Ethereum&#39;s congestion and high demand for block space by enabling the creation of personal rollups, which offer scalable, secure alternatives to Ethereum&#39;s public chains.</li><li><strong>Decentralized application development</strong>: Orbit chains provide dedicated throughput, EVM+ compatibility, independent roadmaps, and reliable gas prices enhancing the development and operation of decentralized apps.</li><li><strong>Benefits to the Ethereum ecosystem</strong>: Orbit contributes to a multi-chain future for Ethereum, enhancing scalability, offering flexible security models, and enabling experimentation with execution environments and governance models.</li><li><strong>Versatility and interoperability</strong>: Orbit chains can be used for a range of purposes, from hosting a single dApp to an ecosystem of dApps, with the capability to communicate with other Orbit chains.</li></ol><h3 id="blobstream" tabindex="-1">Blobstream <a class="header-anchor" href="#blobstream" aria-label="Permalink to &quot;Blobstream&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">UPCOMING INTEGRATION</p><p>The Blobstream section is currently under development. Please note that the integration with Blobstream is not yet finalized, but it is planned for implementation in the near future.</p></div><p>The Celestia and Arbitrum integration also <a href="./blobstream">includes Blobstream</a>, which relays commitments to Celestia’s data root to an onchain light client on Ethereum. This allows L2 solutions that settle on Ethereum to benefit from the scalability Celestia’s data availability layer can provide.</p><p>As part of this integration, Blobstream is being called from the Arbitrum <code>SequencerInbox.sol</code> contract.</p><p>In the <code>SequencerInbox.sol</code> contract, the <code>validateBatchData</code> modifier has been designed to authenticate that the data root is on Celestia when reading a batch of data. This is achieved by the <a href="https://github.com/celestiaorg/nitro-contracts/blob/celestia/blobstream/src/bridge/SequencerInbox.sol#L334-L360" target="_blank" rel="noreferrer">following code in <code>SequencerInbox.sol</code> by @Ferret-San</a>:</p><p>Note that the data above is the bytes serialized version of this struct in Go:</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BlobPointer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   BlockHeight    </span><span style="color:#F97583;">uint64</span></span>
<span class="line"><span style="color:#E1E4E8;">   Start          </span><span style="color:#F97583;">uint64</span></span>
<span class="line"><span style="color:#E1E4E8;">   SharesLength   </span><span style="color:#F97583;">uint64</span></span>
<span class="line"><span style="color:#E1E4E8;">   Key            </span><span style="color:#F97583;">uint64</span></span>
<span class="line"><span style="color:#E1E4E8;">   NumLeaves      </span><span style="color:#F97583;">uint64</span></span>
<span class="line"><span style="color:#E1E4E8;">   TupleRootNonce </span><span style="color:#F97583;">uint64</span></span>
<span class="line"><span style="color:#E1E4E8;">   TxCommitment [</span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">byte</span></span>
<span class="line"><span style="color:#E1E4E8;">   DataRoot     [</span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">byte</span></span>
<span class="line"><span style="color:#E1E4E8;">   SideNodes    [][</span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">byte</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BlobPointer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   BlockHeight    </span><span style="color:#D73A49;">uint64</span></span>
<span class="line"><span style="color:#24292E;">   Start          </span><span style="color:#D73A49;">uint64</span></span>
<span class="line"><span style="color:#24292E;">   SharesLength   </span><span style="color:#D73A49;">uint64</span></span>
<span class="line"><span style="color:#24292E;">   Key            </span><span style="color:#D73A49;">uint64</span></span>
<span class="line"><span style="color:#24292E;">   NumLeaves      </span><span style="color:#D73A49;">uint64</span></span>
<span class="line"><span style="color:#24292E;">   TupleRootNonce </span><span style="color:#D73A49;">uint64</span></span>
<span class="line"><span style="color:#24292E;">   TxCommitment [</span><span style="color:#005CC5;">32</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">byte</span></span>
<span class="line"><span style="color:#24292E;">   DataRoot     [</span><span style="color:#005CC5;">32</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">byte</span></span>
<span class="line"><span style="color:#24292E;">   SideNodes    [][</span><span style="color:#005CC5;">32</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">byte</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="ethereum-fallback-mechanism-in-nitro" tabindex="-1">Ethereum fallback mechanism in Nitro <a class="header-anchor" href="#ethereum-fallback-mechanism-in-nitro" aria-label="Permalink to &quot;Ethereum fallback mechanism in Nitro&quot;">​</a></h3><p>Another feature of this integration is the <a href="./ethereum-fallback">Ethereum fallback mechanism</a>, which enables Ethereum L2s (or L3s) to “fall back” to using Ethereum calldata for data availability in the event of downtime on Celestia Mainnet Beta.</p><p>In the case of Celestia downtime or temporary unavailability, L2s can fallback to posting transactions as calldata on Ethereum or another DA layer for data availability instead of posting to Celestia. This mechanism ensures users can continue to transact securely and seamlessly, preventing disruptions and helping to ensure user funds do not get stuck in the L2&#39;s bridge on Ethereum. This feature is available for the <a href="./ethereum-fallback#arbitrum">Arbitrum Orbit integration</a>.</p><p>By default in <a href="https://github.com/OffchainLabs/nitro" target="_blank" rel="noreferrer">Arbitrum Nitro</a>, the <a href="https://github.com/OffchainLabs/nitro/blob/master/arbnode/batch_poster.go#L989-L1001" target="_blank" rel="noreferrer">Ethereum fallback mechanism in the <code>BatchPoster</code> function</a> is handling the process of storing data, with a fallback mechanism to store data onchain if the primary data availability storage fails.</p><p>The <a href="https://github.com/celestiaorg/nitro" target="_blank" rel="noreferrer">@celestiaorg/nitro</a> integration <a href="https://github.com/celestiaorg/nitro/blob/f01968eb3d4e19329e9c92b050e98a8e5772f1f2/arbnode/batch_poster.go#L845-L857" target="_blank" rel="noreferrer">uses the same fallback mechanism</a>.</p><p>The fallback logic for Celestia DA is configurable, providing an alternative to the previous default fallback mechanism. Additionally, an ability has been added to the Arbitrum node software which allows the sequencer to call <code>VerifyAttestation</code> to check if a data root has been posted on Blobstream or not, before it sends the sequencer message (data pointer) to the underlying chain.</p><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>In the next page, <a href="./arbitrum-deploy">learn how to deploy an Arbitrum rollup devnet using Celestia as DA</a>.</p>`,21),i=[r];function l(c,p,h,d,u,b){return a(),t("div",null,i)}const y=e(o,[["render",l]]);export{f as __pageData,y as default};
