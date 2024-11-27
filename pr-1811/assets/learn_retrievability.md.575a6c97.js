import{_ as e,o as a,c as t,Q as i}from"./chunks/framework.02192af2.js";const g=JSON.parse('{"title":"Data retrievability and pruning","description":"Practices and expectations for data retrievability and pruning on Celestia.","frontmatter":{"sidebar_label":"Data retrievability and pruning","description":"Practices and expectations for data retrievability and pruning on Celestia.","head":[["meta",{"property":"og:title","content":"Data retrievability and pruning | Celestia Docs"}],["meta",{"property":"og:description","content":"Practices and expectations for data retrievability and pruning on Celestia."}]]},"headers":[],"relativePath":"learn/retrievability.md","filePath":"learn/retrievability.md","lastUpdated":1732735429000}'),o={name:"learn/retrievability.md"},r=i('<h1 id="data-retrievability-and-pruning" tabindex="-1">Data retrievability and pruning <a class="header-anchor" href="#data-retrievability-and-pruning" aria-label="Permalink to &quot;Data retrievability and pruning&quot;">​</a></h1><p>The purpose of data availability layers such as Celestia is to ensure that block data is provably published, so that applications and rollups can know what the state of their chain is, and store that data. Once the data is published, data availability layers <a href="https://notes.ethereum.org/@vbuterin/proto_danksharding_faq#If-data-is-deleted-after-30-days-how-would-users-access-older-blobs" target="_blank" rel="noreferrer">do not inherently guarantee that historical data will be permanently stored</a> and remain retrievable.</p><p>In this document, we discuss the state of data retrievability and pruning in Celestia, as well as some tips for rollup developers in order to ensure that syncing new rollup nodes is possible.</p><h2 id="data-retrievability-and-pruning-in-celestia-node" tabindex="-1">Data retrievability and pruning in celestia-node <a class="header-anchor" href="#data-retrievability-and-pruning-in-celestia-node" aria-label="Permalink to &quot;Data retrievability and pruning in celestia-node&quot;">​</a></h2><p>As of version v0.13.0, celestia-node has implemented a light node sampling window of 30 days, as specified in <a href="https://github.com/celestiaorg/CIPs/blob/main/cips/cip-4.md" target="_blank" rel="noreferrer">CIP-4</a>. This means that once pruning is implemented, light nodes will now only sample blocks within a 30-day window instead of sampling all blocks from genesis. This change introduces the concept of pruning to celestia-node, where data outside of the 30-day window may not be stored by light nodes, marking a significant update in how data retrievability and storage are managed within the network (<a href="https://github.com/celestiaorg/celestia-node/releases/tag/v0.13.0" target="_blank" rel="noreferrer">v0.13.0 release notes</a>).</p><p>Data blobs older than the recency window will be pruned by default on light nodes, after pruning is fully implemented, but will continue to be stored by archival nodes that do not prune data. Light nodes will be able to query historic blob data in namespaces from archival nodes, as long as archival nodes exist on the public network.</p><p>Once pruning is fully implemented, light nodes will only perform data availability sampling for blocks within the data recency window of 30 days.</p><h2 id="suggested-practices-for-rollups" tabindex="-1">Suggested practices for rollups <a class="header-anchor" href="#suggested-practices-for-rollups" aria-label="Permalink to &quot;Suggested practices for rollups&quot;">​</a></h2><p>Rollups may need to access historic data in order to allow new rollup nodes to reconstruct the latest state by replaying historical blocks. Once data has been published on Celestia and guaranteed to have been made available, rollups and applications are responsible for storing their historical data.</p><p>While it is possible to continue to do this by using the <code>GetAll</code> API method in celestia-node on historic blocks as long as archival nodes exist on the public Celestia network, rollup developers should not rely on this as the only method to access historical data, as archival nodes serving requests for historical data for free is not guaranteed. Below are some other suggested methods to access historical data.</p><ul><li><strong>Use professional archival node or data providers.</strong> It is expected that professional infrastructure providers will provide paid access to archival nodes, where historical data can be retrieved, for example using the <code>GetAll</code> API method. This provides better guarantees than solely relying on free archival nodes on the public Celestia network.</li><li><strong>Share snapshots of rollup nodes.</strong> Rollups could share snapshots of their data directories which can be downloaded manually by users bootstrapping new nodes. These snapshots could contain the latest state of the rollup, and/or all the historical blocks.</li><li><strong>Add peer-to-peer support for historical block sync.</strong> A less manual version of sharing snapshots, where rollup nodes could implement built-in support for block sync, where rollup nodes download historical block data from each other over a peer-to-peer network. <ul><li><a href="https://github.com/celestiaorg/celestia-node/issues/2830" target="_blank" rel="noreferrer"><strong>Namespace pinning.</strong></a> In the future, celestia-node is expected to allow nodes to choose to &quot;pin&quot; data from selected namespaces that they wish to store and make available for other nodes. This will allow rollup nodes to be responsible for storing their data, without needing to implement their own peer-to-peer historical block sync mechanism.</li></ul></li></ul>',11),n=[r];function s(l,d,c,h,p,u){return a(),t("div",null,n)}const f=e(o,[["render",s]]);export{g as __pageData,f as default};
