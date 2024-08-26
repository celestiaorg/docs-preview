import{_ as e,o as t,c as o,Q as a}from"./chunks/framework.9723a775.js";const n="/docs-preview/pr-1686/img/learn/monolithic-modular.png",g=JSON.parse('{"title":"Monolithic vs. modular blockchains","description":"Comparison between monolithic and modular blockchains.","frontmatter":{"description":"Comparison between monolithic and modular blockchains.","head":[["meta",{"name":"og:title","content":"Monolithic vs. modular blockchains | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"learn/how-celestia-works/monolithic-vs-modular.md","filePath":"learn/how-celestia-works/monolithic-vs-modular.md","lastUpdated":1724682361000}'),i={name:"learn/how-celestia-works/monolithic-vs-modular.md"},s=a('<h1 id="monolithic-vs-modular-blockchains" tabindex="-1">Monolithic vs. modular blockchains <a class="header-anchor" href="#monolithic-vs-modular-blockchains" aria-label="Permalink to &quot;Monolithic vs. modular blockchains&quot;">​</a></h1><p>Blockchains instantiate <a href="https://dl.acm.org/doi/abs/10.1145/98163.98167" target="_blank" rel="noreferrer">replicated state machines</a>: the nodes in a permissionless distributed network apply an ordered sequence of deterministic transactions to an initial state resulting in a common final state.</p><p>In other words, this means that nodes in a network all follow the same set of rules (<em>i.e.</em>, an ordered sequence of transactions) to go from a starting point (<em>i.e.</em>, an initial state) to an ending point (<em>i.e.</em>, a common final state). This process ensures that all nodes in the network agree on the final state of the blockchain, even though they operate independently.</p><p>This means blockchains require the following four functions:</p><ul><li><strong>Execution</strong> entails executing transactions that update the state correctly. Thus, execution must ensure that only valid transactions are executed, <em>i.e.</em>, transactions that result in valid state machine transitions.</li><li><strong>Settlement</strong> entails an environment for execution layers to verify proofs, resolve fraud disputes, and bridge between other execution layers.</li><li><strong>Consensus</strong> entails agreeing on the order of the transactions.</li><li><strong>Data Availability</strong> (DA) entails making the transaction data available. Note that execution, settlement, and consensus require DA.</li></ul><p>Traditional blockchains, <em>i.e.</em> <em>monolithic blockchains</em>, implement all four functions together in a single base consensus layer. The problem with monolithic blockchains is that the consensus layer must perform numerous different tasks, and it cannot be optimized for only one of these functions. As a result, the monolithic paradigm limits the throughput of the system.</p><p><img src="'+n+'" alt="Modular VS Monolithic"></p><p>As a solution, modular blockchains decouple these functions among multiple specialized layers as part of a modular stack. Due to the flexibility that specialization provides, there are many possibilities in which that stack can be arranged. For example, one such arrangement is the separation of the four functions into three specialized layers.</p><p>The base layer consists of DA and consensus and thus, is referred to as the Consensus and DA layer (or for brevity, the DA layer), while both settlement and execution are moved on top in their own layers. As a result, every layer can be specialized to optimally perform only its function, and thus, increase the throughput of the system. Furthermore, this modular paradigm enables multiple execution layers, <em>i.e.</em>, <a href="https://vitalik.eth.limo/general/2021/01/05/rollup.html" target="_blank" rel="noreferrer">rollups</a>, to use the same settlement and DA layers.</p>',9),r=[s];function l(c,h,m,d,u,p){return t(),o("div",null,r)}const b=e(i,[["render",l]]);export{g as __pageData,b as default};
