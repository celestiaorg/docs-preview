import{_ as e,o as t,c as a,Q as r}from"./chunks/framework.f7afc394.js";const o="/docs-preview/pr-1725/img/blobstream/blobstream_logo.png",f=JSON.parse('{"title":"Blobstream: Streaming modular DA to Ethereum","description":"Learn how to integrate your L2 with Blobstream","frontmatter":{"description":"Learn how to integrate your L2 with Blobstream","head":[["meta",{"name":"og:title","content":"Blobstream: Streaming modular DA to Ethereum | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/blobstream.md","filePath":"developers/blobstream.md","lastUpdated":1726846318000}'),s={name:"developers/blobstream.md"},l=r('<h1 id="blobstream-streaming-modular-da-to-ethereum" tabindex="-1">Blobstream: Streaming modular DA to Ethereum <a class="header-anchor" href="#blobstream-streaming-modular-da-to-ethereum" aria-label="Permalink to &quot;Blobstream: Streaming modular DA to Ethereum&quot;">​</a></h1><p><img src="'+o+'" alt="Blobstream logo"></p><h2 id="what-is-blobstream" tabindex="-1">What is Blobstream? <a class="header-anchor" href="#what-is-blobstream" aria-label="Permalink to &quot;What is Blobstream?&quot;">​</a></h2><p><a href="https://blog.celestia.org/introducing-blobstream/" target="_blank" rel="noreferrer">Blobstream</a> is the first data availability solution for Ethereum that securely scales with the number of users. Formerly known as the <a href="https://blog.celestia.org/celestiums/" target="_blank" rel="noreferrer">Quantum Gravity Bridge (QGB)</a>, Blobstream relays commitments to Celestia&#39;s data root to an onchain light client on Ethereum, for integration by developers into L2 contracts. This enables Ethereum developers to build high-throughput L2s using Celestia&#39;s optimised DA layer, the first with Data Availability Sampling (DAS). Any ecosystem can deploy a Blobstream light client onchain to allow L2s and L3s to access DA from Celestia.</p><p>An implementation of Blobstream, by <a href="https://platform-docs.succinct.xyz/" target="_blank" rel="noreferrer">Succinct</a>, called <a href="https://github.com/succinctlabs/blobstreamx" target="_blank" rel="noreferrer">Blobstream X</a>, is out and will be used in the upcoming deployments. This implementation proves the validity of Celestia block headers on a target EVM chain using zero-knowledge (ZK) proofs, which allow inheriting all the security guarantees of Celestia.</p><p>The latest implementation of Blobstream X is <a href="https://github.com/succinctlabs/sp1-blobstream" target="_blank" rel="noreferrer">SP1 Blobstream</a>, which is written in Rust for the SP1 zkVM. SP1 Blobstream offers improved performance and efficiency while maintaining the security guarantees of the original Blobstream X.</p><p>Please note: Blobstream remains early-stage, experimental software and users should use Blobstream at their own risk.</p><h3 id="implementations-of-blobstream" tabindex="-1">Implementations of Blobstream <a class="header-anchor" href="#implementations-of-blobstream" aria-label="Permalink to &quot;Implementations of Blobstream&quot;">​</a></h3><ul><li><a href="#what-is-sp1-blobstream">SP1 Blobstream</a> (an implementation of Blobstream X)</li><li><a href="#what-is-blobstream-x">Blobstream X</a></li></ul><h2 id="blobstream-vs-data-availability-committees-dacs" tabindex="-1">Blobstream vs. data availability committees (DACs) <a class="header-anchor" href="#blobstream-vs-data-availability-committees-dacs" aria-label="Permalink to &quot;Blobstream vs. data availability committees (DACs)&quot;">​</a></h2><h3 id="decentralization-and-security" tabindex="-1">Decentralization and security <a class="header-anchor" href="#decentralization-and-security" aria-label="Permalink to &quot;Decentralization and security&quot;">​</a></h3><p>Blobstream is built on Celestia, which uses a CometBFT-based proof-of-stake system. Blobstream shares the same security assumptions as Celestia. In contrast, data availability committees (DACs), are typically centralized or semi-centralized, relying on a specific set of entities or individuals to vouch for data availability.</p><h3 id="mechanism-of-verification" tabindex="-1">Mechanism of verification <a class="header-anchor" href="#mechanism-of-verification" aria-label="Permalink to &quot;Mechanism of verification&quot;">​</a></h3><p>Blobstream uses data availability attestations, which are Merkle roots of the batched L2 data, to confirm that the necessary data is present on Celestia. The L2 contract on Ethereum can check directly with Blobstream if the data is published on Celestia. Similarly, a DAC would rely on attestations or confirmations from its permissioned members.</p><h3 id="flexibility-and-scalability" tabindex="-1">Flexibility and scalability <a class="header-anchor" href="#flexibility-and-scalability" aria-label="Permalink to &quot;Flexibility and scalability&quot;">​</a></h3><p>Blobstream is designed to offer high-throughput data availability for Ethereum L2s, aiming to strike a balance between scalability and security. It operates independently of Ethereum&#39;s gas costs, as Celestia&#39;s resource pricing is more byte-focused rather than computation-centric. On the other hand, the scalability and flexibility of a DAC would depend on its specific design and implementation.</p><p>In summary, both Blobstream and DACs aim to ensure offchain data availability, but Blobstream offers a more decentralized, secure, and scalable solution compared to the potential centralized nature of DACs.</p><h2 id="what-is-sp1-blobstream" tabindex="-1">What is SP1 Blobstream? <a class="header-anchor" href="#what-is-sp1-blobstream" aria-label="Permalink to &quot;What is SP1 Blobstream?&quot;">​</a></h2><p><a href="https://github.com/succinctlabs/sp1-blobstream" target="_blank" rel="noreferrer">SP1 Blobstream</a> is the latest implementation of Blobstream in Rust using the <a href="https://github.com/succinctlabs/sp1" target="_blank" rel="noreferrer">SP1</a> zkVM.</p><p><a href="https://github.com/succinctlabs/sp1-blobstream" target="_blank" rel="noreferrer">SP1 Blobstream</a> is the latest implementation of Blobstream with a ZK light client that bridges Celestia’s modular DA layer to Ethereum to allow high-throughput rollups to use Celestia’s DA while settling on Ethereum.</p><p>Optimistic or ZK rollups that settle on Ethereum, but wish to use Celestia for DA, require a mechanism for <em>bridging</em> Celestia’s data root to Ethereum as part of the settlement process. This data root is used during inclusion proofs to prove that particular rollup transactions were included and made available in the Celestia network.</p><p>Bridging Celestia’s data root to Ethereum requires running a Celestia <em>light client</em> as a smart contract on Ethereum, to make the latest state of the Celestia chain known on Ethereum and available to rollups. SP1 Blobstream uses the latest advances in ZK proofs to generate a <em>succinct proof</em> that enough Celestia validators have come to consensus (according to the CometBFT consensus protocol) on a block header, and verifies this proof in the SP1 Blobstream Ethereum smart contract to update it with the latest Celestia header.</p><p>The SP1 Blobstream ZK proof not only verifies the consensus of Celestia validators, but it also merkelizes and hashes all the data roots in the block range from the previous update to the current update, making accessible all Celestia data roots (verifiable with a Merkle inclusion proof against the stored Merkle root) to rollups.</p><p>If you&#39;re looking to deploy SP1 blobstream to a new chain, see <a href="./sp1-blobstream-deploy">new Sp1 Blobstream deployments</a>.</p><p>Learn more at the <a href="https://github.com/succinctlabs/sp1-blobstream" target="_blank" rel="noreferrer">sp1-blobstream</a> repo.</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>The current Blobstream deployments all use SP1 Blobstream.</p></div><h2 id="integrate-with-sp1-blobstream" tabindex="-1">Integrate with SP1 Blobstream <a class="header-anchor" href="#integrate-with-sp1-blobstream" aria-label="Permalink to &quot;Integrate with SP1 Blobstream&quot;">​</a></h2><p>The following docs go over how developers can integrate SP1 Blobstream.</p><p>You can <a href="https://github.com/succinctlabs/sp1-blobstream" target="_blank" rel="noreferrer">find the repository for SP1 Blobstream</a> along with code for:</p><ul><li><a href="https://github.com/succinctlabs/sp1-blobstream/blob/main/contracts/src/SP1Blobstream.sol" target="_blank" rel="noreferrer">The SP1 Blobstream smart contract - <code>SP1Blobstream.sol</code></a></li><li><a href="https://github.com/succinctlabs/sp1-blobstream/tree/main/program" target="_blank" rel="noreferrer">The SP1 program</a></li><li><a href="/docs-preview/pr-1725/TODO">The SP1 Blobstream contract Golang bindings</a></li></ul><p>The first deployments of SP1 Blobstream will be maintained on the following chains: Arbitrum One, Base and Ethereum Mainnet. Every 1 hour, the prover/relayer will post an update to the Blobstream contract that will include a new data commitment range that covers a 1-hour block range from the <code>latestBlock</code> in the contract. On Ethereum Mainnet, the contract will be updated every 4 hours.</p><h3 id="how-to-integrate-with-blobstream" tabindex="-1">How to integrate with Blobstream <a class="header-anchor" href="#how-to-integrate-with-blobstream" aria-label="Permalink to &quot;How to integrate with Blobstream&quot;">​</a></h3><p>Integrating your L2 with Blobstream requires two components: your <a href="./blobstream-contracts">onchain smart contract logic</a>, and your <a href="./blobstream-offchain">offchain client logic for your rollup</a>. The next three sections cover these topics:</p><ul><li><a href="./blobstream-contracts">Integrate with Blobstream contracts</a></li><li><a href="./blobstream-offchain">Integrate with Blobstream client</a></li><li><a href="./blobstream-proof-queries">Querying the Blobstream proofs</a></li></ul><h3 id="blobstream-rollups" tabindex="-1">Blobstream rollups <a class="header-anchor" href="#blobstream-rollups" aria-label="Permalink to &quot;Blobstream rollups&quot;">​</a></h3><p>More on the different ways to build a blobstream rollup can be found in the <a href="./blobstream-rollups">blobstream rollups</a> documentation.</p><h3 id="deployed-contracts" tabindex="-1">Deployed contracts <a class="header-anchor" href="#deployed-contracts" aria-label="Permalink to &quot;Deployed contracts&quot;">​</a></h3><p>You can interact with the SP1 Blobstream contracts today. The SP1 Blobstream Solidity smart contracts are currently deployed on the following chains:</p><table><thead><tr><th>Contract</th><th>EVM network</th><th>Contract address</th><th>Attested data on Celestia</th><th>Link to Celenium</th></tr></thead><tbody><tr><td>SP1 Blobstream</td><td>Ethereum Mainnet</td><td><a href="https://etherscan.io/address/0x7Cf3876F681Dbb6EdA8f6FfC45D66B996Df08fAe#events" target="_blank" rel="noreferrer"><code>0x7Cf3876F681Dbb6EdA8f6FfC45D66B996Df08fAe</code></a></td><td><a href="./../nodes/mainnet">Mainnet Beta</a></td><td><a href="https://celenium.io/blobstream?network=ethereum&amp;page=1" target="_blank" rel="noreferrer">Deployment on Celenium</a></td></tr><tr><td>SP1 Blobstream</td><td>Arbitrum One</td><td><a href="https://arbiscan.io/address/0xA83ca7775Bc2889825BcDeDfFa5b758cf69e8794#events" target="_blank" rel="noreferrer"><code>0xA83ca7775Bc2889825BcDeDfFa5b758cf69e8794</code></a></td><td><a href="./../nodes/mainnet">Mainnet Beta</a></td><td><a href="https://celenium.io/blobstream?network=arbitrum&amp;page=1" target="_blank" rel="noreferrer">Deployment on Celenium</a></td></tr><tr><td>SP1 Blobstream</td><td>Base</td><td><a href="https://basescan.org/address/0xA83ca7775Bc2889825BcDeDfFa5b758cf69e8794#events" target="_blank" rel="noreferrer"><code>0xA83ca7775Bc2889825BcDeDfFa5b758cf69e8794</code></a></td><td><a href="./../nodes/mainnet">Mainnet Beta</a></td><td><a href="https://celenium.io/blobstream?network=base&amp;page=1" target="_blank" rel="noreferrer">Deployment on Celenium</a></td></tr><tr><td>SP1 Blobstream</td><td>Sepolia</td><td><a href="https://sepolia.etherscan.io/address/0xf0c6429ebab2e7dc6e05dafb61128be21f13cb1e#events" target="_blank" rel="noreferrer"><code>0xf0c6429ebab2e7dc6e05dafb61128be21f13cb1e</code></a></td><td><a href="./../nodes/mocha-testnet">Mocha testnet</a></td><td><a href="https://mocha-4.celenium.io/blobstream?network=ethereum&amp;page=1" target="_blank" rel="noreferrer">Deployment on Celenium</a></td></tr><tr><td>SP1 Blobstream</td><td>Arbitrum Sepolia</td><td><a href="https://sepolia.arbiscan.io/address/0xc3e209eb245Fd59c8586777b499d6A665DF3ABD2#events" target="_blank" rel="noreferrer"><code>0xc3e209eb245Fd59c8586777b499d6A665DF3ABD2</code></a></td><td><a href="./../nodes/mocha-testnet">Mocha testnet</a></td><td><a href="https://mocha-4.celenium.io/blobstream?network=arbitrum&amp;page=1" target="_blank" rel="noreferrer">Deployment on Celenium</a></td></tr><tr><td>SP1 Blobstream</td><td>Base Sepolia</td><td><a href="https://sepolia.basescan.org/address/0xc3e209eb245Fd59c8586777b499d6A665DF3ABD2#events" target="_blank" rel="noreferrer"><code>0xc3e209eb245Fd59c8586777b499d6A665DF3ABD2</code></a></td><td><a href="./../nodes/mocha-testnet">Mocha testnet</a></td><td><a href="https://mocha-4.celenium.io/blobstream?network=base&amp;page=1" target="_blank" rel="noreferrer">Deployment on Celenium</a></td></tr></tbody></table>',39),i=[l];function n(h,c,m,b,d,p){return t(),a("div",null,i)}const g=e(s,[["render",n]]);export{f as __pageData,g as default};
