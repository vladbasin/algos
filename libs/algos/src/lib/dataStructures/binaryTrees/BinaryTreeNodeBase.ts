import { Stack } from '../Stack';

/**
 * Base class for binary tree nodes, providing essential operations
 * for interacting with tree structure such as rotation, traversal, and node relationships.
 */
export abstract class BinaryTreeNodeBase<T extends BinaryTreeNodeBase<T>> {
  /**
   * Constructor for creating a binary tree node.
   *
   * @param {number} [value] - The value stored in the node.
   * @param {T} [parent] - The parent of the current node.
   * @param {T} [left] - The left child of the current node.
   * @param {T} [right] - The right child of the current node.
   */
  public constructor(public value?: number, public parent?: T, public left?: T, public right?: T) {}

  /**
   * Checks if the current node is a Nil node (undefined value).
   *
   * @returns {boolean} - True if the node has an undefined value, otherwise false.
   */
  public isNilNode(): boolean {
    return this.value === undefined;
  }

  /**
   * Determines if the node has any child nodes.
   *
   * @returns {boolean} - True if the node has either a left or right child.
   */
  public hasAnyChild(): boolean {
    return !!this.left || !!this.right;
  }

  /**
   * Determines if the node has any non-nil child nodes.
   *
   * @returns {boolean} - True if the node has at least one non-nil child.
   */
  public hasAnyNotNilChild(): boolean {
    return (!!this.left && !this.left.isNilNode()) || (!!this.right && !this.right.isNilNode());
  }

  /**
   * Determines if the node has both left and right children.
   *
   * @returns {boolean} - True if both children are present, false otherwise.
   */
  public hasBothChildren(): boolean {
    return !!this.left && !!this.right;
  }

  /**
   * Determines if both children of the node are non-nil.
   *
   * @returns {boolean} - True if both children are present and non-nil.
   */
  public hasBothNotNilChildren(): boolean {
    return !!this.left && !this.left.isNilNode() && !!this.right && !this.right.isNilNode();
  }

  /**
   * Checks if the node is a left child of its parent.
   *
   * @returns {boolean} - True if the node is the left child of its parent.
   */
  public isLeftChild(): boolean {
    return !!this.parent && this.parent.left === this.asNode();
  }

  /**
   * Checks if the node is a right child of its parent.
   *
   * @returns {boolean} - True if the node is the right child of its parent.
   */
  public isRightChild(): boolean {
    return !!this.parent && this.parent.right === this.asNode();
  }

  /**
   * Returns the non-nil child of the node, if one exists.
   *
   * @returns {T | undefined} - The non-nil child of the node, or undefined if both children are nil.
   */
  public getNotNilChild(): T | undefined {
    if (this.left && !this.left.isNilNode()) {
      return this.left.asNode();
    }
    if (this.right && !this.right.isNilNode()) {
      return this.right.asNode();
    }
    return undefined;
  }

  /**
   * Retrieves the sibling of the current node, if it has one.
   *
   * @returns {T | undefined} - The sibling of the node, or undefined if no sibling exists.
   */
  public getSibling(): T | undefined {
    if (!this.parent) {
      return undefined;
    }
    return this.isLeftChild() ? this.parent.right : this.parent.left;
  }

  /**
   * Retrieves the close nephew (left child of the node's sibling if this node is left child, or right child of the node's sibling otherwise).
   *
   * @returns {T | undefined} - The close nephew, or undefined if not applicable.
   */
  public getCloseNephew(): T | undefined {
    const sibling = this.getSibling();
    return this.isLeftChild() ? sibling?.left : sibling?.right;
  }

  /**
   * Retrieves the distant nephew (right child of the node's sibling if this node is left child, or left child of the node's sibling otherwise).
   *
   * @returns {T | undefined} - The distant nephew, or undefined if not applicable.
   */
  public getDistantNephew(): T | undefined {
    const sibling = this.getSibling();
    return this.isLeftChild() ? sibling?.right : sibling?.left;
  }

  /**
   * Detaches the node from its parent, effectively removing it from the tree.
   */
  public detachFromParent(): void {
    this.replaceWith(undefined);
  }

  /**
   * Replaces the current node with another node.
   *
   * @param {T | undefined} node - The node to replace the current one, or undefined to remove it.
   */
  public replaceWith(node: T | undefined): void {
    if (!this.parent) {
      return;
    }
    if (this.isLeftChild()) {
      this.parent.left = node;
    } else {
      this.parent.right = node;
    }
    if (node) {
      node.parent = this.parent;
    }
    this.parent = undefined;
  }

  /**
   * Finds the in-order successor of the node.
   *
   * @returns {{ successor: T; path: T[] } | undefined} - The successor node and the path to it, or undefined if no successor exists.
   */
  public findSuccessor(): { successor: T; path: T[] } | undefined {
    const path: T[] = [];
    let successor = this.right;
    if (successor && !successor.isNilNode()) {
      path.push(successor);
    }
    while (successor && successor.left && !successor.left.isNilNode()) {
      successor = successor.left;
      if (successor) {
        path.push(successor);
      }
    }
    return successor && !successor.isNilNode() ? { successor, path } : undefined;
  }

  /**
   * Finds a node with a specific value in the tree.
   *
   * @param {number} value - The value to search for.
   * @returns {{ node?: T; path: T[] }} - The node and the path to it if found, otherwise an empty path.
   */
  public findNodeWithValue(value: number): { node?: T; path: T[] } {
    const path: T[] = [];
    let currentNode: T | undefined = this.asNode();
    while (currentNode) {
      if (currentNode.value === undefined) {
        break;
      }
      path.push(currentNode);
      if (currentNode.value === value) {
        return { path, node: currentNode };
      }
      currentNode = currentNode.value > value ? currentNode.left : currentNode.right;
    }
    return { path: [] };
  }

  /**
   * Performs a left rotation on the node.
   *
   * @param {(node: T) => void} setRootNode - Function to set the root node of the tree, if it was affected by rotation.
   * @returns {T} - The new root node after the rotation.
   */
  public rotateLeft(setRootNode: (node: T) => void): T {
    const node = this.asNode();
    const originalNodeRightChild = node.right;
    const originalNodeRightChildLeftChild = originalNodeRightChild?.left;
    const originalNodeParent = node.parent;

    if (!originalNodeRightChild) {
      throw new Error('Cannot rotate left a node without right child');
    }

    originalNodeRightChild.left = node;
    if (originalNodeParent) {
      node.replaceWith(originalNodeRightChild);
    } else {
      setRootNode(originalNodeRightChild);
      originalNodeRightChild.parent = undefined;
    }

    originalNodeRightChild.left = node;
    node.parent = originalNodeRightChild;

    node.right = originalNodeRightChildLeftChild;
    if (originalNodeRightChildLeftChild) {
      originalNodeRightChildLeftChild.parent = node;
    }

    return originalNodeRightChild;
  }

  /**
   * Performs a right rotation on the node.
   *
   * @param {(node: T) => void} setRootNode - Function to set the root node of the tree, if it was affected by rotation.
   * @returns {T} - The new root node after the rotation.
   */
  public rotateRight(setRootNode: (node: T) => void): T {
    const node = this.asNode();
    const originalNodeLeftChild = node.left;
    const originalNodeLeftChildRightChild = originalNodeLeftChild?.right;
    const originalNodeParent = node.parent;

    if (!originalNodeLeftChild) {
      throw new Error('Cannot rotate right a node without left child');
    }

    if (originalNodeParent) {
      node.replaceWith(originalNodeLeftChild);
    } else {
      setRootNode(originalNodeLeftChild);
      originalNodeLeftChild.parent = undefined;
    }

    originalNodeLeftChild.right = node;
    node.parent = originalNodeLeftChild;

    node.left = originalNodeLeftChildRightChild;
    if (originalNodeLeftChildRightChild) {
      originalNodeLeftChildRightChild.parent = node;
    }

    return originalNodeLeftChild;
  }

  /**
   * Converts the tree to an array representing a full binary tree.
   *
   * @param {boolean} [ignoreNilNodes] - If true, nil nodes are ignored in the resulting array.
   * @returns {(number | undefined)[]} - An array representing the full binary tree.
   */
  public toFullBinaryTreeArray(ignoreNilNodes?: boolean): (number | undefined)[] {
    const result: (number | undefined)[] = [];
    let currentLevelNodes: (T | undefined)[] = [this.asNode()];
    let hasRealNode = !!currentLevelNodes[0];
    while (hasRealNode) {
      hasRealNode = false;
      const newLevelNodes: (T | undefined)[] = [];
      currentLevelNodes.forEach((node) => {
        result.push(node?.value);
        if (ignoreNilNodes !== true || node?.isNilNode() !== true) {
          newLevelNodes.push(node?.left, node?.right);
          hasRealNode = hasRealNode || !!node?.left || !!node?.right;
        }
      });
      currentLevelNodes = newLevelNodes;
    }
    return result;
  }

  /**
   * Converts the tree to a string representation.
   *
   * @param {number} [extraLength] - Additional length to pad each node value.
   * @param {(node: T | undefined) => string | undefined} [getExtraSuffix] - A function to add an extra suffix to each node value in the string representation.
   * @returns {string} - The string representation of the tree.
   */
  public toString(extraLength?: number, getExtraSuffix?: (node: T | undefined) => string | undefined): string {
    const perLevelNodes: (T | undefined)[][] = [];
    let maxValueDigits = 1;

    perLevelNodes[0] = [this.asNode()];
    let currentLevel = 0;
    let hasRealNode = true;
    while (hasRealNode) {
      hasRealNode = false;
      const newLevelNodes: (T | undefined)[] = [];
      perLevelNodes[currentLevel].forEach((node) => {
        if (node) {
          if (node.value === undefined) {
            maxValueDigits = Math.max(maxValueDigits, this._nilValueString.length);
          } else {
            maxValueDigits = Math.max(node.value.toString().length, maxValueDigits);
          }
        }
        newLevelNodes.push(node?.left, node?.right);
        hasRealNode = hasRealNode || !!node?.left || !!node?.right;
      });
      if (hasRealNode) {
        perLevelNodes.push(newLevelNodes);
      }
      currentLevel++;
    }

    const digitsLength = maxValueDigits + (extraLength ?? 0);

    const resultLines: string[] = [];
    perLevelNodes.reverse().forEach((level, levelIndex) => {
      let line = '';
      const levelItemLength = Math.pow(2, levelIndex) * (digitsLength + 1);
      level.forEach((node) => {
        const suffix = getExtraSuffix?.(node);
        let nodeValue = node?.value ?? '';
        if (node?.isNilNode() === true) {
          nodeValue = this._nilValueString;
        }
        line += `${nodeValue}${suffix ?? ''}`.padEnd(levelItemLength);
      });
      resultLines.push(line);
    });

    return resultLines.reverse().join('\n');
  }

  /**
   * Traverses the tree in in-order traversal and returns an array of node values.
   *
   * @returns {(number | undefined)[]} - An array of values in in-order traversal order.
   */
  public traverseInOrder(): (number | undefined)[] {
    return this.traverseInOrderAsNodes().map((t) => t.value);
  }

  /**
   * Traverses the tree in in-order traversal and returns an array of nodes.
   *
   * @returns {(number | undefined)[]} - An array of nodes in in-order traversal order.
   */
  public traverseInOrderAsNodes(): T[] {
    const result: T[] = [];
    const stack = new Stack<T>();
    stack.push(this.asNode());
    const processedNodes = new Set<T>();

    let current: T | undefined;
    while ((current = stack.peek())) {
      if (current.left && !processedNodes.has(current.left) && !current.left.isNilNode()) {
        stack.push(current.left);
        continue;
      }
      result.push(current);
      stack.pop();
      processedNodes.add(current);
      if (current.right && !processedNodes.has(current.right) && !current.right.isNilNode()) {
        stack.push(current.right);
      }
    }
    return result;
  }

  /**
   * Traverses the tree recursively in in-order traversal and returns an array of node values.
   *
   * @param {T | undefined} [node] - The node to start traversal from, or defaults to the current node.
   * @returns {(number | undefined)[]} - An array of values in in-order traversal order.
   */
  public traverseInOrderRecursive(node?: T | undefined): (number | undefined)[] {
    const result = [];
    const targetNode = node ?? this.asNode();
    if (targetNode.left && !targetNode.left.isNilNode()) {
      result.push(...this.traverseInOrderRecursive(targetNode.left));
    }
    result.push(targetNode.value);
    if (targetNode.right && !targetNode.right.isNilNode()) {
      result.push(...this.traverseInOrderRecursive(targetNode.right));
    }
    return result;
  }

  /**
   * Helper method to cast the current object as a node of type T.
   *
   * @protected
   * @returns {T} - The current node cast as type T.
   */
  protected asNode(): T {
    return this as BinaryTreeNodeBase<T> as T;
  }

  private readonly _nilValueString = '*';
}
