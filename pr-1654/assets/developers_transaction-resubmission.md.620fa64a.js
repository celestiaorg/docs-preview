import{_ as e,o as s,c as n,Q as i}from"./chunks/framework.9f2d3f2f.js";const b=JSON.parse('{"title":"Transaction resubmission","description":"This is a guide on transaction resubmission on Celestia.","frontmatter":{"description":"This is a guide on transaction resubmission on Celestia.","head":[["meta",{"name":"og:title","content":"Transaction resubmission | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/transaction-resubmission.md","filePath":"developers/transaction-resubmission.md","lastUpdated":1722006280000}'),t={name:"developers/transaction-resubmission.md"},a=i('<h1 id="transaction-resubmission" tabindex="-1">Transaction resubmission <a class="header-anchor" href="#transaction-resubmission" aria-label="Permalink to &quot;Transaction resubmission&quot;">​</a></h1><p>In cases where transactions are not included within a 75-second window, resubmission is necessary. This is especially important during network congestion, as transactions with relatively low fees may not be processed even after the network clears up.</p><p>Regardless of whether they originate from celestia-app or celestia-node, transactions will not be re-gossiped, except in the presence of a new peer.</p><h2 id="monitoring-and-resubmission" tabindex="-1">Monitoring and resubmission <a class="header-anchor" href="#monitoring-and-resubmission" aria-label="Permalink to &quot;Monitoring and resubmission&quot;">​</a></h2><p>Monitor the status of your transactions. If a transaction is not included within a 75-second window, it should be resubmitted. This can be done manually or through automated processes.</p><p>Changes introduced in <a href="https://github.com/celestiaorg/celestia-core/pull/1089" target="_blank" rel="noreferrer">celestiaorg/celestia-core#1089</a> may affect transaction gossiping and inclusion speed.</p><h2 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;Notes&quot;">​</a></h2><ul><li>All transactions, regardless of their origin, are subject to being sorted and pruned based on fees.</li><li>It is the user or developer&#39;s responsibility to monitor and possibly resubmit transactions if they are not included in a 75-second window.</li></ul>',8),o=[a];function r(c,d,l,u,h,m){return s(),n("div",null,o)}const _=e(t,[["render",r]]);export{b as __pageData,_ as default};