[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / createMstWithKruskal

# Function: createMstWithKruskal()

> **createMstWithKruskal**(`graph`, `allowDisconnectedGraph`): [`IGraph`](../interfaces/IGraph.md)

Creates a Minimum Spanning Tree (MST) using Kruskal's algorithm.

## Parameters

• **graph**: [`IGraph`](../interfaces/IGraph.md)

The graph to create the MST from.

• **allowDisconnectedGraph**: `boolean` = `false`

Whether to allow disconnected graphs. Creates a graph which represents a forest instead of a tree if `true`. Defaults to `false`.

## Returns

[`IGraph`](../interfaces/IGraph.md)

The MST.

## Defined in

[algorithms/graphs/createMstWithKruskal.ts:9](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/algorithms/graphs/createMstWithKruskal.ts#lines-9)
