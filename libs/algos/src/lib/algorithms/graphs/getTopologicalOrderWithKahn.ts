import { IGraph, Queue } from '../../dataStructures';

/**
 * Get the topological order of a graph using Kahn's algorithm.
 * @param graph - The graph to get the topological order of.
 * @returns {number[]} The topological order of the graph.
 */
export const getTopologicalOrderWithKahn = (graph: IGraph): number[] => {
  const degree: number[] = Array(graph.numberOfVertices).fill(0);
  const zeroDegreeVertices = new Set(degree.map((_, index) => index));
  Array.from(graph.iterateAllEdges()).forEach(({ to }) => {
    zeroDegreeVertices.delete(to);
    degree[to]++;
  });

  const queue = new Queue<number>();
  zeroDegreeVertices.forEach((vertex) => queue.enqueue(vertex));
  const result: number[] = [];
  while (queue.length > 0) {
    const nextItem = queue.dequeue();
    if (nextItem === undefined) {
      break;
    }

    result.push(nextItem);
    Array.from(graph.iterateEdgesFrom(nextItem)).forEach(({ to }) => {
      degree[to]--;
      if (degree[to] === 0) {
        queue.enqueue(to);
      }
    });
  }

  if (result.length !== graph.numberOfVertices) {
    throw new Error('Graph has a cycle');
  }

  return result;
};
