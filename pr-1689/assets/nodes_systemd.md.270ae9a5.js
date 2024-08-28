import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.18f265ea.js";const h=JSON.parse('{"title":"Setting up your node as a background process with SystemD","description":"Learn how to setup your node as a background process with SystemD.","frontmatter":{"description":"Learn how to setup your node as a background process with SystemD.","head":[["meta",{"name":"og:title","content":"Setting up your node as a background process with SystemD | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/systemd.md","filePath":"nodes/systemd.md","lastUpdated":1724810919000}'),e={name:"nodes/systemd.md"},p=l(`<h1 id="setting-up-your-node-as-a-background-process-with-systemd" tabindex="-1">Setting up your node as a background process with SystemD <a class="header-anchor" href="#setting-up-your-node-as-a-background-process-with-systemd" aria-label="Permalink to &quot;Setting up your node as a background process with SystemD&quot;">​</a></h1><p>SystemD is a daemon service useful for running applications as background processes.</p><h2 id="consensus-nodes" tabindex="-1">Consensus nodes <a class="header-anchor" href="#consensus-nodes" aria-label="Permalink to &quot;Consensus nodes&quot;">​</a></h2><p>If you are running a validator or consensus node, here are the steps to setting up <code>celestia-appd</code> as a background process.</p><h3 id="start-the-celestia-app-with-systemd" tabindex="-1">Start the celestia-app with SystemD <a class="header-anchor" href="#start-the-celestia-app-with-systemd" aria-label="Permalink to &quot;Start the celestia-app with SystemD&quot;">​</a></h3><p>SystemD is a daemon service useful for running applications as background processes.</p><p>Create Celestia-App systemd file:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tee</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#9ECBFF;">EOF</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">/dev/null /etc/systemd/system/celestia-appd.service</span></span>
<span class="line"><span style="color:#9ECBFF;">[Unit]</span></span>
<span class="line"><span style="color:#9ECBFF;">Description=celestia-appd Cosmos daemon</span></span>
<span class="line"><span style="color:#9ECBFF;">After=network-online.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">[Service]</span></span>
<span class="line"><span style="color:#9ECBFF;">User=</span><span style="color:#E1E4E8;">$USER</span></span>
<span class="line"><span style="color:#9ECBFF;">ExecStart=$(</span><span style="color:#79B8FF;">which</span><span style="color:#9ECBFF;"> celestia-appd) start</span></span>
<span class="line"><span style="color:#9ECBFF;">Restart=on-failure</span></span>
<span class="line"><span style="color:#9ECBFF;">RestartSec=3</span></span>
<span class="line"><span style="color:#9ECBFF;">LimitNOFILE=65535</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">[Install]</span></span>
<span class="line"><span style="color:#9ECBFF;">WantedBy=multi-user.target</span></span>
<span class="line"><span style="color:#9ECBFF;">EOF</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tee</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#032F62;">EOF</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">/dev/null /etc/systemd/system/celestia-appd.service</span></span>
<span class="line"><span style="color:#032F62;">[Unit]</span></span>
<span class="line"><span style="color:#032F62;">Description=celestia-appd Cosmos daemon</span></span>
<span class="line"><span style="color:#032F62;">After=network-online.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">[Service]</span></span>
<span class="line"><span style="color:#032F62;">User=</span><span style="color:#24292E;">$USER</span></span>
<span class="line"><span style="color:#032F62;">ExecStart=$(</span><span style="color:#005CC5;">which</span><span style="color:#032F62;"> celestia-appd) start</span></span>
<span class="line"><span style="color:#032F62;">Restart=on-failure</span></span>
<span class="line"><span style="color:#032F62;">RestartSec=3</span></span>
<span class="line"><span style="color:#032F62;">LimitNOFILE=65535</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">[Install]</span></span>
<span class="line"><span style="color:#032F62;">WantedBy=multi-user.target</span></span>
<span class="line"><span style="color:#032F62;">EOF</span></span></code></pre></div><p>If the file was created successfully you will be able to see its content:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cat</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/systemd/system/celestia-appd.service</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/systemd/system/celestia-appd.service</span></span></code></pre></div><p>Enable and start <code>celestia-appd</code> daemon:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-appd</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-appd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-appd</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-appd</span></span></code></pre></div><p>Check if daemon has been started correctly:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-appd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-appd</span></span></code></pre></div><p>Check daemon logs in real time:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">journalctl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-u</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-appd.service</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">journalctl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-u</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-appd.service</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span></span></code></pre></div><p>To check if your node is in sync before going forward:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost:26657/status</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">jq</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">jq</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.sync_info</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost:26657/status</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">jq</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">jq</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.sync_info</span></span></code></pre></div><p>Make sure that you have <code>&quot;catching_up&quot;: false</code>, otherwise leave it running until it is in sync.</p><h2 id="data-availability-nodes" tabindex="-1">Data availability nodes <a class="header-anchor" href="#data-availability-nodes" aria-label="Permalink to &quot;Data availability nodes&quot;">​</a></h2><h3 id="celestia-full-storage-node" tabindex="-1">Celestia full storage node <a class="header-anchor" href="#celestia-full-storage-node" aria-label="Permalink to &quot;Celestia full storage node&quot;">​</a></h3><p>Create Celestia full storage node systemd file:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tee</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#9ECBFF;">EOF</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">/dev/null /etc/systemd/system/celestia-full.service</span></span>
<span class="line"><span style="color:#9ECBFF;">[Unit]</span></span>
<span class="line"><span style="color:#9ECBFF;">Description=celestia-full Cosmos daemon</span></span>
<span class="line"><span style="color:#9ECBFF;">After=network-online.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">[Service]</span></span>
<span class="line"><span style="color:#9ECBFF;">User=</span><span style="color:#E1E4E8;">$USER</span></span>
<span class="line"><span style="color:#9ECBFF;">ExecStart=$(</span><span style="color:#79B8FF;">which</span><span style="color:#9ECBFF;"> celestia) full start</span></span>
<span class="line"><span style="color:#9ECBFF;">Restart=on-failure</span></span>
<span class="line"><span style="color:#9ECBFF;">RestartSec=3</span></span>
<span class="line"><span style="color:#9ECBFF;">LimitNOFILE=1400000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">[Install]</span></span>
<span class="line"><span style="color:#9ECBFF;">WantedBy=multi-user.target</span></span>
<span class="line"><span style="color:#9ECBFF;">EOF</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tee</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#032F62;">EOF</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">/dev/null /etc/systemd/system/celestia-full.service</span></span>
<span class="line"><span style="color:#032F62;">[Unit]</span></span>
<span class="line"><span style="color:#032F62;">Description=celestia-full Cosmos daemon</span></span>
<span class="line"><span style="color:#032F62;">After=network-online.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">[Service]</span></span>
<span class="line"><span style="color:#032F62;">User=</span><span style="color:#24292E;">$USER</span></span>
<span class="line"><span style="color:#032F62;">ExecStart=$(</span><span style="color:#005CC5;">which</span><span style="color:#032F62;"> celestia) full start</span></span>
<span class="line"><span style="color:#032F62;">Restart=on-failure</span></span>
<span class="line"><span style="color:#032F62;">RestartSec=3</span></span>
<span class="line"><span style="color:#032F62;">LimitNOFILE=1400000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">[Install]</span></span>
<span class="line"><span style="color:#032F62;">WantedBy=multi-user.target</span></span>
<span class="line"><span style="color:#032F62;">EOF</span></span></code></pre></div><p>If the file was created successfully you will be able to see its content:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cat</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/systemd/system/celestia-full.service</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/systemd/system/celestia-full.service</span></span></code></pre></div><p>Enable and start celestia-full daemon:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-full</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-full</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">journalctl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-u</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">celestia-full.service </span><span style="color:#79B8FF;">-f</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-full</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-full</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">journalctl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-u</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">celestia-full.service </span><span style="color:#005CC5;">-f</span></span></code></pre></div><p>You should be seeing logs coming through of the full storage node syncing.</p><h3 id="celestia-bridge-node" tabindex="-1">Celestia bridge node <a class="header-anchor" href="#celestia-bridge-node" aria-label="Permalink to &quot;Celestia bridge node&quot;">​</a></h3><p>Create Celestia Bridge systemd file:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tee</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#9ECBFF;">EOF</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">/dev/null /etc/systemd/system/celestia-bridge.service</span></span>
<span class="line"><span style="color:#9ECBFF;">[Unit]</span></span>
<span class="line"><span style="color:#9ECBFF;">Description=celestia-bridge Cosmos daemon</span></span>
<span class="line"><span style="color:#9ECBFF;">After=network-online.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">[Service]</span></span>
<span class="line"><span style="color:#9ECBFF;">User=</span><span style="color:#E1E4E8;">$USER</span></span>
<span class="line"><span style="color:#9ECBFF;">ExecStart=$(</span><span style="color:#79B8FF;">which</span><span style="color:#9ECBFF;"> celestia) bridge start</span></span>
<span class="line"><span style="color:#9ECBFF;">Restart=on-failure</span></span>
<span class="line"><span style="color:#9ECBFF;">RestartSec=3</span></span>
<span class="line"><span style="color:#9ECBFF;">LimitNOFILE=1400000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">[Install]</span></span>
<span class="line"><span style="color:#9ECBFF;">WantedBy=multi-user.target</span></span>
<span class="line"><span style="color:#9ECBFF;">EOF</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tee</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#032F62;">EOF</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">/dev/null /etc/systemd/system/celestia-bridge.service</span></span>
<span class="line"><span style="color:#032F62;">[Unit]</span></span>
<span class="line"><span style="color:#032F62;">Description=celestia-bridge Cosmos daemon</span></span>
<span class="line"><span style="color:#032F62;">After=network-online.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">[Service]</span></span>
<span class="line"><span style="color:#032F62;">User=</span><span style="color:#24292E;">$USER</span></span>
<span class="line"><span style="color:#032F62;">ExecStart=$(</span><span style="color:#005CC5;">which</span><span style="color:#032F62;"> celestia) bridge start</span></span>
<span class="line"><span style="color:#032F62;">Restart=on-failure</span></span>
<span class="line"><span style="color:#032F62;">RestartSec=3</span></span>
<span class="line"><span style="color:#032F62;">LimitNOFILE=1400000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">[Install]</span></span>
<span class="line"><span style="color:#032F62;">WantedBy=multi-user.target</span></span>
<span class="line"><span style="color:#032F62;">EOF</span></span></code></pre></div><p>If the file was created successfully you will be able to see its content:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cat</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/systemd/system/celestia-bridge.service</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/systemd/system/celestia-bridge.service</span></span></code></pre></div><p>Enable and start celestia-bridge daemon:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-bridge</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-bridge</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">journalctl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-u</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">celestia-bridge.service </span><span style="color:#79B8FF;">-f</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-bridge</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-bridge</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">journalctl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-u</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">celestia-bridge.service </span><span style="color:#005CC5;">-f</span></span></code></pre></div><p>Now, the Celestia bridge node will start syncing headers and storing blocks from <code>celestia-app</code>.</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>At startup, we can see the <code>multiaddress</code> from Celestia bridge node. This is <strong>needed for future light node</strong> connections and communication between Celestia Bridge Nodes</p></div><p>Example:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">NODE_IP</span><span style="color:#F97583;">=&lt;</span><span style="color:#9ECBFF;">UR</span><span style="color:#E1E4E8;">I</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">]</span></span>
<span class="line"><span style="color:#B392F0;">/ip4/$NODE_IP/tcp/2121/p2p/12D3KooWD5wCBJXKQuDjhXFjTFMrZoysGVLtVht5hMoVbSLCbV22</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">NODE_IP</span><span style="color:#D73A49;">=&lt;</span><span style="color:#032F62;">UR</span><span style="color:#24292E;">I</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">]</span></span>
<span class="line"><span style="color:#6F42C1;">/ip4/$NODE_IP/tcp/2121/p2p/12D3KooWD5wCBJXKQuDjhXFjTFMrZoysGVLtVht5hMoVbSLCbV22</span></span></code></pre></div><p>You should be seeing logs coming through of the bridge node syncing.</p><h3 id="celestia-light-node" tabindex="-1">Celestia light node <a class="header-anchor" href="#celestia-light-node" aria-label="Permalink to &quot;Celestia light node&quot;">​</a></h3><p>Start the light node as daemon process in the background</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tee</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#9ECBFF;">EOF</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">/dev/null /etc/systemd/system/celestia-lightd.service</span></span>
<span class="line"><span style="color:#9ECBFF;">[Unit]</span></span>
<span class="line"><span style="color:#9ECBFF;">Description=celestia-lightd light node</span></span>
<span class="line"><span style="color:#9ECBFF;">After=network-online.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">[Service]</span></span>
<span class="line"><span style="color:#9ECBFF;">User=</span><span style="color:#E1E4E8;">$USER</span></span>
<span class="line"><span style="color:#9ECBFF;">ExecStart=$(</span><span style="color:#79B8FF;">which</span><span style="color:#9ECBFF;"> celestia) light start --core.ip &lt;URI&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">Restart=on-failure</span></span>
<span class="line"><span style="color:#9ECBFF;">RestartSec=3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">[Install]</span></span>
<span class="line"><span style="color:#9ECBFF;">WantedBy=multi-user.target</span></span>
<span class="line"><span style="color:#9ECBFF;">EOF</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tee</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#032F62;">EOF</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">/dev/null /etc/systemd/system/celestia-lightd.service</span></span>
<span class="line"><span style="color:#032F62;">[Unit]</span></span>
<span class="line"><span style="color:#032F62;">Description=celestia-lightd light node</span></span>
<span class="line"><span style="color:#032F62;">After=network-online.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">[Service]</span></span>
<span class="line"><span style="color:#032F62;">User=</span><span style="color:#24292E;">$USER</span></span>
<span class="line"><span style="color:#032F62;">ExecStart=$(</span><span style="color:#005CC5;">which</span><span style="color:#032F62;"> celestia) light start --core.ip &lt;URI&gt;</span></span>
<span class="line"><span style="color:#032F62;">Restart=on-failure</span></span>
<span class="line"><span style="color:#032F62;">RestartSec=3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">[Install]</span></span>
<span class="line"><span style="color:#032F62;">WantedBy=multi-user.target</span></span>
<span class="line"><span style="color:#032F62;">EOF</span></span></code></pre></div><p>If the file was created successfully you will be able to see its content:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cat</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/systemd/system/celestia-lightd.service</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/systemd/system/celestia-lightd.service</span></span></code></pre></div><p>Enable and start celestia-lightd daemon:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-lightd</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-lightd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-lightd</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-lightd</span></span></code></pre></div><p>Check if daemon has been started correctly:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-lightd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-lightd</span></span></code></pre></div><p>Check daemon logs in real time:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">journalctl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-u</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-lightd.service</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">journalctl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-u</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-lightd.service</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span></span></code></pre></div><p>Now, the Celestia light node will start syncing headers. After sync is finished, light node will do Data Availability Sampling (DAS) from the bridge node.</p>`,52),o=[p];function t(c,r,i,y,d,E){return a(),n("div",null,o)}const u=s(e,[["render",t]]);export{h as __pageData,u as default};
