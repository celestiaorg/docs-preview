import{_ as e,o as t,c as a,Q as i}from"./chunks/framework.bcd4355c.js";const r="/docs-preview/pr-1776/img/Celestia-Arbitrum.png",f=JSON.parse('{"title":"Introduction to Arbitrum rollups with Celestia as DA","description":"An overview of the integration of Arbitrum Nitro with Celestia, detailing the key features and benefits, including the Ethereum fallback mechanism.","frontmatter":{"description":"An overview of the integration of Arbitrum Nitro with Celestia, detailing the key features and benefits, including the Ethereum fallback mechanism.","head":[["meta",{"name":"og:title","content":"Introduction to Arbitrum rollups with Celestia as DA | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"how-to-guides/arbitrum-integration.md","filePath":"how-to-guides/arbitrum-integration.md","lastUpdated":1730383795000}'),o={name:"how-to-guides/arbitrum-integration.md"},n=i('<h1 id="introduction-to-arbitrum-rollups-with-celestia-as-da" tabindex="-1">Introduction to Arbitrum rollups with Celestia as DA <a class="header-anchor" href="#introduction-to-arbitrum-rollups-with-celestia-as-da" aria-label="Permalink to &quot;Introduction to Arbitrum rollups with Celestia as DA&quot;">​</a></h1><p><img src="'+r+'" alt="Celestia_Arbitrum"></p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>The <a href="https://blog.celestia.org/celestia-is-first-modular-data-availability-network-to-integrate-with-arbitrum-orbit/" target="_blank" rel="noreferrer">integration of Celestia with Arbitrum Orbit</a> and the Nitro tech stack marks the first external contribution to the Arbitrum Orbit protocol layer, offering developers an additional option for selecting a data availability layer alongside Arbitrum AnyTrust. The integration allows developers to deploy an Orbit Chain that uses Celestia for data availability and settles on Arbitrum One, Ethereum, or other EVM chains.</p><p><a href="https://docs.arbitrum.io/launch-orbit-chain/orbit-gentle-introduction" target="_blank" rel="noreferrer">Learn more about Orbit in Arbitrum&#39;s introduction.</a></p><h2 id="key-components" tabindex="-1">Key components <a class="header-anchor" href="#key-components" aria-label="Permalink to &quot;Key components&quot;">​</a></h2><p>The integration of Celestia with Arbitrum orbit is possible thanks to 3 key components:</p><ul><li><a href="#introduction-to-arbitrum-rollups-with-celestia-as-da">Introduction to Arbitrum rollups with Celestia as DA</a><ul><li><a href="#overview">Overview</a></li><li><a href="#key-components">Key components</a><ul><li><a href="#da-provider-implementation">DA provider implementation</a></li><li><a href="#preimage-oracle-implementation">Preimage Oracle Implementation</a></li><li><a href="#blobstream-x-implementation">Blobstream X implementation</a></li><li><a href="#ethereum-fallback-mechanism-in-nitro">Ethereum fallback mechanism in Nitro</a></li></ul></li><li><a href="#next-steps">Next steps</a></li></ul></li></ul><p>Additionally, the <a href="#ethereum-fallback-mechanism-in-nitro">Ethereum fallback mechanism</a> is a feature of the integration, which is native in Nitro.</p><h3 id="da-provider-implementation" tabindex="-1">DA provider implementation <a class="header-anchor" href="#da-provider-implementation" aria-label="Permalink to &quot;DA provider implementation&quot;">​</a></h3><p>The Arbitrum Nitro code has a <code>DataAvailabilityProvider</code> interface that is used across the codebase to store and retrieve data from a specific provider (eip4844 blobs, Anytrust, and now Celestia).</p><p>This integration implements the <a href="https://github.com/celestiaorg/nitro/blob/966e631f1a03b49d49f25bea67a92b275d3bacb9/arbstate/inbox.go#L366-L477" target="_blank" rel="noreferrer"><code>DataAvailabilityProvider</code> interface for Celestia DA</a></p><p>Additionally, this integration comes with <a href="https://github.com/celestiaorg/nitro/tree/v2.3.1-rc.1/das/celestia" target="_blank" rel="noreferrer">the necessary code for a Nitro chain node to post and retrieve data from Celestia</a>.</p><p>The core logic behind posting and retrieving data happens in <a href="https://github.com/celestiaorg/nitro/blob/v2.3.1-rc.1/das/celestia/celestia.go" target="_blank" rel="noreferrer">celestia.go</a> where data is stored on Celestia and serialized into a small batch of data that gets published once the necessary range of headers (data roots) has been relayed to the <a href="https://github.com/succinctlabs/blobstreamx" target="_blank" rel="noreferrer">BlobstreamX contract</a>. Then the <code>Read</code> logic takes care of taking the deserialized Blob Pointer struct and consuming it in order to fetch the data from Celestia and additionally inform the fetcher about the position of the data on Celestia (we&#39;ll get back to this in the next section).</p><p>The following represents a non-exhaustive list of considerations when running a Batch Poster node for a chain with Celestia underneath:</p><ul><li>You will need to use a consensus node RPC endpoint, you can <a href="./../how-to-guides/mocha-testnet#community-rpc-endpoints">find a list of them for Mocha</a></li><li>The Batch Poster will only post a Celestia batch to the underlying chain if the height for which it posted is in a recent range in BlobstreamX and if the verification succeeds, otherwise it will discard the batch. Since it will wait until a range is relayed, it can take several minutes for a batch to be posted, but one can always make an on-chain request for the BlobstreamX contract to relay a header promptly.</li></ul><p>The following represents a non-exhaustive list of considerations when running a Nitro node for a chain with Celestia underneath:</p><ul><li>The <code>TendermintRpc</code> endpoint is only needed by the batch poster, every other node can operate without a connection to a full node.</li><li>The message header flag for Celestia batches is <code>0x0c</code>.</li><li>You will need to know the namespace for the chain that you are trying to connect to, but don&#39;t worry if you don&#39;t find it, as the information in the BlobPointer can be used to identify where a batch of data is in the Celestia Data Square for a given height, and thus can be used to find out the namespace as well!</li></ul><h3 id="preimage-oracle-implementation" tabindex="-1">Preimage Oracle Implementation <a class="header-anchor" href="#preimage-oracle-implementation" aria-label="Permalink to &quot;Preimage Oracle Implementation&quot;">​</a></h3><p>In order to support fraud proofs, this integration has the necessary code for a Nitro validator to populate its preimage mapping with Celestia hashes that then get &quot;unpealed&quot; in order to reveal the full data for a Blob. You can <a href="https://docs.arbitrum.io/inside-arbitrum-nitro/#readpreimage-and-the-hash-oracle-trick" target="_blank" rel="noreferrer">read more about the &quot;Hash Oracle Trick&quot;</a>.</p><p>The data structures and hashing functions for this can be found in the <a href="https://github.com/celestiaorg/nitro/tree/v2.3.1-rc.1/das/celestia/tree" target="_blank" rel="noreferrer"><code>nitro/das/celestia/tree</code> folder</a></p><p>You can see where the preimage oracle gets used in the fraud proof replay binary <a href="https://github.com/celestiaorg/nitro/blob/966e631f1a03b49d49f25bea67a92b275d3bacb9/cmd/replay/main.go#L153-L294" target="_blank" rel="noreferrer">here</a></p><p>Something important to note is that the preimage oracle only keeps track of hashes for the rows in the Celestia data square in which a blob resides in, this way each Orbit chain with Celestia underneath does not need validators to recompute an entire Celestia Data Square, but instead, only have to compute the row roots for the rows in which it&#39;s data lives in, and the header data root, which is the binary merkle tree hash built using the row roots and column roots fetched from a Celestia node. Because only data roots that can be confirmed on Blobstream get accepted into the sequencer inbox, one can have a high degree of certainty that the canonical data root being unpealed as well as the row roots are in fact correct.</p><h3 id="blobstream-x-implementation" tabindex="-1">Blobstream X implementation <a class="header-anchor" href="#blobstream-x-implementation" aria-label="Permalink to &quot;Blobstream X implementation&quot;">​</a></h3><p>Finally, the integration only accepts batches with information that can be confirmed on BlobstreamX, which gives us a high certainty that data was made available on Celestia.</p><p>You can see how BlobstreamX is integrated into the <code>SequencerInbox.sol</code> contract <a href="https://github.com/celestiaorg/nitro-contracts/blob/celestia-v1.2.1/src/bridge/SequencerInbox.sol#L584-L630" target="_blank" rel="noreferrer">here</a>, which allows us to discard batches with otherwise faulty data roots, thus giving us a high degree of confidence that the data root can be safely unpacked in case of a challenge.</p><p>The Celestia and Arbitrum integration also <a href="./blobstream">includes Blobstream</a>, which relays commitments to Celestia’s data root to an onchain light client on Ethereum. This allows L2 solutions that settle on Ethereum to benefit from the scalability Celestia’s data availability layer can provide.</p><h3 id="ethereum-fallback-mechanism-in-nitro" tabindex="-1">Ethereum fallback mechanism in Nitro <a class="header-anchor" href="#ethereum-fallback-mechanism-in-nitro" aria-label="Permalink to &quot;Ethereum fallback mechanism in Nitro&quot;">​</a></h3><p>By default in <a href="https://github.com/OffchainLabs/nitro" target="_blank" rel="noreferrer">Arbitrum Nitro</a>, the <a href="https://github.com/OffchainLabs/nitro/blob/master/arbnode/batch_poster.go#L989-L1001" target="_blank" rel="noreferrer">Ethereum fallback mechanism in the <code>BatchPoster</code> function</a> is handling the process of storing data, with a fallback mechanism to store data onchain if the primary data availability storage fails.</p><p>The <a href="https://github.com/celestiaorg/nitro" target="_blank" rel="noreferrer">@celestiaorg/nitro</a> integration <a href="https://github.com/celestiaorg/nitro/blob/f01968eb3d4e19329e9c92b050e98a8e5772f1f2/arbnode/batch_poster.go#L845-L857" target="_blank" rel="noreferrer">uses the same fallback mechanism</a>.</p><p><a href="./ethereum-fallback">More information can be found on the Ethereum fallback mechanisms for Celestia</a>, which enables Ethereum L2s (or L3s) to “fall back” to using Ethereum calldata for data availability in the event of downtime on Celestia Mainnet Beta.</p><p>The fallback logic for Celestia DA is configurable, providing an alternative to the previous default fallback mechanism. Additionally, an ability has been added to the Arbitrum node software which allows the sequencer to call <code>VerifyAttestation</code> to check if a data root has been posted on Blobstream or not, before it sends the sequencer message (data pointer) to the underlying chain.</p><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>In the next page, <a href="./arbitrum-deploy">learn how to deploy an Arbitrum rollup devnet using Celestia as DA</a>.</p>',34),l=[n];function s(h,c,d,m,b,u){return t(),a("div",null,l)}const g=e(o,[["render",s]]);export{f as __pageData,g as default};
