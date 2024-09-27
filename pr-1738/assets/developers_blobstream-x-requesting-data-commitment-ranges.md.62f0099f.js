import{_ as e,o as t,c as o,Q as a}from"./chunks/framework.e5f0e895.js";const f=JSON.parse('{"title":"Requesting data commitment ranges","description":"","frontmatter":{"prev":{"text":"Overview of Blobstream X","link":"/developers/blobstreamx"},"head":[["meta",{"name":"og:title","content":"Requesting data commitment ranges | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/blobstream-x-requesting-data-commitment-ranges.md","filePath":"developers/blobstream-x-requesting-data-commitment-ranges.md","lastUpdated":1727458046000}'),r={name:"developers/blobstream-x-requesting-data-commitment-ranges.md"},n=a('<h1 id="requesting-data-commitment-ranges" tabindex="-1">Requesting data commitment ranges <a class="header-anchor" href="#requesting-data-commitment-ranges" aria-label="Permalink to &quot;Requesting data commitment ranges&quot;">​</a></h1><p>By default, the Blobstream X deployments on Ethereum will be updated every 4 hours, and on Arbitrum One and Base, updating every 1 hour. If you wish for the Blobstream X contract to be updated at a different cadence, then you have several different options for how to update the smart contract.</p><p>To request proofs to be submitted to the Blobstream X contract at a different cadence, you can do one of the following:</p><blockquote><p><strong><em>NOTE:</em></strong> The requested proof ranges cannot include blocks that were already used in a previous batch. The ranges should start from the last proven block, aka, <a href="https://github.com/succinctlabs/blobstreamx/blob/aac0842f17056e5343f66de7df44020c1637e8b7/contracts/src/BlobstreamX.sol#L16-L17" target="_blank" rel="noreferrer"><code>latest_block</code></a> and they should end in a block already committed by Celestia. In other words, it&#39;s the end-inclusive range defined by <code>[latest_block, target_block]</code> with <code>target_block</code> &lt;= Celestia tip.</p></blockquote><h2 id="local-proving" tabindex="-1">Local proving <a class="header-anchor" href="#local-proving" aria-label="Permalink to &quot;Local proving&quot;">​</a></h2><p>To run the Blobstream X operator with local proving, follow this <a href="https://hackmd.io/@succinctlabs/HJE7XRrup" target="_blank" rel="noreferrer">guide</a>.</p><p>Local proving allows self-generating the proofs and submitting them to an existing BlobstreamX contract. Alternatively, if a team needs a very specific cadence that starts at very specific heights, they can deploy their own BlobstreamX contract and submit proofs to it. Deployment instructions can be found in the <a href="./blobstream-x-deploy">BlobstreamX deploy</a> documentation.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Requires a large cloud machine to run in a reasonable amount of time. EC2 r6a.16xlarge, i.e., 64CPU 512GB RAM, takes ~30 minutes to generate a header range proof.</p></div><h2 id="request-proofs-from-the-succinct-platform" tabindex="-1">Request proofs from the Succinct platform <a class="header-anchor" href="#request-proofs-from-the-succinct-platform" aria-label="Permalink to &quot;Request proofs from the Succinct platform&quot;">​</a></h2><blockquote><p><strong><em>NOTE:</em></strong> Requesting a proof from the succinct platform requires having a Succinct API key. It can be requested using this <a href="https://alpha.succinct.xyz/partner" target="_blank" rel="noreferrer">form</a>.</p></blockquote><p>Run the Blobstream X operator with hosted proving on the Succinct platform, by running an operator script that pings the platform with proof requests at a specified cadence.</p><p>Follow <a href="https://github.com/succinctlabs/blobstreamx?tab=readme-ov-file#operator-with-hosted-proving" target="_blank" rel="noreferrer">these instructions</a> to run the operator script.</p><p>Here are example values for the <code>.env</code> file:</p><ol><li><code>TENDERMINT_RPC_URL</code> from <a href="https://docs.celestia.org/nodes/mainnet#integrations" target="_blank" rel="noreferrer">the public Celestia list</a>.</li><li><code>SUCCINCT_RPC_URL</code> = <code>https://alpha.succinct.xyz/api</code></li><li>Request for <code>SUCCINCT_API_KEY</code> from <a href="https://alpha.succinct.xyz/partner" target="_blank" rel="noreferrer">the Succinct team</a>.</li><li><code>CHAIN_ID</code> is the chain ID of the deployed Blobstream X contract.</li><li><code>CONTRACT_ADDRESS</code>: Blobstream X proxy contract address.</li><li><code>NEXT_HEADER_FUNCTION_ID</code> &amp; <code>HEADER_RANGE_FUNCTION_ID</code>: Get the <code>functionId</code>&#39;s from the Blobstream X contract by using the <code>nextHeaderFunctionId</code> and <code>headerRangeFunctionId</code> respectively, which are public storage variables.</li></ol><h2 id="request-proofs-onchain" tabindex="-1">Request proofs onchain <a class="header-anchor" href="#request-proofs-onchain" aria-label="Permalink to &quot;Request proofs onchain&quot;">​</a></h2><p>Directly request a proof via the Blobstream X contract interface. Unlike the Blobstream X operator which handles requests off-chain, requesting on-chain requires gas, but the proof will be generated and relayed by the Succinct platform.</p><ol><li><p>Call <code>requestHeaderRange(uint64 _targetBlock)</code> with the end of the range you want a commitment for.</p></li><li><p>A <code>DataCommitmentStored(uint256, uint64, uint64, bytes32)</code> will be emitted for the requested range when it is stored in the contract. Listen to this event to know that the proof has been generated successfully.</p></li></ol>',17),s=[n];function c(i,l,d,h,p,m){return t(),o("div",null,s)}const b=e(r,[["render",c]]);export{f as __pageData,b as default};
