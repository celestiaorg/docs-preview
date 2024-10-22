import{_ as e,o as t,c as a,Q as o}from"./chunks/framework.7e1c83d8.js";const r="/docs-preview/pr-1758/img/learn/Celestia_TIA_Inflation.png",n="/docs-preview/pr-1758/img/learn/Celestia_TIA_Allocation_at_Genesis.png",s="/docs-preview/pr-1758/img/learn/Celestia_TIA_Available_Supply.png",k=JSON.parse('{"title":"Staking, governance, & supply","description":"Learn about proof-of-stake on Celestia","frontmatter":{"description":"Learn about proof-of-stake on Celestia","head":[["meta",{"name":"og:title","content":"Staking, governance, & supply | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"learn/staking-governance-supply.md","filePath":"learn/staking-governance-supply.md","lastUpdated":1729563512000}'),i={name:"learn/staking-governance-supply.md"},l=o('<h1 id="staking-governance-supply" tabindex="-1">Staking, governance, &amp; supply <a class="header-anchor" href="#staking-governance-supply" aria-label="Permalink to &quot;Staking, governance, &amp; supply&quot;">​</a></h1><h2 id="proof-of-stake-on-celestia" tabindex="-1">Proof-of-stake on Celestia <a class="header-anchor" href="#proof-of-stake-on-celestia" aria-label="Permalink to &quot;Proof-of-stake on Celestia&quot;">​</a></h2><p>Celestia is a proof-of-stake blockchain based on CometBFT and the Cosmos SDK. Celestia supports in-protocol delegation and will start with an initial validator set of 100.</p><p>Staking TIA as a validator or delegator enables you to earn staking rewards from the network. Validators charge a fee to delegators which gives them a percentage of staking rewards.</p><p>Learn <a href="https://docs.cosmos.network/main/modules/staking" target="_blank" rel="noreferrer">how proof of stake works on Cosmos SDK chains like Celestia</a>.</p><table><thead><tr><th>Consensus mechanism</th><th>Proof-of-stake</th></tr></thead><tbody><tr><td>Blockchain framework</td><td>Cosmos SDK</td></tr><tr><td>Validator set size</td><td>100</td></tr><tr><td>Delegation support</td><td>Yes</td></tr></tbody></table><p>Learn how to <a href="./../learn/staking">stake on your own at the community dashboards</a>.</p><h2 id="inflation" tabindex="-1">Inflation <a class="header-anchor" href="#inflation" aria-label="Permalink to &quot;Inflation&quot;">​</a></h2><p>TIA inflation starts at 8% annually and decreases by 10% every year until it reaches the long term issuance rate of 1.5%. Exact annual inflation rates can be found in the diagram below.</p><p><img src="'+r+'" alt="inflation diagram"></p><p>The annual provisions for inflation are calculated based on the total supply of TIA at the beginning of each year. To calculate how many TIA to issue per block, Celestia uses the block timestamp rather than the block height since the time between blocks can vary and cause actual issuance to be higher than the target.</p><p>For an in-depth understanding, refer to <a href="https://github.com/celestiaorg/celestia-app/blob/main/docs/architecture/adr-019-strict-inflation-schedule.md" target="_blank" rel="noreferrer">ADR019</a>.</p><h2 id="decentralised-governance" tabindex="-1">Decentralised governance <a class="header-anchor" href="#decentralised-governance" aria-label="Permalink to &quot;Decentralised governance&quot;">​</a></h2><h3 id="network-parameters" tabindex="-1">Network parameters <a class="header-anchor" href="#network-parameters" aria-label="Permalink to &quot;Network parameters&quot;">​</a></h3><p>TIA holders (not just stakers) can propose and vote on governance proposals to change a subset of network parameters. To learn more, see a <a href="https://github.com/celestiaorg/celestia-app/blob/v1.x/specs/src/specs/params.md" target="_blank" rel="noreferrer">complete list of both the changeable and non-changeable parameters and their values</a>. Additionally, learn how to <a href="./../how-to-guides/celestia-app-commands#governance">submit and vote on governance proposals</a>.</p><h3 id="community-pool" tabindex="-1">Community pool <a class="header-anchor" href="#community-pool" aria-label="Permalink to &quot;Community pool&quot;">​</a></h3><p>Starting at genesis, Celestia’s <a href="https://docs.cosmos.network/main/modules/distribution" target="_blank" rel="noreferrer">community pool</a> receives 2% of all Celestia block rewards. TIA stakers may vote to fund ecosystem initiatives as in many other Cosmos SDK chains.</p><p>Learn how to <a href="./../how-to-guides/celestia-app-commands#community-pool">submit a governance proposal to spend community pool funds</a>.</p><h2 id="tia-allocation-at-genesis" tabindex="-1">TIA allocation at genesis <a class="header-anchor" href="#tia-allocation-at-genesis" aria-label="Permalink to &quot;TIA allocation at genesis&quot;">​</a></h2><p>Celestia will have a total supply of 1,000,000,000 TIA at genesis, split across five categories described in the chart and table below.</p><p><img src="'+n+'" alt="allocation diagram"></p><table><thead><tr><th>Category</th><th>Description</th><th>%</th></tr></thead><tbody><tr><td>Public Allocation</td><td>Genesis Drop and Incentivized Testnet: 7.41%<br>Future initiatives: 12.59%</td><td>20.00%</td></tr><tr><td>R&amp;D &amp; Ecosystem</td><td>Tokens allocated to the Celestia Foundation and core devs for research, development, and ecosystem initiatives including:<br>- Protocol maintenance and development<br>- Programs for rollup developers, infrastructure, and node operators</td><td>26.79%</td></tr><tr><td>Early Backers: Series A&amp;B</td><td>Early supporters of Celestia</td><td>19.67%</td></tr><tr><td>Early Backers: Seed</td><td>Early supporters of Celestia</td><td>15.90%</td></tr><tr><td>Initial Core Contributors</td><td>Members of Celestia Labs, the first core contributor to Celestia</td><td>17.64%</td></tr></tbody></table><h3 id="unlocks" tabindex="-1">Unlocks <a class="header-anchor" href="#unlocks" aria-label="Permalink to &quot;Unlocks&quot;">​</a></h3><p>Celestia’s 1 billion TIA supply at genesis will be subject to several different unlock schedules. All tokens, locked or unlocked, may be staked, but staking rewards are unlocked upon receipt and will add to the circulating supply.</p><p><strong>Circulating supply</strong> is defined as the amount of TIA tokens in general circulation without onchain transfer restrictions.</p><p><strong>Available supply</strong> is defined as the amount of TIA tokens that are either part of the circulating supply or are unlocked but subject to some form of governance to determine when the tokens are allocated. This includes the unlocked portion of the R&amp;D &amp; Ecosystem tokens and the tokens set aside for future initiatives.</p><p><em>The definitions for circulating and available supply were adapted from <a href="https://community.optimism.io/docs/governance/allocations/#token-distribution-details" target="_blank" rel="noreferrer">Optimism’s definitions</a>.</em></p><p><img src="'+s+'" alt="supply diagram"></p><p>Unlock schedule by category is described in the table below.</p><p><em>Note: Due to 2024 being a leap year, the yearly unlock intervals will occur on October 30th of each year. For example, unlocks at year 1 will occur on October 30, 2024.</em></p><table><thead><tr><th>Category</th><th>Unlock Schedule</th></tr></thead><tbody><tr><td>Public Allocation</td><td>Fully unlocked at launch.</td></tr><tr><td>R&amp;D &amp; Ecosystem</td><td>25.00% unlocked at launch.<br>Remaining 75.00% unlocks continuously from year 1 to year 4.</td></tr><tr><td>Initial Core Contributors</td><td>33.33% unlocked at year 1.<br>Remaining 66.67% unlocks continuously from year 1 to year 3.</td></tr><tr><td>Early Backers: Seed</td><td>33.33% unlocked at year 1.<br>Remaining 66.67% unlocks continuously from year 1 to year 2.</td></tr><tr><td>Early Backers: Series A&amp;B</td><td>33.33% unlocked at year 1.<br>Remaining 66.67% unlocks continuously from year 1 to year 2.</td></tr></tbody></table>',31),c=[l];function d(p,h,u,m,g,f){return t(),a("div",null,c)}const y=e(i,[["render",d]]);export{k as __pageData,y as default};
