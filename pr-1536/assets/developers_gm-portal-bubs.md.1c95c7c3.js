import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.1633b852.js";const p="/docs-preview/pr-1536/img/gm_contract.png",t="/docs-preview/pr-1536/img/gm_bubs.png",F=JSON.parse('{"title":"Deploying a dapp on Bubs testnet","description":"Make your own GM Portal dapp on the OP Stack.","frontmatter":{"description":"Make your own GM Portal dapp on the OP Stack.","head":[["meta",{"name":"og:title","content":"Deploying a dapp on Bubs testnet | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/gm-portal-bubs.md","filePath":"developers/gm-portal-bubs.md","lastUpdated":1713793047000}'),e={name:"developers/gm-portal-bubs.md"},l=o(`<h1 id="deploying-a-dapp-on-bubs-testnet" tabindex="-1">Deploying a dapp on Bubs testnet <a class="header-anchor" href="#deploying-a-dapp-on-bubs-testnet" aria-label="Permalink to &quot;Deploying a dapp on Bubs testnet&quot;">​</a></h1><p>First, review the <a href="./bubs-testnet">Bubs testnet page</a> and the <a href="./deploy-on-bubs">Deploy a smart contract to Bubs testnet</a> tutorial.</p><p><strong>You will need a funded account to deploy your smart contract.</strong></p><p>Next, clone the <code>gm-portal</code> from Github and start the frontend:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/jcstein/gm-portal.git</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gm-portal/frontend</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $HOME</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/jcstein/gm-portal.git</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gm-portal/frontend</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span></span></code></pre></div><p>In a new terminal instance, set your private key for the faucet as a variable and the RPC URL you&#39;re using:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> PRIVATE_KEY</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> BUBS_RPC_URL</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">https://bubs-sepolia.rpc.caldera.xyz/http</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> PRIVATE_KEY</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> BUBS_RPC_URL</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">https://bubs-sepolia.rpc.caldera.xyz/http</span></span></code></pre></div><p>Now, change into the <code>gm-portal/contracts</code> directory in the same terminal and deploy the contract using Foundry:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/gm-portal/contracts</span></span>
<span class="line"><span style="color:#B392F0;">forge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">script/GmPortal.s.sol:GmPortalScript</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--rpc-url</span><span style="color:#E1E4E8;"> $BUBS_RPC_URL </span><span style="color:#79B8FF;">--private-key</span><span style="color:#E1E4E8;"> $PRIVATE_KEY </span><span style="color:#79B8FF;">--broadcast</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/gm-portal/contracts</span></span>
<span class="line"><span style="color:#6F42C1;">forge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">script</span><span style="color:#24292E;"> </span><span style="color:#032F62;">script/GmPortal.s.sol:GmPortalScript</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--rpc-url</span><span style="color:#24292E;"> $BUBS_RPC_URL </span><span style="color:#005CC5;">--private-key</span><span style="color:#24292E;"> $PRIVATE_KEY </span><span style="color:#005CC5;">--broadcast</span></span></code></pre></div><p><img src="`+p+`" alt="gm-contract"></p><p>In the output of the deployment, find the contract address and set it as a variable:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> CONTRACT_ADDRESS</span><span style="color:#F97583;">=&lt;</span><span style="color:#9ECBFF;">your-contract-address-from-the-output-abov</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> CONTRACT_ADDRESS</span><span style="color:#D73A49;">=&lt;</span><span style="color:#032F62;">your-contract-address-from-the-output-abov</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>Next, you&#39;re ready to interact with the contract from your terminal!</p><p>First, send a &quot;gm&quot; to the contract:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cast</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">send</span><span style="color:#E1E4E8;"> $CONTRACT_ADDRESS </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;gm(string)&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;gm&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">--private-key $PRIVATE_KEY </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">--rpc-url $BUBS_RPC_URL</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cast</span><span style="color:#24292E;"> </span><span style="color:#032F62;">send</span><span style="color:#24292E;"> $CONTRACT_ADDRESS </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">&quot;gm(string)&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;gm&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">--private-key $PRIVATE_KEY </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">--rpc-url $BUBS_RPC_URL</span></span></code></pre></div><p>Now that you&#39;ve posted to the contract, you can read all &quot;gms&quot; (GMs) from the contract with this command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cast</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">call</span><span style="color:#E1E4E8;"> $CONTRACT_ADDRESS </span><span style="color:#9ECBFF;">&quot;getAllGms()&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--rpc-url</span><span style="color:#E1E4E8;"> $BUBS_RPC_URL</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cast</span><span style="color:#24292E;"> </span><span style="color:#032F62;">call</span><span style="color:#24292E;"> $CONTRACT_ADDRESS </span><span style="color:#032F62;">&quot;getAllGms()&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--rpc-url</span><span style="color:#24292E;"> $BUBS_RPC_URL</span></span></code></pre></div><p>Next, query the total number of gms, which will be returned as a hex value:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cast</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">call</span><span style="color:#E1E4E8;"> $CONTRACT_ADDRESS </span><span style="color:#9ECBFF;">&quot;getTotalGms()&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--rpc-url</span><span style="color:#E1E4E8;"> $BUBS_RPC_URL</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cast</span><span style="color:#24292E;"> </span><span style="color:#032F62;">call</span><span style="color:#24292E;"> $CONTRACT_ADDRESS </span><span style="color:#032F62;">&quot;getTotalGms()&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--rpc-url</span><span style="color:#24292E;"> $BUBS_RPC_URL</span></span></code></pre></div><p>In order to interact with the contract on the frontend, you&#39;ll need to fund an account that you have in your Ethereum wallet. Transfer to an external account with this command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> RECEIVER</span><span style="color:#F97583;">=&lt;</span><span style="color:#9ECBFF;">receiver</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ETH</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">addres</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">cast</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">send</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--private-key</span><span style="color:#E1E4E8;"> $PRIVATE_KEY $RECEIVER </span><span style="color:#79B8FF;">--value</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">ether</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--rpc-url</span><span style="color:#E1E4E8;"> $BUBS_RPC_URL</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> RECEIVER</span><span style="color:#D73A49;">=&lt;</span><span style="color:#032F62;">receiver</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ETH</span><span style="color:#24292E;"> </span><span style="color:#032F62;">addres</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">cast</span><span style="color:#24292E;"> </span><span style="color:#032F62;">send</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--private-key</span><span style="color:#24292E;"> $PRIVATE_KEY $RECEIVER </span><span style="color:#005CC5;">--value</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#032F62;">ether</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--rpc-url</span><span style="color:#24292E;"> $BUBS_RPC_URL</span></span></code></pre></div><p>If you are in a different terminal than the one you set the private key in, you may need to set it again.</p><h2 id="update-the-frontend" tabindex="-1">Update the frontend <a class="header-anchor" href="#update-the-frontend" aria-label="Permalink to &quot;Update the frontend&quot;">​</a></h2><p>Next, you will need to update a few things before you can interact with the contract on the frontend:</p><ol><li>Change the contract address on <code>gm-portal/frontend/src/App.tsx</code> to your contract address</li><li>Match the chain info on <code>gm-portal/frontend/src/main.tsx</code> with the chain config of your L2</li><li>If you changed the contract, update the ABI in <code>gm-portal/frontend/GmPortal.json</code> from <code>gm-portal/contracts/out/GmPortal.sol/GmPortal.json</code>. This can be done with:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="color:#B392F0;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev/gm-portal/contracts/out/GmPortal.sol/GmPortal.json</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev/gm-portal/frontend</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $HOME</span></span>
<span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev/gm-portal/contracts/out/GmPortal.sol/GmPortal.json</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev/gm-portal/frontend</span></span></code></pre></div><h2 id="interact-with-the-frontend" tabindex="-1">Interact with the frontend <a class="header-anchor" href="#interact-with-the-frontend" aria-label="Permalink to &quot;Interact with the frontend&quot;">​</a></h2><p>Now, login with your wallet that you funded, and post a GM on your GM portal!</p><p><img src="`+t+'" alt="gm-bubs"></p><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>There are many possibilities of what could be built with this stack. These projects would be good to build on this stack:</p><ul><li>onchain gaming</li><li>decentralized social media</li><li>an NFT ticketing rollup</li><li>Optimism on CelOPstia</li><li>OP Craft on Celestia</li></ul>',32),c=[l];function r(i,y,d,E,h,u){return a(),n("div",null,c)}const b=s(e,[["render",r]]);export{F as __pageData,b as default};
