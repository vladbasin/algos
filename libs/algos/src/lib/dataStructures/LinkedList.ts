import { LinkedListElementType } from './contracts';

/**
 * Class representing a doubly linked list, where each node points to both its previous and next node.
 * Provides methods for adding, removing, searching, and iterating over elements in the list.
 */
export class LinkedList<T> {
  /**
   * Adds a new value at the tail of the linked list.
   *
   * @param {T} value - The value to be added.
   * @returns {void}
   */
  public addTail(value: T): void {
    this.addTailElement(value);
  }

  /**
   * Adds a new element at the tail of the linked list and returns the newly created element.
   *
   * @param {T} value - The value to be added.
   * @returns {LinkedListElementType<T>} - The newly created element.
   */
  public addTailElement(value: T): LinkedListElementType<T> {
    const newItem: LinkedListElementType<T> = {
      value,
      next: undefined,
      prev: this._tail,
    };

    if (this._tail) {
      this._tail.next = newItem;
    }

    this._tail = newItem;

    if (!this._head) {
      this._head = newItem;
    }

    this._length++;

    return newItem;
  }

  /**
   * Adds a new value at the head of the linked list.
   *
   * @param {T} value - The value to be added.
   * @returns {void}
   */
  public addHead(value: T): void {
    this.addHeadElement(value);
  }

  /**
   * Adds a new element at the head of the linked list and returns the newly created element.
   *
   * @param {T} value - The value to be added.
   * @returns {LinkedListElementType<T>} - The newly created element.
   */
  public addHeadElement(value: T): LinkedListElementType<T> {
    const newItem: LinkedListElementType<T> = {
      value,
      next: this._head,
      prev: undefined,
    };

    if (this._head) {
      this._head.prev = newItem;
    }
    this._head = newItem;

    if (!this._tail) {
      this._tail = newItem;
    }

    this._length++;

    return newItem;
  }

  /**
   * Adds a new element before a given element in the list.
   *
   * @param {LinkedListElementType<T>} element - The element before which the new value should be added.
   * @param {T} value - The value to be added.
   * @returns {LinkedListElementType<T>} - The newly created element.
   */
  public addBeforeElement(element: LinkedListElementType<T>, value: T): LinkedListElementType<T> {
    const newItem: LinkedListElementType<T> = {
      value,
      next: element,
      prev: element.prev,
    };

    if (this._head === element) {
      this._head = newItem;
    }

    if (element.prev) {
      element.prev.next = newItem;
    }
    element.prev = newItem;

    this._length++;

    return newItem;
  }

  /**
   * Adds a new element after a given element in the list.
   *
   * @param {LinkedListElementType<T>} element - The element after which the new value should be added.
   * @param {T} value - The value to be added.
   * @returns {LinkedListElementType<T>} - The newly created element.
   */
  public addAfterElement(element: LinkedListElementType<T>, value: T): LinkedListElementType<T> {
    const newItem: LinkedListElementType<T> = {
      value,
      next: element.next,
      prev: element,
    };

    if (this._tail === element) {
      this._tail = newItem;
    }

    if (element.next) {
      element.next.prev = newItem;
    }
    element.next = newItem;

    this._length++;

    return newItem;
  }

  /**
   * Removes the head element from the list and returns its value.
   *
   * @returns {T | undefined} - The value of the removed element, or undefined if the list is empty.
   */
  public removeHead(): T | undefined {
    return this.removeHeadElement()?.value;
  }

  /**
   * Removes the head element from the list and returns the element.
   *
   * @returns {LinkedListElementType<T> | undefined} - The removed element, or undefined if the list is empty.
   */
  public removeHeadElement(): LinkedListElementType<T> | undefined {
    const result = this._head;

    if (this._head === this._tail) {
      this._head = undefined;
      this._tail = undefined;
    }

    this._head = this._head?.next;
    if (this._head) {
      this._head.prev = undefined;
    }

    this.decreaseLengthSafely();

    return result;
  }

  /**
   * Removes the tail element from the list and returns its value.
   *
   * @returns {T | undefined} - The value of the removed element, or undefined if the list is empty.
   */
  public removeTail(): T | undefined {
    return this.removeTailElement()?.value;
  }

  /**
   * Removes the tail element from the list and returns the element.
   *
   * @returns {LinkedListElementType<T> | undefined} - The removed element, or undefined if the list is empty.
   */
  public removeTailElement(): LinkedListElementType<T> | undefined {
    const result = this._tail;

    if (this._head === this._tail) {
      this._head = undefined;
      this._tail = undefined;
    }

    this._tail = this._tail?.prev;
    if (this._tail) {
      this._tail.next = undefined;
    }

    this.decreaseLengthSafely();

    return result;
  }

  /**
   * Removes a given element from the list.
   *
   * @param {LinkedListElementType<T>} element - The element to be removed.
   * @returns {LinkedListElementType<T> | undefined} - The removed element, or undefined if not found.
   */
  public removeElement(element: LinkedListElementType<T>): LinkedListElementType<T> | undefined {
    if (this._head === element) {
      return this.removeHeadElement();
    }

    if (this._tail === element) {
      return this.removeTailElement();
    }

    if (element.prev) {
      element.prev.next = element.next;
    }
    if (element.next) {
      element.next.prev = element.prev;
    }

    this.decreaseLengthSafely();

    return element;
  }

  /**
   * Removes the element at a given index from the list and returns its value.
   *
   * @param {number} index - The index of the element to remove.
   * @returns {T | undefined} - The value of the removed element, or undefined if the index is out of bounds.
   */
  public removeAtIndex(index: number): T | undefined {
    return this.removeElementAtIndex(index)?.value;
  }

  /**
   * Removes the element at a given index from the list and returns the element.
   *
   * @param {number} index - The index of the element to remove.
   * @returns {LinkedListElementType<T> | undefined} - The removed element, or undefined if the index is out of bounds.
   */
  public removeElementAtIndex(index: number): LinkedListElementType<T> | undefined {
    if (index < 0 || index > this.length - 1) {
      return;
    }

    if (index === 0) {
      return this.removeHeadElement();
    }

    if (index === this.length - 1) {
      return this.removeTailElement();
    }

    const foundElement = this.searchElementByIndex(index);
    if (!foundElement) {
      return;
    }

    return this.removeElement(foundElement);
  }

  /**
   * Searches for the value at a given index in the list.
   *
   * @param {number} index - The index to search for.
   * @returns {T | undefined} - The value at the specified index, or undefined if out of bounds.
   */
  public searchByIndex(index: number): T | undefined {
    return this.searchElementByIndex(index)?.value;
  }

  /**
   * Searches for the element at a given index in the list.
   *
   * @param {number} index - The index to search for.
   * @returns {LinkedListElementType<T> | undefined} - The element at the specified index, or undefined if out of bounds.
   */
  public searchElementByIndex(index: number): LinkedListElementType<T> | undefined {
    if (index >= this.length) {
      return undefined;
    }

    let cursor = 0;
    let result = this._head;

    while (cursor < index && result?.next) {
      result = result.next;
      cursor++;
    }

    if (cursor !== index) {
      return undefined;
    }

    return result;
  }

  /**
   * Adds a value at a specified index in the list.
   *
   * @param {number} index - The index at which to add the value.
   * @param {T} value - The value to be added.
   * @returns {T | undefined} - The added value, or undefined if the index is out of bounds.
   */
  public addAtIndex(index: number, value: T): T | undefined {
    return this.addElementAtIndex(index, value)?.value;
  }

  /**
   * Adds an element at a specified index in the list.
   *
   * @param {number} index - The index at which to add the element.
   * @param {T} value - The value to be added.
   * @returns {LinkedListElementType<T> | undefined} - The newly created element, or undefined if the index is out of bounds.
   */
  public addElementAtIndex(index: number, value: T): LinkedListElementType<T> | undefined {
    if (this.length === 0 || index === 0) {
      return this.addHeadElement(value);
    }

    if (this.length <= index) {
      return this.addTailElement(value);
    }

    const foundElement = this.searchElementByIndex(index);
    if (!foundElement) {
      return;
    }

    return this.addBeforeElement(foundElement, value);
  }

  /**
   * Returns the current length of the linked list.
   *
   * @returns {number} - The number of elements in the list.
   */
  public get length(): number {
    return this._length;
  }

  /**
   * Returns the value at the head of the linked list.
   *
   * @returns {T | undefined} - The value at the head, or undefined if the list is empty.
   */
  public get head(): T | undefined {
    return this.headElement?.value;
  }

  /**
   * Returns the element at the head of the linked list.
   *
   * @returns {LinkedListElementType<T> | undefined} - The element at the head, or undefined if the list is empty.
   */
  public get headElement(): LinkedListElementType<T> | undefined {
    return this._head;
  }

  /**
   * Returns the value at the tail of the linked list.
   *
   * @returns {T | undefined} - The value at the tail, or undefined if the list is empty.
   */
  public get tail(): T | undefined {
    return this.tailElement?.value;
  }

  /**
   * Returns the element at the tail of the linked list.
   *
   * @returns {LinkedListElementType<T> | undefined} - The element at the tail, or undefined if the list is empty.
   */
  public get tailElement(): LinkedListElementType<T> | undefined {
    return this._tail;
  }

  /**
   * Returns an iterator for the values in the linked list.
   *
   * @returns {IterableIterator<T>} - An iterator over the values in the list.
   */
  public *iterate(): IterableIterator<T> {
    for (const element of this.iterateElements()) {
      yield element.value;
    }
  }

  /**
   * Returns an iterator for the elements in the linked list.
   *
   * @returns {IterableIterator<LinkedListElementType<T>>} - An iterator over the elements in the list.
   */
  public *iterateElements(): IterableIterator<LinkedListElementType<T>> {
    let current = this.headElement;
    while (current) {
      yield current;
      current = current.next;
    }
  }

  /**
   * Allows the linked list to be iterable using `for...of` loops.
   *
   * @returns {IterableIterator<T>} - An iterator over the values in the list.
   */
  [Symbol.iterator](): IterableIterator<T> {
    return this.iterate();
  }

  /**
   * Converts the linked list to an array.
   *
   * @returns {T[]} - An array containing all the values in the list.
   */
  public toArray(): T[] {
    let cursor = this.headElement;
    const items: T[] = [];

    while (cursor) {
      items.push(cursor.value);
      cursor = cursor.next;
    }

    return items;
  }

  private _head: LinkedListElementType<T> | undefined = undefined;
  private _tail: LinkedListElementType<T> | undefined = undefined;
  private _length = 0;

  /**
   * Safely decreases the length of the linked list.
   *
   * @private
   * @returns {void}
   */
  private decreaseLengthSafely(): void {
    if (this._length > 0) {
      this._length--;
    }
  }
}
