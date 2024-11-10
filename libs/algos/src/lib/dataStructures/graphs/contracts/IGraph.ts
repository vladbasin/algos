import { GraphEdge } from './GraphEdge';

/**
 * Interface for a graph data structure that handles edges between vertices.
 */
export interface IGraph {
  /**
   * The number of vertices in the graph.
   *
   * @type {number}
   */
  readonly numberOfVertices: number;

  /**
   * Adds an edge to the graph.
   *
   * @param {GraphEdge} edge - The edge to be added to the graph.
   * @returns {void}
   */
  add(edge: GraphEdge): void;

  /**
   * Retrieves an edge between two vertices if it exists.
   *
   * @param {number} from - The starting vertex of the edge.
   * @param {number} to - The ending vertex of the edge.
   * @returns {GraphEdge | undefined} - The edge if found, otherwise undefined.
   */
  get(from: number, to: number): GraphEdge | undefined;

  /**
   * Checks if an edge exists between two vertices.
   *
   * @param {number} from - The starting vertex of the edge.
   * @param {number} to - The ending vertex of the edge.
   * @returns {boolean} - True if the edge exists, false otherwise.
   */
  has(from: number, to: number): boolean;

  /**
   * Removes an edge between two vertices if it exists.
   *
   * @param {number} from - The starting vertex of the edge.
   * @param {number} to - The ending vertex of the edge.
   * @returns {void}
   */
  remove(from: number, to: number): void;

  /**
   * Returns an iterator for edges originating from a specific vertex.
   *
   * @param {number} vertex - The vertex from which the edges originate.
   * @returns {IterableIterator<GraphEdge>} - An iterator over the edges from the vertex.
   */
  iterateEdgesFrom(vertex: number): IterableIterator<GraphEdge>;

  /**
   * Returns an iterator for all edges in the graph.
   *
   * @returns {IterableIterator<GraphEdge>} - An iterator over all edges in the graph.
   */
  iterateAllEdges(): IterableIterator<GraphEdge>;

  /**
   * Ensures that the vertex is within the bounds of the graph.
   *
   * @param {number} vertex - The vertex to check.
   * @returns {void}
   */
  ensureVertexBounds(vertex: number): void;
}
