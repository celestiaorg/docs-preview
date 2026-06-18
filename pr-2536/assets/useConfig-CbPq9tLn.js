import{r as e}from"./chunk-QTnfLwEv.js";import{u as t}from"./index-gAvtSUfS.js";var n={accentColor:`light-dark(#6d3df5, #9d7cff)`,baseUrl:`https://docs.celestia.org`,basePath:`/docs-preview/pr-2536`,cacheDir:`/home/runner/work/docs/docs/node_modules/.cache/vocs`,checkDeadlinks:`warn`,codeHighlight:{langAlias:{sol:`solidity`,js:`javascript`,cjs:`javascript`,mjs:`javascript`,md:`markdown`,jade:`pug`,ts:`typescript`,cts:`typescript`,mts:`typescript`,coffeescript:`coffee`,regex:`regexp`,"c++":`cpp`,gql:`graphql`,yml:`yaml`,hbs:`handlebars`,bash:`shellscript`,sh:`shellscript`,shell:`shellscript`,zsh:`shellscript`,py:`python`,jl:`julia`,styl:`stylus`,lit:`ts-tags`,dockerfile:`docker`,protobuf:`proto`,rs:`rust`,properties:`ini`,console:`shellsession`,mmd:`mermaid`},langs:`ansi.bash.html.js.json.jsx.markdown.md.mdx.plaintext.rust.sol.solidity.ts.tsx.zsh.text.yaml.sh.ini.toml.console.yml.diff.go.mermaid`.split(`.`),themes:{light:`github-light`,dark:`github-dark-dimmed`}},colorScheme:`light dark`,description:`Learn, build, and operate on Celestia - the modular data availability network.`,editLink:{text:`Edit this page`,link:`_vocs-fn_(filePath) => {
			let sourcePath = filePath.replace(/^src\\/pages\\//, "app/");
			if (sourcePath === "app/index.mdx") sourcePath = "app/page.mdx";
			else if (sourcePath === "app/operate/index.mdx") sourcePath = "app/operate/_page._mdx";
			else sourcePath = sourcePath.replace(/\\/index\\.mdx$/, "/page.mdx");
			return \`https://github.com/celestiaorg/docs/edit/main/\${sourcePath}\`;
		}`},feedback:!1,iconUrl:`/docs-preview/pr-2536/favicons/favicon.svg`,logoUrl:{light:`/docs-preview/pr-2536/logo-light.svg`,dark:`/docs-preview/pr-2536/logo-dark.svg`},markdown:{remarkPlugins:[`_vocs-fn_function remarkReplaceVariables() {
	return (tree) => {
		visit(tree, (node) => {
			if (node.type === "code" && typeof node.value === "string") node.value = replaceVariables(node.value);
			if (node.type === "inlineCode" && typeof node.value === "string") node.value = replaceVariables(node.value);
			if (node.type === "text" && typeof node.value === "string") node.value = replaceVariables(node.value);
		});
	};
}`,`_vocs-fn_function remarkMath(options) {
  // @ts-expect-error: TS is wrong about \`this\`.
  // eslint-disable-next-line unicorn/no-this-assignment
  const self = /** @type {Processor} */ (this)
  const settings = options || emptyOptions
  const data = self.data()

  const micromarkExtensions =
    data.micromarkExtensions || (data.micromarkExtensions = [])
  const fromMarkdownExtensions =
    data.fromMarkdownExtensions || (data.fromMarkdownExtensions = [])
  const toMarkdownExtensions =
    data.toMarkdownExtensions || (data.toMarkdownExtensions = [])

  micromarkExtensions.push(math(settings))
  fromMarkdownExtensions.push(mathFromMarkdown())
  toMarkdownExtensions.push(mathToMarkdown(settings))
}`],rehypePlugins:[`_vocs-fn_function rehypeKatex(options) {
  const settings = options || emptyOptions

  /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @param {VFile} file
   *   File.
   * @returns {undefined}
   *   Nothing.
   */
  return function (tree, file) {
    visitParents(tree, 'element', function (element, parents) {
      const classes = Array.isArray(element.properties.className)
        ? element.properties.className
        : emptyClasses
      // This class can be generated from markdown with \` \`\`\`math \`.
      const languageMath = classes.includes('language-math')
      // This class is used by \`remark-math\` for flow math (block, \`$$\\nmath\\n$$\`).
      const mathDisplay = classes.includes('math-display')
      // This class is used by \`remark-math\` for text math (inline, \`$math$\`).
      const mathInline = classes.includes('math-inline')
      let displayMode = mathDisplay

      // Any class is fine.
      if (!languageMath && !mathDisplay && !mathInline) {
        return
      }

      let parent = parents[parents.length - 1]
      let scope = element

      // If this was generated with \` \`\`\`math \`, replace the \`<pre>\` and use
      // display.
      if (
        element.tagName === 'code' &&
        languageMath &&
        parent &&
        parent.type === 'element' &&
        parent.tagName === 'pre'
      ) {
        scope = parent
        parent = parents[parents.length - 2]
        displayMode = true
      }

      /* c8 ignore next -- verbose to test. */
      if (!parent) return

      const value = toText(scope, {whitespace: 'pre'})

      /** @type {Array<ElementContent> | string | undefined} */
      let result

      try {
        result = katex.renderToString(value, {
          ...settings,
          displayMode,
          throwOnError: true
        })
      } catch (error) {
        const cause = /** @type {Error} */ (error)
        const ruleId = cause.name.toLowerCase()

        file.message('Could not render math with KaTeX', {
          ancestors: [...parents, element],
          cause,
          place: element.position,
          ruleId,
          source: 'rehype-katex'
        })

        // KaTeX *should* handle \`ParseError\` itself, but not others.
        // it doesn’t always:
        // <https://github.com/remarkjs/react-markdown/issues/853>
        try {
          result = katex.renderToString(value, {
            ...settings,
            displayMode,
            strict: 'ignore',
            throwOnError: false
          })
        } catch {
          // Generate similar markup if this is an other error.
          // See: <https://github.com/KaTeX/KaTeX/blob/5dc7af0/docs/error.md>.
          result = [
            {
              type: 'element',
              tagName: 'span',
              properties: {
                className: ['katex-error'],
                style: 'color:' + (settings.errorColor || '#cc0000'),
                title: String(error)
              },
              children: [{type: 'text', value}]
            }
          ]
        }
      }

      if (typeof result === 'string') {
        const root = fromHtmlIsomorphic(result, {fragment: true})
        // Cast as we don’t expect \`doctypes\` in KaTeX result.
        result = /** @type {Array<ElementContent>} */ (root.children)
      }

      const index = parent.children.indexOf(scope)
      parent.children.splice(index, 1, ...result)
      return SKIP
    })
  }
}`]},mcp:{enabled:!0},ogImageUrl:`/docs-preview/pr-2536/Celestia-og.png`,outDir:`out`,pagesDir:`pages`,renderStrategy:`full-static`,rootDir:`/home/runner/work/docs/docs`,search:{boostDocument:`_vocs-fn_(_id, _term, storedFields) => {
                    const priority = storedFields?.['searchPriority'] ?? 1;
                    const href = storedFields?.['href'];
                    const isDocsPath = href?.startsWith('/docs/');
                    // Treat /docs/ as root for depth calculation (subtract 1)
                    const segments = href ? href.split('/').filter(Boolean).length : 1;
                    const depth = isDocsPath ? Math.max(segments - 1, 1) : segments;
                    const depthBoost = 1 / Math.max(depth, 1);
                    const docsBoost = isDocsPath ? 1.5 : 1;
                    return priority * depthBoost * docsBoost;
                }`,combineWith:`AND`,fuzzy:.2,prefix:!0,boost:{title:4,subtitle:3,text:2,category:1,titles:1}},sidebar:{"/":[{text:`Learn`,link:`/learn/celestia-101/data-availability`},{text:`Build`,link:`/build/post-retrieve-blob/overview`},{text:`Operate`,link:`/operate/getting-started/overview`}],"/learn":[{text:`Celestia 101`,items:[{text:`Data availability`,link:`/learn/celestia-101/data-availability`},{text:`Data retrievability and pruning`,link:`/learn/celestia-101/retrievability`},{text:`Transaction lifecycle`,link:`/learn/celestia-101/transaction-lifecycle`},{text:`Data availability FAQ`,link:`/learn/celestia-101/data-availability-faq`},{text:`Data, dashboards, and analytics`,link:`/learn/celestia-101/resources`}]},{text:`Features`,items:[{text:`Private blockspace`,link:`/learn/features/private-blockspace`},{text:`Bridging`,items:[{text:`IBC`,link:`/learn/features/bridging/ibc`},{text:`Hyperlane`,link:`/learn/features/bridging/hyperlane`}]}]},{text:`TIA`,items:[{text:`Overview of TIA`,link:`/learn/TIA/overview`},{text:`Paying for blobspace`,link:`/learn/TIA/paying-for-blobspace`},{text:`Submitting data blobs`,link:`/learn/TIA/submit-data`},{text:`Staking, governance, and supply`,link:`/learn/TIA/staking-governance-supply`},{text:`Staking on Celestia`,link:`/learn/TIA/staking`}]},{text:`Blobstream`,link:`/learn/blobstream`},{text:`Audits`,link:`/learn/audits`},{text:`Code of Conduct`,link:`/learn/code-of-conduct`}],"/build":[{text:`Post/retrieve a blob`,items:[{text:`Overview`,link:`/build/post-retrieve-blob/overview`},{text:`Go client`,link:`/build/post-retrieve-blob/client/go`},{text:`Rust client`,link:`/build/post-retrieve-blob/client/rust`}]},{text:`Private blockspace`,items:[{text:`About`,link:`/build/private-blockspace/about`},{text:`Quickstart`,link:`/build/private-blockspace/quickstart`}]},{text:`Blobstream`,items:[{text:`Integrate with contracts`,link:`/build/blobstream/integrate-contracts`},{text:`Integrate offchain`,link:`/build/blobstream/integrate-offchain`},{text:`Proof queries`,link:`/build/blobstream/proof-queries`}]},{text:`Stacks`,items:[{text:`Nitro DAS server`,link:`/build/stacks/nitro-das-server`},{text:`OP alt DA`,link:`/build/stacks/op-alt-da/introduction`},{text:`AWS KMS guide`,link:`/build/stacks/op-alt-da/aws-kms-guide`}]},{text:`RPC Documentation`,items:[{text:`Node API`,link:`/build/rpc/node-api`},{text:`Clients`,link:`/build/rpc/clients`},{text:`Celestia-app`,link:`https://celestiaorg.github.io/celestia-app/swagger/`,external:!0}]}],"/operate":[{text:`Getting started`,items:[{text:`Overview`,link:`/operate/getting-started/overview`},{text:`Hardware requirements`,link:`/operate/getting-started/hardware-requirements`},{text:`Environment setup`,link:`/operate/getting-started/environment-setup`},{text:`Using docker`,link:`/operate/getting-started/docker`}]},{text:`Networks`,items:[{text:`Overview`,link:`/operate/networks/overview`},{text:`Mainnet Beta`,link:`/operate/networks/mainnet-beta`},{text:`Mocha testnet`,link:`/operate/networks/mocha-testnet`},{text:`Arabica devnet`,link:`/operate/networks/arabica-devnet`},{text:`Local devnet`,link:`/operate/networks/local-devnet`}]},{text:`Data availability nodes`,items:[{text:`Install celestia-node`,link:`/operate/data-availability/install-celestia-node`},{text:`Run a light node`,link:`/operate/data-availability/light-node/quickstart`},{text:`Light node advanced`,link:`/operate/data-availability/light-node/advanced`},{text:`Run a bridge node`,link:`/operate/data-availability/bridge-node`},{text:`Configuration reference`,link:`/operate/data-availability/config-reference`},{text:`Custom networks and values`,link:`/operate/data-availability/custom-networks`},{text:`IBC relayer setup`,link:`/operate/data-availability/ibc-relayer`},{text:`Metrics and dashboards`,link:`/operate/data-availability/metrics`},{text:`Storage optimization`,link:`/operate/data-availability/storage-optimization`}]},{text:`Consensus and validators`,items:[{text:`Install celestia-app`,link:`/operate/consensus-validators/install-celestia-app`},{text:`Run a consensus node`,link:`/operate/consensus-validators/consensus-node`},{text:`Run a validator node`,link:`/operate/consensus-validators/validator-node`},{text:`CLI commands reference`,link:`/operate/consensus-validators/cli-reference`},{text:`Slashing and jailing`,link:`/operate/consensus-validators/slashing`},{text:`Metrics and monitoring`,link:`/operate/consensus-validators/metrics`},{text:`Upgrade monitoring`,link:`/operate/consensus-validators/upgrade-monitor`},{text:`Foundation delegation program`,link:`/operate/consensus-validators/foundation-delegation-program`}]},{text:`Blobstream`,items:[{text:`Install the Binary`,link:`/operate/blobstream/install-binary`},{text:`Key Management`,link:`/operate/blobstream/key-management`},{text:`Deploy the Contract`,link:`/operate/blobstream/deploy-contract`},{text:`Run the Orchestrator`,link:`/operate/blobstream/orchestrator`},{text:`Run the Relayer`,link:`/operate/blobstream/relayer`}]},{text:`Maintenance`,items:[{text:`Snapshots and fast sync`,link:`/operate/maintenance/snapshots`},{text:`Trusted hash recovery`,link:`/operate/maintenance/trusted-hash-recovery`},{text:`Datastore layout`,link:`/operate/maintenance/datastore-structure`},{text:`Systemd service setup`,link:`/operate/maintenance/systemd`},{text:`Network upgrades`,link:`/operate/maintenance/network-upgrades`},{text:`Troubleshooting`,link:`/operate/maintenance/troubleshooting`}]},{text:`Keys and wallets`,items:[{text:`Consensus node keys`,link:`/operate/keys-wallets/celestia-app-wallet`},{text:`DA node keys`,link:`/operate/keys-wallets/celestia-node-key`},{text:`Multisig accounts`,link:`/operate/keys-wallets/multisig`},{text:`Vesting accounts`,link:`/operate/keys-wallets/vesting`}]}]},socials:[{icon:`github`,link:`https://github.com/celestiaorg/docs`},{icon:`discord`,link:`https://discord.com/invite/YsnTPcSfWQ`},{icon:`x`,link:`https://x.com/CelestiaOrg`}],srcDir:`src`,title:`Celestia Documentation`,titleTemplate:`%s - Celestia Documentation`,topNav:[{text:`Learn`,link:`/learn/celestia-101/data-availability`,match:`/learn`},{text:`Build`,link:`/build/post-retrieve-blob/overview`,match:`/build`},{text:`Operate`,link:`/operate/getting-started/overview`,match:`/operate`},{text:`Status`,link:`https://status.celestia.org`,external:!0}]},r=e(t(),1);function i(e){return Array.isArray(e)?e.map(i):typeof e==`object`&&e?Object.keys(e).reduce((t,n)=>(t[n]=i(e[n]),t),{}):typeof e==`string`&&e.includes(`_vocs-fn_`)?Function(`return ${e.slice(9)}`)():e}function a(){let[e,t]=(0,r.useState)(i(n));return(0,r.useEffect)(()=>{let e=e=>{t(i(e.detail))};return globalThis.addEventListener(`vocs:config`,e),()=>globalThis.removeEventListener(`vocs:config`,e)},[]),e}export{n,a as t};