import{_ as s,o as a,c as e,Q as o}from"./chunks/framework.58da36a1.js";const l="/docs-preview/pr-1834/img/nodes/full-storage-node.png",g=JSON.parse('{"title":"Setting up a Celestia full storage Node","description":"Set up a Celestia full storage node.","frontmatter":{"description":"Set up a Celestia full storage node.","head":[["meta",{"property":"og:title","content":"Setting up a Celestia full storage Node | Celestia Docs"}],["meta",{"property":"og:description","content":"Set up a Celestia full storage node."}]]},"headers":[],"relativePath":"how-to-guides/full-storage-node.md","filePath":"how-to-guides/full-storage-node.md","lastUpdated":1734619886000}'),n={name:"how-to-guides/full-storage-node.md"},t=o('<h1 id="setting-up-a-celestia-full-storage-node" tabindex="-1">Setting up a Celestia full storage Node <a class="header-anchor" href="#setting-up-a-celestia-full-storage-node" aria-label="Permalink to &quot;Setting up a Celestia full storage Node&quot;">​</a></h1><p>This tutorial will guide you through setting up a Celestia full storage node, which is a celestia-node that doesn&#39;t connect to celestia-app (hence not a consensus node), but stores all the data.</p><h2 id="overview-of-full-storage-nodes" tabindex="-1">Overview of full storage nodes <a class="header-anchor" href="#overview-of-full-storage-nodes" aria-label="Permalink to &quot;Overview of full storage nodes&quot;">​</a></h2><p>Full storage nodes are Celestia nodes that store all the data. Full storage nodes send block shares, headers, and fraud proofs to light nodes. The light nodes gossip headers, fraud proofs, and sometimes block shares, between one another.</p><p><img src="'+l+`" alt="Full storage node"></p><h2 id="hardware-requirements" tabindex="-1">Hardware requirements <a class="header-anchor" href="#hardware-requirements" aria-label="Permalink to &quot;Hardware requirements&quot;">​</a></h2><p>The following hardware minimum requirements are recommended for running the full storage node:</p><ul><li>Memory: <strong>16 GB RAM (minimum)</strong></li><li>CPU: <strong>6 cores</strong></li><li>Disk: <strong>2 TB NVME Storage</strong></li><li>Bandwidth: <strong>1 Gbps for Download/1 Gbps for Upload</strong></li></ul><h2 id="setting-up-your-full-storage-node" tabindex="-1">Setting up your full storage node <a class="header-anchor" href="#setting-up-your-full-storage-node" aria-label="Permalink to &quot;Setting up your full storage node&quot;">​</a></h2><p>The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64 instance machine.</p><h3 id="setup-the-dependencies" tabindex="-1">Setup the dependencies <a class="header-anchor" href="#setup-the-dependencies" aria-label="Permalink to &quot;Setup the dependencies&quot;">​</a></h3><p>You can follow <a href="./environment">the tutorial for setting up your dependencies</a></p><h2 id="install-celestia-node" tabindex="-1">Install celestia-node <a class="header-anchor" href="#install-celestia-node" aria-label="Permalink to &quot;Install celestia-node&quot;">​</a></h2><p>You can follow <a href="./celestia-node">the tutorial for installing <code>celestia-node</code></a></p><h3 id="run-the-full-storage-node" tabindex="-1">Run the full storage node <a class="header-anchor" href="#run-the-full-storage-node" aria-label="Permalink to &quot;Run the full storage node&quot;">​</a></h3><h4 id="initialize-the-full-storage-node" tabindex="-1">Initialize the full storage node <a class="header-anchor" href="#initialize-the-full-storage-node" aria-label="Permalink to &quot;Initialize the full storage node&quot;">​</a></h4><p>Run the following command:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-jQv33" id="tab-fuA6o_O" checked="checked"><label for="tab-fuA6o_O">Mainnet Beta</label><input type="radio" name="group-jQv33" id="tab-54_TK70"><label for="tab-54_TK70">Mocha</label><input type="radio" name="group-jQv33" id="tab-4MaCq59"><label for="tab-4MaCq59">Arabica</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">full</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">full</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">full</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mocha</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">full</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mocha</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">full</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">arabica</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">full</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">arabica</span></span></code></pre></div></div></div><h4 id="start-the-full-storage-node" tabindex="-1">Start the full storage node <a class="header-anchor" href="#start-the-full-storage-node" aria-label="Permalink to &quot;Start the full storage node&quot;">​</a></h4><p>Start the full storage node with a connection to a validator node&#39;s gRPC endpoint (which is usually exposed on port 9090):</p><p>In order for access to the ability to get/submit state-related information, such as the ability to submit <code>PayForBlob</code> transactions, or query for the node&#39;s account balance, a gRPC endpoint of a validator (core) node must be passed as directed below.</p><p>Refer to <a href="./../../how-to-guides/celestia-node-troubleshooting/#ports">the ports section of the celestia-node troubleshooting page</a> for information on which ports are required to be open on your machine.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">full</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">UR</span><span style="color:#E1E4E8;">I</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">full</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">UR</span><span style="color:#24292E;">I</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>Using an RPC of your own, or one from <a href="./mainnet#integrations">Mainnet Beta</a>, <a href="./mocha-testnet#integrations">Mocha testnet</a> or <a href="./arabica-devnet#integrations">Arabica devnet</a>, start your node.</p><p>Connecting to a core endpoint with <code>--core.ip string</code> provides the light node with access to state queries (reading balances, submitting transactions, and other state-related queries).</p><p>You can create your key for your node by following <a href="./../../tutorials/celestia-node-key">the <code>cel-key</code> instructions</a></p><p>Once you start the full storage node, a wallet key will be generated for you. You will need to fund that address with testnet tokens to pay for <code>PayForBlob</code> transactions. You can find the address by running the following command:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">./cel-key</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--node.type</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">full</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--keyring-backend</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">networ</span><span style="color:#E1E4E8;">k</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">./cel-key</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--node.type</span><span style="color:#24292E;"> </span><span style="color:#032F62;">full</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--keyring-backend</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">networ</span><span style="color:#24292E;">k</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You do not need to declare a network for Mainnet Beta. Refer to <a href="./celestia-node-troubleshooting">the chain ID section on the troubleshooting page for more information</a></p></div><p>You can get testnet tokens from:</p><ul><li><a href="./mocha-testnet">Mocha</a></li><li><a href="./arabica-devnet">Arabica</a></li></ul><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>If you are running a full-storage node for your sovereign rollup, it is highly recommended to request Arabica devnet tokens as Arabica has the latest changes that can be used to test for developing your sovereign rollup. You can still use Mocha testnet as well, it is just mostly used for validator operations.</p></div><h3 id="optional-run-the-full-storage-node-with-a-custom-key" tabindex="-1">Optional: run the full storage node with a custom key <a class="header-anchor" href="#optional-run-the-full-storage-node-with-a-custom-key" aria-label="Permalink to &quot;Optional: run the full storage node with a custom key&quot;">​</a></h3><p>In order to run a full storage node using a custom key:</p><ol><li>The custom key must exist inside the celestia full storage node directory at the correct path (default: <code>~/.celestia-full/keys/keyring-test</code>)</li><li>The name of the custom key must be passed upon <code>start</code>, like so:</li></ol><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-MfKLM" id="tab-3YcKZZb" checked="checked"><label for="tab-3YcKZZb">Mainnet Beta</label><input type="radio" name="group-MfKLM" id="tab-VRioZ2-"><label for="tab-VRioZ2-">Mocha</label><input type="radio" name="group-MfKLM" id="tab-pXmKPta"><label for="tab-pXmKPta">Arabica</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">full</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">UR</span><span style="color:#E1E4E8;">I</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--keyring.keyname</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">name-of-custom-ke</span><span style="color:#E1E4E8;">y</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">full</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">UR</span><span style="color:#24292E;">I</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--keyring.keyname</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">name-of-custom-ke</span><span style="color:#24292E;">y</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">full</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">UR</span><span style="color:#E1E4E8;">I</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--keyring.keyname</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">name-of-custom-ke</span><span style="color:#E1E4E8;">y</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mocha</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">full</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">UR</span><span style="color:#24292E;">I</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--keyring.keyname</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">name-of-custom-ke</span><span style="color:#24292E;">y</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mocha</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">full</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">UR</span><span style="color:#E1E4E8;">I</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--keyring.keyname</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">name-of-custom-ke</span><span style="color:#E1E4E8;">y</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">arabica</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">full</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">UR</span><span style="color:#24292E;">I</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--keyring.keyname</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">name-of-custom-ke</span><span style="color:#24292E;">y</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">arabica</span></span></code></pre></div></div></div><h4 id="optional-migrate-node-id-to-another-server" tabindex="-1">Optional: Migrate node id to another server <a class="header-anchor" href="#optional-migrate-node-id-to-another-server" aria-label="Permalink to &quot;Optional: Migrate node id to another server&quot;">​</a></h4><p>To migrate a full storage node ID:</p><ol><li>You need to back up two files located in the celestia-full node directory at the correct path (default: <code>~/.celestia-full/keys</code>).</li><li>Upload the files to the new server and start the node.</li></ol><h3 id="optional-start-the-full-storage-node-with-systemd" tabindex="-1">Optional: start the full storage node with SystemD <a class="header-anchor" href="#optional-start-the-full-storage-node-with-systemd" aria-label="Permalink to &quot;Optional: start the full storage node with SystemD&quot;">​</a></h3><p>If you would like to run the full storage node as a background process, follow the <a href="./systemd">SystemD tutorial</a>.</p><p>With that, you are now running a Celestia full storage node.</p><h3 id="stop-the-full-storage-node" tabindex="-1">Stop the full storage node <a class="header-anchor" href="#stop-the-full-storage-node" aria-label="Permalink to &quot;Stop the full storage node&quot;">​</a></h3><p>In order to gracefully stop the full storage node, use <code>Control + C</code> in the terminal window where the node is running. Be sure to only do this once as the shutdown will not be instantaneous.</p>`,44),p=[t];function r(c,i,d,y,u,h){return a(),e("div",null,p)}const f=s(n,[["render",r]]);export{g as __pageData,f as default};
