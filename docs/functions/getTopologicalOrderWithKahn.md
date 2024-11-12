[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / getTopologicalOrderWithKahn

# Function: getTopologicalOrderWithKahn()

> **getTopologicalOrderWithKahn**(`graph`): `number`[]

Get the topological order of a graph using Kahn's algorithm.
Uses a queue-based approach to process vertices with zero in-degree.

## Parameters

• **graph**: [`IGraph`](../interfaces/IGraph.md)

The directed acyclic graph (DAG) to sort

## Returns

`number`[]

Array representing topological order

## Throws

If graph contains a cycle (not a DAG)

## Defined in

[algorithms/graphs/getTopologicalOrderWithKahn.ts:11](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/algorithms/graphs/getTopologicalOrderWithKahn.ts#L11)
