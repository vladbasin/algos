import { LinkedList } from './LinkedList';

/**
 * Class representing a stack data structure, which operates on a Last-In-First-Out (LIFO) basis.
 * This stack is backed by a linked list for efficient pushing and popping of elements.
 *
 * @template T - The type of elements stored in the stack.
 */
export class Stack<T> {
  /**
   * Pushes an item onto the top of the stack.
   *
   * @param {T} item - The item to be added to the stack.
   * @returns {void}
   */
  public push(item: T): void {
    this._items.addTail(item);
  }

  /**
   * Removes and returns the item from the top of the stack.
   *
   * @returns {T | undefined} - The item from the top of the stack, or undefined if the stack is empty.
   */
  public pop(): T | undefined {
    return this._items.removeTail();
  }

  /**
   * Returns the item at the top of the stack without removing it.
   *
   * @returns {T | undefined} - The item at the top of the stack, or undefined if the stack is empty.
   */
  public peek(): T | undefined {
    return this._items.tail;
  }

  /**
   * Returns the number of items currently in the stack.
   *
   * @returns {number} - The number of items in the stack.
   */
  public get length(): number {
    return this._items.length;
  }

  /**
   * Internal linked list to store the elements of the stack.
   *
   * @private
   * @type {LinkedList<T>}
   */
  private _items: LinkedList<T> = new LinkedList<T>();
}
