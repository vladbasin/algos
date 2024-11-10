import { AdjacencyListGraph, calculateShortestPathsWithBellmanFord } from '../../../lib';

describe('calculateShortestPathsWithBellmanFord', () => {
  it('should return an empty array for an empty graph', () => {
    const graph = new AdjacencyListGraph(0);
    const distances = calculateShortestPathsWithBellmanFord(graph, 0);
    expect(distances).toEqual([]);
  });

  it('should return [0] for a graph with one vertex', () => {
    const graph = new AdjacencyListGraph(1);
    const distances = calculateShortestPathsWithBellmanFord(graph, 0);
    expect(distances).toEqual([0]);
  });

  it('should throw an error when sourceVertex is out of bounds', () => {
    const graph = new AdjacencyListGraph(2);
    expect(() => calculateShortestPathsWithBellmanFord(graph, -1)).toThrow();
    expect(() => calculateShortestPathsWithBellmanFord(graph, 2)).toThrow();
  });

  it('should return correct distances for a graph with no edges', () => {
    const graph = new AdjacencyListGraph(3);
    const distances = calculateShortestPathsWithBellmanFord(graph, 0);
    expect(distances).toEqual([0, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]);
  });

  it('should calculate shortest paths for a graph with positive edge weights', () => {
    const graph = new AdjacencyListGraph(3);
    graph.add({ from: 0, to: 1, weight: 5 });
    graph.add({ from: 1, to: 2, weight: 3 });
    const distances = calculateShortestPathsWithBellmanFord(graph, 0);
    expect(distances).toEqual([0, 5, 8]);
  });

  it('should calculate shortest paths for a graph with negative edge weights but no negative cycles', () => {
    const graph = new AdjacencyListGraph(3);
    graph.add({ from: 0, to: 1, weight: 5 });
    graph.add({ from: 1, to: 2, weight: -2 });
    graph.add({ from: 0, to: 2, weight: 10 });
    const distances = calculateShortestPathsWithBellmanFord(graph, 0);
    expect(distances).toEqual([0, 5, 3]);
  });

  it('should throw an error when a negative cycle is detected', () => {
    const graph = new AdjacencyListGraph(3);
    graph.add({ from: 0, to: 1, weight: 1 });
    graph.add({ from: 1, to: 2, weight: -1 });
    graph.add({ from: 2, to: 0, weight: -1 });
    expect(() => calculateShortestPathsWithBellmanFord(graph, 0)).toThrow();
  });

  it('should set distances to MAX_SAFE_INTEGER for unreachable vertices', () => {
    const graph = new AdjacencyListGraph(4);
    graph.add({ from: 0, to: 1, weight: 2 });
    const distances = calculateShortestPathsWithBellmanFord(graph, 0);
    expect(distances).toEqual([0, 2, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]);
  });

  it('should handle self-loops correctly', () => {
    const graph = new AdjacencyListGraph(3);
    graph.add({ from: 0, to: 0, weight: 1 });
    graph.add({ from: 0, to: 1, weight: 2 });
    graph.add({ from: 1, to: 2, weight: 3 });
    const distances = calculateShortestPathsWithBellmanFord(graph, 0);
    expect(distances).toEqual([0, 2, 5]);
  });

  it('should throw an error when a negative cycle is detected via self-loop', () => {
    const graph = new AdjacencyListGraph(1);
    graph.add({ from: 0, to: 0, weight: -1 });
    expect(() => calculateShortestPathsWithBellmanFord(graph, 0)).toThrowError('Negative cycle detected');
  });

  it('should handle multiple edges between the same vertices', () => {
    const graph = new AdjacencyListGraph(2);
    graph.add({ from: 0, to: 1, weight: 2 });
    graph.add({ from: 0, to: 1, weight: 1 });
    const distances = calculateShortestPathsWithBellmanFord(graph, 0);
    expect(distances).toEqual([0, 1]);
  });

  it('should handle large graph', () => {
    const vertexCount = 1000;
    const graph = new AdjacencyListGraph(vertexCount);

    for (let i = 0; i < vertexCount - 1; i++) {
      graph.add({ from: i, to: i + 1, weight: 1 });
    }

    const distances = calculateShortestPathsWithBellmanFord(graph, 0);

    const expectedDistances = Array(vertexCount)
      .fill(0)
      .map((_, i) => i);

    expect(distances).toEqual(expectedDistances);
  });
});
