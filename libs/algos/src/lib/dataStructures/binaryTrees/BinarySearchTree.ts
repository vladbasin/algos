import { BinarySearchTreeNode } from './BinarySearchTreeNode';

/**
 * Class representing a Binary Search Tree (BST), a data structure that stores items in sorted order.
 */
export class BinarySearchTree {
  /**
   * Adds a value to the Binary Search Tree. If the tree is empty, a root node is created.
   * Otherwise, the value is inserted in the appropriate position based on BST rules.
   *
   * @param {number} value - The value to be added to the tree.
   * @returns {void}
   */
  public add(value: number): void {
    if (this._rootNode === undefined) {
      this._rootNode = new BinarySearchTreeNode(value);
      return;
    }

    let currentNode: BinarySearchTreeNode | undefined = this._rootNode;
    while (currentNode) {
      const nextNode: BinarySearchTreeNode | undefined =
        currentNode.value > value ? currentNode.left : currentNode.right;

      if (nextNode === undefined) {
        const newNode = new BinarySearchTreeNode(value, currentNode);
        if (currentNode.value > value) {
          currentNode.left = newNode;
        } else {
          currentNode.right = newNode;
        }
      }

      currentNode = nextNode;
    }
  }

  /**
   * Checks if a value exists in the Binary Search Tree.
   *
   * @param {number} value - The value to search for in the tree.
   * @returns {boolean} - True if the value exists in the tree, otherwise false.
   */
  public has(value: number): boolean {
    return !!this._rootNode?.findNodeWithValue(value).node;
  }

  /**
   * Deletes a value from the Binary Search Tree if it exists. The structure of the tree is maintained after deletion.
   *
   * @param {number} value - The value to be deleted from the tree.
   * @returns {void}
   */
  public delete(value: number): void {
    const nodeToDelete = this._rootNode?.findNodeWithValue(value).node;

    if (!nodeToDelete) {
      return;
    }

    // Leaf scenario
    if (!nodeToDelete.hasAnyChild()) {
      if (nodeToDelete.parent) {
        nodeToDelete.detachFromParent();
      } else {
        // Edge case root node
        this._rootNode = undefined;
      }
      return;
    } else if (nodeToDelete.hasBothChildren()) {
      // 2 children scenario
      const searchResult = nodeToDelete.findSuccessor();
      if (searchResult) {
        const { successor } = searchResult;
        nodeToDelete.value = successor.value;
        successor.replaceWith(successor.right);
      }
    } else {
      // One child scenario
      const nodeToDeleteChild = nodeToDelete.left ?? nodeToDelete.right;
      if (nodeToDeleteChild) {
        nodeToDelete.replaceWith(nodeToDeleteChild);
      }
    }
  }

  /**
   * Converts the Binary Search Tree to a sorted array.
   *
   * @returns {(number | undefined)[]} - An array of values from the tree in sorted order.
   */
  public toSortedArray(): (number | undefined)[] {
    return this._rootNode?.traverseInOrder() ?? [];
  }

  /**
   * Converts the Binary Search Tree to a sorted array using a recursive method.
   *
   * @returns {(number | undefined)[]} - An array of values from the tree in sorted order.
   */
  public toSortedArrayRecursive(): (number | undefined)[] {
    return this._rootNode?.traverseInOrderRecursive() ?? [];
  }

  /**
   * Converts the Binary Search Tree to an array representing a full binary tree.
   *
   * @returns {(number | undefined)[]} - An array representing the tree in full binary tree format.
   */
  public toFullBinaryTreeArray(): (number | undefined)[] {
    return this._rootNode?.toFullBinaryTreeArray() ?? [];
  }

  /**
   * Converts the Binary Search Tree to a string representation.
   *
   * @returns {string} - A string representation of the tree. Returns "Tree is empty" if there are no nodes.
   */
  public toString(): string {
    return this._rootNode?.toString() ?? 'Tree is empty';
  }

  private _rootNode: BinarySearchTreeNode | undefined;
}
