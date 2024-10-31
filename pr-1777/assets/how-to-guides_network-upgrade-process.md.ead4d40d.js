import{_ as e,o as r,c as a,Q as t}from"./chunks/framework.ab7b62a8.js";const m=JSON.parse('{"title":"Celestia network upgrade process","description":"Overview of the Celestia network upgrade process.","frontmatter":{"description":"Overview of the Celestia network upgrade process.","head":[["meta",{"name":"og:title","content":"Celestia network upgrade process | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"how-to-guides/network-upgrade-process.md","filePath":"how-to-guides/network-upgrade-process.md","lastUpdated":1730393739000}'),o={name:"how-to-guides/network-upgrade-process.md"},i=t('<h1 id="celestia-network-upgrade-process" tabindex="-1">Celestia network upgrade process <a class="header-anchor" href="#celestia-network-upgrade-process" aria-label="Permalink to &quot;Celestia network upgrade process&quot;">​</a></h1><p>Blockchain networks often need to upgrade with new features which require coordination work among the community of developers, validators, and node operators prior to activating the upgrades. This process is called a network upgrade, which can be breaking or non-breaking. During planned network upgrades the community will coordinate to prepare for the upcoming upgrade. Breaking network upgrades are not backward-compatible with older versions of the network software, which is why it is important that validators upgrade their software to continue validating on the network. Non-breaking network upgrades are backward-compatible and require less coordination.</p><h2 id="network-upgrade-coordination" tabindex="-1">Network upgrade coordination <a class="header-anchor" href="#network-upgrade-coordination" aria-label="Permalink to &quot;Network upgrade coordination&quot;">​</a></h2><p>As of the Lemongrass upgrade in September 2024, Celestia has implemented <a href="https://cips.celestia.org/cip-10.html" target="_blank" rel="noreferrer">CIP-10</a>, which establishes two methods for coordinating network upgrades:</p><ol><li><strong>Pre-programmed height</strong>: Used for the Lemongrass network upgrade (v2)</li><li><strong>In-protocol signaling</strong>: Used for all subsequent upgrades (v3+)</li></ol><p>Under the in-protocol signaling mechanism, validators submit messages to signal their readiness and preference for the next version. The upgrade activates automatically once a quorum of 5/6 of validators has signaled for the same version.</p><h2 id="upgrade-process" tabindex="-1">Upgrade process <a class="header-anchor" href="#upgrade-process" aria-label="Permalink to &quot;Upgrade process&quot;">​</a></h2><p>The upgrade process can be broken down into a few steps:</p><ol><li><a href="https://cips.celestia.org" target="_blank" rel="noreferrer">Celestia Improvement Proposals</a> (CIPs) are created for consensus-breaking changes and features that impact user experience. These CIPs are included in a meta-CIP, which define the scope of the upgrade.</li><li>Celestia core developer teams implement the features defined in the CIPs.</li><li>A new binary is released with the new features to be tested on testnets.</li><li>Validators upgrade their nodes to the new binary, on <a href="./arabica-devnet">Arabica devnet</a>, <a href="./mocha-testnet">Mocha testnet</a>, and finally on Celestia <a href="./mainnet">Mainnet Beta</a>. <ul><li>Upgrades using pre-programmed height (v2) activate at a predetermined block number.</li><li>Upgrades using in-protocol signaling (v3+) activate one week after 5/6 of the voting power has signaled for a particular version</li></ul></li></ol><h3 id="upcoming-upgrade" tabindex="-1">Upcoming upgrade <a class="header-anchor" href="#upcoming-upgrade" aria-label="Permalink to &quot;Upcoming upgrade&quot;">​</a></h3><h4 id="ginger-network-upgrade" tabindex="-1">Ginger network upgrade <a class="header-anchor" href="#ginger-network-upgrade" aria-label="Permalink to &quot;Ginger network upgrade&quot;">​</a></h4><p>The Ginger network upgrade (v3) will be the first to use the new in-protocol signaling mechanism defined in <a href="https://cips.celestia.org/cip-10.html" target="_blank" rel="noreferrer">CIP-10</a>. This upgrade includes changes defined in <a href="https://cips.celestia.org/cip-25.html" target="_blank" rel="noreferrer">CIP-25</a>:</p><p>Key features include:</p><ul><li><a href="https://cips.celestia.org/cip-21.html" target="_blank" rel="noreferrer">CIP-21</a>: Introduce blob type with verified signer</li><li><a href="https://cips.celestia.org/cip-24.html" target="_blank" rel="noreferrer">CIP-24</a>: Versioned Gas Scheduler Variables</li><li><a href="https://cips.celestia.org/cip-26.html" target="_blank" rel="noreferrer">CIP-26</a>: Versioned timeouts</li><li><a href="https://cips.celestia.org/cip-27.html" target="_blank" rel="noreferrer">CIP-27</a>: Block limits for number of PFBs and non-PFBs</li><li><a href="https://cips.celestia.org/cip-28.html" target="_blank" rel="noreferrer">CIP-28</a>: Transaction size limit</li></ul><p>Unlike the Lemongrass upgrade, there will not be a pre-programmed upgrade height. Instead, validators will signal their readiness for v3 through in-protocol signaling, and the upgrade will automatically activate one week after 5/6 of voting power have signaled for a particular version.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Validators should ensure they are running a v3 binary before signaling support for the upgrade.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>You <strong>do not</strong> need to use a tool like <a href="https://docs.cosmos.network/main/build/tooling/cosmovisor" target="_blank" rel="noreferrer">cosmovisor</a> to upgrade the binary. Please upgrade your binary before signaling support for the new version.</p></div><h3 id="past-upgrades" tabindex="-1">Past Upgrades <a class="header-anchor" href="#past-upgrades" aria-label="Permalink to &quot;Past Upgrades&quot;">​</a></h3><h4 id="lemongrass-network-upgrade" tabindex="-1">Lemongrass network upgrade <a class="header-anchor" href="#lemongrass-network-upgrade" aria-label="Permalink to &quot;Lemongrass network upgrade&quot;">​</a></h4><p>The Lemongrass network upgrade (v2) was the first consensus layer breaking change since Celestia&#39;s Mainnet Beta genesis block. The Lemongrass network upgrade included all of the CIPs listed in <a href="https://github.com/celestiaorg/CIPs/blob/main/cips/cip-17.md" target="_blank" rel="noreferrer">CIP-17</a> and implemented CIP-10 for future upgrades.</p><table><thead><tr><th>Network</th><th>Chain ID</th><th>Date and time</th><th>Upgrade height</th></tr></thead><tbody><tr><td>Arabica</td><td>arabica-11</td><td>2024/08/19 @ 14:00 UTC</td><td>1751707</td></tr><tr><td>Mocha</td><td>mocha-4</td><td>2024/08/28 @ 14:00 UTC</td><td>2585031</td></tr><tr><td>Mainnet Beta</td><td>celestia</td><td>2024/09/18 @ 14:00 UTC</td><td>2371495</td></tr></tbody></table>',21),n=[i];function s(l,d,p,c,h,g){return r(),a("div",null,n)}const f=e(o,[["render",s]]);export{m as __pageData,f as default};
