import{_ as e,o as t,c as a,Q as o}from"./chunks/framework.611656c0.js";const f=JSON.parse('{"title":"Requesting data commitment ranges","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Requesting data commitment ranges | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/requesting-data-commitment-ranges.md","filePath":"developers/requesting-data-commitment-ranges.md","lastUpdated":1711367698000}'),r={name:"developers/requesting-data-commitment-ranges.md"},n=o('<h1 id="requesting-data-commitment-ranges" tabindex="-1">Requesting data commitment ranges <a class="header-anchor" href="#requesting-data-commitment-ranges" aria-label="Permalink to &quot;Requesting data commitment ranges&quot;">​</a></h1><p>By default, the Blobstream X deployments on Ethereum will be updating every 4 hours, and on Arbitrum One and Base, updating every 1 hour. If you wish for the Blobstream X contract to be updated at a different cadence, then you have several different options for how to update the smart contract.</p><p>To request proofs to be submitted to the Blobstream X contract at a different cadence, you can do one of the following:</p><h2 id="recommended-setup" tabindex="-1">Recommended setup <a class="header-anchor" href="#recommended-setup" aria-label="Permalink to &quot;Recommended setup&quot;">​</a></h2><p>Run the Blobstream X operator with hosted proving on the Succinct platform, by running an operator script that pings the platform with proof requests at a specified cadence.</p><p><a href="https://github.com/succinctlabs/blobstreamx?tab=readme-ov-file#operator-with-hosted-proving" target="_blank" rel="noreferrer">Follow these instructions to run the operator script</a>.</p><p>Here are example values for the <code>.env</code> file:</p><ol><li><code>TENDERMINT_RPC_URL</code> from <a href="https://docs.celestia.org/nodes/mainnet#consensus-nodes" target="_blank" rel="noreferrer">the public Celestia list</a>.</li><li><code>SUCCINCT_RPC_URL</code> = <code>https://alpha.succinct.xyz/api</code></li><li>Request for <code>SUCCINCT_API_KEY</code> from <a href="https://alpha.succinct.xyz/partner" target="_blank" rel="noreferrer">the Succinct team</a>.</li><li><code>CHAIN_ID</code> is the chain ID of the deployed Blobstream X contract.</li><li><code>CONTRACT_ADDRESS</code>: Blobstream X proxy contract address.</li><li><code>NEXT_HEADER_FUNCTION_ID</code> &amp; <code>HEADER_RANGE_FUNCTION_ID</code>: Get the <code>functionId</code>&#39;s from the Blobstream X contract by using the <code>nextHeaderFunctionId</code> and <code>headerRangeFunctionId</code> respectively, which are public storage variables.</li></ol><h2 id="local-proving" tabindex="-1">Local proving <a class="header-anchor" href="#local-proving" aria-label="Permalink to &quot;Local proving&quot;">​</a></h2><p><a href="https://github.com/succinctlabs/blobstreamx?tab=readme-ov-file#local-proving--relaying" target="_blank" rel="noreferrer">Run the Blobstream X operator with local proving</a>.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Note: Requires a large cloud machine to run in a reasonable amount of time. EC2 r6a.16xlarge takes ~30 minutes to generate a header range proof.</p></div><h2 id="request-proof-onchain" tabindex="-1">Request proof onchain <a class="header-anchor" href="#request-proof-onchain" aria-label="Permalink to &quot;Request proof onchain&quot;">​</a></h2><p>Directly request a proof via the Blobstream X contract interface. Unlike the Blobstream X operator which handles requests off-chain, requesting on-chain requires gas, but the proof will be generated and relayed by the Succinct platform.</p><ol><li><p>Call <code>requestHeaderRange(uint64 _targetBlock)</code> with the end of the range you want a commitment for.</p></li><li><p>A <code>DataCommitmentStored(uint256, uint64, uint64, bytes32)</code> will be emitted for the requested range when it is stored in the contract. Listen to this event to know that the proof has been generated successfully.</p></li></ol>',14),i=[n];function c(s,l,d,h,m,p){return t(),a("div",null,i)}const g=e(r,[["render",c]]);export{f as __pageData,g as default};