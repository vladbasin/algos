import { TrieNode } from '../../lib';

describe('TrieNode', () => {
  let root: TrieNode;
  let childA: TrieNode;
  let childB: TrieNode;

  beforeEach(() => {
    root = new TrieNode('root', false, undefined);
    childA = new TrieNode('a', false, root);
    childB = new TrieNode('b', false, root);
  });

  describe('hasChild', () => {
    it('should return true if the child exists', () => {
      root.getOrCreateChild('a', () => childA);
      expect(root.hasChild('a')).toBe(true);
    });

    it('should return false if the child does not exist', () => {
      expect(root.hasChild('c')).toBe(false);
    });
  });

  describe('hasAnyChild', () => {
    it('should return true if there is at least one child', () => {
      root.getOrCreateChild('a', () => childA);
      expect(root.hasAnyChild()).toBe(true);
    });

    it('should return false if there are no children', () => {
      expect(root.hasAnyChild()).toBe(false);
    });
  });

  describe('removeChild', () => {
    it('should remove an existing child', () => {
      root.getOrCreateChild('a', () => childA);
      root.removeChild('a');
      expect(root.hasChild('a')).toBe(false);
      expect(root.hasAnyChild()).toBe(false);
    });

    it('should not throw an error if trying to remove a non-existent child', () => {
      expect(() => root.removeChild('nonexistent')).not.toThrow();
    });

    it('should have children if the child does not exist', () => {
      root.getOrCreateChild('a', () => childA);
      root.removeChild('nonexistent');
      expect(root.hasAnyChild()).toBe(true);
    });

    it('should have children if some are left after removal', () => {
      root.getOrCreateChild('a', () => childA);
      root.getOrCreateChild('b', () => childB);
      root.removeChild('a');
      expect(root.hasAnyChild()).toBe(true);
    });

    it('should throw an error if trying to remove a node without a parent', () => {
      expect(() => root.removeSelf()).toThrow('Cannot remove TrieNode which does not have parent');
    });

    it('should handle removing a non-existent child gracefully', () => {
      root.removeChild('nonexistent');
      expect(root.hasAnyChild()).toBe(false);
    });
  });

  describe('removeSelf', () => {
    it('should remove itself from the parent node', () => {
      root.getOrCreateChild('a', () => childA);
      childA.removeSelf();
      expect(root.hasChild('a')).toBe(false);
      expect(root.hasAnyChild()).toBe(false);
    });

    it('should throw an error if trying to remove a node without a parent', () => {
      expect(() => root.removeSelf()).toThrow('Cannot remove TrieNode which does not have parent');
    });
  });

  describe('getChild', () => {
    it('should return the child if it exists', () => {
      root.getOrCreateChild('a', () => childA);
      const retrievedChild = root.getChild('a');
      expect(retrievedChild).toBe(childA);
    });

    it('should return undefined if the child does not exist', () => {
      expect(root.getChild('nonexistent')).toBeUndefined();
    });
  });

  describe('getOrCreateChild', () => {
    it('should return an existing child if it exists', () => {
      root.getOrCreateChild('a', () => childA);
      expect(root.getOrCreateChild('a', () => new TrieNode('a', false, root))).toBe(childA);
    });

    it('should create and return a new child if it does not exist', () => {
      const newChild = root.getOrCreateChild('b', () => new TrieNode('b', false, root));
      expect(newChild.text).toBe('b');
      expect(root.hasChild('b')).toBe(true);
    });
  });
});
