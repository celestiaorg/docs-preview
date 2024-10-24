import{_ as e,o,c as t,Q as s}from"./chunks/framework.823e8a10.js";const u=JSON.parse('{"title":"New SP1 Blobstream deployments","description":"","frontmatter":{"next":{"text":"Overview of Blobstream X","link":"/how-to-guides/blobstreamx"},"head":[["meta",{"name":"og:title","content":"New SP1 Blobstream deployments | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"how-to-guides/sp1-blobstream-deploy.md","filePath":"how-to-guides/sp1-blobstream-deploy.md","lastUpdated":1729813923000}'),a={name:"how-to-guides/sp1-blobstream-deploy.md"},n=s(`<h1 id="new-sp1-blobstream-deployments" tabindex="-1">New SP1 Blobstream deployments <a class="header-anchor" href="#new-sp1-blobstream-deployments" aria-label="Permalink to &quot;New SP1 Blobstream deployments&quot;">​</a></h1><p>This document provides instructions for deploying SP1 Blobstream to a new chain.</p><p><a href="https://github.com/succinctlabs/sp1-blobstream" target="_blank" rel="noreferrer">SP1 Blobstream</a> is the latest implementation of Blobstream in Rust using the <a href="https://github.com/succinctlabs/sp1" target="_blank" rel="noreferrer">SP1</a> zkVM.</p><h2 id="deploying-the-contracts" tabindex="-1">Deploying the contracts <a class="header-anchor" href="#deploying-the-contracts" aria-label="Permalink to &quot;Deploying the contracts&quot;">​</a></h2><p>To deploy SP1 Blobstream to a new chain, follow these steps:</p><ol><li>Clone the sp1-blobstream repository:</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/succinctlabs/sp1-blobstream</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sp1-blobstream</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/succinctlabs/sp1-blobstream</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sp1-blobstream</span></span></code></pre></div><ol start="2"><li><p>Follow the deployment instructions in the <a href="https://github.com/succinctlabs/sp1-blobstream?tab=readme-ov-file#deployment" target="_blank" rel="noreferrer">sp1-blobstream README</a>.</p></li><li><p>If you&#39;re deploying on a chain where there isn&#39;t a canonical verifier listed in the <a href="https://github.com/succinctlabs/sp1/blob/main/book/onchain-verification/contract-addresses.md" target="_blank" rel="noreferrer">SP1 contract addresses</a>, you&#39;ll need to:</p><p>a. Deploy your own SP1 Verifier from the <a href="https://github.com/succinctlabs/sp1-contracts" target="_blank" rel="noreferrer">sp1-contracts</a> matching your <code>sp1-sdk</code> version. b. Set the <code>SP1_VERIFIER_ADDRESS</code> in your <code>.env</code> file to the address of your deployed verifier.</p></li><li><p>To run the prover:</p><ul><li>For local proving, set <code>SP1_PROVER=local</code> in your environment.</li><li>To use the Succinct Proving Network for remote proving, set <code>SP1_PROVER=network</code>.</li><li>We recommend an instance with 64 vCPU and 128GB of RAM for local proving.</li></ul></li></ol><p>Note: Any whitelisting for custom provers would need to be implemented in the application&#39;s smart contracts (e.g., by using an approvedProvers mapping).</p>`,9),l=[n];function r(p,c,i,d,h,b){return o(),t("div",null,l)}const y=e(a,[["render",r]]);export{u as __pageData,y as default};
