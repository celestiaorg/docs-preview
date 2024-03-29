import{_ as a,o as t,c as e,Q as i}from"./chunks/framework.7aeaf2dc.js";const o="/docs-preview/pr-1503/img/learn/data-availability-faq/Data-availability.png",s="/docs-preview/pr-1503/img/learn/data-availability-faq/Data-storage.png",m=JSON.parse('{"title":"Data availability FAQ","description":"Frequently asked questions related to Data Availability.","frontmatter":{"description":"Frequently asked questions related to Data Availability.","next":{"text":"Overview of TIA","link":"/learn/tia"},"head":[["meta",{"name":"og:title","content":"Data availability FAQ | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"learn/how-celestia-works/data-availability-faq.md","filePath":"learn/how-celestia-works/data-availability-faq.md","lastUpdated":1711725810000}'),r={name:"learn/how-celestia-works/data-availability-faq.md"},l=i('<h1 id="data-availability-faq" tabindex="-1">Data availability FAQ <a class="header-anchor" href="#data-availability-faq" aria-label="Permalink to &quot;Data availability FAQ&quot;">​</a></h1><h2 id="what-is-data-availability" tabindex="-1">What is data availability? <a class="header-anchor" href="#what-is-data-availability" aria-label="Permalink to &quot;What is data availability?&quot;">​</a></h2><p>Data availability answers the question, has this data been published? Specifically, a node will verify data availability when it receives a new block that is getting added to the chain. The node will attempt to download all the transaction data for the new block to verify availability. If the node can download all the transaction data, then it successfully verified data availability, proving that the block data was actually published to the network.</p><p><img src="'+o+'" alt="Modular VS Monolithic"></p><p>As you’ll see, modular blockchains like Celestia employ other primitives that allow nodes to verify data availability more efficiently. Data availability is critical to the security of any blockchain because it ensures that anyone can inspect the ledger of transactions and verify it. Data availability becomes particularly problematic when scaling blockchains. As the blocks get bigger, it becomes impractical for normal users to download all the data, and therefore users can no longer verify the chain.</p><h2 id="what-is-the-data-availability-problem" tabindex="-1">What is the data availability problem? <a class="header-anchor" href="#what-is-the-data-availability-problem" aria-label="Permalink to &quot;What is the data availability problem?&quot;">​</a></h2><p>The problem with data availability occurs when the transaction data for a newly proposed block cannot be downloaded and verified. This type of attack by a block producer is called a data withholding attack, which sees the block producer withhold transaction data of a new block.</p><p>Since transaction data is withheld, nodes cannot update to the latest state. Such an attack can have numerous consequences, from halting a chain to gaining the ability to steal funds. The severity of the consequences will depend on the type of blockchain (L1 or L2) and whether data availability is kept onchain or offchain. The data availability problem commonly arises around L2 scaling solutions like rollups and validiums.</p><h2 id="how-do-nodes-verify-data-availability-in-celestia" tabindex="-1">How do nodes verify data availability in Celestia? <a class="header-anchor" href="#how-do-nodes-verify-data-availability-in-celestia" aria-label="Permalink to &quot;How do nodes verify data availability in Celestia?&quot;">​</a></h2><p>In most blockchains, nodes that verify data availability do so by downloading all transaction data for a block. If they are able to download all the data, they have verified its availability. In Celestia, light nodes have access to a new mechanism to verify data availability without needing to download all the data for a block. This new primitive for verifying data availability is called data availability sampling.</p><h2 id="what-is-data-availability-sampling" tabindex="-1">What is data availability sampling? <a class="header-anchor" href="#what-is-data-availability-sampling" aria-label="Permalink to &quot;What is data availability sampling?&quot;">​</a></h2><p>Data availability sampling is a mechanism for light nodes to verify data availability without having to download all data for a block. Data availability sampling (DAS) works by having light nodes conduct multiple rounds of random sampling for small portions of block data. As a light node completes more rounds of sampling for block data, it increases its confidence that data is available. Once the light node successfully reaches a predetermined confidence level (e.g. 99%) it will consider the block data as available.</p><p>Want a simpler explanation? <a href="https://twitter.com/nickwh8te/status/1559977957195751424" target="_blank" rel="noreferrer">Check out this thread</a> on how data availability sampling is like flipping a coin.</p><h2 id="what-are-some-of-the-security-assumptions-that-celestia-makes-for-data-availability-sampling" tabindex="-1">What are some of the security assumptions that Celestia makes for data availability sampling? <a class="header-anchor" href="#what-are-some-of-the-security-assumptions-that-celestia-makes-for-data-availability-sampling" aria-label="Permalink to &quot;What are some of the security assumptions that Celestia makes for data availability sampling?&quot;">​</a></h2><p>Celestia assumes that there is a minimum number of light nodes that are conducting data availability sampling for a given block size. This assumption is necessary so that a full node can reconstruct an entire block from the portions of data light nodes sampled and stored. The amount of light nodes that are needed will depend on the block size - for bigger blocks more light nodes are assumed to be running.</p><p>A second notable assumption that is made by light nodes is that they are connected to at least one honest full node. This ensures that they can receive fraud proofs for incorrectly erasure coded blocks. If a light node is not connected to an honest full node, such as during an eclipse attack, it can’t verify that the block is improperly constructed.</p><h2 id="why-is-block-reconstruction-necessary-for-security" tabindex="-1">Why is block reconstruction necessary for security? <a class="header-anchor" href="#why-is-block-reconstruction-necessary-for-security" aria-label="Permalink to &quot;Why is block reconstruction necessary for security?&quot;">​</a></h2><p>In Celestia, blocks need to be erasure coded so that there is redundant data to aid the data availability sampling process. However, nodes tasked with erasure coding the data could do so incorrectly. Since Celestia uses fraud proofs to verify that erasure coding is incorrect, the full block data is needed to generate a bad encoding fraud proof.</p><p>There could be a situation where validators only provide data to light nodes and not full nodes. If the full nodes don’t have the ability to reconstruct the full block from the portions of data stored by light nodes, they wouldn’t be able to generate a bad encoding fraud proof.</p><h2 id="what-is-data-storage" tabindex="-1">What is data storage? <a class="header-anchor" href="#what-is-data-storage" aria-label="Permalink to &quot;What is data storage?&quot;">​</a></h2><p>Data storage is concerned with the ability to store and access past transaction data.</p><p><img src="'+s+'" alt="Modular VS Monolithic"></p><p>Data storage and retrieval is needed for multiple purposes, such as:</p><ul><li>Reading the information of a previous transaction</li><li>Syncing a node</li><li>Indexing and serving transaction data</li><li>Retrieving NFT information</li></ul><h2 id="what-is-the-problem-around-data-storage" tabindex="-1">What is the problem around data storage? <a class="header-anchor" href="#what-is-the-problem-around-data-storage" aria-label="Permalink to &quot;What is the problem around data storage?&quot;">​</a></h2><p>The issue with data storage is whether past transaction data can be stored and successfully retrieved at a later time. The inability to retrieve historical transaction data can cause problems, such as users being unable to access information about their past transactions or nodes that cannot sync from genesis. Luckily, the assumptions around storing and accessing past data are weak. Only a single copy of a blockchain’s history needs to be accessible for users to gain access to historical transaction data. In other words, data storage security is a 1 of N honesty assumption.</p><h2 id="what-is-the-difference-between-data-availability-and-data-storage" tabindex="-1">What is the difference between data availability and data storage? <a class="header-anchor" href="#what-is-the-difference-between-data-availability-and-data-storage" aria-label="Permalink to &quot;What is the difference between data availability and data storage?&quot;">​</a></h2><p>Data availability is about verifying that transaction data for a new block is public and available. In contrast, data storage involves storing and accessing past transaction data from old blocks.</p><h2 id="where-does-blockchain-state-fit-into-this" tabindex="-1">Where does blockchain state fit into this? <a class="header-anchor" href="#where-does-blockchain-state-fit-into-this" aria-label="Permalink to &quot;Where does blockchain state fit into this?&quot;">​</a></h2><p>Up until now it’s been all about transaction data, but blockchain state is a related topic. The state is different from transaction data. Specifically, the state is like a current snapshot of the network, which includes information about account balances, smart contract balances, and validator set info. <a href="https://forum.celestia.org/t/the-state-growth-problem-in-a-modular-blockchain-ecosystem/325" target="_blank" rel="noreferrer">Problems that arise</a> from the size of the state are different in nature than those around data availability and retrievability.</p><h2 id="why-doesn-t-celestia-incentivize-storage-of-historical-data" tabindex="-1">Why doesn’t Celestia incentivize storage of historical data? <a class="header-anchor" href="#why-doesn-t-celestia-incentivize-storage-of-historical-data" aria-label="Permalink to &quot;Why doesn’t Celestia incentivize storage of historical data?&quot;">​</a></h2><p>Most blockchains don’t incentivize storage of data because it shouldn’t be the responsibility of a blockchain to guarantee past data will be retrievable forever. In addition, the data storage problem only requires a single party to store and provide the data for users, which is not a strong problem. As such, Celestia’s purpose is to provide a secure and scalable way to verify the availability of data. Once data has been verified as available, the job of storing and retrieving historical data is left up to other entities that require the data. Luckily, there are natural incentives for outside parties to store and serve historical data to users.</p><h2 id="who-may-store-historical-data-if-there-is-no-reward" tabindex="-1">Who may store historical data if there is no reward? <a class="header-anchor" href="#who-may-store-historical-data-if-there-is-no-reward" aria-label="Permalink to &quot;Who may store historical data if there is no reward?&quot;">​</a></h2><p>There are multiple types of actors that may be likely to store historical data. Some of those include:</p><ul><li>Block explorers that provide access to past transaction data.</li><li>Indexers that provide API queries for past data.</li><li>Applications or rollups that require historical data for certain processes.</li><li>Users that want to guarantee that they will have access to their transaction history.</li></ul><h2 id="what-are-some-things-blockchains-can-do-to-provide-stronger-assurances-of-data-retrievability" tabindex="-1">What are some things blockchains can do to provide stronger assurances of data retrievability? <a class="header-anchor" href="#what-are-some-things-blockchains-can-do-to-provide-stronger-assurances-of-data-retrievability" aria-label="Permalink to &quot;What are some things blockchains can do to provide stronger assurances of data retrievability?&quot;">​</a></h2><ul><li>Reward nodes based on the amount of transaction data they store and requests for data they serve (this is the case with some data storage blockchains, like <a href="https://filecoin.io" target="_blank" rel="noreferrer">Filecoin</a>).</li><li>Publish transaction data onto a data storage blockchain that incentivizes storing and serving requests for historical data.</li></ul>',37),n=[l];function d(h,c,b,u,f,p){return t(),e("div",null,n)}const v=a(r,[["render",d]]);export{m as __pageData,v as default};
