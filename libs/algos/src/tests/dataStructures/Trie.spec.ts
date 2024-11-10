import { Trie } from '../../lib'; // Adjust the import path as per your structure

describe('Trie', () => {
  let trie: Trie;

  beforeEach(() => {
    trie = new Trie();
  });

  describe('add', () => {
    it('should add a single word to the trie', () => {
      trie.add('apple');
      expect(trie.has('apple', 'complete')).toBe(true);
    });

    it('should add multiple words to the trie', () => {
      trie.add('apple');
      trie.add('app');
      expect(trie.has('apple', 'complete')).toBe(true);
      expect(trie.has('app', 'complete')).toBe(true);
    });

    it('should add words with shared prefixes', () => {
      trie.add('apple');
      trie.add('app');
      expect(trie.has('apple', 'complete')).toBe(true);
      expect(trie.has('app', 'complete')).toBe(true);
      expect(trie.has('ap', 'prefix')).toBe(true);
      expect(trie.has('banana', 'prefix')).toBe(false);
      expect(trie.has('banana', 'complete')).toBe(false);
    });

    it('should throw an error if trying to add an empty string', () => {
      expect(() => trie.add('')).toThrow('Empty text is not allowed for a Trie');
    });
  });

  describe('has', () => {
    beforeEach(() => {
      trie.add('apple');
      trie.add('app');
    });

    it('should return true if the complete word exists', () => {
      expect(trie.has('apple', 'complete')).toBe(true);
    });

    it('should return false if the complete word does not exist', () => {
      expect(trie.has('banana', 'complete')).toBe(false);
    });

    it('should return true if the prefix exists', () => {
      expect(trie.has('app', 'prefix')).toBe(true);
    });

    it('should return false if the prefix does not exist', () => {
      expect(trie.has('ban', 'prefix')).toBe(false);
    });

    it('should return true for prefix mode even if the complete word does not exist', () => {
      expect(trie.has('ap', 'prefix')).toBe(true);
    });

    it('should return false for complete mode if only the prefix exists', () => {
      expect(trie.has('ap', 'complete')).toBe(false);
    });

    it('should throw an error if checking an empty string', () => {
      expect(() => trie.has('', 'prefix')).toThrow('Empty text is not allowed for a Trie');
    });
  });

  describe('remove', () => {
    beforeEach(() => {
      trie.add('apple');
      trie.add('app');
    });

    it('should handle duplicates (by ignoring them)', () => {
      trie.add('apple');
      expect(trie.has('apple', 'complete')).toBe(true);
      trie.remove('apple');
      expect(trie.has('apple', 'complete')).toBe(false);
      expect(trie.has('app', 'complete')).toBe(true);
    });

    it('should handle similar prefix words', () => {
      trie.add('apple');
      trie.add('applecorp');
      expect(trie.has('apple', 'complete')).toBe(true);
      expect(trie.has('applecorp', 'complete')).toBe(true);
      trie.remove('apple');
      expect(trie.has('apple', 'complete')).toBe(false);
      expect(trie.has('app', 'complete')).toBe(true);
      expect(trie.has('applecorp', 'complete')).toBe(true);
    });

    it('should remove a complete word from the trie', () => {
      expect(trie.has('appl', 'prefix')).toBe(true);
      trie.remove('apple');
      expect(trie.has('apple', 'complete')).toBe(false);
      expect(trie.has('app', 'complete')).toBe(true);
      expect(trie.has('ap', 'prefix')).toBe(true);
      expect(trie.has('appl', 'prefix')).toBe(false);
    });

    it('should remove a complete word from the trie', () => {
      trie.remove('app');
      expect(trie.has('apple', 'complete')).toBe(true);
      expect(trie.has('app', 'complete')).toBe(false);
      expect(trie.has('ap', 'prefix')).toBe(true);
    });

    it('should remove a word and its children if no other words share the prefix', () => {
      trie.remove('apple');
      expect(trie.has('apple', 'complete')).toBe(false);
      expect(trie.has('app', 'complete')).toBe(true);
      expect(trie.has('ap', 'prefix')).toBe(true); // 'app' still exists, so prefix 'ap' exists
    });

    it('should not remove a word that does not exist', () => {
      trie.remove('banana');
      expect(trie.has('apple', 'complete')).toBe(true); // 'apple' should still exist
      expect(trie.has('app', 'complete')).toBe(true); // 'app' should still exist
    });

    it('should not remove anything if the word is not complete', () => {
      trie.remove('ap'); // Only a prefix, not a complete word
      expect(trie.has('apple', 'complete')).toBe(true);
      expect(trie.has('app', 'complete')).toBe(true);
    });

    it('should throw an error if trying to remove an empty string', () => {
      expect(() => trie.remove('')).toThrow();
    });

    it('should remove a word that shares a prefix but keep the prefix intact', () => {
      trie.add('banana');
      trie.add('ban');
      trie.remove('banana');
      expect(trie.has('banana', 'complete')).toBe(false);
      expect(trie.has('ban', 'complete')).toBe(true);
    });
  });
});
