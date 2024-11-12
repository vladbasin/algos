import { IGraph, Queue } from '../../dataStructures';

/**
 * Get the topological order of a graph using Kahn's algorithm.
 * Uses a queue-based approach to process vertices with zero in-degree.
 *
 * @param graph - The directed acyclic graph (DAG) to sort
 * @returns {number[]} Array representing topological order
 * @throws {Error} If graph contains a cycle (not a DAG)
 */
export const getTopologicalOrderWithKahn = (graph: IGraph): number[] => {
  // Handle empty graph
  if (graph.numberOfVertices === 0) {
    return [];
  }

  // Initialize in-degree array and zero-degree vertices set
  const degree: number[] = Array(graph.numberOfVertices).fill(0);
  const zeroDegreeVertices = new Set(degree.map((_, index) => index));

  // Calculate in-degrees
  Array.from(graph.iterateAllEdges()).forEach(({ to }) => {
    zeroDegreeVertices.delete(to);
    degree[to]++;
  });

  // Process vertices with zero in-degree
  const queue = new Queue<number>();
  zeroDegreeVertices.forEach((vertex) => queue.enqueue(vertex));
  const result: number[] = [];

  while (queue.length > 0) {
    const nextItem = queue.dequeue();
    if (nextItem === undefined) {
      break;
    }

    result.push(nextItem);

    // Reduce in-degree of neighbors and enqueue if zero
    Array.from(graph.iterateEdgesFrom(nextItem)).forEach(({ to }) => {
      degree[to]--;
      if (degree[to] === 0) {
        queue.enqueue(to);
      }
    });
  }

  // Check for cycles
  if (result.length !== graph.numberOfVertices) {
    throw new Error('Graph has a cycle');
  }

  return result;
};
