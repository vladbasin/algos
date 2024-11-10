/**
 * Class representing a weighted edge in a graph.
 * Stores the starting vertex, ending vertex, and the weight of the edge.
 */
export class GraphEdge {
  /**
   * Creates a new graph edge.
   *
   * @param {number} from - The starting vertex of the edge.
   * @param {number} to - The ending vertex of the edge.
   * @param {number} weight - The weight of the edge.
   */
  public constructor(public readonly from: number, public readonly to: number, public readonly weight: number) {}
}
