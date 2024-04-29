import{_ as e,o as a,c as t,Q as o}from"./chunks/framework.cfbc1d95.js";const b=JSON.parse('{"title":"New Blobstream X deployments","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"New Blobstream X deployments | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/blobstream-x-deploy.md","filePath":"developers/blobstream-x-deploy.md","lastUpdated":1714390178000}'),c={name:"developers/blobstream-x-deploy.md"},n=o('<h1 id="new-blobstream-x-deployments" tabindex="-1">New Blobstream X deployments <a class="header-anchor" href="#new-blobstream-x-deployments" aria-label="Permalink to &quot;New Blobstream X deployments&quot;">​</a></h1><p>If you want to deploy Blobstream X to a new chain, where a Gateway contract does not exist, you need to do the following.</p><p>If Succinct Gateway already exists on this chain, you can skip this step. <a href="https://docs.succinct.xyz/platform/onchain-integration#succinctgateway" target="_blank" rel="noreferrer">You can check the list of deployed <code>SuccinctGateway</code> contracts</a>.</p><h2 id="deploy-a-new-succinctgateway-contract" tabindex="-1">Deploy a new <code>SuccinctGateway</code> contract <a class="header-anchor" href="#deploy-a-new-succinctgateway-contract" aria-label="Permalink to &quot;Deploy a new `SuccinctGateway` contract&quot;">​</a></h2><p><a href="https://docs.succinct.xyz/platform/onchain-integration#gateway-deployment" target="_blank" rel="noreferrer">Deploy a new <code>SuccinctGateway</code> contract to the new chain</a>.</p><h2 id="deploy-a-blobstreamx-contract-to-the-new-chain" tabindex="-1">Deploy a <code>BlobstreamX</code> contract to the new chain <a class="header-anchor" href="#deploy-a-blobstreamx-contract-to-the-new-chain" aria-label="Permalink to &quot;Deploy a `BlobstreamX` contract to the new chain&quot;">​</a></h2><p><a href="https://github.com/succinctlabs/blobstreamx?tab=readme-ov-file#deploy-blobstream-x-contract" target="_blank" rel="noreferrer">Follow the guide to use your deployed <code>SuccinctGateway</code> to deploy a new Blobstream X contract</a>.</p><h2 id="run-a-local-prover" tabindex="-1">Run a local prover <a class="header-anchor" href="#run-a-local-prover" aria-label="Permalink to &quot;Run a local prover&quot;">​</a></h2><p>Now that you have the contracts deployed, you can <a href="./requesting-data-commitment-ranges#local-proving">run a local prover</a>.</p>',9),r=[n];function l(s,d,i,p,h,m){return a(),t("div",null,r)}const u=e(c,[["render",l]]);export{b as __pageData,u as default};
