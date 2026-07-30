# Custom networks and values

This section will cover importing bootstrapper IDs, chain ID,
and network ID. This will allow you to import custom values
for a chain that is not in the default configuration.

If you have a custom network you can export `CELESTIA_CUSTOM`, which will
look something like:

```bash

```

Query your node ID [from the CLI](/operate/data-availability/light-node/advanced#find-your-node-id).
These values with examples would look like:

```bash

```

Bridge nodes prune by default and use `GENESIS_HASH` as the trust anchor when
joining a custom network. Make sure it matches the network genesis. To run the
bridge node without pruning, pass `--archival` every time you start it.

Then, start your node with:

```sh
celestia <node-type> start [flags...]
```

For an archival bridge node:

```sh
celestia bridge start --archival [flags...]
```