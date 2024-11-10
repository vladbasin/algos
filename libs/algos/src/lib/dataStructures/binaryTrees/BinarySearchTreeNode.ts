import { BinaryTreeNodeBase } from './BinaryTreeNodeBase';

/**
 * Class representing a node in a Binary Search Tree (BST). Extends the BinaryTreeNodeBase class
 * by storing values and providing references to parent, left, and right children.
 */
export class BinarySearchTreeNode extends BinaryTreeNodeBase<BinarySearchTreeNode> {
  /**
   * Creates a new Binary Search Tree node.
   *
   * @param {number} value - The value stored in the node.
   * @param {BinarySearchTreeNode} [parent] - The parent of the current node, if any.
   * @param {BinarySearchTreeNode} [left] - The left child of the node.
   * @param {BinarySearchTreeNode} [right] - The right child of the node.
   */
  public constructor(
    public value: number,
    public parent?: BinarySearchTreeNode,
    public left?: BinarySearchTreeNode,
    public right?: BinarySearchTreeNode
  ) {
    super(value, parent, left, right);
  }
}
