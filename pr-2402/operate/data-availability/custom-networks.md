# Custom networks and values

This section will cover importing bootstrapper IDs, chain ID,
and network ID. This will allow you to import custom values
for a chain that is not in the default configuration.

> **Important for Bridge Nodes**: Starting from [TODO: Add version from PR #4768], bridge nodes default to pruning mode. For private networks, you **must** either:
> - Use the `--archival` flag to run an archival node, OR
> - Provide a valid genesis hash configuration as shown below
>
> Without one of these options, bridge nodes on private networks will fail to start.

If you have a custom network you can export `CELESTIA_CUSTOM`, which will
look something like:

```bash

```

Query your node ID [from the CLI](/operate/data-availability/light-node/advanced#find-your-node-id).
These values with examples would look like:

```bash

```

Then, start your node with:

```bash
# For bridge nodes with pruning (default)
celestia bridge start [flags...]

# For archival bridge nodes (no genesis hash required)
celestia bridge start --archival [flags...]

# For other node types
celestia <node-type> start [flags...]
```

## Bridge node specific configuration

For bridge nodes on custom networks, you have three options:

1. **Use archival mode** (simplest for private networks):
   ```bash
   celestia bridge init --archival --core.ip <URI> --core.port <port>
   celestia bridge start --archival --core.ip <URI> --core.port <port>
   ```

2. **Configure with genesis hash** (for pruned nodes):
   ```bash
   # Set up the environment variable with genesis hash
   export CELESTIA_CUSTOM="${NETWORK}:${GENESIS_HASH}:${BRIDGE}"
   celestia bridge init --core.ip <URI> --core.port <port>
   celestia bridge start --core.ip <URI> --core.port <port>
   ```

3. **Sync from a specific height or hash**:
   ```toml
   # Configure in config.toml after initialization
   [Services]
   SyncFromHeight = 1000  # Or use SyncFromHash
   ```