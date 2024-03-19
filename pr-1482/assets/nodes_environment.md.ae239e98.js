import{c as a}from"./chunks/constants.6b678d01.js";import{o as p,c as e,k as s,t as n,l as o,Q as l}from"./chunks/framework.96c2072d.js";const t=l(`<h1 id="development-environment" tabindex="-1">Development environment <a class="header-anchor" href="#development-environment" aria-label="Permalink to &quot;Development environment&quot;">​</a></h1><p>This page will go over setting up your development environment to run Celestia software. This environment can be used for development, building binaries, and running nodes.</p><h2 id="install-dependencies" tabindex="-1">Install dependencies <a class="header-anchor" href="#install-dependencies" aria-label="Permalink to &quot;Install dependencies&quot;">​</a></h2><ol><li><p>If you are on Ubuntu, first update and upgrade your OS:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-v881P" id="tab-6ouaMcC" checked="checked"><label for="tab-6ouaMcC">APT</label><input type="radio" name="group-v881P" id="tab-UFGZfwQ"><label for="tab-UFGZfwQ">YUM</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">upgrade</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">upgrade</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span></span></code></pre></div></div></div></li><li><p>Install essential packages that are necessary to execute many tasks like downloading files, compiling, and monitoring the node:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Om0ph" id="tab-dINQgHc" checked="checked"><label for="tab-dINQgHc">APT</label><input type="radio" name="group-Om0ph" id="tab-42md4PM"><label for="tab-42md4PM">YUM</label><input type="radio" name="group-Om0ph" id="tab-DwGsuO3"><label for="tab-DwGsuO3">Mac</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wget</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">aria2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clang</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg-config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libssl-dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jq</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build-essential</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
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
<span class="line"><span style="color:#6F42C1;">brew</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wget</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">brew</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jq</span></span></code></pre></div></div></div></li></ol><h2 id="install-golang" tabindex="-1">Install Golang <a class="header-anchor" href="#install-golang" aria-label="Permalink to &quot;Install Golang&quot;">​</a></h2><p>celestia-node is written in Golang so we must install Golang to build and run our node.</p>`,6),c=s("p",null,"Set the version for your desired network:",-1),r={class:"vp-code-group vp-adaptive-theme"},y=l('<div class="tabs"><input type="radio" name="group-fh9Nv" id="tab-GrdAGY8" checked="checked"><label for="tab-GrdAGY8">Mainnet Beta</label><input type="radio" name="group-fh9Nv" id="tab-3byIQWZ"><label for="tab-3byIQWZ">Mocha</label><input type="radio" name="group-fh9Nv" id="tab-V9_DNT2"><label for="tab-V9_DNT2">Arabica</label></div>',1),i={class:"blocks"},E={class:"language-bash vp-adaptive-theme active"},d=s("button",{title:"Copy Code",class:"copy"},null,-1),F=s("span",{class:"lang"},"bash",-1),u={class:"shiki github-dark vp-code-dark"},g={class:"line"},h=s("span",{style:{color:"#E1E4E8"}},"ver",-1),C=s("span",{style:{color:"#F97583"}},"=",-1),b={style:{color:"#9ECBFF"}},v={class:"shiki github-light vp-code-light"},m={class:"line"},B=s("span",{style:{color:"#24292E"}},"ver",-1),_=s("span",{style:{color:"#D73A49"}},"=",-1),k={style:{color:"#032F62"}},q={class:"language-bash vp-adaptive-theme"},f=s("button",{title:"Copy Code",class:"copy"},null,-1),w=s("span",{class:"lang"},"bash",-1),$={class:"shiki github-dark vp-code-dark"},A={class:"line"},H=s("span",{style:{color:"#E1E4E8"}},"ver",-1),M=s("span",{style:{color:"#F97583"}},"=",-1),z={style:{color:"#9ECBFF"}},T={class:"shiki github-light vp-code-light"},D={class:"line"},x=s("span",{style:{color:"#24292E"}},"ver",-1),O=s("span",{style:{color:"#D73A49"}},"=",-1),P={style:{color:"#032F62"}},N={class:"language-bash vp-adaptive-theme"},I=s("button",{title:"Copy Code",class:"copy"},null,-1),G=s("span",{class:"lang"},"bash",-1),S={class:"shiki github-dark vp-code-dark"},j={class:"line"},L=s("span",{style:{color:"#E1E4E8"}},"ver",-1),V=s("span",{style:{color:"#F97583"}},"=",-1),Y={style:{color:"#9ECBFF"}},Q={class:"shiki github-light vp-code-light"},U={class:"line"},R=s("span",{style:{color:"#24292E"}},"ver",-1),Z=s("span",{style:{color:"#D73A49"}},"=",-1),W={style:{color:"#032F62"}},X=l(`<li><p>Download and install Golang:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-pjL4Y" id="tab-T1pDcX6" checked="checked"><label for="tab-T1pDcX6">Ubuntu (AMD)</label><input type="radio" name="group-pjL4Y" id="tab-EYeW9Zk"><label for="tab-EYeW9Zk">Ubuntu (ARM)</label><input type="radio" name="group-pjL4Y" id="tab-Lq8MDif"><label for="tab-Lq8MDif">Mac (Apple)</label><input type="radio" name="group-pjL4Y" id="tab--y53_Hi"><label for="tab--y53_Hi">Mac (Intel)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span></span>
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
<span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;go</span><span style="color:#24292E;">$ver</span><span style="color:#032F62;">.darwin-amd64.tar.gz&quot;</span></span></code></pre></div></div></div></li><li><p>Add your <code>/usr/local/go/bin</code> directory to your <code>$PATH</code> if you have not already:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-RohbO" id="tab-GH7icx7" checked="checked"><label for="tab-GH7icx7">bash</label><input type="radio" name="group-RohbO" id="tab-Q-tiu5q"><label for="tab-Q-tiu5q">zsh</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;export PATH=</span><span style="color:#E1E4E8;">$PATH</span><span style="color:#9ECBFF;">:/usr/local/go/bin:</span><span style="color:#E1E4E8;">$HOME</span><span style="color:#9ECBFF;">/go/bin&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.bash_profile</span></span>
<span class="line"><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.bash_profile</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;export PATH=</span><span style="color:#24292E;">$PATH</span><span style="color:#032F62;">:/usr/local/go/bin:</span><span style="color:#24292E;">$HOME</span><span style="color:#032F62;">/go/bin&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.bash_profile</span></span>
<span class="line"><span style="color:#005CC5;">source</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.bash_profile</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;export PATH=</span><span style="color:#E1E4E8;">$PATH</span><span style="color:#9ECBFF;">:/usr/local/go/bin:</span><span style="color:#E1E4E8;">$HOME</span><span style="color:#9ECBFF;">/go/bin&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.zshrc</span></span>
<span class="line"><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.zshrc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;export PATH=</span><span style="color:#24292E;">$PATH</span><span style="color:#032F62;">:/usr/local/go/bin:</span><span style="color:#24292E;">$HOME</span><span style="color:#032F62;">/go/bin&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.zshrc</span></span>
<span class="line"><span style="color:#005CC5;">source</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.zshrc</span></span></code></pre></div></div></div></li><li><p>To verify that the correct version of Go was installed correctly run:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">version</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">go</span><span style="color:#24292E;"> </span><span style="color:#032F62;">version</span></span></code></pre></div></li>`,3),J=s("p",null,"The output will show the version installed.",-1),ps=JSON.parse('{"title":"Development environment","description":"Learn to set up your development environment to run Celestia software.","frontmatter":{"description":"Learn to set up your development environment to run Celestia software.","head":[["meta",{"name":"og:title","content":"Development environment | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/environment.md","filePath":"nodes/environment.md","lastUpdated":1710857232000}'),K={name:"nodes/environment.md"},es=Object.assign(K,{setup(ss){return(as,ns)=>(p(),e("div",null,[t,s("ol",null,[s("li",null,[c,s("div",r,[y,s("div",i,[s("div",E,[d,F,s("pre",u,[s("code",null,[s("span",g,[h,C,s("span",b,'"'+n(o(a).golangNodeMainnet)+'"',1)])])]),s("pre",v,[s("code",null,[s("span",m,[B,_,s("span",k,'"'+n(o(a).golangNodeMainnet)+'"',1)])])])]),s("div",q,[f,w,s("pre",$,[s("code",null,[s("span",A,[H,M,s("span",z,'"'+n(o(a).golangNodeMocha)+'"',1)])])]),s("pre",T,[s("code",null,[s("span",D,[x,O,s("span",P,'"'+n(o(a).golangNodeMocha)+'"',1)])])])]),s("div",N,[I,G,s("pre",S,[s("code",null,[s("span",j,[L,V,s("span",Y,'"'+n(o(a).golangNodeArabica)+'"',1)])])]),s("pre",Q,[s("code",null,[s("span",U,[R,Z,s("span",W,'"'+n(o(a).golangNodeArabica)+'"',1)])])])])])])]),X]),J]))}});export{ps as __pageData,es as default};
