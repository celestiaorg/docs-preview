# Setting up a Celestia bridge node

This tutorial will go over the steps to set up your Celestia bridge node.

Bridge nodes connect the data availability layer and the consensus layer.

## Overview of bridge nodes

A Celestia bridge node has the following properties:

1. Import and process “raw” headers & blocks from a trusted core process
   (meaning a trusted RPC connection to a consensus node) in the
   Consensus network. Bridge nodes can run this core process internally
   (embedded) or simply connect to a remote endpoint. Bridge nodes also
   have the option of being an active validator in the consensus network.
2. Validate and erasure code the “raw” blocks
3. Supply block shares with data availability headers to light nodes in the DA network.

![bridge-node-diagram](/img/nodes/BridgeNodes.png)

From an implementation perspective, Bridge nodes run two separate processes:

1. celestia-app with celestia-core
   ([see repo](https://github.com/celestiaorg/celestia-app))

   - **celestia-app** is the state machine where the application and the
     proof-of-stake logic is run. celestia-app is built on
     [Cosmos SDK](https://docs.cosmos.network) and also encompasses
     **celestia-core**.
   - **celestia-core** is the state interaction, consensus and block production
     layer. celestia-core is built on [Tendermint Core](https://docs.tendermint.com),
     modified to store data roots of erasure coded blocks among other changes
     ([see ADRs](https://github.com/celestiaorg/celestia-core/tree/master/docs/celestia-architecture)).

2. celestia-node ([see repo](https://github.com/celestiaorg/celestia-node))

   - **celestia-node** augments the above with a separate libp2p network that
     serves data availability sampling requests. The team sometimes refers to
     this as the “halo” network.

## Pruned and archival modes

Bridge nodes run in pruned mode by default. They retain recent headers and data
within the storage window and can begin syncing from a recent point instead of
from genesis.

To retain historical headers and data, pass `--archival` every time you start
the bridge node. A new archival node syncs from genesis, so it needs more storage
and access to peers that still hold the historical headers and data. Archival
nodes can still log pruning activity: they remove redundant erasure-coded data
while keeping the original data and headers.

> **Warning:** Choose archival mode before the node's first start and include
> `--archival` every time it starts, including in a systemd service or another
> process manager. A store previously started in pruned mode cannot switch to
> archival mode; initialise a fresh store to sync from genesis.

Both modes can use a non-archival consensus endpoint, provided it retains the
recent blocks needed for syncing. During header sync, the bridge node routes
recent ranges to the consensus endpoint and older ranges to the peer-to-peer
network. Historical data is fetched separately from DA peers. This routing is
automatic, but it does not replace missing recent blocks at the consensus
endpoint or guarantee that peers retain the full history.

## Hardware requirements

See [hardware requirements](/operate/getting-started/hardware-requirements).

## Setting up your bridge node

The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64 instance machine.

Deploy the Celestia bridge node with the following steps.

You can create your key for your node by [following the `cel-key` instructions](/operate/keys-wallets/celestia-node-key).

Once you start the bridge node, a wallet key will be generated for you.
You will need to fund that address with Testnet tokens to pay for
`PayForBlob` transactions.
You can find the address by running the following command:

```sh
./cel-key list --node.type bridge --keyring-backend test --p2p.network <network>
```

You do not need to declare a network for Mainnet Beta. Refer to
[the chain ID section on the troubleshooting page for more information](/operate/maintenance/troubleshooting).

You can get testnet tokens from:

- [Mocha](/operate/networks/mocha-testnet)

> **Note:** If you are running a bridge node for your validator, it is highly recommended to request Mocha testnet tokens as this is the testnet used to test out validator operations.

#### Optional: run the bridge node with a custom key

In order to run a bridge node using a custom key:

1. The custom key must exist inside the celestia bridge node directory at the
   correct path (default: `~/.celestia-bridge/keys/keyring-test`)
2. The name of the custom key must be passed upon `start`, like so:

#### Optional: Migrate node id to another server

To migrate a bridge node ID:

1. You need to back up two files located in the celestia-bridge node directory at the correct path (default: `~/.celestia-bridge/keys`).
2. Upload the files to the new server and start the node.

### Optional: start the bridge node with SystemD

Follow the
[tutorial on setting up the bridge node as a background process with SystemD](/operate/maintenance/systemd).

You have successfully set up a bridge node that is syncing with the network.

### Optional: enable on-fly compression with ZFS

Follow the
[tutorial on how to set up your DA node to use on-fly compression with ZFS](/operate/data-availability/storage-optimization).