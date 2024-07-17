import{_ as e,o as t,c as o,Q as a}from"./chunks/framework.6a3e98dd.js";const g=JSON.parse('{"title":"Overview of ZK Accounts","description":"Overview of ZK Accounts","frontmatter":{"description":"Overview of ZK Accounts","head":[["meta",{"name":"og:title","content":"Overview of ZK Accounts | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/zk_accounts_overview.md","filePath":"developers/zk_accounts_overview.md","lastUpdated":1721181011000}'),n={name:"developers/zk_accounts_overview.md"},i=a('<h1 id="overview-of-zk-accounts" tabindex="-1">Overview of ZK Accounts <a class="header-anchor" href="#overview-of-zk-accounts" aria-label="Permalink to &quot;Overview of ZK Accounts&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>In order to achieve <a href="https://vitalik.eth.limo/general/2019/12/26/mvb.html" target="_blank" rel="noreferrer">&quot;functional escape velocity&quot;</a> (i.e. in order to support non-trivial L2s), a blockchain must be sufficiently expressive. While it was previously assumed that a blockchain would have to provide general <em>execution</em> to meet the bar for sufficient expressivity, ZK proofs—also known as validity proofs—loosen this requirement. Using such systems, a blockchain only needs to provide <em>verification</em> of ZK proofs.</p><h2 id="background" tabindex="-1">Background <a class="header-anchor" href="#background" aria-label="Permalink to &quot;Background&quot;">​</a></h2><p>Popularized with <a href="https://ethereum.org/en/whitepaper/#ethereum-accounts" target="_blank" rel="noreferrer">Ethereum&#39;s account model</a>, transactions on blockchains with general execution have traditionally required only the following for spending from an account (equivalently, transaction validity):</p><ol><li>Correct account nonce (or other replay protection mechanism), and</li><li>Sufficient account balance to pay fees and send funds, and</li><li>Valid digital signature based on the account&#39;s public key.</li></ol><p>This is as opposed to Bitcoin, which allows <a href="https://ethereum.org/en/whitepaper/#scripting" target="_blank" rel="noreferrer">limited scripting</a> in the form of stateless predicates to control spending UTXOs. The lack of flexibility in the traditional account model signficantly restricts users&#39; ability to define conditions under which their accounts can be used; infamously, native multisigs are not possible on Ethereum. Some account-based blockchain, such as those based on the Cosmos SDK, can support <a href="https://github.com/cosmos/cosmos-sdk/tree/main/x" target="_blank" rel="noreferrer">additional functionality natively</a> such as multisig accounts or vesting accounts, however each such feature needs to be enshrined individually.</p><p>ZK proofs can provide the best of both worlds: expressive account control without individual enshrinement into the protocol.</p><h2 id="protocol-sketch" tabindex="-1">Protocol Sketch <a class="header-anchor" href="#protocol-sketch" aria-label="Permalink to &quot;Protocol Sketch&quot;">​</a></h2><p>A sketch of a ZK account protocol is actually surpisingly simple. A ZK account is a special account type in the Celestia state machine that is associated with a <em>verification key</em>, which uniquely represents a program whose execution over inputs can be verified. The program is entirely determined by the user, and does not require specific enshrinement in the Celestia state machine.</p><p>Spending from the ZK account (equivalently, advancing the state of the ZK account) is done through a transaction that provides a proof against the current ZK account state. If the proof is correctly verified, the funds of the account are unlocked and spendable as defined in the transaction. Inputs to the proof verifier depend on the specific application of the ZK account (detailed in the following section), which can be defined at account creation time or at transaction sending time. In the simplest form, inputs could be a public key and a nonce—sufficiency of TIA balance would have to be enforced by the Celestia state machine.</p><h2 id="applications-of-zk-accounts" tabindex="-1">Applications of ZK Accounts <a class="header-anchor" href="#applications-of-zk-accounts" aria-label="Permalink to &quot;Applications of ZK Accounts&quot;">​</a></h2><p>The protocol sketch in the previous section allows for conditional simple transfers, but not much more on its own. Significant additional functionality can be enabled by enshrining a small amount of additional logic, described non-exhaustively in this section.</p><h3 id="account-abstraction" tabindex="-1">Account Abstraction <a class="header-anchor" href="#account-abstraction" aria-label="Permalink to &quot;Account Abstraction&quot;">​</a></h3><p>While the protocol sketch is a form of account abstraction in that conditions for spending from a ZK account can be set by the user, this abstraction is only of limited use if the ZK account cannot interact with any other account. As an addition to the protocol sketch, we can allow messages from <em>other</em> accounts as inputs to the verifier. This would enable ZK accounts to delegate restricted or unrestricted control over spending to another account.</p><p>Restricted control could be useful in the case of two ZK rollups bridging atomically through the Celestia state machine in a single Celestia transaction. The first rollup could withdraw tokens from its ZK account, which then get sent via a message to the second rollup, and ingested into the second rollup&#39;s ZK account. Rollup bridging is described in more detail in <a href="#lazybridging">Lazybridging</a>.</p><p>Unrestricted control could be useful to delegate control of an account to another account. This has applications with <a href="#keystore-rollups">keystore rollups</a>.</p><h3 id="upgrades" tabindex="-1">Upgrades <a class="header-anchor" href="#upgrades" aria-label="Permalink to &quot;Upgrades&quot;">​</a></h3><p>The verification key associated with a ZK account does not need to be fixed at account creation time. Borrowing a playbook from account abstraction, each ZK account can instead store its verification key as mutable. A specific execution path of the verifier can trigger an upgrade, which can either be from posting a valid proof to the ZK account itself, or from another account entirely. The upgrade would change the verification key, potentially arbitrarily, essentially changing the program controlling spending of the ZK account. In the context of a ZK rollup, this would mean upgrading the execution logic of the rollup.</p><h3 id="lazybridging" tabindex="-1">Lazybridging <a class="header-anchor" href="#lazybridging" aria-label="Permalink to &quot;Lazybridging&quot;">​</a></h3><blockquote><p>&quot;Lazybridging is a lifestyle.&quot;</p></blockquote><p>Lazybriding is an extension to base ZK account functionality that allows for trust-minimized two-way bridges between the Celestia state machine and rollups (for both TIA and arbitrary tokens potentially), and incoming bridging of assets from non-IBC external chains. The extension is another execution path of the verifier that can trigger the unlocking of specific account funds to be spent from the ZK account, rather than the entirety of the account funds as with the protocol sketch.</p><p>For rollups (both ZK and optimistic), lazybriding is implemented as two components working in unison: one in the Celestia state machine as described above, and one in the rollup&#39;s state transition function. For example, the rollup can have an enshrined transaction type or an enshrined smart contract that can burn assets on the rollup, triggering the withdrawal of those assets from the associated ZK account on Celestia.</p><p>Another form of lazybriding is relaying assets from non-IBC chains, such as Ethereum. In this scheme, the ZK account would verify the correctness of the remote chain&#39;s consensus and some subset of its state transition (e.g. just the logs for an EVM chain). In other words, it does not require the remote chain to opt-in to using Celestia for data availability.</p><h3 id="keystore-rollups" tabindex="-1">Keystore Rollups <a class="header-anchor" href="#keystore-rollups" aria-label="Permalink to &quot;Keystore Rollups&quot;">​</a></h3><p>Finally, a <a href="https://notes.ethereum.org/@vbuterin/minimal_keystore_rollup" target="_blank" rel="noreferrer">keystore rollup</a> is a rollup which abstracts mutable user public keys behind unique immutable identifiers. The identifiers then control the assets, rather than the public keys. When combined with account abstraction, this allows keystore rollup accounts to control both other accounts in the Celestia state machine and other rollups that use ZK accounts.</p><h2 id="follow-the-development-of-zk-accounts" tabindex="-1">Follow the Development of ZK Accounts <a class="header-anchor" href="#follow-the-development-of-zk-accounts" aria-label="Permalink to &quot;Follow the Development of ZK Accounts&quot;">​</a></h2><h3 id="working-group-and-cip" tabindex="-1">Working Group and CIP <a class="header-anchor" href="#working-group-and-cip" aria-label="Permalink to &quot;Working Group and CIP&quot;">​</a></h3><p>A working group for designing and implementing ZK accounts meets every two weeks: <a href="https://forum.celestia.org/t/zero-knowledge-in-the-celestia-baselayer/1475" target="_blank" rel="noreferrer">Zero Knowledge in the Celestia Baselayer</a>. A <a href="https://github.com/celestiaorg/CIPs/pull/91" target="_blank" rel="noreferrer">work-in-progress CIP</a> is also available, with <a href="https://github.com/celestiaorg/CIPs/tree/main/wgs/zk" target="_blank" rel="noreferrer">call recordings</a> and additional resources.</p><h3 id="content" tabindex="-1">Content <a class="header-anchor" href="#content" aria-label="Permalink to &quot;Content&quot;">​</a></h3><ul><li>Initial proposal: <a href="https://forum.celestia.org/t/achieving-base-layer-functionality-escape-velocity-without-on-chain-smart-contracts-using-sovereign-zk-rollups/958" target="_blank" rel="noreferrer">Achieving base layer functionality escape velocity without on-chain smart contracts, using sovereign ZK rollups</a></li><li>Proposed designs: <a href="https://forum.celestia.org/t/celestia-snark-accounts-design-spec/1639" target="_blank" rel="noreferrer">Celestia Snark Accounts Design Spec</a></li><li>Discussion on inputs: <a href="https://github.com/celestiaorg/celestia-app/discussions/2902" target="_blank" rel="noreferrer">Public Inputs for SNARK Accounts</a></li><li>Talk: <a href="https://www.youtube.com/watch?v=SrZ9Ux2Ktt8" target="_blank" rel="noreferrer">ZK Accounts on Celestia</a></li><li>Podcast: <a href="https://www.youtube.com/watch?v=VMmI77qcLyg" target="_blank" rel="noreferrer">How ZK Accounts Expand dApp Limits</a></li></ul>',31),r=[i];function s(c,l,h,u,d,p){return t(),o("div",null,r)}const m=e(n,[["render",s]]);export{g as __pageData,m as default};
