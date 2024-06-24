import{_ as a,o as e,c as s,Q as t}from"./chunks/framework.2d5af021.js";const u=JSON.parse('{"title":"Create a wallet with celestia-app","description":"Learn how to generate a Celestia wallet using celestia-app.","frontmatter":{"description":"Learn how to generate a Celestia wallet using celestia-app.","head":[["meta",{"name":"og:title","content":"Create a wallet with celestia-app | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/celestia-app-wallet.md","filePath":"nodes/celestia-app-wallet.md","lastUpdated":1719232227000}'),l={name:"nodes/celestia-app-wallet.md"},o=t(`<h1 id="create-a-wallet-with-celestia-app" tabindex="-1">Create a wallet with celestia-app <a class="header-anchor" href="#create-a-wallet-with-celestia-app" aria-label="Permalink to &quot;Create a wallet with celestia-app&quot;">​</a></h1><p>For this guide, we will go over how you can generate a Celestia wallet using celestia-app.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li>Gone through <a href="./../nodes/quick-start">quick start and Installed celestia-app</a></li></ul><p>Note, you do not need to install celestia-node for this tutorial.</p><h2 id="create-a-wallet" tabindex="-1">Create a wallet <a class="header-anchor" href="#create-a-wallet" aria-label="Permalink to &quot;Create a wallet&quot;">​</a></h2><p>First, create an application CLI configuration file:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">keyring-backend</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">keyring-backend</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span></span></code></pre></div><p>You can pick whatever wallet name you want. For our example we used &quot;validator&quot; as the wallet name:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">keys</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">validator</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--interactive</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">keys</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">validator</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--interactive</span></span></code></pre></div><p>Save the mnemonic output as this is the only way to recover your validator wallet in case you lose it!</p><p>To check all your wallets you can run:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">keys</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">keys</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span></span></code></pre></div><h2 id="fund-a-wallet" tabindex="-1">Fund a wallet <a class="header-anchor" href="#fund-a-wallet" aria-label="Permalink to &quot;Fund a wallet&quot;">​</a></h2><p>For the public celestia address, you can fund the previously created wallet via <a href="https://discord.gg/celestiacommunity" target="_blank" rel="noreferrer">Discord</a> by sending this message to either the #mocha-faucet or #arabica-faucet channel:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$request celestia1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$request celestia1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span></span></code></pre></div><p>Wait to see if you get a confirmation that the tokens have been successfully sent. To check if tokens have arrived successfully to the destination wallet run the command below replacing the public address with your own:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span></span>
<span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">query</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bank</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">balances</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span></span>
<span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">query</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bank</span><span style="color:#24292E;"> </span><span style="color:#032F62;">balances</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Refer to <a href="./../nodes/celestia-node-troubleshooting#ports">the ports section of the celestia-node troubleshooting page</a> for information on which ports are required to be open on your machine.</p></div>`,19),n=[o];function p(c,r,i,x,d,h){return e(),s("div",null,n)}const E=a(l,[["render",p]]);export{u as __pageData,E as default};
