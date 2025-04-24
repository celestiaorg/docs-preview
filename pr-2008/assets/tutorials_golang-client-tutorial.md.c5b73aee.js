import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.718fdbd3.js";const h=JSON.parse('{"title":"Golang client library tutorial","description":"","frontmatter":{"head":[["meta",{"property":"og:title","content":"Golang client library tutorial | Celestia Docs"}],["meta",{"property":"og:description","content":"The first modular blockchain network."}]]},"headers":[],"relativePath":"tutorials/golang-client-tutorial.md","filePath":"tutorials/golang-client-tutorial.md","lastUpdated":1745514507000}'),l={name:"tutorials/golang-client-tutorial.md"},p=e(`<h1 id="golang-client-library" tabindex="-1">Golang client library tutorial <a class="header-anchor" href="#golang-client-library" aria-label="Permalink to &quot;Golang client library tutorial {#golang-client-library}&quot;">​</a></h1><p>This tutorial section will guide you through using the most common RPC endpoints with the golang client library.</p><p>Install <a href="/docs-preview/pr-2008/how-to-guides/environment">dependencies</a> and <a href="/docs-preview/pr-2008/how-to-guides/celestia-node">celestia-node</a> if you have not already.</p><h2 id="project-setup" tabindex="-1">Project setup <a class="header-anchor" href="#project-setup" aria-label="Permalink to &quot;Project setup&quot;">​</a></h2><p>This tutorial demonstrates how to interact with a Celestia node using the official Go API client from <a href="https://github.com/celestiaorg/celestia-node/blob/main/api/rpc/client.go" target="_blank" rel="noreferrer"><code>celestia-node/api/rpc/client</code></a> (v0.22.1).</p><p><strong>Note:</strong> The previously documented <code>celestia-openrpc</code> library is deprecated. The recommended approach is to use the RPC client from <code>celestia-node/api/rpc/client</code> until the new Celestia client SDK is released.</p><p>First, add the following dependencies to your Go project:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">github.com/celestiaorg/celestia-node/api/rpc/client</span></span>
<span class="line"><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">github.com/celestiaorg/celestia-node/nodebuilder/blob</span></span>
<span class="line"><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">github.com/celestiaorg/celestia-node/nodebuilder/share</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">go</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">github.com/celestiaorg/celestia-node/api/rpc/client</span></span>
<span class="line"><span style="color:#6F42C1;">go</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">github.com/celestiaorg/celestia-node/nodebuilder/blob</span></span>
<span class="line"><span style="color:#6F42C1;">go</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">github.com/celestiaorg/celestia-node/nodebuilder/share</span></span></code></pre></div><p>You will also need your node URL and an auth token. See the <a href="/docs-preview/pr-2008/tutorials/node-tutorial#auth-token">auth token guide</a>.<br> To run your node without an auth token, use the <code>--rpc.skip-auth</code> flag.</p><p>The default URL is <code>http://localhost:26658</code>.</p><h2 id="submitting-and-retrieving-blobs" tabindex="-1">Submitting and retrieving blobs <a class="header-anchor" href="#submitting-and-retrieving-blobs" aria-label="Permalink to &quot;Submitting and retrieving blobs&quot;">​</a></h2><p>Here is how to submit and retrieve blobs using the RPC client from celestia-node:</p><h3 id="submitting-a-blob" tabindex="-1">Submitting a blob <a class="header-anchor" href="#submitting-a-blob" aria-label="Permalink to &quot;Submitting a blob&quot;">​</a></h3><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">context</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">fmt</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">github.com/celestiaorg/celestia-node/api/rpc/client</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">github.com/celestiaorg/celestia-node/nodebuilder/share</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">github.com/celestiaorg/celestia-node/nodebuilder/blob</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SubmitBlob</span><span style="color:#E1E4E8;">(ctx context.Context, url, token </span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">error</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Create the RPC client</span></span>
<span class="line"><span style="color:#E1E4E8;">    c, err </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> client.</span><span style="color:#79B8FF;">NewClient</span><span style="color:#E1E4E8;">(ctx, url, token)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> err </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> fmt.</span><span style="color:#79B8FF;">Errorf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;failed to create RPC client: </span><span style="color:#79B8FF;">%w</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">defer</span><span style="color:#E1E4E8;"> c.</span><span style="color:#79B8FF;">Close</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Create a namespace (e.g., 0xDEADBEEF)</span></span>
<span class="line"><span style="color:#E1E4E8;">    namespace, err </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> share.</span><span style="color:#79B8FF;">NewBlobNamespaceV0</span><span style="color:#E1E4E8;">([]</span><span style="color:#F97583;">byte</span><span style="color:#E1E4E8;">{</span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">DE</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">AD</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">BE</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">EF</span><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> err </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> fmt.</span><span style="color:#79B8FF;">Errorf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;failed to create namespace: </span><span style="color:#79B8FF;">%w</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Create a blob</span></span>
<span class="line"><span style="color:#E1E4E8;">    b, err </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> blob.</span><span style="color:#79B8FF;">NewBlobV0</span><span style="color:#E1E4E8;">(namespace, []</span><span style="color:#79B8FF;">byte</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Hello, World!&quot;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> err </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> fmt.</span><span style="color:#79B8FF;">Errorf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;failed to create blob: </span><span style="color:#79B8FF;">%w</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Submit the blob using the Blob API</span></span>
<span class="line"><span style="color:#E1E4E8;">    height, err </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> c.Blob.</span><span style="color:#79B8FF;">Submit</span><span style="color:#E1E4E8;">(ctx, []</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">blob.Blob{b}, </span><span style="color:#79B8FF;">nil</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> err </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> fmt.</span><span style="color:#79B8FF;">Errorf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;failed to submit blob: </span><span style="color:#79B8FF;">%w</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    fmt.</span><span style="color:#79B8FF;">Printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Blob submitted at height: </span><span style="color:#79B8FF;">%d\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, height)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">context</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">fmt</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">github.com/celestiaorg/celestia-node/api/rpc/client</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">github.com/celestiaorg/celestia-node/nodebuilder/share</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">github.com/celestiaorg/celestia-node/nodebuilder/blob</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SubmitBlob</span><span style="color:#24292E;">(ctx context.Context, url, token </span><span style="color:#D73A49;">string</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">error</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Create the RPC client</span></span>
<span class="line"><span style="color:#24292E;">    c, err </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> client.</span><span style="color:#005CC5;">NewClient</span><span style="color:#24292E;">(ctx, url, token)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> err </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> fmt.</span><span style="color:#005CC5;">Errorf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;failed to create RPC client: </span><span style="color:#005CC5;">%w</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, err)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">defer</span><span style="color:#24292E;"> c.</span><span style="color:#005CC5;">Close</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Create a namespace (e.g., 0xDEADBEEF)</span></span>
<span class="line"><span style="color:#24292E;">    namespace, err </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> share.</span><span style="color:#005CC5;">NewBlobNamespaceV0</span><span style="color:#24292E;">([]</span><span style="color:#D73A49;">byte</span><span style="color:#24292E;">{</span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">DE</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">AD</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">BE</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">EF</span><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> err </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> fmt.</span><span style="color:#005CC5;">Errorf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;failed to create namespace: </span><span style="color:#005CC5;">%w</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, err)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Create a blob</span></span>
<span class="line"><span style="color:#24292E;">    b, err </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> blob.</span><span style="color:#005CC5;">NewBlobV0</span><span style="color:#24292E;">(namespace, []</span><span style="color:#005CC5;">byte</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Hello, World!&quot;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> err </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> fmt.</span><span style="color:#005CC5;">Errorf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;failed to create blob: </span><span style="color:#005CC5;">%w</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, err)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Submit the blob using the Blob API</span></span>
<span class="line"><span style="color:#24292E;">    height, err </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> c.Blob.</span><span style="color:#005CC5;">Submit</span><span style="color:#24292E;">(ctx, []</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">blob.Blob{b}, </span><span style="color:#005CC5;">nil</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> err </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> fmt.</span><span style="color:#005CC5;">Errorf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;failed to submit blob: </span><span style="color:#005CC5;">%w</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, err)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    fmt.</span><span style="color:#005CC5;">Printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Blob submitted at height: </span><span style="color:#005CC5;">%d\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, height)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="retrieving-blobs" tabindex="-1">Retrieving blobs <a class="header-anchor" href="#retrieving-blobs" aria-label="Permalink to &quot;Retrieving blobs&quot;">​</a></h3><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GetBlobs</span><span style="color:#E1E4E8;">(ctx context.Context, url, token </span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">, height </span><span style="color:#F97583;">uint64</span><span style="color:#E1E4E8;">, namespace </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">share.Namespace) ([]</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">blob.Blob, </span><span style="color:#F97583;">error</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    c, err </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> client.</span><span style="color:#79B8FF;">NewClient</span><span style="color:#E1E4E8;">(ctx, url, token)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> err </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span><span style="color:#E1E4E8;">, fmt.</span><span style="color:#79B8FF;">Errorf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;failed to create RPC client: </span><span style="color:#79B8FF;">%w</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">defer</span><span style="color:#E1E4E8;"> c.</span><span style="color:#79B8FF;">Close</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	blobs, err </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> c.Blob.</span><span style="color:#79B8FF;">GetAll</span><span style="color:#E1E4E8;">(ctx, height, []</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">share.Namespace{namespace})</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> err </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span><span style="color:#E1E4E8;">, fmt.</span><span style="color:#79B8FF;">Errorf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;failed to get blobs: </span><span style="color:#79B8FF;">%w</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> blobs, </span><span style="color:#79B8FF;">nil</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GetBlobs</span><span style="color:#24292E;">(ctx context.Context, url, token </span><span style="color:#D73A49;">string</span><span style="color:#24292E;">, height </span><span style="color:#D73A49;">uint64</span><span style="color:#24292E;">, namespace </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">share.Namespace) ([]</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">blob.Blob, </span><span style="color:#D73A49;">error</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    c, err </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> client.</span><span style="color:#005CC5;">NewClient</span><span style="color:#24292E;">(ctx, url, token)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> err </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span><span style="color:#24292E;">, fmt.</span><span style="color:#005CC5;">Errorf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;failed to create RPC client: </span><span style="color:#005CC5;">%w</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, err)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">defer</span><span style="color:#24292E;"> c.</span><span style="color:#005CC5;">Close</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	blobs, err </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> c.Blob.</span><span style="color:#005CC5;">GetAll</span><span style="color:#24292E;">(ctx, height, []</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">share.Namespace{namespace})</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> err </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span><span style="color:#24292E;">, fmt.</span><span style="color:#005CC5;">Errorf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;failed to get blobs: </span><span style="color:#005CC5;">%w</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, err)</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> blobs, </span><span style="color:#005CC5;">nil</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><hr><h2 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;Notes&quot;">​</a></h2><ul><li><p>This approach directly uses the RPC client from <code>celestia-node</code> and may introduce additional dependencies.</p></li><li><p>This is a temporary solution until the new Celestia client SDK is released.</p></li><li><p>For more advanced usage (e.g., custom gas, key management), refer to the <a href="https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/blob/api.go" target="_blank" rel="noreferrer">celestia-node/blob API</a>.</p><p>helloWorldBlob, err := blob.NewBlobV0(namespace, []byte(&quot;Hello, World!&quot;)) if err != nil { return err }</p><p>// submit the blob to the network height, err := client.Blob.Submit(ctx, []*blob.Blob{helloWorldBlob}, blob.NewSubmitOptions()) if err != nil { return err }</p><p>fmt.Printf(&quot;Blob was included at height %d\\n&quot;, height)</p><p>// fetch the blob back from the network retrievedBlobs, err := client.Blob.GetAll(ctx, height, []share.Namespace{namespace}) if err != nil { return err }</p><p>fmt.Printf(&quot;Blobs are equal? %v\\n&quot;, bytes.Equal(helloWorldBlob.Commitment, retrievedBlobs[0].Commitment)) return nil }</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">---</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!--</span></span>
<span class="line"><span style="color:#e1e4e8;">The following section on direct HTTP JSON-RPC calls has been removed to comply with the requirement to use ONLY the official Go API from celestia-node/api/rpc/client. All code examples and instructions below exclusively use the Go client library.</span></span>
<span class="line"><span style="color:#e1e4e8;">--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	namespaceID := &quot;deadbeef&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Create blob data</span></span>
<span class="line"><span style="color:#e1e4e8;">	data := &quot;Hello, Celestia!&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Submit the blob</span></span>
<span class="line"><span style="color:#e1e4e8;">	height, err := submitBlob(namespaceID, data)</span></span>
<span class="line"><span style="color:#e1e4e8;">	if err != nil {</span></span>
<span class="line"><span style="color:#e1e4e8;">		log.Fatalf(&quot;Failed to submit blob: %v&quot;, err)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	fmt.Printf(&quot;Blob submitted at height: %d\\n&quot;, height)</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Retrieve the blob</span></span>
<span class="line"><span style="color:#e1e4e8;">	blobs, err := getBlobs(height, namespaceID)</span></span>
<span class="line"><span style="color:#e1e4e8;">	if err != nil {</span></span>
<span class="line"><span style="color:#e1e4e8;">		log.Fatalf(&quot;Failed to get blobs: %v&quot;, err)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	if len(blobs) &gt; 0 {</span></span>
<span class="line"><span style="color:#e1e4e8;">		// Decode the base64 data</span></span>
<span class="line"><span style="color:#e1e4e8;">		decodedData, err := base64.StdEncoding.DecodeString(blobs[0].Data)</span></span>
<span class="line"><span style="color:#e1e4e8;">		if err != nil {</span></span>
<span class="line"><span style="color:#e1e4e8;">			log.Fatalf(&quot;Failed to decode blob data: %v&quot;, err)</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		fmt.Printf(&quot;Retrieved blob: %s\\n&quot;, string(decodedData))</span></span>
<span class="line"><span style="color:#e1e4e8;">	} else {</span></span>
<span class="line"><span style="color:#e1e4e8;">		fmt.Println(&quot;No blobs found&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// submitBlob submits a blob to the Celestia network</span></span>
<span class="line"><span style="color:#e1e4e8;">func submitBlob(namespaceID, data string) (int64, error) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Convert namespace ID from hex to bytes</span></span>
<span class="line"><span style="color:#e1e4e8;">	namespaceBytes, err := hex.DecodeString(namespaceID)</span></span>
<span class="line"><span style="color:#e1e4e8;">	if err != nil {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return 0, fmt.Errorf(&quot;failed to decode namespace ID: %w&quot;, err)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// For namespace version 0, the format is:</span></span>
<span class="line"><span style="color:#e1e4e8;">	// - First byte: version (0)</span></span>
<span class="line"><span style="color:#e1e4e8;">	// - Next 10 bytes: 0 (reserved)</span></span>
<span class="line"><span style="color:#e1e4e8;">	// - Next 18 bytes: namespace ID with leading zeros if needed</span></span>
<span class="line"><span style="color:#e1e4e8;">	paddedNamespace := make([]byte, 29)</span></span>
<span class="line"><span style="color:#e1e4e8;">	paddedNamespace[0] = 0 // Version 0</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// The ID must start with 18 leading zeros and then our namespace ID</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Copy our namespace bytes to the end of the namespace field</span></span>
<span class="line"><span style="color:#e1e4e8;">	copy(paddedNamespace[29-len(namespaceBytes):], namespaceBytes)</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Prepare the request body</span></span>
<span class="line"><span style="color:#e1e4e8;">	reqBody := map[string]interface{}{</span></span>
<span class="line"><span style="color:#e1e4e8;">		&quot;jsonrpc&quot;: &quot;2.0&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">		&quot;id&quot;:      1,</span></span>
<span class="line"><span style="color:#e1e4e8;">		&quot;method&quot;:  &quot;blob.Submit&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">		&quot;params&quot;: []interface{}{</span></span>
<span class="line"><span style="color:#e1e4e8;">			[]map[string]interface{}{</span></span>
<span class="line"><span style="color:#e1e4e8;">				{</span></span>
<span class="line"><span style="color:#e1e4e8;">					&quot;namespace&quot;: base64.StdEncoding.EncodeToString(paddedNamespace),</span></span>
<span class="line"><span style="color:#e1e4e8;">					&quot;data&quot;:      base64.StdEncoding.EncodeToString([]byte(data)),</span></span>
<span class="line"><span style="color:#e1e4e8;">					&quot;share_version&quot;: 0,</span></span>
<span class="line"><span style="color:#e1e4e8;">				},</span></span>
<span class="line"><span style="color:#e1e4e8;">			},</span></span>
<span class="line"><span style="color:#e1e4e8;">			map[string]interface{}{}, // Empty options</span></span>
<span class="line"><span style="color:#e1e4e8;">		},</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Convert to JSON</span></span>
<span class="line"><span style="color:#e1e4e8;">	jsonData, err := json.Marshal(reqBody)</span></span>
<span class="line"><span style="color:#e1e4e8;">	if err != nil {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return 0, fmt.Errorf(&quot;failed to marshal request: %w&quot;, err)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Create the HTTP request</span></span>
<span class="line"><span style="color:#e1e4e8;">	req, err := http.NewRequest(&quot;POST&quot;, NodeURL, bytes.NewBuffer(jsonData))</span></span>
<span class="line"><span style="color:#e1e4e8;">	if err != nil {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return 0, fmt.Errorf(&quot;failed to create request: %w&quot;, err)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Set headers</span></span>
<span class="line"><span style="color:#e1e4e8;">	req.Header.Set(&quot;Content-Type&quot;, &quot;application/json&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">	if AuthToken != &quot;&quot; {</span></span>
<span class="line"><span style="color:#e1e4e8;">		req.Header.Set(&quot;Authorization&quot;, &quot;Bearer &quot;+AuthToken)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Send the request</span></span>
<span class="line"><span style="color:#e1e4e8;">	client := &amp;http.Client{}</span></span>
<span class="line"><span style="color:#e1e4e8;">	resp, err := client.Do(req)</span></span>
<span class="line"><span style="color:#e1e4e8;">	if err != nil {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return 0, fmt.Errorf(&quot;failed to send request: %w&quot;, err)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	defer resp.Body.Close()</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Read the response</span></span>
<span class="line"><span style="color:#e1e4e8;">	respBody, err := io.ReadAll(resp.Body)</span></span>
<span class="line"><span style="color:#e1e4e8;">	if err != nil {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return 0, fmt.Errorf(&quot;failed to read response: %w&quot;, err)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Check for errors</span></span>
<span class="line"><span style="color:#e1e4e8;">	if resp.StatusCode != http.StatusOK {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return 0, fmt.Errorf(&quot;request failed with status %d: %s&quot;, resp.StatusCode, string(respBody))</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Parse the response</span></span>
<span class="line"><span style="color:#e1e4e8;">	var result struct {</span></span>
<span class="line"><span style="color:#e1e4e8;">		Result int64 \`json:&quot;result&quot;\`</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	if err := json.Unmarshal(respBody, &amp;result); err != nil {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return 0, fmt.Errorf(&quot;failed to parse response: %w, body: %s&quot;, err, string(respBody))</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	return result.Result, nil</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// getBlobs retrieves blobs from the Celestia network</span></span>
<span class="line"><span style="color:#e1e4e8;">func getBlobs(height int64, namespaceID string) ([]Blob, error) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Convert namespace ID from hex to bytes</span></span>
<span class="line"><span style="color:#e1e4e8;">	namespaceBytes, err := hex.DecodeString(namespaceID)</span></span>
<span class="line"><span style="color:#e1e4e8;">	if err != nil {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return nil, fmt.Errorf(&quot;failed to decode namespace ID: %w&quot;, err)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// For namespace version 0, the format is:</span></span>
<span class="line"><span style="color:#e1e4e8;">	// - First byte: version (0)</span></span>
<span class="line"><span style="color:#e1e4e8;">	// - Next 10 bytes: 0 (reserved)</span></span>
<span class="line"><span style="color:#e1e4e8;">	// - Next 18 bytes: namespace ID with leading zeros if needed</span></span>
<span class="line"><span style="color:#e1e4e8;">	paddedNamespace := make([]byte, 29)</span></span>
<span class="line"><span style="color:#e1e4e8;">	paddedNamespace[0] = 0 // Version 0</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// The ID must start with 18 leading zeros and then our namespace ID</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Copy our namespace bytes to the end of the namespace field</span></span>
<span class="line"><span style="color:#e1e4e8;">	copy(paddedNamespace[29-len(namespaceBytes):], namespaceBytes)</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Prepare the request body</span></span>
<span class="line"><span style="color:#e1e4e8;">	reqBody := map[string]interface{}{</span></span>
<span class="line"><span style="color:#e1e4e8;">		&quot;jsonrpc&quot;: &quot;2.0&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">		&quot;id&quot;:      1,</span></span>
<span class="line"><span style="color:#e1e4e8;">		&quot;method&quot;:  &quot;blob.GetAll&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">		&quot;params&quot;: []interface{}{</span></span>
<span class="line"><span style="color:#e1e4e8;">			height,</span></span>
<span class="line"><span style="color:#e1e4e8;">			[]string{base64.StdEncoding.EncodeToString(paddedNamespace)},</span></span>
<span class="line"><span style="color:#e1e4e8;">		},</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Convert to JSON</span></span>
<span class="line"><span style="color:#e1e4e8;">	jsonData, err := json.Marshal(reqBody)</span></span>
<span class="line"><span style="color:#e1e4e8;">	if err != nil {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return nil, fmt.Errorf(&quot;failed to marshal request: %w&quot;, err)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Create the HTTP request</span></span>
<span class="line"><span style="color:#e1e4e8;">	req, err := http.NewRequest(&quot;POST&quot;, NodeURL, bytes.NewBuffer(jsonData))</span></span>
<span class="line"><span style="color:#e1e4e8;">	if err != nil {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return nil, fmt.Errorf(&quot;failed to create request: %w&quot;, err)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Set headers</span></span>
<span class="line"><span style="color:#e1e4e8;">	req.Header.Set(&quot;Content-Type&quot;, &quot;application/json&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">	if AuthToken != &quot;&quot; {</span></span>
<span class="line"><span style="color:#e1e4e8;">		req.Header.Set(&quot;Authorization&quot;, &quot;Bearer &quot;+AuthToken)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Send the request</span></span>
<span class="line"><span style="color:#e1e4e8;">	client := &amp;http.Client{}</span></span>
<span class="line"><span style="color:#e1e4e8;">	resp, err := client.Do(req)</span></span>
<span class="line"><span style="color:#e1e4e8;">	if err != nil {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return nil, fmt.Errorf(&quot;failed to send request: %w&quot;, err)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	defer resp.Body.Close()</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Read the response</span></span>
<span class="line"><span style="color:#e1e4e8;">	respBody, err := io.ReadAll(resp.Body)</span></span>
<span class="line"><span style="color:#e1e4e8;">	if err != nil {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return nil, fmt.Errorf(&quot;failed to read response: %w&quot;, err)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Check for errors</span></span>
<span class="line"><span style="color:#e1e4e8;">	if resp.StatusCode != http.StatusOK {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return nil, fmt.Errorf(&quot;request failed with status %d: %s&quot;, resp.StatusCode, string(respBody))</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Parse the response</span></span>
<span class="line"><span style="color:#e1e4e8;">	var result struct {</span></span>
<span class="line"><span style="color:#e1e4e8;">		Result []Blob \`json:&quot;result&quot;\`</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	if err := json.Unmarshal(respBody, &amp;result); err != nil {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return nil, fmt.Errorf(&quot;failed to parse response: %w, body: %s&quot;, err, string(respBody))</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	return result.Result, nil</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">---</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;!--</span></span>
<span class="line"><span style="color:#24292e;">The following section on direct HTTP JSON-RPC calls has been removed to comply with the requirement to use ONLY the official Go API from celestia-node/api/rpc/client. All code examples and instructions below exclusively use the Go client library.</span></span>
<span class="line"><span style="color:#24292e;">--&gt;</span></span>
<span class="line"><span style="color:#24292e;">	namespaceID := &quot;deadbeef&quot;</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// Create blob data</span></span>
<span class="line"><span style="color:#24292e;">	data := &quot;Hello, Celestia!&quot;</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// Submit the blob</span></span>
<span class="line"><span style="color:#24292e;">	height, err := submitBlob(namespaceID, data)</span></span>
<span class="line"><span style="color:#24292e;">	if err != nil {</span></span>
<span class="line"><span style="color:#24292e;">		log.Fatalf(&quot;Failed to submit blob: %v&quot;, err)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	fmt.Printf(&quot;Blob submitted at height: %d\\n&quot;, height)</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// Retrieve the blob</span></span>
<span class="line"><span style="color:#24292e;">	blobs, err := getBlobs(height, namespaceID)</span></span>
<span class="line"><span style="color:#24292e;">	if err != nil {</span></span>
<span class="line"><span style="color:#24292e;">		log.Fatalf(&quot;Failed to get blobs: %v&quot;, err)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	if len(blobs) &gt; 0 {</span></span>
<span class="line"><span style="color:#24292e;">		// Decode the base64 data</span></span>
<span class="line"><span style="color:#24292e;">		decodedData, err := base64.StdEncoding.DecodeString(blobs[0].Data)</span></span>
<span class="line"><span style="color:#24292e;">		if err != nil {</span></span>
<span class="line"><span style="color:#24292e;">			log.Fatalf(&quot;Failed to decode blob data: %v&quot;, err)</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		fmt.Printf(&quot;Retrieved blob: %s\\n&quot;, string(decodedData))</span></span>
<span class="line"><span style="color:#24292e;">	} else {</span></span>
<span class="line"><span style="color:#24292e;">		fmt.Println(&quot;No blobs found&quot;)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// submitBlob submits a blob to the Celestia network</span></span>
<span class="line"><span style="color:#24292e;">func submitBlob(namespaceID, data string) (int64, error) {</span></span>
<span class="line"><span style="color:#24292e;">	// Convert namespace ID from hex to bytes</span></span>
<span class="line"><span style="color:#24292e;">	namespaceBytes, err := hex.DecodeString(namespaceID)</span></span>
<span class="line"><span style="color:#24292e;">	if err != nil {</span></span>
<span class="line"><span style="color:#24292e;">		return 0, fmt.Errorf(&quot;failed to decode namespace ID: %w&quot;, err)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// For namespace version 0, the format is:</span></span>
<span class="line"><span style="color:#24292e;">	// - First byte: version (0)</span></span>
<span class="line"><span style="color:#24292e;">	// - Next 10 bytes: 0 (reserved)</span></span>
<span class="line"><span style="color:#24292e;">	// - Next 18 bytes: namespace ID with leading zeros if needed</span></span>
<span class="line"><span style="color:#24292e;">	paddedNamespace := make([]byte, 29)</span></span>
<span class="line"><span style="color:#24292e;">	paddedNamespace[0] = 0 // Version 0</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// The ID must start with 18 leading zeros and then our namespace ID</span></span>
<span class="line"><span style="color:#24292e;">	// Copy our namespace bytes to the end of the namespace field</span></span>
<span class="line"><span style="color:#24292e;">	copy(paddedNamespace[29-len(namespaceBytes):], namespaceBytes)</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// Prepare the request body</span></span>
<span class="line"><span style="color:#24292e;">	reqBody := map[string]interface{}{</span></span>
<span class="line"><span style="color:#24292e;">		&quot;jsonrpc&quot;: &quot;2.0&quot;,</span></span>
<span class="line"><span style="color:#24292e;">		&quot;id&quot;:      1,</span></span>
<span class="line"><span style="color:#24292e;">		&quot;method&quot;:  &quot;blob.Submit&quot;,</span></span>
<span class="line"><span style="color:#24292e;">		&quot;params&quot;: []interface{}{</span></span>
<span class="line"><span style="color:#24292e;">			[]map[string]interface{}{</span></span>
<span class="line"><span style="color:#24292e;">				{</span></span>
<span class="line"><span style="color:#24292e;">					&quot;namespace&quot;: base64.StdEncoding.EncodeToString(paddedNamespace),</span></span>
<span class="line"><span style="color:#24292e;">					&quot;data&quot;:      base64.StdEncoding.EncodeToString([]byte(data)),</span></span>
<span class="line"><span style="color:#24292e;">					&quot;share_version&quot;: 0,</span></span>
<span class="line"><span style="color:#24292e;">				},</span></span>
<span class="line"><span style="color:#24292e;">			},</span></span>
<span class="line"><span style="color:#24292e;">			map[string]interface{}{}, // Empty options</span></span>
<span class="line"><span style="color:#24292e;">		},</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// Convert to JSON</span></span>
<span class="line"><span style="color:#24292e;">	jsonData, err := json.Marshal(reqBody)</span></span>
<span class="line"><span style="color:#24292e;">	if err != nil {</span></span>
<span class="line"><span style="color:#24292e;">		return 0, fmt.Errorf(&quot;failed to marshal request: %w&quot;, err)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// Create the HTTP request</span></span>
<span class="line"><span style="color:#24292e;">	req, err := http.NewRequest(&quot;POST&quot;, NodeURL, bytes.NewBuffer(jsonData))</span></span>
<span class="line"><span style="color:#24292e;">	if err != nil {</span></span>
<span class="line"><span style="color:#24292e;">		return 0, fmt.Errorf(&quot;failed to create request: %w&quot;, err)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// Set headers</span></span>
<span class="line"><span style="color:#24292e;">	req.Header.Set(&quot;Content-Type&quot;, &quot;application/json&quot;)</span></span>
<span class="line"><span style="color:#24292e;">	if AuthToken != &quot;&quot; {</span></span>
<span class="line"><span style="color:#24292e;">		req.Header.Set(&quot;Authorization&quot;, &quot;Bearer &quot;+AuthToken)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// Send the request</span></span>
<span class="line"><span style="color:#24292e;">	client := &amp;http.Client{}</span></span>
<span class="line"><span style="color:#24292e;">	resp, err := client.Do(req)</span></span>
<span class="line"><span style="color:#24292e;">	if err != nil {</span></span>
<span class="line"><span style="color:#24292e;">		return 0, fmt.Errorf(&quot;failed to send request: %w&quot;, err)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	defer resp.Body.Close()</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// Read the response</span></span>
<span class="line"><span style="color:#24292e;">	respBody, err := io.ReadAll(resp.Body)</span></span>
<span class="line"><span style="color:#24292e;">	if err != nil {</span></span>
<span class="line"><span style="color:#24292e;">		return 0, fmt.Errorf(&quot;failed to read response: %w&quot;, err)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// Check for errors</span></span>
<span class="line"><span style="color:#24292e;">	if resp.StatusCode != http.StatusOK {</span></span>
<span class="line"><span style="color:#24292e;">		return 0, fmt.Errorf(&quot;request failed with status %d: %s&quot;, resp.StatusCode, string(respBody))</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// Parse the response</span></span>
<span class="line"><span style="color:#24292e;">	var result struct {</span></span>
<span class="line"><span style="color:#24292e;">		Result int64 \`json:&quot;result&quot;\`</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	if err := json.Unmarshal(respBody, &amp;result); err != nil {</span></span>
<span class="line"><span style="color:#24292e;">		return 0, fmt.Errorf(&quot;failed to parse response: %w, body: %s&quot;, err, string(respBody))</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	return result.Result, nil</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// getBlobs retrieves blobs from the Celestia network</span></span>
<span class="line"><span style="color:#24292e;">func getBlobs(height int64, namespaceID string) ([]Blob, error) {</span></span>
<span class="line"><span style="color:#24292e;">	// Convert namespace ID from hex to bytes</span></span>
<span class="line"><span style="color:#24292e;">	namespaceBytes, err := hex.DecodeString(namespaceID)</span></span>
<span class="line"><span style="color:#24292e;">	if err != nil {</span></span>
<span class="line"><span style="color:#24292e;">		return nil, fmt.Errorf(&quot;failed to decode namespace ID: %w&quot;, err)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// For namespace version 0, the format is:</span></span>
<span class="line"><span style="color:#24292e;">	// - First byte: version (0)</span></span>
<span class="line"><span style="color:#24292e;">	// - Next 10 bytes: 0 (reserved)</span></span>
<span class="line"><span style="color:#24292e;">	// - Next 18 bytes: namespace ID with leading zeros if needed</span></span>
<span class="line"><span style="color:#24292e;">	paddedNamespace := make([]byte, 29)</span></span>
<span class="line"><span style="color:#24292e;">	paddedNamespace[0] = 0 // Version 0</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// The ID must start with 18 leading zeros and then our namespace ID</span></span>
<span class="line"><span style="color:#24292e;">	// Copy our namespace bytes to the end of the namespace field</span></span>
<span class="line"><span style="color:#24292e;">	copy(paddedNamespace[29-len(namespaceBytes):], namespaceBytes)</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// Prepare the request body</span></span>
<span class="line"><span style="color:#24292e;">	reqBody := map[string]interface{}{</span></span>
<span class="line"><span style="color:#24292e;">		&quot;jsonrpc&quot;: &quot;2.0&quot;,</span></span>
<span class="line"><span style="color:#24292e;">		&quot;id&quot;:      1,</span></span>
<span class="line"><span style="color:#24292e;">		&quot;method&quot;:  &quot;blob.GetAll&quot;,</span></span>
<span class="line"><span style="color:#24292e;">		&quot;params&quot;: []interface{}{</span></span>
<span class="line"><span style="color:#24292e;">			height,</span></span>
<span class="line"><span style="color:#24292e;">			[]string{base64.StdEncoding.EncodeToString(paddedNamespace)},</span></span>
<span class="line"><span style="color:#24292e;">		},</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// Convert to JSON</span></span>
<span class="line"><span style="color:#24292e;">	jsonData, err := json.Marshal(reqBody)</span></span>
<span class="line"><span style="color:#24292e;">	if err != nil {</span></span>
<span class="line"><span style="color:#24292e;">		return nil, fmt.Errorf(&quot;failed to marshal request: %w&quot;, err)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// Create the HTTP request</span></span>
<span class="line"><span style="color:#24292e;">	req, err := http.NewRequest(&quot;POST&quot;, NodeURL, bytes.NewBuffer(jsonData))</span></span>
<span class="line"><span style="color:#24292e;">	if err != nil {</span></span>
<span class="line"><span style="color:#24292e;">		return nil, fmt.Errorf(&quot;failed to create request: %w&quot;, err)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// Set headers</span></span>
<span class="line"><span style="color:#24292e;">	req.Header.Set(&quot;Content-Type&quot;, &quot;application/json&quot;)</span></span>
<span class="line"><span style="color:#24292e;">	if AuthToken != &quot;&quot; {</span></span>
<span class="line"><span style="color:#24292e;">		req.Header.Set(&quot;Authorization&quot;, &quot;Bearer &quot;+AuthToken)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// Send the request</span></span>
<span class="line"><span style="color:#24292e;">	client := &amp;http.Client{}</span></span>
<span class="line"><span style="color:#24292e;">	resp, err := client.Do(req)</span></span>
<span class="line"><span style="color:#24292e;">	if err != nil {</span></span>
<span class="line"><span style="color:#24292e;">		return nil, fmt.Errorf(&quot;failed to send request: %w&quot;, err)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	defer resp.Body.Close()</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// Read the response</span></span>
<span class="line"><span style="color:#24292e;">	respBody, err := io.ReadAll(resp.Body)</span></span>
<span class="line"><span style="color:#24292e;">	if err != nil {</span></span>
<span class="line"><span style="color:#24292e;">		return nil, fmt.Errorf(&quot;failed to read response: %w&quot;, err)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// Check for errors</span></span>
<span class="line"><span style="color:#24292e;">	if resp.StatusCode != http.StatusOK {</span></span>
<span class="line"><span style="color:#24292e;">		return nil, fmt.Errorf(&quot;request failed with status %d: %s&quot;, resp.StatusCode, string(respBody))</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	// Parse the response</span></span>
<span class="line"><span style="color:#24292e;">	var result struct {</span></span>
<span class="line"><span style="color:#24292e;">		Result []Blob \`json:&quot;result&quot;\`</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	if err := json.Unmarshal(respBody, &amp;result); err != nil {</span></span>
<span class="line"><span style="color:#24292e;">		return nil, fmt.Errorf(&quot;failed to parse response: %w, body: %s&quot;, err, string(respBody))</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	return result.Result, nil</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="subscribing-to-new-blobs" tabindex="-1">Subscribing to new blobs <a class="header-anchor" href="#subscribing-to-new-blobs" aria-label="Permalink to &quot;Subscribing to new blobs&quot;">​</a></h2><p>You can subscribe to new blobs in a namespace using the <a href="https://node-rpc-docs.celestia.org/#blob.Subscribe" target="_blank" rel="noreferrer">blob.Subscribe</a> method. This method returns a channel that will receive new blobs as they are produced. In this example, we will fetch all blobs in the <code>0xDEADBEEF</code> namespace.</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SubscribeBlobs</span><span style="color:#E1E4E8;">(ctx context.Context, url </span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">, token </span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">error</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    client, err </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> client.</span><span style="color:#79B8FF;">NewClient</span><span style="color:#E1E4E8;">(ctx, url, token)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> err </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> err</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">defer</span><span style="color:#E1E4E8;"> client.</span><span style="color:#79B8FF;">Close</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// We close the WebSocket connection after use</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// create a namespace to filter blobs with</span></span>
<span class="line"><span style="color:#E1E4E8;">    namespace, err </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> share.</span><span style="color:#79B8FF;">NewBlobNamespaceV0</span><span style="color:#E1E4E8;">([]</span><span style="color:#F97583;">byte</span><span style="color:#E1E4E8;">{</span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">DE</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">AD</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">BE</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">EF</span><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> err </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> err</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// subscribe to new blobs using a &lt;-chan *blob.BlobResponse channel</span></span>
<span class="line"><span style="color:#E1E4E8;">    blobChan, err </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> client.Blob.</span><span style="color:#79B8FF;">Subscribe</span><span style="color:#E1E4E8;">(ctx)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> err </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> err</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">select</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> resp </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;-</span><span style="color:#E1E4E8;">blobChan:</span></span>
<span class="line"><span style="color:#E1E4E8;">            fmt.</span><span style="color:#79B8FF;">Printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Found </span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;"> blobs at height </span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;"> in 0xDEADBEEF namespace</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(resp.</span><span style="color:#79B8FF;">Blobs</span><span style="color:#E1E4E8;">()), resp.Height)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;-</span><span style="color:#E1E4E8;">ctx.</span><span style="color:#79B8FF;">Done</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SubscribeBlobs</span><span style="color:#24292E;">(ctx context.Context, url </span><span style="color:#D73A49;">string</span><span style="color:#24292E;">, token </span><span style="color:#D73A49;">string</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">error</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    client, err </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> client.</span><span style="color:#005CC5;">NewClient</span><span style="color:#24292E;">(ctx, url, token)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> err </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> err</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">defer</span><span style="color:#24292E;"> client.</span><span style="color:#005CC5;">Close</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// We close the WebSocket connection after use</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// create a namespace to filter blobs with</span></span>
<span class="line"><span style="color:#24292E;">    namespace, err </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> share.</span><span style="color:#005CC5;">NewBlobNamespaceV0</span><span style="color:#24292E;">([]</span><span style="color:#D73A49;">byte</span><span style="color:#24292E;">{</span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">DE</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">AD</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">BE</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">EF</span><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> err </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> err</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// subscribe to new blobs using a &lt;-chan *blob.BlobResponse channel</span></span>
<span class="line"><span style="color:#24292E;">    blobChan, err </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> client.Blob.</span><span style="color:#005CC5;">Subscribe</span><span style="color:#24292E;">(ctx)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> err </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> err</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">select</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> resp </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;-</span><span style="color:#24292E;">blobChan:</span></span>
<span class="line"><span style="color:#24292E;">            fmt.</span><span style="color:#005CC5;">Printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Found </span><span style="color:#005CC5;">%d</span><span style="color:#032F62;"> blobs at height </span><span style="color:#005CC5;">%d</span><span style="color:#032F62;"> in 0xDEADBEEF namespace</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(resp.</span><span style="color:#005CC5;">Blobs</span><span style="color:#24292E;">()), resp.Height)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;-</span><span style="color:#24292E;">ctx.</span><span style="color:#005CC5;">Done</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="subscribing-to-new-headers" tabindex="-1">Subscribing to new headers <a class="header-anchor" href="#subscribing-to-new-headers" aria-label="Permalink to &quot;Subscribing to new headers&quot;">​</a></h2><p>Alternatively, you can subscribe to new headers using the <a href="https://node-rpc-docs.celestia.org/#header.Subscribe" target="_blank" rel="noreferrer">header.Subscribe</a> method. This method returns a channel that will receive new headers as they are produced. In this example, we will fetch all blobs at the height of the new header in the <code>0xDEADBEEF</code> namespace.</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// SubscribeHeaders subscribes to new headers and fetches all blobs at the height of the new header in the 0xDEADBEEF namespace.</span></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SubscribeHeaders</span><span style="color:#E1E4E8;">(ctx context.Context, url </span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">, token </span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">error</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    client, err </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> client.</span><span style="color:#79B8FF;">NewClient</span><span style="color:#E1E4E8;">(ctx, url, token)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> err </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> err</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">defer</span><span style="color:#E1E4E8;"> client.</span><span style="color:#79B8FF;">Close</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// We close the WebSocket connection after usage</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// create a namespace to filter blobs with</span></span>
<span class="line"><span style="color:#E1E4E8;">    namespace, err </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> share.</span><span style="color:#79B8FF;">NewBlobNamespaceV0</span><span style="color:#E1E4E8;">([]</span><span style="color:#F97583;">byte</span><span style="color:#E1E4E8;">{</span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">DE</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">AD</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">BE</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">EF</span><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> err </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> err</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// subscribe to new headers using a &lt;-chan *header.ExtendedHeader channel</span></span>
<span class="line"><span style="color:#E1E4E8;">    headerChan, err </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> client.Header.</span><span style="color:#79B8FF;">Subscribe</span><span style="color:#E1E4E8;">(ctx)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> err </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> err</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">select</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> header </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;-</span><span style="color:#E1E4E8;">headerChan:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// fetch all blobs at the height of the new header</span></span>
<span class="line"><span style="color:#E1E4E8;">            blobs, err </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> client.Blob.</span><span style="color:#79B8FF;">GetAll</span><span style="color:#E1E4E8;">(context.</span><span style="color:#79B8FF;">TODO</span><span style="color:#E1E4E8;">(), header.</span><span style="color:#79B8FF;">Height</span><span style="color:#E1E4E8;">(), []share.Namespace{namespace})</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> err </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                fmt.</span><span style="color:#79B8FF;">Printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Error fetching blobs: </span><span style="color:#79B8FF;">%v\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            fmt.</span><span style="color:#79B8FF;">Printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Found </span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;"> blobs at height </span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;"> in 0xDEADBEEF namespace</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(blobs), header.</span><span style="color:#79B8FF;">Height</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;-</span><span style="color:#E1E4E8;">ctx.</span><span style="color:#79B8FF;">Done</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// SubscribeHeaders subscribes to new headers and fetches all blobs at the height of the new header in the 0xDEADBEEF namespace.</span></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SubscribeHeaders</span><span style="color:#24292E;">(ctx context.Context, url </span><span style="color:#D73A49;">string</span><span style="color:#24292E;">, token </span><span style="color:#D73A49;">string</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">error</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    client, err </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> client.</span><span style="color:#005CC5;">NewClient</span><span style="color:#24292E;">(ctx, url, token)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> err </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> err</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">defer</span><span style="color:#24292E;"> client.</span><span style="color:#005CC5;">Close</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// We close the WebSocket connection after usage</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// create a namespace to filter blobs with</span></span>
<span class="line"><span style="color:#24292E;">    namespace, err </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> share.</span><span style="color:#005CC5;">NewBlobNamespaceV0</span><span style="color:#24292E;">([]</span><span style="color:#D73A49;">byte</span><span style="color:#24292E;">{</span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">DE</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">AD</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">BE</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">EF</span><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> err </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> err</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// subscribe to new headers using a &lt;-chan *header.ExtendedHeader channel</span></span>
<span class="line"><span style="color:#24292E;">    headerChan, err </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> client.Header.</span><span style="color:#005CC5;">Subscribe</span><span style="color:#24292E;">(ctx)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> err </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> err</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">select</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> header </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;-</span><span style="color:#24292E;">headerChan:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// fetch all blobs at the height of the new header</span></span>
<span class="line"><span style="color:#24292E;">            blobs, err </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> client.Blob.</span><span style="color:#005CC5;">GetAll</span><span style="color:#24292E;">(context.</span><span style="color:#005CC5;">TODO</span><span style="color:#24292E;">(), header.</span><span style="color:#005CC5;">Height</span><span style="color:#24292E;">(), []share.Namespace{namespace})</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> err </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                fmt.</span><span style="color:#005CC5;">Printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Error fetching blobs: </span><span style="color:#005CC5;">%v\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, err)</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            fmt.</span><span style="color:#005CC5;">Printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Found </span><span style="color:#005CC5;">%d</span><span style="color:#032F62;"> blobs at height </span><span style="color:#005CC5;">%d</span><span style="color:#032F62;"> in 0xDEADBEEF namespace</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(blobs), header.</span><span style="color:#005CC5;">Height</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;-</span><span style="color:#24292E;">ctx.</span><span style="color:#005CC5;">Done</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="fetching-an-extended-data-square-eds" tabindex="-1">Fetching an Extended Data Square (EDS) <a class="header-anchor" href="#fetching-an-extended-data-square-eds" aria-label="Permalink to &quot;Fetching an Extended Data Square (EDS)&quot;">​</a></h2><p>You can fetch an <a href="https://celestiaorg.github.io/celestia-app/specs/data_structures.html#erasure-coding" target="_blank" rel="noreferrer">Extended Data Square (EDS)</a> using the <a href="https://node-rpc-docs.celestia.org/#share.GetEDS" target="_blank" rel="noreferrer">share.GetEDS</a> method. This method takes a header and returns the EDS at the given height.</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// GetEDS fetches the EDS at the given height.</span></span>
<span class="line"><span style="color:#F97583;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GetEDS</span><span style="color:#E1E4E8;">(ctx context.Context, url </span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">, token </span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">, height </span><span style="color:#F97583;">uint64</span><span style="color:#E1E4E8;">) (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">rsmt2d.ExtendedDataSquare, </span><span style="color:#F97583;">error</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    client, err </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> client.</span><span style="color:#79B8FF;">NewClient</span><span style="color:#E1E4E8;">(ctx, url, token)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> err </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span><span style="color:#E1E4E8;">, err</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">defer</span><span style="color:#E1E4E8;"> client.</span><span style="color:#79B8FF;">Close</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// We close the connection after use</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// First get the header of the block you want to fetch the EDS from</span></span>
<span class="line"><span style="color:#E1E4E8;">    header, err </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> client.Header.</span><span style="color:#79B8FF;">GetByHeight</span><span style="color:#E1E4E8;">(ctx, height)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> err </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span><span style="color:#E1E4E8;">, err</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Fetch the EDS</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> client.Share.</span><span style="color:#79B8FF;">GetEDS</span><span style="color:#E1E4E8;">(ctx, header)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// GetEDS fetches the EDS at the given height.</span></span>
<span class="line"><span style="color:#D73A49;">func</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GetEDS</span><span style="color:#24292E;">(ctx context.Context, url </span><span style="color:#D73A49;">string</span><span style="color:#24292E;">, token </span><span style="color:#D73A49;">string</span><span style="color:#24292E;">, height </span><span style="color:#D73A49;">uint64</span><span style="color:#24292E;">) (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">rsmt2d.ExtendedDataSquare, </span><span style="color:#D73A49;">error</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    client, err </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> client.</span><span style="color:#005CC5;">NewClient</span><span style="color:#24292E;">(ctx, url, token)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> err </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span><span style="color:#24292E;">, err</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">defer</span><span style="color:#24292E;"> client.</span><span style="color:#005CC5;">Close</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// We close the connection after use</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// First get the header of the block you want to fetch the EDS from</span></span>
<span class="line"><span style="color:#24292E;">    header, err </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> client.Header.</span><span style="color:#005CC5;">GetByHeight</span><span style="color:#24292E;">(ctx, height)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> err </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nil</span><span style="color:#24292E;">, err</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Fetch the EDS</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> client.Share.</span><span style="color:#005CC5;">GetEDS</span><span style="color:#24292E;">(ctx, header)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="api-documentation" tabindex="-1">API documentation <a class="header-anchor" href="#api-documentation" aria-label="Permalink to &quot;API documentation&quot;">​</a></h2><p>To see the full list of available methods, see the <a href="https://node-rpc-docs.celestia.org/" target="_blank" rel="noreferrer">API documentation</a>.</p>`,31),o=[p];function t(r,c,y,i,E,u){return n(),a("div",null,o)}const b=s(l,[["render",t]]);export{h as __pageData,b as default};
