import{_ as s,o as a,c as o,Q as e}from"./chunks/framework.ee267188.js";const g=JSON.parse('{"title":"Syncing a light node from a trusted hash","description":"How to sync a light node from a trusted hash.","frontmatter":{"description":"How to sync a light node from a trusted hash.","head":[["meta",{"property":"og:title","content":"Syncing a light node from a trusted hash | Celestia Docs"}],["meta",{"property":"og:description","content":"How to sync a light node from a trusted hash."}]]},"headers":[],"relativePath":"how-to-guides/celestia-node-trusted-hash.md","filePath":"how-to-guides/celestia-node-trusted-hash.md","lastUpdated":1738705525000}'),t={name:"how-to-guides/celestia-node-trusted-hash.md"},n=e(`<h1 id="syncing-a-light-node-from-a-trusted-hash" tabindex="-1">Syncing a light node from a trusted hash <a class="header-anchor" href="#syncing-a-light-node-from-a-trusted-hash" aria-label="Permalink to &quot;Syncing a light node from a trusted hash&quot;">​</a></h1><p>This guide goes over how to sync a DA light node from a trusted hash. The example is with Mainnet Beta. You will need to adjust the commands accordingly for Mocha, Arabica, or a custom network.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Syncing to a trusted hash means that you will not sample the entire chain. This adds a trust assumption that you trust the history of the chain up to that point and that you trust the entity where you get the hash from. In this example, the trusted entity is a consensus endpoint or Celenium.</p></div><ol><li><p>Get trusted height &amp; hash from a consensus endpoint or <a href="https://celenium.io" target="_blank" rel="noreferrer">Celenium</a>.</p></li><li><p>Initialize the node store</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">light</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">networ</span><span style="color:#E1E4E8;">k</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">light</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">networ</span><span style="color:#24292E;">k</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div></li><li><p>Set the trusted height &amp; hash</p><ol><li>Open your <code>config.toml</code> at <code>.celestia-light/config.toml</code> (or <code>.celestia-light-&lt;other-network&gt;/config.toml</code>)</li><li>Set <code>DASer.SampleFrom</code> to the trusted height (e.g. <code>SampleFrom = 123456</code>)</li></ol></li><li><p>Run the node with the hash and flag:</p></li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">light</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--headers.trusted-hash</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">hash_of_block_</span><span style="color:#E1E4E8;">n</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">networ</span><span style="color:#E1E4E8;">k</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">consensus-node-rp</span><span style="color:#E1E4E8;">c</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">light</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--headers.trusted-hash</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">hash_of_block_</span><span style="color:#24292E;">n</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">networ</span><span style="color:#24292E;">k</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">consensus-node-rp</span><span style="color:#24292E;">c</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="for-service-operators" tabindex="-1">For service operators <a class="header-anchor" href="#for-service-operators" aria-label="Permalink to &quot;For service operators&quot;">​</a></h2><p>If you&#39;re using multiple light nodes for similar services like tracking the same rollup, it is recommended to use the same hash and height for them all services using the same starting height.</p>`,7),l=[n];function p(r,c,i,h,d,y){return a(),o("div",null,l)}const u=s(t,[["render",p]]);export{g as __pageData,u as default};
