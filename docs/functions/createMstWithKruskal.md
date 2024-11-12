[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / createMstWithKruskal

# Function: createMstWithKruskal()

> **createMstWithKruskal**(`graph`, `allowDisconnectedGraph`): [`IGraph`](../interfaces/IGraph.md)

Creates a Minimum Spanning Tree (MST) using Kruskal's algorithm.
Uses Union-Find data structure for efficient cycle detection.

## Parameters

• **graph**: [`IGraph`](../interfaces/IGraph.md)

The input graph to create MST from

• **allowDisconnectedGraph**: `boolean` = `false`

Whether to allow disconnected components (creates a forest)

## Returns

[`IGraph`](../interfaces/IGraph.md)

The minimum spanning tree (or forest if disconnected is allowed)

## Throws

If graph is disconnected and allowDisconnectedGraph is false

## Defined in

[algorithms/graphs/createMstWithKruskal.ts:12](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/algorithms/graphs/createMstWithKruskal.ts#L12)
