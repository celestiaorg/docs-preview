import{a as o}from"./chunks/arabica_versions.9108f76d.js";import{m as l}from"./chunks/mocha_versions.a095faab.js";import{m as n}from"./chunks/mainnet_versions.ed293611.js";import{o as p,c as i,k as s,t as e,l as t,Q as a}from"./chunks/framework.f194f1d8.js";const c=a('<h1 id="install-celestia-app" tabindex="-1">Install celestia-app <a class="header-anchor" href="#install-celestia-app" aria-label="Permalink to &quot;Install celestia-app&quot;">​</a></h1><p>This tutorial will guide you through installing celestia-app, both <a href="#building-binary-from-source">from source</a> and with <a href="#installing-a-pre-built-binary">a pre-built binary</a></p><p>Celestia-app is the software that allows you to run validator nodes and provide RPC endpoints.</p><h2 id="building-binary-from-source" tabindex="-1">Building binary from source <a class="header-anchor" href="#building-binary-from-source" aria-label="Permalink to &quot;Building binary from source&quot;">​</a></h2><p>This section of the tutorial presumes you completed the steps in <a href="/docs-preview/pr-1914/how-to-guides/environment">setting up your own environment</a>.</p><p>The steps below will create a binary file named <code>celestia-appd</code> inside <code>$HOME/go/bin</code> folder which will be used later to run the node. Be sure to select the correct network to install the binary for.</p>',6),r=a(`<li><p>Remove any existing copy of celestia-app, clone the repository, and change into the directory:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-app</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/celestiaorg/celestia-app.git</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-app</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $HOME</span></span>
<span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-app</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/celestiaorg/celestia-app.git</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-app</span></span></code></pre></div></li>`,1),d=s("p",null,"Check out to the desired version, based on the network you will use:",-1),h={class:"vp-code-group vp-adaptive-theme"},_=a('<div class="tabs"><input type="radio" name="group-i9MPF" id="tab-8MW8deu" checked="checked"><label for="tab-8MW8deu">Mainnet Beta</label><input type="radio" name="group-i9MPF" id="tab-8IFqAJh"><label for="tab-8IFqAJh">Mocha</label><input type="radio" name="group-i9MPF" id="tab-yBeZ4_u"><label for="tab-yBeZ4_u">Arabica</label></div>',1),u={class:"blocks"},y={class:"language-bash vp-adaptive-theme active"},b=s("button",{title:"Copy Code",class:"copy"},null,-1),g=s("span",{class:"lang"},"bash",-1),E={class:"shiki github-dark vp-code-dark"},m={class:"line"},F=s("span",{style:{color:"#B392F0"}},"git",-1),C=s("span",{style:{color:"#E1E4E8"}}," ",-1),v=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),f=s("span",{style:{color:"#E1E4E8"}}," ",-1),k={style:{color:"#9ECBFF"}},w={class:"shiki github-light vp-code-light"},T={class:"line"},B=s("span",{style:{color:"#6F42C1"}},"git",-1),P=s("span",{style:{color:"#24292E"}}," ",-1),I=s("span",{style:{color:"#032F62"}},"checkout",-1),A=s("span",{style:{color:"#24292E"}}," ",-1),S={style:{color:"#032F62"}},V={class:"language-bash vp-adaptive-theme"},q=s("button",{title:"Copy Code",class:"copy"},null,-1),D=s("span",{class:"lang"},"bash",-1),M={class:"shiki github-dark vp-code-dark"},x={class:"line"},L=s("span",{style:{color:"#B392F0"}},"git",-1),R=s("span",{style:{color:"#E1E4E8"}}," ",-1),N=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),O=s("span",{style:{color:"#E1E4E8"}}," ",-1),$={style:{color:"#9ECBFF"}},H={class:"shiki github-light vp-code-light"},J={class:"line"},W=s("span",{style:{color:"#6F42C1"}},"git",-1),U=s("span",{style:{color:"#24292E"}}," ",-1),Y=s("span",{style:{color:"#032F62"}},"checkout",-1),Z=s("span",{style:{color:"#24292E"}}," ",-1),j={style:{color:"#032F62"}},Q={class:"language-bash vp-adaptive-theme"},z=s("button",{title:"Copy Code",class:"copy"},null,-1),G=s("span",{class:"lang"},"bash",-1),K={class:"shiki github-dark vp-code-dark"},X={class:"line"},ss=s("span",{style:{color:"#B392F0"}},"git",-1),es=s("span",{style:{color:"#E1E4E8"}}," ",-1),ts=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),as=s("span",{style:{color:"#E1E4E8"}}," ",-1),os={style:{color:"#9ECBFF"}},ls={class:"shiki github-light vp-code-light"},ns={class:"line"},ps=s("span",{style:{color:"#6F42C1"}},"git",-1),is=s("span",{style:{color:"#24292E"}}," ",-1),cs=s("span",{style:{color:"#032F62"}},"checkout",-1),rs=s("span",{style:{color:"#24292E"}}," ",-1),ds={style:{color:"#032F62"}},hs=a('<li><p>Build and install the <code>celestia-appd</code> binary:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div></li><li><p>To check if the binary was successfully installed you can run the binary using the <code>--help</code> flag:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--help</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--help</span></span></code></pre></div></li>',2),_s=a('<p>You will see an output with the menu for <code>celestia-appd</code>. Learn more on the <a href="/docs-preview/pr-1914/how-to-guides/celestia-app-commands">helpful CLI commands page</a></p><h2 id="installing-a-pre-built-binary" tabindex="-1">Installing a pre-built binary <a class="header-anchor" href="#installing-a-pre-built-binary" aria-label="Permalink to &quot;Installing a pre-built binary&quot;">​</a></h2><p>Installing a pre-built binary is the fastest way to get started with your Celestia consensus node. Releases after celestia-app v1.3.0 should have these binaries available.</p><p>The steps below will download a binary file named <code>celestia-appd</code>. Depending on the setup that you choose during installation, the <code>celestia-appd</code> binary will be available at either:</p><ul><li><code>$HOME/celestia-app-temp/celestia-appd</code></li><li><code>/usr/local/bin/celestia-appd</code></li></ul><p>Pre-built binaries are available for:</p><ul><li>Operating systems: Darwin (Apple), Linux</li><li>Architectures: x86_64 (amd64), arm64</li></ul><p>To install the latest pre-built binary you can run this command in your terminal:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">bash</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-c</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;$(</span><span style="color:#B392F0;">curl</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-sL</span><span style="color:#9ECBFF;"> https://docs.celestia.org/celestia-app.sh)&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">bash</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-c</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;$(</span><span style="color:#6F42C1;">curl</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-sL</span><span style="color:#032F62;"> https://docs.celestia.org/celestia-app.sh)&quot;</span></span></code></pre></div><p>Follow the instructions in the terminal output to choose your installation preferences.</p><p>You will see an output with the menu for <code>celestia-appd</code>. Learn more on the <a href="/docs-preview/pr-1914/how-to-guides/celestia-app-commands">helpful CLI commands page</a></p><p>View <a href="https://github.com/celestiaorg/docs/tree/main/public/celestia-app.sh" target="_blank" rel="noreferrer">the script</a> to learn more about what it is doing.</p><h2 id="ports" tabindex="-1">Ports <a class="header-anchor" href="#ports" aria-label="Permalink to &quot;Ports&quot;">​</a></h2><p>When interacting with a consensus node, you may need to open ports on your machine to allow communication between nodes, such as bridge nodes. It is essential that specific ports are accessible. Make sure that your firewall allows connections to the correct ports.</p><p>If you run a node on a cloud server, make sure that the ports are open on the server&#39;s firewall. If you run a node at home, make sure that your router allows connections to the correct ports.</p><p>For example, validator ports 9090 and 26657 need to be accessible by the bridge, and port 2121 is required for P2P connections for all node types.</p><p>The following ports are used by Celestia app nodes:</p><table><thead><tr><th>Port</th><th>Protocol</th><th>Address</th><th>Description</th><th>Enabled by default on node</th><th>Flag</th></tr></thead><tbody><tr><td>2121</td><td>TCP/UDP</td><td>localhost</td><td>P2P</td><td>true</td><td>N/A</td></tr><tr><td>9090</td><td>HTTP</td><td>0.0.0.0</td><td>gRPC</td><td>true</td><td><code>--grpc.address string</code></td></tr><tr><td>26657</td><td>TCP</td><td>localhost</td><td>RPC</td><td>false (only open to localhost)</td><td><code>--rpc.laddr string</code></td></tr></tbody></table>',18),vs=JSON.parse('{"title":"Install celestia-app","description":"Learn how you can build celestia-app.","frontmatter":{"description":"Learn how you can build celestia-app.","head":[["meta",{"property":"og:title","content":"Install celestia-app | Celestia Docs"}],["meta",{"property":"og:description","content":"Learn how you can build celestia-app."}]]},"headers":[],"relativePath":"how-to-guides/celestia-app.md","filePath":"how-to-guides/celestia-app.md","lastUpdated":1741018009000}'),us={name:"how-to-guides/celestia-app.md"},fs=Object.assign(us,{setup(ys){return(bs,gs)=>(p(),i("div",null,[c,s("ol",null,[r,s("li",null,[d,s("div",h,[_,s("div",u,[s("div",y,[b,g,s("pre",E,[s("code",null,[s("span",m,[F,C,v,f,s("span",k,"tags/"+e(t(n)["app-latest-tag"]),1)])])]),s("pre",w,[s("code",null,[s("span",T,[B,P,I,A,s("span",S,"tags/"+e(t(n)["app-latest-tag"]),1)])])])]),s("div",V,[q,D,s("pre",M,[s("code",null,[s("span",x,[L,R,N,O,s("span",$,"tags/"+e(t(l)["app-latest-tag"]),1)])])]),s("pre",H,[s("code",null,[s("span",J,[W,U,Y,Z,s("span",j,"tags/"+e(t(l)["app-latest-tag"]),1)])])])]),s("div",Q,[z,G,s("pre",K,[s("code",null,[s("span",X,[ss,es,ts,as,s("span",os,"tags/"+e(t(o)["app-latest-tag"]),1)])])]),s("pre",ls,[s("code",null,[s("span",ns,[ps,is,cs,rs,s("span",ds,"tags/"+e(t(o)["app-latest-tag"]),1)])])])])])])]),hs]),_s]))}});export{vs as __pageData,fs as default};
