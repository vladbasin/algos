import { AdjacencyMatrixGraph } from '../../dataStructures';

/**
 * Calculates the shortest paths between all pairs of vertices in a graph using the Floyd-Warshall algorithm. Modifies the graph in place.
 *
 * @param {AdjacencyMatrixGraph} graph - The graph to calculate the shortest paths on.
 * @returns {void}
 */
export const calculateShortestPathsWithFloydWarshall = (graph: AdjacencyMatrixGraph): void => {
  for (let k = 0; k < graph.numberOfVertices; k++) {
    for (let i = 0; i < graph.numberOfVertices; i++) {
      for (let j = 0; j < graph.numberOfVertices; j++) {
        const ikCost = graph.get(i, k)?.weight;
        const kjCost = graph.get(k, j)?.weight;
        const ijCost = graph.get(i, j)?.weight;

        if (ijCost !== undefined && ijCost < 0) {
          throw new Error('Graph contains negative edge weights');
        }

        if (i === j || ikCost === undefined || kjCost === undefined) {
          continue;
        }

        if (ijCost === undefined || ikCost + kjCost < ijCost) {
          graph.add({ from: i, to: j, weight: ikCost + kjCost });
        }
      }
    }
  }
};
