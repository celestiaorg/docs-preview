import{A as i}from"./chunks/ArabicaVersionTags.8abe2ea3.js";import{c as d}from"./chunks/constants.dc70dfe7.js";import{_ as h,o,c as n,k as e,t as a,H as s,Q as r,a as u}from"./chunks/framework.398e6084.js";import"./chunks/arabica_versions.da77a310.js";const b="/docs-preview/pr-1506/img/arabica-devnet.png",y={name:"ArabicaDevnetDetails",data(){return{constants:d}}},E=e("tr",null,[e("th",null,"Detail"),e("th",null,"Value")],-1),g=e("td",null,"Chain ID",-1),f=e("tr",null,[e("td",null,"Genesis hash"),e("td",null,[e("code",null,"27122593765E07329BC348E8D16E92DCB4C75B34CCCB35C640FD7A4484D4C711")])],-1),m=e("td",null,"Genesis file",-1),v=["href"],_=e("td",null,"Peers file",-1),k=["href"],C=e("tr",null,[e("td",null,"Validators"),e("td",null," 4 ")],-1);function A(l,c,p,N,t,I){return o(),n("table",null,[E,e("tr",null,[g,e("td",null,[e("code",null,a(t.constants.arabicaChainId),1)])]),f,e("tr",null,[m,e("td",null,[e("a",{href:`https://github.com/celestiaorg/networks/blob/master/${t.constants.arabicaChainId}/genesis.json`,target:"_blank",rel:"noopener noreferrer"}," https://github.com/celestiaorg/networks/blob/master/"+a(t.constants.arabicaChainId)+"/genesis.json ",9,v)])]),e("tr",null,[_,e("td",null,[e("a",{href:`https://github.com/celestiaorg/networks/blob/master/${t.constants.arabicaChainId}/peers.txt`,target:"_blank",rel:"noopener noreferrer"}," https://github.com/celestiaorg/networks/blob/master/"+a(t.constants.arabicaChainId)+"/peers.txt ",9,k)])]),C])}const F=h(y,[["render",A]]),w=r('<h1 id="arabica-devnet" tabindex="-1">Arabica devnet <a class="header-anchor" href="#arabica-devnet" aria-label="Permalink to &quot;Arabica devnet&quot;">​</a></h1><p><img src="'+b+'" alt="arabica-devnet"></p><p>Arabica devnet is a testnet from Celestia Labs that is focused exclusively on providing developers with enhanced performance and the latest upgrades for testing their rollups and applications.</p><p>Arabica does not focus on validator or consensus-level testing, rather, that is what Mocha testnet is used for. If you are a validator, we recommend testing your validator operations on the <a href="./mocha-testnet">Mocha testnet</a>.</p><h2 id="network-stability-and-upgrades" tabindex="-1">Network stability and upgrades <a class="header-anchor" href="#network-stability-and-upgrades" aria-label="Permalink to &quot;Network stability and upgrades&quot;">​</a></h2><p>Arabica has the latest updates from all Celestia&#39;s products deployed on it, it can be subject to many changes. Therefore, as a fair warning, Arabica can break unexpectedly, but given it will be continuously updated, it is a useful way to keep testing the latest changes in the software.</p><p>Developers can still deploy on Mocha testnet their sovereign rollups if they chose to do so, it just will always lag behind Arabica devnet until Mocha undergoes Hardfork Upgrades in coordination with Validators.</p><h2 id="network-details" tabindex="-1">Network details <a class="header-anchor" href="#network-details" aria-label="Permalink to &quot;Network details&quot;">​</a></h2>',8),D=e("h3",{id:"software-version-numbers",tabindex:"-1"},[u("Software version numbers "),e("a",{class:"header-anchor",href:"#software-version-numbers","aria-label":'Permalink to "Software version numbers"'},"​")],-1),T=r(`<h2 id="integrations" tabindex="-1">Integrations <a class="header-anchor" href="#integrations" aria-label="Permalink to &quot;Integrations&quot;">​</a></h2><p>This guide contains the relevant sections for how to connect to Arabica devnet, depending on the type of node you are running. Your best approach to participating is to first determine which node you would like to run. Each node’s guide will link to the relevant network in order to show you how to connect to them. Learn about the different endpoint types <a href="https://docs.cosmos.network/v0.50/learn/advanced/grpc_rest" target="_blank" rel="noreferrer">in the Cosmos SDK documentation</a>.</p><h3 id="rpc-endpoints" tabindex="-1">RPC endpoints <a class="header-anchor" href="#rpc-endpoints" aria-label="Permalink to &quot;RPC endpoints&quot;">​</a></h3><p>RPC endpoints and types of nodes you can run in order to participate in Arabica devnet:</p><table><thead><tr><th>Node type</th><th>Endpoint type</th><th>Endpoint</th></tr></thead><tbody><tr><td><strong>Consensus nodes</strong> (<a href="./../nodes/full-consensus-node">full</a>)</td><td>Consensus RPC</td><td><code>https://rpc.celestia-arabica-11.com</code></td></tr><tr><td></td><td>API</td><td><code>https://api.celestia-arabica-11.com</code></td></tr><tr><td></td><td>gRPC</td><td><code>grpc.celestia-arabica-11.com:443</code></td></tr><tr><td></td><td>Direct endpoints with open ports</td><td>Open ports: 26656 (p2p), 26657 (RPC), 1317 (API), 9090 (GRPC)</td></tr><tr><td></td><td></td><td><code>validator-1.celestia-arabica-11.com</code></td></tr><tr><td></td><td></td><td><code>validator-2.celestia-arabica-11.com</code></td></tr><tr><td></td><td></td><td><code>validator-3.celestia-arabica-11.com</code></td></tr><tr><td></td><td></td><td><code>validator-4.celestia-arabica-11.com</code></td></tr><tr><td></td><td></td><td></td></tr><tr><td><strong>Data availability nodes</strong></td><td>DA Bridge Node Endpoints</td><td><code>/dns4/da-bridge-1.celestia-arabica-11.com/tcp/2121/p2p/12D3KooWGqwzdEqM54Dce6LXzfFr97Bnhvm6rN7KM7MFwdomfm4S</code></td></tr><tr><td>(<a href="./light-node">light</a>, <a href="./bridge-node">bridge</a>, <a href="./full-storage-node">full</a>)</td><td></td><td><code>/dns4/da-bridge-2.celestia-arabica-11.com/tcp/2121/p2p/12D3KooWCMGM5eZWVfCN9ZLAViGfLUWAfXP5pCm78NFKb9jpBtua</code></td></tr><tr><td></td><td></td><td><code>/dns4/da-bridge-3.celestia-arabica-11.com/tcp/2121/p2p/12D3KooWEWuqrjULANpukDFGVoHW3RoeUU53Ec9t9v5cwW3MkVdQ</code></td></tr><tr><td></td><td></td><td><code>/dns4/da-bridge-4.celestia-arabica-11.com/tcp/2121/p2p/12D3KooWLT1ysSrD7XWSBjh7tU1HQanF5M64dHV6AuM6cYEJxMPk</code></td></tr><tr><td></td><td><code>--core.ip string</code> endpoints</td><td>Refer to &quot;Direct endpoints with open ports&quot; above</td></tr></tbody></table><p>You can <a href="https://celestia-tools.brightlystake.com/" target="_blank" rel="noreferrer">find the status of these endpoints</a>.</p><h3 id="using-consensus-endpoints-with-da-nodes" tabindex="-1">Using consensus endpoints with DA nodes <a class="header-anchor" href="#using-consensus-endpoints-with-da-nodes" aria-label="Permalink to &quot;Using consensus endpoints with DA nodes&quot;">​</a></h3><p>Consensus RPC endpoints are used to provide DA nodes with state access for querying the chain’s state and broadcasting transactions (balances, blobs, etc.) to the Celestia network.</p><p>Developers will need to provide a <code>–core.ip string</code> from a consensus node’s URI or an IP that populates 2 ports for 2 types (RPC and gRPC, at ports 26657 and 9090, respectively) to their respective DA node.</p><div class="tip custom-block"><p class="custom-block-title">EXAMPLE</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">da_typ</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">–core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">ur</span><span style="color:#E1E4E8;">l</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">–core.rpc.port</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">por</span><span style="color:#E1E4E8;">t</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">–core.grpc.port</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">por</span><span style="color:#E1E4E8;">t</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">da_typ</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">–core.ip</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">ur</span><span style="color:#24292E;">l</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">–core.rpc.port</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">por</span><span style="color:#24292E;">t</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">–core.grpc.port</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">por</span><span style="color:#24292E;">t</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span></code></pre></div></div><p>RPCs for DA nodes to initialise or start your celestia-node to Arabica devnet with can be found in the table in the &quot;Direct endpoints with open ports&quot; section above.</p><p>As an example, this command will work to start a light node with state access, using default ports:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">light</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.netowrk</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">arabica</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">validator-1.celestia-arabica-11.com</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">light</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.netowrk</span><span style="color:#24292E;"> </span><span style="color:#032F62;">arabica</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">validator-1.celestia-arabica-11.com</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Bridge node runners</p><p>Not all of the RPC endpoints do not guarantee the full block history. Find <a href="https://celestia-tools.brightlystake.com/" target="_blank" rel="noreferrer">an archive endpoint on the community dashboard</a> or run your own full consensus node with no pruning for your bridge node.</p></div><h2 id="arabica-devnet-faucet" tabindex="-1">Arabica devnet faucet <a class="header-anchor" href="#arabica-devnet-faucet" aria-label="Permalink to &quot;Arabica devnet faucet&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>USING THIS FAUCET DOES NOT ENTITLE YOU TO ANY AIRDROP OR OTHER DISTRIBUTION OF MAINNET CELESTIA TOKENS. THERE ARE NO PUBLIC SALES OF ANY MAINNET CELESTIA TOKENS.</p></div><h3 id="discord" tabindex="-1">Discord <a class="header-anchor" href="#discord" aria-label="Permalink to &quot;Discord&quot;">​</a></h3><p>You can request from Arabica devnet Faucet on the #arabica-faucet channel on Celestia&#39;s Discord server with the following command:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$request &lt;CELESTIA-ADDRESS&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$request &lt;CELESTIA-ADDRESS&gt;</span></span></code></pre></div><p>Where <code>&lt;CELESTIA-ADDRESS&gt;</code> is a <code>celestia1******</code> generated address.</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>Faucet has a limit of 10 tokens per week per address/Discord ID.</p></div><h3 id="web" tabindex="-1">Web <a class="header-anchor" href="#web" aria-label="Permalink to &quot;Web&quot;">​</a></h3><p>The web faucet is available at <a href="https://faucet.celestia-arabica-11.com/" target="_blank" rel="noreferrer">https://faucet.celestia-arabica-11.com/</a>.</p><h2 id="explorers" tabindex="-1">Explorers <a class="header-anchor" href="#explorers" aria-label="Permalink to &quot;Explorers&quot;">​</a></h2><p>There are multiple explorers you can use for Arabica:</p><ul><li><a href="https://arabica.celenium.io" target="_blank" rel="noreferrer">https://arabica.celenium.io</a></li><li><a href="https://explorer.celestia-arabica-11.com" target="_blank" rel="noreferrer">https://explorer.celestia-arabica-11.com</a></li><li><a href="https://celestiascan.com" target="_blank" rel="noreferrer">https://celestiascan.com</a></li></ul><h2 id="network-upgrades" tabindex="-1">Network upgrades <a class="header-anchor" href="#network-upgrades" aria-label="Permalink to &quot;Network upgrades&quot;">​</a></h2><p>Join our <a href="https://t.me/+smSFIA7XXLU4MjJh" target="_blank" rel="noreferrer">Telegram announcement channel</a> for network upgrades.</p>`,28),R=JSON.parse('{"title":"Arabica devnet","description":"A guide to Arabica devnet.","frontmatter":{"description":"A guide to Arabica devnet.","head":[["meta",{"name":"og:title","content":"Arabica devnet | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/arabica-devnet.md","filePath":"nodes/arabica-devnet.md","lastUpdated":1712054765000}'),P={name:"nodes/arabica-devnet.md"},L=Object.assign(P,{setup(l){return(c,p)=>(o(),n("div",null,[w,s(F),D,s(i),T]))}});export{R as __pageData,L as default};
