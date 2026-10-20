# Limits and expectations

## Sizes

| Limit | Value | Type |
|---|---|---|
| Maximum blob size | 128 MiB minus 5 bytes (134,217,723 bytes) | Protocol constant |
| Node JSON-RPC request body | 16 MiB, which leaves slightly less than 12 MiB of payload | celestia-node setting |
| Minimum charged size | 262,144 bytes (256 KiB), padded | Protocol constant |
| Minimum upload size accepted by a server | 262,144 bytes padded by default. **Each validator can raise it.** | Validator-local setting |
| Namespace | 29 bytes, version 0 | Protocol |
| Blob version | Only `0` is supported | Protocol |

If a validator raises its minimum upload size, it rejects smaller blobs. Your
upload still succeeds as long as validators holding at least 2/3 of total
voting power (rounded down) accept it.

## Timing and quorum

| Limit | Value | Type |
|---|---|---|
| Quorum to settle a blob | Signatures from validators holding at least 2/3 of total voting power (rounded down) | Protocol |
| Timeout per validator request | 15 s | Client setting (`RPCTimeout`) |
| Retries when a validator's storage is full | Up to 3 retries per validator. Each wait follows the server's hint, capped at 2 min. | Client constant |
| Payment promise timestamp | No more than 10 minutes ahead of chain time | Protocol constant |
| `MsgPayForFibre` per block | At most 200 | Protocol constant |
| `MsgPayForFibre` per transaction | Exactly one, with no other messages | Protocol |

## Chain parameters

Governance can change these at any time, without a network upgrade. Read
them when your client starts, and check them regularly.

```bash
celestia-appd query fibre params
# or REST: GET <rest_endpoint>/fibre/v1/params
```

| Parameter | Default | What it means for you |
|---|---|---|
| `shard_retention` | 4h | Servers keep your shards until the later of promise creation plus this value, or promise expiry |
| `payment_promise_timeout` | 1h | Normal settlement (`MsgPayForFibre`) must land before this much time has passed since promise creation. After it, anyone can charge the promise through the timeout path. |
| `payment_promise_height_window` | 1000 blocks | Normal settlement must land within this many blocks of the promise height. The timeout path skips this check. |
| `withdrawal_delay` | 24h | How long a withdrawal waits before it is paid out |
| `full_stake_storage_budget` | 2 TiB | Sets each validator's storage limit: this value × its assigned rows / 4,096. Assigned rows grow with stake, within fixed bounds. A validator can turn the limit off. Full servers ask clients to retry later. |

Mainnet Beta and Mocha both started Fibre with these defaults at the app
version 10 upgrade.

## What is and isn't guaranteed

| Guaranteed by the protocol | Not guaranteed |
|---|---|
| A settled blob carries signed storage attestations from validators holding at least 2/3 of total voting power (rounded down) | Storage after `shard_retention` |
| Honest downloaders of one blob ID get identical bytes | That the content is what your app expects |
| You are charged only by settling a promise your key signed | — |
| A promise can be settled only once | That every validator accepts every upload |