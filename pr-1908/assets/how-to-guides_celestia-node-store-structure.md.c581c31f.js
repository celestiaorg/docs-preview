import{_ as e,o as t,c as o,Q as s}from"./chunks/framework.d373c5e0.js";const g=JSON.parse('{"title":"celestia-node datastore","description":"This section contains information on the celestia-node datastore and its contents.","frontmatter":{"description":"This section contains information on the celestia-node datastore and its contents.","head":[["meta",{"property":"og:title","content":"celestia-node datastore | Celestia Docs"}],["meta",{"property":"og:description","content":"This section contains information on the celestia-node datastore and its contents."}]]},"headers":[],"relativePath":"how-to-guides/celestia-node-store-structure.md","filePath":"how-to-guides/celestia-node-store-structure.md","lastUpdated":1740631659000}'),i={name:"how-to-guides/celestia-node-store-structure.md"},a=s('<h1 id="celestia-node-datastore" tabindex="-1">celestia-node datastore <a class="header-anchor" href="#celestia-node-datastore" aria-label="Permalink to &quot;celestia-node datastore&quot;">​</a></h1><p>The node&#39;s datastore refers to the storage structure used to manage the data that supports the node&#39;s operation. It consists of directories and files that contain the node&#39;s state, configuration, and other information relevant to the node.</p><p>The following are the directories and files found in the datastore:</p><ul><li><p><code>/blocks</code>: This directory stores blocks. Each file contained in this directory represents a block on Celestia and contains its associated data. This directory is present in the datastore for bridge and full nodes but not light nodes, as light nodes do not store blocks.</p></li><li><p><code>/data</code>: This directory contains block headers and various files belonging to the node&#39;s log-structured merge (LSM) storage system. The LSM files (such as <code>DISCARD</code>, <code>KEYREGISTRY</code>, and <code>MANIFEST</code>) manage the efficient storage and retrieval of data.</p></li><li><p><code>/index</code>: This directory stores the index files that handle mapping specific keys such as block heights, to the corresponding data. Similar to <code>/blocks</code>, the light node&#39;s datastore does not include this directory, as they do not perform indexing.</p></li><li><p><code>/inverted_index</code>: This directory stores the inverted index files used for mapping queries to the corresponding data location, along with associated LSM storage system files. The light node&#39;s datastore does not contain this directory.</p></li><li><p><code>/keys</code>: This directory stores the cryptographic key pairs that are used to operate the node.</p></li><li><p><code>/transients</code>: This directory contains temporary data such as cache files that are used while the node is operating, but are not a part of the permanent blockchain state.</p></li><li><p><code>config.toml</code>: Located in the node&#39;s root directory, this is the primary configuration file that defines core settings such as network parameters, P2P configuration, and API endpoints. This file is generated during node initialization.</p></li></ul>',4),n=[a];function r(d,c,l,h,p,u){return t(),o("div",null,n)}const m=e(i,[["render",r]]);export{g as __pageData,m as default};
