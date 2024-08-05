import{a as t}from"./chunks/arabica_versions.45d6a155.js";import{m as l}from"./chunks/mocha_versions.2f4d049c.js";import{m as n}from"./chunks/mainnet_versions.91c66303.js";import{o as i,c,k as s,t as e,l as a,Q as o}from"./chunks/framework.8161df73.js";const p=o('<h1 id="install-celestia-node" tabindex="-1">Install celestia-node <a class="header-anchor" href="#install-celestia-node" aria-label="Permalink to &quot;Install celestia-node&quot;">​</a></h1><h2 id="installing-from-source" tabindex="-1">Installing from source <a class="header-anchor" href="#installing-from-source" aria-label="Permalink to &quot;Installing from source&quot;">​</a></h2><p>This section goes over building and installing celestia-node. This tutorial assumes you completed the steps in <a href="./environment">setting up your development environment</a>.</p><p>Install the celestia-node binary by running the following commands:</p>',4),r=o(`<li><p>Remove any existing copy of celestia-node, clone the repository, and change into the directory:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-node</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/celestiaorg/celestia-node.git</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-node/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $HOME</span></span>
<span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-node</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/celestiaorg/celestia-node.git</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-node/</span></span></code></pre></div></li>`,1),d=s("p",null,"Check out to the desired version, based on the network you will use:",-1),h={class:"vp-code-group vp-adaptive-theme"},u=o('<div class="tabs"><input type="radio" name="group-JUjpe" id="tab-u6MRrkf" checked="checked"><label for="tab-u6MRrkf">Mainnet Beta</label><input type="radio" name="group-JUjpe" id="tab-K4MY_vT"><label for="tab-K4MY_vT">Mocha</label><input type="radio" name="group-JUjpe" id="tab-IFCd1am"><label for="tab-IFCd1am">Arabica</label></div>',1),_={class:"blocks"},y={class:"language-bash vp-adaptive-theme active"},g=s("button",{title:"Copy Code",class:"copy"},null,-1),b=s("span",{class:"lang"},"bash",-1),m={class:"shiki github-dark vp-code-dark"},E={class:"line"},v=s("span",{style:{color:"#B392F0"}},"git",-1),F=s("span",{style:{color:"#E1E4E8"}}," ",-1),k=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),C=s("span",{style:{color:"#E1E4E8"}}," ",-1),f={style:{color:"#9ECBFF"}},B={class:"shiki github-light vp-code-light"},T={class:"line"},w=s("span",{style:{color:"#6F42C1"}},"git",-1),I=s("span",{style:{color:"#24292E"}}," ",-1),A=s("span",{style:{color:"#032F62"}},"checkout",-1),P=s("span",{style:{color:"#24292E"}}," ",-1),S={style:{color:"#032F62"}},x={class:"language-bash vp-adaptive-theme"},V=s("button",{title:"Copy Code",class:"copy"},null,-1),q=s("span",{class:"lang"},"bash",-1),N={class:"shiki github-dark vp-code-dark"},R={class:"line"},M=s("span",{style:{color:"#B392F0"}},"git",-1),D=s("span",{style:{color:"#E1E4E8"}}," ",-1),O=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),j=s("span",{style:{color:"#E1E4E8"}}," ",-1),L={style:{color:"#9ECBFF"}},U={class:"shiki github-light vp-code-light"},$={class:"line"},J=s("span",{style:{color:"#6F42C1"}},"git",-1),H=s("span",{style:{color:"#24292E"}}," ",-1),Y=s("span",{style:{color:"#032F62"}},"checkout",-1),G=s("span",{style:{color:"#24292E"}}," ",-1),K={style:{color:"#032F62"}},Q={class:"language-bash vp-adaptive-theme"},z=s("button",{title:"Copy Code",class:"copy"},null,-1),W=s("span",{class:"lang"},"bash",-1),X={class:"shiki github-dark vp-code-dark"},Z={class:"line"},ss=s("span",{style:{color:"#B392F0"}},"git",-1),es=s("span",{style:{color:"#E1E4E8"}}," ",-1),as=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),os=s("span",{style:{color:"#E1E4E8"}}," ",-1),ts={style:{color:"#9ECBFF"}},ls={class:"shiki github-light vp-code-light"},ns={class:"line"},is=s("span",{style:{color:"#6F42C1"}},"git",-1),cs=s("span",{style:{color:"#24292E"}}," ",-1),ps=s("span",{style:{color:"#032F62"}},"checkout",-1),rs=s("span",{style:{color:"#24292E"}}," ",-1),ds={style:{color:"#032F62"}},hs=o('<li><p>Build the <code>celestia</code> binary:</p><p>a. Standard build</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span></span></code></pre></div><p>b. Experimental build</p><div class="tip custom-block"><p class="custom-block-title">OPTIONAL</p><p>If you&#39;re a node operator comfortable with experimental features and seeking optimal performance with minimal RAM usage, this option is recommended for you.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build-jemalloc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build-jemalloc</span></span></code></pre></div><p>This build option enables CGO, and downloads and installs <a href="https://jemalloc.net/" target="_blank" rel="noreferrer">jemalloc</a>. <a href="https://github.com/celestiaorg/celestia-node/releases/tag/v0.12.1#:~:text=%F0%9F%8F%97%EF%B8%8F-,New%20build%20option,-%3A%20Makefile%20now%20has" target="_blank" rel="noreferrer">Learn more about the build command</a>.</p></div></li><li><p>Install the binary:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div></li><li><p>Build the <code>cel-key</code> utility:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cel-key</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cel-key</span></span></code></pre></div></li><li><p>Verify that the binary is working and check the version:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">version</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">version</span></span></code></pre></div></li>',4),us=o('<p>The output will show the semantic version of celestia-node, commit hash, build date, system version, and Golang version.</p><h2 id="installing-a-pre-built-binary" tabindex="-1">Installing a pre-built binary <a class="header-anchor" href="#installing-a-pre-built-binary" aria-label="Permalink to &quot;Installing a pre-built binary&quot;">​</a></h2><p>Installing a pre-built binary is the fastest way to get started with your Celestia data availability node. Releases after celestia-node v0.13.3 should have these binaries available.</p><p>The steps below will download a binary file named <code>celestia</code>. Depending on the setup that you choose during installation, the <code>celestia</code> binary will be available at either:</p><ul><li><code>$HOME/celestia-node-temp/celestia</code></li><li><code>/usr/local/bin/celestia</code></li></ul><p>Pre-built binaries are available for:</p><ul><li>Operating systems: Darwin (Apple), Linux</li><li>Architectures: x86_64 (amd64), arm64</li></ul><p>To install the latest pre-built binary you can run this command in your terminal:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">bash</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-c</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;$(</span><span style="color:#B392F0;">curl</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-sL</span><span style="color:#9ECBFF;"> https://docs.celestia.org/celestia-node.sh)&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">bash</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-c</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;$(</span><span style="color:#6F42C1;">curl</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-sL</span><span style="color:#032F62;"> https://docs.celestia.org/celestia-node.sh)&quot;</span></span></code></pre></div><p>Follow the instructions in the terminal output to choose your installation preferences.</p><p>You will see an output with the menu for <code>celestia</code>.</p><p>View <a href="https://github.com/celestiaorg/docs/tree/main/public/celestia-node.sh" target="_blank" rel="noreferrer">the script</a> to learn more about what it is doing.</p><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>First, we recommend <a href="./overview">reading the overview</a> of our node types, if you haven&#39;t yet.</p><p>Now that you&#39;ve installed Celestia Node, it&#39;s time to <a href="./decide-node">pick your node type</a> and run your node!</p><p>If you&#39;re planning to run a light node, we recommend the <a href="./../developers/node-tutorial">node RPC CLI tutorial</a>.</p><h2 id="upgrading-your-binary" tabindex="-1">Upgrading your binary <a class="header-anchor" href="#upgrading-your-binary" aria-label="Permalink to &quot;Upgrading your binary&quot;">​</a></h2><p>To upgrade your binary, you can install the latest version from the instructions above and restart your node. If you run into any issues, Refer to the <a href="./celestia-node-troubleshooting">troubleshooting section</a>.</p>',18),ks=JSON.parse('{"title":"Install celestia-node","description":"Learn to build and install celestia-node.","frontmatter":{"description":"Learn to build and install celestia-node.","head":[["meta",{"name":"og:title","content":"Install celestia-node | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/celestia-node.md","filePath":"nodes/celestia-node.md","lastUpdated":1722330198000}'),_s={name:"nodes/celestia-node.md"},Cs=Object.assign(_s,{setup(ys){return(gs,bs)=>(i(),c("div",null,[p,s("ol",null,[r,s("li",null,[d,s("div",h,[u,s("div",_,[s("div",y,[g,b,s("pre",m,[s("code",null,[s("span",E,[v,F,k,C,s("span",f,"tags/"+e(a(n)["node-latest-tag"]),1)])])]),s("pre",B,[s("code",null,[s("span",T,[w,I,A,P,s("span",S,"tags/"+e(a(n)["node-latest-tag"]),1)])])])]),s("div",x,[V,q,s("pre",N,[s("code",null,[s("span",R,[M,D,O,j,s("span",L,"tags/"+e(a(l)["node-latest-tag"]),1)])])]),s("pre",U,[s("code",null,[s("span",$,[J,H,Y,G,s("span",K,"tags/"+e(a(l)["node-latest-tag"]),1)])])])]),s("div",Q,[z,W,s("pre",X,[s("code",null,[s("span",Z,[ss,es,as,os,s("span",ts,"tags/"+e(a(t)["node-latest-tag"]),1)])])]),s("pre",ls,[s("code",null,[s("span",ns,[is,cs,ps,rs,s("span",ds,"tags/"+e(a(t)["node-latest-tag"]),1)])])])])])])]),hs]),us]))}});export{ks as __pageData,Cs as default};