import { LinkedListElementType } from '../contracts';
import { LinkedList } from '../LinkedList';
import { GraphEdge, IGraph } from './contracts';

/**
 * Class representing a graph using an adjacency list, where each vertex
 * has a linked list of edges to represent the connections in the graph.
 */
export class AdjacencyListGraph implements IGraph {
  /**
   * Creates a new graph with the specified number of vertices.
   *
   * @param {number} size - The number of vertices in the graph.
   */
  public constructor(public readonly size: number) {
    this._edges = Array(size)
      .fill(undefined)
      .map(() => new LinkedList<GraphEdge>());
  }

  /**
   * The number of vertices in the graph.
   *
   * @type {number}
   */
  public readonly numberOfVertices: number = this.size;

  /**
   * Adds an edge to the graph.
   *
   * @param {GraphEdge} edge - The edge to be added to the graph.
   * @returns {void}
   * @throws {Error} - If the vertex is out of bounds.
   */
  public add(edge: GraphEdge): void {
    this.ensureVertexBounds(edge.from);
    this.ensureVertexBounds(edge.to);

    this._edges[edge.from].addTail(edge);
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

    let current = this._edges[from].headElement;
    while (current) {
      if (current.value.to === to) {
        return current.value;
      }
      current = current.next;
    }

    return undefined;
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

    const edgesToRemove: LinkedListElementType<GraphEdge>[] = [];

    for (const edge of this._edges[from].iterateElements()) {
      if (edge.value.to === to) {
        edgesToRemove.push(edge);
      }
    }

    for (const edge of edgesToRemove) {
      this._edges[from].removeElement(edge);
    }
  }

  /**
   * Returns an iterator for edges originating from a specific vertex.
   *
   * @param {number} vertex - The vertex from which the edges originate.
   * @returns {IterableIterator<GraphEdge>} - An iterator over the edges from the vertex.
   * @throws {Error} - If the vertex is out of bounds.
   */
  public *iterateEdgesFrom(vertex: number): IterableIterator<GraphEdge> {
    this.ensureVertexBounds(vertex);

    for (const edge of this._edges[vertex].iterate()) {
      yield edge;
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

  private _edges: LinkedList<GraphEdge>[];
}
