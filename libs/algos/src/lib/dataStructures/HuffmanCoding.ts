import { HuffmanTreeNode } from './HuffmanTreeNode';
import { Stack } from './Stack';

export type HuffmanCodingMap = {
  elements: { char: string; code: string }[];
};

export type HuffmanEncodingResult = {
  encoded: string;
  map: HuffmanCodingMap;
};

/**
 * Class implementing Huffman Coding for text compression and decompression.
 */
export class HuffmanCoding {
  /**
   * Builds a Huffman Tree from a given text string.
   * The tree is used to encode characters based on their frequency in the text.
   *
   * @param text - The input text to build the Huffman Tree from.
   * @returns {HuffmanTreeNode} - The root node of the constructed Huffman Tree.
   * @throws Error - Throws an error if the input text is empty.
   */
  public buildTree(text: string): HuffmanTreeNode {
    if (text.length === 1) {
      return new HuffmanTreeNode(1, text);
    }

    if (!text) {
      throw new Error('Text cannot be empty');
    }

    const charToFreqMap: Record<string, number | undefined> = {};

    for (let i = 0; i < text.length; i++) {
      charToFreqMap[text[i]] = (charToFreqMap[text[i]] ?? 0) + 1;
    }

    let nodeData = Object.entries(charToFreqMap).map(([char, freq]) => new HuffmanTreeNode(freq ?? 0, char));

    while (nodeData.length > 1) {
      nodeData = nodeData.sort((a, b) => a.value - b.value);

      const left = nodeData.shift();
      const right = nodeData.shift();

      if (!left || !right) {
        throw new Error('Bug in implementation. Impossible case based on condition checks');
      }

      const merged = new HuffmanTreeNode(left.value + right.value, undefined, undefined, left, right);
      left.parent = merged;
      right.parent = merged;
      nodeData.push(merged);
    }

    return nodeData[0];
  }

  /**
   * Builds a Huffman Coding Map from the given Huffman Tree.
   * The map contains the encoding for each character in the input text.
   *
   * @param huffmanTree - The root node of the Huffman Tree.
   * @returns {HuffmanCodingMap} - A map containing characters and their respective Huffman codes.
   */
  public buildMap(huffmanTree: HuffmanTreeNode): HuffmanCodingMap {
    const elements: HuffmanCodingMap['elements'] = [];

    const stack = new Stack<{ node: HuffmanTreeNode; code: string; direction?: '0' | '1' }>();
    stack.push({ node: huffmanTree, code: '', direction: huffmanTree.char ? '0' : undefined });
    let current = stack.pop();
    while (current) {
      const { node, code, direction } = current;

      const newCode = code + (direction ?? '');

      if (node.char) {
        elements.push({ char: node.char, code: newCode });
      }

      if (node.left) {
        stack.push({ node: node.left, code: newCode, direction: '0' });
      }

      if (node.right) {
        stack.push({ node: node.right, code: newCode, direction: '1' });
      }

      current = stack.pop();
    }

    return { elements };
  }

  /**
   * Encodes a given text string using Huffman Coding.
   *
   * @param text - The input text to encode.
   * @returns {HuffmanEncodingResult} - The encoded string and the corresponding Huffman coding map.
   * @throws Error - Throws an error if the input contains characters not present in the map.
   */
  public encode(text: string): HuffmanEncodingResult {
    const map = this.buildMap(this.buildTree(text));
    const charToCodeMap = map.elements.reduce(
      (result, { char, code }) => result.set(char, code),
      new Map<string, string>()
    );

    const encoded = text.split('').reduce((result, current) => {
      const code = charToCodeMap.get(current);
      if (code === undefined) {
        throw new Error('Unexpected char in original text');
      }
      return result + code;
    }, '');

    return {
      encoded,
      map,
    };
  }

  /**
   * Decodes a Huffman encoded string back to its original text using the given Huffman coding map.
   *
   * @param encodedText - The encoded string to decode.
   * @param map - The Huffman coding map used for encoding.
   * @returns string - The decoded original text.
   * @throws Error - Throws an error if the encoding map is incorrect or the text is malformed.
   */
  public decode(encodedText: string, map: HuffmanCodingMap): string {
    const codeToCharMap = map.elements.reduce(
      (result, { char, code }) => result.set(code, char),
      new Map<string, string>()
    );

    let result = '';
    let buffer = '';
    for (let i = 0; i < encodedText.length; i++) {
      buffer += encodedText[i];

      const char = codeToCharMap.get(buffer);
      if (char) {
        buffer = '';
        result += char;
      }
    }

    if (buffer.length > 0) {
      throw new Error('Encoding was not done properly or map is incorrect');
    }

    return result;
  }
}
