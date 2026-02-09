# Local OP Stack devnet

This guide will teach you how to spin up a complete local OP Stack rollup with Celestia DA for testing.

**What `pop-deployer` does:** It spins up a temporary Anvil instance, deploys all OP Stack contracts (`SystemConfig`, `L1CrossDomainMessenger`, `OptimismPortal`, etc.), captures the chain state to a snapshot, then packages everything into a tarball. When you run the bundle, Anvil loads the pre-deployed state instantly - no waiting for contract deployments.