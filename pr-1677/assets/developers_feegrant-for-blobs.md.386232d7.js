import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.60d15aee.js";const u=JSON.parse('{"title":"FeeGrant module for blobs submission","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"FeeGrant module for blobs submission | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/feegrant-for-blobs.md","filePath":"developers/feegrant-for-blobs.md","lastUpdated":1724250657000}'),o={name:"developers/feegrant-for-blobs.md"},l=e(`<h1 id="feegrant-module-for-blobs-submission" tabindex="-1">FeeGrant module for blobs submission <a class="header-anchor" href="#feegrant-module-for-blobs-submission" aria-label="Permalink to &quot;FeeGrant module for blobs submission&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>This guide provides developers with the knowledge to use the FeeGrant module on the Celestia&#39;s Mocha testnet chain for granting a data availability node&#39;s account to submit blobs without constantly funding it, enabling a third-party account to cover the transaction fees.</p><h2 id="pre-requisites" tabindex="-1">Pre-requisites <a class="header-anchor" href="#pre-requisites" aria-label="Permalink to &quot;Pre-requisites&quot;">​</a></h2><ul><li>celestia-node binary (<code>celestia</code>) <a href="./../nodes/celestia-node">installed</a></li><li>Access to a Mocha node (e.g., <code>https://rpc.celestia-mocha.com:443</code>)</li><li>Running DA Light node on Mocha testnet</li><li>One account with sufficient funds, the &quot;granter&quot;</li><li>One account with no funds, the &quot;grantee&quot;</li></ul><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>Each DA node contains a Celestia account that is used to pay for blobs submissions. To unify the fee payment process, the FeeGrant module allows a third-party account (granter) to pay for the fees incurred by a DA node&#39;s (grantee) account. You will need one account that will contain the funds, the granter, and another account that will be in the DA node you run to post blobs, the grantee. You will see the DA node&#39;s account once you initialize the node. Learn more about managing accounts with <code>cel-key</code> in <a href="./celestia-node-key#create-a-wallet-with-celestia-node">create a wallet with celestia-node</a>.</p><h2 id="granting-fee-allowances-using-celestia-node" tabindex="-1">Granting fee allowances using celestia-node <a class="header-anchor" href="#granting-fee-allowances-using-celestia-node" aria-label="Permalink to &quot;Granting fee allowances using celestia-node&quot;">​</a></h2><p>To get started granting the fee allowance, you will need two separate keys to run the light node with. One to begin the FeeGrant as the granter and another to use the FeeGrant as the grantee.</p><p>Set some variables for your accounts for the remainder of the guide:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> GRANTER_ADDRESS</span><span style="color:#F97583;">=&lt;</span><span style="color:#9ECBFF;">your-granter-account-addres</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> GRANTEE_ADDRESS</span><span style="color:#F97583;">=&lt;</span><span style="color:#9ECBFF;">your-grantee-account-addres</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> RPC_URL</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">rpc.celestia-mocha.com</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> GRANTER_ADDRESS</span><span style="color:#D73A49;">=&lt;</span><span style="color:#032F62;">your-granter-account-addres</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> GRANTEE_ADDRESS</span><span style="color:#D73A49;">=&lt;</span><span style="color:#032F62;">your-grantee-account-addres</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> RPC_URL</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">rpc.celestia-mocha.com</span></span></code></pre></div><h3 id="feegrant-module-implementation-in-celestia-node" tabindex="-1">FeeGrant module implementation in celestia-node <a class="header-anchor" href="#feegrant-module-implementation-in-celestia-node" aria-label="Permalink to &quot;FeeGrant module implementation in celestia-node&quot;">​</a></h3><p>Using celestia-node, you now can easily give permission for other nodes to submit transactions on your behalf. It is also possible to revoke the grant.</p><p>The node that receives the grant has to run a node with the <code>--granter.address=$GRANTER_ADDRESS&gt;</code> flag to use FeeGrant functionality.</p><p>The granter address will be stored until the next run of your local node. So, in case the granter revokes permission, you will have to restart the node without this flag.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Transactions paid for by the the FeeGrant module will consume more gas than regular <code>PayForBlobs</code> transactions.</p><table><thead><tr><th>Fee and transaction type</th><th>Transaction 1</th><th>Transaction 2</th></tr></thead><tbody><tr><td>0.000176 fee with feegrant on Mocha testnet</td><td><a href="https://mocha.celenium.io/tx/82384c8006c6cf73072ffeb160f78c659447dba1757e4a4f6d5e6684935acc61" target="_blank" rel="noreferrer">Link</a></td><td><a href="https://mocha.celenium.io/tx/83fa70a496eaf4fa21da43c88c1f0bf8f9aa6676ec1d47f183fca948ab418f94" target="_blank" rel="noreferrer">Link</a></td></tr><tr><td>0.00016 fee without feegrant on Mocha testnet</td><td><a href="https://mocha.celenium.io/tx/9e15dcf7e82288bdf0efc06edf92a30eead60d5ed6518a4721fee1bc34613e2c" target="_blank" rel="noreferrer">Link</a></td><td><a href="https://mocha.celenium.io/tx/a670112dee5bc2001b18225587f2cce86c97016a87d33cc1425b755518050348" target="_blank" rel="noreferrer">Link</a></td></tr></tbody></table></div><h3 id="grant-permission-for-an-allowance-as-a-granter" tabindex="-1">Grant permission for an allowance as a granter <a class="header-anchor" href="#grant-permission-for-an-allowance-as-a-granter" aria-label="Permalink to &quot;Grant permission for an allowance as a granter&quot;">​</a></h3><p>First, your node will need to be running with a command similar to:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">light</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mocha</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> $RPC_URL </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--keyring.accname</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">granter_key</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">light</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mocha</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> $RPC_URL </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--keyring.accname</span><span style="color:#24292E;"> </span><span style="color:#032F62;">granter_key</span></span></code></pre></div><p>Then, grant the fee to the grantee:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">state</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">grant-fee</span><span style="color:#E1E4E8;"> $GRANTEE_ADDRESS </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1000000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">state</span><span style="color:#24292E;"> </span><span style="color:#032F62;">grant-fee</span><span style="color:#24292E;"> $GRANTEE_ADDRESS </span><span style="color:#005CC5;">2000</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000000</span></span></code></pre></div><p>Note that the <code>--amount uint</code> flag specifies the spend limit (in utia) for the grantee. The default value is 0 which means the grantee does not have a spend limit.</p><p>To set a limit of 42069 utia, use the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">state</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">grant-fee</span><span style="color:#E1E4E8;"> $GRANTEE_ADDRESS </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1000000</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--amount</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">42069</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">state</span><span style="color:#24292E;"> </span><span style="color:#032F62;">grant-fee</span><span style="color:#24292E;"> $GRANTEE_ADDRESS </span><span style="color:#005CC5;">2000</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000000</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--amount</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">42069</span></span></code></pre></div><p>Find the <a href="https://mocha.celenium.io/tx/532c2d63b0732e335def1cb7f805bb798793fda43f88a955c5a9224dc6d0433e" target="_blank" rel="noreferrer">example transaction on Celenium</a>.</p><h2 id="using-a-feegrant-allowance-as-a-grantee-in-celestia-node" tabindex="-1">Using a FeeGrant allowance as a grantee in celestia-node <a class="header-anchor" href="#using-a-feegrant-allowance-as-a-grantee-in-celestia-node" aria-label="Permalink to &quot;Using a FeeGrant allowance as a grantee in celestia-node&quot;">​</a></h2><p>First, start your node with the grantee account:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">light</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> $RPC_URL </span><span style="color:#79B8FF;">--p2p.network=mocha</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">--granter.address</span><span style="color:#E1E4E8;">=$GRANTER_ADDRESS</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">light</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> $RPC_URL </span><span style="color:#005CC5;">--p2p.network=mocha</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">--granter.address</span><span style="color:#24292E;">=$GRANTER_ADDRESS</span></span></code></pre></div><p>To check the balance of a light node, use the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">state</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">balance</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">state</span><span style="color:#24292E;"> </span><span style="color:#032F62;">balance</span></span></code></pre></div><p>Example response when the account balance does not exist:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;result&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;denom&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;utia&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;amount&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;result&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;denom&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;utia&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;amount&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>This indicates that the light node currently does not have any funds.</p><p>Now submit a blob:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">blob</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">submit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0x42690c204d39600fddd3</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0x6665656772616e74</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">blob</span><span style="color:#24292E;"> </span><span style="color:#032F62;">submit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0x42690c204d39600fddd3</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0x6665656772616e74</span></span></code></pre></div><p>You&#39;ll see the height and the commitment of your blob:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;result&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;height&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1639397</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;commitments&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;19L/C4iBEsqXGzC5ZxJ3vtuGBiAdQAMIEnbYjKEGcac=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;result&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;height&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1639397</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;commitments&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;19L/C4iBEsqXGzC5ZxJ3vtuGBiAdQAMIEnbYjKEGcac=&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>After the transactions made making this guide, <a href="https://mocha.celenium.io/address/celestia1e500l0nlwqj7x5vsqcxqd8rns5khvfw0skgu60" target="_blank" rel="noreferrer">see that the account balance is still 0 utia</a>.</p><h2 id="checking-account-balances-after-submission" tabindex="-1">Checking account balances after submission <a class="header-anchor" href="#checking-account-balances-after-submission" aria-label="Permalink to &quot;Checking account balances after submission&quot;">​</a></h2><p>Light node account: After submitting a blob, you can check the light node account&#39;s balance to verify that the fees have been deducted:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">state</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">balance</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">state</span><span style="color:#24292E;"> </span><span style="color:#032F62;">balance</span></span></code></pre></div><p>Example output showing fees are not deducted:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;result&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;denom&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;utia&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;amount&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;result&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;denom&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;utia&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;amount&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="optional-revoke-permission-for-a-feegrant-allowance-as-a-granter" tabindex="-1">Optional: Revoke permission for a FeeGrant allowance as a granter <a class="header-anchor" href="#optional-revoke-permission-for-a-feegrant-allowance-as-a-granter" aria-label="Permalink to &quot;Optional: Revoke permission for a FeeGrant allowance as a granter&quot;">​</a></h2><p>To revoke the feegrant, run your light node as the granter and run:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">state</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">revoke-grant-fee</span><span style="color:#E1E4E8;"> $GRANTEE_ADDRESS </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1000000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">state</span><span style="color:#24292E;"> </span><span style="color:#032F62;">revoke-grant-fee</span><span style="color:#24292E;"> $GRANTEE_ADDRESS </span><span style="color:#005CC5;">2000</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000000</span></span></code></pre></div><p>There is also a specific error for the case when you run your node as a grantee, but the granter revokes their permission. In this case, your transaction will fail with the error: <code>granter has revoked the grant</code> This will mean that you have to restart the node without the <code>granter.address</code> flag.</p><h3 id="optional-submitting-a-blob-from-file-input" tabindex="-1">Optional: Submitting a blob from file input <a class="header-anchor" href="#optional-submitting-a-blob-from-file-input" aria-label="Permalink to &quot;Optional: Submitting a blob from file input&quot;">​</a></h3><p>To submit a blob from file input:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">blob</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">submit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--input-file</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">blob.json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">blob</span><span style="color:#24292E;"> </span><span style="color:#032F62;">submit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--input-file</span><span style="color:#24292E;"> </span><span style="color:#032F62;">blob.json</span></span></code></pre></div><h2 id="optional-granting-fee-allowances-using-celestia-appd" tabindex="-1">Optional: Granting fee allowances using celestia-appd <a class="header-anchor" href="#optional-granting-fee-allowances-using-celestia-appd" aria-label="Permalink to &quot;Optional: Granting fee allowances using celestia-appd&quot;">​</a></h2><p>To grant fee allowances, allowing a third-party (granter) account to pay for the fees incurred by a Celestia data availability node (grantee) account, use the following commands.</p><p>Set your account addresses for grantee and granter, and the RPC URL:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> GRANTER_ADDRESS</span><span style="color:#F97583;">=&lt;</span><span style="color:#9ECBFF;">your-granter-account-addres</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> GRANTEE_ADDRESS</span><span style="color:#F97583;">=&lt;</span><span style="color:#9ECBFF;">your-grantee-account-addres</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> RPC_URL</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">https://rpc.celestia-mocha.com:443</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> GRANTER_ADDRESS</span><span style="color:#D73A49;">=&lt;</span><span style="color:#032F62;">your-granter-account-addres</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> GRANTEE_ADDRESS</span><span style="color:#D73A49;">=&lt;</span><span style="color:#032F62;">your-grantee-account-addres</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> RPC_URL</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">https://rpc.celestia-mocha.com:443</span></span></code></pre></div><p>Then, send the feegrant transaction:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">feegrant</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">grant</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  $GRANTER_ADDRESS $GRANTEE_ADDRESS </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--node</span><span style="color:#E1E4E8;"> $RPC_URL </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--spend-limit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1000000</span><span style="color:#9ECBFF;">utia</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--allowed-messages</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/cosmos.bank.v1beta1.MsgSend,/celestia.blob.v1.MsgPayForBlobs&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--chain-id</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mocha-4</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--keyring-backend</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--fees</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">20000</span><span style="color:#9ECBFF;">utia</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--broadcast-mode</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">block</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--yes</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">feegrant</span><span style="color:#24292E;"> </span><span style="color:#032F62;">grant</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  $GRANTER_ADDRESS $GRANTEE_ADDRESS </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--node</span><span style="color:#24292E;"> $RPC_URL </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--spend-limit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000000</span><span style="color:#032F62;">utia</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--allowed-messages</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;/cosmos.bank.v1beta1.MsgSend,/celestia.blob.v1.MsgPayForBlobs&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--chain-id</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mocha-4</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--keyring-backend</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--fees</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20000</span><span style="color:#032F62;">utia</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--broadcast-mode</span><span style="color:#24292E;"> </span><span style="color:#032F62;">block</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--yes</span></span></code></pre></div><p>Example: <a href="https://mocha.celenium.io/tx/802a17777fbeab416f6fa2c25f0c56dd9cc8a92afc2a96293d114ac7c22efb5c" target="_blank" rel="noreferrer">FeeGrant transaction on Mocha</a></p><h3 id="optional-checking-the-granter-s-account" tabindex="-1">Optional: Checking the granter&#39;s account <a class="header-anchor" href="#optional-checking-the-granter-s-account" aria-label="Permalink to &quot;Optional: Checking the granter&#39;s account&quot;">​</a></h3><p>To confirm that the fees have been deducted from the granter&#39;s account that granted the fee allowance, run:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">query</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bank</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">balances</span><span style="color:#E1E4E8;"> $GRANTER_ADDRESS </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">--node </span><span style="color:#9ECBFF;">https://rpc.celestia-mocha.com:443</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--denom</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">utia</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">query</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bank</span><span style="color:#24292E;"> </span><span style="color:#032F62;">balances</span><span style="color:#24292E;"> $GRANTER_ADDRESS </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">--node </span><span style="color:#032F62;">https://rpc.celestia-mocha.com:443</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--denom</span><span style="color:#24292E;"> </span><span style="color:#032F62;">utia</span></span></code></pre></div><p>This output will show the remaining balance after fees have been deducted, confirming that the FeeGrant module is working as intended.</p>`,61),t=[l];function p(c,r,i,E,y,d){return a(),n("div",null,t)}const g=s(o,[["render",p]]);export{u as __pageData,g as default};
