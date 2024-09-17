import{_ as s,o as a,c as o,Q as e}from"./chunks/framework.f049567d.js";const d=JSON.parse(`{"title":"Integrate with Blobstream contracts","description":"Learn how to integrate your L2's onchain logic with Blobstream","frontmatter":{"sidebar_label":"Integrate with Blobstream contracts","description":"Learn how to integrate your L2's onchain logic with Blobstream","prev":{"text":"New SP1 Blobstream deployments","link":"/developers/sp1-blobstream-deploy"},"head":[["meta",{"name":"og:title","content":"Integrate with Blobstream contracts | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/blobstream-contracts.md","filePath":"developers/blobstream-contracts.md","lastUpdated":1726561145000}`),n={name:"developers/blobstream-contracts.md"},l=e(`<h1 id="integrate-with-blobstream-contracts" tabindex="-1">Integrate with Blobstream contracts <a class="header-anchor" href="#integrate-with-blobstream-contracts" aria-label="Permalink to &quot;Integrate with Blobstream contracts&quot;">​</a></h1><h2 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting started&quot;">​</a></h2><h3 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h3><p>Make sure to have the following installed:</p><ul><li><a href="https://github.com/foundry-rs/foundry" target="_blank" rel="noreferrer">Foundry</a></li></ul><h3 id="installing-blobstream-contracts" tabindex="-1">Installing Blobstream contracts <a class="header-anchor" href="#installing-blobstream-contracts" aria-label="Permalink to &quot;Installing Blobstream contracts&quot;">​</a></h3><p>We will be using the <a href="https://github.com/celestiaorg/blobstream-contracts/blob/master/src/IDAOracle.sol" target="_blank" rel="noreferrer"><code>IDAOracle</code></a> interface to verify inclusion. So, we will install the Blobstream contracts repo as a dependency:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">forge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestiaorg/blobstream-contracts</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--no-commit</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">forge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestiaorg/blobstream-contracts</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--no-commit</span></span></code></pre></div><p>Make sure that the directory you&#39;re running this command from is an initialized git repository. If not, just initialize the repo using:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span></code></pre></div><p>Note that the minimum Solidity compiler version for using the Blobstream contracts is <code>0.8.19</code>.</p><h3 id="example-usage" tabindex="-1">Example usage <a class="header-anchor" href="#example-usage" aria-label="Permalink to &quot;Example usage&quot;">​</a></h3><p>Example minimal Solidity contract for a stub ZK rollup that leverages the <code>BlobstreamX.sol</code> contract to check that data has been posted to Celestia:</p><div class="language-solidity vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// SPDX-License-Identifier: Apache-2.0</span></span>
<span class="line"><span style="color:#F97583;">pragma</span><span style="color:#E1E4E8;"> </span><span style="color:#85E89D;">solidity</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">^0.8.19</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;blobstream-contracts/IDAOracle.sol&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;blobstream-contracts/DataRootTuple.sol&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;blobstream-contracts/lib/tree/binary/BinaryMerkleProof.sol&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">contract</span><span style="color:#B392F0;"> MyRollup</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    IDAOracle </span><span style="color:#F97583;">immutable</span><span style="color:#E1E4E8;"> blobstream;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">bytes32</span><span style="color:#E1E4E8;">[] </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> rollup_block_hashes;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">IDAOracle</span><span style="color:#E1E4E8;"> _blobstream) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        blobstream </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> _blobstream;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">submitRollupBlock</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">bytes32</span><span style="color:#E1E4E8;"> _rollup_block_hash,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">bytes</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">calldata</span><span style="color:#E1E4E8;"> _zk_proof,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">uint256</span><span style="color:#E1E4E8;"> _blobstream_nonce,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">DataRootTuple</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">calldata</span><span style="color:#E1E4E8;"> _tuple,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">BinaryMerkleProof</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">calldata</span><span style="color:#E1E4E8;"> _proof</span></span>
<span class="line"><span style="color:#E1E4E8;">    ) </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// Verify that the data root tuple (analog. block header) has been</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// attested to by the Blobstream contract.</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">require</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">            blobstream.</span><span style="color:#B392F0;">verifyAttestation</span><span style="color:#E1E4E8;">(_blobstream_nonce, _tuple, _proof)</span></span>
<span class="line"><span style="color:#E1E4E8;">        );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// Verify the ZKP (zero-knowledge proof).</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// _tuple.dataRoot is a public input, leaves (shares) are private inputs.</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">verifyZKP</span><span style="color:#E1E4E8;">(_rollup_block_hash, _zk_proof, _tuple.dataRoot));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// Everything checks out, append rollup block hash to list.</span></span>
<span class="line"><span style="color:#E1E4E8;">        rollup_block_hashes.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(_rollup_block_hash);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">verifyZKP</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">bytes32</span><span style="color:#E1E4E8;"> _rollup_block_hash,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">bytes</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">calldata</span><span style="color:#E1E4E8;"> _zk_proof,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">bytes32</span><span style="color:#E1E4E8;"> _data_root</span></span>
<span class="line"><span style="color:#E1E4E8;">    ) </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">pure</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">returns</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">bool</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// SPDX-License-Identifier: Apache-2.0</span></span>
<span class="line"><span style="color:#D73A49;">pragma</span><span style="color:#24292E;"> </span><span style="color:#22863A;">solidity</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">^0.8.19</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;blobstream-contracts/IDAOracle.sol&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;blobstream-contracts/DataRootTuple.sol&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;blobstream-contracts/lib/tree/binary/BinaryMerkleProof.sol&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">contract</span><span style="color:#6F42C1;"> MyRollup</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    IDAOracle </span><span style="color:#D73A49;">immutable</span><span style="color:#24292E;"> blobstream;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">bytes32</span><span style="color:#24292E;">[] </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> rollup_block_hashes;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">IDAOracle</span><span style="color:#24292E;"> _blobstream) {</span></span>
<span class="line"><span style="color:#24292E;">        blobstream </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> _blobstream;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">submitRollupBlock</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">bytes32</span><span style="color:#24292E;"> _rollup_block_hash,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">bytes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">calldata</span><span style="color:#24292E;"> _zk_proof,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">uint256</span><span style="color:#24292E;"> _blobstream_nonce,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">DataRootTuple</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">calldata</span><span style="color:#24292E;"> _tuple,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">BinaryMerkleProof</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">calldata</span><span style="color:#24292E;"> _proof</span></span>
<span class="line"><span style="color:#24292E;">    ) </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// Verify that the data root tuple (analog. block header) has been</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// attested to by the Blobstream contract.</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">require</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">            blobstream.</span><span style="color:#6F42C1;">verifyAttestation</span><span style="color:#24292E;">(_blobstream_nonce, _tuple, _proof)</span></span>
<span class="line"><span style="color:#24292E;">        );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// Verify the ZKP (zero-knowledge proof).</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// _tuple.dataRoot is a public input, leaves (shares) are private inputs.</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">require</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">verifyZKP</span><span style="color:#24292E;">(_rollup_block_hash, _zk_proof, _tuple.dataRoot));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// Everything checks out, append rollup block hash to list.</span></span>
<span class="line"><span style="color:#24292E;">        rollup_block_hashes.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(_rollup_block_hash);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">verifyZKP</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">bytes32</span><span style="color:#24292E;"> _rollup_block_hash,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">bytes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">calldata</span><span style="color:#24292E;"> _zk_proof,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">bytes32</span><span style="color:#24292E;"> _data_root</span></span>
<span class="line"><span style="color:#24292E;">    ) </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">pure</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">returns</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">bool</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="data-structures" tabindex="-1">Data structures <a class="header-anchor" href="#data-structures" aria-label="Permalink to &quot;Data structures&quot;">​</a></h2><p>Each <a href="https://github.com/celestiaorg/blobstream-contracts/blob/master/src/DataRootTuple.sol" target="_blank" rel="noreferrer"><code>DataRootTuple</code></a> is a tuple of block height and data root. It is analogous to a Celestia block header. <code>DataRootTuple</code>s are relayed in batches, committed to as a <code>DataRootTuple</code>s root (i.e. a Merkle root of <code>DataRootTuple</code>s).</p><p>The <a href="https://github.com/celestiaorg/blobstream-contracts/blob/master/src/lib/tree/binary/BinaryMerkleProof.sol" target="_blank" rel="noreferrer"><code>BinaryMerkleProof</code></a> is an <a href="https://www.rfc-editor.org/rfc/rfc6962.html" target="_blank" rel="noreferrer">RFC-6962</a>-compliant Merkle proof. Since <code>DataRootTuple</code>s are Merkleized in a binary Merkle tree, verifying the inclusion of a <code>DataRootTuple</code> against a <code>DataRootTuple</code>s root requires verifying a Merkle inclusion proof.</p><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;">​</a></h2><p>The <a href="https://github.com/celestiaorg/blobstream-contracts/blob/master/src/IDAOracle.sol" target="_blank" rel="noreferrer"><code>IDAOracle</code></a> (<strong>D</strong>ata <strong>A</strong>vailability <strong>O</strong>racle Interface) interface allows L2 contracts on Ethereum to query the <code>BlobstreamX.sol</code> contract for relayed <code>DataRootTuple</code>s. The single interface method <code>verifyAttestation</code> verifies a Merkle inclusion proof that a <code>DataRootTuple</code> is included under a specific batch (indexed by batch nonce). In other words, analogously it verifies that a specific block header is included in the Celestia chain.</p><h2 id="querying-the-proof" tabindex="-1">Querying the proof <a class="header-anchor" href="#querying-the-proof" aria-label="Permalink to &quot;Querying the proof&quot;">​</a></h2><p>To prove that the data was published to Celestia, check out the <a href="./blobstream-proof-queries">proof queries documentation</a> to understand how to query the proofs from Celestia consensus nodes and make them usable in the Blobstream X verifier contract.</p><h2 id="verifying-data-inclusion-for-fraud-proofs" tabindex="-1">Verifying data inclusion for fraud proofs <a class="header-anchor" href="#verifying-data-inclusion-for-fraud-proofs" aria-label="Permalink to &quot;Verifying data inclusion for fraud proofs&quot;">​</a></h2><p>A high-level overview of how a fraud-proof based L2 would interact with Blobstream can be found in the <a href="https://github.com/celestiaorg/blobstream-contracts/blob/master/docs/inclusion-proofs.md" target="_blank" rel="noreferrer">inclusion proofs documentation</a>.</p><p>The <a href="https://github.com/celestiaorg/blobstream-contracts/blob/master/src/lib/verifier/DAVerifier.sol" target="_blank" rel="noreferrer"><code>DAVerifier</code></a> library is available at <code>blobstream-contracts/lib/verifier/DAVerifier.sol</code>, and provides functions to verify the inclusion of individual (or multiple) shares against a <code>DataRootTuple</code>. The library is stateless, and allows to pass an <code>IDAOracle</code> interface as a parameter to verify inclusion against it.</p><p>In the <code>DAVerifier</code> library, we find functions that help with data inclusion verification and calculating the square size of a Celestia block. These functions work with the Blobstream X smart contract, using different proofs to check and confirm the data&#39;s availability. Let&#39;s take a closer look at these functions:</p><ul><li><a href="https://github.com/celestiaorg/blobstream-contracts/blob/3a552d8f7bfbed1f3175933260e6e440915d2da4/src/lib/verifier/DAVerifier.sol#L80-L124" target="_blank" rel="noreferrer"><code>verifySharesToDataRootTupleRoot</code></a>: This function verifies that the shares, which were posted to Celestia, were committed to by the Blobstream X smart contract. It checks that the data root was committed to by the Blobstream X smart contract and that the shares were committed to by the rows roots.</li><li><a href="https://github.com/celestiaorg/blobstream-contracts/blob/3a552d8f7bfbed1f3175933260e6e440915d2da4/src/lib/verifier/DAVerifier.sol#L133-L155" target="_blank" rel="noreferrer"><code>verifyRowRootToDataRootTupleRoot</code></a>: This function verifies that a row/column root, from a Celestia block, was committed to by the Blobstream X smart contract. It checks that the data root was committed to by the Blobstream X smart contract and that the row root commits to the data root.</li><li><a href="https://github.com/celestiaorg/blobstream-contracts/blob/3a552d8f7bfbed1f3175933260e6e440915d2da4/src/lib/verifier/DAVerifier.sol#L164-L194" target="_blank" rel="noreferrer"><code>verifyMultiRowRootsToDataRootTupleRoot</code></a>: This function verifies that a set of rows/columns, from a Celestia block, were committed to by the Blobstream X smart contract. It checks that the data root was committed to by the Blobstream X smart contract and that the rows roots commit to the data root.</li><li><a href="https://github.com/celestiaorg/blobstream-contracts/blob/3a552d8f7bfbed1f3175933260e6e440915d2da4/src/lib/verifier/DAVerifier.sol#L204-L215" target="_blank" rel="noreferrer"><code>computeSquareSizeFromRowProof</code></a>: This function computes the Celestia block square size from a row/column root to data root binary Merkle proof. It is the user&#39;s responsibility to verify that the proof is valid and was successfully committed to using the <code>verifyRowRootToDataRootTupleRoot()</code> method.</li><li><a href="https://github.com/celestiaorg/blobstream-contracts/blob/3a552d8f7bfbed1f3175933260e6e440915d2da4/src/lib/verifier/DAVerifier.sol#L224-L229" target="_blank" rel="noreferrer"><code>computeSquareSizeFromShareProof</code></a>: This function computes the Celestia block square size from a shares to row/column root proof. It is the user&#39;s responsibility to verify that the proof is valid and that the shares were successfully committed to using the <code>verifySharesToDataRootTupleRoot()</code> method.</li></ul><p>For an overview of a demo rollup implementation, head to <a href="./blobstream-offchain">the next section</a>.</p>`,27),t=[l];function r(p,c,i,y,E,h){return a(),o("div",null,t)}const u=s(n,[["render",r]]);export{d as __pageData,u as default};
