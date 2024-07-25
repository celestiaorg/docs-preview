import{M as d}from"./chunks/MochaVersionTags.df340ac7.js";import{c as h}from"./chunks/constants.0e6df566.js";import{_ as p,o as s,c as l,k as e,t as a,H as o,Q as i,a as u}from"./chunks/framework.45338130.js";import"./chunks/mocha_versions.0139032d.js";const m="/docs-preview/pr-1649/img/mocha.jpg",f={name:"MochaTestnetDetails",data(){return{constants:h}}},g=e("tr",null,[e("th",null,"Detail"),e("th",null,"Value")],-1),b=e("td",null,"Chain ID",-1),k=e("tr",null,[e("td",null,"Genesis hash"),e("td",null,[e("code",null,"B93BBE20A0FBFDF955811B6420F8433904664D45DB4BF51022BE4200C1A1680D")])],-1),_=e("td",null,"Genesis file",-1),w=["href"],y=e("td",null,"Peers file",-1),v=["href"],C=e("tr",null,[e("td",null,"Validators"),e("td",null," 100 ")],-1);function T(r,c,n,E,t,S){return s(),l("table",null,[g,e("tr",null,[b,e("td",null,[e("code",null,a(t.constants.mochaChainId),1)])]),k,e("tr",null,[_,e("td",null,[e("a",{href:`https://github.com/celestiaorg/networks/blob/master/${t.constants.mochaChainId}/genesis.json`,target:"_blank",rel:"noopener noreferrer"}," https://github.com/celestiaorg/networks/blob/master/"+a(t.constants.mochaChainId)+"/genesis.json ",9,w)])]),e("tr",null,[y,e("td",null,[e("a",{href:`https://github.com/celestiaorg/networks/blob/master/${t.constants.mochaChainId}/peers.txt`,target:"_blank",rel:"noopener noreferrer"}," https://github.com/celestiaorg/networks/blob/master/"+a(t.constants.mochaChainId)+"/peers.txt ",9,v)])]),C])}const P=p(f,[["render",T]]),R=i('<h1 id="mocha-testnet" tabindex="-1">Mocha testnet <a class="header-anchor" href="#mocha-testnet" aria-label="Permalink to &quot;Mocha testnet&quot;">​</a></h1><p><img src="'+m+'" alt="mocha-testnet"></p><p>This guide contains the relevant sections for how to connect to Mocha, depending on the type of node you are running. Mocha testnet is designed to help validators test out their infrastructure and node software. Developers are encouraged to deploy their sovereign rollups on Mocha, but we also recommend <a href="./arabica-devnet">Arabica devnet</a> for that as it is designed for development purposes.</p><p>Mocha is a milestone in Celestia, allowing everyone to test out core functionalities on the network. Read <a href="https://blog.celestia.org/celestia-testnet-introduces-alpha-data-availability-api" target="_blank" rel="noreferrer">the announcement</a>. Your best approach to participating is to first determine which node you would like to run. Each node&#39;s guide will link to the relevant networks, to show you how to connect to them.</p><p>You have a list of options on the types of nodes you can run to participate in Mocha:</p><p>Consensus:</p><ul><li><a href="./full-consensus-node">Full consensus node</a></li><li><a href="./validator-node">Validator node</a></li></ul><p>Data Availability:</p><ul><li><a href="./bridge-node">Bridge node</a></li><li><a href="./full-storage-node">Full storage node</a></li><li><a href="./light-node">Light node</a></li></ul><p>Select the type of node you would like to run and follow the instructions on each respective page. Whenever you are asked to select the type of network you want to connect to in those guides, select <code>Mocha</code> to refer to the correct instructions on this page on how to connect to Mocha.</p><h2 id="network-details" tabindex="-1">Network details <a class="header-anchor" href="#network-details" aria-label="Permalink to &quot;Network details&quot;">​</a></h2>',11),x=e("h2",{id:"software-version-numbers",tabindex:"-1"},[u("Software version numbers "),e("a",{class:"header-anchor",href:"#software-version-numbers","aria-label":'Permalink to "Software version numbers"'},"​")],-1),A=i('<h2 id="rpc-for-da-bridge-full-and-light-nodes" tabindex="-1">RPC for DA bridge, full, and light nodes <a class="header-anchor" href="#rpc-for-da-bridge-full-and-light-nodes" aria-label="Permalink to &quot;RPC for DA bridge, full, and light nodes&quot;">​</a></h2><h3 id="data-availability-da-rpc-endpoints-for-bridge-node-sync" tabindex="-1">Data availability (DA) RPC endpoints for bridge node sync <a class="header-anchor" href="#data-availability-da-rpc-endpoints-for-bridge-node-sync" aria-label="Permalink to &quot;Data availability (DA) RPC endpoints for bridge node sync&quot;">​</a></h3><p>These RPC endpoints allow bridge nodes to sync blocks from the Celestia network. For users, they will need to provide a <code>–core.ip string</code> from a consensus node’s URL or IP that populates a default RPC port at 26657 to their respective DA node.</p><h3 id="data-availability-da-grpc-endpoints-for-state-access" tabindex="-1">Data availability (DA) gRPC endpoints for state access <a class="header-anchor" href="#data-availability-da-grpc-endpoints-for-state-access" aria-label="Permalink to &quot;Data availability (DA) gRPC endpoints for state access&quot;">​</a></h3><p>These gRPC endpoints for DA nodes provide state access for querying the chain’s state and broadcasting transactions (balances, blobs, etc.) to the Celestia network. For users, they will need to provide a <code>–core.ip string</code> from a consensus node’s URL or IP that populates a default gRPC port at 9090 to their respective DA node.</p><div class="tip custom-block"><p class="custom-block-title">Bridge nodes</p><p>Mentioned below RPC endpoints do not guarantee you the download of full blocks from them. We advise that if you are running a bridge node, that you also run a local <a href="./full-consensus-node">full consensus node</a> in order to download full blocks from it.</p></div><ul><li><code>public-celestia-mocha4-consensus.numia.xyz</code></li><li><code>mocha-4-consensus.mesa.newmetric.xyz</code></li><li><code>full.consensus.mocha-4.celestia-mocha.com</code></li><li><code>consensus-full-mocha-4.celestia-mocha.com</code></li><li><code>rpc-mocha.pops.one</code></li><li><code>celestia-testnet-consensus.itrocket.net</code><ul><li>RPC port: 26657</li><li>gRPC port: 9090</li></ul></li><li><code>rpc-celestia-testnet.cryptech.com.ua</code><ul><li>gRPC: grpc-celestia-testnet.cryptech.com.ua:443</li></ul></li><li><code>rpc.celestia.testnet.dteam.tech:443</code><ul><li>gRPC: grpc.celestia.testnet.dteam.tech:27090</li></ul></li><li><code>celestia-consensus-testnet.noders.services</code><ul><li>RPC port: 26357</li><li>gRPC port: 9070</li></ul></li></ul><h2 id="rpc-endpoints" tabindex="-1">RPC endpoints <a class="header-anchor" href="#rpc-endpoints" aria-label="Permalink to &quot;RPC endpoints&quot;">​</a></h2><p>The RPC endpoint is to allow users to interact with Celestia&#39;s nodes by querying the node&#39;s state and broadcasting transactions on the Celestia network. The default port is 26657.</p><ul><li><code>public-celestia-mocha4-consensus.numia.xyz:26657</code></li><li><code>mocha-4-consensus.mesa.newmetric.xyz:26657</code></li><li><code>rpc.celestia-mocha.com</code></li><li><code>celestia-testnet-rpc.f5nodes.com</code></li><li><code>celestia-testnet.brightlystake.com</code></li><li><code>rpc-celestia-mocha.architectnodes.com</code></li><li><code>rpc-celestia-mocha.trusted-point.com</code></li><li><code>rpc-celestia-testnet-01.stakeflow.io</code></li><li><code>mocha.celestia.rpc.cumulo.me</code></li><li><code>rpc-mocha-4.spidey.services</code></li><li><code>rpc-mocha-full.avril14th.org</code></li><li><code>rpc.mocha.bitszn.com</code></li><li><code>celestia-t-rpc.noders.services/</code></li><li><code>rpc-1.testnet.celestia.nodes.guru</code></li><li><code>rpc-2.testnet.celestia.nodes.guru</code></li><li><code>celestia-testnet-rpc.itrocket.net:443</code></li><li><code>rpc-celestia-testnet.cryptech.com.ua:443</code></li><li><code>rpc.celestia.testnet.dteam.tech:443</code></li></ul><h2 id="api-endpoints" tabindex="-1">API endpoints <a class="header-anchor" href="#api-endpoints" aria-label="Permalink to &quot;API endpoints&quot;">​</a></h2><p>The API endpoint is to allow users to interact with the REST API in Cosmos SDK which is implemented using gRPC-gateway, which exposes gRPC endpoints as REST endpoints. This allows for communication with the node using REST calls, which can be useful if the client does not support gRPC or HTTP2. The default port is 1317.</p><ul><li><a href="https://api-mocha.pops.one" target="_blank" rel="noreferrer">https://api-mocha.pops.one</a></li><li><a href="https://api.celestia-mocha.com/" target="_blank" rel="noreferrer">https://api.celestia-mocha.com/</a></li><li><a href="https://celestia-testnet-api.f5nodes.com" target="_blank" rel="noreferrer">https://celestia-testnet-api.f5nodes.com</a></li><li><a href="https://celestia-testnet.brightlystake.com/api" target="_blank" rel="noreferrer">https://celestia-testnet.brightlystake.com/api</a></li><li><a href="https://rest-celestia-mocha.architectnodes.com" target="_blank" rel="noreferrer">https://rest-celestia-mocha.architectnodes.com</a></li><li><a href="https://api-celestia-mocha.trusted-point.com" target="_blank" rel="noreferrer">https://api-celestia-mocha.trusted-point.com</a></li><li><a href="https://api-celestia-testnet-01.stakeflow.io/" target="_blank" rel="noreferrer">https://api-celestia-testnet-01.stakeflow.io/</a></li><li><a href="https://mocha.api.cumulo.me/" target="_blank" rel="noreferrer">https://mocha.api.cumulo.me/</a></li><li><a href="http://api-mocha-4.spidey.services" target="_blank" rel="noreferrer">http://api-mocha-4.spidey.services</a></li><li><a href="https://api-mocha-full.avril14th.org" target="_blank" rel="noreferrer">https://api-mocha-full.avril14th.org</a></li><li><a href="https://api.mocha.bitszn.com" target="_blank" rel="noreferrer">https://api.mocha.bitszn.com</a></li><li><a href="https://celestia-t-api.noders.services" target="_blank" rel="noreferrer">https://celestia-t-api.noders.services</a></li><li><a href="https://api-1.testnet.celestia.nodes.guru" target="_blank" rel="noreferrer">https://api-1.testnet.celestia.nodes.guru</a></li><li><a href="https://api-2.testnet.celestia.nodes.guru" target="_blank" rel="noreferrer">https://api-2.testnet.celestia.nodes.guru</a></li><li><a href="https://celestia-testnet-api.itrocket.net" target="_blank" rel="noreferrer">https://celestia-testnet-api.itrocket.net</a></li><li><a href="https://api-celestia-testnet.cryptech.com.ua" target="_blank" rel="noreferrer">https://api-celestia-testnet.cryptech.com.ua</a></li><li><a href="https://api.celestia.testnet.dteam.tech" target="_blank" rel="noreferrer">https://api.celestia.testnet.dteam.tech</a></li></ul><h2 id="grpc-endpoints" tabindex="-1">gRPC endpoints <a class="header-anchor" href="#grpc-endpoints" aria-label="Permalink to &quot;gRPC endpoints&quot;">​</a></h2><p>The gRPC endpoint is to allow users to interact with a Celestia Node using gRPC, a modern open-source and high-performance RPC framework. The default port is 9090. In the Cosmos SDK, gRPC is used to define state queries and broadcast transactions.</p><ul><li><code>public-celestia-mocha4-consensus.numia.xyz:9090</code></li><li><code>mocha-4-consensus.mesa.newmetric.xyz:9090</code></li><li><code>grpc-mocha.pops.one</code></li><li><code>grpc.celestia-mocha.com:443</code></li><li><code>full.consensus.mocha-4.celestia-mocha.com:9090</code></li><li><code>consensus-full-mocha-4.celestia-mocha.com:9090</code></li><li><code>celestia-testnet-grpc.f5nodes.com</code></li><li><code>celestia-testnet.brightlystake.com:9390</code></li><li><code>grpc-celestia-mocha.architectnodes.com:1443</code></li><li><code>grpc-celestia-mocha.trusted-point.com:9099</code></li><li><code>grpc-celestia-testnet-01.stakeflow.io:16002</code></li><li><code>mocha.grpc.cumulo.me:443</code></li><li><code>grpc-mocha-4.spidey.services</code></li><li><code>grpc-mocha-full.avril14th.org</code></li><li><code>grpc.mocha.bitszn.com</code></li><li><code>celestia-grpc.noders.services:21090</code></li><li><code>grpc-1.testnet.celestia.nodes.guru:10790</code></li><li><code>grpc-2.testnet.celestia.nodes.guru:10790</code></li><li><code>celestia-testnet-grpc.itrocket.net:443</code></li><li><code>grpc-celestia-testnet.cryptech.com.ua:443</code></li><li><code>grpc.celestia.testnet.dteam.tech:27090</code></li></ul><h2 id="bridge-and-full-node-endpoints" tabindex="-1">Bridge and full node endpoints <a class="header-anchor" href="#bridge-and-full-node-endpoints" aria-label="Permalink to &quot;Bridge and full node endpoints&quot;">​</a></h2><p>The endpoints below are for bridge and full nodes only. They can be used to find bootstrapper peers in the p2p network.</p><p>Bridge node 1:</p><ul><li>da-bridge-mocha-4.celestia-mocha.com</li><li>bridge-mocha-4.da.celestia-mocha.com</li></ul><p>Bridge node 2:</p><ul><li>da-bridge-mocha-4-2.celestia-mocha.com</li><li>bridge-mocha-4-2.da.celestia-mocha.com</li></ul><p>Full node 1:</p><ul><li>da-full-1-mocha-4.celestia-mocha.com</li><li>full-1-mocha-4.da.celestia-mocha.com</li></ul><p>Full node 2:</p><ul><li>da-full-2-mocha-4.celestia-mocha.com</li><li>full-2-mocha-4.da.celestia-mocha.com</li></ul><h2 id="mocha-testnet-faucet" tabindex="-1">Mocha testnet faucet <a class="header-anchor" href="#mocha-testnet-faucet" aria-label="Permalink to &quot;Mocha testnet faucet&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>USING THIS FAUCET DOES NOT ENTITLE YOU TO ANY AIRDROP OR OTHER DISTRIBUTION OF MAINNET CELESTIA TOKENS. THERE ARE NO PUBLIC SALES OF ANY MAINNET CELESTIA TOKENS.</p></div><p>You can request from Mocha testnet Faucet on the #mocha-faucet channel on Celestia&#39;s Discord server with the following command:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$request &lt;CELESTIA-ADDRESS&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$request &lt;CELESTIA-ADDRESS&gt;</span></span></code></pre></div><p>Where <code>&lt;CELESTIA-ADDRESS&gt;</code> is a <code>celestia1******</code> generated address.</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>Faucet has a limit of 10 tokens per week per address/Discord ID.</p></div><h2 id="analytics" tabindex="-1">Analytics <a class="header-anchor" href="#analytics" aria-label="Permalink to &quot;Analytics&quot;">​</a></h2><p>The following websites provide analytics for Mocha Testnet:</p><ul><li><a href="https://cosmoslist.co/testnet/celestia" target="_blank" rel="noreferrer">https://cosmoslist.co/testnet/celestia</a></li></ul><h2 id="explorers" tabindex="-1">Explorers <a class="header-anchor" href="#explorers" aria-label="Permalink to &quot;Explorers&quot;">​</a></h2><p>There are several explorers you can use for Mocha:</p><ul><li><a href="https://testnet.mintscan.io/celestia-testnet" target="_blank" rel="noreferrer">https://testnet.mintscan.io/celestia-testnet</a></li><li><a href="https://celestiascan.com" target="_blank" rel="noreferrer">https://celestiascan.com</a></li><li><a href="https://mocha.celenium.io" target="_blank" rel="noreferrer">https://mocha.celenium.io</a></li><li><a href="https://explorer.nodestake.top/celestia-testnet" target="_blank" rel="noreferrer">https://explorer.nodestake.top/celestia-testnet/</a></li><li><a href="https://stakeflow.io/celestia-testnet" target="_blank" rel="noreferrer">https://stakeflow.io/celestia-testnet</a></li><li><a href="https://testnet.celestia.explorers.guru" target="_blank" rel="noreferrer">https://testnet.celestia.explorers.guru</a></li><li><a href="https://testnet.itrocket.net/celestia" target="_blank" rel="noreferrer">https://testnet.itrocket.net/celestia</a></li><li><a href="https://explorers.cryptech.com.ua/Celestia-Testnet" target="_blank" rel="noreferrer">https://explorers.cryptech.com.ua/Celestia-Testnet</a></li><li><a href="https://explorer.testnet.dteam.tech/celestia" target="_blank" rel="noreferrer">https://explorer.testnet.dteam.tech/celestia</a></li></ul><h2 id="network-upgrades" tabindex="-1">Network upgrades <a class="header-anchor" href="#network-upgrades" aria-label="Permalink to &quot;Network upgrades&quot;">​</a></h2><p>There are a few ways to stay inform about network upgrades on Mocha testnet:</p><ul><li>Telegram <a href="https://t.me/+smSFIA7XXLU4MjJh" target="_blank" rel="noreferrer">announcement channel</a></li><li>Discord <a href="https://discord.com/channels/638338779505229824/979037494735691816" target="_blank" rel="noreferrer">Mocha announcements</a></li></ul>',41),B=JSON.parse('{"title":"Mocha testnet","description":"Learn how to connect to the Mocha network.","frontmatter":{"description":"Learn how to connect to the Mocha network.","head":[["meta",{"name":"og:title","content":"Mocha testnet | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/mocha-testnet.md","filePath":"nodes/mocha-testnet.md","lastUpdated":1721921016000}'),D={name:"nodes/mocha-testnet.md"},F=Object.assign(D,{setup(r){return(c,n)=>(s(),l("div",null,[R,o(P),x,o(d),A]))}});export{B as __pageData,F as default};
