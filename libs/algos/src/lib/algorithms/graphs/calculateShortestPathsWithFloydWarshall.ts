import { AdjacencyMatrixGraph } from '../../dataStructures';

/**
 * Calculates the shortest paths between all pairs of vertices using the Floyd-Warshall algorithm.
 * Modifies the graph in place to store shortest path distances.
 *
 * @param graph - The adjacency matrix graph to calculate shortest paths on
 * @throws {Error} If graph contains negative edge weights
 */
export const calculateShortestPathsWithFloydWarshall = (graph: AdjacencyMatrixGraph): void => {
  const n = graph.numberOfVertices;

  // Floyd-Warshall algorithm
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const ikCost = graph.get(i, k)?.weight;
        const kjCost = graph.get(k, j)?.weight;
        const ijCost = graph.get(i, j)?.weight;

        if (ijCost !== undefined && ijCost < 0) {
          throw new Error('Graph contains negative edge weights');
        }

        // Skip if path through k is not possible
        if (i === j || ikCost === undefined || kjCost === undefined) {
          continue;
        }

        // Update distance if path through k is shorter
        if (ijCost === undefined || ikCost + kjCost < ijCost) {
          graph.add({ from: i, to: j, weight: ikCost + kjCost });
        }
      }
    }
  }
};
