[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / calculateShortestPathsWithDijkstra

# Function: calculateShortestPathsWithDijkstra()

> **calculateShortestPathsWithDijkstra**(`graph`, `sourceVertex`): `number`[]

Calculates shortest paths from a source vertex to all other vertices using Dijkstra's algorithm.
Uses a min-heap for efficient vertex selection.

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

If graph contains negative weights

## Defined in

[algorithms/graphs/calculateShortestPathsWithDijkstra.ts:13](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/algorithms/graphs/calculateShortestPathsWithDijkstra.ts#L13)
