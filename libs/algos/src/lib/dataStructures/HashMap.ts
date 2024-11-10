import { LinkedListElementType } from './contracts';
import { LinkedList } from './LinkedList';

type BucketElementType<TKey, TValue> = {
  key: TKey;
  value: TValue;
};

/**
 * Class representing a hash map, a data structure that allows for fast retrieval
 * of key-value pairs using a hash function. Uses separate chaining with linked lists to handle collisions.
 */
export class HashMap<TKey, TValue> {
  /**
   * Creates a new HashMap instance with a specified capacity.
   *
   * @param {number} _capacity - The initial number of buckets in the hash map.
   */
  constructor(private _capacity: number) {
    this._items = new Array(_capacity).fill(1).map(() => new LinkedList<BucketElementType<TKey, TValue>>());
  }

  /**
   * Adds or updates a key-value pair in the hash map.
   *
   * @param {TKey} key - The key for the value.
   * @param {TValue} value - The value to be stored in the hash map.
   * @returns {void}
   */
  public put(key: TKey, value: TValue): void {
    const index = this.getIndex(key);
    let current = this._items[index].headElement;
    while (current) {
      if (current.value.key === key) {
        current.value.value = value; // Update existing value
        return;
      } else {
        current = current.next;
      }
    }
    // Add new element to the tail if key not found
    this._items[index].addTail({ key, value });
  }

  /**
   * Retrieves the value associated with a given key.
   *
   * @param {TKey} key - The key to look up in the hash map.
   * @returns {TValue | undefined} - The value if found, otherwise undefined.
   */
  public get(key: TKey): TValue | undefined {
    return this.getElementWithIndex(key)?.element.value.value;
  }

  /**
   * Checks if the hash map contains a specific key.
   *
   * @param {TKey} key - The key to check for in the hash map.
   * @returns {boolean} - True if the key exists, otherwise false.
   */
  public has(key: TKey): boolean {
    return !!this.get(key);
  }

  /**
   * Removes a key-value pair from the hash map by its key.
   *
   * @param {TKey} key - The key of the pair to remove.
   * @returns {TValue | undefined} - The value of the removed key, or undefined if the key was not found.
   */
  public remove(key: TKey): TValue | undefined {
    const elementWithIndex = this.getElementWithIndex(key);
    if (!elementWithIndex) {
      return undefined;
    }

    const { element, index } = elementWithIndex;
    this._items[index].removeElement(element);
    return element.value.value;
  }

  private _items: LinkedList<BucketElementType<TKey, TValue>>[];

  private getElementWithIndex(
    key: TKey
  ): { element: LinkedListElementType<BucketElementType<TKey, TValue>>; index: number } | undefined {
    const index = this.getIndex(key);
    let current = this._items[index].headElement;
    while (current) {
      if (current.value.key === key) {
        return { element: current, index };
      } else {
        current = current.next;
      }
    }
    return undefined;
  }

  private getIndex(key: TKey): number {
    const stringKey = new String(key);
    let hash = 0;
    for (let i = 0; i < stringKey.length; i++) {
      hash = (hash << 5) - hash + stringKey.charCodeAt(i);
      hash = hash & hash; // Ensure hash stays within 32-bit range
    }
    return Math.abs(hash) % this._capacity;
  }
}
