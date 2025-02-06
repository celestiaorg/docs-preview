import{_ as s,o as a,c as e,Q as o}from"./chunks/framework.9a1d3f20.js";const F=JSON.parse('{"title":"Optional: Setting up your DA node to use ZFS","description":"Learn how to setup your DA node to use on-fly compression with ZFS.","frontmatter":{"description":"Learn how to setup your DA node to use on-fly compression with ZFS.","head":[["meta",{"property":"og:title","content":"Optional: Setting up your DA node to use ZFS | Celestia Docs"}],["meta",{"property":"og:description","content":"Learn how to setup your DA node to use on-fly compression with ZFS."}]]},"headers":[],"relativePath":"how-to-guides/zfs.md","filePath":"how-to-guides/zfs.md","lastUpdated":1738852383000}'),l={name:"how-to-guides/zfs.md"},n=o(`<h1 id="optional-setting-up-your-da-node-to-use-zfs" tabindex="-1">Optional: Setting up your DA node to use ZFS <a class="header-anchor" href="#optional-setting-up-your-da-node-to-use-zfs" aria-label="Permalink to &quot;Optional: Setting up your DA node to use ZFS&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Using ZFS compression may impact node performance depending on your hardware configuration. Ensure your system meets the recommended requirements before proceeding. This is an optional optimization that may not be suitable for all deployments.</p></div><p>Enabling ZFS compression on a DA Node server can significantly optimize storage efficiency by compressing data on the fly. Follow this step-by-step guide to implement ZFS compression without requiring any additional tuning on the DA node.</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>ZFS, compression <code>zstd-3</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ zfs get compressratio celestia &amp;&amp; du -h /celestia/bridge/.celestia-bridge</span></span>
<span class="line"><span style="color:#e1e4e8;">NAME             PROPERTY       VALUE  SOURCE</span></span>
<span class="line"><span style="color:#e1e4e8;">celestia         compressratio  1.22x  -</span></span>
<span class="line"><span style="color:#e1e4e8;">1.3T    /celestia/bridge/.celestia-bridge</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ zfs get compressratio celestia &amp;&amp; du -h /celestia/bridge/.celestia-bridge</span></span>
<span class="line"><span style="color:#24292e;">NAME             PROPERTY       VALUE  SOURCE</span></span>
<span class="line"><span style="color:#24292e;">celestia         compressratio  1.22x  -</span></span>
<span class="line"><span style="color:#24292e;">1.3T    /celestia/bridge/.celestia-bridge</span></span></code></pre></div><p>EXT4, no compression:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ du -h ~/.celestia-bridge/</span></span>
<span class="line"><span style="color:#e1e4e8;">1.8T    /home/ubuntu/.celestia-bridge/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ du -h ~/.celestia-bridge/</span></span>
<span class="line"><span style="color:#24292e;">1.8T    /home/ubuntu/.celestia-bridge/</span></span></code></pre></div></div><h2 id="requirements" tabindex="-1">Requirements: <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements:&quot;">​</a></h2><ol><li>A bare metal server with: <ul><li>RAM: 64GB or more</li><li>CPU: Latest generation EPYC or Xeon with: <ul><li>Clock speed: 2.1GHz or higher</li><li>Threads: 32 or higher</li><li>Note: Additional CPU overhead is required for ZFS compression</li></ul></li></ul></li><li>At least one empty disk (with no filesystem)</li></ol><h2 id="guide" tabindex="-1">Guide: <a class="header-anchor" href="#guide" aria-label="Permalink to &quot;Guide:&quot;">​</a></h2><p>Get your disk name:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">lsblk</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--nodeps</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-o</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">name</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">lsblk</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--nodeps</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-o</span><span style="color:#24292E;"> </span><span style="color:#032F62;">name</span></span></code></pre></div><p>Verify disk is empty (should show no partitions):</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">lsblk</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">YOUR_DISK_NAME</span><span style="color:#E1E4E8;"> (/dev/nvme0n1 </span><span style="color:#9ECBFF;">or</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/dev/sda</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i.e.</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">lsblk</span><span style="color:#24292E;"> </span><span style="color:#032F62;">YOUR_DISK_NAME</span><span style="color:#24292E;"> (/dev/nvme0n1 </span><span style="color:#032F62;">or</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/dev/sda</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i.e.</span><span style="color:#24292E;">)</span></span></code></pre></div><p>Verify disk is not mounted:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">grep</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">YOUR_DISK_NAME</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mount</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">grep</span><span style="color:#24292E;"> </span><span style="color:#032F62;">YOUR_DISK_NAME</span></span></code></pre></div><p>Set variables:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">ZFS_POOL_NAME</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;celestia&quot;</span><span style="color:#E1E4E8;"> &amp;&amp; ZFS_DATASET_NAME</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;bridge&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">ZFS_POOL_NAME</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;celestia&quot;</span><span style="color:#24292E;"> &amp;&amp; ZFS_DATASET_NAME</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;bridge&quot;</span></span></code></pre></div><p>Validate variables are set:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> [ </span><span style="color:#F97583;">-z</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$ZFS_POOL_NAME</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> ] </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [ </span><span style="color:#F97583;">-z</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$ZFS_DATASET_NAME</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> ]; </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Error: Variables not set correctly&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">exit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#F97583;">fi</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> [ </span><span style="color:#D73A49;">-z</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$ZFS_POOL_NAME</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> ] </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> [ </span><span style="color:#D73A49;">-z</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$ZFS_DATASET_NAME</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> ]; </span><span style="color:#D73A49;">then</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Error: Variables not set correctly&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">exit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#D73A49;">fi</span></span></code></pre></div><p>Install ZFS utils:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">zfsutils-linux</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">zfsutils-linux</span></span></code></pre></div><p>Create ZFS pool:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">zpool</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-o</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ashift=</span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;"> $ZFS_POOL_NAME </span><span style="color:#9ECBFF;">/dev/nvme0n1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">zpool</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-o</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ashift=</span><span style="color:#005CC5;">12</span><span style="color:#24292E;"> $ZFS_POOL_NAME </span><span style="color:#032F62;">/dev/nvme0n1</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>If you have more than one disk available - you can add them also:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">zpool</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-o</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ashift=</span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;"> $ZFS_POOL_NAME </span><span style="color:#9ECBFF;">/dev/nvme0n1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/dev/nvme1n1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">zpool</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-o</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ashift=</span><span style="color:#005CC5;">12</span><span style="color:#24292E;"> $ZFS_POOL_NAME </span><span style="color:#032F62;">/dev/nvme0n1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/dev/nvme1n1</span></span></code></pre></div></div><p>Verify pool status:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">zpool</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;"> $ZFS_POOL_NAME</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">zpool</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span><span style="color:#24292E;"> $ZFS_POOL_NAME</span></span></code></pre></div><p>Verify pool properties:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">zpool</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span><span style="color:#E1E4E8;"> $ZFS_POOL_NAME</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">zpool</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span><span style="color:#24292E;"> $ZFS_POOL_NAME</span></span></code></pre></div><p>Create dataset:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">zfs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> $ZFS_POOL_NAME</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">$ZFS_DATASET_NAME</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">zfs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> $ZFS_POOL_NAME</span><span style="color:#032F62;">/</span><span style="color:#24292E;">$ZFS_DATASET_NAME</span></span></code></pre></div><p>Enable compression:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">zfs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compression=zstd-3</span><span style="color:#E1E4E8;"> $ZFS_POOL_NAME</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">$ZFS_DATASET_NAME</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">zfs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compression=zstd-3</span><span style="color:#24292E;"> $ZFS_POOL_NAME</span><span style="color:#032F62;">/</span><span style="color:#24292E;">$ZFS_DATASET_NAME</span></span></code></pre></div><p>Set the custom path to the bridge data folder:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-gHQtq" id="tab-oCANQtI" checked="checked"><label for="tab-oCANQtI">Mainnet Beta</label><input type="radio" name="group-gHQtq" id="tab-IyUWau5"><label for="tab-IyUWau5">Mocha</label><input type="radio" name="group-gHQtq" id="tab-EmLwMdO"><label for="tab-EmLwMdO">Arabica</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Add flag --node.store /celestia/bridge/.celestia-bridge to your command, example:</span></span>
<span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--metrics.tls=true</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--metrics</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--metrics.endpoint</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">otel.celestia.observer</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.metrics</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--node.store</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/celestia/bridge/.celestia-bridge</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Add flag --node.store /celestia/bridge/.celestia-bridge to your command, example:</span></span>
<span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bridge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--metrics.tls=true</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--metrics</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--metrics.endpoint</span><span style="color:#24292E;"> </span><span style="color:#032F62;">otel.celestia.observer</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.metrics</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--node.store</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/celestia/bridge/.celestia-bridge</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Add flag --node.store /celestia/bridge/.celestia-bridge-mocha-4 to your command, example:</span></span>
<span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--metrics.tls=true</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--metrics</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--metrics.endpoint</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">otel.mocha.celestia.observer</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.metrics</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--node.store</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/celestia/bridge/.celestia-bridge-mocha-4</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mocha</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Add flag --node.store /celestia/bridge/.celestia-bridge-mocha-4 to your command, example:</span></span>
<span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bridge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--metrics.tls=true</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--metrics</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--metrics.endpoint</span><span style="color:#24292E;"> </span><span style="color:#032F62;">otel.mocha.celestia.observer</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.metrics</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--node.store</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/celestia/bridge/.celestia-bridge-mocha-4</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mocha</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Add flag --node.store /celestia/bridge/.celestia-bridge-arabica-11 to your command, example:</span></span>
<span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--node.store</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/celestia/bridge/.celestia-bridge-arabica-11</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">arabica</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Add flag --node.store /celestia/bridge/.celestia-bridge-arabica-11 to your command, example:</span></span>
<span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bridge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--node.store</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/celestia/bridge/.celestia-bridge-arabica-11</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">arabica</span></span></code></pre></div></div></div><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>It is recommended to sync from scratch. In case of using a snapshot it is important to have your local route to <code>--data.store</code> identical to one in a snapshot.</p></div><p>After completing the steps above, you can begin syncing your DA node.</p><p>You can check your compression rate with the following command:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">zfs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compressratio</span><span style="color:#E1E4E8;"> $ZFS_POOL_NAME</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">zfs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compressratio</span><span style="color:#24292E;"> $ZFS_POOL_NAME</span></span></code></pre></div><h2 id="zfs-fine-tuning-advanced" tabindex="-1">ZFS Fine-Tuning (Advanced) <a class="header-anchor" href="#zfs-fine-tuning-advanced" aria-label="Permalink to &quot;ZFS Fine-Tuning (Advanced)&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>The following settings can significantly impact data integrity and system stability. Only proceed if you fully understand the implications of each setting. These optimizations should be carefully tested in a non-production environment first.</p></div><p>If you want to increase your I/O performance and sync speed, you can try the following steps:</p><h3 id="disable-auto-trim" tabindex="-1">Disable Auto-Trim <a class="header-anchor" href="#disable-auto-trim" aria-label="Permalink to &quot;Disable Auto-Trim&quot;">​</a></h3><p>Auto-trim disabling can improve I/O performance, but may lead to increased SSD wear over time.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">zpool</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">autotrim=off</span><span style="color:#E1E4E8;"> $ZFS_POOL_NAME</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">zpool</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">autotrim=off</span><span style="color:#24292E;"> $ZFS_POOL_NAME</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>You can always trim manually: <code>sudo zpool trim $ZFS_POOL_NAME</code></p></div><h3 id="disable-sync" tabindex="-1">Disable sync <a class="header-anchor" href="#disable-sync" aria-label="Permalink to &quot;Disable sync&quot;">​</a></h3><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>Disabling sync provides faster write speeds but significantly increases the risk of data corruption in case of system crashes or power failures. Data in memory may be permanently lost before being written to disk.</p><p>This setting should:</p><ol><li>Only be used during initial node sync</li><li>Never be used in production environments</li><li>Be re-enabled immediately after initial sync completes</li></ol></div><h3 id="disable-prefetch" tabindex="-1">Disable prefetch <a class="header-anchor" href="#disable-prefetch" aria-label="Permalink to &quot;Disable prefetch&quot;">​</a></h3><p>Disabling reduces memory usage but can slow down performance for sequential read workloads.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tee</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/sys/module/zfs/parameters/zfs_prefetch_disable</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tee</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/sys/module/zfs/parameters/zfs_prefetch_disable</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>You can always re-enable it: <code>echo 0 | sudo tee /sys/module/zfs/parameters/zfs_prefetch_disable</code></p></div><h3 id="set-record-size" tabindex="-1">Set record size <a class="header-anchor" href="#set-record-size" aria-label="Permalink to &quot;Set record size&quot;">​</a></h3><p>Setting <code>recordsize=256K</code> defines the maximum block size that ZFS will use when writing data to a dataset.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">zfs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">recordsize=</span><span style="color:#79B8FF;">256</span><span style="color:#9ECBFF;">K</span><span style="color:#E1E4E8;"> $ZFS_POOL_NAME</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">$ZFS_DATASET_NAME</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">zfs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">recordsize=</span><span style="color:#005CC5;">256</span><span style="color:#032F62;">K</span><span style="color:#24292E;"> $ZFS_POOL_NAME</span><span style="color:#032F62;">/</span><span style="color:#24292E;">$ZFS_DATASET_NAME</span></span></code></pre></div>`,52),p=[n];function t(c,r,i,d,y,E){return a(),e("div",null,p)}const u=s(l,[["render",t]]);export{F as __pageData,u as default};
