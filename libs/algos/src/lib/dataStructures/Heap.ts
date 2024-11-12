/**
 * Type definition for heap entries requiring a numeric value for comparison.
 */
export type HeapEntryType = {
  value: number;
};

/**
 * Generic binary heap implementation supporting both min-heap and max-heap.
 *
 * @template THeapEntry - Type of elements stored in heap, must include a numeric value property
 */
export class Heap<THeapEntry extends HeapEntryType> {
  /**
   * Creates a new Heap instance.
   *
   * @param _type - 'min' for min-heap or 'max' for max-heap
   */
  public constructor(private _type: 'min' | 'max') {}

  /**
   * Adds a new entry to the heap and maintains heap property.
   *
   * @param entry - The entry to add
   */
  public add(entry: THeapEntry): void {
    this._nodes.push(entry);
    this.raise(this._nodes.length - 1);
  }

  /**
   * Returns the root value without removing it.
   *
   * @returns {THeapEntry | undefined} The root entry or undefined if empty
   */
  public peek(): THeapEntry | undefined {
    return this._nodes[0];
  }

  /**
   * Removes and returns the root value.
   *
   * @returns {THeapEntry | undefined} The root entry or undefined if empty
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
   * Current number of elements in the heap.
   *
   * @returns {number} The heap size
   */
  public get size(): number {
    return this._nodes.length;
  }

  private _nodes: THeapEntry[] = [];

  /**
   * Moves an element up the heap until heap property is restored.
   * Used after adding a new element.
   *
   * @param index - Index of element to raise
   * @private
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
   * Moves an element down the heap until heap property is restored.
   * Used after removing the root element.
   *
   * @param index - Index of element to lower
   * @private
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
   * Gets parent index for a given node index.
   *
   * @param index - Child node index
   * @returns {number} Parent node index
   * @throws {Error} If index is 0 (root has no parent)
   * @private
   */
  private getParentIndex(index: number): number {
    if (index === 0) {
      throw new Error('No parent for 0 index');
    }

    return Math.floor((index - 1) / 2);
  }

  /**
   * Gets left child index for a given node index.
   *
   * @param index - Parent node index
   * @returns {number | undefined} Left child index or undefined if none
   * @private
   */
  private getLeftIndex(index: number): number | undefined {
    const result = index * 2 + 1;
    return result >= this._nodes.length ? undefined : result;
  }

  /**
   * Gets right child index for a given node index.
   *
   * @param index - Parent node index
   * @returns {number | undefined} Right child index or undefined if none
   * @private
   */
  private getRightIndex(index: number): number | undefined {
    const result = index * 2 + 2;
    return result >= this._nodes.length ? undefined : result;
  }

  /**
   * Checks if parent node should remain parent of child based on heap type.
   *
   * @param parentIndex - Parent node index
   * @param childrenIndex - Child node index
   * @returns {boolean} True if heap property is satisfied
   * @private
   */
  private shouldBeParent(parentIndex: number, childrenIndex: number): boolean {
    return this._type === 'max'
      ? this._nodes[parentIndex].value >= this._nodes[childrenIndex].value
      : this._nodes[parentIndex].value <= this._nodes[childrenIndex].value;
  }

  /**
   * Checks if parent node should remain parent of both children.
   *
   * @param parentIndex - Parent node index
   * @param leftIndex - Left child index
   * @param rightIndex - Right child index
   * @returns {boolean} True if heap property is satisfied for both children
   * @private
   */
  private shouldBeParentOfBoth(parentIndex: number, leftIndex: number, rightIndex: number): boolean {
    return this.shouldBeParent(parentIndex, leftIndex) && this.shouldBeParent(parentIndex, rightIndex);
  }

  /**
   * Swaps two elements in the heap.
   *
   * @param index1 - First element index
   * @param index2 - Second element index
   * @private
   */
  private swap(index1: number, index2: number): void {
    [this._nodes[index1], this._nodes[index2]] = [this._nodes[index2], this._nodes[index1]];
  }
}
