[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / calculateShortestPathsWithBellmanFord

# Function: calculateShortestPathsWithBellmanFord()

> **calculateShortestPathsWithBellmanFord**(`graph`, `sourceVertex`): `number`[]

Calculates the shortest paths from a source vertex to all other vertices using the Bellman-Ford algorithm.
Can detect negative cycles and handles negative edge weights.

## Parameters

• **graph**: [`IGraph`](../interfaces/IGraph.md)

The input graph to calculate shortest paths for

• **sourceVertex**: `number`

The starting vertex for path calculations

## Returns

`number`[]

Array of shortest distances from source to each vertex

## Throws

If sourceVertex is out of bounds

## Throws

If a negative cycle is detected

## Defined in

[algorithms/graphs/calculateShortestPathsWithBellmanFord.ts:13](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/algorithms/graphs/calculateShortestPathsWithBellmanFord.ts#L13)
