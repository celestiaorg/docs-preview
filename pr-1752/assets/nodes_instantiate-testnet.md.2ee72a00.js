import{_ as e,o as s,c as a,Q as n}from"./chunks/framework.9ce46251.js";const E=JSON.parse('{"title":"Celestia App network instantiation guide","description":"A guide that helps you instantiate a new testnetwork with Celestia App.","frontmatter":{"description":"A guide that helps you instantiate a new testnetwork with Celestia App.","head":[["meta",{"name":"og:title","content":"Celestia App network instantiation guide | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/instantiate-testnet.md","filePath":"nodes/instantiate-testnet.md","lastUpdated":1728311368000}'),o={name:"nodes/instantiate-testnet.md"},t=n(`<h1 id="celestia-app-network-instantiation-guide" tabindex="-1">Celestia App network instantiation guide <a class="header-anchor" href="#celestia-app-network-instantiation-guide" aria-label="Permalink to &quot;Celestia App network instantiation guide&quot;">​</a></h1><p>This guide is for helping instantiate a new testnetwork and following the correct steps to do so with Celestia App. You should only follow this guide if you want to experiment with your own Celestia test network (testnet) or if you want to test out new features to build as a core developer.</p><h2 id="hardware-requirements" tabindex="-1">Hardware requirements <a class="header-anchor" href="#hardware-requirements" aria-label="Permalink to &quot;Hardware requirements&quot;">​</a></h2><p>You will need to <a href="./validator-node#hardware-requirements">follow hardware requirements</a>.</p><h2 id="setup-dependencies" tabindex="-1">Setup dependencies <a class="header-anchor" href="#setup-dependencies" aria-label="Permalink to &quot;Setup dependencies&quot;">​</a></h2><p>You will need to <a href="./environment">setup dependencies by following the guide</a>.</p><h2 id="celestia-app-installation" tabindex="-1">celestia-app installation <a class="header-anchor" href="#celestia-app-installation" aria-label="Permalink to &quot;celestia-app installation&quot;">​</a></h2><p>You will need to <a href="./celestia-app">install <code>celestia-app</code> by following the guide</a>.</p><h2 id="spin-up-a-celestia-testnet" tabindex="-1">Spin up a Celestia testnet <a class="header-anchor" href="#spin-up-a-celestia-testnet" aria-label="Permalink to &quot;Spin up a Celestia testnet&quot;">​</a></h2><p>If you want to spin up a quick testnet with your friends, you can follow these steps. Unless otherwise noted, every step must be done by everyone who wants to participate in this testnet.</p><h3 id="optional-reset-working-directory" tabindex="-1">Optional: Reset working directory <a class="header-anchor" href="#optional-reset-working-directory" aria-label="Permalink to &quot;Optional: Reset working directory&quot;">​</a></h3><p>If you have already initialized a working directory for <code>celestia-appd</code> in the past, you must clean up before reinitializing a new directory. You can do so by running the following command:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tendermint</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unsafe-reset-all</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--home</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.celestia-app</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tendermint</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unsafe-reset-all</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--home</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.celestia-app</span></span></code></pre></div><h3 id="initialize-a-working-directory" tabindex="-1">Initialize a working directory <a class="header-anchor" href="#initialize-a-working-directory" aria-label="Permalink to &quot;Initialize a working directory&quot;">​</a></h3><p>Run the following command:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">VALIDATOR_NAME</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">validator1</span></span>
<span class="line"><span style="color:#E1E4E8;">CHAIN_ID</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">testnet</span></span>
<span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> $VALIDATOR_NAME </span><span style="color:#79B8FF;">--chain-id</span><span style="color:#E1E4E8;"> $CHAIN_ID</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">VALIDATOR_NAME</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">validator1</span></span>
<span class="line"><span style="color:#24292E;">CHAIN_ID</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">testnet</span></span>
<span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> $VALIDATOR_NAME </span><span style="color:#005CC5;">--chain-id</span><span style="color:#24292E;"> $CHAIN_ID</span></span></code></pre></div><ul><li>The value we will use for <code>$VALIDATOR_NAME</code> is <code>validator1</code> but you should choose your own node name.</li><li>The value we will use for <code>$CHAIN_ID</code> is <code>testnet</code>. The <code>$CHAIN_ID</code> must remain the same for everyone participating in this network.</li></ul><h3 id="create-a-new-key" tabindex="-1">Create a new key <a class="header-anchor" href="#create-a-new-key" aria-label="Permalink to &quot;Create a new key&quot;">​</a></h3><p>Next, run the following command:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">KEY_NAME</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">validator</span></span>
<span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">keys</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> $KEY_NAME </span><span style="color:#79B8FF;">--keyring-backend</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">KEY_NAME</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">validator</span></span>
<span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">keys</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> $KEY_NAME </span><span style="color:#005CC5;">--keyring-backend</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span></span></code></pre></div><p>This will create a new key, with a name of your choosing. Save the output of this command somewhere; you&#39;ll need the address generated here later. Here, we set the value of our key <code>$KEY_NAME</code> to <code>validator</code> for demonstration.</p><h3 id="add-genesis-account-keyname" tabindex="-1">Add genesis account KeyName <a class="header-anchor" href="#add-genesis-account-keyname" aria-label="Permalink to &quot;Add genesis account KeyName&quot;">​</a></h3><p>Run the following command:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">TIA_AMOUNT</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;10000000utia&quot;</span></span>
<span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add-genesis-account</span><span style="color:#E1E4E8;"> $KEY_NAME $TIA_AMOUNT </span><span style="color:#79B8FF;">--keyring-backend</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">TIA_AMOUNT</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;10000000utia&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add-genesis-account</span><span style="color:#24292E;"> $KEY_NAME $TIA_AMOUNT </span><span style="color:#005CC5;">--keyring-backend</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span></span></code></pre></div><p>Here <code>$KEY_NAME</code> is the same key name as before.</p><h3 id="optional-adding-other-validators" tabindex="-1">Optional: Adding other validators <a class="header-anchor" href="#optional-adding-other-validators" aria-label="Permalink to &quot;Optional: Adding other validators&quot;">​</a></h3><p>If other participants in your testnet also want to be validators, repeat the command above with the specific amount for their public keys.</p><p>Once all the validators are added, the <code>genesis.json</code> file is created. You need to share it with all other validators in your testnet in order for everyone to proceed with the following step.</p><p>You can find the <code>genesis.json</code> at <code>$HOME/.celestia-app/config/genesis.json</code></p><h3 id="create-the-genesis-transaction-for-new-chain" tabindex="-1">Create the genesis transaction for new chain <a class="header-anchor" href="#create-the-genesis-transaction-for-new-chain" aria-label="Permalink to &quot;Create the genesis transaction for new chain&quot;">​</a></h3><p>Run the following command:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">STAKING_AMOUNT</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">9000000</span><span style="color:#9ECBFF;">utia</span></span>
<span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gentx</span><span style="color:#E1E4E8;"> $KEY_NAME $STAKING_AMOUNT </span><span style="color:#79B8FF;">--chain-id</span><span style="color:#E1E4E8;"> $CHAIN_ID </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--keyring-backend</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">STAKING_AMOUNT</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">9000000</span><span style="color:#032F62;">utia</span></span>
<span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gentx</span><span style="color:#24292E;"> $KEY_NAME $STAKING_AMOUNT </span><span style="color:#005CC5;">--chain-id</span><span style="color:#24292E;"> $CHAIN_ID </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--keyring-backend</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span></span></code></pre></div><p>This will create the genesis transaction for your new chain. Here <code>$STAKING_AMOUNT</code> should be at least <code>9000000utia</code>. If you provide too much or too little, you will encounter an error when starting your node.</p><p>You will find the generated gentx JSON file inside <code>$HOME/.celestia-app/config/gentx/gentx-$KEY_NAME.json</code></p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>If you have other validators in your network, they need to also run the above command with the <code>genesis.json</code> file you shared with them in the previous step.</p></div><h3 id="creating-the-genesis-json-file" tabindex="-1">Creating the genesis JSON file <a class="header-anchor" href="#creating-the-genesis-json-file" aria-label="Permalink to &quot;Creating the genesis JSON file&quot;">​</a></h3><p>Once all participants have submitted their gentx JSON files to you, you will pull all those gentx files inside the following directory: <code>$HOME/.celestia-appd/config/gentx</code> and use them to create the final <code>genesis.json</code> file.</p><p>Once you added the gentx files of all the participants, run the following command:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">collect-gentxs</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">collect-gentxs</span></span></code></pre></div><p>This command will look for the gentx files in this repo which should be moved to the following directory <code>$HOME/.celestia-app/config/gentx</code>.</p><p>It will update the <code>genesis.json</code> file after in this location <code>$HOME/.celestia-app/config/genesis.json</code> which now includes the gentx of other participants.</p><p>You should then share this final <code>genesis.json</code> file with all the other participants who must add it to their <code>$HOME/.celestia-app/config</code> directory.</p><p>Everyone must ensure that they replace their existing <code>genesis.json</code> file with this new one created.</p><h3 id="modify-your-config-file" tabindex="-1">Modify your config file <a class="header-anchor" href="#modify-your-config-file" aria-label="Permalink to &quot;Modify your config file&quot;">​</a></h3><p>Open the following file <code>$HOME/.celestia-app/config/config.toml</code> to modify it.</p><p>Inside the file, add the other participants by modifying the following line to include other participants as persistent peers:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># Comma separated list of nodes to keep persistent connections to</span></span>
<span class="line"><span style="color:#e1e4e8;">persistent_peers = &quot;[validator_address]@[ip_address]:[port],[validator_address]@[ip_address]:[port]&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># Comma separated list of nodes to keep persistent connections to</span></span>
<span class="line"><span style="color:#24292e;">persistent_peers = &quot;[validator_address]@[ip_address]:[port],[validator_address]@[ip_address]:[port]&quot;</span></span></code></pre></div><h3 id="add-your-node-as-a-persistent-peer" tabindex="-1">Add your node as a persistent peer <a class="header-anchor" href="#add-your-node-as-a-persistent-peer" aria-label="Permalink to &quot;Add your node as a persistent peer&quot;">​</a></h3><p>The following allows you to share your node as a persistent peer that you can share in the networks repo or with others so other participants can peer with you.</p><p>Run the following command:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">IP_ADDRESS</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">$(</span><span style="color:#B392F0;">curl</span><span style="color:#9ECBFF;"> ifconfig.me)</span></span>
<span class="line"><span style="color:#E1E4E8;">NODE_ID</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">$(</span><span style="color:#B392F0;">celestia-appd</span><span style="color:#9ECBFF;"> tendermint show-node-id)</span></span>
<span class="line"><span style="color:#E1E4E8;">PORT_NUMBER</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">26656</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">IP_ADDRESS</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">$(</span><span style="color:#6F42C1;">curl</span><span style="color:#032F62;"> ifconfig.me)</span></span>
<span class="line"><span style="color:#24292E;">NODE_ID</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">$(</span><span style="color:#6F42C1;">celestia-appd</span><span style="color:#032F62;"> tendermint show-node-id)</span></span>
<span class="line"><span style="color:#24292E;">PORT_NUMBER</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">26656</span></span></code></pre></div><p>Note that the default port is <code>26656</code></p><p>Now you can run the following command to output your validator node address:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">PEER</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$NODE_ID</span><span style="color:#9ECBFF;">@</span><span style="color:#E1E4E8;">$IP_ADDRESS</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;">$PORT_NUMBER</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> $PEER</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">PEER</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$NODE_ID</span><span style="color:#032F62;">@</span><span style="color:#24292E;">$IP_ADDRESS</span><span style="color:#032F62;">:</span><span style="color:#24292E;">$PORT_NUMBER</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> $PEER</span></span></code></pre></div><p>The output is your validator node address which you can share with other validators so they can peer with you.</p><h3 id="instantiate-the-network" tabindex="-1">Instantiate the network <a class="header-anchor" href="#instantiate-the-network" aria-label="Permalink to &quot;Instantiate the network&quot;">​</a></h3><p>You can start your node by running the following command:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Refer to <a href="./../nodes/celestia-node-troubleshooting#ports">the ports section of the celestia-node troubleshooting page</a> for information on which ports are required to be open on your machine.</p></div><p>Now you have a new Celestia testnet to play around with!</p>`,60),l=[t];function p(i,r,c,d,h,y){return s(),a("div",null,l)}const g=e(o,[["render",p]]);export{E as __pageData,g as default};
