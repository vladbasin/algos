import { AvlNode } from './AvlNode';

/**
 * Class representing an AVL Tree, a self-balancing binary search tree.
 */
export class AvlTree {
  /**
   * Adds a value to the AVL tree. If the tree is empty, a root node is created.
   * Otherwise, the value is inserted into the appropriate position and the tree is balanced.
   *
   * @param {number} value - The value to be added to the tree.
   * @returns {void}
   */
  public add(value: number): void {
    if (!this._rootNode) {
      this._rootNode = new AvlNode(value, 1);
      return;
    }

    const path: AvlNode[] = [];
    let currentNode: AvlNode | undefined = this._rootNode;
    while (currentNode) {
      path.push(currentNode);

      const nextNode: AvlNode | undefined = currentNode.value > value ? currentNode.left : currentNode.right;
      if (nextNode === undefined) {
        const newNode: AvlNode = new AvlNode(value, 1, currentNode);
        if (currentNode.value > value) {
          currentNode.left = newNode;
        } else {
          currentNode.right = newNode;
        }

        path.push(newNode);
      }

      currentNode = nextNode;
    }

    this.balancePath(path);
  }

  /**
   * Checks if a value exists in the AVL tree.
   *
   * @param {number} value - The value to search for in the tree.
   * @returns {boolean} - True if the value exists in the tree, otherwise false.
   */
  public has(value: number): boolean {
    return !!this._rootNode?.findNodeWithValue(value).node;
  }

  /**
   * Deletes a value from the AVL tree if it exists. The tree is balanced after deletion.
   *
   * @param {number} value - The value to be deleted from the tree.
   * @returns {void}
   */
  public delete(value: number): void {
    const path = this._rootNode?.findNodeWithValue(value).path;
    if (!path || path.length === 0) {
      return;
    }

    const nodeToDelete = path[path.length - 1];

    // Leaf scenario
    if (!nodeToDelete.hasAnyChild()) {
      if (nodeToDelete.parent) {
        nodeToDelete.detachFromParent();
      } else {
        // Edge case root node
        this._rootNode = undefined;
      }
    } else if (nodeToDelete.hasBothChildren()) {
      // 2 children scenario
      const searchResult = nodeToDelete.findSuccessor();
      if (searchResult) {
        const { successor, path: searchResultPath } = searchResult;
        path.push(...searchResultPath);

        nodeToDelete.value = successor.value;
        successor.replaceWith(successor.right);
      }
    } else {
      // One child scenario
      const nodeToDeleteChild = nodeToDelete.left ?? nodeToDelete.right;
      if (nodeToDeleteChild) {
        path.push(nodeToDeleteChild);
        nodeToDelete.replaceWith(nodeToDeleteChild);
      }
    }

    this.balancePath(path);
  }

  /**
   * Converts the AVL tree to a sorted array.
   *
   * @returns {(number | undefined)[]} - An array of values from the tree in sorted order.
   */
  public toSortedArray(): (number | undefined)[] {
    return this._rootNode?.traverseInOrder() ?? [];
  }

  /**
   * Converts the AVL tree to an array representing a full binary tree.
   *
   * @returns {(number | undefined)[]} - An array representing the tree in full binary tree format.
   */
  public toFullBinaryTreeArray(): (number | undefined)[] {
    return this._rootNode?.toFullBinaryTreeArray() ?? [];
  }

  /**
   * Converts the AVL tree to a string representation.
   *
   * @returns {string} - A string representation of the tree. Returns "Tree is empty" if there are no nodes.
   */
  public toString(): string {
    return this._rootNode?.toString() ?? 'Tree is empty';
  }

  private _rootNode: AvlNode | undefined;

  private balancePath(path: AvlNode[]): void {
    const balancingPath = [...path];

    for (let pathIndex = balancingPath.length - 1; pathIndex >= 0; pathIndex--) {
      const currentNode = balancingPath[pathIndex];
      const prevNode = balancingPath[pathIndex + 1];

      currentNode.height = this.getHeight(currentNode);
      const currentNodeBalance = this.getBalance(currentNode);
      const prevNodeBalance = this.getBalance(prevNode);

      if (currentNodeBalance < -1) {
        if (prevNodeBalance < 0) {
          balancingPath[pathIndex] = this.rotateRight(currentNode);
        } else {
          balancingPath[pathIndex + 1] = this.rotateLeft(prevNode);
          balancingPath[pathIndex] = this.rotateRight(currentNode);
        }
      } else if (currentNodeBalance > 1) {
        if (prevNodeBalance > 0) {
          balancingPath[pathIndex] = this.rotateLeft(currentNode);
        } else {
          balancingPath[pathIndex + 1] = this.rotateRight(prevNode);
          balancingPath[pathIndex] = this.rotateLeft(currentNode);
        }
      }
    }
  }

  private rotateLeft(node: AvlNode): AvlNode {
    const replacedWithNode = node.rotateLeft((newRoot) => (this._rootNode = newRoot));

    node.height = this.getHeight(node);
    replacedWithNode.height = this.getHeight(replacedWithNode);

    return replacedWithNode;
  }

  private rotateRight(node: AvlNode): AvlNode {
    const replacedWithNode = node.rotateRight((newRoot) => (this._rootNode = newRoot));

    node.height = this.getHeight(node);
    replacedWithNode.height = this.getHeight(replacedWithNode);

    return replacedWithNode;
  }

  private getHeight(node: AvlNode | undefined): number {
    if (!node) {
      return 0;
    }

    const leftHeight = node.left?.height ?? 0;
    const rightHeight = node.right?.height ?? 0;
    return Math.max(leftHeight, rightHeight) + 1;
  }

  private getBalance(node: AvlNode | undefined): number {
    if (!node) {
      return 0;
    }

    const leftHeight = node.left?.height ?? 0;
    const rightHeight = node.right?.height ?? 0;
    return rightHeight - leftHeight;
  }
}
