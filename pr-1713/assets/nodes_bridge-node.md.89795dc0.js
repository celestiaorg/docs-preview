import{_ as s,o as e,c as a,Q as o}from"./chunks/framework.cfe65604.js";const n="/docs-preview/pr-1713/img/nodes/BridgeNodes.png",u=JSON.parse('{"title":"Setting up a Celestia bridge node","description":"","frontmatter":{"\\\\description":"Learn how to set up your Celestia bridge node.","head":[["meta",{"name":"og:title","content":"Setting up a Celestia bridge node | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/bridge-node.md","filePath":"nodes/bridge-node.md","lastUpdated":1726560450000}'),l={name:"nodes/bridge-node.md"},t=o('<h1 id="setting-up-a-celestia-bridge-node" tabindex="-1">Setting up a Celestia bridge node <a class="header-anchor" href="#setting-up-a-celestia-bridge-node" aria-label="Permalink to &quot;Setting up a Celestia bridge node&quot;">​</a></h1><p>This tutorial will go over the steps to setting up your Celestia bridge node.</p><p>Bridge nodes connect the data availability layer and the consensus layer.</p><h2 id="overview-of-bridge-nodes" tabindex="-1">Overview of bridge nodes <a class="header-anchor" href="#overview-of-bridge-nodes" aria-label="Permalink to &quot;Overview of bridge nodes&quot;">​</a></h2><p>A Celestia bridge node has the following properties:</p><ol><li>Import and process “raw” headers &amp; blocks from a trusted core process (meaning a trusted RPC connection to a celestia-core node) in the Consensus network. Bridge nodes can run this core process internally (embedded) or simply connect to a remote endpoint. Bridge nodes also have the option of being an active validator in the consensus network.</li><li>Validate and erasure code the “raw” blocks</li><li>Supply block shares with data availability headers to light nodes in the DA network.</li></ol><p><img src="'+n+`" alt="bridge-node-diagram"></p><p>From an implementation perspective, Bridge nodes run two separate processes:</p><ol><li><p>celestia-app with celestia-core (<a href="https://github.com/celestiaorg/celestia-app" target="_blank" rel="noreferrer">see repo</a>)</p><ul><li><strong>celestia-app</strong> is the state machine where the application and the proof-of-stake logic is run. celestia-app is built on <a href="https://docs.cosmos.network" target="_blank" rel="noreferrer">Cosmos SDK</a> and also encompasses <strong>celestia-core</strong>.</li><li><strong>celestia-core</strong> is the state interaction, consensus and block production layer. celestia-core is built on <a href="https://docs.tendermint.com" target="_blank" rel="noreferrer">Tendermint Core</a>, modified to store data roots of erasure coded blocks among other changes (<a href="https://github.com/celestiaorg/celestia-core/tree/master/docs/celestia-architecture" target="_blank" rel="noreferrer">see ADRs</a>).</li></ul></li><li><p>celestia-node (<a href="https://github.com/celestiaorg/celestia-node" target="_blank" rel="noreferrer">see repo</a>)</p><ul><li><strong>celestia-node</strong> augments the above with a separate libp2p network that serves data availability sampling requests. The team sometimes refers to this as the “halo” network.</li></ul></li></ol><h2 id="hardware-requirements" tabindex="-1">Hardware requirements <a class="header-anchor" href="#hardware-requirements" aria-label="Permalink to &quot;Hardware requirements&quot;">​</a></h2><p>The following hardware minimum requirements are recommended for running the bridge node:</p><ul><li>Memory: <strong>16 GB RAM (minimum)</strong></li><li>CPU: <strong>6 cores</strong></li><li>Disk: <strong>10 TB SSD Storage</strong></li><li>Bandwidth: <strong>1 Gbps for Download/1 Gbps for Upload</strong></li></ul><h2 id="setting-up-your-bridge-node" tabindex="-1">Setting up your bridge node <a class="header-anchor" href="#setting-up-your-bridge-node" aria-label="Permalink to &quot;Setting up your bridge node&quot;">​</a></h2><p>The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64 instance machine.</p><h3 id="setup-the-dependencies" tabindex="-1">Setup the dependencies <a class="header-anchor" href="#setup-the-dependencies" aria-label="Permalink to &quot;Setup the dependencies&quot;">​</a></h3><p>Follow the tutorial for <a href="./environment">installing the dependencies</a>.</p><h2 id="deploy-the-celestia-bridge-node" tabindex="-1">Deploy the Celestia bridge node <a class="header-anchor" href="#deploy-the-celestia-bridge-node" aria-label="Permalink to &quot;Deploy the Celestia bridge node&quot;">​</a></h2><h3 id="install-celestia-node" tabindex="-1">Install Celestia Node <a class="header-anchor" href="#install-celestia-node" aria-label="Permalink to &quot;Install Celestia Node&quot;">​</a></h3><p>Install the <code>celestia-node</code> binary, which will be used to run the bridge node.</p><p>Follow the tutorial for <a href="./celestia-node">installing <code>celestia-node</code></a>.</p><h3 id="initialize-the-bridge-node" tabindex="-1">Initialize the bridge node <a class="header-anchor" href="#initialize-the-bridge-node" aria-label="Permalink to &quot;Initialize the bridge node&quot;">​</a></h3><p>Run the following:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">UR</span><span style="color:#E1E4E8;">I</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bridge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">UR</span><span style="color:#24292E;">I</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>The <code>--core.ip</code> gRPC port defaults to 9090, so if you do not specify it in the command line, it will default to that port. You can add the port after the IP address or use the <code>--core.grpc.port</code> flag to specify another port if you prefer.</p><p>Refer to <a href="./../nodes/celestia-node-troubleshooting#ports">the ports section of the celestia-node troubleshooting page</a> for information on which ports are required to be open on your machine.</p><p>Using an RPC of your own, or one from the <a href="./mocha-testnet#community-rpc-endpoints">list on the Mocha testnet page</a> or <a href="./arabica-devnet#community-rpc-endpoints">list on the Arabica devnet page</a>, start your node.</p><p>Connecting to a core endpoint with <code>--core.ip string</code> provides the light node with access to state queries (reading balances, submitting transactions, and other state-related queries).</p><p>Here is an example of initializing the bridge node:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-XfrnZ" id="tab-QYdFfZS" checked="checked"><label for="tab-QYdFfZS">Mainnet Beta</label><input type="radio" name="group-XfrnZ" id="tab-qrWqL32"><label for="tab-qrWqL32">Mocha</label><input type="radio" name="group-XfrnZ" id="tab-MQS4CV9"><label for="tab-MQS4CV9">Arabica</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">UR</span><span style="color:#E1E4E8;">I</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bridge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">UR</span><span style="color:#24292E;">I</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">UR</span><span style="color:#E1E4E8;">I</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mocha</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bridge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">UR</span><span style="color:#24292E;">I</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mocha</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">UR</span><span style="color:#E1E4E8;">I</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">arabica</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bridge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">UR</span><span style="color:#24292E;">I</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">arabica</span></span></code></pre></div></div></div><h3 id="run-the-bridge-node" tabindex="-1">Run the bridge node <a class="header-anchor" href="#run-the-bridge-node" aria-label="Permalink to &quot;Run the bridge node&quot;">​</a></h3><p>Start the bridge node with a connection to a validator node&#39;s gRPC endpoint (which is usually exposed on port 9090):</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">UR</span><span style="color:#E1E4E8;">I</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bridge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">UR</span><span style="color:#24292E;">I</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>Here is an example of starting the bridge node on Mocha:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rpc-mocha.pops.one:26657</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mocha</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bridge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rpc-mocha.pops.one:26657</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mocha</span></span></code></pre></div><p>And on Arabica:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">validator-1.celestia-arabica-11.com</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">arabica</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bridge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">validator-1.celestia-arabica-11.com</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">arabica</span></span></code></pre></div><p>You can create your key for your node by <a href="./../../developers/celestia-node-key">following the <code>cel-key</code> instructions</a>.</p><p>Once you start the bridge node, a wallet key will be generated for you. You will need to fund that address with Testnet tokens to pay for <code>PayForBlob</code> transactions. You can find the address by running the following command:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">./cel-key</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--node.type</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--keyring-backend</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">networ</span><span style="color:#E1E4E8;">k</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">./cel-key</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--node.type</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bridge</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--keyring-backend</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">networ</span><span style="color:#24292E;">k</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You do not need to declare a network for Mainnet Beta. Refer to <a href="./celestia-node-troubleshooting">the chain ID section on the troubleshooting page for more information</a></p></div><p>You can get testnet tokens from:</p><ul><li><a href="./mocha-testnet">Mocha</a></li><li><a href="./arabica-devnet">Arabica</a></li></ul><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>If you are running a bridge node for your validator it is highly recommended to request Mocha testnet tokens as this is the testnet used to test out validator operations.</p></div><h4 id="optional-run-the-bridge-node-with-a-custom-key" tabindex="-1">Optional: run the bridge node with a custom key <a class="header-anchor" href="#optional-run-the-bridge-node-with-a-custom-key" aria-label="Permalink to &quot;Optional: run the bridge node with a custom key&quot;">​</a></h4><p>In order to run a bridge node using a custom key:</p><ol><li>The custom key must exist inside the celestia bridge node directory at the correct path (default: <code>~/.celestia-bridge/keys/keyring-test</code>)</li><li>The name of the custom key must be passed upon <code>start</code>, like so:</li></ol><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-QpqAo" id="tab-Ygeow1l" checked="checked"><label for="tab-Ygeow1l">Mainnet Beta</label><input type="radio" name="group-QpqAo" id="tab-4d_cnPj"><label for="tab-4d_cnPj">Mocha</label><input type="radio" name="group-QpqAo" id="tab-7d2HbFG"><label for="tab-7d2HbFG">Arabica</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">UR</span><span style="color:#E1E4E8;">I</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--keyring.keyname</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">name-of-custom-ke</span><span style="color:#E1E4E8;">y</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bridge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">UR</span><span style="color:#24292E;">I</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--keyring.keyname</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">name-of-custom-ke</span><span style="color:#24292E;">y</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">UR</span><span style="color:#E1E4E8;">I</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--keyring.keyname</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">name-of-custom-ke</span><span style="color:#E1E4E8;">y</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mocha</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bridge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">UR</span><span style="color:#24292E;">I</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--keyring.keyname</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">name-of-custom-ke</span><span style="color:#24292E;">y</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mocha</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">UR</span><span style="color:#E1E4E8;">I</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--keyring.keyname</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">name-of-custom-ke</span><span style="color:#E1E4E8;">y</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">arabica</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bridge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">UR</span><span style="color:#24292E;">I</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--keyring.keyname</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">name-of-custom-ke</span><span style="color:#24292E;">y</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">arabica</span></span></code></pre></div></div></div><h4 id="optional-migrate-node-id-to-another-server" tabindex="-1">Optional: Migrate node id to another server <a class="header-anchor" href="#optional-migrate-node-id-to-another-server" aria-label="Permalink to &quot;Optional: Migrate node id to another server&quot;">​</a></h4><p>To migrate a bridge node ID:</p><ol><li>You need to back up two files located in the celestia-bridge node directory at the correct path (default: <code>~/.celestia-bridge/keys</code>).</li><li>Upload the files to the new server and start the node.</li></ol><h3 id="optional-start-the-bridge-node-with-systemd" tabindex="-1">Optional: start the bridge node with SystemD <a class="header-anchor" href="#optional-start-the-bridge-node-with-systemd" aria-label="Permalink to &quot;Optional: start the bridge node with SystemD&quot;">​</a></h3><p>Follow the <a href="./systemd">tutorial on setting up the bridge node as a background process with SystemD</a>.</p><p>You have successfully set up a bridge node that is syncing with the network.</p>`,53),p=[t];function r(c,i,d,y,E,h){return e(),a("div",null,p)}const b=s(l,[["render",r]]);export{u as __pageData,b as default};