import { AdjacencyListGraph, DisjointSet, IGraph } from '../../dataStructures';

/**
 * Creates a Minimum Spanning Tree (MST) using Kruskal's algorithm.
 * @param graph - The graph to create the MST from.
 * @param allowDisconnectedGraph - Whether to allow disconnected graphs. Creates a graph which represents a forest instead of a tree if `true`. Defaults to `false`.
 * @returns {IGraph} The MST.
 */
export const createMstWithKruskal = (graph: IGraph, allowDisconnectedGraph = false): IGraph => {
  if (graph.numberOfVertices === 0) {
    return new AdjacencyListGraph(0);
  }

  const disjointSet = new DisjointSet(graph.numberOfVertices);
  const result = new AdjacencyListGraph(graph.numberOfVertices);
  const edges = Array.from(graph.iterateAllEdges()).sort((a, b) => a.weight - b.weight);

  edges.forEach(({ from, to, weight }) => {
    if (disjointSet.areInSameSet(from, to)) {
      return;
    }

    result.add({ from, to, weight });
    disjointSet.union(from, to);
  });

  if (!allowDisconnectedGraph) {
    for (let i = 1; i < graph.numberOfVertices; i++) {
      if (!disjointSet.areInSameSet(0, i)) {
        throw new Error('Graph is not connected');
      }
    }
  }

  return result;
};
