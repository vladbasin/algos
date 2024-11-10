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

[algorithms/graphs/createMstWithKruskal.ts:9](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/algorithms/graphs/createMstWithKruskal.ts#L9)
