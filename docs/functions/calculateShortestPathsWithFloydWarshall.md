[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / calculateShortestPathsWithFloydWarshall

# Function: calculateShortestPathsWithFloydWarshall()

> **calculateShortestPathsWithFloydWarshall**(`graph`): `void`

Calculates the shortest paths between all pairs of vertices using the Floyd-Warshall algorithm.
Modifies the graph in place to store shortest path distances.

## Parameters

• **graph**: [`AdjacencyMatrixGraph`](../classes/AdjacencyMatrixGraph.md)

The adjacency matrix graph to calculate shortest paths on

## Returns

`void`

## Throws

If graph contains negative edge weights

## Defined in

[algorithms/graphs/calculateShortestPathsWithFloydWarshall.ts:10](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/algorithms/graphs/calculateShortestPathsWithFloydWarshall.ts#L10)
