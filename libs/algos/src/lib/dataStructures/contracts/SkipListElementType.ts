import { LinkedListElementType } from './LinkedListElementType';

/**
 * Type representing a node in a skip list, a data structure that supports fast search, insertion, and deletion.
 * Each node contains a value, metadata for counting occurrences, segment lengths, and a pointer to a lower level element.
 */
export type SkipListElementType = {
  /**
   * Indicates whether the element is a nil element (a no-operation element used for boundaries or placeholders).
   */
  isNil: boolean;

  /**
   * The value stored in the skip list node.
   */
  value: number;

  /**
   * The number of occurrences of the value or node count for this element.
   */
  count: number;

  /**
   * The segment length, which represents the distance or span between this node and the next in the skip list level.
   */
  segmentLength: number;

  /**
   * A pointer to the corresponding element in the lower level of the skip list.
   * This allows for fast traversal between levels of the skip list.
   */
  lowerLevelElement: LinkedListElementType<SkipListElementType> | undefined;
};
