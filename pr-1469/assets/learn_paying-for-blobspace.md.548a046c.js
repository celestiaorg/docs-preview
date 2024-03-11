import{_ as e}from"./chunks/tx-lifecycle.44812217.js";import{_ as a,o as t,c as o,Q as i}from"./chunks/framework.90e78144.js";const u=JSON.parse('{"title":"Paying for blobspace","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Paying for blobspace | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"learn/paying-for-blobspace.md","filePath":"learn/paying-for-blobspace.md","lastUpdated":1710175415000}'),s={name:"learn/paying-for-blobspace.md"},n=i('<h1 id="paying-for-blobspace" tabindex="-1">Paying for blobspace <a class="header-anchor" href="#paying-for-blobspace" aria-label="Permalink to &quot;Paying for blobspace&quot;">​</a></h1><h2 id="payforblobs-transactions" tabindex="-1">PayForBlobs transactions <a class="header-anchor" href="#payforblobs-transactions" aria-label="Permalink to &quot;PayForBlobs transactions&quot;">​</a></h2><p>To publish data on Celestia, developers can submit <code>PayForBlobs</code> transactions. A <code>PayForBlobs</code> transaction consists of the identity of the sender, the data to be made available, the data size, the namespace, and a signature.</p><p>Each <code>PayForBlobs</code> transaction is split into two parts: the blob or blobs which include the data to be made available along with the namespace, and the executable payment transaction which includes a commitment to the data.</p><p>Both the blobs and executable payment transactions are put into the block within the appropriate namespace. The block data is extended using erasure coding and then Merkelized into a data root commitment included in the block header.</p><p><img src="'+e+'" alt="Lifecycle of a celestia-app Transaction"></p><p>See <a href="./how-celestia-works/transaction-lifecycle">the detailed life cycle of a Celestia transaction</a>.</p><p>Learn how to <a href="./../developers/submit-data">submit data to Celestia’s data availability layer</a>.</p><h2 id="fee-market-overview" tabindex="-1">Fee market overview <a class="header-anchor" href="#fee-market-overview" aria-label="Permalink to &quot;Fee market overview&quot;">​</a></h2><p>Celestia uses a standard gas-price prioritised mempool. This means that transactions with higher fees will be prioritised by validators. Fees are comprised of a flat fee per transaction and then a variable fee based on the size of each blob in the transaction.</p><p>Understand how fees are calculated on Celestia in <a href="./../developers/submit-data">the overview on submitting PFB transactions</a>.</p>',11),r=[n];function c(l,d,p,h,b,m){return t(),o("div",null,r)}const y=a(s,[["render",c]]);export{u as __pageData,y as default};
