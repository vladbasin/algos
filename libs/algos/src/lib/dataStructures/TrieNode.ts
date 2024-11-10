/**
 * Class representing a node in a Trie (prefix tree).
 * Each node contains part of a word, a flag indicating if it completes a word, and references to its parent and children.
 */
export class TrieNode {
  /**
   * Creates a new TrieNode instance.
   *
   * @param {string} text - The text fragment stored in this node.
   * @param {boolean} isComplete - A flag indicating whether this node completes a word.
   * @param {TrieNode | undefined} parent - A reference to the parent node, or undefined if this node is the root.
   */
  constructor(public readonly text: string, public isComplete: boolean, public readonly parent: TrieNode | undefined) {}

  /**
   * Checks if this node has a child node with the specified text.
   *
   * @param {string} text - The text of the child node to check for.
   * @returns {boolean} - True if the child node exists, false otherwise.
   */
  public hasChild(text: string): boolean {
    return !!this._children[text];
  }

  /**
   * Checks if this node has any children.
   *
   * @returns {boolean} - True if the node has one or more children, false otherwise.
   */
  public hasAnyChild(): boolean {
    return this._childrenCount > 0;
  }

  /**
   * Removes the child node with the specified text from this node.
   *
   * @param {string} text - The text of the child node to remove.
   * @returns {void}
   */
  public removeChild(text: string): void {
    if (!this.hasChild(text)) {
      return;
    }

    delete this._children[text];
    this._childrenCount--;
  }

  /**
   * Removes this node from its parent. Throws an error if this node does not have a parent.
   *
   * @returns {void}
   * @throws {Error} - If this node does not have a parent.
   */
  public removeSelf(): void {
    if (!this.parent) {
      throw new Error('Cannot remove TrieNode which does not have parent');
    }

    this.parent.removeChild(this.text);
  }

  /**
   * Retrieves the child node with the specified text.
   *
   * @param {string} text - The text of the child node to retrieve.
   * @returns {TrieNode | undefined} - The child node if found, or undefined otherwise.
   */
  public getChild(text: string): TrieNode | undefined {
    return this._children[text];
  }

  /**
   * Retrieves the child node with the specified text, or creates it using the provided creator function if it doesn't exist.
   *
   * @param {string} text - The text of the child node to retrieve or create.
   * @param {() => TrieNode} creator - A function that creates a new TrieNode if the child doesn't exist.
   * @returns {TrieNode} - The existing or newly created child node.
   */
  public getOrCreateChild(text: string, creator: () => TrieNode): TrieNode {
    let result = this._children[text];

    if (!result) {
      result = creator();
      this._children[text] = result;
      this._childrenCount += 1;
    }

    return result;
  }

  /**
   * The number of children this node has.
   *
   * @private
   * @type {number}
   */
  private _childrenCount = 0;

  /**
   * A dictionary storing the child nodes of this node, keyed by the child node's text.
   *
   * @private
   * @type {Record<string, TrieNode | undefined>}
   */
  private _children: Record<string, TrieNode | undefined> = {};
}
