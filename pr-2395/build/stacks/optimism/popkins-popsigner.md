# How to deploy an OP Stack rollup with Docker, Popsigner, and Popkins

## Overview

OP Stack, the stack behind Optimism, allows you to run rollups that post data to Celestia instead of Ethereum by using op-alt-da. Learn more in [the overview of op-alt-da](/build/stacks/optimism/op-alt-da/). In this tutorial, you’ll learn how to run an OP stack rollup using:

- **[Popsigner](https://github.com/celestiaorg/popsigner)** for key management. Popsigner is a great way to create, manage, and revoke keys, or even export them if you’d like.
- **[Popkins](https://popkins.popsigner.com/)** for deploying contracts and chain setup. Popkins sets up your keys from Popsigner for rollup deployment, deploys your contracts, and gives you the bundle to run your rollup locally.
- **Docker** for the devops of running your rollup bundle.

In order to get started, you will need a basic understanding of a few components with accounts you will create that make up this stack:

1. **deployer**: Deploys and configures L1 contracts. Needs most ETH for gas.
2. **batcher**: This account submits L2 transaction batches to L1. Needs ongoing ETH.
3. **proposer**: Submits L2 state roots to L1 for withdrawals.
4. **celestia**: This account posts data to Celestia’s Mocha testnet

With these four components and accounts combined, you will be able to run an OP Stack rollup that posts to Celestia for data availability! Let’s get started.

## Environment setup

This tutorial has been tested on MacOS and Linux (Ubuntu 24.04).

Before you run OP stack, you’ll need:

1. Docker installed and running locally.
2. An Ethereum Sepolia RPC endpoint from a provider like [Quicknode](https://www.quicknode.com/), [Alchemy](https://www.alchemy.com/), or [Infura](https://www.infura.io/)
3. A Celestia Mocha testnet RPC and gRPC endpoint from [Quicknode](https://www.quicknode.com/) for posting and retrieving blobs

That’s it for now! Let’s get everything else set up.

Congratulations! You’re now running your first OP Stack rollup with Celestia for DA.