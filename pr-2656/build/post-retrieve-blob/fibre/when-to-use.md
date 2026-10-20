# When to use Fibre

This guide covers Fibre clients on celestia-app
`v10.4.0` (Mocha: `v10.4.0-mocha`)
and celestia-node `v0.34.3`. Fibre runs on
Mainnet Beta and Mocha, starting from app version 10.

## How Fibre works

1. You deposit funds into an **escrow account**.
2. Your client encodes the blob and signs a **payment promise** for it.
3. Your client uploads pieces of the blob (shards) directly to validators'
   **Fibre servers**.
4. Each server checks its shard and the promise, stores the shard, and returns
   a signature.
5. When validators holding **at least 2/3 of total voting power** (rounded
   down) have signed, your client submits `MsgPayForFibre`. The chain charges
   your escrow and records a small on-chain blob with the commitment.
6. Anyone with the **blob ID** can download the blob from the Fibre servers
   until retention ends.

## Key terms

| Term | Meaning |
|---|---|
| Fibre server | A server run by a validator. It stores and serves blob shards. Also called a Fibre provider. |
| Escrow account | Prepaid funds that pay for Fibre storage. Separate from your wallet balance. |
| Payment promise | A message your key signs for each blob. It promises payment from your escrow. |
| `MsgPayForFibre` (PFF) | The transaction that settles a payment promise on chain. |
| Quorum | Signatures from validators holding at least 2/3 of total voting power (rounded down). Needed to settle a blob. |
| Blob ID | 33 bytes: blob version plus commitment. You use it to download the blob. |
| Retention | How long Fibre servers must keep your shards, counted from promise creation. Set by the `shard_retention` parameter. |

## Fibre compared with regular blobs

| | Fibre | Regular blobs (PayForBlob) |
|---|---|---|
| Where the data lives | On validators' Fibre servers, for a limited time | In the block's data square |
| What goes on chain | `MsgPayForFibre` and a small blob with the commitment | The full blob data |
| Maximum size per blob | 128 MiB minus 5 bytes | Bounded by the 8 MiB maximum transaction size |
| How you pay | Prepaid escrow, plus gas for the settlement transaction | Gas fee for the transaction |
| How you read it back | `fibre.Download` with the blob ID | `blob.Get` with height, namespace and commitment |

## Fibre is a good fit when

- Your blobs are large: from several MiB up to 128 MiB.
- You need high data throughput and don't need the bytes stored in blocks.
- You can keep your own copy of the data, or only need it to be available
  for a short window.

## Fibre is not a good fit when

- You need the data to stay retrievable for days or longer. Fibre is not
  archival storage.
- Your blobs are tiny. Every Fibre blob is charged for at least 256 KiB.
  See [pricing](/build/post-retrieve-blob/fibre/getting-started#4-estimate-the-cost).

## What Fibre guarantees

- **Upload:** a settled blob carries signed storage attestations from
  validators holding at least 2/3 of total voting power (rounded down).
- **Download:** shards from validators holding about 1/3 of voting power
  are enough to rebuild the blob.
- **Integrity:** every honest downloader of the same blob ID gets
  byte-identical data.
- **Retention:** servers keep shards until the later of two times: the
  promise's creation time plus `shard_retention` (default 4 hours), or the
  promise's expiry. The window is counted from promise creation, not upload.

## What Fibre does not guarantee

- **Permanent storage.** After retention, servers may delete shards. Keep
  your own copy.
- **That the content is "right".** The blob ID binds the bytes, not their
  meaning. Check the content in your application.