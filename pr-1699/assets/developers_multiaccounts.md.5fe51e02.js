import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.b47e54aa.js";const b=JSON.parse('{"title":"MultiAccounts feature for blobs submission","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"MultiAccounts feature for blobs submission | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/multiaccounts.md","filePath":"developers/multiaccounts.md","lastUpdated":1725971357000}'),o={name:"developers/multiaccounts.md"},t=n(`<h1 id="multiaccounts-feature-for-blobs-submission" tabindex="-1">MultiAccounts feature for blobs submission <a class="header-anchor" href="#multiaccounts-feature-for-blobs-submission" aria-label="Permalink to &quot;MultiAccounts feature for blobs submission&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>By default, a celestia-node creates a key named <code>my_celes_key</code> during initialization. This document explains how to run a node with a different default key name and how to submit blobs using different signers.</p><h2 id="running-a-node-with-a-different-default-key-name" tabindex="-1">Running a node with a different default key name <a class="header-anchor" href="#running-a-node-with-a-different-default-key-name" aria-label="Permalink to &quot;Running a node with a different default key name&quot;">​</a></h2><p>To start a Celestia node with a different default key name, use the following command:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">light</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip=consensus.celestia-arabica-11.com</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--p2p.network=arabica</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--keyring.keyname</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">testKey</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">light</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip=consensus.celestia-arabica-11.com</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--p2p.network=arabica</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--keyring.keyname</span><span style="color:#24292E;"> </span><span style="color:#032F62;">testKey</span></span></code></pre></div><p>In this example, <code>testKey</code> becomes the default node key, and the node&#39;s address will change accordingly.</p><h2 id="submitting-blobs-with-a-different-signer-key-name" tabindex="-1">Submitting blobs with a different signer/key name <a class="header-anchor" href="#submitting-blobs-with-a-different-signer-key-name" aria-label="Permalink to &quot;Submitting blobs with a different signer/key name&quot;">​</a></h2><h3 id="option-1-submit-passing-key-name" tabindex="-1">Option 1: Submit passing key name <a class="header-anchor" href="#option-1-submit-passing-key-name" aria-label="Permalink to &quot;Option 1: Submit passing key name&quot;">​</a></h3><p>You can submit a blob by specifying a different key name:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">blob</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">submit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0x42690c204d39600fddd3</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;gm&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--key.name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">testKey2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">blob</span><span style="color:#24292E;"> </span><span style="color:#032F62;">submit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0x42690c204d39600fddd3</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;gm&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--key.name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">testKey2</span></span></code></pre></div><p>This transaction will be signed by the address associated with <code>testKey2</code>.</p><h3 id="option-2-submit-passing-signer-address" tabindex="-1">Option 2: Submit passing signer address <a class="header-anchor" href="#option-2-submit-passing-signer-address" aria-label="Permalink to &quot;Option 2: Submit passing signer address&quot;">​</a></h3><p>Alternatively, you can submit a blob by specifying the signer&#39;s address:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">blob</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">submit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0x42690c204d39600fddd3</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;gm&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--signer</span><span style="color:#E1E4E8;"> $SIGNER_ADDRESS</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">blob</span><span style="color:#24292E;"> </span><span style="color:#032F62;">submit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0x42690c204d39600fddd3</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;gm&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--signer</span><span style="color:#24292E;"> $SIGNER_ADDRESS</span></span></code></pre></div><p>Both options achieve the same result but use different inputs. The <code>testKey2</code> points to <code>SIGNER_ADDRESS</code> in the KeyStore.</p><h2 id="key-management" tabindex="-1">Key management <a class="header-anchor" href="#key-management" aria-label="Permalink to &quot;Key management&quot;">​</a></h2><p>All keys and addresses must be added to the KeyStore. To create a new key, use the <a href="https://github.com/celestiaorg/celestia-node/blob/main/cmd/cel-key/main.go" target="_blank" rel="noreferrer"><code>cel-key</code> library</a>:</p><h3 id="creating-a-new-key" tabindex="-1">Creating a new key <a class="header-anchor" href="#creating-a-new-key" aria-label="Permalink to &quot;Creating a new key&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">./cel-key</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">testKey</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--keyring-backend</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--node.type</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">light</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">arabica</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">./cel-key</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">testKey</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--keyring-backend</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--node.type</span><span style="color:#24292E;"> </span><span style="color:#032F62;">light</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">arabica</span></span></code></pre></div><h3 id="importing-an-existing-key" tabindex="-1">Importing an existing key <a class="header-anchor" href="#importing-an-existing-key" aria-label="Permalink to &quot;Importing an existing key&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">./cel-key</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">import</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">./cel-key</span><span style="color:#24292E;"> </span><span style="color:#032F62;">import</span></span></code></pre></div><p>Learn more on the <a href="./celestia-node-key#create-a-wallet-with-celestia-node">Create a wallet with celestia-node</a> page.</p><h2 id="optional-flags-for-write-transactions" tabindex="-1">Optional flags for write transactions <a class="header-anchor" href="#optional-flags-for-write-transactions" aria-label="Permalink to &quot;Optional flags for write transactions&quot;">​</a></h2><p>All other flags are now optional for all write transactions. This means you don&#39;t have to specify gas/fee parameters each time. The configuration can handle it for you automatically.</p><p>The default configuration applies to all write transactions, including those in the <a href="https://node-rpc-docs.celestia.org/#state" target="_blank" rel="noreferrer">state module</a> and <a href="https://node-rpc-docs.celestia.org/#blob.Submit" target="_blank" rel="noreferrer">blob.Submit</a>. This simplifies the process of submitting transactions and reduces the need for manual input.</p><p>For reference, see the:</p><ul><li><a href="https://github.com/celestiaorg/celestia-node/blob/87e2802b687065055e117b4ed2a0128d0666587d/state/tx_config.go#L35" target="_blank" rel="noreferrer">Transaction configuration</a></li><li><a href="https://github.com/celestiaorg/celestia-node/blob/87e2802b687065055e117b4ed2a0128d0666587d/nodebuilder/state/cmd/state.go#L420" target="_blank" rel="noreferrer">State module command implementation</a></li></ul>`,28),l=[t];function p(r,i,c,d,y,h){return a(),e("div",null,l)}const E=s(o,[["render",p]]);export{b as __pageData,E as default};
