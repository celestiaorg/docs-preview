import{_ as s,o as a,c as o,Q as n}from"./chunks/framework.28a16ac2.js";const F=JSON.parse('{"title":"Custom networks and values","description":"Learn about custom networks and values on celestia-node.","frontmatter":{"description":"Learn about custom networks and values on celestia-node.","head":[["meta",{"name":"og:title","content":"Custom networks and values | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/celestia-node-custom-networks.md","filePath":"nodes/celestia-node-custom-networks.md","lastUpdated":1715759656000}'),p={name:"nodes/celestia-node-custom-networks.md"},l=n('<h1 id="custom-networks-and-values" tabindex="-1">Custom networks and values <a class="header-anchor" href="#custom-networks-and-values" aria-label="Permalink to &quot;Custom networks and values&quot;">​</a></h1><p>This section will cover importing bootstrapper IDs, chain ID, and network ID. This will allow you to import custom values for a chain that is not in the default configuration.</p><p>If you have a custom network you can export <code>CELESTIA_CUSTOM</code>, which will look something like:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> BRIDGE</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/ip4/&lt;ip-address&gt;/tcp/2121/p2p/&lt;node-ID&gt;&quot;</span></span>\n<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> GENESIS_HASH</span><span style="color:#F97583;">=&lt;</span><span style="color:#9ECBFF;">genesis-has</span><span style="color:#E1E4E8;">h</span><span style="color:#F97583;">&gt;</span></span>\n<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> NETWORK</span><span style="color:#F97583;">=&lt;</span><span style="color:#9ECBFF;">network-nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>\n<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> CELESTIA_CUSTOM</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;${</span><span style="color:#E1E4E8;">NETWORK</span><span style="color:#9ECBFF;">}:${</span><span style="color:#E1E4E8;">GENESIS_HASH</span><span style="color:#9ECBFF;">}:${</span><span style="color:#E1E4E8;">BRIDGE</span><span style="color:#9ECBFF;">}&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> BRIDGE</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;/ip4/&lt;ip-address&gt;/tcp/2121/p2p/&lt;node-ID&gt;&quot;</span></span>\n<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> GENESIS_HASH</span><span style="color:#D73A49;">=&lt;</span><span style="color:#032F62;">genesis-has</span><span style="color:#24292E;">h</span><span style="color:#D73A49;">&gt;</span></span>\n<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> NETWORK</span><span style="color:#D73A49;">=&lt;</span><span style="color:#032F62;">network-nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>\n<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> CELESTIA_CUSTOM</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;${</span><span style="color:#24292E;">NETWORK</span><span style="color:#032F62;">}:${</span><span style="color:#24292E;">GENESIS_HASH</span><span style="color:#032F62;">}:${</span><span style="color:#24292E;">BRIDGE</span><span style="color:#032F62;">}&quot;</span></span></code></pre></div><p>Query your node ID <a href="./../developers/node-tutorial#get-your-node-id">using the RPC CLI</a>. These values with examples would look like:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> BRIDGE</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/ip4/151.115.14.33/tcp/2121/p2p/12D3KooWKEeRtzVMPUdxYsZo2edqps6mS67n6LT5mPdULSkPSxBQ&quot;</span></span>\n<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> GENESIS_HASH</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">580</span><span style="color:#9ECBFF;">B3DFF8A7C716968161D91116A1E171F486298D582874E93714E489C9E6E88</span></span>\n<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> NETWORK</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">custom</span></span>\n<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> CELESTIA_CUSTOM</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;${</span><span style="color:#E1E4E8;">NETWORK</span><span style="color:#9ECBFF;">}:${</span><span style="color:#E1E4E8;">GENESIS_HASH</span><span style="color:#9ECBFF;">}:${</span><span style="color:#E1E4E8;">BRIDGE</span><span style="color:#9ECBFF;">}&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> BRIDGE</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;/ip4/151.115.14.33/tcp/2121/p2p/12D3KooWKEeRtzVMPUdxYsZo2edqps6mS67n6LT5mPdULSkPSxBQ&quot;</span></span>\n<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> GENESIS_HASH</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">580</span><span style="color:#032F62;">B3DFF8A7C716968161D91116A1E171F486298D582874E93714E489C9E6E88</span></span>\n<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> NETWORK</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">custom</span></span>\n<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> CELESTIA_CUSTOM</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;${</span><span style="color:#24292E;">NETWORK</span><span style="color:#032F62;">}:${</span><span style="color:#24292E;">GENESIS_HASH</span><span style="color:#032F62;">}:${</span><span style="color:#24292E;">BRIDGE</span><span style="color:#032F62;">}&quot;</span></span></code></pre></div><p>Then, start your node with:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">node-typ</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> [flags...]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">node-typ</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> [flags...]</span></span></code></pre></div>',8),e=[l];function t(c,r,E,y,i,d){return a(),o("div",null,e)}const h=s(p,[["render",t]]);export{F as __pageData,h as default};
