# How to deploy a Nitro rollup with Docker, Popsigner, and Popkins

## Overview

Arbitrum Nitro allows you to run Orbit rollups that post batch data to Celestia instead of Ethereum by using a [Celestia DAS server](/build/stacks/nitro/nitro-das-server/) sidecar. In this tutorial, you'll learn how to run a Nitro rollup on Sepolia using:

- **[Popsigner](https://github.com/celestiaorg/popsigner)** for key management. Popsigner is a great way to create, manage, and revoke keys, or even export them if you'd like.
- **[Popkins](https://popkins.popsigner.com/)** for deploying contracts and chain setup. Popkins deploys the Nitro infrastructure contracts on Sepolia (RollupCreator, Bridge, SequencerInbox, etc.) and gives you the bundle to run your rollup locally.
- **Docker** for running your rollup bundle (two services: the Nitro sequencer and the Celestia DAS server).

In order to get started, you will need a basic understanding of the key roles that make up this stack:

1. **batch poster**: Posts batch commitments to the SequencerInbox on L1, while the actual batch data is sent to Celestia via the DAS server. Needs ongoing ETH on Sepolia.
2. **staker/validator**: Stakes on L2 state assertions using the BOLD protocol. Needs WETH on Sepolia.
3. **celestia**: The signing key used by the Celestia DAS server to submit blobs to Celestia. Needs TIA on Mocha testnet.

The batch poster and staker both sign L1 transactions via Popsigner using **mTLS certificates** (included in the bundle). The Celestia key signs blob transactions via a separate Popsigner **API key**. This means you'll have two different signing methods but potentially three different keys on Popsigner. With these combined, you will be able to run a Nitro rollup that posts to Celestia for data availability! Let's get started.

## Environment setup

This tutorial has been tested on MacOS and Linux (Ubuntu 24.04).

Before you run Nitro, you'll need:

1. Docker installed and running locally.
2. An Ethereum Sepolia RPC endpoint (WSS recommended) from a provider like [Quicknode](https://www.quicknode.com/), [Alchemy](https://www.alchemy.com/), or [Infura](https://www.infura.io/)
3. An Ethereum Sepolia Beacon Chain API endpoint (for EIP-4844 blob data). A public option is `https://ethereum-sepolia-beacon-api.publicnode.com`
4. A Celestia Mocha testnet RPC and gRPC endpoint from [Quicknode](https://www.quicknode.com/) for posting and retrieving blobs

That's it for now! Let's get everything else set up.

Congratulations! You're now running your first Nitro rollup with Celestia for DA.

## Blobstream and fraud proofs

[Blobstream](/build/blobstream/) is a bridge that relays Celestia data root attestations to Ethereum. This is critical for validators — it enables fraud proofs for batches posted to Celestia.

Here's how the flow works:

1. **Batch Poster** posts batch data to Celestia via the DAS server, getting back a `BlobPointer`
2. **Batch Poster** posts the batch commitment to the Sequencer Inbox on L1
3. **Blobstream** relays Celestia block data roots to the Blobstream X contract on L1
4. **Validator** (during a fraud proof challenge) calls `GetProof` on the Celestia DAS server
5. **Celestia DAS server** queries the Blobstream contract for the data root attestation
6. **Celestia DAS server** returns proof data that can be verified on-chain

The Blobstream X contract address for Sepolia is configured in `celestia-config.toml` under `[celestia.validator]`. You can check the latest deployed addresses in [the Blobstream documentation](/build/blobstream/).

## Troubleshooting

### Check service health

```bash
docker compose ps
docker compose logs celestia-das-server
docker compose logs nitro-sequencer
```

### Test Celestia DAS server

```bash
curl -X POST http://localhost:9876 \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"daprovider_getSupportedHeaderBytes","params":[],"id":1}'
```

### Celestia DAS server fails with "unauthorized: Authentication required"

This usually means the PopSigner credentials in `celestia-config.toml` weren't filled in. Check the `[celestia.signer.remote]` section — if `api_key` or `key_id` still contain placeholder values like `${POPSIGNER_CELESTIA_API_KEY}`, replace them with the **actual values**. TOML does not support environment variable substitution.

### Batch poster not submitting to Celestia

1. Check if Celestia PopSigner key is funded with TIA
2. Check celestia-das-server logs: `docker compose logs -f celestia-das-server`
3. Verify Celestia endpoint connectivity in `celestia-config.toml`

### Blobstream proof failures

1. Verify `blobstream_addr` in `celestia-config.toml` is correct for Sepolia
2. Check that `eth_rpc` in `[celestia.validator]` can reach the parent chain
3. Blobstream may need time to relay attestations (~1 hour)

### BOLD staker issues

The BOLD protocol requires WETH (not native ETH) for staking. Before starting, ensure your `STAKER_ADDRESS` has:
1. WETH tokens (wrap ETH via `WETH.deposit()`)
2. Approved the ChallengeManager contract to spend WETH

The stake amount is ~0.1 ETH equivalent per assertion level.