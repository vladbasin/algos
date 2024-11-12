import { LinkedListElementType } from './contracts';
import { LinkedList } from './LinkedList';

type BucketElementType<TKey, TValue> = {
  key: TKey;
  value: TValue;
};

/**
 * Generic HashMap implementation using separate chaining for collision resolution.
 * Provides constant-time average case operations through efficient hashing.
 *
 * @template TKey - Type of keys in the hash map
 * @template TValue - Type of values in the hash map
 */
export class HashMap<TKey, TValue> {
  /**
   * Creates a new HashMap with specified capacity.
   *
   * @param _capacity - Initial number of buckets
   */
  constructor(private _capacity: number) {
    this._items = new Array(_capacity).fill(1).map(() => new LinkedList<BucketElementType<TKey, TValue>>());
  }

  /**
   * Adds or updates a key-value pair in the hash map.
   * @param key - The key for the entry
   * @param value - The value to store
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
   * @param key - The key to look up
   * @returns {TValue | undefined} The value if found, undefined otherwise
   */
  public get(key: TKey): TValue | undefined {
    return this.getElementWithIndex(key)?.element.value.value;
  }

  /**
   * Checks if a key exists in the hash map.
   *
   * @param key - The key to check
   * @returns {boolean} True if key exists, false otherwise
   */
  public has(key: TKey): boolean {
    return !!this.get(key);
  }

  /**
   * Removes a key-value pair from the hash map.
   *
   * @param key - The key to remove
   * @returns {TValue | undefined} The removed value if found, undefined otherwise
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

  /**
   * Gets the element and its bucket index for a given key.
   *
   * @param key - The key to look up
   * @returns The element and its index if found, undefined otherwise
   * @private
   */
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

  /**
   * Computes the bucket index for a given key using string hashing.
   *
   * @param key - The key to hash
   * @returns {number} The bucket index
   * @private
   */
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
