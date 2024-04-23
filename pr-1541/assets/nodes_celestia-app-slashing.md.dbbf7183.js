import{_ as e,o as a,c as t,Q as o}from"./chunks/framework.f70302b1.js";const f=JSON.parse('{"title":"Slashing on Celestia","description":"This section covers the slashing mechanics for validators in Celestia.","frontmatter":{"description":"This section covers the slashing mechanics for validators in Celestia.","head":[["meta",{"name":"og:title","content":"Slashing on Celestia | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/celestia-app-slashing.md","filePath":"nodes/celestia-app-slashing.md","lastUpdated":1713897093000}'),s={name:"nodes/celestia-app-slashing.md"},i=o('<h1 id="slashing-on-celestia" tabindex="-1">Slashing on Celestia <a class="header-anchor" href="#slashing-on-celestia" aria-label="Permalink to &quot;Slashing on Celestia&quot;">​</a></h1><p>Slashing is a mechanism employed in proof of stake blockchains that is used to deter and punish malicious behavior. It functions by removing a percentage of a validator&#39;s stake each time they act harmfully towards the network.</p><p>Celestia is built with the Cosmos SDK and uses the <code>x/slashing</code> module.</p><p>If a validator gets slashed, delegators bonded to that validator will also have the same percentage of their delegated funds slashed.</p><p>The following are the conditions for a validator to get slashed:</p><ol><li><p><strong>Downtime</strong>: If a validator is offline for more than 25% of a rolling window of the last 5,000 blocks, they will be jailed for 1 minute. During this period, the validator is removed from the validator set temporarily, and will be unable to propose new blocks or earn rewards. After the jail period, the validator can send an unjail request to rejoin the validator set.</p></li><li><p><strong>Double signing</strong>: This is a more severe offense and results in a larger percentage loss. If a validator engages in double signing, the validator will lose 2% of their stake and the remainder of their stake will be returned to them. The validator will be permanently removed from the validator set and will not have the ability to unjail. Delegators bonded to that validator will automatically enter the unbonding period for 21 days, and can delegate to another validator after they have been unbonded.</p></li></ol><p>For more details on the slashing parameters, refer to the <a href="https://celestiaorg.github.io/celestia-app/specs/params.html#module-parameters" target="_blank" rel="noreferrer">celestia-app specifications</a> page.</p>',7),l=[i];function n(r,d,h,c,p,g){return a(),t("div",null,l)}const u=e(s,[["render",n]]);export{f as __pageData,u as default};
