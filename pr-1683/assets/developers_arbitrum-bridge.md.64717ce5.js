import{_ as r,o,c as t,Q as e}from"./chunks/framework.baa04297.js";const i="/docs-preview/pr-1683/arbitrum/bridge-overview-deposit-and-withdrawal-l3.png",a="/docs-preview/pr-1683/arbitrum/bridge-settings.png",n="/docs-preview/pr-1683/arbitrum/add-custom-chain-to-bridge.png",s="/docs-preview/pr-1683/arbitrum/live-orbit-chains.png",p="/docs-preview/pr-1683/arbitrum/bridge-in-start.png",l="/docs-preview/pr-1683/arbitrum/bridge-in-pending-txs.png",d="/docs-preview/pr-1683/arbitrum/bridge-in-settled-txs.png",g="/docs-preview/pr-1683/arbitrum/bridge-in-explorer-rollup-tx.png",u="/docs-preview/pr-1683/arbitrum/bridge-in-success.png",c="/docs-preview/pr-1683/arbitrum/bridge-in-sepolia-tx-explorer.png",b="/docs-preview/pr-1683/arbitrum/bridge-out-small-screenshot.png",h="/docs-preview/pr-1683/arbitrum/bridge-out-begin.png",m="/docs-preview/pr-1683/arbitrum/bridge-out-pending.png",w="/docs-preview/pr-1683/arbitrum/bridge-out-begin-overview.png",f="/docs-preview/pr-1683/arbitrum/bridge-out-rollup-tx-details.png",y="/docs-preview/pr-1683/arbitrum/bridge-out-logs-details-1.png",_="/docs-preview/pr-1683/arbitrum/bridge-out-logs-explorer-2.png",v="/docs-preview/pr-1683/arbitrum/bridge-out-claim-withdrawal.png",x="/docs-preview/pr-1683/arbitrum/bridge-out-claim-success-withdrawal.png",D=JSON.parse('{"title":"Bridging in and out of your Orbit rollup","description":"A guide on how to bridge in and out of your Arbitrum Orbit rollup.","frontmatter":{"description":"A guide on how to bridge in and out of your Arbitrum Orbit rollup.","head":[["meta",{"name":"og:title","content":"Bridging in and out of your Orbit rollup | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/arbitrum-bridge.md","filePath":"developers/arbitrum-bridge.md","lastUpdated":1724432116000}'),A={name:"developers/arbitrum-bridge.md"},S=e('<h1 id="bridging-in-and-out-of-your-orbit-rollup" tabindex="-1">Bridging in and out of your Orbit rollup <a class="header-anchor" href="#bridging-in-and-out-of-your-orbit-rollup" aria-label="Permalink to &quot;Bridging in and out of your Orbit rollup&quot;">​</a></h1><p>This guide covers how to <a href="#bridge-in-deposit-to-your-rollup">bridge in (deposit)</a> and <a href="#bridge-out-withdrawal-from-your-rollup">bridge out (withdrawal)</a> from your Arbitrum Orbit L3 rollup.</p><p>This guide will cover bridging in and out of your Orbit rollup.</p><p>Below are two example transactions, one of a deposit and one of a withdrawal:</p><p><img src="'+i+'" alt="bridge-overview-deposit-and-withdrawal-l3"></p><h2 id="bridge-in-deposit-to-your-rollup" tabindex="-1">Bridge in (deposit) to your rollup <a class="header-anchor" href="#bridge-in-deposit-to-your-rollup" aria-label="Permalink to &quot;Bridge in (deposit) to your rollup&quot;">​</a></h2><h3 id="step-1-add-your-custom-chain-config" tabindex="-1">Step 1: Add your custom chain config <a class="header-anchor" href="#step-1-add-your-custom-chain-config" aria-label="Permalink to &quot;Step 1: Add your custom chain config&quot;">​</a></h3><p><strong>(1a)</strong> In the <a href="https://bridge.arbitrum.io/" target="_blank" rel="noreferrer">Arbitrum Bridge UI</a>, click the menu dropdown in the top right. Select <strong>Settings</strong>.</p><p><img src="'+a+'" alt="bridge-settings"></p><p><strong>(1b)</strong> Under <strong>Developer Mode</strong>, select <strong>Turn on testnet mode</strong>. Add your custom chain config from <code>outputInfo.json</code> in the root of your <code>orbit-setup-script</code> directory.</p><p><img src="'+n+'" alt="add-testnet-orbit-chain"></p><p><strong>(1c)</strong> You&#39;ll then see the chain under <strong>Live Orbit Chains</strong>:</p><p><img src="'+s+'" alt="live-orbit-chains"></p><h3 id="step-2-deposit-to-your-orbit-rollup" tabindex="-1">Step 2: Deposit to your Orbit rollup <a class="header-anchor" href="#step-2-deposit-to-your-orbit-rollup" aria-label="Permalink to &quot;Step 2: Deposit to your Orbit rollup&quot;">​</a></h3><p><strong>(2a)</strong> Choose an amount of Arbitrum Sepolia ETH to bridge into your rollup. Click <strong>Move funds to &lt;YOUR_ROLLUP_NAME&gt;</strong>, in this case <strong>Move funds to Arbitrum L3 Rollup</strong>. Approve the transaction in your wallet.</p><p><img src="'+p+'" alt="bridge-in-start"></p><p><strong>(2b)</strong> You&#39;ll then see it load in the <strong>Pending transactions</strong> tab:</p><p><img src="'+l+'" alt="bridge-in-pending"></p><p><strong>(2c)</strong> Shortly after, in the <strong>Settled transactions</strong> tab you can see the transaction status. Click <strong>Success</strong>.</p><p><img src="'+d+'" alt="bridge-in-settled-txs"></p><p><strong>(2d)</strong> View the transaction on your local instance of Blockscout for your rollup:</p><p><img src="'+g+'" alt="bridge-in-explorer-rollup-tx"></p><p><strong>(2e)</strong> Optionally, click <strong>See Details</strong> for an overview of your deposit:</p><p><img src="'+u+'" alt="bridge-in-success"></p><p><strong>(2f)</strong> From the details page, you can also <a href="https://sepolia.arbiscan.io/tx/0xf700e6dde8b7891e27a806a78a0ab4efb7bb40fbea19ca966a2c8922c61c9c50" target="_blank" rel="noreferrer">see the transaction for your deposit on Arbitrum Sepolia</a>:</p><p><img src="'+c+'" alt="bridge-in-sepolia-tx-explorer"></p><h2 id="bridge-out-withdrawal-from-your-rollup" tabindex="-1">Bridge out (withdrawal) from your rollup <a class="header-anchor" href="#bridge-out-withdrawal-from-your-rollup" aria-label="Permalink to &quot;Bridge out (withdrawal) from your rollup&quot;">​</a></h2><h3 id="step-1-choose-an-amount-to-withdraw-from-your-rollup" tabindex="-1">Step 1: Choose an amount to withdraw from your rollup <a class="header-anchor" href="#step-1-choose-an-amount-to-withdraw-from-your-rollup" aria-label="Permalink to &quot;Step 1: Choose an amount to withdraw from your rollup&quot;">​</a></h3><p><strong>(1a)</strong> In the <a href="https://bridge.arbitrum.io/" target="_blank" rel="noreferrer">Arbitrum Bridge UI</a>, choose your origin chain to your <strong>Arbitrum L3 Rollup</strong> and the destination chain as <strong>Arbitrum Sepolia</strong>.</p><p><img src="'+b+'" alt="bridge-out-small-screenshot"></p><p><strong>(1b)</strong> Click <strong>Move funds to Arbitrum Sepolia</strong> and read the disclaimer, check the boxes, and click <strong>Continue</strong>.</p><p><img src="'+h+'" alt="bridge-out-begin"></p><p><strong>(1c)</strong> Optionally, set a reminder on your calendar so you don&#39;t forget.</p><p><strong>(1d)</strong> After approving the transaction in your wallet, you&#39;ll be able to see the transaction in the <strong>Pending transactions</strong> tab:</p><p><img src="'+m+'" alt="bridge-out-pending"></p><p>After approximately two hours, you will be able to proceed to Step 2: Claim your withdrawal.</p><p><strong>(1e)</strong> Click <strong>See details</strong> to see an overview of your withdrawal:</p><p><img src="'+w+'" alt="bridge-out-begin-overview"></p><p><strong>(1f)</strong> Optionally, view the transaction on your local explorer.</p><p><img src="'+f+'" alt="bridge-out-tx-details"></p><p><strong>(1g)</strong> To learn more about what is going on, click the <strong>Logs</strong> tab:</p><p><img src="'+y+'" alt="bridge-out-logs-details-1"></p><p><img src="'+_+'" alt="bridge-out-logs-explorer-2"></p><h3 id="step-2-claim-your-withdrawal" tabindex="-1">Step 2: Claim your withdrawal <a class="header-anchor" href="#step-2-claim-your-withdrawal" aria-label="Permalink to &quot;Step 2: Claim your withdrawal&quot;">​</a></h3><p>After approximately 2 hours, you will be able to claim your withdrawal.</p><p><strong>(2a)</strong> Head back to the bridge UI and you will have a notification to claim your withdrawal. Click <strong>Claim</strong> in the details of the transaction:</p><p><img src="'+v+'" alt="bridge-out-claim-withdrawal"></p><p><strong>(2b)</strong> Approve the transaction in your wallet.</p><p><strong>(2c)</strong> After your transaction goes through, you can see the details in the bridge UI under <strong>Settled transactions</strong>:</p><p><img src="'+x+'" alt="bridge-out-claim-success-withdrawal"></p>',50),k=[S];function C(O,B,q,P,T,I){return o(),t("div",null,k)}const L=r(A,[["render",C]]);export{D as __pageData,L as default};
