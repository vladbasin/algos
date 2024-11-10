import { Heap, IGraph } from '../../dataStructures';

/**
 * Calculates the shortest paths from a source vertex to all other vertices in a graph using Dijkstra's algorithm.
 *
 * @param {IGraph} graph - The graph to calculate the shortest paths on.
 * @param {number} sourceVertex - The source vertex to calculate the shortest paths from.
 * @returns {number[]} An array containing the shortest path distances to all vertices. If path does not exist, the distance is set to `Number.MAX_SAFE_INTEGER`.
 */
export const calculateShortestPathsWithDijkstra = (graph: IGraph, sourceVertex: number): number[] => {
  if (graph.numberOfVertices === 0) {
    return [];
  }

  graph.ensureVertexBounds(sourceVertex);

  const minVertices = new Heap<{ vertex: number; value: number }>('min');
  const processedVertices = new Set<number>();

  const distances = Array(graph.numberOfVertices).fill(Number.MAX_SAFE_INTEGER);
  distances[sourceVertex] = 0;
  distances.forEach((value, index) => minVertices.add({ vertex: index, value }));

  while (minVertices.size > 0) {
    const minVertex = minVertices.pop();

    if (
      !minVertex ||
      processedVertices.has(minVertex.vertex) ||
      distances[minVertex.vertex] === Number.MAX_SAFE_INTEGER
    ) {
      continue;
    }

    processedVertices.add(minVertex.vertex);

    for (const edge of graph.iterateEdgesFrom(minVertex.vertex)) {
      if (edge.weight < 0) {
        throw new Error('Graph contains negative weight edges.');
      }

      const newDistance = distances[minVertex.vertex] + edge.weight;
      if (newDistance < distances[edge.to]) {
        distances[edge.to] = newDistance;
        minVertices.add({ vertex: edge.to, value: newDistance });
      }
    }
  }

  return distances;
};
