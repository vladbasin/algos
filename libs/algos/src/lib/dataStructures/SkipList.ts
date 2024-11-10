import { LinkedListElementType, SkipListElementType } from './contracts';
import { LinkedList } from './LinkedList';

const RandomMaxForNextLayer = 0.5;

/**
 * Class representing a Skip List, a data structure that allows fast search, insertion, and deletion
 * by maintaining multiple levels of linked lists, where higher levels skip over multiple elements.
 */
export class SkipList {
  /**
   * Adds a new value to the skip list. It determines how many levels the new element should be added to
   * based on random probability.
   *
   * @param {number} value - The value to be added to the skip list.
   * @returns {void}
   */
  public add(value: number): void {
    let newItemMustBeLevels = 1;
    while (this.getRandom() < RandomMaxForNextLayer) {
      newItemMustBeLevels++;
    }

    const path = this.searchPath(value);
    let lowerLevelElement: LinkedListElementType<SkipListElementType> | undefined;
    for (
      let currentLevelIndex = 0;
      currentLevelIndex < Math.max(this._levels.length, newItemMustBeLevels);
      currentLevelIndex++
    ) {
      const level = this.getLevel(currentLevelIndex);
      const pathElementIndex = path.length - 1 - currentLevelIndex;
      const pathElement = path[pathElementIndex] ?? level.headElement;

      if (!pathElement.value.isNil && pathElement.value.value === value) {
        lowerLevelElement = pathElement;
        pathElement.value.count++;
        pathElement.value.segmentLength++;
        continue;
      }

      if (currentLevelIndex < newItemMustBeLevels) {
        const newElement = level.addAfterElement(pathElement, {
          isNil: false,
          value,
          count: lowerLevelElement?.value.value === value ? lowerLevelElement.value.count : 1,
          segmentLength: 0,
          lowerLevelElement,
        });
        lowerLevelElement = newElement;
        newElement.value.segmentLength = this.calculateSegmentLength(newElement, currentLevelIndex);
        if (newElement.next) {
          newElement.next.value.segmentLength = this.calculateSegmentLength(newElement.next, currentLevelIndex);
        }
      } else {
        if (pathElement.next) {
          pathElement.next.value.segmentLength = this.calculateSegmentLength(pathElement.next, currentLevelIndex);
        }
      }
    }
  }

  /**
   * Removes a value from the skip list by traversing down through all levels and adjusting pointers and segment lengths.
   *
   * @param {number} value - The value to be removed from the skip list.
   * @returns {void}
   */
  public remove(value: number): void {
    const path = this.searchPath(value);

    for (let currentLevelIndex = 0; currentLevelIndex < this._levels.length; currentLevelIndex++) {
      const pathIndex = path.length - currentLevelIndex - 1;
      let currentElement: LinkedListElementType<SkipListElementType> | undefined = path[pathIndex];

      if (currentElement.value.value !== value || currentElement.value.isNil) {
        if (currentElement.next) {
          currentElement.next.value.segmentLength = this.calculateSegmentLength(currentElement.next, currentLevelIndex);
        }
        currentElement = currentElement.value.lowerLevelElement;
        continue;
      }

      if (currentElement.value.count > 1) {
        currentElement.value.count--;
        currentElement.value.segmentLength--;
      } else {
        const level = this.getLevel(currentLevelIndex);
        const nextElement = currentElement.next;
        level.removeElement(currentElement);
        if (nextElement) {
          nextElement.value.segmentLength = this.calculateSegmentLength(nextElement, currentLevelIndex);
        }
      }
      currentElement = currentElement.value.lowerLevelElement;
    }
  }

  /**
   * Checks if a value exists in the skip list by searching for it in the appropriate levels.
   *
   * @param {number} value - The value to check.
   * @returns {boolean} - True if the value exists, false otherwise.
   */
  public has(value: number): boolean {
    const path = this.searchPath(value);

    return !!path.find((t) => t.value.value === value && !t.value.isNil);
  }

  /**
   * Searches for a value by its index in the skip list.
   *
   * @param {number} index - The index of the value to search for.
   * @returns {number | undefined} - The value at the specified index, or undefined if not found.
   */
  public searchByIndex(index: number): number | undefined {
    if (index === 0) {
      return this.lowestLevel.headElement?.next?.value.value;
    }

    let currentElement = this.highestLevel.headElement;
    let totalSkipped = 0;
    const requiredSkipped = index;
    for (let currentLevel = this._levels.length - 1; currentLevel >= 0; currentLevel--) {
      while (currentElement && currentElement.next) {
        const nextElement = currentElement.next;
        const minSkippedIfNextIsAnswer = totalSkipped + nextElement.value.segmentLength - nextElement.value.count;
        const maxSkippedIfNextIsAnswer = totalSkipped + nextElement.value.segmentLength - 1;
        // Overshooting with the next element on current level, need to go to lower level instead
        if (minSkippedIfNextIsAnswer > requiredSkipped) {
          currentElement = currentElement.value.lowerLevelElement;
          break;
        }
        // Still not enough skipped on current level, need to skip more on current level
        else if (maxSkippedIfNextIsAnswer < requiredSkipped) {
          currentElement = nextElement;
          totalSkipped = maxSkippedIfNextIsAnswer + 1;
        }
        // Next element is answer
        else {
          return nextElement.value.value;
        }
      }

      if (!currentElement?.next) {
        currentElement = currentElement?.value.lowerLevelElement;
      }
    }

    return undefined;
  }

  /**
   * Converts the skip list to an array of values at a given level.
   *
   * @param {number} levelIndex - The level to convert to an array.
   * @returns {number[]} - An array of values in the skip list at the specified level.
   */
  public toArray(levelIndex: number): number[] {
    const result: number[] = [];
    this.toElementsArray(levelIndex).forEach((element) => result.push(...new Array(element.count).fill(element.value)));
    return result;
  }

  /**
   * Converts the skip list elements at a given level to an array.
   *
   * @param {number} levelIndex - The level to convert.
   * @returns {SkipListElementType[]} - An array of skip list elements at the specified level.
   */
  public toElementsArray(levelIndex: number): SkipListElementType[] {
    const level = this.getLevel(levelIndex);

    const result: SkipListElementType[] = [];
    let current = level.headElement?.next;
    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }

  /**
   * Returns a string representation of the skip list elements at a given level.
   *
   * @param {number} levelIndex - The level to represent as a string.
   * @returns {string} - A string representation of the elements at the specified level.
   */
  public toElementsStringArray(levelIndex: number): string {
    return this.toElementsArray(levelIndex)
      .map((t) => `${t.value}[${t.segmentLength}:${t.count}]`)
      .join(', ');
  }

  /**
   * Returns a string representation of all levels of the skip list.
   *
   * @returns {string} - A string representation of the entire skip list.
   */
  public toElementsString(): string {
    return new Array(this._levels.length)
      .fill(1)
      .map((_, index) => this.toElementsStringArray(index))
      .join('\n');
  }

  /**
   * Returns the lowest level of the skip list.
   *
   * @returns {LinkedList<SkipListElementType>} - The linked list representing the lowest level of the skip list.
   */
  public get lowestLevel(): LinkedList<SkipListElementType> {
    return this.getLevel(0);
  }

  // Private properties and methods

  /**
   * Internal representation of levels in the skip list.
   *
   * @private
   * @type {LinkedList<SkipListElementType>[]}
   */
  private _levels: LinkedList<SkipListElementType>[] = [];

  /**
   * Returns the highest level of the skip list.
   *
   * @private
   * @returns {LinkedList<SkipListElementType>} - The highest level of the skip list.
   */
  private get highestLevel(): LinkedList<SkipListElementType> {
    return this.getLevel(Math.max(this._levels.length - 1, 0));
  }

  /**
   * Searches for the path through all levels of the skip list for a given value.
   *
   * @private
   * @param {number} value - The value to search for.
   * @returns {LinkedListElementType<SkipListElementType>[]} - An array of elements representing the search path.
   */
  private searchPath(value: number): LinkedListElementType<SkipListElementType>[] {
    const path: LinkedListElementType<SkipListElementType>[] = [];

    let currentElement = this.highestLevel.headElement;
    for (let currentLevel = this._levels.length - 1; currentLevel >= 0; currentLevel--) {
      if (!currentElement) {
        throw Error('Every level must contain at least 1 isNil item');
      }

      while (currentElement.next && currentElement.next.value.value <= value) {
        currentElement = currentElement.next;
      }

      path.push(currentElement);

      currentElement = currentElement.value.lowerLevelElement;
    }

    return path;
  }

  /**
   * Returns the skip list level at the specified index, creating new levels if necessary.
   *
   * @private
   * @param {number} index - The index of the level.
   * @returns {LinkedList<SkipListElementType>} - The linked list representing the level.
   */
  private getLevel(index: number): LinkedList<SkipListElementType> {
    while (this._levels.length <= index) {
      const newList = new LinkedList<SkipListElementType>();
      newList.addHead({
        isNil: true,
        value: 0,
        count: 0,
        segmentLength: 0,
        lowerLevelElement: this._levels.length > 0 ? this._levels[this._levels.length - 1].headElement : undefined,
      });
      this._levels.push(newList);
    }

    return this._levels[index];
  }

  /**
   * Generates a random value used for determining the height of new elements in the skip list.
   *
   * @private
   * @returns {number} - A random number between 0 and 1.
   */
  private getRandom(): number {
    return Math.random();
  }

  /**
   * Calculates the segment length for a given element at a specific level.
   * The segment length represents the distance or number of elements that this element "skips" over
   * at the current level. For non-lowest levels, the segment length is calculated by summing the
   * segment lengths of the corresponding elements at the lower levels.
   *
   * @param {LinkedListElementType<SkipListElementType>} element - The element for which the segment length is being calculated.
   * @param {number} levelIndex - The index of the current level in the skip list.
   * @returns {number} - The calculated segment length for the given element at the specified level.
   */
  private calculateSegmentLength(element: LinkedListElementType<SkipListElementType>, levelIndex: number): number {
    // If not lowest level, calculate the sum of all segments belonging to new element
    if (levelIndex > 0) {
      let result = 0;

      let segmentElement = element.value.lowerLevelElement;
      while (
        segmentElement &&
        !segmentElement.value.isNil &&
        // On below level go to the leftest possible, but stop at the prev of current element
        (element.prev?.value.isNil || segmentElement.value.value !== element.prev?.value.value)
      ) {
        result += segmentElement.value.segmentLength;
        segmentElement = segmentElement.prev;
      }

      return result;
    } else {
      return element.value.count;
    }
  }
}
