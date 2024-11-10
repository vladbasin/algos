import { BinaryTreeNodeBase } from './BinaryTreeNodeBase';

/**
 * Class representing a node in a Red-Black Tree. Extends the BinaryTreeNodeBase class with
 * additional properties such as node color and automatic nil node creation.
 */
export class RedBlackNode extends BinaryTreeNodeBase<RedBlackNode> {
  /**
   * Creates a Red-Black Tree node.
   *
   * @param {number | undefined} value - The value stored in the node, or undefined for nil nodes.
   * @param {'red' | 'black'} color - The color of the node, either 'red' or 'black'.
   * @param {RedBlackNode} [parent] - The parent of the current node, if any.
   * @param {RedBlackNode} [left] - The left child of the node.
   * @param {RedBlackNode} [right] - The right child of the node.
   */
  public constructor(
    public value: number | undefined,
    public color: 'red' | 'black',
    public parent?: RedBlackNode,
    public left?: RedBlackNode,
    public right?: RedBlackNode
  ) {
    super(value, parent, left, right);

    // Automatically create black nil nodes for non-nil nodes
    this.left = left ?? value === undefined ? undefined : RedBlackNode.createBlackNilNode();
    this.right = right ?? value === undefined ? undefined : RedBlackNode.createBlackNilNode();
  }

  /**
   * Creates a black nil node for the Red-Black Tree.
   * Nil nodes are represented by undefined values and black color.
   *
   * @returns {RedBlackNode} - A RedBlackNode with undefined value and black color.
   */
  public static createBlackNilNode(): RedBlackNode {
    return new RedBlackNode(undefined, 'black');
  }
}
