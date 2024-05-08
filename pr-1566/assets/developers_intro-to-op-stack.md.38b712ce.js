import{_ as t,o as e,c as a,Q as o}from"./chunks/framework.86842dc0.js";const b=JSON.parse('{"title":"Introduction to OP Stack integration","description":"Learn about the integration of OP Stack with Celestia.","frontmatter":{"description":"Learn about the integration of OP Stack with Celestia.","head":[["meta",{"name":"og:title","content":"Introduction to OP Stack integration | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/intro-to-op-stack.md","filePath":"developers/intro-to-op-stack.md","lastUpdated":1715204018000}'),i={name:"developers/intro-to-op-stack.md"},r=o('<h1 id="introduction-to-op-stack-integration" tabindex="-1">Introduction to OP Stack integration <a class="header-anchor" href="#introduction-to-op-stack-integration" aria-label="Permalink to &quot;Introduction to OP Stack integration&quot;">​</a></h1><p><a href="https://optimism.io" target="_blank" rel="noreferrer">Optimism</a> is a low-cost and lightning-fast Ethereum L2 blockchain, built with <a href="https://stack.optimism.io/" target="_blank" rel="noreferrer">the OP Stack</a>.</p><p><a href="https://celestia.org" target="_blank" rel="noreferrer">Celestia</a> is a modular consensus and data availability (DA) network, built to enable anyone to easily deploy their own blockchain with minimal overhead.</p><p>Together, they allow developers to create rollups that post data to Celestia and settle on Ethereum.</p><h2 id="about-the-integration" tabindex="-1">About the integration <a class="header-anchor" href="#about-the-integration" aria-label="Permalink to &quot;About the integration&quot;">​</a></h2><p><a href="https://www.optimism.io/" target="_blank" rel="noreferrer">Optimism</a> uses Ethereum as a DA layer. Currently, settlement and DA for Optimism are on Ethereum, both onchain. <code>op-batcher</code> batches up rollup blocks and posts to Ethereum.</p><p>The integration of OP Stack with Celestia underneath for DA allows rollup operators to reduce overhead that is associated with posting data as <code>calldata</code> on Ethereum. Instead, <code>op-batcher</code> batches up rollup blocks and posts them to Celestia&#39;s DA network.</p><p>The handling of data is accomplished in two ways. First, data is written to the data availability (DA) layer i.e. in this case Celestia, then the data commitment is written to the <code>op-batcher</code>. When reading <code>op-node</code> simply reads the data back from the DA layer by reading the data commitment from the <code>op-batcher</code> first, then reading the data from the DA layer using the data commitment. While previously <code>op-node</code> was reading from <code>calldata</code> on Ethereum, it now reads data from Celestia.</p><p>There are a few tools involved in the data handling process. <code>op-batcher</code> batches up rollup blocks and posts them to Ethereum. <code>op-geth</code> handles execution, while <code>op-proposer</code> is responsible for state commitment submission.</p><p>By using Celestia as a DA layer, existing L2s can switch from posting their data as <code>calldata</code> on Ethereum, to posting to Celestia. The commitment to the block is posted on Celestia, which is purpose-built for data availability. This is a more scalable than the traditional method of posting this data as <code>calldata</code> on monolithic chains.</p><h3 id="github-repository" tabindex="-1">GitHub repository <a class="header-anchor" href="#github-repository" aria-label="Permalink to &quot;GitHub repository&quot;">​</a></h3><p>Find the <a href="https://github.com/celestiaorg/optimism/" target="_blank" rel="noreferrer">repository for this integration</a> at <code>https://github.com/celestiaorg/optimism</code>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a <strong>beta integration</strong> and we are working on resolving <a href="https://github.com/celestiaorg/optimism/issues" target="_blank" rel="noreferrer">open issues</a>.</p></div><h2 id="category-contents" tabindex="-1">Category contents <a class="header-anchor" href="#category-contents" aria-label="Permalink to &quot;Category contents&quot;">​</a></h2><p>This category will guide you through interacting with existing OP Stack rollups with Celestia underneath, then how to start your own devnet with a modified version of <code>optimism-bedrock</code> that uses Celestia as a DA layer.</p><p><em>Discover how to integrate existing blockchain frameworks like the OP Stack with Celestia in this category.</em></p><ul><li><a href="./bubs-testnet">Bubs testnet</a>: learn about the first testnet made with OP Stack with Celestia underneath</li><li><a href="./deploy-on-bubs">Deploy a smart contract on Bubs testnet</a></li><li><a href="./gm-portal-bubs">Deploy a GM Portal dapp on Bubs testnet</a></li><li><a href="./optimism-devnet">Deploy an OP Stack devnet</a></li><li><a href="./optimism">Deploy an OP Stack devnet on Celestia</a></li></ul><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>Now that you understand the integration, you can start learning about the <a href="./bubs-testnet">Bubs testnet</a>, built with OP Stack and Celestia! This testnet is a great way to explore the possibilities of this integration and test your applications in a live environment.</p>',19),n=[r];function s(l,h,c,d,p,m){return e(),a("div",null,n)}const g=t(i,[["render",s]]);export{b as __pageData,g as default};
