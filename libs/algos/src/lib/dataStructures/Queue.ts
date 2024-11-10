import { LinkedList } from './LinkedList';

/**
 * Class representing a queue data structure, which operates on a First-In-First-Out (FIFO) basis.
 * This queue is backed by a linked list for efficient enqueuing and dequeuing operations.
 *
 * @template T - The type of elements stored in the queue.
 */
export class Queue<T> {
  /**
   * Adds an item to the back of the queue (enqueues the item).
   *
   * @param {T} item - The item to be added to the queue.
   * @returns {void}
   */
  public enqueue(item: T): void {
    this._items.addTail(item);
  }

  /**
   * Removes and returns the item from the front of the queue (dequeues the item).
   *
   * @returns {T | undefined} - The item from the front of the queue, or undefined if the queue is empty.
   */
  public dequeue(): T | undefined {
    return this._items.removeHead();
  }

  /**
   * Returns the item at the front of the queue without removing it.
   *
   * @returns {T | undefined} - The item at the front of the queue, or undefined if the queue is empty.
   */
  public peek(): T | undefined {
    return this._items.head;
  }

  /**
   * Returns the number of items currently in the queue.
   *
   * @returns {number} - The number of items in the queue.
   */
  public get length(): number {
    return this._items.length;
  }

  private _items = new LinkedList<T>();
}
