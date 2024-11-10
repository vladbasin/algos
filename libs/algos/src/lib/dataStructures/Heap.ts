export type HeapEntryType = {
  value: number;
};

/**
 * Class representing a binary heap data structure, which can be either a min-heap or a max-heap.
 * A heap is a complete binary tree where the parent node is either greater (max-heap) or smaller (min-heap) than its children.
 */
export class Heap<THeapEntry extends HeapEntryType> {
  /**
   * Creates a new Heap instance, either as a min-heap or a max-heap.
   *
   * @param {'min' | 'max'} _type - Specifies the type of heap ('min' for min-heap, 'max' for max-heap).
   */
  public constructor(private _type: 'min' | 'max') {}

  /**
   * Adds a new value to the heap and maintains the heap property.
   *
   * @param {THeapEntry} entry - The entry to be added to the heap.
   * @returns {void}
   */
  public add(entry: THeapEntry): void {
    this._nodes.push(entry);
    this.raise(this._nodes.length - 1);
  }

  /**
   * Returns the root value of the heap (the minimum value for a min-heap or the maximum value for a max-heap)
   * without removing it from the heap.
   *
   * @returns {THeapEntry | undefined} - The root value of the heap, or undefined if the heap is empty.
   */
  public peek(): THeapEntry | undefined {
    return this._nodes[0];
  }

  /**
   * Removes and returns the root value of the heap (the minimum or maximum value) while maintaining the heap property.
   *
   * @returns {THeapEntry | undefined} - The root value of the heap, or undefined if the heap is empty.
   */
  public pop(): THeapEntry | undefined {
    if (this.size === 0) {
      return;
    }

    const result = this._nodes[0];
    this.swap(0, this._nodes.length - 1);
    this._nodes.pop();
    this.lower(0);

    return result;
  }

  /**
   * Returns the number of elements in the heap.
   *
   * @returns {number} - The current size of the heap.
   */
  public get size(): number {
    return this._nodes.length;
  }

  /**
   * Internal array that stores the elements of the heap.
   *
   * @private
   * @type {THeapEntry[]}
   */
  private _nodes: THeapEntry[] = [];

  /**
   * Moves an element up in the heap until the heap property is restored.
   *
   * @private
   * @param {number} index - The index of the element to move up in the heap.
   */
  private raise(index: number): void {
    let currentIndex = index;
    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);
      if (this.shouldBeParent(parentIndex, currentIndex)) {
        break;
      } else {
        this.swap(parentIndex, currentIndex);
        currentIndex = parentIndex;
      }
    }
  }

  /**
   * Moves an element down in the heap until the heap property is restored.
   *
   * @private
   * @param {number} index - The index of the element to move down in the heap.
   */
  private lower(index: number): void {
    let currentIndex = index;
    while (currentIndex < this._nodes.length - 1) {
      const leftIndex = this.getLeftIndex(currentIndex);
      const rightIndex = this.getRightIndex(currentIndex);

      if (leftIndex && rightIndex) {
        if (this.shouldBeParentOfBoth(currentIndex, leftIndex, rightIndex)) {
          break;
        }

        if (this.shouldBeParentOfBoth(leftIndex, currentIndex, rightIndex)) {
          this.swap(currentIndex, leftIndex);
          currentIndex = leftIndex;
        } else {
          this.swap(currentIndex, rightIndex);
          currentIndex = rightIndex;
        }
      } else if (leftIndex) {
        if (this.shouldBeParent(currentIndex, leftIndex)) {
          break;
        } else {
          this.swap(currentIndex, leftIndex);
          currentIndex = leftIndex;
        }
      } else {
        break;
      }
    }
  }

  /**
   * Returns the index of the parent of the given index.
   *
   * @private
   * @param {number} index - The index of the child.
   * @returns {number} - The index of the parent.
   * @throws {Error} - If the index is 0, as the root node has no parent.
   */
  private getParentIndex(index: number): number {
    if (index === 0) {
      throw new Error('No parent for 0 index');
    }

    return Math.floor((index - 1) / 2);
  }

  /**
   * Returns the index of the left child of the given index.
   *
   * @private
   * @param {number} index - The index of the parent.
   * @returns {number | undefined} - The index of the left child, or undefined if the left child is out of bounds.
   */
  private getLeftIndex(index: number): number | undefined {
    const result = index * 2 + 1;
    return result >= this._nodes.length ? undefined : result;
  }

  /**
   * Returns the index of the right child of the given index.
   *
   * @private
   * @param {number} index - The index of the parent.
   * @returns {number | undefined} - The index of the right child, or undefined if the right child is out of bounds.
   */
  private getRightIndex(index: number): number | undefined {
    const result = index * 2 + 2;
    return result >= this._nodes.length ? undefined : result;
  }

  /**
   * Determines if the parent element should remain the parent of the child based on the heap type.
   *
   * @private
   * @param {number} parentIndex - The index of the parent element.
   * @param {number} childrenIndex - The index of the child element.
   * @returns {boolean} - True if the parent element satisfies the heap property, otherwise false.
   */
  private shouldBeParent(parentIndex: number, childrenIndex: number): boolean {
    return this._type === 'max'
      ? this._nodes[parentIndex].value >= this._nodes[childrenIndex].value
      : this._nodes[parentIndex].value <= this._nodes[childrenIndex].value;
  }

  /**
   * Determines if the parent element should remain the parent of both left and right children based on the heap type.
   *
   * @private
   * @param {number} parentIndex - The index of the parent element.
   * @param {number} leftIndex - The index of the left child element.
   * @param {number} rightIndex - The index of the right child element.
   * @returns {boolean} - True if the parent element satisfies the heap property for both children, otherwise false.
   */
  private shouldBeParentOfBoth(parentIndex: number, leftIndex: number, rightIndex: number): boolean {
    return this.shouldBeParent(parentIndex, leftIndex) && this.shouldBeParent(parentIndex, rightIndex);
  }

  /**
   * Swaps two elements in the heap at the given indices.
   *
   * @private
   * @param {number} index1 - The index of the first element.
   * @param {number} index2 - The index of the second element.
   * @returns {void}
   */
  private swap(index1: number, index2: number): void {
    const tmp = this._nodes[index1];
    this._nodes[index1] = this._nodes[index2];
    this._nodes[index2] = tmp;
  }
}
