import{c as a}from"./chunks/constants.dc70dfe7.js";import{o as p,c as e,k as s,t as n,l as o,Q as l}from"./chunks/framework.c4c9d306.js";const t=l(`<h1 id="development-environment" tabindex="-1">Development environment <a class="header-anchor" href="#development-environment" aria-label="Permalink to &quot;Development environment&quot;">​</a></h1><p>This page will go over setting up your development environment to run Celestia software. This environment can be used for development, building binaries, and running nodes.</p><h2 id="install-dependencies" tabindex="-1">Install dependencies <a class="header-anchor" href="#install-dependencies" aria-label="Permalink to &quot;Install dependencies&quot;">​</a></h2><ol><li><p>If you are on Ubuntu, first update and upgrade your OS:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group--ZuFB" id="tab-Int_fQO" checked="checked"><label for="tab-Int_fQO">APT</label><input type="radio" name="group--ZuFB" id="tab-dMul9DK"><label for="tab-dMul9DK">YUM</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">upgrade</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">upgrade</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span></span></code></pre></div></div></div></li><li><p>Install essential packages that are necessary to execute many tasks like downloading files, compiling, and monitoring the node:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-LojPa" id="tab-WiJZF6E" checked="checked"><label for="tab-WiJZF6E">APT</label><input type="radio" name="group-LojPa" id="tab-FrDcQtP"><label for="tab-FrDcQtP">YUM</label><input type="radio" name="group-LojPa" id="tab-GT6htd-"><label for="tab-GT6htd-">Mac</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wget</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">aria2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clang</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg-config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libssl-dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jq</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build-essential</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">git </span><span style="color:#9ECBFF;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ncdu</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">curl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wget</span><span style="color:#24292E;"> </span><span style="color:#032F62;">aria2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clang</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pkg-config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libssl-dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jq</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build-essential</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">git </span><span style="color:#032F62;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ncdu</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wget</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">aria2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clang</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg-config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libssl-dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jq</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build-essential</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">git </span><span style="color:#9ECBFF;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ncdu</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">curl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wget</span><span style="color:#24292E;"> </span><span style="color:#032F62;">aria2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clang</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pkg-config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libssl-dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jq</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build-essential</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">git </span><span style="color:#032F62;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ncdu</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># these commands are for installing Homebrew, wget and jq</span></span>
<span class="line"><span style="color:#6A737D;"># follow the instructions from the output after running this command</span></span>
<span class="line"><span style="color:#B392F0;">/bin/bash</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-c</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;$(</span><span style="color:#B392F0;">curl</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-fsSL</span><span style="color:#9ECBFF;"> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># then install wget &amp; jq</span></span>
<span class="line"><span style="color:#B392F0;">brew</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wget</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">brew</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jq</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># these commands are for installing Homebrew, wget and jq</span></span>
<span class="line"><span style="color:#6A737D;"># follow the instructions from the output after running this command</span></span>
<span class="line"><span style="color:#6F42C1;">/bin/bash</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-c</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;$(</span><span style="color:#6F42C1;">curl</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-fsSL</span><span style="color:#032F62;"> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># then install wget &amp; jq</span></span>
<span class="line"><span style="color:#6F42C1;">brew</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wget</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">brew</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jq</span></span></code></pre></div></div></div></li></ol><h2 id="install-golang" tabindex="-1">Install Golang <a class="header-anchor" href="#install-golang" aria-label="Permalink to &quot;Install Golang&quot;">​</a></h2><p>celestia-node is written in Golang so we must install Golang to build and run our node.</p>`,6),c=s("p",null,"Set the version for your desired network:",-1),r={class:"vp-code-group vp-adaptive-theme"},y=l('<div class="tabs"><input type="radio" name="group-8GE_t" id="tab-g0JMUHk" checked="checked"><label for="tab-g0JMUHk">Mainnet Beta</label><input type="radio" name="group-8GE_t" id="tab-i-MRFkC"><label for="tab-i-MRFkC">Mocha</label><input type="radio" name="group-8GE_t" id="tab-IhDiHSV"><label for="tab-IhDiHSV">Arabica</label></div>',1),E={class:"blocks"},i={class:"language-bash vp-adaptive-theme active"},d=s("button",{title:"Copy Code",class:"copy"},null,-1),F=s("span",{class:"lang"},"bash",-1),u={class:"shiki github-dark vp-code-dark"},g={class:"line"},h=s("span",{style:{color:"#E1E4E8"}},"ver",-1),C=s("span",{style:{color:"#F97583"}},"=",-1),b={style:{color:"#9ECBFF"}},v={class:"shiki github-light vp-code-light"},m={class:"line"},B=s("span",{style:{color:"#24292E"}},"ver",-1),_=s("span",{style:{color:"#D73A49"}},"=",-1),k={style:{color:"#032F62"}},q={class:"language-bash vp-adaptive-theme"},f=s("button",{title:"Copy Code",class:"copy"},null,-1),w=s("span",{class:"lang"},"bash",-1),$={class:"shiki github-dark vp-code-dark"},A={class:"line"},H=s("span",{style:{color:"#E1E4E8"}},"ver",-1),M=s("span",{style:{color:"#F97583"}},"=",-1),z={style:{color:"#9ECBFF"}},T={class:"shiki github-light vp-code-light"},x={class:"line"},P=s("span",{style:{color:"#24292E"}},"ver",-1),D=s("span",{style:{color:"#D73A49"}},"=",-1),O={style:{color:"#032F62"}},S={class:"language-bash vp-adaptive-theme"},I=s("button",{title:"Copy Code",class:"copy"},null,-1),L=s("span",{class:"lang"},"bash",-1),j={class:"shiki github-dark vp-code-dark"},V={class:"line"},N=s("span",{style:{color:"#E1E4E8"}},"ver",-1),G=s("span",{style:{color:"#F97583"}},"=",-1),R={style:{color:"#9ECBFF"}},U={class:"shiki github-light vp-code-light"},Q={class:"line"},W=s("span",{style:{color:"#24292E"}},"ver",-1),Z=s("span",{style:{color:"#D73A49"}},"=",-1),J={style:{color:"#032F62"}},K=l(`<li><p>Download and install Golang:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-8cLS5" id="tab-POSoPne" checked="checked"><label for="tab-POSoPne">Ubuntu (AMD)</label><input type="radio" name="group-8cLS5" id="tab-PWyH-_x"><label for="tab-PWyH-_x">Ubuntu (ARM)</label><input type="radio" name="group-8cLS5" id="tab-TbVcRvV"><label for="tab-TbVcRvV">Mac (Apple)</label><input type="radio" name="group-8cLS5" id="tab-osiLv-L"><label for="tab-osiLv-L">Mac (Intel)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="color:#B392F0;">wget</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://golang.org/dl/go</span><span style="color:#E1E4E8;">$ver</span><span style="color:#9ECBFF;">.linux-amd64.tar.gz&quot;</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/go</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tar</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-C</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-xzf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;go</span><span style="color:#E1E4E8;">$ver</span><span style="color:#9ECBFF;">.linux-amd64.tar.gz&quot;</span></span>
<span class="line"><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;go</span><span style="color:#E1E4E8;">$ver</span><span style="color:#9ECBFF;">.linux-amd64.tar.gz&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $HOME</span></span>
<span class="line"><span style="color:#6F42C1;">wget</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://golang.org/dl/go</span><span style="color:#24292E;">$ver</span><span style="color:#032F62;">.linux-amd64.tar.gz&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/go</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tar</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-C</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-xzf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;go</span><span style="color:#24292E;">$ver</span><span style="color:#032F62;">.linux-amd64.tar.gz&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;go</span><span style="color:#24292E;">$ver</span><span style="color:#032F62;">.linux-amd64.tar.gz&quot;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="color:#B392F0;">wget</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://golang.org/dl/go</span><span style="color:#E1E4E8;">$ver</span><span style="color:#9ECBFF;">.linux-arm64.tar.gz&quot;</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/go</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tar</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-C</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-xzf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;go</span><span style="color:#E1E4E8;">$ver</span><span style="color:#9ECBFF;">.linux-arm64.tar.gz&quot;</span></span>
<span class="line"><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;go</span><span style="color:#E1E4E8;">$ver</span><span style="color:#9ECBFF;">.linux-arm64.tar.gz&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $HOME</span></span>
<span class="line"><span style="color:#6F42C1;">wget</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://golang.org/dl/go</span><span style="color:#24292E;">$ver</span><span style="color:#032F62;">.linux-arm64.tar.gz&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/go</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tar</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-C</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-xzf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;go</span><span style="color:#24292E;">$ver</span><span style="color:#032F62;">.linux-arm64.tar.gz&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;go</span><span style="color:#24292E;">$ver</span><span style="color:#032F62;">.linux-arm64.tar.gz&quot;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="color:#B392F0;">wget</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://golang.org/dl/go</span><span style="color:#E1E4E8;">$ver</span><span style="color:#9ECBFF;">.darwin-arm64.tar.gz&quot;</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/go</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tar</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-C</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-xzf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;go</span><span style="color:#E1E4E8;">$ver</span><span style="color:#9ECBFF;">.darwin-arm64.tar.gz&quot;</span></span>
<span class="line"><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;go</span><span style="color:#E1E4E8;">$ver</span><span style="color:#9ECBFF;">.darwin-arm64.tar.gz&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $HOME</span></span>
<span class="line"><span style="color:#6F42C1;">wget</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://golang.org/dl/go</span><span style="color:#24292E;">$ver</span><span style="color:#032F62;">.darwin-arm64.tar.gz&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/go</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tar</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-C</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-xzf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;go</span><span style="color:#24292E;">$ver</span><span style="color:#032F62;">.darwin-arm64.tar.gz&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;go</span><span style="color:#24292E;">$ver</span><span style="color:#032F62;">.darwin-arm64.tar.gz&quot;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="color:#B392F0;">wget</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://golang.org/dl/go</span><span style="color:#E1E4E8;">$ver</span><span style="color:#9ECBFF;">.darwin-amd64.tar.gz&quot;</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/go</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tar</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-C</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-xzf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;go</span><span style="color:#E1E4E8;">$ver</span><span style="color:#9ECBFF;">.darwin-amd64.tar.gz&quot;</span></span>
<span class="line"><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;go</span><span style="color:#E1E4E8;">$ver</span><span style="color:#9ECBFF;">.darwin-amd64.tar.gz&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $HOME</span></span>
<span class="line"><span style="color:#6F42C1;">wget</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://golang.org/dl/go</span><span style="color:#24292E;">$ver</span><span style="color:#032F62;">.darwin-amd64.tar.gz&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/go</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tar</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-C</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-xzf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;go</span><span style="color:#24292E;">$ver</span><span style="color:#032F62;">.darwin-amd64.tar.gz&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;go</span><span style="color:#24292E;">$ver</span><span style="color:#032F62;">.darwin-amd64.tar.gz&quot;</span></span></code></pre></div></div></div></li><li><p>Add your <code>/usr/local/go/bin</code> directory to your <code>$PATH</code> if you have not already:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-AAWOd" id="tab-QFd6CSZ" checked="checked"><label for="tab-QFd6CSZ">bash</label><input type="radio" name="group-AAWOd" id="tab-0Cxb-yv"><label for="tab-0Cxb-yv">zsh</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;export PATH=</span><span style="color:#E1E4E8;">$PATH</span><span style="color:#9ECBFF;">:/usr/local/go/bin:</span><span style="color:#E1E4E8;">$HOME</span><span style="color:#9ECBFF;">/go/bin&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.bash_profile</span></span>
<span class="line"><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.bash_profile</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;export PATH=</span><span style="color:#24292E;">$PATH</span><span style="color:#032F62;">:/usr/local/go/bin:</span><span style="color:#24292E;">$HOME</span><span style="color:#032F62;">/go/bin&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.bash_profile</span></span>
<span class="line"><span style="color:#005CC5;">source</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.bash_profile</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;export PATH=</span><span style="color:#E1E4E8;">$PATH</span><span style="color:#9ECBFF;">:/usr/local/go/bin:</span><span style="color:#E1E4E8;">$HOME</span><span style="color:#9ECBFF;">/go/bin&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.zshrc</span></span>
<span class="line"><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.zshrc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;export PATH=</span><span style="color:#24292E;">$PATH</span><span style="color:#032F62;">:/usr/local/go/bin:</span><span style="color:#24292E;">$HOME</span><span style="color:#032F62;">/go/bin&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.zshrc</span></span>
<span class="line"><span style="color:#005CC5;">source</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.zshrc</span></span></code></pre></div></div></div></li><li><p>To verify that the correct version of Go was installed correctly run:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">version</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">go</span><span style="color:#24292E;"> </span><span style="color:#032F62;">version</span></span></code></pre></div></li>`,3),Y=s("p",null,"The output will show the version installed.",-1),ps=JSON.parse('{"title":"Development environment","description":"Learn to set up your development environment to run Celestia software.","frontmatter":{"description":"Learn to set up your development environment to run Celestia software.","head":[["meta",{"name":"og:title","content":"Development environment | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/environment.md","filePath":"nodes/environment.md","lastUpdated":1712582876000}'),X={name:"nodes/environment.md"},es=Object.assign(X,{setup(ss){return(as,ns)=>(p(),e("div",null,[t,s("ol",null,[s("li",null,[c,s("div",r,[y,s("div",E,[s("div",i,[d,F,s("pre",u,[s("code",null,[s("span",g,[h,C,s("span",b,'"'+n(o(a).golangNodeMainnet)+'"',1)])])]),s("pre",v,[s("code",null,[s("span",m,[B,_,s("span",k,'"'+n(o(a).golangNodeMainnet)+'"',1)])])])]),s("div",q,[f,w,s("pre",$,[s("code",null,[s("span",A,[H,M,s("span",z,'"'+n(o(a).golangNodeMocha)+'"',1)])])]),s("pre",T,[s("code",null,[s("span",x,[P,D,s("span",O,'"'+n(o(a).golangNodeMocha)+'"',1)])])])]),s("div",S,[I,L,s("pre",j,[s("code",null,[s("span",V,[N,G,s("span",R,'"'+n(o(a).golangNodeArabica)+'"',1)])])]),s("pre",U,[s("code",null,[s("span",Q,[W,Z,s("span",J,'"'+n(o(a).golangNodeArabica)+'"',1)])])])])])])]),K]),Y]))}});export{ps as __pageData,es as default};