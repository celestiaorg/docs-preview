# Local OP Stack devnet

This guide will teach you how to spin up a complete local OP Stack rollup with Celestia DA for testing.

**What `pop-deployer` does:** It spins up a temporary Anvil instance, deploys all OP Stack contracts (`SystemConfig`, `L1CrossDomainMessenger`, `OptimismPortal`, etc.), captures the chain state to a snapshot, then packages everything into a tarball. When you run the bundle, Anvil loads the pre-deployed state instantly - no waiting for contract deployments.

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

Set up the `.env`:

```bash
cp .env.example .env
```

### Run the bundle

Run the bundle by running the following command:

```bash
docker compose up -d
```

</Steps>

## Option 2: In the terminal