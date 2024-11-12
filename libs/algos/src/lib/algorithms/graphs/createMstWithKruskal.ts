import { AdjacencyListGraph, DisjointSet, IGraph } from '../../dataStructures';

/**
 * Creates a Minimum Spanning Tree (MST) using Kruskal's algorithm.
 * Uses Union-Find data structure for efficient cycle detection.
 *
 * @param graph - The input graph to create MST from
 * @param allowDisconnectedGraph - Whether to allow disconnected components (creates a forest)
 * @returns {IGraph} The minimum spanning tree (or forest if disconnected is allowed)
 * @throws {Error} If graph is disconnected and allowDisconnectedGraph is false
 */
export const createMstWithKruskal = (graph: IGraph, allowDisconnectedGraph = false): IGraph => {
  if (graph.numberOfVertices === 0) {
    return new AdjacencyListGraph(0);
  }

  // Initialize data structures
  const disjointSet = new DisjointSet(graph.numberOfVertices);
  const result = new AdjacencyListGraph(graph.numberOfVertices);

  // Sort edges by weight for greedy selection
  const edges = Array.from(graph.iterateAllEdges()).sort((a, b) => a.weight - b.weight);

  // Process edges in ascending weight order
  edges.forEach(({ from, to, weight }) => {
    // Skip if already in the same set
    if (disjointSet.areInSameSet(from, to)) {
      return;
    }

    result.add({ from, to, weight });
    disjointSet.union(from, to);
  });

  // Verify connectivity unless disconnected components are allowed
  if (!allowDisconnectedGraph) {
    for (let i = 1; i < graph.numberOfVertices; i++) {
      if (!disjointSet.areInSameSet(0, i)) {
        throw new Error('Graph is not connected');
      }
    }
  }

  return result;
};
