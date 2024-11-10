import { AdjacencyListGraph, getTopologicalOrderWithKahn } from '../../../lib';

describe('getTopologicalOrderWithKahn', () => {
  it('should return an empty array for an empty graph', () => {
    const graph = new AdjacencyListGraph(0);
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([]);
  });

  it('should return the single vertex for a graph with one vertex and no edges', () => {
    const graph = new AdjacencyListGraph(1);
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([0]);
  });

  it('should return all vertices in order for a graph with multiple vertices and no edges', () => {
    const graph = new AdjacencyListGraph(3);
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([0, 1, 2]);
  });

  it('should return the vertices in order for a linear graph', () => {
    const graph = new AdjacencyListGraph(3);
    graph.add({ from: 0, to: 1, weight: 1 });
    graph.add({ from: 1, to: 2, weight: 1 });
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([0, 1, 2]);
  });

  it('should return the vertices in correct order for a reverse linear graph', () => {
    const graph = new AdjacencyListGraph(3);
    graph.add({ from: 2, to: 1, weight: 1 });
    graph.add({ from: 1, to: 0, weight: 1 });
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([2, 1, 0]);
  });

  it('should return the vertices in topological order for a branching graph', () => {
    const graph = new AdjacencyListGraph(5);
    graph.add({ from: 0, to: 2, weight: 1 });
    graph.add({ from: 1, to: 2, weight: 1 });
    graph.add({ from: 2, to: 3, weight: 1 });
    graph.add({ from: 3, to: 4, weight: 1 });
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([0, 1, 2, 3, 4]);
  });

  it('should return the vertices in topological order for another branching graph', () => {
    const graph = new AdjacencyListGraph(5);
    graph.add({ from: 0, to: 1, weight: 1 });
    graph.add({ from: 0, to: 2, weight: 1 });
    graph.add({ from: 1, to: 3, weight: 1 });
    graph.add({ from: 2, to: 3, weight: 1 });
    graph.add({ from: 3, to: 4, weight: 1 });
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([0, 1, 2, 3, 4]);
  });

  it('should handle graphs with converging paths', () => {
    const graph = new AdjacencyListGraph(4);
    graph.add({ from: 0, to: 2, weight: 1 });
    graph.add({ from: 1, to: 2, weight: 1 });
    graph.add({ from: 2, to: 3, weight: 1 });
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([0, 1, 2, 3]);
  });

  it('should detect cycles and throw error', () => {
    const graph = new AdjacencyListGraph(3);
    graph.add({ from: 0, to: 1, weight: 1 });
    graph.add({ from: 1, to: 2, weight: 1 });
    graph.add({ from: 2, to: 0, weight: 1 }); // cycle
    expect(() => getTopologicalOrderWithKahn(graph)).toThrow();
  });

  it('should handle graphs with self-loops appropriately', () => {
    const graph = new AdjacencyListGraph(2);
    graph.add({ from: 0, to: 0, weight: 1 }); // self-loop
    graph.add({ from: 0, to: 1, weight: 1 });
    expect(() => getTopologicalOrderWithKahn(graph)).toThrow();
  });

  it('should handle graphs with multiple disconnected components', () => {
    const graph = new AdjacencyListGraph(6);
    // Component 1
    graph.add({ from: 0, to: 1, weight: 1 });
    graph.add({ from: 1, to: 2, weight: 1 });
    // Component 2
    graph.add({ from: 3, to: 4, weight: 1 });
    graph.add({ from: 4, to: 5, weight: 1 });
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([0, 3, 1, 4, 2, 5]);
  });

  it('should handle graphs with parallel edges', () => {
    const graph = new AdjacencyListGraph(2);
    graph.add({ from: 0, to: 1, weight: 1 });
    graph.add({ from: 0, to: 1, weight: 1 }); // parallel edge
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([0, 1]);
  });

  it('should correctly process nodes with high in-degree and out-degree', () => {
    const graph = new AdjacencyListGraph(5);
    graph.add({ from: 0, to: 2, weight: 1 });
    graph.add({ from: 1, to: 2, weight: 1 });
    graph.add({ from: 2, to: 3, weight: 1 });
    graph.add({ from: 2, to: 4, weight: 1 });
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([0, 1, 2, 3, 4]);
  });

  it('should correctly sort a larger DAG', () => {
    const graph = new AdjacencyListGraph(8);
    graph.add({ from: 0, to: 2, weight: 1 });
    graph.add({ from: 1, to: 2, weight: 1 });
    graph.add({ from: 1, to: 3, weight: 1 });
    graph.add({ from: 3, to: 4, weight: 1 });
    graph.add({ from: 2, to: 4, weight: 1 });
    graph.add({ from: 4, to: 5, weight: 1 });
    graph.add({ from: 5, to: 6, weight: 1 });
    graph.add({ from: 5, to: 7, weight: 1 });
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
  });

  it('should include vertices with no edges in the topological order', () => {
    const graph = new AdjacencyListGraph(3);
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([0, 1, 2]);
  });

  it('should include all vertices in the topological order for acyclic graphs', () => {
    const graph = new AdjacencyListGraph(4);
    graph.add({ from: 0, to: 1, weight: 1 });
    graph.add({ from: 2, to: 3, weight: 1 });
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([0, 2, 1, 3]);
  });

  it('should fail for graphs with cycles and acyclic components', () => {
    const graph = new AdjacencyListGraph(5);
    // Cyclic component
    graph.add({ from: 0, to: 1, weight: 1 });
    graph.add({ from: 1, to: 0, weight: 1 });
    // Acyclic component
    graph.add({ from: 2, to: 3, weight: 1 });
    graph.add({ from: 3, to: 4, weight: 1 });
    expect(() => getTopologicalOrderWithKahn(graph)).toThrow();
  });

  it('should handle complex DAGs with multiple valid topological orders', () => {
    //   [5] ---> [2] ---> [3] ---> [1]
    //   |                  ^
    //   |                  |
    //   +------> [0] <-----+
    //             ^
    //             |
    // [4] --------+
    //   |
    //   +----------------> [1]

    const graph = new AdjacencyListGraph(6);
    graph.add({ from: 5, to: 2, weight: 1 });
    graph.add({ from: 5, to: 0, weight: 1 });
    graph.add({ from: 4, to: 0, weight: 1 });
    graph.add({ from: 4, to: 1, weight: 1 });
    graph.add({ from: 2, to: 3, weight: 1 });
    graph.add({ from: 3, to: 1, weight: 1 });
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([4, 5, 2, 0, 3, 1]);
  });

  it('should handle graphs where all nodes have incoming edges except one', () => {
    const graph = new AdjacencyListGraph(4);
    graph.add({ from: 0, to: 1, weight: 1 });
    graph.add({ from: 1, to: 2, weight: 1 });
    graph.add({ from: 2, to: 3, weight: 1 });
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([0, 1, 2, 3]);
  });

  it('should handle graphs with multiple starting nodes', () => {
    const graph = new AdjacencyListGraph(5);
    graph.add({ from: 0, to: 3, weight: 1 });
    graph.add({ from: 1, to: 3, weight: 1 });
    graph.add({ from: 2, to: 3, weight: 1 });
    graph.add({ from: 3, to: 4, weight: 1 });
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([0, 1, 2, 3, 4]);
  });

  it('should process nodes with no incoming edges before nodes with incoming edges', () => {
    const graph = new AdjacencyListGraph(4);
    graph.add({ from: 1, to: 2, weight: 1 });
    graph.add({ from: 2, to: 3, weight: 1 });
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([0, 1, 2, 3]); // Node 0 has no edges and should come first
  });

  it('should fail for graphs with multiple cycles', () => {
    const graph = new AdjacencyListGraph(6);
    graph.add({ from: 0, to: 1, weight: 1 });
    graph.add({ from: 1, to: 2, weight: 1 });
    graph.add({ from: 2, to: 0, weight: 1 }); // Cycle 1
    graph.add({ from: 3, to: 4, weight: 1 });
    graph.add({ from: 4, to: 5, weight: 1 });
    graph.add({ from: 5, to: 3, weight: 1 }); // Cycle 2
    expect(() => getTopologicalOrderWithKahn(graph)).toThrow();
  });

  it('should fail for graphs with cycles and some nodes with no edges', () => {
    const graph = new AdjacencyListGraph(5);
    graph.add({ from: 0, to: 1, weight: 1 });
    graph.add({ from: 1, to: 2, weight: 1 });
    graph.add({ from: 2, to: 0, weight: 1 }); // Cycle
    // Nodes 3 and 4 have no edges
    expect(() => getTopologicalOrderWithKahn(graph)).toThrow();
  });

  it('should fail for graphs where cycles do not involve all nodes', () => {
    const graph = new AdjacencyListGraph(7);
    graph.add({ from: 0, to: 1, weight: 1 });
    graph.add({ from: 1, to: 2, weight: 1 });
    graph.add({ from: 2, to: 0, weight: 1 }); // Cycle among 0,1,2
    graph.add({ from: 3, to: 4, weight: 1 });
    graph.add({ from: 4, to: 5, weight: 1 });
    graph.add({ from: 5, to: 6, weight: 1 });
    expect(() => getTopologicalOrderWithKahn(graph)).toThrow();
  });

  it('should correctly handle complex graphs with multiple dependencies', () => {
    const graph = new AdjacencyListGraph(8);
    graph.add({ from: 0, to: 3, weight: 1 });
    graph.add({ from: 0, to: 4, weight: 1 });
    graph.add({ from: 1, to: 3, weight: 1 });
    graph.add({ from: 2, to: 4, weight: 1 });
    graph.add({ from: 3, to: 5, weight: 1 });
    graph.add({ from: 4, to: 5, weight: 1 });
    graph.add({ from: 5, to: 6, weight: 1 });
    graph.add({ from: 5, to: 7, weight: 1 });
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
  });

  it('should handle graphs with a node having edges to multiple nodes', () => {
    const graph = new AdjacencyListGraph(4);
    graph.add({ from: 0, to: 1, weight: 1 });
    graph.add({ from: 0, to: 2, weight: 1 });
    graph.add({ from: 0, to: 3, weight: 1 });
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([0, 1, 2, 3]);
  });

  it('should handle graphs with multiple nodes having edges to a single node', () => {
    const graph = new AdjacencyListGraph(4);
    graph.add({ from: 0, to: 3, weight: 1 });
    graph.add({ from: 1, to: 3, weight: 1 });
    graph.add({ from: 2, to: 3, weight: 1 });
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([0, 1, 2, 3]);
  });

  it('should handle a complex graph with intertwined dependencies', () => {
    // [0] -> [1] -> [2] -> [3] -> [4] -> [7] -> [8]
    //   \
    //   \
    //   -> [5] -> [6] -+
    //                  |
    //                  +-> [4]
    const graph = new AdjacencyListGraph(9);
    graph.add({ from: 0, to: 1, weight: 1 });
    graph.add({ from: 1, to: 2, weight: 1 });
    graph.add({ from: 2, to: 3, weight: 1 });
    graph.add({ from: 3, to: 4, weight: 1 });
    graph.add({ from: 1, to: 5, weight: 1 });
    graph.add({ from: 5, to: 6, weight: 1 });
    graph.add({ from: 6, to: 4, weight: 1 });
    graph.add({ from: 4, to: 7, weight: 1 });
    graph.add({ from: 7, to: 8, weight: 1 });
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([0, 1, 2, 5, 3, 6, 4, 7, 8]);
  });

  it('should handle a graph with multiple sources and sinks', () => {
    const graph = new AdjacencyListGraph(6);
    graph.add({ from: 0, to: 2, weight: 1 });
    graph.add({ from: 1, to: 2, weight: 1 });
    graph.add({ from: 2, to: 3, weight: 1 });
    graph.add({ from: 2, to: 4, weight: 1 });
    // Node 5 is a sink with no outgoing edges
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([0, 1, 5, 2, 3, 4]);
  });

  it('should correctly process a DAG representing task dependencies', () => {
    const graph = new AdjacencyListGraph(7);
    graph.add({ from: 0, to: 3, weight: 1 });
    graph.add({ from: 0, to: 4, weight: 1 });
    graph.add({ from: 1, to: 4, weight: 1 });
    graph.add({ from: 1, to: 5, weight: 1 });
    graph.add({ from: 2, to: 5, weight: 1 });
    graph.add({ from: 3, to: 6, weight: 1 });
    graph.add({ from: 4, to: 6, weight: 1 });
    graph.add({ from: 5, to: 6, weight: 1 });
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });

  it('should handle a diamond-shaped dependency graph', () => {
    const graph = new AdjacencyListGraph(4);
    graph.add({ from: 0, to: 1, weight: 1 });
    graph.add({ from: 0, to: 2, weight: 1 });
    graph.add({ from: 1, to: 3, weight: 1 });
    graph.add({ from: 2, to: 3, weight: 1 });
    const order = getTopologicalOrderWithKahn(graph);
    expect(order).toEqual([0, 1, 2, 3]);
  });
});
