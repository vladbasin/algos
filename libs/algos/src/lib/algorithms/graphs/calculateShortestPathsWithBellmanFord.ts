import { IGraph } from '../../dataStructures';

/**
 * Calculates the shortest paths from a source vertex to all other vertices in a graph using the Bellman-Ford algorithm.
 *
 * @param {IGraph} graph - The graph to calculate the shortest paths for.
 * @param {number} sourceVertex - The source vertex to calculate the shortest paths from.
 * @returns {number[]} An array representing the shortest distances from the source vertex to all other vertices.
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
