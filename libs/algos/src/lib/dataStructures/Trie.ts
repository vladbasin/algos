import { TrieNode } from './TrieNode';

/**
 * Class representing a Trie (prefix tree) data structure.
 * This Trie supports fast operations for adding words, checking for word or prefix existence, and removing words.
 */
export class Trie {
  /**
   * Adds a word to the Trie. If the word already exists, it marks the end node as complete.
   *
   * @param {string} text - The word to be added to the Trie.
   * @returns {void}
   * @throws {Error} - If the provided text is empty.
   */
  public add(text: string): void {
    this.ensureTextNotEmpty(text);

    let currentNode = this._rootNode;

    for (let index = 0; index < text.length; index += 1) {
      const char = text[index];
      const isLastChar = index === text.length - 1;
      currentNode = currentNode.getOrCreateChild(char, () => new TrieNode(char, isLastChar, currentNode));
      if (isLastChar) {
        currentNode.isComplete = true;
      }
    }
  }

  /**
   * Checks if the specified text exists in the Trie. The search mode can be either 'prefix' or 'complete' (full word).
   *
   * @param {string} text - The text to search for in the Trie.
   * @param {'prefix' | 'complete'} mode - The search mode: 'prefix' checks if the text is a prefix, 'complete' checks for a full word.
   * @returns {boolean} - True if the text is found according to the search mode, otherwise false.
   * @throws {Error} - If the provided text is empty.
   */
  public has(text: string, mode: 'prefix' | 'complete'): boolean {
    this.ensureTextNotEmpty(text);

    let currentNode: TrieNode | undefined = this._rootNode;

    for (let index = 0; index < text.length; index += 1) {
      const char = text[index];
      currentNode = currentNode?.getChild(char);

      if (!currentNode) {
        return false;
      }

      const isLastChar = index === text.length - 1;
      if (isLastChar) {
        return mode === 'prefix' || currentNode.isComplete;
      }
    }

    return false;
  }

  /**
   * Removes a word from the Trie. If the word doesn't exist, no action is taken.
   * It will remove unnecessary nodes that do not form part of any other word in the Trie.
   *
   * @param {string} text - The word to be removed from the Trie.
   * @returns {void}
   * @throws {Error} - If the provided text is empty.
   */
  public remove(text: string): void {
    this.ensureTextNotEmpty(text);

    const path: TrieNode[] = [this._rootNode];

    for (let index = 0; index < text.length; index += 1) {
      const char = text[index];
      const currentNode = path[path.length - 1];

      const nextNode = currentNode.getChild(char);
      if (!nextNode) {
        // No path for specified text, nothing to remove
        return;
      }
      path.push(nextNode);

      const isLastChar = index === text.length - 1;
      if (isLastChar && !nextNode.isComplete) {
        // Word not found
        return;
      }
    }

    let currentIndex = path.length - 1;
    while (currentIndex > 0) {
      const isCurrentIndexLast = path.length - 1 === currentIndex;
      const currentNode = path[currentIndex];

      // Unmark as complete if it's the last node of the word
      if (currentNode.isComplete && isCurrentIndexLast) {
        currentNode.isComplete = false;
      }

      // Remove the node if it's no longer part of any word
      if (!currentNode.isComplete && !currentNode.hasAnyChild()) {
        currentNode.removeSelf();
      }

      currentIndex -= 1;
    }
  }

  /**
   * Ensures that the provided text is not empty, throwing an error if it is.
   *
   * @param {string} text - The text to validate.
   * @returns {void}
   * @throws {Error} - If the text is empty.
   */
  private ensureTextNotEmpty(text: string): void {
    if (!text) {
      throw new Error('Empty text is not allowed for a Trie');
    }
  }

  /**
   * The root node of the Trie. It does not store any meaningful value.
   *
   * @private
   * @type {TrieNode}
   */
  private _rootNode = new TrieNode('', false, undefined);
}
