import { AdjacencyListGraph, GraphEdge, Heap, IGraph } from '../../dataStructures';

/**
 * Creates a Minimum Spanning Tree (MST) using Prim's algorithm.
 * Uses a min-heap for efficient next edge selection.
 *
 * @param graph - The input graph to create MST from
 * @returns {IGraph} The minimum spanning tree
 * @throws {Error} If graph is not connected
 */
export const createMstWithPrim = (graph: IGraph): IGraph => {
  if (graph.numberOfVertices === 0) {
    return new AdjacencyListGraph(0);
  }

  const result = new AdjacencyListGraph(graph.numberOfVertices);
  const heap = new Heap<{ edge: GraphEdge; value: number }>('min');
  const processed = Array(graph.numberOfVertices).fill(false);
  let processedCount = 0;

  // Helper function to process a vertex and its edges
  const processVertex = (vertex: number): void => {
    processed[vertex] = true;
    // Add all edges from current vertex to heap
    Array.from(graph.iterateEdgesFrom(vertex)).forEach((edge) => heap.add({ edge, value: edge.weight }));
    processedCount++;
  };

  // Start from vertex 0
  processVertex(0);

  // Process edges until heap is empty
  while (heap.size > 0) {
    const entry = heap.pop();
    if (!entry) {
      break;
    }

    // Add edge to MST if destination not yet processed
    if (!processed[entry.edge.to]) {
      processVertex(entry.edge.to);
      result.add({ ...entry.edge });
    }
  }

  // Verify connectivity
  if (processedCount !== graph.numberOfVertices) {
    throw new Error('Graph is not connected');
  }

  return result;
};
