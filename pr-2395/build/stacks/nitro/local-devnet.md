# Local Nitro devnet

This guide will teach you how to spin up a complete local Arbitrum Nitro rollup with Celestia DA for testing.

**What `pop-deployer` does:** It spins up a temporary Anvil instance, deploys all Nitro infrastructure contracts (`RollupCreator`, `Bridge`, `SequencerInbox`, `Outbox`, challenge manager, one-step provers, etc.), creates the rollup via `createRollup`, deploys WETH for BOLD staking, captures the chain state to a snapshot, then packages everything into a tarball. When you run the bundle, Anvil loads the pre-deployed state instantly - no waiting for contract deployments.

## Prerequisites

See [overview of Popsigner and Popkins](/build/stacks/optimism/popkins-popsigner#overview).

## Option 1: In the UI

### Download the bundle

Download the bundle by clicking the "DOWNLOAD BUNDLE" button.

![5.download](/img/build/stacks/optimism/popkins-popsigner/5.download.png)

### Extract the tarball

Extract the tarball by running the following command:

```bash
unzip my-local-devnet-pop-bundle-artifacts.tar.gz
cd my-local-devnet-pop-bundle-artifacts
```

### Run the bundle

Run the bundle by running the following command:

```bash
docker compose up -d
```

</Steps>

## Option 2: In the terminal

Congratulations! You've successfully deployed a Nitro local devnet.

### Testing with a smart contract

You've now deployed and interacted with a smart contract on your local Nitro devnet.