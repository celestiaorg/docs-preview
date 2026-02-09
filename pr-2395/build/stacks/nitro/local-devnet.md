# Local Nitro devnet

This guide will teach you how to spin up a complete local Arbitrum Nitro rollup with Celestia DA for testing.

**What `pop-deployer` does:** It spins up a temporary Anvil instance, deploys all Nitro infrastructure contracts (`RollupCreator`, `Bridge`, `SequencerInbox`, `Outbox`, challenge manager, one-step provers, etc.), creates the rollup via `createRollup`, deploys WETH for BOLD staking, captures the chain state to a snapshot, then packages everything into a tarball. When you run the bundle, Anvil loads the pre-deployed state instantly - no waiting for contract deployments.

Congratulations! You've successfully deployed a Nitro local devnet.

### Testing with a smart contract

You've now deployed and interacted with a smart contract on your local Nitro devnet.