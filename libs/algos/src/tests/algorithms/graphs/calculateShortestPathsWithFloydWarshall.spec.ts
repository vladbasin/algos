import { AdjacencyMatrixGraph, calculateShortestPathsWithFloydWarshall } from '../../../lib';

describe('calculateShortestPathsWithFloydWarshall', () => {
  it('should handle an empty graph (0 vertices)', () => {
    const graph = new AdjacencyMatrixGraph(0);
    calculateShortestPathsWithFloydWarshall(graph);
    expect(graph.numberOfVertices).toBe(0);
  });

  it('should handle a graph with one vertex', () => {
    const graph = new AdjacencyMatrixGraph(1);
    calculateShortestPathsWithFloydWarshall(graph);
    expect(graph.numberOfVertices).toBe(1);
    const edge = graph.get(0, 0);
    expect(edge).toBeUndefined();
  });

  it('should handle a graph with two vertices and one edge', () => {
    const graph = new AdjacencyMatrixGraph(2);
    graph.add({ from: 0, to: 1, weight: 5 });
    calculateShortestPathsWithFloydWarshall(graph);
    expect(graph.get(0, 1)?.weight).toBe(5);
    expect(graph.get(1, 0)).toBeUndefined();
  });

  it('should compute shortest paths in a triangle graph', () => {
    const graph = new AdjacencyMatrixGraph(3);
    graph.add({ from: 0, to: 1, weight: 1 });
    graph.add({ from: 1, to: 2, weight: 1 });
    graph.add({ from: 2, to: 0, weight: 1 });
    calculateShortestPathsWithFloydWarshall(graph);
    expect(graph.get(0, 2)?.weight).toBe(2);
    expect(graph.get(1, 0)?.weight).toBe(2);
    expect(graph.get(2, 1)?.weight).toBe(2);
  });

  it('should handle graphs with negative edge weights (no negative cycles)', () => {
    const graph = new AdjacencyMatrixGraph(3);
    graph.add({ from: 0, to: 1, weight: 4 });
    graph.add({ from: 0, to: 2, weight: 5 });
    graph.add({ from: 1, to: 2, weight: -2 });
    expect(() => calculateShortestPathsWithFloydWarshall(graph)).toThrow();
  });

  it('should handle graphs with zero-weight edges', () => {
    const graph = new AdjacencyMatrixGraph(3);
    graph.add({ from: 0, to: 1, weight: 0 });
    graph.add({ from: 1, to: 2, weight: 0 });
    calculateShortestPathsWithFloydWarshall(graph);
    expect(graph.get(0, 2)?.weight).toBe(0); // Path: 0 -> 1 -> 2
  });

  it('should handle disconnected graphs', () => {
    const graph = new AdjacencyMatrixGraph(4);
    graph.add({ from: 0, to: 1, weight: 1 });
    graph.add({ from: 2, to: 3, weight: 1 });
    calculateShortestPathsWithFloydWarshall(graph);
    expect(graph.get(0, 2)).toBeUndefined();
    expect(graph.get(1, 3)).toBeUndefined();
    expect(graph.get(2, 3)?.weight).toBe(1);
  });

  it('should handle graphs with self-loops', () => {
    const graph = new AdjacencyMatrixGraph(3);
    graph.add({ from: 0, to: 0, weight: 2 });
    graph.add({ from: 0, to: 1, weight: 3 });
    graph.add({ from: 1, to: 2, weight: 4 });
    calculateShortestPathsWithFloydWarshall(graph);
    expect(graph.get(0, 2)?.weight).toBe(7); // Path: 0 -> 1 -> 2
  });

  it('should handle graphs with negative cycles', () => {
    const graph = new AdjacencyMatrixGraph(3);
    graph.add({ from: 0, to: 1, weight: 1 });
    graph.add({ from: 1, to: 2, weight: -1 });
    graph.add({ from: 2, to: 0, weight: -1 });
    expect(() => calculateShortestPathsWithFloydWarshall(graph)).toThrow();
  });

  it('should handle undirected graphs by adding edges in both directions', () => {
    const graph = new AdjacencyMatrixGraph(3);
    graph.add({ from: 0, to: 1, weight: 1 });
    graph.add({ from: 1, to: 0, weight: 1 });
    graph.add({ from: 1, to: 2, weight: 1 });
    graph.add({ from: 2, to: 1, weight: 1 });
    graph.add({ from: 0, to: 2, weight: 4 });
    graph.add({ from: 2, to: 0, weight: 4 });
    calculateShortestPathsWithFloydWarshall(graph);
    expect(graph.get(0, 2)?.weight).toBe(2); // Path: 0 -> 1 -> 2
    expect(graph.get(2, 0)?.weight).toBe(2); // Path: 2 -> 1 -> 0
  });

  it('should compute shortest paths in a large graph (100 nodes)', () => {
    const graph = new AdjacencyMatrixGraph(100);
    // Create a linear path from node 0 to node 99
    for (let i = 0; i < 99; i++) {
      graph.add({ from: i, to: i + 1, weight: 1 });
    }
    calculateShortestPathsWithFloydWarshall(graph);
    expect(graph.get(0, 99)?.weight).toBe(99); // Path: 0 -> 1 -> ... -> 99
    expect(graph.get(0, 50)?.weight).toBe(50); // Midpoint check
    expect(graph.get(25, 75)?.weight).toBe(50); // Random segment check
  });
});
