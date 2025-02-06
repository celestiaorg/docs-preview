import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.9a1d3f20.js";const f=JSON.parse('{"title":"Optimism devnet deep dive","description":"","frontmatter":{"head":[["meta",{"property":"og:title","content":"Optimism devnet deep dive | Celestia Docs"}],["meta",{"property":"og:description","content":"The first modular blockchain network."}]]},"headers":[],"relativePath":"how-to-guides/optimism-devnet.md","filePath":"how-to-guides/optimism-devnet.md","lastUpdated":1738852383000}'),o={name:"how-to-guides/optimism-devnet.md"},l=e(`<h1 id="optimism-devnet-deep-dive" tabindex="-1">Optimism devnet deep dive <a class="header-anchor" href="#optimism-devnet-deep-dive" aria-label="Permalink to &quot;Optimism devnet deep dive&quot;">​</a></h1><p>This page is for those interested in doing a deep dive on their pre-<code>op-plasma-celestia</code> <code>@celestiaorg/optimism</code> rollups.</p><h2 id="find-a-transaction" tabindex="-1">Find a transaction <a class="header-anchor" href="#find-a-transaction" aria-label="Permalink to &quot;Find a transaction&quot;">​</a></h2><p>Now, we&#39;ll check for a recent transaction on the L1 with:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cast</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">block</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">latest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--rpc-url</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost:8545</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cast</span><span style="color:#24292E;"> </span><span style="color:#032F62;">block</span><span style="color:#24292E;"> </span><span style="color:#032F62;">latest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--rpc-url</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost:8545</span></span></code></pre></div><p>Output of a block that contains a transaction will look like this:</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">baseFeePerGas        7</span></span>
<span class="line"><span style="color:#79B8FF;">difficulty           2</span></span>
<span class="line"><span style="color:#79B8FF;">extraData            0xd883010d04846765746888676f312e32312e33856c696e7578000000000000006b3afa42dce1f87f1f07a1ef569c4d43e41738ef93c865098bfa1458645f384e2e4498bcfe4ad9353ff1913a2e16162f496fafe5b0939a6c78fb5b503248d6da01</span></span>
<span class="line"><span style="color:#79B8FF;">gasLimit             30000000</span></span>
<span class="line"><span style="color:#79B8FF;">gasUsed              21568</span></span>
<span class="line"><span style="color:#79B8FF;">hash                 0x1cb54d2369752ef73511c202ff9cdfd0eadf3a77b7aef0092bea63f2b5d57659</span></span>
<span class="line"><span style="color:#79B8FF;">logsBloom            0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000</span></span>
<span class="line"><span style="color:#79B8FF;">miner                0x0000000000000000000000000000000000000000</span></span>
<span class="line"><span style="color:#79B8FF;">mixHash              0x0000000000000000000000000000000000000000000000000000000000000000</span></span>
<span class="line"><span style="color:#79B8FF;">nonce                0x0000000000000000</span></span>
<span class="line"><span style="color:#79B8FF;">number               1141</span></span>
<span class="line"><span style="color:#79B8FF;">parentHash           0x664bf4bb4a57dd5768a0a98991d77c58fb7a4e164c2581c79fb33ce9c3d4c250</span></span>
<span class="line"><span style="color:#79B8FF;">receiptsRoot         0xaf8ff6af1180c8be9e4e8f3a5f882b3b227233f4abbefa479836d3721682a389</span></span>
<span class="line"><span style="color:#79B8FF;">sealFields           []</span></span>
<span class="line"><span style="color:#79B8FF;">sha3Uncles           0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347</span></span>
<span class="line"><span style="color:#79B8FF;">size                 767</span></span>
<span class="line"><span style="color:#79B8FF;">stateRoot            0xd4b998a35d20d98ed3488221f0c161a0a9572d3de66399482553c8e3d2fae751</span></span>
<span class="line"><span style="color:#79B8FF;">timestamp            1699638350</span></span>
<span class="line"><span style="color:#79B8FF;">withdrawalsRoot</span></span>
<span class="line"><span style="color:#79B8FF;">totalDifficulty      2283</span></span>
<span class="line"><span style="color:#79B8FF;">transactions:        [</span></span>
<span class="line"><span style="color:#79B8FF;">  0x79a0a7a1b4936aafe7a37dbfb07a6a9e55c145a4ed6fd54f962649b4b7db8de7</span></span>
<span class="line"><span style="color:#79B8FF;">]</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#005CC5;">baseFeePerGas        7</span></span>
<span class="line"><span style="color:#005CC5;">difficulty           2</span></span>
<span class="line"><span style="color:#005CC5;">extraData            0xd883010d04846765746888676f312e32312e33856c696e7578000000000000006b3afa42dce1f87f1f07a1ef569c4d43e41738ef93c865098bfa1458645f384e2e4498bcfe4ad9353ff1913a2e16162f496fafe5b0939a6c78fb5b503248d6da01</span></span>
<span class="line"><span style="color:#005CC5;">gasLimit             30000000</span></span>
<span class="line"><span style="color:#005CC5;">gasUsed              21568</span></span>
<span class="line"><span style="color:#005CC5;">hash                 0x1cb54d2369752ef73511c202ff9cdfd0eadf3a77b7aef0092bea63f2b5d57659</span></span>
<span class="line"><span style="color:#005CC5;">logsBloom            0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000</span></span>
<span class="line"><span style="color:#005CC5;">miner                0x0000000000000000000000000000000000000000</span></span>
<span class="line"><span style="color:#005CC5;">mixHash              0x0000000000000000000000000000000000000000000000000000000000000000</span></span>
<span class="line"><span style="color:#005CC5;">nonce                0x0000000000000000</span></span>
<span class="line"><span style="color:#005CC5;">number               1141</span></span>
<span class="line"><span style="color:#005CC5;">parentHash           0x664bf4bb4a57dd5768a0a98991d77c58fb7a4e164c2581c79fb33ce9c3d4c250</span></span>
<span class="line"><span style="color:#005CC5;">receiptsRoot         0xaf8ff6af1180c8be9e4e8f3a5f882b3b227233f4abbefa479836d3721682a389</span></span>
<span class="line"><span style="color:#005CC5;">sealFields           []</span></span>
<span class="line"><span style="color:#005CC5;">sha3Uncles           0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347</span></span>
<span class="line"><span style="color:#005CC5;">size                 767</span></span>
<span class="line"><span style="color:#005CC5;">stateRoot            0xd4b998a35d20d98ed3488221f0c161a0a9572d3de66399482553c8e3d2fae751</span></span>
<span class="line"><span style="color:#005CC5;">timestamp            1699638350</span></span>
<span class="line"><span style="color:#005CC5;">withdrawalsRoot</span></span>
<span class="line"><span style="color:#005CC5;">totalDifficulty      2283</span></span>
<span class="line"><span style="color:#005CC5;">transactions:        [</span></span>
<span class="line"><span style="color:#005CC5;">  0x79a0a7a1b4936aafe7a37dbfb07a6a9e55c145a4ed6fd54f962649b4b7db8de7</span></span>
<span class="line"><span style="color:#005CC5;">]</span></span></code></pre></div><p>Copy the transaction hash from <code>transactions: &lt;transaction-hash&gt;</code> and set it as a variable:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> TX_HASH</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0x79a0a7a1b4936aafe7a37dbfb07a6a9e55c145a4ed6fd54f962649b4b7db8de7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> TX_HASH</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0x79a0a7a1b4936aafe7a37dbfb07a6a9e55c145a4ed6fd54f962649b4b7db8de7</span></span></code></pre></div><h2 id="read-the-transaction-call-data" tabindex="-1">Read the transaction call data <a class="header-anchor" href="#read-the-transaction-call-data" aria-label="Permalink to &quot;Read the transaction call data&quot;">​</a></h2><p>Now read the transaction call data on the L1:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cast</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tx</span><span style="color:#E1E4E8;"> $TX_HASH </span><span style="color:#79B8FF;">--rpc-url</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost:8545</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cast</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tx</span><span style="color:#24292E;"> $TX_HASH </span><span style="color:#005CC5;">--rpc-url</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost:8545</span></span></code></pre></div><p>The output will look similar to below:</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">blockHash            0x9f4dfae061b5ddd86f95a81be5daa0d7fe32e7f7f770f86dc375e0007d249bd2</span></span>
<span class="line"><span style="color:#79B8FF;">blockNumber          24</span></span>
<span class="line"><span style="color:#79B8FF;">from                 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC</span></span>
<span class="line"><span style="color:#79B8FF;">gas                  21572</span></span>
<span class="line"><span style="color:#79B8FF;">gasPrice             1040676758</span></span>
<span class="line"><span style="color:#79B8FF;">hash                 0xadd3a5dc0b8c605aeac891098e87cbaff43bb642896ebbf74f964c0690e46df2</span></span>
<span class="line"><span style="color:#79B8FF;">input                0xce3500000000000000769074a923011bdda721eacc34c8a77c69c10f2b6c8e659f987e82f217a5340f</span></span>
<span class="line"><span style="color:#79B8FF;">nonce                4</span></span>
<span class="line"><span style="color:#79B8FF;">r                    0xaf5c1505c7dfcebca94d9a6a8c0caf99b6c87a8ed6d6c0b3161c9026f270a84f</span></span>
<span class="line"><span style="color:#79B8FF;">s                    0x383ed2debf9f9055920cd7340418dda7e2bca6b989eb6992d83d123d4e322f2a</span></span>
<span class="line"><span style="color:#79B8FF;">to                   0xFf00000000000000000000000000000000000901</span></span>
<span class="line"><span style="color:#79B8FF;">transactionIndex     0</span></span>
<span class="line"><span style="color:#79B8FF;">v                    0</span></span>
<span class="line"><span style="color:#79B8FF;">value                0</span></span>
<span class="line"><span style="color:#79B8FF;">yParity              0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">blockHash            0x9f4dfae061b5ddd86f95a81be5daa0d7fe32e7f7f770f86dc375e0007d249bd2</span></span>
<span class="line"><span style="color:#005CC5;">blockNumber          24</span></span>
<span class="line"><span style="color:#005CC5;">from                 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC</span></span>
<span class="line"><span style="color:#005CC5;">gas                  21572</span></span>
<span class="line"><span style="color:#005CC5;">gasPrice             1040676758</span></span>
<span class="line"><span style="color:#005CC5;">hash                 0xadd3a5dc0b8c605aeac891098e87cbaff43bb642896ebbf74f964c0690e46df2</span></span>
<span class="line"><span style="color:#005CC5;">input                0xce3500000000000000769074a923011bdda721eacc34c8a77c69c10f2b6c8e659f987e82f217a5340f</span></span>
<span class="line"><span style="color:#005CC5;">nonce                4</span></span>
<span class="line"><span style="color:#005CC5;">r                    0xaf5c1505c7dfcebca94d9a6a8c0caf99b6c87a8ed6d6c0b3161c9026f270a84f</span></span>
<span class="line"><span style="color:#005CC5;">s                    0x383ed2debf9f9055920cd7340418dda7e2bca6b989eb6992d83d123d4e322f2a</span></span>
<span class="line"><span style="color:#005CC5;">to                   0xFf00000000000000000000000000000000000901</span></span>
<span class="line"><span style="color:#005CC5;">transactionIndex     0</span></span>
<span class="line"><span style="color:#005CC5;">v                    0</span></span>
<span class="line"><span style="color:#005CC5;">value                0</span></span>
<span class="line"><span style="color:#005CC5;">yParity              0</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You are looking for a batcher transaction to the address <code>0xFf00000000000000000000000000000000000901</code>.</p></div><p>First, remove the prefix <code>0xce</code>. Now, set the <code>input</code> as the <code>INPUT</code> variable and encode it as base64:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> INPUT</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">3500000000000000769074</span><span style="color:#9ECBFF;">a923011bdda721eacc34c8a77c69c10f2b6c8e659f987e82f217a5340f</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> ENCODED_INPUT</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">$(</span><span style="color:#79B8FF;">echo</span><span style="color:#9ECBFF;"> &quot;</span><span style="color:#E1E4E8;">$INPUT</span><span style="color:#9ECBFF;">&quot; </span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;"> </span><span style="color:#B392F0;">xxd</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-r</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#9ECBFF;"> </span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;"> </span><span style="color:#B392F0;">base64</span><span style="color:#9ECBFF;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> INPUT</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">3500000000000000769074</span><span style="color:#032F62;">a923011bdda721eacc34c8a77c69c10f2b6c8e659f987e82f217a5340f</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> ENCODED_INPUT</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">$(</span><span style="color:#005CC5;">echo</span><span style="color:#032F62;"> &quot;</span><span style="color:#24292E;">$INPUT</span><span style="color:#032F62;">&quot; </span><span style="color:#D73A49;">|</span><span style="color:#032F62;"> </span><span style="color:#6F42C1;">xxd</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-r</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-p</span><span style="color:#032F62;"> </span><span style="color:#D73A49;">|</span><span style="color:#032F62;"> </span><span style="color:#6F42C1;">base64</span><span style="color:#032F62;">)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Remember to remove the <code>0xce</code> prefix!</p></div><h2 id="find-the-data-on-celestia" tabindex="-1">Find the data on Celestia <a class="header-anchor" href="#find-the-data-on-celestia" aria-label="Permalink to &quot;Find the data on Celestia&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-X</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">POST</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-H</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Content-Type: application/json&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-H</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Authorization: Bearer </span><span style="color:#E1E4E8;">$CELESTIA_NODE_AUTH_TOKEN</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{ &quot;id&quot;: 1, &quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;da.Get&quot;, &quot;params&quot;: [[&quot;$ENCODED_INPUT&quot;], &quot;AAAAAAAAAAAAAAAAAAAAAAAAAAECAwQFBgcICRA=&quot;]}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://127.0.0.1:26658</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-X</span><span style="color:#24292E;"> </span><span style="color:#032F62;">POST</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-H</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Content-Type: application/json&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-H</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Authorization: Bearer </span><span style="color:#24292E;">$CELESTIA_NODE_AUTH_TOKEN</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{ &quot;id&quot;: 1, &quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;da.Get&quot;, &quot;params&quot;: [[&quot;$ENCODED_INPUT&quot;], &quot;AAAAAAAAAAAAAAAAAAAAAAAAAAECAwQFBgcICRA=&quot;]}&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://127.0.0.1:26658</span></span></code></pre></div><p>The params are <code>[]blobs, namespace</code>, base64-encoded.</p><p>Your result will look similar to the below!</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">{&quot;jsonrpc&quot;:&quot;2.0&quot;,&quot;result&quot;:[&quot;SGVsbG8gd28ybGQh&quot;],&quot;id&quot;:1}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">{&quot;jsonrpc&quot;:&quot;2.0&quot;,&quot;result&quot;:[&quot;SGVsbG8gd28ybGQh&quot;],&quot;id&quot;:1}</span></span></code></pre></div><h2 id="span-batches" tabindex="-1">Span batches <a class="header-anchor" href="#span-batches" aria-label="Permalink to &quot;Span batches&quot;">​</a></h2><p>Span batches can be enabled by setting <code>OP_BATCHER_BATCH_TYPE: 1</code> in your <code>docker-compose.yml</code> file.</p><p>Note that this requires the Delta activation time to be configured. For your devnet, you should set <code>&quot;l2GenesisDeltaTimeOffset&quot;: &quot;0x0&quot;,</code> in <code>devnetL1-template.json</code>. This will enable span batches and can be tested by grepping <code>docker compose logs -f | grep batch_type</code> which should include <code>batch_type=SpanBatch</code> and <code>batch_type=1</code>.</p>`,26),p=[l];function c(t,r,d,i,y,b){return a(),n("div",null,p)}const h=s(o,[["render",c]]);export{f as __pageData,h as default};
