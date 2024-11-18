import{_ as e,o as t,c as o,Q as a}from"./chunks/framework.4e769b6f.js";const v=JSON.parse('{"title":"Overview to running nodes on Celestia","description":"An overview on how to participate in the Celestia network.","frontmatter":{"description":"An overview on how to participate in the Celestia network.","head":[["meta",{"property":"og:title","content":"Overview to running nodes on Celestia | Celestia Docs"}],["meta",{"property":"og:description","content":"An overview on how to participate in the Celestia network."}]]},"headers":[],"relativePath":"how-to-guides/nodes-overview.md","filePath":"how-to-guides/nodes-overview.md","lastUpdated":1731916403000}'),n={name:"how-to-guides/nodes-overview.md"},d=a('<h1 id="overview-to-running-nodes-on-celestia" tabindex="-1">Overview to running nodes on Celestia <a class="header-anchor" href="#overview-to-running-nodes-on-celestia" aria-label="Permalink to &quot;Overview to running nodes on Celestia&quot;">​</a></h1><p>There are many ways you can participate in the Celestia <a href="./participate">networks</a>.</p><p>Celestia node operators can run several options on the network.</p><p>Consensus:</p><ul><li><a href="./validator-node">Validator node</a>: This type of node participates in consensus by producing and voting on blocks.</li><li><a href="./consensus-node">Consensus node</a>: A celestia-app full node to sync blockchain history.</li></ul><p>Data Availability:</p><ul><li><a href="./bridge-node">Bridge node</a>: This node bridges blocks between the Data-Availability network and the Consensus network.</li><li><a href="./full-storage-node">Full storage node</a>: This node stores all the data but does not connect to Consensus.</li><li><a href="./light-node">Light node</a>: Light clients conduct data availability sampling on the Data Availability network.</li></ul><p>You can learn more about how to set up each different node by going through each tutorial guide.</p><h2 id="recommended-celestia-node-requirements" tabindex="-1">Recommended Celestia node requirements <a class="header-anchor" href="#recommended-celestia-node-requirements" aria-label="Permalink to &quot;Recommended Celestia node requirements&quot;">​</a></h2><h2 id="data-availability-nodes" tabindex="-1">Data availability nodes <a class="header-anchor" href="#data-availability-nodes" aria-label="Permalink to &quot;Data availability nodes&quot;">​</a></h2><table><thead><tr><th>Node type</th><th>Memory</th><th>CPU</th><th>Disk</th><th>Bandwidth</th></tr></thead><tbody><tr><td>Light node</td><td>500 MB RAM</td><td>Single core</td><td>100 GB SSD</td><td>56 Kbps</td></tr><tr><td>Bridge node</td><td>16 GB RAM</td><td>6 cores</td><td>2 TB NVME</td><td>1 Gbps</td></tr><tr><td>Full storage node</td><td>16 GB RAM</td><td>Quad-core</td><td>2 TB NVME</td><td>1 Gbps</td></tr></tbody></table><h2 id="consensus-nodes" tabindex="-1">Consensus nodes <a class="header-anchor" href="#consensus-nodes" aria-label="Permalink to &quot;Consensus nodes&quot;">​</a></h2><table><thead><tr><th>Node type</th><th>Memory</th><th>CPU</th><th>Disk</th><th>Bandwidth</th></tr></thead><tbody><tr><td>Validator</td><td>16 GB RAM</td><td>8 cores</td><td>2 TB SSD</td><td>1 Gbps</td></tr><tr><td>Consensus node</td><td>16 GB RAM</td><td>Quad-core</td><td>2 TB SSD</td><td>1 Gbps</td></tr></tbody></table><p>Please provide any feedback on the tutorials and guides. If you notice a bug or issue, feel free to make a pull request or write up a Github issue!</p>',14),i=[d];function s(r,l,h,c,u,p){return t(),o("div",null,i)}const g=e(n,[["render",s]]);export{v as __pageData,g as default};
