import { Heap, IGraph } from '../../dataStructures';

/**
 * Calculates shortest paths from a source vertex to all other vertices using Dijkstra's algorithm.
 * Uses a min-heap for efficient vertex selection.
 *
 * @param graph - The input graph to calculate shortest paths for
 * @param sourceVertex - The starting vertex for path calculations
 * @returns {number[]} Array of shortest distances from source to each vertex
 * @throws {RangeError} If sourceVertex is out of bounds
 * @throws {Error} If graph contains negative weights
 */
export const calculateShortestPathsWithDijkstra = (graph: IGraph, sourceVertex: number): number[] => {
  if (graph.numberOfVertices === 0) {
    return [];
  }

  // Vertex bounds check is handled by graph.ensureVertexBounds
  graph.ensureVertexBounds(sourceVertex);

  // Initialize data structures
  const minHeap = new Heap<{ vertex: number; value: number }>('min');
  const processedVertices = new Set<number>();
  const distances = Array(graph.numberOfVertices).fill(Number.MAX_SAFE_INTEGER);

  // Set source distance and add to heap
  distances[sourceVertex] = 0;
  minHeap.add({ vertex: sourceVertex, value: 0 });

  while (minHeap.size > 0) {
    const current = minHeap.pop();
    if (!current || processedVertices.has(current.vertex)) {
      continue;
    }

    processedVertices.add(current.vertex);

    // Process all edges from current vertex
    for (const edge of graph.iterateEdgesFrom(current.vertex)) {
      if (edge.weight < 0) {
        throw new Error("Negative edge weights are not allowed in Dijkstra's algorithm");
      }

      const newDistance = distances[current.vertex] + edge.weight;
      if (newDistance < distances[edge.to]) {
        distances[edge.to] = newDistance;
        minHeap.add({ vertex: edge.to, value: newDistance });
      }
    }
  }

  return distances;
};
