import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.fc64780b.js";const m=JSON.parse('{"title":"Metrics","description":"A guide on how to monitor the health and performance of your system.","frontmatter":{"description":"A guide on how to monitor the health and performance of your system.","prev":{"text":"Troubleshooting","link":"/how-to-guides/celestia-node-troubleshooting"},"head":[["meta",{"property":"og:title","content":"Metrics | Celestia Docs"}],["meta",{"property":"og:description","content":"A guide on how to monitor the health and performance of your system."}]]},"headers":[],"relativePath":"how-to-guides/celestia-app-metrics.md","filePath":"how-to-guides/celestia-app-metrics.md","lastUpdated":1737765264000}'),o={name:"how-to-guides/celestia-app-metrics.md"},l=e(`<h1 id="metrics" tabindex="-1">Metrics <a class="header-anchor" href="#metrics" aria-label="Permalink to &quot;Metrics&quot;">​</a></h1><p>Metrics are a powerful tool for monitoring the health and performance of a system. Celestia provides support for metrics to make sure, as an operator, your system continues to remain up and running. Metrics can also provide critical insight into how Celestia is used and how it can be improved.</p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h2><p>Celestia uses <a href="https://prometheus.io/" target="_blank" rel="noreferrer">Prometheus</a> to publish metrics. It can be enabled through the <code>config.toml</code> file.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#######################################################</span></span>
<span class="line"><span style="color:#6A737D;">###       Instrumentation Configuration Options     ###</span></span>
<span class="line"><span style="color:#6A737D;">#######################################################</span></span>
<span class="line"><span style="color:#E1E4E8;">[instrumentation]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># When true, Prometheus metrics are served under /metrics on</span></span>
<span class="line"><span style="color:#6A737D;"># PrometheusListenAddr.</span></span>
<span class="line"><span style="color:#6A737D;"># Check out the documentation for the list of available metrics.</span></span>
<span class="line"><span style="color:#B392F0;">prometheus</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Address to listen for Prometheus collector(s) connections</span></span>
<span class="line"><span style="color:#B392F0;">prometheus_listen_addr</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;:26660&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Maximum number of simultaneous connections.</span></span>
<span class="line"><span style="color:#6A737D;"># If you want to accept a larger number than the default, make sure</span></span>
<span class="line"><span style="color:#6A737D;"># you increase your OS limits.</span></span>
<span class="line"><span style="color:#6A737D;"># 0 - unlimited.</span></span>
<span class="line"><span style="color:#B392F0;">max_open_connections</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Instrumentation namespace</span></span>
<span class="line"><span style="color:#B392F0;">namespace</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;celestia&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#######################################################</span></span>
<span class="line"><span style="color:#6A737D;">###       Instrumentation Configuration Options     ###</span></span>
<span class="line"><span style="color:#6A737D;">#######################################################</span></span>
<span class="line"><span style="color:#24292E;">[instrumentation]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># When true, Prometheus metrics are served under /metrics on</span></span>
<span class="line"><span style="color:#6A737D;"># PrometheusListenAddr.</span></span>
<span class="line"><span style="color:#6A737D;"># Check out the documentation for the list of available metrics.</span></span>
<span class="line"><span style="color:#6F42C1;">prometheus</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Address to listen for Prometheus collector(s) connections</span></span>
<span class="line"><span style="color:#6F42C1;">prometheus_listen_addr</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;:26660&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Maximum number of simultaneous connections.</span></span>
<span class="line"><span style="color:#6A737D;"># If you want to accept a larger number than the default, make sure</span></span>
<span class="line"><span style="color:#6A737D;"># you increase your OS limits.</span></span>
<span class="line"><span style="color:#6A737D;"># 0 - unlimited.</span></span>
<span class="line"><span style="color:#6F42C1;">max_open_connections</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Instrumentation namespace</span></span>
<span class="line"><span style="color:#6F42C1;">namespace</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;celestia&quot;</span></span></code></pre></div><p>If you restart your node, you can check to see it&#39;s working by running:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost:26660/metrics</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost:26660/metrics</span></span></code></pre></div><h2 id="visualization" tabindex="-1">Visualization <a class="header-anchor" href="#visualization" aria-label="Permalink to &quot;Visualization&quot;">​</a></h2><p>Now your nodes are publishing metrics, we need something to scrape it and a visualizer to create a dashboard. Commonly, Prometheus is paired with Grafana.</p><p>First, you will need to install Prometheus either from their <a href="https://prometheus.io/download/" target="_blank" rel="noreferrer">downloads page</a> or through a package manager like <code>brew</code>.</p><p>Next, create a config file <code>$HOME/.celestia-app/config/prometheus.yml</code> and fill out some basic settings as follows:</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">global</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">scrape_interval</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">15s</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># By default, scrape targets every 15 seconds.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># Attach these labels to any time series or alerts when communicating</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># with external systems (federation, remote storage, Alertmanager).</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">external_labels</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">monitor</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;codelab-monitor&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># A scrape configuration containing exactly one endpoint to scrape:</span></span>
<span class="line"><span style="color:#6A737D;"># Here it&#39;s Prometheus itself.</span></span>
<span class="line"><span style="color:#85E89D;">scrape_configs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># The job name is added as a label \`job=&lt;job_name&gt;\` to any timeseries</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># scraped from this config.</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">job_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;prometheus&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># Override the global default and scrape targets from this job every</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 5 seconds.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">scrape_interval</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">5s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">static_configs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># Point to the same endpoint that Celestia is publishing on</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">targets</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;localhost:26660&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">global</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">scrape_interval</span><span style="color:#24292E;">: </span><span style="color:#032F62;">15s</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># By default, scrape targets every 15 seconds.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># Attach these labels to any time series or alerts when communicating</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># with external systems (federation, remote storage, Alertmanager).</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">external_labels</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">monitor</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;codelab-monitor&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># A scrape configuration containing exactly one endpoint to scrape:</span></span>
<span class="line"><span style="color:#6A737D;"># Here it&#39;s Prometheus itself.</span></span>
<span class="line"><span style="color:#22863A;">scrape_configs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># The job name is added as a label \`job=&lt;job_name&gt;\` to any timeseries</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># scraped from this config.</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">job_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;prometheus&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># Override the global default and scrape targets from this job every</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 5 seconds.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">scrape_interval</span><span style="color:#24292E;">: </span><span style="color:#032F62;">5s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">static_configs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># Point to the same endpoint that Celestia is publishing on</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">targets</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;localhost:26660&quot;</span><span style="color:#24292E;">]</span></span></code></pre></div><p>Note, that Prometheus by default runs its server on <code>:9090</code>. If you are running this on the same machine as your consensus node, it will collide with gRPC which runs on the same port. To avoid this, either switch off gRPC (if it&#39;s not needed), change the gRPC port in <code>app.toml</code>, or run Prometheus on a different port e.g. <code>--web.listen-address=&quot;0.0.0.0:8000&quot;</code></p><p>To run the prometheus server:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">prometheus</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--config.file=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$HOME</span><span style="color:#9ECBFF;">/.celestia-app/config/prometheus.yml&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">prometheus</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--config.file=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$HOME</span><span style="color:#032F62;">/.celestia-app/config/prometheus.yml&quot;</span></span></code></pre></div><p>A prometheus server can scrape metrics from multiple nodes at once; a good way of bringing together information from many machines to one place.</p><p>To visualize the information, you can use <a href="https://grafana.com/" target="_blank" rel="noreferrer">Grafana</a>: either with their cloud option or run the <a href="https://grafana.com/grafana/download?pg=graf&amp;platform=linux&amp;plcmt=deploy-box-1" target="_blank" rel="noreferrer">open source code</a> yourself.</p><p>Once setup, run:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">grafana</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">grafana</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server</span></span></code></pre></div><p>which will begin a server on <code>localhost:3000</code>. If you open the url on your browser you will see the Grafana login page. Use <code>admin</code> for both the user and password to log in.</p><p>You will need to link the prometheus server as a data source. To do that go to &quot;Configuration&quot; in the sidebar and then &quot;Data Sources&quot;. Add a new data source specifying the URL of the Prometheus instance (default at <code>localhost:9090</code>). Click &quot;Save &amp; test&quot; to confirm.</p><p>Lastly, you will need to setup a dashboard. You can choose to do this yourself, handpicking the metrics that are important or you can simply export an existing design. Fortunately the cosmos ecosystem has conjured a &quot;Cosmos Dashboard&quot;. On the sidebar, click &quot;Dashboards&quot; and then &quot;import&quot;. Enter the following dashboard ID: 11036 and then link it to the &quot;Prometheus&quot; data source you just set up. Finally click the &quot;Import&quot; button and the &quot;Cosmos Dashboard&quot; should appear.</p><h2 id="node-exporter" tabindex="-1">Node exporter <a class="header-anchor" href="#node-exporter" aria-label="Permalink to &quot;Node exporter&quot;">​</a></h2><p>Celestia&#39;s metrics include a plethora of application specific trackers but it&#39;s also important to keep an eye on system level metrics such as memory usage and disk space. This can be best achieved by running <a href="https://prometheus.io/docs/guides/node-exporter/" target="_blank" rel="noreferrer">Node Exporter</a>. Follow the guide in the link to get set up, adding the port number to the <code>prometheus.yml</code> file.</p><h2 id="alerts" tabindex="-1">Alerts <a class="header-anchor" href="#alerts" aria-label="Permalink to &quot;Alerts&quot;">​</a></h2><p>The final cherry on the cake is to integrate your monitoring system with a mechanism for producing alerts to warn you if your node has crashed or is no longer able to stay at the head of the chain.</p><p>Since we&#39;re already using Grafana, we can install the <a href="http://localhost:3000/plugins/grafana-oncall-app" target="_blank" rel="noreferrer">Grafana OnCall</a> plugin. OnCall allows you to setup integrations. It could be a webhook or a direct integration into Telegram or Slack. You can find more information on Grafana&#39;s <a href="https://grafana.com/docs/oncall/latest/integrations/" target="_blank" rel="noreferrer">Docs Page</a>.</p>`,27),t=[l];function p(r,c,i,y,h,u){return a(),n("div",null,t)}const E=s(o,[["render",p]]);export{m as __pageData,E as default};
