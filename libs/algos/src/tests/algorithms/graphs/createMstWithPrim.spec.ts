import { AdjacencyListGraph, createMstWithPrim, GraphEdge } from '../../../lib';

describe('createMstWithPrim', () => {
  it('should return an empty graph when input graph is empty', () => {
    const graph = new AdjacencyListGraph(0);
    const mst = createMstWithPrim(graph);

    expect(mst.numberOfVertices).toBe(0);
    expect(Array.from(mst.iterateAllEdges())).toHaveLength(0);
  });

  it('should fail if graph is not connected', () => {
    const graph = new AdjacencyListGraph(3);

    expect(() => createMstWithPrim(graph)).toThrow('Graph is not connected');
  });

  it('should create MST for a simple triangle graph', () => {
    const graph = new AdjacencyListGraph(3);

    graph.add(new GraphEdge(0, 1, 1));
    graph.add(new GraphEdge(1, 0, 1)); // Reverse edge
    graph.add(new GraphEdge(1, 2, 2));
    graph.add(new GraphEdge(2, 1, 2)); // Reverse edge
    graph.add(new GraphEdge(0, 2, 3));
    graph.add(new GraphEdge(2, 0, 3)); // Reverse edge

    const mst = createMstWithPrim(graph);
    const edges = Array.from(mst.iterateAllEdges());

    expect(edges).toHaveLength(2);

    const totalWeight = edges.reduce((sum, edge) => sum + edge.weight, 0);
    expect(totalWeight).toBe(3);

    expect(edges).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ from: 0, to: 1, weight: 1 }),
        expect.objectContaining({ from: 1, to: 2, weight: 2 }),
      ])
    );
  });

  it('should handle negative edge weights', () => {
    const graph = new AdjacencyListGraph(3);

    graph.add(new GraphEdge(0, 1, -1));
    graph.add(new GraphEdge(1, 0, -1)); // Reverse edge
    graph.add(new GraphEdge(1, 2, -2));
    graph.add(new GraphEdge(2, 1, -2)); // Reverse edge
    graph.add(new GraphEdge(0, 2, -3));
    graph.add(new GraphEdge(2, 0, -3)); // Reverse edge

    const mst = createMstWithPrim(graph);
    const edges = Array.from(mst.iterateAllEdges());

    expect(edges).toHaveLength(2);

    const totalWeight = edges.reduce((sum, edge) => sum + edge.weight, 0);
    expect(totalWeight).toBe(-5);

    expect(edges).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ from: 0, to: 2, weight: -3 }),
        expect.objectContaining({ from: 2, to: 1, weight: -2 }),
      ])
    );
  });

  it('should handle zero edge weights', () => {
    const graph = new AdjacencyListGraph(3);

    graph.add(new GraphEdge(0, 1, 0));
    graph.add(new GraphEdge(1, 0, 0)); // Reverse edge
    graph.add(new GraphEdge(1, 2, 0));
    graph.add(new GraphEdge(2, 1, 0)); // Reverse edge
    graph.add(new GraphEdge(0, 2, 0));
    graph.add(new GraphEdge(2, 0, 0)); // Reverse edge

    const mst = createMstWithPrim(graph);
    const edges = Array.from(mst.iterateAllEdges());

    expect(edges).toHaveLength(2);
    expect(edges).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ from: 0, to: 1, weight: 0 }),
        expect.objectContaining({ from: 0, to: 2, weight: 0 }),
      ])
    );
  });

  it('should fail if graph is disconnected', () => {
    const graph = new AdjacencyListGraph(4);

    graph.add(new GraphEdge(0, 1, 1));
    graph.add(new GraphEdge(1, 0, 1)); // Reverse edge
    graph.add(new GraphEdge(2, 3, 2));
    graph.add(new GraphEdge(3, 2, 2)); // Reverse edge

    expect(() => createMstWithPrim(graph)).toThrow('Graph is not connected');
  });

  it('should handle graphs with cycles', () => {
    const graph = new AdjacencyListGraph(4);

    graph.add(new GraphEdge(0, 1, 1));
    graph.add(new GraphEdge(1, 0, 1)); // Reverse edge
    graph.add(new GraphEdge(1, 2, 2));
    graph.add(new GraphEdge(2, 1, 2)); // Reverse edge
    graph.add(new GraphEdge(2, 3, 3));
    graph.add(new GraphEdge(3, 2, 3)); // Reverse edge
    graph.add(new GraphEdge(3, 0, 4));
    graph.add(new GraphEdge(0, 3, 4)); // Reverse edge
    graph.add(new GraphEdge(0, 2, 5));
    graph.add(new GraphEdge(2, 0, 5)); // Reverse edge

    const mst = createMstWithPrim(graph);
    const edges = Array.from(mst.iterateAllEdges());

    expect(edges).toHaveLength(3);
    expect(edges).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ from: 0, to: 1, weight: 1 }),
        expect.objectContaining({ from: 1, to: 2, weight: 2 }),
        expect.objectContaining({ from: 2, to: 3, weight: 3 }),
      ])
    );
  });

  it('should handle parallel edges', () => {
    const graph = new AdjacencyListGraph(2);

    graph.add(new GraphEdge(0, 1, 1));
    graph.add(new GraphEdge(1, 0, 1)); // Reverse edge
    graph.add(new GraphEdge(0, 1, 2));
    graph.add(new GraphEdge(1, 0, 2)); // Reverse edge

    const mst = createMstWithPrim(graph);
    const edges = Array.from(mst.iterateAllEdges());

    expect(edges).toHaveLength(1);
    expect(edges[0]).toEqual(expect.objectContaining({ from: 0, to: 1, weight: 1 }));
  });

  it('should handle a single-node graph', () => {
    const graph = new AdjacencyListGraph(1);
    const mst = createMstWithPrim(graph);

    expect(mst.numberOfVertices).toBe(1);
    expect(Array.from(mst.iterateAllEdges())).toHaveLength(0);
  });

  it('should throw an error for invalid vertices', () => {
    const graph = new AdjacencyListGraph(3);

    expect(() => {
      graph.add(new GraphEdge(0, 3, 1));
      graph.add(new GraphEdge(3, 0, 1)); // Reverse edge
    }).toThrow();
  });

  it('should ignore self-loop edges', () => {
    const graph = new AdjacencyListGraph(3);

    graph.add(new GraphEdge(0, 0, 1));
    graph.add(new GraphEdge(1, 1, 2));
    graph.add(new GraphEdge(2, 2, 3));
    graph.add(new GraphEdge(0, 1, 4));
    graph.add(new GraphEdge(1, 0, 4)); // Reverse edge
    graph.add(new GraphEdge(1, 2, 5));
    graph.add(new GraphEdge(2, 1, 5)); // Reverse edge

    const mst = createMstWithPrim(graph);
    const edges = Array.from(mst.iterateAllEdges());

    expect(edges).toHaveLength(2);
    expect(edges).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ from: 0, to: 1, weight: 4 }),
        expect.objectContaining({ from: 1, to: 2, weight: 5 }),
      ])
    );
  });

  it('should handle graphs with negative cycles', () => {
    const graph = new AdjacencyListGraph(3);

    graph.add(new GraphEdge(0, 1, -1));
    graph.add(new GraphEdge(1, 0, -1)); // Reverse edge
    graph.add(new GraphEdge(1, 2, -2));
    graph.add(new GraphEdge(2, 1, -2)); // Reverse edge
    graph.add(new GraphEdge(2, 0, -3));
    graph.add(new GraphEdge(0, 2, -3)); // Reverse edge

    const mst = createMstWithPrim(graph);
    const edges = Array.from(mst.iterateAllEdges());

    expect(edges).toHaveLength(2);
    expect(edges).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ from: 0, to: 2, weight: -3 }),
        expect.objectContaining({ from: 2, to: 1, weight: -2 }),
      ])
    );
  });

  it('should handle a large graph', () => {
    const graph = new AdjacencyListGraph(100);

    for (let i = 0; i < 99; i++) {
      graph.add(new GraphEdge(i, i + 1, i + 1));
      graph.add(new GraphEdge(i + 1, i, i + 1)); // Reverse edge
    }

    const mst = createMstWithPrim(graph);
    const edges = Array.from(mst.iterateAllEdges());

    expect(edges).toHaveLength(99);
    expect(edges[0]).toEqual(expect.objectContaining({ from: 0, to: 1, weight: 1 }));
    expect(edges[98]).toEqual(expect.objectContaining({ from: 98, to: 99, weight: 99 }));
  });

  it('should correctly process edges with equal weights', () => {
    const graph = new AdjacencyListGraph(4);

    graph.add(new GraphEdge(0, 1, 1));
    graph.add(new GraphEdge(1, 0, 1)); // Reverse edge
    graph.add(new GraphEdge(1, 2, 1));
    graph.add(new GraphEdge(2, 1, 1)); // Reverse edge
    graph.add(new GraphEdge(2, 3, 1));
    graph.add(new GraphEdge(3, 2, 1)); // Reverse edge
    graph.add(new GraphEdge(3, 0, 1));
    graph.add(new GraphEdge(0, 3, 1)); // Reverse edge

    const mst = createMstWithPrim(graph);
    const edges = Array.from(mst.iterateAllEdges());

    expect(edges).toHaveLength(3);
    expect(edges).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ weight: 1 }),
        expect.objectContaining({ weight: 1 }),
        expect.objectContaining({ weight: 1 }),
      ])
    );
  });
});
