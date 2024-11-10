import { BinaryTreeNodeBase } from './BinaryTreeNodeBase';

/**
 * Class representing a node in an AVL Tree. Extends the BinaryTreeNodeBase class
 * by adding a height property, which is crucial for maintaining the balance of the tree.
 */
export class AvlNode extends BinaryTreeNodeBase<AvlNode> {
  /**
   * Creates a new AVL Tree node.
   *
   * @param {number} value - The value stored in the node.
   * @param {number} height - The height of the node, which helps in balancing the tree.
   * @param {AvlNode} [parent] - The parent of the current node, if any.
   * @param {AvlNode} [left] - The left child of the node.
   * @param {AvlNode} [right] - The right child of the node.
   */
  public constructor(
    public value: number,
    public height: number,
    public parent?: AvlNode,
    public left?: AvlNode,
    public right?: AvlNode
  ) {
    super(value, parent, left, right);
  }
}
