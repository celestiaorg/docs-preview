import{a as n}from"./chunks/arabica_versions.bb409688.js";import{m as i}from"./chunks/mocha_versions.3ee6fee8.js";import{m as l}from"./chunks/mainnet_versions.6a0945dc.js";import{o as c,c as p,k as s,t as a,l as o,a as t,Q as e}from"./chunks/framework.58da36a1.js";const r=e('<h1 id="install-celestia-node" tabindex="-1">Install celestia-node <a class="header-anchor" href="#install-celestia-node" aria-label="Permalink to &quot;Install celestia-node&quot;">​</a></h1><h2 id="installing-from-source" tabindex="-1">Installing from source <a class="header-anchor" href="#installing-from-source" aria-label="Permalink to &quot;Installing from source&quot;">​</a></h2><p>This section goes over building and installing celestia-node. This tutorial assumes you completed the steps in <a href="./environment">setting up your development environment</a>.</p><p>Install the celestia-node binary by running the following commands:</p>',4),d=e(`<li><p>Remove any existing copy of celestia-node, clone the repository, and change into the directory:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-node</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/celestiaorg/celestia-node.git</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-node/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $HOME</span></span>
<span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-node</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/celestiaorg/celestia-node.git</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-node/</span></span></code></pre></div></li>`,1),h=s("p",null,"Check out to the desired version, based on the network you will use:",-1),_={class:"vp-code-group vp-adaptive-theme"},y=e('<div class="tabs"><input type="radio" name="group-N10C5" id="tab-1YmQk67" checked="checked"><label for="tab-1YmQk67">Mainnet Beta</label><input type="radio" name="group-N10C5" id="tab-r9avYBN"><label for="tab-r9avYBN">Mocha</label><input type="radio" name="group-N10C5" id="tab-V2IzP87"><label for="tab-V2IzP87">Arabica</label></div>',1),u={class:"blocks"},g={class:"language-bash vp-adaptive-theme active"},b=s("button",{title:"Copy Code",class:"copy"},null,-1),E=s("span",{class:"lang"},"bash",-1),F={class:"shiki github-dark vp-code-dark"},m={class:"line"},v=s("span",{style:{color:"#B392F0"}},"git",-1),C=s("span",{style:{color:"#E1E4E8"}}," ",-1),k=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),T=s("span",{style:{color:"#E1E4E8"}}," ",-1),f={style:{color:"#9ECBFF"}},B={class:"shiki github-light vp-code-light"},I={class:"line"},A=s("span",{style:{color:"#6F42C1"}},"git",-1),P=s("span",{style:{color:"#24292E"}}," ",-1),S=s("span",{style:{color:"#032F62"}},"checkout",-1),V=s("span",{style:{color:"#24292E"}}," ",-1),w={style:{color:"#032F62"}},N={class:"language-bash vp-adaptive-theme"},q=s("button",{title:"Copy Code",class:"copy"},null,-1),x=s("span",{class:"lang"},"bash",-1),D={class:"shiki github-dark vp-code-dark"},R={class:"line"},O=s("span",{style:{color:"#B392F0"}},"git",-1),L=s("span",{style:{color:"#E1E4E8"}}," ",-1),M=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),$=s("span",{style:{color:"#E1E4E8"}}," ",-1),G={style:{color:"#9ECBFF"}},H={class:"shiki github-light vp-code-light"},j={class:"line"},Y=s("span",{style:{color:"#6F42C1"}},"git",-1),Q=s("span",{style:{color:"#24292E"}}," ",-1),U=s("span",{style:{color:"#032F62"}},"checkout",-1),z=s("span",{style:{color:"#24292E"}}," ",-1),K={style:{color:"#032F62"}},J={class:"language-bash vp-adaptive-theme"},W=s("button",{title:"Copy Code",class:"copy"},null,-1),X=s("span",{class:"lang"},"bash",-1),Z={class:"shiki github-dark vp-code-dark"},ss={class:"line"},es=s("span",{style:{color:"#B392F0"}},"git",-1),as=s("span",{style:{color:"#E1E4E8"}}," ",-1),os=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),ts=s("span",{style:{color:"#E1E4E8"}}," ",-1),ls={style:{color:"#9ECBFF"}},ns={class:"shiki github-light vp-code-light"},is={class:"line"},cs=s("span",{style:{color:"#6F42C1"}},"git",-1),ps=s("span",{style:{color:"#24292E"}}," ",-1),rs=s("span",{style:{color:"#032F62"}},"checkout",-1),ds=s("span",{style:{color:"#24292E"}}," ",-1),hs={style:{color:"#032F62"}},_s=e('<li><p>Build the <code>celestia</code> binary:</p><p>a. Standard build</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span></span></code></pre></div><p>b. Experimental build</p><div class="tip custom-block"><p class="custom-block-title">OPTIONAL</p><p>If you&#39;re a node operator comfortable with experimental features and seeking optimal performance with minimal RAM usage, this option is recommended for you.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build-jemalloc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build-jemalloc</span></span></code></pre></div><p>This build option enables CGO, and downloads and installs <a href="https://jemalloc.net/" target="_blank" rel="noreferrer">jemalloc</a>. <a href="https://github.com/celestiaorg/celestia-node/releases/tag/v0.12.1#:~:text=%F0%9F%8F%97%EF%B8%8F-,New%20build%20option,-%3A%20Makefile%20now%20has" target="_blank" rel="noreferrer">Learn more about the build command</a>.</p></div></li><li><p>Install the binary:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div></li><li><p>Build the <code>cel-key</code> utility:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cel-key</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cel-key</span></span></code></pre></div></li><li><p>Verify that the binary is working and check the version:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">version</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">version</span></span></code></pre></div></li>',4),ys=e('<p>The output will show the semantic version of celestia-node, commit hash, build date, system version, and Golang version.</p><h2 id="installing-a-pre-built-binary" tabindex="-1">Installing a pre-built binary <a class="header-anchor" href="#installing-a-pre-built-binary" aria-label="Permalink to &quot;Installing a pre-built binary&quot;">​</a></h2><p>Installing a pre-built binary is the fastest way to get started with your Celestia data availability node. Releases after celestia-node v0.13.3 have these binaries available.</p><p>The installation script will download a binary file named <code>celestia</code>. Depending on your chosen installation option, the <code>celestia</code> binary will be available at one of these locations:</p><ul><li><code>$GOPATH/bin/celestia</code> (if Go is installed)</li><li><code>/usr/local/bin/celestia</code></li><li><code>$HOME/celestia-node-temp/celestia</code></li></ul><p>Pre-built binaries are available for:</p><ul><li>Operating systems: Darwin (Apple), Linux</li><li>Architectures: x86_64 (amd64), arm64</li></ul><h3 id="installation-options" tabindex="-1">Installation Options <a class="header-anchor" href="#installation-options" aria-label="Permalink to &quot;Installation Options&quot;">​</a></h3><p>You can install the latest version or specify a particular version:</p>',9),us={class:"language-bash vp-adaptive-theme"},gs=s("button",{title:"Copy Code",class:"copy"},null,-1),bs=s("span",{class:"lang"},"bash",-1),Es={class:"shiki github-dark vp-code-dark"},Fs=s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"# Install latest version")],-1),ms=e('<span class="line"><span style="color:#B392F0;">bash</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-c</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;$(</span><span style="color:#B392F0;">curl</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-sL</span><span style="color:#9ECBFF;"> https://docs.celestia.org/celestia-node.sh)&quot;</span></span>',1),vs=s("span",{class:"line"},null,-1),Cs=s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"# Install specific version, Mainnet Beta in this example")],-1),ks={class:"line"},Ts=e('<span style="color:#B392F0;">bash</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-c</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;$(</span><span style="color:#B392F0;">curl</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-sL</span><span style="color:#9ECBFF;"> https://docs.celestia.org/celestia-node.sh)&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> </span>',14),fs={style:{color:"#9ECBFF"}},Bs={class:"shiki github-light vp-code-light"},Is=s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"# Install latest version")],-1),As=e('<span class="line"><span style="color:#6F42C1;">bash</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-c</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;$(</span><span style="color:#6F42C1;">curl</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-sL</span><span style="color:#032F62;"> https://docs.celestia.org/celestia-node.sh)&quot;</span></span>',1),Ps=s("span",{class:"line"},null,-1),Ss=s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"# Install specific version, Mainnet Beta in this example")],-1),Vs={class:"line"},ws=e('<span style="color:#6F42C1;">bash</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-c</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;$(</span><span style="color:#6F42C1;">curl</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-sL</span><span style="color:#032F62;"> https://docs.celestia.org/celestia-node.sh)&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> </span>',14),Ns={style:{color:"#032F62"}},qs=e('<p>The script will:</p><ol><li>Detect your system&#39;s operating system and architecture</li><li>Download the appropriate binary</li><li>Verify the checksum for security</li><li>Provide installation location options based on your environment: <ul><li>If Go is installed: <ul><li>Go bin directory (<code>$GOPATH/bin</code>)</li><li>System bin directory (<code>/usr/local/bin</code>)</li><li>Keep in current directory</li></ul></li><li>If Go is not installed: <ul><li>System bin directory (<code>/usr/local/bin</code>)</li><li>Keep in current directory</li></ul></li></ul></li></ol><p>Follow the instructions in the terminal output to choose your installation preferences. After installation, you can verify the setup by checking the version:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">version</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--help</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">version</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--help</span></span></code></pre></div><p>View <a href="https://github.com/celestiaorg/docs/tree/main/public/celestia-node.sh" target="_blank" rel="noreferrer">the script</a> to learn more about what it is doing.</p><blockquote><p><strong>Note</strong>: The script maintains a log file at <code>$HOME/celestia-node-temp/logfile.log</code> for troubleshooting purposes.</p></blockquote><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>First, we recommend <a href="./nodes-overview">reading the overview</a> of our node types, if you haven&#39;t yet.</p><p>Now that you&#39;ve installed Celestia Node, it&#39;s time to <a href="./decide-node">pick your node type</a> and run your node!</p><p>If you&#39;re planning to run a light node, we recommend the <a href="./../tutorials/node-tutorial">node RPC CLI tutorial</a>.</p><h2 id="upgrading-your-binary" tabindex="-1">Upgrading your binary <a class="header-anchor" href="#upgrading-your-binary" aria-label="Permalink to &quot;Upgrading your binary&quot;">​</a></h2><p>To upgrade your binary, you can install the latest version from the instructions above and restart your node. If you run into any issues, Refer to the <a href="./celestia-node-troubleshooting">troubleshooting section</a>.</p>',12),Hs=JSON.parse('{"title":"Install celestia-node","description":"Learn to build and install celestia-node.","frontmatter":{"description":"Learn to build and install celestia-node.","head":[["meta",{"property":"og:title","content":"Install celestia-node | Celestia Docs"}],["meta",{"property":"og:description","content":"Learn to build and install celestia-node."}]]},"headers":[],"relativePath":"how-to-guides/celestia-node.md","filePath":"how-to-guides/celestia-node.md","lastUpdated":1734619886000}'),xs={name:"how-to-guides/celestia-node.md"},js=Object.assign(xs,{setup(Ds){return(Rs,Os)=>(c(),p("div",null,[r,s("ol",null,[d,s("li",null,[h,s("div",_,[y,s("div",u,[s("div",g,[b,E,s("pre",F,[s("code",null,[s("span",m,[v,C,k,T,s("span",f,"tags/"+a(o(l)["node-latest-tag"]),1)])])]),s("pre",B,[s("code",null,[s("span",I,[A,P,S,V,s("span",w,"tags/"+a(o(l)["node-latest-tag"]),1)])])])]),s("div",N,[q,x,s("pre",D,[s("code",null,[s("span",R,[O,L,M,$,s("span",G,"tags/"+a(o(i)["node-latest-tag"]),1)])])]),s("pre",H,[s("code",null,[s("span",j,[Y,Q,U,z,s("span",K,"tags/"+a(o(i)["node-latest-tag"]),1)])])])]),s("div",J,[W,X,s("pre",Z,[s("code",null,[s("span",ss,[es,as,os,ts,s("span",ls,"tags/"+a(o(n)["node-latest-tag"]),1)])])]),s("pre",ns,[s("code",null,[s("span",is,[cs,ps,rs,ds,s("span",hs,"tags/"+a(o(n)["node-latest-tag"]),1)])])])])])])]),_s]),ys,s("div",us,[gs,bs,s("pre",Es,[s("code",null,[Fs,t(`
`),ms,t(`
`),vs,t(`
`),Cs,t(`
`),s("span",ks,[Ts,s("span",fs,a(o(l)["node-latest-tag"]),1)])])]),s("pre",Bs,[s("code",null,[Is,t(`
`),As,t(`
`),Ps,t(`
`),Ss,t(`
`),s("span",Vs,[ws,s("span",Ns,a(o(l)["node-latest-tag"]),1)])])])]),qs]))}});export{Hs as __pageData,js as default};
