import{_ as e,o as t,c as o,Q as a}from"./chunks/framework.aac99d0e.js";const g=JSON.parse('{"title":"config.toml guide","description":"A guide to the contents of the Config.toml file.","frontmatter":{"description":"A guide to the contents of the Config.toml file.","head":[["meta",{"name":"og:title","content":"config.toml guide | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/config-toml.md","filePath":"nodes/config-toml.md","lastUpdated":1726490612000}'),i={name:"nodes/config-toml.md"},r=a('<h1 id="config-toml-guide" tabindex="-1">config.toml guide <a class="header-anchor" href="#config-toml-guide" aria-label="Permalink to &quot;config.toml guide&quot;">​</a></h1><h2 id="pre-requisites" tabindex="-1">Pre-requisites <a class="header-anchor" href="#pre-requisites" aria-label="Permalink to &quot;Pre-requisites&quot;">​</a></h2><p>Please, make sure that you have installed and initialized <code>celestia-node</code></p><h2 id="understanding-config-toml" tabindex="-1">Understanding config.toml <a class="header-anchor" href="#understanding-config-toml" aria-label="Permalink to &quot;Understanding config.toml&quot;">​</a></h2><p>After initialization, for any type of node, you will find a <code>config.toml</code> in the following path (default location):</p><ul><li><code>$HOME/.celestia-bridge/config.toml</code> for bridge node</li><li><code>$HOME/.celestia-light/config.toml</code> for light node</li><li><code>$HOME/.celestia-full/config.toml</code> for a full DA node</li></ul><p>Let&#39;s break down some of the most used sections.</p><h3 id="core" tabindex="-1">Core <a class="header-anchor" href="#core" aria-label="Permalink to &quot;Core&quot;">​</a></h3><p>This section is needed for the Celestia bridge node. By default, <code>Remote = false</code>. Still for devnet, we are going to use the remote core option and this can also be set by the command line flag <code>--core.remote</code>.</p><h3 id="p2p" tabindex="-1">P2P <a class="header-anchor" href="#p2p" aria-label="Permalink to &quot;P2P&quot;">​</a></h3><h4 id="bootstrap" tabindex="-1">Bootstrap <a class="header-anchor" href="#bootstrap" aria-label="Permalink to &quot;Bootstrap&quot;">​</a></h4><p>Bootstrappers help new nodes to find peers faster in the network. By default, the <code>Bootstrapper = false</code> and the <code>BootstrapPeers</code> is empty. If you want your node to be a bootstrapper, then activate <code>Bootstrapper = true</code>. <code>BootstrapPeers</code> are already provided by default during initialisation. If you want to add your own manually, you need to provide the multiaddresses of the peers.</p><h4 id="mutual-peers" tabindex="-1">Mutual peers <a class="header-anchor" href="#mutual-peers" aria-label="Permalink to &quot;Mutual peers&quot;">​</a></h4><p>The purpose of this config is to set up a bidirectional communication. This is usually the case for Celestia bridge nodes. In addition, you need to change the field <code>PeerExchange</code> from false to true.</p><h3 id="services" tabindex="-1">Services <a class="header-anchor" href="#services" aria-label="Permalink to &quot;Services&quot;">​</a></h3><h4 id="trustedhash-and-trustedpeer" tabindex="-1">TrustedHash and TrustedPeer <a class="header-anchor" href="#trustedhash-and-trustedpeer" aria-label="Permalink to &quot;TrustedHash and TrustedPeer&quot;">​</a></h4><p><code>TrustedHash</code> is needed to properly initialize a Celestia bridge node with an already-running <code>Remote</code> celestia-core node. Celestia light node will take a genesis hash as the trusted one, if no hash is manually provided during initialization phase.</p><p><code>TrustedPeers</code> is the array of bridge nodes&#39; peers that Celestia light node trusts. By default, bootstrap peers becomes trusted peers for Celestia light nodes if a user is not setting the trusted peer params in config file.</p><p>Any Celestia bridge node can be a trusted peer for the light one. However, the light node by design can not be a trusted peer for another light node.</p>',19),n=[r];function d(s,l,c,h,u,f){return t(),o("div",null,n)}const m=e(i,[["render",d]]);export{g as __pageData,m as default};
