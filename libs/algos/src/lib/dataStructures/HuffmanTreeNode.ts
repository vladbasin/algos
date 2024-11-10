import { BinaryTreeNodeBase } from './binaryTrees';

/**
 * Represents a node in a Huffman Tree used for text compression.
 * Extends the base BinaryTreeNode with additional properties for storing character information.
 */
export class HuffmanTreeNode extends BinaryTreeNodeBase<HuffmanTreeNode> {
  /**
   * Creates a new instance of HuffmanTreeNode.
   *
   * @param value - The frequency or value of the node (used for Huffman coding).
   * @param char - The character represented by this node (if any).
   * @param parent - (Optional) The parent node in the tree.
   * @param left - (Optional) The left child node.
   * @param right - (Optional) The right child node.
   */
  public constructor(
    public value: number,
    public char: string | undefined,
    public parent?: HuffmanTreeNode,
    public left?: HuffmanTreeNode,
    public right?: HuffmanTreeNode
  ) {
    super(value, parent, left, right);
  }

  /**
   * Returns a string representation of the Huffman Tree node.
   * By default, it shows the character represented by the node or a space if the node is a non-leaf.
   *
   * @returns string - A string representing the node.
   */
  public toString(): string {
    return super.toString(1, (node) => node?.char || ' ');
  }
}
