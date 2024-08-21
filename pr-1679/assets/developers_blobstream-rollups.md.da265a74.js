import{_ as e,o as t,c as o,Q as a}from"./chunks/framework.7e68c4ea.js";const f=JSON.parse('{"title":"Introduction to Blobstream rollups","description":"Learn how to build rollups that use Blobstream.","frontmatter":{"description":"Learn how to build rollups that use Blobstream.","prev":{"text":"Ethereum fallback mechanism","link":"/developers/ethereum-fallback"},"next":{"text":"Submitting data blobs to Celestia","link":"/developers/submit-data"},"head":[["meta",{"name":"og:title","content":"Introduction to Blobstream rollups | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/blobstream-rollups.md","filePath":"developers/blobstream-rollups.md","lastUpdated":1724258067000}'),s={name:"developers/blobstream-rollups.md"},r=a(`<h1 id="introduction-to-blobstream-rollups" tabindex="-1">Introduction to Blobstream rollups <a class="header-anchor" href="#introduction-to-blobstream-rollups" aria-label="Permalink to &quot;Introduction to Blobstream rollups&quot;">​</a></h1><p><a href="https://blog.celestia.org/introducing-blobstream/" target="_blank" rel="noreferrer">Blobstream</a> is the first data availability solution for EVM chains that securely scales with the number of users. It allows rollups to post their data on Celestia while proving their availability in the rollup settlement contract.</p><p>This document will outline a few ways to build optimistic or zk-rollups that post their data to Celestia and use Blobstream to prove that data&#39;s availability.</p><h2 id="concepts" tabindex="-1">Concepts <a class="header-anchor" href="#concepts" aria-label="Permalink to &quot;Concepts&quot;">​</a></h2><p>This section will go over two constructs that can be used in building Blobstream rollups. Each with its pros and cons and the rollup developer can choose which one suits their needs better.</p><p>Note: Only the <a href="#sequence-of-spans">sequence of spans</a> method can be used currently to build Blobstream rollups. The <a href="#blob-share-commitment">blob share commitment</a> way still requires some tooling that will be built in the upcoming months.</p><h3 id="blob-share-commitment" tabindex="-1">Blob share commitment <a class="header-anchor" href="#blob-share-commitment" aria-label="Permalink to &quot;Blob share commitment&quot;">​</a></h3><p>The <a href="https://celestiaorg.github.io/celestia-app/specs/data_square_layout.html#blob-share-commitment-rules" target="_blank" rel="noreferrer">blob share commitment</a> is a commitment over the data contained in the <a href="https://github.com/celestiaorg/celestia-app/blob/v1.0.0-rc2/proto/celestia/blob/v1/tx.proto#L16-L31" target="_blank" rel="noreferrer">MsgPayForBlobs transaction</a>. This commitment allows <a href="https://github.com/celestiaorg/celestia-app/blob/main/docs/architecture/adr-011-optimistic-blob-size-independent-inclusion-proofs-and-pfb-fraud-proofs.md" target="_blank" rel="noreferrer">proving that the corresponding data exists on Celestia efficiently</a>.</p><h4 id="blob-share-commitment-proof-details" tabindex="-1">Blob share commitment: Proof details <a class="header-anchor" href="#blob-share-commitment-proof-details" aria-label="Permalink to &quot;Blob share commitment: Proof details&quot;">​</a></h4><p>To prove that the data corresponding to a blob share commitment was posted to Celestia using Blobstream, the following proofs need to be verified:</p><ol><li><a href="https://github.com/celestiaorg/celestia-app/tree/main/pkg/proof#share-to-share-commitment-inclusion" target="_blank" rel="noreferrer">share inclusion proof to the blob share commitment</a>: meaning creating two merkle proofs: <ol><li>share merkle proof up to the <a href="https://celestiaorg.github.io/celestia-app/specs/data_square_layout.html#blob-share-commitment-rules" target="_blank" rel="noreferrer">subtree root</a> corresponding to that share</li><li>subtree root merkle proof to the <a href="https://celestiaorg.github.io/celestia-app/specs/data_square_layout.html#blob-share-commitment-rules" target="_blank" rel="noreferrer">blob share commitment</a></li></ol></li><li><a href="https://github.com/celestiaorg/celestia-app/tree/main/pkg/proof#prove-share-commitment-inclusion-to-data-root" target="_blank" rel="noreferrer">blob share commitment inclusion proof to the data root tuple root</a>: meaning four merkle proofs: <ol><li><a href="https://github.com/celestiaorg/celestia-app/tree/main/pkg/proof#subtree-roots-inclusion-proof-to-the-share-commitment" target="_blank" rel="noreferrer">subtree roots merkle proofs to the blob share commitment</a>: to make sure the subtree roots are valid</li><li><a href="https://github.com/celestiaorg/celestia-app/tree/main/pkg/proof#subtree-roots-inclusion-proof-to-the-data-root" target="_blank" rel="noreferrer">subtree roots merkle proofs up to the row roots</a>: to prove that the subtree roots belong to a set of rows in the Celestia block</li><li><a href="https://github.com/celestiaorg/celestia-app/tree/main/pkg/proof#row-root-to-data-root-inclusion-proof" target="_blank" rel="noreferrer">row roots proofs to the data root</a>: to prove that those rows belong to the Celestia Block</li><li><a href="https://docs.celestia.org/developers/blobstream-proof-queries#the-commitment-scheme" target="_blank" rel="noreferrer">data root tuple proof to the data root tuple</a>: to prove that the Celestia block referenced by its height and data root, was committed to by Blobstream.</li></ol></li></ol><p>More details on the blob share commitment inclusion proof can be found in the <a href="https://docs.celestia.org/developers/blobstream-proof-queries#the-commitment-scheme" target="_blank" rel="noreferrer">commitment scheme docs</a> and also the <a href="https://github.com/celestiaorg/celestia-app/blob/main/specs/src/specs/data_square_layout.md#blob-share-commitment-rules" target="_blank" rel="noreferrer">data square layout</a>.</p><p>If all of these proofs are valid, then you successfully managed to prove that the data corresponding to that blob share commitment has been posted to Celestia.</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>Generating/verifying blob share commitment proofs is still not supported. It still needs tooling to generate the proofs on the node side, and verifying them on the Solidity side which will be built in the upcoming months.</p></div><h4 id="blob-share-commitment-compact-proofs" tabindex="-1">Blob share commitment: Compact proofs <a class="header-anchor" href="#blob-share-commitment-compact-proofs" aria-label="Permalink to &quot;Blob share commitment: Compact proofs&quot;">​</a></h4><p>There is a way to have compact proofs, when using blob share commitments, unlike the ones defined above; that allow less costly inclusion proofs. These require the ability to parse the protobuf encoded PFBs.</p><p>In fact, if the rollup project has a way to parse the protobuf encoded PFB, either in a smart contract or a zk-circuit, they will be able to create compact proofs of the rollup data.</p><p>These proofs will work as follows:</p><ul><li>Parsing the PFB and taking out the blob share commitment</li><li>Comparing the PFB commitment to the one saved in the rollup contract</li><li>Proving inclusion of the PFB to the data root tuple root. This will be a compact proof since we will only be proving two shares regardless of the size of the rollup data.</li></ul><p>More details on compact proofs can be found in <a href="https://github.com/celestiaorg/celestia-app/blob/main/docs/architecture/adr-011-optimistic-blob-size-independent-inclusion-proofs-and-pfb-fraud-proofs.md" target="_blank" rel="noreferrer">ADR-011</a>.</p><h4 id="blob-share-commitment-pros" tabindex="-1">Blob share commitment: Pros <a class="header-anchor" href="#blob-share-commitment-pros" aria-label="Permalink to &quot;Blob share commitment: Pros&quot;">​</a></h4><p>The pros of referencing rollup data using a blob share commitment:</p><ul><li>Using the same commitment that exists on the PFB, without having to find another way of referencing the rollup data.</li><li>If the team has access to protobuf parsing, it allows for compact proof, but the parsing costs need to be investigated.</li></ul><h4 id="blob-share-commitment-cons" tabindex="-1">Blob share commitment: Cons <a class="header-anchor" href="#blob-share-commitment-cons" aria-label="Permalink to &quot;Blob share commitment: Cons&quot;">​</a></h4><ul><li>Large/expensive proofs in the case of having no way to parse the protobuf PFB encoding.</li><li>In the optimistic rollups construction, defined below, this requires waiting for the Celestia block to be committed to by Blobstream before saving updating the settlement contract. This might require waiting for a few hours, depending on the batches size on each chain, to finally submit the rollup update.</li></ul><p>Given these limitations, an alternative design will be discussed in the next section.</p><h3 id="sequence-of-spans" tabindex="-1">Sequence of spans <a class="header-anchor" href="#sequence-of-spans" aria-label="Permalink to &quot;Sequence of spans&quot;">​</a></h3><p>An alternative way of referencing rollup data in the rollup settlement contract is using a sequence of spans.</p><p>A sequence of spans is a data pointer that allows pointing to the rollup data inside a Celestia square using its location inside the square. It can be defined using the following information:</p><ul><li><code>height</code>: The height of the Celestia block containing the rollup data.</li><li><code>startIndex</code>: The index of the first share containing the rollup data.</li><li><code>dataLen</code>: The number of shares containing the rollup data.</li></ul><p>The <code>startIndex</code> and the <code>dataLen</code> can be queried from Celestia after the corresponding transaction gets included in a block and committed to the chain. An example of how to query them can be found in the <a href="https://github.com/celestiaorg/celestia-app/blob/915847191e80d836f862eea2664949d9a240abea/x/qgb/client/verify.go#L70-L85" target="_blank" rel="noreferrer">verify</a> command. The <code>TxShareRange</code> returns the start and end share of the data referenced by a transaction hash.</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>If the rollup data is submitted in multiple blocks, the above sequence of spans can be generalized to include multiple blocks. For simplicity, we will stick with the data only submitted to a single Celestia block.</p></div><h4 id="sequence-of-spans-proof-details" tabindex="-1">Sequence of spans: Proof details <a class="header-anchor" href="#sequence-of-spans-proof-details" aria-label="Permalink to &quot;Sequence of spans: Proof details&quot;">​</a></h4><p>Using sequence of spans is different from using the blob share commitment because we&#39;re referencing a location in the square, and not actual data commitment. So, the proof types and their generation are different.</p><h4 id="sequence-of-spans-proving-unavailable-data" tabindex="-1">Sequence of spans: Proving unavailable data <a class="header-anchor" href="#sequence-of-spans-proving-unavailable-data" aria-label="Permalink to &quot;Sequence of spans: Proving unavailable data&quot;">​</a></h4><p>By construction, if the sequence of spans refers to a certain location in the square, that location is the data. This location can be in the reserved namespaces, the parity bytes, etc. What matters is that it&#39;s part of the square. So to prove that the sequence of spans is invalid, i.e., refers to data that is not available on Celestia, it is necessary and sufficient to show that the sequence of spans doesn&#39;t belong to the Celestia block, i.e., the span is out of bounds.</p><p>We could create this proof via generating a binary <a href="https://github.com/celestiaorg/celestia-core/blob/c3ab251659f6fe0f36d10e0dbd14c29a78a85352/crypto/merkle/proof.go#L19-L31" target="_blank" rel="noreferrer">Merkle proof</a> of any row/column to the Celestia data root. This proof will provide the <code>total</code> which is the number of rows/columns in the extended data square. This can be used to calculate the square size. The <a href="https://github.com/celestiaorg/blobstream-contracts/blob/cee4724cca2141beb831391aaef1b7ae97060e3c/src/lib/verifier/DAVerifier.sol#L267-L300" target="_blank" rel="noreferrer">computeSquareSizeFromRowProof</a> method in the <a href="https://github.com/celestiaorg/blobstream-contracts/blob/master/src/lib/verifier/DAVerifier.sol" target="_blank" rel="noreferrer">DAVerifier</a> library allows calculating the square size from a row proof or a share proof.</p><p>Then, we will use that information to check if the provided share index, in the header, is out of the square size bounds. In order words, we will check if the <code>startIndex</code> and the <code>startIndex + dataLen</code> are included in the range <code>[0, 4*square_size]</code>.</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>The square size is the number of rows of the original square.</p></div><p>For the data root, we will use a binary Merkle proof to prove its inclusion in a data root tuple root that was committed to by the Blobstream smart contract. More on this in the <a href="https://docs.celestia.org/developers/blobstream-proof-queries#_1-data-root-inclusion-proof" target="_blank" rel="noreferrer">data root inclusion proofs section</a>.</p><h4 id="sequence-of-spans-proving-inclusion-of-some-data" tabindex="-1">Sequence of spans: Proving inclusion of some data <a class="header-anchor" href="#sequence-of-spans-proving-inclusion-of-some-data" aria-label="Permalink to &quot;Sequence of spans: Proving inclusion of some data&quot;">​</a></h4><p>The difference between using a blob share commitment and a sequence of spans is that when using a blob share commitment, an extra merkle proof is needed to prove inclusion of the share to the blob share commitment. However, in the case of a sequence of spans, only the usual inclusion proof of a share to the data root tuple root is needed. The inclusion of the share to the sequence of spans is gotten using the same proof.</p><p>In fact, proving that a share is part of the sequence of spans, i.e., part of the rollup data is done as follows:</p><ol><li><p>Prove that the data root tuple is committed to by the Blobstream smart contract:</p><p>To prove the data root is committed to by the Blobstream smart contract, we will need to provide a Merkle proof of the data root tuple to a data root tuple root. This can be created using the <a href="https://github.com/celestiaorg/celestia-core/blob/c3ab251659f6fe0f36d10e0dbd14c29a78a85352/rpc/client/http/http.go#L492-L511" target="_blank" rel="noreferrer"><code>data_root_inclusion_proof</code></a> query. More on this can be found in the <a href="https://docs.celestia.org/developers/blobstream-proof-queries#_1-data-root-inclusion-proof" target="_blank" rel="noreferrer">data root inclusion proofs documentation</a>.</p></li><li><p>Verify inclusion proof of the data to Celestia data root:</p><p>To prove that the data is part of the data root, we will need to provide two proofs: a namespace Merkle proof of the data to a row root. This could be done via proving the shares that contain the data to the row root using a namespace Merkle proof. And, a binary Merkle proof of the row root to the data root.</p><p>These proofs can be generated using the <a href="https://github.com/celestiaorg/celestia-core/blob/c3ab251659f6fe0f36d10e0dbd14c29a78a85352/rpc/client/http/http.go#L526-L543" target="_blank" rel="noreferrer"><code>ProveShares</code></a> query.</p><p>More details on these proofs can be found in the transaction inclusion proof <a href="https://docs.celestia.org/developers/blobstream-proof-queries#_2-transaction-inclusion-proof" target="_blank" rel="noreferrer">documentation</a>.</p></li><li><p>Prove that the data is in the sequence spans:</p><p>To prove that the data is part of the rollup sequence of spans, we take the authenticated share proofs in step (2) and use the shares begin/end key to define the shares&#39; positions in the row.</p><p>Then, we use the row proof to get the row index in the extended Celestia square and get the index of the share in row major order:</p><div class="language-solidity vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">uint256</span><span style="color:#E1E4E8;"> shareIndexInRow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> shareProof.shareProofs[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].beginKey;</span></span>
<span class="line"><span style="color:#79B8FF;">uint256</span><span style="color:#E1E4E8;"> shareIndexInRowMajorOrder </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> shareIndexInRow </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> shareProof.rowProofs[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].numLeaves </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> shareProof.rowProofs[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].key;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">uint256</span><span style="color:#24292E;"> shareIndexInRow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> shareProof.shareProofs[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].beginKey;</span></span>
<span class="line"><span style="color:#005CC5;">uint256</span><span style="color:#24292E;"> shareIndexInRowMajorOrder </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> shareIndexInRow </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> shareProof.rowProofs[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].numLeaves </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> shareProof.rowProofs[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].key;</span></span></code></pre></div></li></ol><p>Finally, we can compare the computed index with the sequence of spans, and be sure that the data/shares is part of the rollup data.</p><h4 id="sequence-of-spans-pros" tabindex="-1">Sequence of spans: Pros <a class="header-anchor" href="#sequence-of-spans-pros" aria-label="Permalink to &quot;Sequence of spans: Pros&quot;">​</a></h4><ul><li>Using a sequence of spans instead of the blob share commitment allows for simpler proofs</li></ul><h4 id="sequence-of-spans-cons" tabindex="-1">Sequence of spans: Cons <a class="header-anchor" href="#sequence-of-spans-cons" aria-label="Permalink to &quot;Sequence of spans: Cons&quot;">​</a></h4><p>None</p><h2 id="optimistic-rollups" tabindex="-1">Optimistic rollups <a class="header-anchor" href="#optimistic-rollups" aria-label="Permalink to &quot;Optimistic rollups&quot;">​</a></h2><p>One type of rollups that can be built with Blobstream is optimistic rollups. An optimistic rollup is a rollup that commits optimistically to a set of blocks, and allows the other parties to verify that the blocks are valid, and if they&#39;re not, they can create fraud proofs to signal that.</p><p>Celestia allows optimistic rollups to post their data on its DA layer, and to prove that the data is available using Blobstream.</p><p>To build an optimistic rollup that uses Celestia as a DA layer, the following constructions can be inspired by.</p><h3 id="optimistic-rollups-that-use-a-sequence-of-spans" tabindex="-1">Optimistic rollups that use a sequence of spans <a class="header-anchor" href="#optimistic-rollups-that-use-a-sequence-of-spans" aria-label="Permalink to &quot;Optimistic rollups that use a sequence of spans&quot;">​</a></h3><p>Optimistic rollups can post their data in Celestia, then in the rollup settlement contract, they can reference optimistically that data using a <a href="#sequence-of-spans">sequence of spans</a>. Then, rollup full nodes can verify if that data is valid. If not, they can trigger a fraud proof.</p><p>When using a sequence of spans, triggering the data availability fraud proofs, which are different from the state transitions fraud proofs (left for the rollup to define), goes back to the following cases:</p><ul><li>Proving that the rollup data is unavailable: this goes back to <a href="#sequence-of-spans-proving-unavailable-data">proving that the sequence of spans is out of bounds</a>.</li><li>Proving an invalid state transition: this goes back to: <ul><li><a href="#sequence-of-spans-proving-inclusion-of-some-data">Proving that the rollup data is available and is part of the sequence of spans</a>.</li><li>Parsing that data and verifying the invalid state transition: this is the rollup logic fraud proofs, and it&#39;s left to the rollup to define.</li></ul></li></ul><h4 id="optimistic-rollups-that-use-a-sequence-of-spans-pros" tabindex="-1">Optimistic rollups that use a sequence of spans: Pros <a class="header-anchor" href="#optimistic-rollups-that-use-a-sequence-of-spans-pros" aria-label="Permalink to &quot;Optimistic rollups that use a sequence of spans: Pros&quot;">​</a></h4><ul><li>Not needing to verify anything at the moment of submitting the commitments to the rollup settlement contracts</li><li>The fraud proofs are simple and can be reduced to a single share: if, for example, a single transaction in the rollup data that was posted to Celestia is faulty, only the shares containing that transaction, which can be as minimal as a single share, need to be proven on chain and verified.</li></ul><h4 id="optimistic-rollups-that-use-a-sequence-of-spans-cons" tabindex="-1">Optimistic rollups that use a sequence of spans: Cons <a class="header-anchor" href="#optimistic-rollups-that-use-a-sequence-of-spans-cons" aria-label="Permalink to &quot;Optimistic rollups that use a sequence of spans: Cons&quot;">​</a></h4><p>None</p><h4 id="optimistic-rollups-that-use-a-sequence-of-spans-example" tabindex="-1">Optimistic rollups that use a sequence of spans: Example <a class="header-anchor" href="#optimistic-rollups-that-use-a-sequence-of-spans-example" aria-label="Permalink to &quot;Optimistic rollups that use a sequence of spans: Example&quot;">​</a></h4><p>An example optimistic rollup that uses sequence of spans to reference its data can be found in the <a href="https://github.com/celestiaorg/blobstream-contracts/blob/master/src/lib/verifier/test/RollupInclusionProofs.t.sol" target="_blank" rel="noreferrer"><code>RollupInclusionProofs</code></a>. It portrays the different possible data availability proofs, constructs them and shows how to verify them.</p><p>Also, more details on querying these kinds of proofs can be found in the <a href="https://docs.celestia.org/developers/blobstream-proof-queries" target="_blank" rel="noreferrer">proof queries</a> documentation.</p><h3 id="optimistic-rollups-that-use-blob-share-commitments" tabindex="-1">Optimistic rollups that use blob share commitments <a class="header-anchor" href="#optimistic-rollups-that-use-blob-share-commitments" aria-label="Permalink to &quot;Optimistic rollups that use blob share commitments&quot;">​</a></h3><p>Another way to build a rollup is to replace the sequence of spans with a height and a blob share commitment. Then, users/rollup full nodes will be able to query that data and validate it. If the rollup data is not valid, they can create a fraud proof.</p><p>The first difference between the sequence of spans construction and the share commitment construction is having to verify that the provided blob share commitment is part of the Celestia block, referenced by its height in the moment of submitting the rollup commitments to the settlement contract. This is necessary to make sure that the commitment is part of Celestia. Otherwise, rollup sequencers can commit to random blob share commitments and there won&#39;t be a way to prove they&#39;re invalid.</p><p>The second difference is the proof types. In the case of a fraud proof, the proofs outlined in the <a href="#blob-share-commitment-proof-details">proofs details of blob share commitment</a> section would need to be verified to be sure that the share containing the invalid state transition is part of the rollup data. Alternatively, the rollup settlement contract would need to have a library to parse protobuf encoded PFBs, as explained in the <a href="#blob-share-commitment-compact-proofs">compact proofs of blob share commitment</a> section, to have less expensive proofs. The cost of parsing the protobuf is not included in this analysis and needs to be investigated separately.</p><h4 id="optimistic-rollups-that-use-blob-share-commitments-pros" tabindex="-1">Optimistic rollups that use blob share commitments: Pros <a class="header-anchor" href="#optimistic-rollups-that-use-blob-share-commitments-pros" aria-label="Permalink to &quot;Optimistic rollups that use blob share commitments: Pros&quot;">​</a></h4><ul><li>Using the same blob share commitment as the one saved in Celestia which gives access to existing tooling</li></ul><h4 id="optimistic-rollups-that-use-blob-share-commitments-cons" tabindex="-1">Optimistic rollups that use blob share commitments: Cons <a class="header-anchor" href="#optimistic-rollups-that-use-blob-share-commitments-cons" aria-label="Permalink to &quot;Optimistic rollups that use blob share commitments: Cons&quot;">​</a></h4><ul><li>The proofs are expensive in the base case. And if the settlement contract is able to parse the PFBs, thorough investigations of the cost of that would need to be done.</li></ul><h2 id="zk-rollups" tabindex="-1">Zk-rollups <a class="header-anchor" href="#zk-rollups" aria-label="Permalink to &quot;Zk-rollups&quot;">​</a></h2><p>Zk-rollups, aka validity rollups, can also use Celestia as a DA and Blobstream to verify that the data was posted. However, the submission process is different from the above constructions, since there are no fraud proofs, and everything should be verified when submitting the commitment to the settlement contract.</p><p>Similar to the optimistic case, the rollup settlement contract can reference the rollup data using either the sequence of spans approach or the blob share commitments. We will discuss both in this section.</p><h3 id="zk-rollups-that-use-sequence-of-spans" tabindex="-1">Zk-rollups that use sequence of spans <a class="header-anchor" href="#zk-rollups-that-use-sequence-of-spans" aria-label="Permalink to &quot;Zk-rollups that use sequence of spans&quot;">​</a></h3><p>When submitting the commitments to the rollup settlement contract, this latter will need to verify the following:</p><ol><li>Zk-proof of the state transitions, which is left for the rollup to define.</li><li>Verify that the sequence of spans is <a href="https://github.com/celestiaorg/blobstream-contracts/blob/master/docs/inclusion-proofs.md" target="_blank" rel="noreferrer">valid</a>, i.e., is part of the Celestia block referenced by its height, as described in the <a href="#sequence-of-spans-proof-details">proof details</a> section.</li><li>Zk-proof of the rollup data to the data root. The verification process of this should accept a commitment as input so that the settlement contract makes sure it&#39;s the correct value that&#39;s being saved. The commitment can be the data root and the sequence of spans. And, when the rollup data is proven inside the circuit to the data root, the used data root is asserted to be the input one. Similarly, the data&#39;s location is asserted to be the same as the input sequence of spans. These arguments are the ones used in the sequence of spans verification in (2).</li></ol><p>Once these are valid, the settlement contract can be sure that the rollup data was posted to Celestia, and the sequence of spans references it correctly.</p><h4 id="zk-rollups-that-use-sequence-of-spans-pros" tabindex="-1">Zk-rollups that use sequence of spans: Pros <a class="header-anchor" href="#zk-rollups-that-use-sequence-of-spans-pros" aria-label="Permalink to &quot;Zk-rollups that use sequence of spans: Pros&quot;">​</a></h4><ul><li>The inclusion proof inside the zk-circuit is a simple proof that uses traditional merkle tree. In the case of using blob share commitment, as will be explained below, additional libraries that can be expensive to prove are required.</li></ul><h4 id="zk-rollups-that-use-sequence-of-spans-cons" tabindex="-1">Zk-rollups that use sequence of spans: Cons <a class="header-anchor" href="#zk-rollups-that-use-sequence-of-spans-cons" aria-label="Permalink to &quot;Zk-rollups that use sequence of spans: Cons&quot;">​</a></h4><p>None</p><h3 id="zk-rollups-that-use-blob-share-commitments" tabindex="-1">Zk-rollups that use blob share commitments <a class="header-anchor" href="#zk-rollups-that-use-blob-share-commitments" aria-label="Permalink to &quot;Zk-rollups that use blob share commitments&quot;">​</a></h3><p>To use blob share commitments to reference rollup data in the zk-rollup settlement contract, the zk-circuits need to be able to deserialize protobuf encoded messages. Alternatively, more involved merkle proofs will need to be verified.</p><h4 id="protobuf-deserialization-inside-a-zk-circuit" tabindex="-1">Protobuf deserialization inside a zk-circuit <a class="header-anchor" href="#protobuf-deserialization-inside-a-zk-circuit" aria-label="Permalink to &quot;Protobuf deserialization inside a zk-circuit&quot;">​</a></h4><p>One way of using the blob share commitment to reference the rollup data in zk-rollups is via using a protobuf deserialization library inside the zk-circuit. And the verification would proceed as follows:</p><ol><li>Zk-proof of the state transitions, which is left to the rollup team to define.</li><li>Verify that the blob share commitment is valid using the proofs laid out in the <a href="#blob-share-commitment-proof-details">proof details of blob share commitment</a> section.</li><li>The zk-proof verifier would take as argument the data root and the blob share commitment. Then, inside the circuit, the protobuf encoded PFB transaction will be deserialized and then verify the following:</li></ol><ul><li>The deserialized blob share commitment is the same as the one provided as input</li><li>The circuit will prove the inclusion of the PFB to the data root, then assert that the data root is the same as the one provided as input.</li></ul><p>If the above conditions are valid, the rollup settlement contract can be sure that the rollup data was posted to Celestia and is correctly referenced.</p><h4 id="zk-rollups-that-use-blob-share-commitments-pros" tabindex="-1">Zk-rollups that use blob share commitments: Pros <a class="header-anchor" href="#zk-rollups-that-use-blob-share-commitments-pros" aria-label="Permalink to &quot;Zk-rollups that use blob share commitments: Pros&quot;">​</a></h4><p>None</p><h4 id="zk-rollups-that-use-blob-share-commitments-cons" tabindex="-1">Zk-rollups that use blob share commitments: Cons <a class="header-anchor" href="#zk-rollups-that-use-blob-share-commitments-cons" aria-label="Permalink to &quot;Zk-rollups that use blob share commitments: Cons&quot;">​</a></h4><ul><li>This approach requires having access to a protobuf decoder inside a zk-circuit which is not straightforward to have. Also, the relative costs will need to be investigated.</li></ul><h3 id="heavy-merkle-proofs-usage" tabindex="-1">Heavy merkle proofs usage <a class="header-anchor" href="#heavy-merkle-proofs-usage" aria-label="Permalink to &quot;Heavy merkle proofs usage&quot;">​</a></h3><p>Similar to <a href="#protobuf-deserialization-inside-a-zk-circuit">Protobuf deserialization inside a zk-circuit</a>, the zk-circuit will proceed to the verification of the availability of the data. The difference is that instead of parsing the encoded protobuf, the proofs defined under the <a href="#blob-share-commitment-proof-details">blob share commitment proof details</a> section will need to be verified inside the zk-circuit as follows:</p><ol><li>Zk-proof of the state transitions, which is left to the rollup team to define.</li><li>Verify that the blob share commitment is valid using the proofs laid out in the <a href="#blob-share-commitment-proof-details">blob share commitment proof details</a> section.</li><li>The zk-proof verifier would take as argument the data root and the blob share commitment. Then, inside the circuit:</li></ol><ul><li>It will verify that the input blob share commitment corresponds to the rollup data.</li><li>Verify that the input data root commits to that blob share commitment. Check the <a href="#blob-share-commitment-proof-details">blob share commitment proof details</a> for more details</li></ul><p>Once these proofs are valid, the rollup settlement contract can be sure that the rollup data was posted to Celestia and is correctly referenced.</p><h4 id="heavy-merkle-proofs-usage-pros" tabindex="-1">heavy merkle proofs usage: Pros <a class="header-anchor" href="#heavy-merkle-proofs-usage-pros" aria-label="Permalink to &quot;heavy merkle proofs usage: Pros&quot;">​</a></h4><p>None</p><h4 id="heavy-merkle-proofs-usage-cons" tabindex="-1">heavy merkle proofs usage: Cons <a class="header-anchor" href="#heavy-merkle-proofs-usage-cons" aria-label="Permalink to &quot;heavy merkle proofs usage: Cons&quot;">​</a></h4><ul><li>More heavy usage of merkle proofs inside and outside the zk-circuit.</li></ul><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>Given the above details, using the sequence of spans is the better solution in the general case as explained in the <a href="#optimistic-rollups-that-use-a-sequence-of-spans">optimistic rollups that uses a sequence of spans</a> and <a href="#zk-rollups-that-use-sequence-of-spans">zk-rollups that use sequence of spans</a> sections. The proof sizes are small and allow for greater flexibility. However, if the rollup team has different requirements, then the other designs can be explored.</p><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h2><h3 id="should-i-use-the-celestia-transaction-hash-to-reference-the-rollup-data" tabindex="-1">Should I use the Celestia transaction hash to reference the rollup data? <a class="header-anchor" href="#should-i-use-the-celestia-transaction-hash-to-reference-the-rollup-data" aria-label="Permalink to &quot;Should I use the Celestia transaction hash to reference the rollup data?&quot;">​</a></h3><p>This is asked a lot since it&#39;s the most intuitive way of referencing data. However, in Celestia, referencing the data using the transaction hash is not recommended.</p><p>A transaction proof in Celestia goes back to providing an inclusion proof of the shares containing the transaction. This means if the transaction hash is used to reference data in a Celestia block, the rollup verification mechanism should do the following:</p><ul><li>Verify an inclusion proof of the shares comprising the transaction up to the data root tuple root</li><li>Decode those shares and parse the transaction, then hash its components to generate the transaction hash</li><li>Verify that the generated transaction hash matches the one used to reference the data</li></ul><p>At this level, the transaction hash is authenticated and the verification contract has the shares of the transaction. Then, the verification contract needs to take the share commitment from the parsed transaction and follow the steps outlined in the <a href="#blob-share-commitment">blob share commitment</a> section.</p><p>As observed, using the transaction hash is expensive and doesn&#39;t yield any advantages over using the blob share commitment, which in turn is more expensive than using the sequence of spans.</p><p>So, unless there are more reasons to use the transaction hash to reference the rollup data, the sequence of spans approach remains better.</p>`,113),i=[r];function n(l,h,c,p,u,d){return t(),o("div",null,i)}const b=e(s,[["render",n]]);export{f as __pageData,b as default};
