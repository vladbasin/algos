/**
 * Disjoint Set is a data structure that keeps track of a partition of a set into disjoint (non-overlapping) subsets.
 */
export class DisjointSet {
  /**
   * @param size - The size of the set.
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
   * @param element1 - The first element.
   * @param element2 - The second element.
   * @returns True if the elements are in the same set, false otherwise.
   */
  public areInSameSet(element1: number, element2: number): boolean {
    return this.findSetRepresentative(element1) === this.findSetRepresentative(element2);
  }

  /**
   * Unions two sets.
   * @param element1 - The first element.
   * @param element2 - The second element.
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
   * Finds the representative of the set containing the given element.
   * @param element - The element.
   * @returns The representative of the set containing the given element.
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
   * Ensures the element is within the bounds of the set.
   * @param element - The element.
   */
  private ensureElementBounds(element: number): void {
    if (element < 0 || element >= this._size) {
      throw new Error('Element is out of bounds');
    }
  }
}
