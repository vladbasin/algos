import { GraphEdge, IGraph } from './contracts';

/**
 * Class representing a graph using an adjacency matrix, where each vertex is represented by an array
 * and each entry in the array holds the weight of the edge to another vertex.
 */
export class AdjacencyMatrixGraph implements IGraph {
  /**
   * Creates a new graph with the specified number of vertices.
   *
   * @param {number} size - The number of vertices in the graph.
   */
  public constructor(readonly size: number) {
    this._matrix = Array(size)
      .fill(undefined)
      .map(() => Array(size).fill(undefined));
  }

  /**
   * The number of vertices in the graph.
   *
   * @type {number}
   */
  public readonly numberOfVertices: number = this.size;

  /**
   * Adds an edge to the graph with the specified weight.
   *
   * @param {GraphEdge} edge - The edge to be added, including the from vertex, to vertex, and weight.
   * @returns {void}
   * @throws {Error} - If either vertex is out of bounds.
   */
  public add({ from, to, weight }: GraphEdge): void {
    if (from >= this.size || to >= this.size || from < 0 || to < 0) {
      throw new Error('Cannot add an edge for vertices that are outside the bounds of 0 to the initial size.');
    }

    this._matrix[from] = this._matrix[from] ?? [];
    this._matrix[from][to] = weight;
  }

  /**
   * Retrieves an edge between two vertices if it exists.
   *
   * @param {number} from - The starting vertex of the edge.
   * @param {number} to - The ending vertex of the edge.
   * @returns {GraphEdge | undefined} - The edge if found, otherwise undefined.
   * @throws {Error} - If either vertex is out of bounds.
   */
  public get(from: number, to: number): GraphEdge | undefined {
    this.ensureVertexBounds(from);
    this.ensureVertexBounds(to);

    const value = this._matrix[from][to];

    return value === undefined ? undefined : new GraphEdge(from, to, value);
  }

  /**
   * Checks if an edge exists between two vertices.
   *
   * @param {number} from - The starting vertex of the edge.
   * @param {number} to - The ending vertex of the edge.
   * @returns {boolean} - True if the edge exists, otherwise false.
   * @throws {Error} - If either vertex is out of bounds.
   */
  public has(from: number, to: number): boolean {
    return !!this.get(from, to);
  }

  /**
   * Removes an edge between two vertices if it exists.
   *
   * @param {number} from - The starting vertex of the edge.
   * @param {number} to - The ending vertex of the edge.
   * @returns {void}
   * @throws {Error} - If either vertex is out of bounds.
   */
  public remove(from: number, to: number): void {
    this.ensureVertexBounds(from);
    this.ensureVertexBounds(to);

    this._matrix[from][to] = undefined;
  }

  /**
   * Returns an iterator for all edges originating from a specific vertex.
   *
   * @param {number} from - The vertex from which the edges originate.
   * @returns {IterableIterator<GraphEdge>} - An iterator over the edges from the vertex.
   * @throws {Error} - If the vertex is out of bounds.
   */
  public *iterateEdgesFrom(from: number): IterableIterator<GraphEdge> {
    this.ensureVertexBounds(from);

    for (let j = 0; j < this.size; j++) {
      const value = this._matrix[from][j];
      if (value !== undefined) {
        yield new GraphEdge(from, j, value);
      }
    }
  }

  /**
   * Returns an iterator for all edges in the graph.
   *
   * @returns {IterableIterator<GraphEdge>} - An iterator over all edges in the graph.
   */
  public *iterateAllEdges(): IterableIterator<GraphEdge> {
    for (let i = 0; i < this.size; i++) {
      yield* this.iterateEdgesFrom(i);
    }
  }

  /**
   * Ensures that the vertex is within the bounds of the graph.
   *
   * @param {number} vertex - The vertex to check.
   * @returns {void}
   * @throws {Error} - If the vertex is out of bounds.
   */
  public ensureVertexBounds(vertex: number): void {
    if (vertex >= this.size || vertex < 0) {
      throw new Error('Vertex cannot be outside the bounds of 0 to the initial size.');
    }
  }

  private _matrix: (number | undefined)[][] = [];
}
