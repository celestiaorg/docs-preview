import{_ as e,o as t,c as a,Q as r}from"./chunks/framework.f947a63b.js";const g=JSON.parse('{"title":"Celestia hardfork process","description":"Overview of the Celestia hardfork process.","frontmatter":{"description":"Overview of the Celestia hardfork process.","head":[["meta",{"name":"og:title","content":"Celestia hardfork process | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/hardfork-process.md","filePath":"nodes/hardfork-process.md","lastUpdated":1724077496000}'),o={name:"nodes/hardfork-process.md"},i=r('<h1 id="celestia-hardfork-process" tabindex="-1">Celestia hardfork process <a class="header-anchor" href="#celestia-hardfork-process" aria-label="Permalink to &quot;Celestia hardfork process&quot;">​</a></h1><p>Blockchain networks often times need to upgrade with new features which require coordination work among the validators prior to activating the upgrades.</p><p>This process is called a hardfork or a network upgrade. In those events, the Celestia Labs team will be coordinating with the validators on what they need to do in order to be ready for an upcoming hardfork.</p><p>Hardforks are not backward-compatible with older versions of the network software which is why it is important that validators upgrade their software to continue validating on the network after the network upgrades.</p><h2 id="general-process" tabindex="-1">General process <a class="header-anchor" href="#general-process" aria-label="Permalink to &quot;General process&quot;">​</a></h2><p>The general process can be broken down into several components:</p><ul><li>Hardfork specifications and features (defined by description of features and code implementation of those features).</li><li>Binary used to add those features (a new binary release with those features will be provided by Celestia team in order for validators to upgrade their nodes to the new binary).</li><li>A block number for when the network upgrades (even if validators upgrade their binary to be hardfork ready, the network upgrade does not happen right away, but some short time in the future at a specific block number).</li><li>Testing of the features (happens on testnets first prior to activating on mainnet in order to ensure the network can upgrade securely).</li></ul><p>The two testnets where hardforks are deployed are:</p><ul><li><a href="./arabica-devnet">Arabica devnet</a></li><li><a href="./mocha-testnet">Mocha testnet</a></li></ul><h3 id="lemongrass-hardfork" tabindex="-1">Lemongrass hardfork <a class="header-anchor" href="#lemongrass-hardfork" aria-label="Permalink to &quot;Lemongrass hardfork&quot;">​</a></h3><p>The Lemongrass hardfork is the first consensus layer breaking change since Celestia&#39;s Mainnet Beta genesis block. The Lemongrass hardfork includes all of the CIPs listed in <a href="https://github.com/celestiaorg/CIPs/blob/main/cips/cip-17.md" target="_blank" rel="noreferrer">CIP-17</a>. The Lemongrass hardfork will be executed on Arabica, then Mocha, then Mainnet Beta. The hardfork will take place at an &quot;upgrade height&quot; that will be coordinated offline on a per-network basis. The upgrade heights will be announced in advance (see <a href="./participate#network-upgrades">Network upgrades</a>) to give node operators time to download and start a compatible binary prior to the upgrade height.</p><ul><li>If you are a consensus node or validator operator: you will need to download and run a celestia-app binary &gt;= v2.0.0 prior to the <code>--v2-upgrade-height</code> to remain on the canonical chain. You do not need to use a tool like <a href="https://docs.cosmos.network/main/build/tooling/cosmovisor" target="_blank" rel="noreferrer">cosmovisor</a> to upgrade the binary at the upgrade height.</li><li>If you are a DA node operator, you will need to download and run a compatible celestia-node binary &gt;= v0.16.0-rc0 prior to the upgrade height.</li></ul><table><thead><tr><th>Network</th><th>Chain ID</th><th>Datetime</th><th><code>--v2-upgrade-height</code></th></tr></thead><tbody><tr><td>Arabica</td><td>arabica-11</td><td>2024/08/19 @ 14:00 UTC</td><td>1751707</td></tr><tr><td>Mocha</td><td>mocha-4</td><td>TBD approximately 2024/08/28 @ 14:00 UTC</td><td>TBD</td></tr><tr><td>Mainnet Beta</td><td>celestia</td><td>TBD approximately 2024/09/18 @ 14:00 UTC</td><td>TBD</td></tr></tbody></table>',13),s=[i];function n(d,h,l,c,p,f){return t(),a("div",null,s)}const k=e(o,[["render",n]]);export{g as __pageData,k as default};
