import { AdjacencyListGraph, calculateShortestPathsWithDijkstra, GraphEdge } from '../../../lib';

describe('calculateShortestPathsWithDijkstra', () => {
  // Graph structure:
  //      (2)    (3)
  //   0 ---> 1 ----> 3
  //    \     |       |
  //  (4)\    |(1)    |(1)
  //      \   V       V
  //       -> 2 ----> 4
  //          (3)
  it('should calculate shortest paths in a simple graph', () => {
    const graph = new AdjacencyListGraph(5);
    graph.add(new GraphEdge(0, 1, 2));
    graph.add(new GraphEdge(0, 2, 4));
    graph.add(new GraphEdge(1, 2, 1));
    graph.add(new GraphEdge(1, 3, 7));
    graph.add(new GraphEdge(2, 3, 3));
    graph.add(new GraphEdge(3, 4, 1));

    const distances = calculateShortestPathsWithDijkstra(graph, 0);

    expect(distances).toEqual([0, 2, 3, 6, 7]);
  });

  it('should handle disconnected graphs', () => {
    const graph = new AdjacencyListGraph(4);
    graph.add(new GraphEdge(0, 1, 1));
    // Vertices 2 and 3 are disconnected

    const distances = calculateShortestPathsWithDijkstra(graph, 0);

    expect(distances).toEqual([0, 1, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]);
  });

  it('should handle a single vertex graph', () => {
    const graph = new AdjacencyListGraph(1);
    const distances = calculateShortestPathsWithDijkstra(graph, 0);

    expect(distances).toEqual([0]);
  });

  it('should handle an empty graph', () => {
    const graph = new AdjacencyListGraph(0);
    const distances = calculateShortestPathsWithDijkstra(graph, 0);

    expect(distances).toEqual([]);
  });

  it('should handle graphs with cycles', () => {
    const graph = new AdjacencyListGraph(4);
    graph.add(new GraphEdge(0, 1, 1));
    graph.add(new GraphEdge(1, 2, 1));
    graph.add(new GraphEdge(2, 0, 1)); // Cycle
    graph.add(new GraphEdge(2, 3, 1));

    const distances = calculateShortestPathsWithDijkstra(graph, 0);

    expect(distances).toEqual([0, 1, 2, 3]);
  });

  it('should throw an error for invalid source vertex', () => {
    const graph = new AdjacencyListGraph(3);
    graph.add(new GraphEdge(0, 1, 1));
    const sourceVertex = 5; // Invalid vertex index

    expect(() => calculateShortestPathsWithDijkstra(graph, sourceVertex)).toThrow();
  });

  it('should throw an error for negative weight edges', () => {
    const graph = new AdjacencyListGraph(3);
    graph.add(new GraphEdge(0, 1, -1));
    graph.add(new GraphEdge(1, 2, -1));
    graph.add(new GraphEdge(2, 0, -1));

    expect(() => calculateShortestPathsWithDijkstra(graph, 0)).toThrow();
  });

  it('should handle a large graph efficiently', () => {
    const numVertices = 1000;
    const graph = new AdjacencyListGraph(numVertices);
    for (let i = 0; i < numVertices - 1; i++) {
      graph.add(new GraphEdge(i, i + 1, 1));
    }
    const distances = calculateShortestPathsWithDijkstra(graph, 0);
    expect(distances[numVertices - 1]).toEqual(numVertices - 1);
  });
});
