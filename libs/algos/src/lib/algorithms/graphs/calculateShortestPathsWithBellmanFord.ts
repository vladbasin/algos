import { IGraph } from '../../dataStructures';

/**
 * Calculates the shortest paths from a source vertex to all other vertices using the Bellman-Ford algorithm.
 * Can detect negative cycles and handles negative edge weights.
 *
 * @param graph - The input graph to calculate shortest paths for
 * @param sourceVertex - The starting vertex for path calculations
 * @returns {number[]} Array of shortest distances from source to each vertex
 * @throws {RangeError} If sourceVertex is out of bounds
 * @throws {Error} If a negative cycle is detected
 */
export const calculateShortestPathsWithBellmanFord = (graph: IGraph, sourceVertex: number): number[] => {
  if (graph.numberOfVertices === 0) {
    return [];
  }

  graph.ensureVertexBounds(sourceVertex);

  const distances = Array(graph.numberOfVertices).fill(Number.MAX_SAFE_INTEGER);
  distances[sourceVertex] = 0;

  for (let iteration = 0; iteration <= graph.numberOfVertices; iteration++) {
    let hasAnyChanges = false;

    for (let vertex = 0; vertex < graph.numberOfVertices; vertex++) {
      for (const edge of graph.iterateEdgesFrom(vertex)) {
        if (distances[edge.from] < Number.MAX_SAFE_INTEGER && distances[edge.to] > distances[edge.from] + edge.weight) {
          distances[edge.to] = distances[edge.from] + edge.weight;
          hasAnyChanges = true;
        }
      }
    }

    if (iteration === graph.numberOfVertices && hasAnyChanges) {
      throw new Error('Negative cycle detected');
    }
  }

  return distances;
};
