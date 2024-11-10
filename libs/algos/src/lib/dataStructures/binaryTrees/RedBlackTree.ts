import { RedBlackNode } from './RedBlackNode';

/**
 * Class representing a Red-Black Tree, a self-balancing binary search tree.
 * This tree maintains balance through color properties and rotations to ensure efficient operations.
 */
export class RedBlackTree {
  /**
   * Adds a value to the Red-Black Tree. If the tree is empty, the root node is created.
   * After insertion, the tree is rebalanced to maintain Red-Black Tree properties.
   *
   * @param {number} value - The value to be added to the tree.
   * @returns {void}
   */
  public add(value: number): void {
    if (this._rootNode.isNilNode()) {
      this._rootNode = new RedBlackNode(value, 'black');
      return;
    }

    let currentNode: RedBlackNode | undefined = this._rootNode;
    while (currentNode) {
      if (currentNode.value === undefined) {
        break;
      }

      const nextNode: RedBlackNode | undefined = currentNode.value > value ? currentNode.left : currentNode.right;

      if (!nextNode || nextNode.isNilNode()) {
        const newNode: RedBlackNode = new RedBlackNode(value, 'red', currentNode);
        if (currentNode.value > value) {
          currentNode.left = newNode;
        } else {
          currentNode.right = newNode;
        }

        this.reBalanceAfterAdding(newNode);
      }

      currentNode = nextNode;
    }
  }

  /**
   * Deletes a value from the Red-Black Tree. After deletion, the tree is rebalanced
   * to maintain the Red-Black Tree properties.
   *
   * @param {number} value - The value to be deleted from the tree.
   * @returns {void}
   */
  public delete(value: number): void {
    const pathToValue = this._rootNode?.findNodeWithValue(value).path;
    const nodeToDelete = pathToValue?.[pathToValue.length - 1];

    if (!nodeToDelete) {
      return;
    }

    let deleteColor = nodeToDelete.color;
    let nodeToReBalance: RedBlackNode | undefined;

    // No children scenario
    if (!nodeToDelete.hasAnyNotNilChild()) {
      if (nodeToDelete.parent) {
        const newNilNode = RedBlackNode.createBlackNilNode();
        nodeToDelete.replaceWith(newNilNode);
        nodeToReBalance = newNilNode;
      } else {
        // Edge case root node
        this._rootNode = RedBlackNode.createBlackNilNode();
      }
    } else if (nodeToDelete.hasBothNotNilChildren()) {
      // Two children scenario
      const searchResult = nodeToDelete?.findSuccessor();
      if (searchResult) {
        const { successor } = searchResult;

        deleteColor = successor.color;
        nodeToReBalance = successor.right;

        nodeToDelete.value = successor.value;
        successor.replaceWith(successor.right);
      }
    } else {
      // One child scenario
      const nodeToDeleteChild = nodeToDelete.getNotNilChild();
      nodeToReBalance = nodeToDeleteChild;

      nodeToDelete.replaceWith(nodeToDeleteChild);
    }

    if (!!this._rootNode && deleteColor === 'black' && nodeToReBalance) {
      this.reBalanceAfterDeleting(nodeToReBalance);
    }
  }

  /**
   * Checks if a value exists in the Red-Black Tree.
   *
   * @param {number} value - The value to search for.
   * @returns {boolean} - True if the value exists, otherwise false.
   */
  public has(value: number): boolean {
    return !!this._rootNode?.findNodeWithValue(value).node;
  }

  /**
   * Converts the Red-Black Tree to a sorted array.
   *
   * @returns {(number | undefined)[]} - An array of values in sorted order.
   */
  public toSortedArray(): (number | undefined)[] {
    return this._rootNode?.traverseInOrder() ?? [];
  }

  /**
   * Converts the Red-Black Tree to a full binary tree array, which includes nil nodes.
   *
   * @param {boolean} [ignoreNilNodes] - If true, nil nodes will be excluded from the array.
   * @returns {(number | undefined)[]} - An array representing the full binary tree.
   */
  public toFullBinaryTreeArray(ignoreNilNodes?: boolean): (number | undefined)[] {
    return this._rootNode?.toFullBinaryTreeArray(ignoreNilNodes) ?? [];
  }

  /**
   * Converts the Red-Black Tree to a string representation, showing node values and their colors.
   *
   * @returns {string} - A string representation of the tree. If the tree is empty, it returns "Tree is empty".
   */
  public toString(): string {
    return this._rootNode?.toString(1, (node) => node?.color[0]) ?? 'Tree is empty';
  }

  /**
   * Retrieves the root node of the Red-Black Tree.
   *
   * @returns {RedBlackNode} - The root node of the tree.
   */
  public get root(): RedBlackNode {
    return this._rootNode;
  }

  private _rootNode: RedBlackNode = RedBlackNode.createBlackNilNode();

  private reBalanceAfterAdding(node: RedBlackNode): void {
    const nodeParent = node.parent;

    // Case 0: root node
    if (!nodeParent) {
      node.color = 'black'; // Case 0: root node
      return;
    }

    // Case 1: black parent
    if (nodeParent.color === 'black') {
      return; // Case 1: parent is black, no rebalancing required
    }

    const m = node; // current
    const n = nodeParent; // parent
    const o = nodeParent.parent; // grandparent
    if (!o) {
      throw new Error('Parent is red, but no grandparent exists. Tree is invalid.');
    }
    const p = n.isLeftChild() ? o.right : o.left; // uncle

    // Case 2.1: red parent & red uncle
    if (n.color === 'red' && p && p.color === 'red') {
      n.color = 'black';
      p.color = 'black';
      o.color = 'red';
      this.reBalanceAfterAdding(o);
      return;
    }

    // Case 2.2: red parent & black/nil uncle
    // Case 2.2.1: new M is left child & parent N is left child
    if (m.isLeftChild() && n.isLeftChild()) {
      this.rotateRight(o);
      o.color = 'red';
      n.color = 'black';
      return;
    }

    // Case 2.2.2: new M is right child & parent N is left child
    if (m.isRightChild() && n.isLeftChild()) {
      this.rotateLeft(n);
      this.reBalanceAfterAdding(n);
      return;
    }

    // Case 2.2.3 (symmetric to 2.2.1): new M is right child & parent N is right child
    if (m.isRightChild() && n.isRightChild()) {
      this.rotateLeft(o);
      o.color = 'red';
      n.color = 'black';
      return;
    }

    // Case 2.2.4 (symmetric to 2.2.2): new M is left child & parent N is right child
    if (m.isLeftChild() && n.isRightChild()) {
      this.rotateRight(n);
      this.reBalanceAfterAdding(n);
      return;
    }

    throw new Error('Unknown case in rebalancing after adding.');
  }

  private reBalanceAfterDeleting(node: RedBlackNode): void {
    let currentNode = node;

    while (currentNode.parent && currentNode.color === 'black') {
      const n = currentNode; // current
      let p = currentNode.parent; // parent
      let s = n.getSibling()!; // sibling
      let c = n.getCloseNephew()!; // close nephew (child of sibling in the same direction)
      let d = n.getDistantNephew()!; // distant nephew (child of sibling in the opposite direction)

      const rotateSameDir = n.isLeftChild() ? this.rotateLeft : this.rotateRight;
      const rotateDiffDir = n.isLeftChild() ? this.rotateRight : this.rotateLeft;

      // Case 1: Root is deleted doesn't require re-balancing
      // No code needed

      // Case 2: P, S, and S’s children are black
      if (p.color === 'black' && s.color === 'black' && c.color === 'black' && d.color === 'black') {
        s.color = 'red';
        currentNode = p;
        continue;
      }

      // Case 3: The sibling S is red, so P and the nephews C and D have to be black
      if (s.color === 'red') {
        rotateSameDir.call(this, p);
        p.color = 'red';
        s.color = 'black';
        p = n.parent!;
        s = n.getSibling()!;
        c = n.getCloseNephew()!;
        d = n.getDistantNephew()!;
      }

      // Case 4: The sibling S and S’s children are black, but P is red.
      if (p.color === 'red' && s.color === 'black' && c.color === 'black' && d.color === 'black') {
        s.color = 'red';
        p.color = 'black';
        break;
      }

      // Case 5: The sibling S is black, S’s close child C is red, and S’s distant child D is black.
      if (s.color === 'black' && c.color === 'red' && d.color === 'black') {
        rotateDiffDir.call(this, s);
        s.color = 'red';
        c.color = 'black';
        p = n.parent!;
        s = n.getSibling()!;
        c = n.getCloseNephew()!;
        d = n.getDistantNephew()!;
      }

      // Case 6: The sibling S is black, S’s distant child D is red.
      rotateSameDir.call(this, p);
      s.color = p.color;
      p.color = 'black';
      d.color = 'black';
      break;
    }

    node.color = 'black';
  }

  private rotateLeft(node: RedBlackNode): RedBlackNode {
    return node.rotateLeft((newRoot) => (this._rootNode = newRoot));
  }

  private rotateRight(node: RedBlackNode): RedBlackNode {
    return node.rotateRight((newRoot) => (this._rootNode = newRoot));
  }
}
