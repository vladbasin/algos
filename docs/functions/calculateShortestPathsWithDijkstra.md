[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / calculateShortestPathsWithDijkstra

# Function: calculateShortestPathsWithDijkstra()

> **calculateShortestPathsWithDijkstra**(`graph`, `sourceVertex`): `number`[]

Calculates the shortest paths from a source vertex to all other vertices in a graph using Dijkstra's algorithm.

## Parameters

• **graph**: [`IGraph`](../interfaces/IGraph.md)

The graph to calculate the shortest paths on.

• **sourceVertex**: `number`

The source vertex to calculate the shortest paths from.

## Returns

`number`[]

An array containing the shortest path distances to all vertices. If path does not exist, the distance is set to `Number.MAX_SAFE_INTEGER`.

## Defined in

[algorithms/graphs/calculateShortestPathsWithDijkstra.ts:10](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/algorithms/graphs/calculateShortestPathsWithDijkstra.ts#lines-10)
