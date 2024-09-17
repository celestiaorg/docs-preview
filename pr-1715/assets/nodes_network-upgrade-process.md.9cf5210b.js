import{_ as e,o as t,c as a,Q as r}from"./chunks/framework.50eb6a22.js";const w=JSON.parse('{"title":"Celestia network upgrade process","description":"Overview of the Celestia network upgrade process.","frontmatter":{"description":"Overview of the Celestia network upgrade process.","head":[["meta",{"name":"og:title","content":"Celestia network upgrade process | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/network-upgrade-process.md","filePath":"nodes/network-upgrade-process.md","lastUpdated":1726583994000}'),o={name:"nodes/network-upgrade-process.md"},n=r('<h1 id="celestia-network-upgrade-process" tabindex="-1">Celestia network upgrade process <a class="header-anchor" href="#celestia-network-upgrade-process" aria-label="Permalink to &quot;Celestia network upgrade process&quot;">​</a></h1><p>Blockchain networks often times need to upgrade with new features which require coordination work among the validators prior to activating the upgrades.</p><p>This process is called a network upgrade, which can be breaking or non-breaking. During planned network upgrades, the Celestia Labs team will coordinate with the validators to prepare for the upcoming network upgrade.</p><p>Breaking network upgrades are not backward-compatible with older versions of the network software which is why it is important that validators upgrade their software to continue validating on the network after the network upgrades.</p><p>Non-breaking network upgrades are backward-compatible and require less coordination.</p><h2 id="general-process" tabindex="-1">General process <a class="header-anchor" href="#general-process" aria-label="Permalink to &quot;General process&quot;">​</a></h2><p>The general process can be broken down into several components:</p><ul><li>Network upgrade specifications and features (defined by description of features and code implementation of those features).</li><li>Binary used to add those features. A new binary release with those features will be provided by Celestia Labs team in order for validators to upgrade their nodes to the new binary.</li><li>A block number for when the breaking network upgrade. Even if validators upgrade their binary to be network upgrade ready, the network upgrade does not happen right away, but some short time in the future at a specific block number.</li><li>Testing of the features, which happens on testnets first prior to activating on Mainnet Beta in order to ensure the network can upgrade securely.</li></ul><p>The two testnets where network upgrades are deployed are:</p><ul><li><a href="./arabica-devnet">Arabica devnet</a></li><li><a href="./mocha-testnet">Mocha testnet</a></li></ul><h3 id="lemongrass-network-upgrade" tabindex="-1">Lemongrass network upgrade <a class="header-anchor" href="#lemongrass-network-upgrade" aria-label="Permalink to &quot;Lemongrass network upgrade&quot;">​</a></h3><p>The Lemongrass network upgrade is the first consensus layer breaking change since Celestia&#39;s Mainnet Beta genesis block. The Lemongrass network upgrade includes all of the CIPs listed in <a href="https://github.com/celestiaorg/CIPs/blob/main/cips/cip-17.md" target="_blank" rel="noreferrer">CIP-17</a>. The Lemongrass network upgrade will be executed on Arabica, then Mocha, then Mainnet Beta. The network upgrade will take place at an &quot;upgrade height&quot; that will be coordinated offline on a per-network basis. The upgrade heights will be announced in advance (see <a href="./participate#network-upgrades">network upgrades channels</a>) to give node operators time to download and start a compatible binary prior to the upgrade height.</p><ul><li>If you are a consensus node or validator operator: you will need to download and run a celestia-app binary &gt;= v2.0.0 prior to the <code>--v2-upgrade-height</code> to remain on the canonical chain. You do not need to use a tool like <a href="https://docs.cosmos.network/main/build/tooling/cosmovisor" target="_blank" rel="noreferrer">cosmovisor</a> to upgrade the binary at the upgrade height.</li><li>If you are a DA node operator, you will need to download and run a compatible celestia-node binary &gt;= v0.16.0-rc0 prior to the upgrade height.</li></ul><table><thead><tr><th>Network</th><th>Chain ID</th><th>Date and approximate time</th><th><code>--v2-upgrade-height</code></th></tr></thead><tbody><tr><td>Arabica</td><td>arabica-11</td><td>2024/08/19 @ 14:00 UTC</td><td>1751707</td></tr><tr><td>Mocha</td><td>mocha-4</td><td>2024/08/28 @ 14:00 UTC</td><td>2585031</td></tr><tr><td>Mainnet Beta</td><td>celestia</td><td>2024/09/18 @ 14:00 UTC</td><td>2371495</td></tr></tbody></table>',14),i=[n];function s(d,l,p,c,h,u){return t(),a("div",null,i)}const k=e(o,[["render",s]]);export{w as __pageData,k as default};
