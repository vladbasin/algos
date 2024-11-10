import { HuffmanCoding } from '../../lib';

describe('HuffmanCoding', () => {
  let huffmanCoding: HuffmanCoding;

  beforeEach(() => {
    huffmanCoding = new HuffmanCoding();
  });

  describe('buildTree', () => {
    it('should build correct tree for the word "lossless"', () => {
      const tree = huffmanCoding.buildTree('lossless');

      expect(tree.traverseInOrderAsNodes().map(({ char, value }) => ({ char, value }))).toEqual([
        { char: 's', value: 4 },
        { char: undefined, value: 8 },
        { char: 'l', value: 2 },
        { char: undefined, value: 4 },
        { char: 'o', value: 1 },
        { char: undefined, value: 2 },
        { char: 'e', value: 1 },
      ]);
    });

    it('should throw an error for empty string', () => {
      expect(() => huffmanCoding.buildTree('')).toThrow('Text cannot be empty');
    });

    it('should handle single character input correctly', () => {
      const tree = huffmanCoding.buildTree('a');
      expect(tree.char).toBe('a');
      expect(tree.value).toBe(1);
      expect(tree.left).toBeUndefined();
      expect(tree.right).toBeUndefined();
    });

    it('should handle repeated character input correctly', () => {
      const tree = huffmanCoding.buildTree('aaaa');
      expect(tree.char).toBe('a');
      expect(tree.value).toBe(4);
      expect(tree.left).toBeUndefined();
      expect(tree.right).toBeUndefined();
    });

    it('should handle input with all unique characters correctly', () => {
      const tree = huffmanCoding.buildTree('abcdef');
      const frequencies = tree.traverseInOrderAsNodes().map(({ char, value }) => ({ char, value }));

      expect(frequencies).toEqual([
        { char: 'e', value: 1 },
        { char: undefined, value: 2 },
        { char: 'f', value: 1 },
        { char: undefined, value: 6 },
        { char: 'a', value: 1 },
        { char: undefined, value: 2 },
        { char: 'b', value: 1 },
        { char: undefined, value: 4 },
        { char: 'c', value: 1 },
        { char: undefined, value: 2 },
        { char: 'd', value: 1 },
      ]);
    });

    it('should handle input with special characters correctly', () => {
      const tree = huffmanCoding.buildTree('!@#$%^');
      const frequencies = tree.traverseInOrderAsNodes().map(({ char, value }) => ({ char, value }));

      expect(frequencies).toEqual([
        { char: '%', value: 1 },
        { char: undefined, value: 2 },
        { char: '^', value: 1 },
        { char: undefined, value: 6 },
        { char: '!', value: 1 },
        { char: undefined, value: 2 },
        { char: '@', value: 1 },
        { char: undefined, value: 4 },
        { char: '#', value: 1 },
        { char: undefined, value: 2 },
        { char: '$', value: 1 },
      ]);
    });

    it('should handle long input efficiently', () => {
      const longText = 'a'.repeat(10000);
      const tree = huffmanCoding.buildTree(longText);
      expect(tree.char).toBe('a');
      expect(tree.value).toBe(10000);
    });

    it('should handle input with spaces correctly', () => {
      const tree = huffmanCoding.buildTree('a a a');
      const frequencies = tree.traverseInOrderAsNodes().map(({ char, value }) => ({ char, value }));

      expect(frequencies).toEqual([
        { char: ' ', value: 2 },
        { char: undefined, value: 5 },
        { char: 'a', value: 3 },
      ]);
    });
  });

  describe('buildMap', () => {
    it('should build correct map for the word "lossless"', () => {
      const map = huffmanCoding.buildMap(huffmanCoding.buildTree('lossless')).elements;

      expect(map).toEqual([
        { char: 'e', code: '111' },
        { char: 'o', code: '110' },
        { char: 'l', code: '10' },
        { char: 's', code: '0' },
      ]);
    });

    it('should return correct map for single character input', () => {
      const map = huffmanCoding.buildMap(huffmanCoding.buildTree('a')).elements;

      expect(map).toEqual([
        { char: 'a', code: '0' }, // Only one character, so it should have an empty code.
      ]);
    });

    it('should return correct map for input with repeated characters', () => {
      const map = huffmanCoding.buildMap(huffmanCoding.buildTree('aaaa')).elements;

      expect(map).toEqual([{ char: 'a', code: '0' }]);
    });

    it('should handle input with two distinct characters', () => {
      const map = huffmanCoding.buildMap(huffmanCoding.buildTree('ab')).elements;

      expect(map).toEqual([
        { char: 'b', code: '1' },
        { char: 'a', code: '0' },
      ]);
    });

    it('should handle input with characters having the same frequency', () => {
      const map = huffmanCoding.buildMap(huffmanCoding.buildTree('abc')).elements;

      expect(map).toEqual([
        { char: 'b', code: '11' },
        { char: 'a', code: '10' },
        { char: 'c', code: '0' },
      ]);
    });

    it('should handle input with spaces', () => {
      const map = huffmanCoding.buildMap(huffmanCoding.buildTree('a b a')).elements;

      expect(map).toEqual([
        { char: 'a', code: '11' },
        { char: 'b', code: '10' },
        { char: ' ', code: '0' },
      ]);
    });

    it('should handle input with special characters', () => {
      const map = huffmanCoding.buildMap(huffmanCoding.buildTree('a!b!')).elements;

      expect(map).toEqual([
        { char: 'b', code: '11' },
        { char: 'a', code: '10' },
        { char: '!', code: '0' },
      ]);
    });

    it('should handle long input without running into performance issues', () => {
      const longText = 'abc'.repeat(1000);
      const map = huffmanCoding.buildMap(huffmanCoding.buildTree(longText)).elements;

      expect(map.length).toBe(3);
    });
  });

  describe('encode', () => {
    it('should encode word "lossless"', () => {
      const { encoded } = huffmanCoding.encode('lossless');

      expect(encoded).toEqual('10110001011100');
    });

    it('should encode single character input correctly', () => {
      const { encoded } = huffmanCoding.encode('a');
      expect(encoded).toBe('0'); // Single character should have an empty encoded string
    });

    it('should encode repeated character input correctly', () => {
      const { encoded } = huffmanCoding.encode('aaaa');
      expect(encoded).toBe('0000'); // All characters are the same, so the encoded string is empty
    });

    it('should encode two distinct characters correctly', () => {
      const { encoded } = huffmanCoding.encode('ab');
      expect(encoded).toBe('01'); // 'a' encoded as '0', 'b' encoded as '1'
    });

    it('should encode input with characters of the same frequency correctly', () => {
      const { encoded } = huffmanCoding.encode('abc');
      expect(encoded).toBe('10110'); // Example encoding depending on the character-to-code mapping
    });

    it('should encode input with spaces correctly', () => {
      const { encoded } = huffmanCoding.encode('a a a');
      expect(encoded).toBe('10101'); // Ensure spaces are encoded properly along with characters
    });

    it('should encode input with special characters correctly', () => {
      const { encoded } = huffmanCoding.encode('a!b!');
      expect(encoded).toBe('100110'); // Encoding should include special characters
    });

    it('should handle long input efficiently', () => {
      const longText = 'abc'.repeat(1000);
      const { encoded } = huffmanCoding.encode(longText);
      expect(encoded.length).toBeGreaterThan(0); // Ensure long input is encoded without performance issues
    });
  });

  describe('decode', () => {
    it('should decode word "lossless" correctly after encoding', () => {
      const { encoded, map } = huffmanCoding.encode('lossless');
      const decoded = huffmanCoding.decode(encoded, map);
      expect(decoded).toBe('lossless');
    });

    it('should decode single character input correctly after encoding', () => {
      const { encoded, map } = huffmanCoding.encode('a');
      const decoded = huffmanCoding.decode(encoded, map);
      expect(decoded).toBe('a');
    });

    it('should decode repeated character input correctly after encoding', () => {
      const { encoded, map } = huffmanCoding.encode('aaaa');
      const decoded = huffmanCoding.decode(encoded, map);
      expect(decoded).toBe('aaaa');
    });

    it('should decode two distinct characters correctly after encoding', () => {
      const { encoded, map } = huffmanCoding.encode('ab');
      const decoded = huffmanCoding.decode(encoded, map);
      expect(decoded).toBe('ab');
    });

    it('should decode input with characters of the same frequency correctly after encoding', () => {
      const { encoded, map } = huffmanCoding.encode('abc');
      const decoded = huffmanCoding.decode(encoded, map);
      expect(decoded).toBe('abc');
    });

    it('should decode input with spaces correctly after encoding', () => {
      const { encoded, map } = huffmanCoding.encode('a a a');
      const decoded = huffmanCoding.decode(encoded, map);
      expect(decoded).toBe('a a a');
    });

    it('should decode input with special characters correctly after encoding', () => {
      const { encoded, map } = huffmanCoding.encode('a!b!');
      const decoded = huffmanCoding.decode(encoded, map);
      expect(decoded).toBe('a!b!');
    });

    it('should decode long input correctly after encoding', () => {
      const longText = 'abc'.repeat(1000);
      const { encoded, map } = huffmanCoding.encode(longText);
      const decoded = huffmanCoding.decode(encoded, map);
      expect(decoded).toBe(longText);
    });

    it('should throw an error if decoding with incorrect map', () => {
      const { encoded } = huffmanCoding.encode('abc');
      const incorrectMap = huffmanCoding.buildMap(huffmanCoding.buildTree('x'));
      expect(() => huffmanCoding.decode(encoded, incorrectMap)).toThrow();
    });
  });
});
