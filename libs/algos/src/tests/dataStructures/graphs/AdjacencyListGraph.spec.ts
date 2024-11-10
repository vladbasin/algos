import { AdjacencyListGraph, GraphEdge } from '../../../lib';

describe('AdjacencyMatrixList', () => {
  let graph: AdjacencyListGraph;

  beforeEach(() => {
    graph = new AdjacencyListGraph(5); // Initialize with a size of 5 for testing
  });

  describe('add', () => {
    it('should add an edge between two vertices', () => {
      graph.add(new GraphEdge(0, 1, 10));
      const edges = Array.from(graph.iterateEdgesFrom(0));
      expect(edges).toHaveLength(1);
      expect(edges[0]).toEqual(new GraphEdge(0, 1, 10));
    });

    it('should allow multiple edges from the same vertex', () => {
      graph.add(new GraphEdge(0, 1, 10));
      graph.add(new GraphEdge(0, 2, 20));
      const edges = Array.from(graph.iterateEdgesFrom(0));
      expect(edges).toHaveLength(2);
      expect(edges).toEqual([new GraphEdge(0, 1, 10), new GraphEdge(0, 2, 20)]);
    });

    it('should throw an error when adding an edge with a non-existent "from" vertex', () => {
      expect(() => graph.add(new GraphEdge(5, 1, 10))).toThrow();
    });

    it('should throw an error when adding an edge with a non-existent "to" vertex', () => {
      expect(() => graph.add(new GraphEdge(1, 5, 10))).toThrow();
    });

    it('should allow adding a self-loop edge', () => {
      graph.add(new GraphEdge(1, 1, 15));
      const edges = Array.from(graph.iterateEdgesFrom(1));
      expect(edges).toHaveLength(1);
      expect(edges[0]).toEqual(new GraphEdge(1, 1, 15));
    });
  });

  describe('get', () => {
    it('should return the edge between two vertices if it exists', () => {
      graph.add(new GraphEdge(0, 1, 10));
      const edge = graph.get(0, 1);
      expect(edge).toEqual(new GraphEdge(0, 1, 10));
    });

    it('should return undefined if there is no edge between two vertices', () => {
      const edge = graph.get(0, 1);
      expect(edge).toBeUndefined();
    });

    it('should throw an error if trying to get an edge from a non-existent "from" vertex', () => {
      expect(() => graph.get(5, 1)).toThrow();
    });

    it('should throw an error if trying to get an edge to a non-existent "to" vertex', () => {
      expect(() => graph.get(1, 5)).toThrow();
    });
  });

  describe('has', () => {
    it('should return true if an edge exists between two vertices', () => {
      graph.add(new GraphEdge(0, 1, 10));
      expect(graph.has(0, 1)).toBe(true);
    });

    it('should return false if there is no edge between two vertices', () => {
      expect(graph.has(0, 1)).toBe(false);
    });

    it('should return false if an edge has been removed', () => {
      graph.add(new GraphEdge(0, 1, 10));
      graph.remove(0, 1);
      expect(graph.has(0, 1)).toBe(false);
    });

    it('should throw an error if trying to check existence from a non-existent "from" vertex', () => {
      expect(() => graph.has(5, 1)).toThrow();
    });

    it('should throw an error if trying to check existence to a non-existent "to" vertex', () => {
      expect(() => graph.has(1, 5)).toThrow();
    });
  });

  describe('remove', () => {
    it('should remove an existing edge between two vertices', () => {
      graph.add(new GraphEdge(0, 1, 10));
      graph.remove(0, 1);
      const edge = graph.get(0, 1);
      expect(edge).toBeUndefined();
    });

    it('should do nothing when removing a non-existent edge', () => {
      graph.remove(0, 1); // Should not throw
      const edge = graph.get(0, 1);
      expect(edge).toBeUndefined(); // Still undefined as it was non-existent
    });

    it('should throw an error if trying to remove an edge from a non-existent "from" vertex', () => {
      expect(() => graph.remove(5, 1)).toThrow();
    });

    it('should throw an error if trying to remove an edge to a non-existent "to" vertex', () => {
      expect(() => graph.remove(1, 5)).toThrow();
    });

    it('should allow removing a self-loop edge', () => {
      graph.add(new GraphEdge(1, 1, 15));
      graph.remove(1, 1);
      expect(graph.has(1, 1)).toBe(false);
    });
  });

  describe('iterateEdgesFrom', () => {
    it('should return no edges if there are no edges from the vertex', () => {
      const edges = Array.from(graph.iterateEdgesFrom(0));
      expect(edges).toHaveLength(0);
    });

    it('should return all edges from a vertex', () => {
      graph.add(new GraphEdge(0, 1, 10));
      graph.add(new GraphEdge(0, 2, 20));
      graph.add(new GraphEdge(0, 3, 30));

      const edges = Array.from(graph.iterateEdgesFrom(0));
      expect(edges).toHaveLength(3);
      expect(edges).toEqual([new GraphEdge(0, 1, 10), new GraphEdge(0, 2, 20), new GraphEdge(0, 3, 30)]);
    });

    it('should return no edges when iterating from a non-existent vertex', () => {
      expect(() => Array.from(graph.iterateEdgesFrom(5))).toThrow();
    });

    it('should handle multiple edges from the same vertex', () => {
      graph.add(new GraphEdge(0, 1, 10));
      graph.add(new GraphEdge(0, 2, 20));
      graph.add(new GraphEdge(0, 3, 30));

      const edges = Array.from(graph.iterateEdgesFrom(0));
      expect(edges).toHaveLength(3);
      expect(edges).toEqual([new GraphEdge(0, 1, 10), new GraphEdge(0, 2, 20), new GraphEdge(0, 3, 30)]);
    });
  });

  describe('iterateAllEdges', () => {
    it('should return all edges in the graph', () => {
      graph.add(new GraphEdge(0, 1, 10));
      graph.add(new GraphEdge(0, 2, 20));
      graph.add(new GraphEdge(0, 3, 30));
      graph.add(new GraphEdge(1, 2, 40));

      const edges = Array.from(graph.iterateAllEdges());
      expect(edges).toHaveLength(4);
      expect(edges).toEqual([
        new GraphEdge(0, 1, 10),
        new GraphEdge(0, 2, 20),
        new GraphEdge(0, 3, 30),
        new GraphEdge(1, 2, 40),
      ]);
    });
  });

  describe('edge cases', () => {
    it('should handle a graph of size 0', () => {
      const emptyGraph = new AdjacencyListGraph(0);
      expect(() => emptyGraph.add(new GraphEdge(0, 1, 10))).toThrow();
      expect(() => Array.from(emptyGraph.iterateEdgesFrom(0))).toThrow();
    });

    it('should handle adding an edge to a vertex that already has multiple edges', () => {
      graph.add(new GraphEdge(0, 1, 10));
      graph.add(new GraphEdge(0, 2, 20));
      graph.add(new GraphEdge(0, 3, 30));
      graph.add(new GraphEdge(0, 2, 25));

      const edges = Array.from(graph.iterateEdgesFrom(0));
      expect(edges).toHaveLength(4);
      expect(edges).toEqual([
        new GraphEdge(0, 1, 10),
        new GraphEdge(0, 2, 20),
        new GraphEdge(0, 3, 30),
        new GraphEdge(0, 2, 25),
      ]);
    });
  });
});
