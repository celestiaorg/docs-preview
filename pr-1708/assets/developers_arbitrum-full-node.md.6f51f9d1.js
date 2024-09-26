import{_ as n,o as e,c as o,Q as a}from"./chunks/framework.aac99d0e.js";const g=JSON.parse('{"title":"Running a full node and/or validator","description":"A guide on how to run a full node or validating full node on your Orbit rollup.","frontmatter":{"description":"A guide on how to run a full node or validating full node on your Orbit rollup.","head":[["meta",{"name":"og:title","content":"Running a full node and/or validator | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/arbitrum-full-node.md","filePath":"developers/arbitrum-full-node.md","lastUpdated":1726490612000}'),t={name:"developers/arbitrum-full-node.md"},r=a(`<h1 id="running-a-full-node-and-or-validator" tabindex="-1">Running a full node and/or validator <a class="header-anchor" href="#running-a-full-node-and-or-validator" aria-label="Permalink to &quot;Running a full node and/or validator&quot;">​</a></h1><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li>Familiarity with Ethereum, Ethereum&#39;s testnets, Arbitrum, and Celestia</li><li><a href="https://docs.arbitrum.io/launch-orbit-chain/orbit-gentle-introduction" target="_blank" rel="noreferrer">A gentle introduction: Orbit chains</a></li><li><a href="./arbitrum-integration">Arbitrum Orbit integration overview</a></li><li><a href="./arbitrum-deploy">Quickstart: Deploy an Arbitrum Orbit rollup</a></li></ul><h2 id="running-a-full-node" tabindex="-1">Running a full node <a class="header-anchor" href="#running-a-full-node" aria-label="Permalink to &quot;Running a full node&quot;">​</a></h2><p>To run a full node, you can <a href="https://docs.arbitrum.io/node-running/how-tos/running-an-orbit-node" target="_blank" rel="noreferrer">follow the steps outlined in the Arbitrum docs</a>, with the difference being that you will use this image: <strong><code>dfcelestia/nitro-node-dev:latest</code></strong> instead of the one mentioned in the Arbitrum docs.</p><p>Note that you can either use the flags in the nitro binary + the flags <a href="https://github.com/celestiaorg/nitro/blob/v2.3.1-rc.1/das/celestia/celestia.go#L53-L65" target="_blank" rel="noreferrer">found in the celestia package</a>, or you can just provide a node <code>config.json</code> file with the <code>celestia-cfg</code> for them to run it, which would look something like this:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">docker run --rm -v </span><span style="color:#9ECBFF;">&quot;$HOME/Documents/configs/nodeConfig.json:/config.json:ro&quot;</span><span style="color:#E1E4E8;"> \\</span></span>
<span class="line"><span style="color:#E1E4E8;">  --network host celestia-nitro:v</span><span style="color:#79B8FF;">2.3</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">-rc.</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> --conf.file /config.json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">docker run --rm -v </span><span style="color:#032F62;">&quot;$HOME/Documents/configs/nodeConfig.json:/config.json:ro&quot;</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#24292E;">  --network host celestia-nitro:v</span><span style="color:#005CC5;">2.3</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">-rc.</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> --conf.file /config.json</span></span></code></pre></div><h2 id="running-a-full-node-with-validation" tabindex="-1">Running a full node with validation <a class="header-anchor" href="#running-a-full-node-with-validation" aria-label="Permalink to &quot;Running a full node with validation&quot;">​</a></h2><p>The information above applies to <a href="https://docs.arbitrum.io/node-running/how-tos/running-a-validator" target="_blank" rel="noreferrer">the steps outlined to run a validating full node (validator)</a>.</p><p>Finally, note that this will require connection to a DA node, and we recommend running a Bridge node if you will be instantiating multiple rollups.</p>`,10),i=[r];function l(s,d,u,c,p,h){return e(),o("div",null,i)}const m=n(t,[["render",l]]);export{g as __pageData,m as default};