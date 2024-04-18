import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.eb5c8ebb.js";const d=JSON.parse('{"title":"Multisig","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Multisig | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/celestia-app-multisig.md","filePath":"nodes/celestia-app-multisig.md","lastUpdated":1713454219000}'),p={name:"nodes/celestia-app-multisig.md"},o=l(`<h1 id="multisig" tabindex="-1">Multisig <a class="header-anchor" href="#multisig" aria-label="Permalink to &quot;Multisig&quot;">​</a></h1><p>Celestia inherits support for multisig accounts from the Cosmos SDK. Multisig accounts behave similarly to regular accounts with the added requirement that a threshold of signatures is needed to authorize a transaction.</p><p>Multisig accounts can be created from the <a href="#command-line">command line</a> or using a graphical interface such as <a href="https://multisig.keplr.app/" target="_blank" rel="noreferrer">Keplr</a>.</p><h2 id="command-line" tabindex="-1">Command line <a class="header-anchor" href="#command-line" aria-label="Permalink to &quot;Command line&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#!/bin/sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Prerequisite: prior to running this script, start a single node devnet with ./scripts/single-node.sh</span></span>
<span class="line"><span style="color:#E1E4E8;">CHAIN_ID</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;private&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">KEY_NAME</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;validator&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">KEYRING_BACKEND</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;test&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">BROADCAST_MODE</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;block&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Create 3 test keys</span></span>
<span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">keys</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test1</span></span>
<span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">keys</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test2</span></span>
<span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">keys</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test3</span></span>
<span class="line"><span style="color:#6A737D;"># Create the multisig account</span></span>
<span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">keys</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">multisig</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--multisig</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test1,test2,test3</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--multisig-threshold</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Send some funds from the validator account to the multisig account</span></span>
<span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bank</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">send</span><span style="color:#E1E4E8;"> $VALIDATOR $MULTISIG </span><span style="color:#79B8FF;">100000</span><span style="color:#9ECBFF;">utia</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--from</span><span style="color:#E1E4E8;"> $VALIDATOR </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--fees</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1000</span><span style="color:#9ECBFF;">utia</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--chain-id</span><span style="color:#E1E4E8;"> $CHAIN_ID </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--keyring-backend</span><span style="color:#E1E4E8;"> $KEYRING_BACKEND </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--broadcast-mode</span><span style="color:#E1E4E8;"> $BROADCAST_MODE </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Send some funds from the multisig account to the validator account.</span></span>
<span class="line"><span style="color:#6A737D;"># Note this transaction will need to be signed by at least 2 of the 3 test accounts.</span></span>
<span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bank</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">send</span><span style="color:#E1E4E8;"> $MULTISIG $VALIDATOR </span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">utia</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--from</span><span style="color:#E1E4E8;"> $MULTISIG </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--fees</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1000</span><span style="color:#9ECBFF;">utia</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--chain-id</span><span style="color:#E1E4E8;"> $CHAIN_ID </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--keyring-backend</span><span style="color:#E1E4E8;"> $KEYRING_BACKEND </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--generate-only</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unsignedTx.json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Sign from test1 and test2</span></span>
<span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sign</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unsignedTx.json</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--multisig</span><span style="color:#E1E4E8;"> $MULTISIG </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test1</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--output-document</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test1sig.json</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--chain-id</span><span style="color:#E1E4E8;"> $CHAIN_ID</span></span>
<span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sign</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unsignedTx.json</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--multisig</span><span style="color:#E1E4E8;"> $MULTISIG </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test2</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--output-document</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test2sig.json</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--chain-id</span><span style="color:#E1E4E8;"> $CHAIN_ID</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Generate the final signed transaction</span></span>
<span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">multisign</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unsignedTx.json</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">multisig</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">test1sig.json</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test2sig.json</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--output-document</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">signedTx.json</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--chain-id</span><span style="color:#E1E4E8;"> $CHAIN_ID</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#!/bin/sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Prerequisite: prior to running this script, start a single node devnet with ./scripts/single-node.sh</span></span>
<span class="line"><span style="color:#24292E;">CHAIN_ID</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;private&quot;</span></span>
<span class="line"><span style="color:#24292E;">KEY_NAME</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;validator&quot;</span></span>
<span class="line"><span style="color:#24292E;">KEYRING_BACKEND</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;test&quot;</span></span>
<span class="line"><span style="color:#24292E;">BROADCAST_MODE</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;block&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Create 3 test keys</span></span>
<span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">keys</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test1</span></span>
<span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">keys</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test2</span></span>
<span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">keys</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test3</span></span>
<span class="line"><span style="color:#6A737D;"># Create the multisig account</span></span>
<span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">keys</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">multisig</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--multisig</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test1,test2,test3</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--multisig-threshold</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Send some funds from the validator account to the multisig account</span></span>
<span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bank</span><span style="color:#24292E;"> </span><span style="color:#032F62;">send</span><span style="color:#24292E;"> $VALIDATOR $MULTISIG </span><span style="color:#005CC5;">100000</span><span style="color:#032F62;">utia</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--from</span><span style="color:#24292E;"> $VALIDATOR </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--fees</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000</span><span style="color:#032F62;">utia</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--chain-id</span><span style="color:#24292E;"> $CHAIN_ID </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--keyring-backend</span><span style="color:#24292E;"> $KEYRING_BACKEND </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--broadcast-mode</span><span style="color:#24292E;"> $BROADCAST_MODE </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Send some funds from the multisig account to the validator account.</span></span>
<span class="line"><span style="color:#6A737D;"># Note this transaction will need to be signed by at least 2 of the 3 test accounts.</span></span>
<span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bank</span><span style="color:#24292E;"> </span><span style="color:#032F62;">send</span><span style="color:#24292E;"> $MULTISIG $VALIDATOR </span><span style="color:#005CC5;">1</span><span style="color:#032F62;">utia</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--from</span><span style="color:#24292E;"> $MULTISIG </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--fees</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000</span><span style="color:#032F62;">utia</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--chain-id</span><span style="color:#24292E;"> $CHAIN_ID </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--keyring-backend</span><span style="color:#24292E;"> $KEYRING_BACKEND </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--generate-only</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unsignedTx.json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Sign from test1 and test2</span></span>
<span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sign</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unsignedTx.json</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--multisig</span><span style="color:#24292E;"> $MULTISIG </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test1</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--output-document</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test1sig.json</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--chain-id</span><span style="color:#24292E;"> $CHAIN_ID</span></span>
<span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sign</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unsignedTx.json</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--multisig</span><span style="color:#24292E;"> $MULTISIG </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test2</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--output-document</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test2sig.json</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--chain-id</span><span style="color:#24292E;"> $CHAIN_ID</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Generate the final signed transaction</span></span>
<span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">multisign</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unsignedTx.json</span><span style="color:#24292E;"> </span><span style="color:#032F62;">multisig</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">test1sig.json</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test2sig.json</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--output-document</span><span style="color:#24292E;"> </span><span style="color:#032F62;">signedTx.json</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--chain-id</span><span style="color:#24292E;"> $CHAIN_ID</span></span></code></pre></div><h2 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-label="Permalink to &quot;Resources&quot;">​</a></h2><ul><li><a href="https://docs.cosmos.network/main/user/run-node/multisig-guide#step-by-step-guide-to-multisig-transactions" target="_blank" rel="noreferrer">https://docs.cosmos.network/main/user/run-node/multisig-guide#step-by-step-guide-to-multisig-transactions</a></li><li><a href="https://figment.io/insights/how-to-multi-sig-on-cosmos/" target="_blank" rel="noreferrer">https://figment.io/insights/how-to-multi-sig-on-cosmos/</a></li><li><a href="https://github.com/aura-nw/Aura-Safe" target="_blank" rel="noreferrer">https://github.com/aura-nw/Aura-Safe</a></li><li><a href="https://github.com/informalsystems/multisig" target="_blank" rel="noreferrer">https://github.com/informalsystems/multisig</a></li></ul>`,7),e=[o];function t(c,r,y,E,i,F){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{d as __pageData,u as default};
