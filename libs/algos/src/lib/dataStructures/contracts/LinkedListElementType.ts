/**
 * Type representing a node in a doubly linked list.
 * Each node contains a value and references to both the next and previous nodes in the list.
 *
 * @template T - The type of the value stored in the node.
 */
export type LinkedListElementType<T> = {
  /**
   * The value stored in the linked list node.
   */
  value: T;

  /**
   * A reference to the next node in the list, or undefined if this is the last node.
   */
  next: LinkedListElementType<T> | undefined;

  /**
   * A reference to the previous node in the list, or undefined if this is the first node.
   */
  prev: LinkedListElementType<T> | undefined;
};
