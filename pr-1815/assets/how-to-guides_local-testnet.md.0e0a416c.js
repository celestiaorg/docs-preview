import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.2959b752.js";const h=JSON.parse('{"title":"Setting Up a Celestia Local Testnet","description":"","frontmatter":{"head":[["meta",{"property":"og:title","content":"Setting Up a Celestia Local Testnet | Celestia Docs"}],["meta",{"property":"og:description","content":"The first modular blockchain network."}]]},"headers":[],"relativePath":"how-to-guides/local-testnet.md","filePath":"how-to-guides/local-testnet.md","lastUpdated":1732771600000}'),l={name:"how-to-guides/local-testnet.md"},o=p(`<h1 id="setting-up-a-celestia-local-testnet" tabindex="-1">Setting Up a Celestia Local Testnet <a class="header-anchor" href="#setting-up-a-celestia-local-testnet" aria-label="Permalink to &quot;Setting Up a Celestia Local Testnet&quot;">​</a></h1><p>This guide walks through setting up a local Celestia testnet with a validator node, bridge node, and light node.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li>celestia-app installed (based on <a href="./participate">compatible versions</a>)</li><li>celestia node binary installed</li><li>jq installed</li></ul><h2 id="starting-the-validator-node" tabindex="-1">Starting the Validator Node <a class="header-anchor" href="#starting-the-validator-node" aria-label="Permalink to &quot;Starting the Validator Node&quot;">​</a></h2><p>First, navigate to the celestia-app scripts directory and run the single node script:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-app/scripts</span></span>
<span class="line"><span style="color:#B392F0;">bash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">single-node.sh</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-app/scripts</span></span>
<span class="line"><span style="color:#6F42C1;">bash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">single-node.sh</span></span></code></pre></div><h2 id="setting-up-the-bridge-node" tabindex="-1">Setting Up the Bridge Node <a class="header-anchor" href="#setting-up-the-bridge-node" aria-label="Permalink to &quot;Setting Up the Bridge Node&quot;">​</a></h2><p>Once your validator node is running, get the genesis block hash:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-X</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">GET</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;localhost:26657/block?height=1&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">jq</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;.result .block_id.hash&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-X</span><span style="color:#24292E;"> </span><span style="color:#032F62;">GET</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;localhost:26657/block?height=1&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">jq</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;.result .block_id.hash&#39;</span></span></code></pre></div><p>This will return a hash like:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1D53B32ACB02563E425BA1F8B5178B06A748E0F7B9748A8B1D07C34B454AF595</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1D53B32ACB02563E425BA1F8B5178B06A748E0F7B9748A8B1D07C34B454AF595</span></span></code></pre></div><p>Set this as an environment variable:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> CELESTIA_CUSTOM</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">test:1D53B32ACB02563E425BA1F8B5178B06A748E0F7B9748A8B1D07C34B454AF595</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> CELESTIA_CUSTOM</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">test:1D53B32ACB02563E425BA1F8B5178B06A748E0F7B9748A8B1D07C34B454AF595</span></span></code></pre></div><p>Initialize the bridge node:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--node.store</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.celestia-custom-bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--core.grpc.port</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">9090</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--core.rpc.port</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">26657</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bridge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--node.store</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.celestia-custom-bridge</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--core.grpc.port</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">9090</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--core.rpc.port</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">26657</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span></span></code></pre></div><p>Start the bridge node:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--node.store</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.celestia-custom-bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--core.grpc.port</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">9090</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--core.rpc.port</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">26657</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bridge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--node.store</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.celestia-custom-bridge</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--core.grpc.port</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">9090</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--core.rpc.port</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">26657</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span></span></code></pre></div><h2 id="setting-up-the-light-node" tabindex="-1">Setting Up the Light Node <a class="header-anchor" href="#setting-up-the-light-node" aria-label="Permalink to &quot;Setting Up the Light Node&quot;">​</a></h2><p>In a new terminal, set the same environment variable:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> CELESTIA_CUSTOM</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">test:1D53B32ACB02563E425BA1F8B5178B06A748E0F7B9748A8B1D07C34B454AF595</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> CELESTIA_CUSTOM</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">test:1D53B32ACB02563E425BA1F8B5178B06A748E0F7B9748A8B1D07C34B454AF595</span></span></code></pre></div><p>Initialize the light node:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">light</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost:26657</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--node.store</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.celestia-custom-light/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">light</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost:26657</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--node.store</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.celestia-custom-light/</span></span></code></pre></div><p>Get the bridge node&#39;s peer info:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">p2p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">info</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--node.store</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.celestia-custom-bridge</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">p2p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">info</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--node.store</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.celestia-custom-bridge</span></span></code></pre></div><p>From the output, locate the relevant IP4 address and peer ID. The output will look similar to:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;result&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;12D3KooWAVsZ36CdczaEXNNnDpsPcVyAnbeBe5EPG7AjttRGfux7&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;peer_addr&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;/ip4/10.0.0.125/tcp/2121&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;/ip4/10.0.0.125/udp/2121/webrtc-direct/certhash/uEiBXDYwH1McBsLM2aEc3SdvAuhq2ZQ0RUgbjgTvXMQm7LA&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;/ip4/71.200.65.106/tcp/16279&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;/ip4/71.200.65.106/udp/16279/webrtc-direct/certhash/uEiBXDYwH1McBsLM2aEc3SdvAuhq2ZQ0RUgbjgTvXMQm7LA&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;/ip4/127.0.0.1/udp/2121/webrtc-direct/certhash/uEiBXDYwH1McBsLM2aEc3SdvAuhq2ZQ0RUgbjgTvXMQm7LA&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;/ip6/::1/tcp/2121&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;/ip6/::1/udp/2121/webrtc-direct/certhash/uEiBXDYwH1McBsLM2aEc3SdvAuhq2ZQ0RUgbjgTvXMQm7LA&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;result&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;id&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;12D3KooWAVsZ36CdczaEXNNnDpsPcVyAnbeBe5EPG7AjttRGfux7&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;peer_addr&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;/ip4/10.0.0.125/tcp/2121&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;/ip4/10.0.0.125/udp/2121/webrtc-direct/certhash/uEiBXDYwH1McBsLM2aEc3SdvAuhq2ZQ0RUgbjgTvXMQm7LA&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;/ip4/71.200.65.106/tcp/16279&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;/ip4/71.200.65.106/udp/16279/webrtc-direct/certhash/uEiBXDYwH1McBsLM2aEc3SdvAuhq2ZQ0RUgbjgTvXMQm7LA&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;/ip4/127.0.0.1/udp/2121/webrtc-direct/certhash/uEiBXDYwH1McBsLM2aEc3SdvAuhq2ZQ0RUgbjgTvXMQm7LA&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;/ip6/::1/tcp/2121&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;/ip6/::1/udp/2121/webrtc-direct/certhash/uEiBXDYwH1McBsLM2aEc3SdvAuhq2ZQ0RUgbjgTvXMQm7LA&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Start the light node with custom RPC port and trusted peer:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">light</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost:26657</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--node.store</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.celestia-custom-light/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--headers.trusted-peers</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/ip4/10.0.0.125/udp/2121/webrtc-direct/certhash/uEiBXDYwH1McBsLM2aEc3SdvAuhq2ZQ0RUgbjgTvXMQm7LA/p2p/12D3KooWAVsZ36CdczaEXNNnDpsPcVyAnbeBe5EPG7AjttRGfux7</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--rpc.port</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">42069</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">light</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost:26657</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--node.store</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.celestia-custom-light/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--headers.trusted-peers</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/ip4/10.0.0.125/udp/2121/webrtc-direct/certhash/uEiBXDYwH1McBsLM2aEc3SdvAuhq2ZQ0RUgbjgTvXMQm7LA/p2p/12D3KooWAVsZ36CdczaEXNNnDpsPcVyAnbeBe5EPG7AjttRGfux7</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--rpc.port</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">42069</span></span></code></pre></div><h2 id="funding-and-testing" tabindex="-1">Funding and Testing <a class="header-anchor" href="#funding-and-testing" aria-label="Permalink to &quot;Funding and Testing&quot;">​</a></h2><p>Get the bridge node&#39;s account address:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">state</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">account-address</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--node.store</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.celestia-custom-bridge</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">state</span><span style="color:#24292E;"> </span><span style="color:#032F62;">account-address</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--node.store</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.celestia-custom-bridge</span></span></code></pre></div><p>Get the light node&#39;s account address:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">state</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">account-address</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--node.store</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.celestia-custom-light</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--url</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://localhost:42069</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">state</span><span style="color:#24292E;"> </span><span style="color:#032F62;">account-address</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--node.store</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.celestia-custom-light</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--url</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://localhost:42069</span></span></code></pre></div><p>Send funds to the light node:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bank</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">send</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">validator</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia1p8yx4yveuu6ushyccepsuknaqpqn9ppq07m4n3</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10000000</span><span style="color:#9ECBFF;">utia</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--chain-id</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--keyring-backend</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--fees</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">500</span><span style="color:#9ECBFF;">utia</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bank</span><span style="color:#24292E;"> </span><span style="color:#032F62;">send</span><span style="color:#24292E;"> </span><span style="color:#032F62;">validator</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia1p8yx4yveuu6ushyccepsuknaqpqn9ppq07m4n3</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10000000</span><span style="color:#032F62;">utia</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--chain-id</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--keyring-backend</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--fees</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">500</span><span style="color:#032F62;">utia</span></span></code></pre></div><p>Test by submitting a blob from the light node:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">blob</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">submit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0x4772756763686174</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&quot;Simplicity is the ultimate sophistication.&quot; -Leonardo da Vinci&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--node.store</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.celestia-custom-light</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--url</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://localhost:42069</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">blob</span><span style="color:#24292E;"> </span><span style="color:#032F62;">submit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0x4772756763686174</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&quot;Simplicity is the ultimate sophistication.&quot; -Leonardo da Vinci&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--node.store</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.celestia-custom-light</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--url</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://localhost:42069</span></span></code></pre></div>`,38),e=[o];function t(c,r,E,i,y,d){return a(),n("div",null,e)}const u=s(l,[["render",t]]);export{h as __pageData,u as default};
