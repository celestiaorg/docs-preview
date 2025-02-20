import{_ as e,o,c as s,Q as a}from"./chunks/framework.b3007fd5.js";const g=JSON.parse('{"title":"Common Node Setup Guide","description":"","frontmatter":{"head":[["meta",{"property":"og:title","content":"Common Node Setup Guide | Celestia Docs"}],["meta",{"property":"og:description","content":"The first modular blockchain network."}]]},"headers":[],"relativePath":"how-to-guides/common-node-setup.md","filePath":"how-to-guides/common-node-setup.md","lastUpdated":1740078199000}'),t={name:"how-to-guides/common-node-setup.md"},n=a('<h1 id="common-node-setup-guide" tabindex="-1">Common Node Setup Guide <a class="header-anchor" href="#common-node-setup-guide" aria-label="Permalink to &quot;Common Node Setup Guide&quot;">​</a></h1><p>This guide contains the common setup instructions shared across all Celestia node types (Bridge, Light, Full Storage, etc.).</p><h2 id="environment-setup" tabindex="-1">Environment Setup <a class="header-anchor" href="#environment-setup" aria-label="Permalink to &quot;Environment Setup&quot;">​</a></h2><h3 id="hardware-requirements" tabindex="-1">Hardware Requirements <a class="header-anchor" href="#hardware-requirements" aria-label="Permalink to &quot;Hardware Requirements&quot;">​</a></h3><p>For hardware requirements specific to each node type, please refer to the <a href="/docs-preview/pr-1899/how-to-guides/nodes-overview#recommended-celestia-node-requirements">Node Overview</a>.</p><h3 id="dependencies" tabindex="-1">Dependencies <a class="header-anchor" href="#dependencies" aria-label="Permalink to &quot;Dependencies&quot;">​</a></h3><p>Before setting up any Celestia node, you&#39;ll need to install the following dependencies:</p><ol><li>Follow the <a href="/docs-preview/pr-1899/how-to-guides/environment">environment setup guide</a> to install required system packages</li><li>Install the <a href="/docs-preview/pr-1899/how-to-guides/celestia-node">celestia-node binary</a></li></ol><h2 id="key-management" tabindex="-1">Key Management <a class="header-anchor" href="#key-management" aria-label="Permalink to &quot;Key Management&quot;">​</a></h2><h3 id="generate-node-keys" tabindex="-1">Generate Node Keys <a class="header-anchor" href="#generate-node-keys" aria-label="Permalink to &quot;Generate Node Keys&quot;">​</a></h3><p>You can create your key for your node by following the <a href="/docs-preview/pr-1899/tutorials/celestia-node-key"><code>cel-key</code> instructions</a>.</p><p>Once you start any node type, a wallet key will be generated for you. You will need to fund that address with tokens to pay for transactions.</p><p>To find your node&#39;s address:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">./cel-key</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--node.type</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">typ</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--keyring-backend</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">networ</span><span style="color:#E1E4E8;">k</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">./cel-key</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--node.type</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">typ</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--keyring-backend</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">networ</span><span style="color:#24292E;">k</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You do not need to declare a network for Mainnet Beta. Refer to <a href="/docs-preview/pr-1899/how-to-guides/celestia-node-troubleshooting">the chain ID section on the troubleshooting page for more information</a></p></div><h3 id="using-custom-keys" tabindex="-1">Using Custom Keys <a class="header-anchor" href="#using-custom-keys" aria-label="Permalink to &quot;Using Custom Keys&quot;">​</a></h3><p>To run a node using a custom key:</p><ol><li>The custom key must exist inside the celestia node directory at the correct path (default: <code>~/.celestia-&lt;node-type&gt;/keys/keyring-test</code>)</li><li>Pass the name of the custom key upon <code>start</code>:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">node-typ</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">UR</span><span style="color:#E1E4E8;">I</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--keyring.keyname</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">name-of-custom-ke</span><span style="color:#E1E4E8;">y</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.port</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">por</span><span style="color:#E1E4E8;">t</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">node-typ</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">UR</span><span style="color:#24292E;">I</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--keyring.keyname</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">name-of-custom-ke</span><span style="color:#24292E;">y</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.port</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">por</span><span style="color:#24292E;">t</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h3 id="migrating-node-id" tabindex="-1">Migrating Node ID <a class="header-anchor" href="#migrating-node-id" aria-label="Permalink to &quot;Migrating Node ID&quot;">​</a></h3><p>To migrate a node ID to another server:</p><ol><li>Back up the files located in the celestia node directory at the correct path (default: <code>~/.celestia-&lt;node-type&gt;/keys</code>)</li><li>Upload the files to the new server and start the node</li></ol><h2 id="optional-configurations" tabindex="-1">Optional Configurations <a class="header-anchor" href="#optional-configurations" aria-label="Permalink to &quot;Optional Configurations&quot;">​</a></h2><h3 id="systemd-setup" tabindex="-1">SystemD Setup <a class="header-anchor" href="#systemd-setup" aria-label="Permalink to &quot;SystemD Setup&quot;">​</a></h3><p>For running your node as a background service, follow the <a href="/docs-preview/pr-1899/how-to-guides/systemd">tutorial on setting up the node with SystemD</a>.</p><h3 id="zfs-compression" tabindex="-1">ZFS Compression <a class="header-anchor" href="#zfs-compression" aria-label="Permalink to &quot;ZFS Compression&quot;">​</a></h3><p>To optimize storage, you can follow the <a href="/docs-preview/pr-1899/how-to-guides/zfs">tutorial on how to set up your DA node to use on-fly compression with ZFS</a>.</p><h2 id="network-configuration" tabindex="-1">Network Configuration <a class="header-anchor" href="#network-configuration" aria-label="Permalink to &quot;Network Configuration&quot;">​</a></h2><h3 id="port-configuration" tabindex="-1">Port Configuration <a class="header-anchor" href="#port-configuration" aria-label="Permalink to &quot;Port Configuration&quot;">​</a></h3><p>Make sure the required ports are open and publicly accessible on your node for P2P connectivity:</p><ul><li>Bridge nodes: Port 2121 TCP/UDP</li><li>Light nodes: Port 2121 TCP/UDP</li><li>Full storage nodes: Port 2121 TCP/UDP</li></ul><p>Refer to <a href="/docs-preview/pr-1899/how-to-guides/celestia-node-troubleshooting#ports">the ports section of the celestia-node troubleshooting page</a> for detailed information on required ports.</p><h3 id="network-endpoints" tabindex="-1">Network Endpoints <a class="header-anchor" href="#network-endpoints" aria-label="Permalink to &quot;Network Endpoints&quot;">​</a></h3><p>For connecting to the network, refer to the <a href="/docs-preview/pr-1899/reference/network-endpoints">Network Endpoints</a> guide for available RPC, API, and gRPC endpoints.</p>',34),l=[n];function r(p,i,c,d,y,h){return o(),s("div",null,l)}const m=e(t,[["render",r]]);export{g as __pageData,m as default};
