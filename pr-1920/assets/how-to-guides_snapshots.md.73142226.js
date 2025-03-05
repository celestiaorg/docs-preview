import{_ as s,o as e,c as a,Q as t}from"./chunks/framework.c60a5e15.js";const E=JSON.parse('{"title":"Node snapshots","description":"A guide to using node snapshots and snapshot providers for quick node setup, including how to use the celestia-snapshot-finder tool","frontmatter":{"description":"A guide to using node snapshots and snapshot providers for quick node setup, including how to use the celestia-snapshot-finder tool","head":[["meta",{"property":"og:title","content":"Node snapshots | Celestia Docs"}],["meta",{"property":"og:description","content":"A guide to using node snapshots and snapshot providers for quick node setup, including how to use the celestia-snapshot-finder tool"}]]},"headers":[],"relativePath":"how-to-guides/snapshots.md","filePath":"how-to-guides/snapshots.md","lastUpdated":1741210712000}'),n={name:"how-to-guides/snapshots.md"},o=t(`<h1 id="node-snapshots" tabindex="-1">Node snapshots <a class="header-anchor" href="#node-snapshots" aria-label="Permalink to &quot;Node snapshots&quot;">​</a></h1><h2 id="what-are-node-snapshots" tabindex="-1">What are node snapshots? <a class="header-anchor" href="#what-are-node-snapshots" aria-label="Permalink to &quot;What are node snapshots?&quot;">​</a></h2><p>Node snapshots are pre-synced copies of the blockchain state that allow you to get your node up and running quickly without having to sync from genesis. Think of them as checkpoints - instead of processing every single block since the beginning of the chain, you can start from a recent, verified state.</p><p>Among various options for setting up your node, snapshots offer one of the fastest ways to get started. Instead of syncing the entire chain history from the beginning, you can use a snapshot to start from a recent state.</p><p>Using snapshots can save you significant time and resources, especially as the blockchain grows larger.</p><h2 id="pruned-vs-archive-snapshots" tabindex="-1">Pruned vs archive snapshots <a class="header-anchor" href="#pruned-vs-archive-snapshots" aria-label="Permalink to &quot;Pruned vs archive snapshots&quot;">​</a></h2><p>There are two main types of snapshots available:</p><h3 id="pruned-snapshots" tabindex="-1">Pruned snapshots <a class="header-anchor" href="#pruned-snapshots" aria-label="Permalink to &quot;Pruned snapshots&quot;">​</a></h3><p>Pruned snapshots contain only the essential state needed to run a node. They exclude historical data that isn&#39;t necessary for current operations, making them much smaller in size. These are ideal for:</p><ul><li>Validator nodes that only need recent state to participate in consensus</li><li>Consensus nodes that don&#39;t need complete historical data</li><li>Users who want to get started quickly and aren&#39;t concerned with historical queries</li></ul><h3 id="archive-snapshots" tabindex="-1">Archive snapshots <a class="header-anchor" href="#archive-snapshots" aria-label="Permalink to &quot;Archive snapshots&quot;">​</a></h3><p>Archive snapshots contain the complete blockchain history, including all historical states. They&#39;re larger in size but provide access to the entire chain history. You&#39;ll need an archive snapshot if you&#39;re:</p><ul><li>Running a DA node that needs to serve historical block data</li><li>Operating a consensus node that needs to support historical queries</li><li>Building an application that requires access to past states</li></ul><h2 id="available-snapshot-providers" tabindex="-1">Available snapshot providers <a class="header-anchor" href="#available-snapshot-providers" aria-label="Permalink to &quot;Available snapshot providers&quot;">​</a></h2><h3 id="mainnet-beta" tabindex="-1">Mainnet beta <a class="header-anchor" href="#mainnet-beta" aria-label="Permalink to &quot;Mainnet beta&quot;">​</a></h3><table><thead><tr><th>Provider</th><th>Consensus Node</th><th>Bridge Node</th></tr></thead><tbody><tr><td>Stake Town</td><td><a href="https://services.stake-town.com/home/mainnet/celestia/sync" target="_blank" rel="noreferrer">Pruned</a></td><td>-</td></tr><tr><td>ITRocket</td><td><a href="https://itrocket.net/services/mainnet/celestia/" target="_blank" rel="noreferrer">Pruned</a> • <a href="https://itrocket.net/services/mainnet/celestia/" target="_blank" rel="noreferrer">Archive</a></td><td><a href="https://itrocket.net/services/mainnet/celestia/" target="_blank" rel="noreferrer">Archive</a></td></tr><tr><td>Polkachu</td><td><a href="https://polkachu.com/tendermint_snapshots/celestia" target="_blank" rel="noreferrer">Pruned</a> • <a href="https://polkachu.com/archive_snapshots/celestia/" target="_blank" rel="noreferrer">Archive</a></td><td>-</td></tr><tr><td>kjnodes</td><td><a href="https://services.kjnodes.com/mainnet/celestia/snapshot/" target="_blank" rel="noreferrer">Pruned</a> • <a href="https://services.kjnodes.com/mainnet/celestia/snapshot-archive/" target="_blank" rel="noreferrer">Archive</a></td><td>-</td></tr><tr><td>Tienthuattoan</td><td><a href="https://services.tienthuattoan.com/mainnet/celestia/snapshot" target="_blank" rel="noreferrer">Pruned</a></td><td>-</td></tr><tr><td>Noders</td><td><a href="https://noders.services/mainnet-networks/celestia/snapshot/" target="_blank" rel="noreferrer">Pruned</a></td><td>-</td></tr><tr><td>QubeLabs</td><td><a href="https://snaps.qubelabs.io/celestia/" target="_blank" rel="noreferrer">Archive</a></td><td>-</td></tr><tr><td>CitizenWeb3</td><td><a href="https://staking.citizenweb3.com/chains/celestia?tab=snapshot" target="_blank" rel="noreferrer">Pruned</a></td><td>-</td></tr><tr><td>BlackBlocks</td><td><a href="https://wiki.blackblocks.io/en/public/services/mainnet/celestia" target="_blank" rel="noreferrer">Archive</a></td><td><a href="https://wiki.blackblocks.io/en/public/services/mainnet/celestia" target="_blank" rel="noreferrer">Archive</a></td></tr></tbody></table><h3 id="mocha-testnet" tabindex="-1">Mocha testnet <a class="header-anchor" href="#mocha-testnet" aria-label="Permalink to &quot;Mocha testnet&quot;">​</a></h3><table><thead><tr><th>Provider</th><th>Consensus Node</th><th>Bridge Node</th></tr></thead><tbody><tr><td>Stake Town</td><td><a href="https://services.stake-town.com/home/testnet/celestia/sync" target="_blank" rel="noreferrer">Pruned</a></td><td>-</td></tr><tr><td>ITRocket</td><td><a href="https://itrocket.net/services/testnet/celestia/" target="_blank" rel="noreferrer">Pruned</a> • <a href="https://itrocket.net/services/testnet/celestia/" target="_blank" rel="noreferrer">Archive</a></td><td><a href="https://itrocket.net/services/testnet/celestia/" target="_blank" rel="noreferrer">Archive</a></td></tr><tr><td>Polkachu</td><td><a href="https://polkachu.com/testnets/celestia/snapshots" target="_blank" rel="noreferrer">Pruned</a></td><td>-</td></tr><tr><td>kjnodes</td><td><a href="https://services.kjnodes.com/testnet/celestia/snapshot/" target="_blank" rel="noreferrer">Pruned</a></td><td>-</td></tr><tr><td>Tienthuattoan</td><td><a href="https://services.tienthuattoan.com/testnet/celestia/snapshot" target="_blank" rel="noreferrer">Pruned</a></td><td>-</td></tr><tr><td>Noders</td><td><a href="https://noders.services/testnet-networks/celestia/snapshot" target="_blank" rel="noreferrer">Pruned</a></td><td>-</td></tr><tr><td>QubeLabs</td><td><a href="https://snaps.qubelabs.io/celestia/" target="_blank" rel="noreferrer">Archive</a></td><td>-</td></tr><tr><td>BlackBlocks</td><td><a href="https://wiki.blackblocks.io/en/public/services/testnet/celestia" target="_blank" rel="noreferrer">Archive</a></td><td><a href="https://wiki.blackblocks.io/en/public/services/testnet/celestia" target="_blank" rel="noreferrer">Archive</a></td></tr></tbody></table><h2 id="using-celestia-snapshot-finder" tabindex="-1">Using celestia-snapshot-finder <a class="header-anchor" href="#using-celestia-snapshot-finder" aria-label="Permalink to &quot;Using celestia-snapshot-finder&quot;">​</a></h2><p>The <code>celestia-snapshot-finder</code> is a community tool that automatically finds and downloads the fastest available snapshot for your node. It tests download speeds from verified providers and selects the fastest available snapshot based on your location and network conditions.</p><h3 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h3><ul><li>Automatically finds the optimal snapshot from verified providers</li><li>Selects the best option based on file size and download speed</li><li>Supports both consensus and bridge nodes (pruned and archive snapshots)</li><li>Available for multiple platforms (Linux, macOS) with ARM and AMD64 support</li><li>Includes download progress tracking and resume capability</li></ul><h3 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h3><p>You can download pre-built binaries from the <a href="https://github.com/21state/celestia-snapshot-finder/releases/latest" target="_blank" rel="noreferrer">latest release</a> page:</p><ul><li>Linux: <code>celestia-snapshot-finder-linux-amd64</code> or <code>celestia-snapshot-finder-linux-arm64</code></li><li>macOS: <code>celestia-snapshot-finder-darwin-amd64</code> or <code>celestia-snapshot-finder-darwin-arm64</code></li></ul><p>Or build from source:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/21state/celestia-snapshot-finder.git</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-snapshot-finder</span></span>
<span class="line"><span style="color:#B392F0;">./build.sh</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/21state/celestia-snapshot-finder.git</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-snapshot-finder</span></span>
<span class="line"><span style="color:#6F42C1;">./build.sh</span></span></code></pre></div><h3 id="usage-examples" tabindex="-1">Usage examples <a class="header-anchor" href="#usage-examples" aria-label="Permalink to &quot;Usage examples&quot;">​</a></h3><p>A CLI tool for downloading Celestia node snapshots with direct URLs. Supports different node types and snapshot types with automatic or manual selection.</p><p>Basic usage:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia-snapshot-finder</span><span style="color:#E1E4E8;"> [node-type] [snapshot-type] [flags]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia-snapshot-finder</span><span style="color:#24292E;"> [node-type] [snapshot-type] [flags]</span></span></code></pre></div><p>Examples:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Download pruned consensus node snapshot</span></span>
<span class="line"><span style="color:#B392F0;">celestia-snapshot-finder</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">consensus</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pruned</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Download archive bridge node snapshot with manual selection</span></span>
<span class="line"><span style="color:#B392F0;">celestia-snapshot-finder</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">archive</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--manual</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Download pruned consensus node snapshot</span></span>
<span class="line"><span style="color:#6F42C1;">celestia-snapshot-finder</span><span style="color:#24292E;"> </span><span style="color:#032F62;">consensus</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pruned</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Download archive bridge node snapshot with manual selection</span></span>
<span class="line"><span style="color:#6F42C1;">celestia-snapshot-finder</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bridge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">archive</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--manual</span></span></code></pre></div><p>Available flags:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">-n,</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--chain-id</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">string</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">Chain</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ID</span><span style="color:#E1E4E8;"> (default </span><span style="color:#9ECBFF;">&quot;celestia&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">--debug</span><span style="color:#E1E4E8;">             </span><span style="color:#9ECBFF;">Enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">debug</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mode</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">with</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">extra</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">information</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">-h,</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--help</span><span style="color:#E1E4E8;">              </span><span style="color:#9ECBFF;">help</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">for</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-snapshot-finder</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">-m,</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--manual</span><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">Enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">manual</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">selection</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">-v,</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--version</span><span style="color:#E1E4E8;">           </span><span style="color:#9ECBFF;">version</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">for</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-snapshot-finder</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">-n,</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--chain-id</span><span style="color:#24292E;"> </span><span style="color:#032F62;">string</span><span style="color:#24292E;">   </span><span style="color:#032F62;">Chain</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ID</span><span style="color:#24292E;"> (default </span><span style="color:#032F62;">&quot;celestia&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">--debug</span><span style="color:#24292E;">             </span><span style="color:#032F62;">Enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">debug</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mode</span><span style="color:#24292E;"> </span><span style="color:#032F62;">with</span><span style="color:#24292E;"> </span><span style="color:#032F62;">extra</span><span style="color:#24292E;"> </span><span style="color:#032F62;">information</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">-h,</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--help</span><span style="color:#24292E;">              </span><span style="color:#032F62;">help</span><span style="color:#24292E;"> </span><span style="color:#032F62;">for</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-snapshot-finder</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">-m,</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--manual</span><span style="color:#24292E;">            </span><span style="color:#032F62;">Enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">manual</span><span style="color:#24292E;"> </span><span style="color:#032F62;">selection</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">-v,</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--version</span><span style="color:#24292E;">           </span><span style="color:#032F62;">version</span><span style="color:#24292E;"> </span><span style="color:#032F62;">for</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-snapshot-finder</span></span></code></pre></div><p>In automatic mode (default), the tool will:</p><ol><li>Test download speeds and verify snapshots from all providers</li><li>Automatically select and use the fastest available option</li><li>Start downloading from the selected provider</li></ol><p>In manual mode (<code>--manual</code> flag), the tool will:</p><ol><li>Test download speeds and verify snapshots from all providers</li><li>Show you a list of providers with their download speed, snapshot size, and estimated download time</li><li>Let you select your preferred provider from the list</li><li>Start downloading from your selected provider</li></ol>`,39),l=[o];function r(p,i,c,d,h,u){return e(),a("div",null,l)}const f=s(n,[["render",r]]);export{E as __pageData,f as default};
