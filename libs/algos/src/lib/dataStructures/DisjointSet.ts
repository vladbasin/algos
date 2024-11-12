/**
 * Disjoint Set (Union-Find) data structure with path compression and union by rank.
 * Efficiently maintains a partition of elements into disjoint sets.
 */
export class DisjointSet {
  /**
   * Creates a new DisjointSet data structure.
   * Initially, each element is in its own singleton set.
   *
   * @param size - The number of elements in the set (0 to size-1)
   * @throws {Error} If size is not positive
   */
  public constructor(size: number) {
    if (size <= 0) {
      throw new Error('Size must be greater than 0');
    }

    this._size = size;
    this._parent = Array(size)
      .fill(0)
      .map((_, index) => index);
    this._rank = Array(size).fill(0);
  }

  /**
   * Checks if two elements are in the same set.
   * Uses path compression for efficiency.
   *
   * @param element1 - First element
   * @param element2 - Second element
   * @returns {boolean} True if elements are in the same set
   */
  public areInSameSet(element1: number, element2: number): boolean {
    return this.findSetRepresentative(element1) === this.findSetRepresentative(element2);
  }

  /**
   * Merges the sets containing the two elements.
   * Uses union by rank for balanced trees.
   *
   * @param element1 - First element
   * @param element2 - Second element
   */
  public union(element1: number, element2: number): void {
    const set1 = this.findSetRepresentative(element1);
    const set2 = this.findSetRepresentative(element2);

    if (set1 === set2) {
      return;
    }

    if (this._rank[set1] === this._rank[set2]) {
      this._parent[set1] = this._parent[set2];
      this._rank[set2]++;
    } else if (this._rank[set1] > this._rank[set2]) {
      this._parent[set1] = this._parent[set2];
    } else {
      this._parent[set2] = this._parent[set1];
    }
  }

  /**
   * Finds the representative of the set containing the element.
   * Implements path compression for O(α(n)) amortized time complexity.
   *
   * @param element - The element to find the set for
   * @returns {number} The representative of the set
   * @throws {Error} If element is out of bounds
   * @private
   */
  private findSetRepresentative(element: number): number {
    this.ensureElementBounds(element);

    if (this._parent[element] === element) {
      return element;
    }

    this._parent[element] = this.findSetRepresentative(this._parent[element]);
    return this._parent[element];
  }

  private _size: number;
  private _parent: number[];
  private _rank: number[];

  /**
   * Validates that the element index is within bounds.
   *
   * @param element - The element index to validate
   * @throws {Error} If element is out of bounds
   * @private
   */
  private ensureElementBounds(element: number): void {
    if (element < 0 || element >= this._size) {
      throw new Error('Element is out of bounds');
    }
  }
}
