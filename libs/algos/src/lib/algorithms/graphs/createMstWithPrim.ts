import { AdjacencyListGraph, GraphEdge, Heap, IGraph } from '../../dataStructures';

/**
 * Create a minimum spanning tree with Prim's algorithm.
 * @param graph - The graph to create the minimum spanning tree from.
 * @returns {IGraph} The minimum spanning tree.
 */
export const createMstWithPrim = (graph: IGraph): IGraph => {
  if (graph.numberOfVertices === 0) {
    return new AdjacencyListGraph(0);
  }

  const result = new AdjacencyListGraph(graph.numberOfVertices);
  const heap = new Heap<{ edge: GraphEdge; value: number }>('min');
  const processed = Array(graph.numberOfVertices).fill(false);
  let processedCount = 0;

  const processVertex = (vertex: number): void => {
    processed[vertex] = true;
    Array.from(graph.iterateEdgesFrom(vertex)).forEach((edge) => heap.add({ edge, value: edge.weight }));
    processedCount++;
  };

  processVertex(0);
  while (heap.size > 0) {
    const entry = heap.pop();
    if (!entry) {
      break;
    }

    if (!processed[entry.edge.to]) {
      processVertex(entry.edge.to);
      result.add({ ...entry.edge });
    }
  }

  if (processedCount != graph.numberOfVertices) {
    throw new Error('Graph is not connected');
  }

  return result;
};
