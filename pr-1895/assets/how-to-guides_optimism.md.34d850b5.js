import{c as s}from"./chunks/constants.b02263eb.js";import{o as t,c as l,k as a,t as e,l as n,Q as o}from"./chunks/framework.82b096e9.js";const p=o('<h1 id="run-an-op-stack-rollup-with-celestia-underneath" tabindex="-1">Run an OP Stack rollup with Celestia underneath <a class="header-anchor" href="#run-an-op-stack-rollup-with-celestia-underneath" aria-label="Permalink to &quot;Run an OP Stack rollup with Celestia underneath&quot;">​</a></h1><p>This guide will show you how to run your own OP Stack devnet and testnet that posts data to Celestia&#39;s Mocha testnet using <a href="https://github.com/celestiaorg/roll-op" target="_blank" rel="noreferrer">roll-op</a> and <a href="https://github.com/celestiaorg/op-plasma-celestia" target="_blank" rel="noreferrer">op-plasma-celestia</a>.</p><p>The roll-op tool is used to deploy and manage the OP Stack rollup environment, including the rollup, batcher, and other components. While the op-plasma-celestia integration allows the OP Stack to use Celestia as the data availability (DA) layer.</p><p>This guide is in two parts:</p><ul><li>First, you&#39;ll spin up a mock L1 environment and deploy a devnet that posts data to the Mocha testnet.</li><li>In the second part, you&#39;ll deploy a testnet that posts data to the Mocha testnet, but this time on a real L1 environment; the Ethereum Sepolia testnet. This will involve setting up a configuration file with the necessary details like Sepolia chain ID, RPC URL, and your deployment keys.</li></ul><p>After successful deployments, you&#39;ll be able to observe data blobs being successfully submitted to the Mocha testnet in the logs, as well as some activity on your rollup account on <a href="https://celenium.io" target="_blank" rel="noreferrer">Celenium</a>.</p><p>If you don&#39;t have devops experience and would like to use a Rollups as a Service (RaaS) provider, see the RaaS category in the menu.</p><p>This guide is also available on <a href="https://www.youtube.com/watch?v=lOLw4uLX644" target="_blank" rel="noreferrer">YouTube</a> if you&#39;d like to follow along with a video.</p><h2 id="dependency-setup" tabindex="-1">Dependency setup <a class="header-anchor" href="#dependency-setup" aria-label="Permalink to &quot;Dependency setup&quot;">​</a></h2><ul><li><a href="/docs-preview/pr-1895/how-to-guides/celestia-node">celestia-node</a></li></ul><h3 id="setting-up-your-light-node" tabindex="-1">Setting up your light node <a class="header-anchor" href="#setting-up-your-light-node" aria-label="Permalink to &quot;Setting up your light node&quot;">​</a></h3><p>Sync and fund a Celestia light node. The light node must be <strong>fully synced</strong> and <strong>funded</strong> for you to be able to submit and retrieve <code>PayForBlobs</code> to Mocha Testnet. This allows your rollup to post and retrieve data without any errors.</p><p>In order to mount existing data, you must have a node store that is in the default directory:</p>',13),c={class:"vp-code-group vp-adaptive-theme"},i=o('<div class="tabs"><input type="radio" name="group-cOax7" id="tab-TG0iopq" checked="checked"><label for="tab-TG0iopq">Mocha</label><input type="radio" name="group-cOax7" id="tab-GLwxwsz"><label for="tab-GLwxwsz">Mainnet Beta</label><input type="radio" name="group-cOax7" id="tab-p8WFO9-"><label for="tab-p8WFO9-">Arabica</label></div>',1),r={class:"blocks"},d={class:"language-bash vp-adaptive-theme active"},u=a("button",{title:"Copy Code",class:"copy"},null,-1),h=a("span",{class:"lang"},"bash",-1),y={class:"shiki github-dark vp-code-dark"},_={class:"line"},E={style:{color:"#E1E4E8"}},g={class:"shiki github-light vp-code-light"},m={class:"line"},b={style:{color:"#24292E"}},v=o('<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$HOME/.celestia-light</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$HOME/.celestia-light</span></span></code></pre></div>',1),k={class:"language-bash vp-adaptive-theme"},C=a("button",{title:"Copy Code",class:"copy"},null,-1),f=a("span",{class:"lang"},"bash",-1),F={class:"shiki github-dark vp-code-dark"},q={class:"line"},w={style:{color:"#E1E4E8"}},S={class:"shiki github-light vp-code-light"},T={class:"line"},A={style:{color:"#24292E"}},D=o(`<p>By default, the node will run with the account named <code>my_celes_key</code> on Mocha. This is the account that needs to be funded.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Unless you changed your configuration, you won&#39;t have to change anything. 😎</p></div><h2 id="deploying-a-devnet-to-mocha" tabindex="-1">Deploying a devnet to Mocha <a class="header-anchor" href="#deploying-a-devnet-to-mocha" aria-label="Permalink to &quot;Deploying a devnet to Mocha&quot;">​</a></h2><p>See <a href="https://github.com/celestiaorg/op-plasma-celestia/blob/main/README.md" target="_blank" rel="noreferrer">the Alt-DA x Celestia README</a> for instructions on <a href="https://github.com/celestiaorg/op-plasma-celestia/blob/main/README.md#devnet" target="_blank" rel="noreferrer">how to deploy a Devnet</a>.</p><div class="tip custom-block"><p class="custom-block-title">TIP for macOS users</p><p>If you are on macOS, you will need to run a <code>venv</code> before starting <code>roll-op</code>.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/roll-op</span></span>
<span class="line"><span style="color:#B392F0;">python3</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">venv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./venv</span></span>
<span class="line"><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./venv/bin/activate</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/roll-op</span></span>
<span class="line"><span style="color:#6F42C1;">python3</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">venv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./venv</span></span>
<span class="line"><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./venv/bin/activate</span></span></code></pre></div></div><p>Congrats! Your devnet is running on a mock EVM chain and Celestia Mocha.</p><h2 id="deploying-a-testnet-to-an-l1-or-l2-and-mocha" tabindex="-1">Deploying a testnet to an L1 (or L2) and Mocha <a class="header-anchor" href="#deploying-a-testnet-to-an-l1-or-l2-and-mocha" aria-label="Permalink to &quot;Deploying a testnet to an L1 (or L2) and Mocha&quot;">​</a></h2><p>See <a href="https://github.com/celestiaorg/op-plasma-celestia/blob/main/README.md" target="_blank" rel="noreferrer">the Alt-DA x Celestia README</a> for instructions on <a href="https://github.com/celestiaorg/op-plasma-celestia/blob/main/README.md#testnet" target="_blank" rel="noreferrer">how to deploy a Testnet</a>.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you are using a public RPC for your EVM chain, you should enable <code>deploy_slowly = true</code> in your <code>config.toml</code>. If you still have issues, we recommend running the integration with a high-availability, paid endpoint.</p></div><p>When you are deploying to a live EVM network, pay attention and modify the configuration to post to non-Sepolia EVM chains.</p><p>Here is an example:</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Chain ID of your rollup</span></span>
<span class="line"><span style="color:#E1E4E8;">l2_chain_id = </span><span style="color:#79B8FF;">1117733</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Sepolia Ethereum</span></span>
<span class="line"><span style="color:#E1E4E8;">l1_chain_id = </span><span style="color:#79B8FF;">11155111</span></span>
<span class="line"><span style="color:#E1E4E8;">l1_rpc_url = </span><span style="color:#9ECBFF;">&quot;https://ethereum-sepolia-rpc.publicnode.com&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">## Avoid issues with public RPC</span></span>
<span class="line"><span style="color:#E1E4E8;">deploy_slowly = </span><span style="color:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">## Keys</span></span>
<span class="line"><span style="color:#E1E4E8;">contract_deployer_account = </span><span style="color:#9ECBFF;">&quot;0xaddress&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">contract_deployer_key = </span><span style="color:#9ECBFF;">&quot;privatekey&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">batcher_account = </span><span style="color:#9ECBFF;">&quot;0xaddress&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">batcher_key = </span><span style="color:#9ECBFF;">&quot;privatekey&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">proposer_account = </span><span style="color:#9ECBFF;">&quot;0xaddress&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">proposer_key = </span><span style="color:#9ECBFF;">&quot;privatekey&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">admin_account = </span><span style="color:#9ECBFF;">&quot;0xaddress&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">admin_key = </span><span style="color:#9ECBFF;">&quot;privatekey&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">p2p_sequencer_account = </span><span style="color:#9ECBFF;">&quot;0xaddress&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">p2p_sequencer_key = </span><span style="color:#9ECBFF;">&quot;privatekey&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Chain ID of your rollup</span></span>
<span class="line"><span style="color:#24292E;">l2_chain_id = </span><span style="color:#005CC5;">1117733</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Sepolia Ethereum</span></span>
<span class="line"><span style="color:#24292E;">l1_chain_id = </span><span style="color:#005CC5;">11155111</span></span>
<span class="line"><span style="color:#24292E;">l1_rpc_url = </span><span style="color:#032F62;">&quot;https://ethereum-sepolia-rpc.publicnode.com&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">## Avoid issues with public RPC</span></span>
<span class="line"><span style="color:#24292E;">deploy_slowly = </span><span style="color:#005CC5;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">## Keys</span></span>
<span class="line"><span style="color:#24292E;">contract_deployer_account = </span><span style="color:#032F62;">&quot;0xaddress&quot;</span></span>
<span class="line"><span style="color:#24292E;">contract_deployer_key = </span><span style="color:#032F62;">&quot;privatekey&quot;</span></span>
<span class="line"><span style="color:#24292E;">batcher_account = </span><span style="color:#032F62;">&quot;0xaddress&quot;</span></span>
<span class="line"><span style="color:#24292E;">batcher_key = </span><span style="color:#032F62;">&quot;privatekey&quot;</span></span>
<span class="line"><span style="color:#24292E;">proposer_account = </span><span style="color:#032F62;">&quot;0xaddress&quot;</span></span>
<span class="line"><span style="color:#24292E;">proposer_key = </span><span style="color:#032F62;">&quot;privatekey&quot;</span></span>
<span class="line"><span style="color:#24292E;">admin_account = </span><span style="color:#032F62;">&quot;0xaddress&quot;</span></span>
<span class="line"><span style="color:#24292E;">admin_key = </span><span style="color:#032F62;">&quot;privatekey&quot;</span></span>
<span class="line"><span style="color:#24292E;">p2p_sequencer_account = </span><span style="color:#032F62;">&quot;0xaddress&quot;</span></span>
<span class="line"><span style="color:#24292E;">p2p_sequencer_key = </span><span style="color:#032F62;">&quot;privatekey&quot;</span></span></code></pre></div><p>Your <code>0xaddress</code> key must also be funded with testnet ETH. We recommend at least 10 SepoliaETH to get your chain started, but you will need more to keep it running longer.</p><h2 id="congratulations" tabindex="-1">Congratulations <a class="header-anchor" href="#congratulations" aria-label="Permalink to &quot;Congratulations&quot;">​</a></h2><p>Congrats! You now have an OP Stack rollup running with Celestia underneath.</p><p>You can <a href="https://docs.optimism.io/builders/chain-operators/features/alt-da-mode#setup-your-da-server" target="_blank" rel="noreferrer">learn more about Alt-DA in Optimism docs</a>.</p>`,16),R=JSON.parse('{"title":"Run an OP Stack rollup with Celestia underneath","description":"Start your own rollup with op-plasma-celestia and roll-op.","frontmatter":{"description":"Start your own rollup with op-plasma-celestia and roll-op.","head":[["meta",{"property":"og:title","content":"Run an OP Stack rollup with Celestia underneath | Celestia Docs"}],["meta",{"property":"og:description","content":"Start your own rollup with op-plasma-celestia and roll-op."}]]},"headers":[],"relativePath":"how-to-guides/optimism.md","filePath":"how-to-guides/optimism.md","lastUpdated":1739817176000}'),P={name:"how-to-guides/optimism.md"},V=Object.assign(P,{setup(M){return(x,B)=>(t(),l("div",null,[p,a("div",c,[i,a("div",r,[a("div",d,[u,h,a("pre",y,[a("code",null,[a("span",_,[a("span",E,"$HOME/.celestia-light-"+e(n(s).mochaChainId),1)])])]),a("pre",g,[a("code",null,[a("span",m,[a("span",b,"$HOME/.celestia-light-"+e(n(s).mochaChainId),1)])])])]),v,a("div",k,[C,f,a("pre",F,[a("code",null,[a("span",q,[a("span",w,"$HOME/.celestia-light-"+e(n(s).arabicaChainId),1)])])]),a("pre",S,[a("code",null,[a("span",T,[a("span",A,"$HOME/.celestia-light-"+e(n(s).arabicaChainId),1)])])])])])]),D]))}});export{R as __pageData,V as default};
