import { BinarySearchTree } from '../../../lib';

describe('BinarySearchTree', () => {
  let bst: BinarySearchTree;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  describe('Tree Operations', () => {
    it('should handle adding a node to an empty tree', () => {
      bst.add(10);
      expect(bst.has(10)).toBe(true);
    });

    it('should correctly add and position multiple nodes', () => {
      bst.add(10);
      bst.add(5);
      bst.add(15);
      bst.add(3);
      bst.add(7);

      expect(bst.has(10)).toBe(true);
      expect(bst.has(5)).toBe(true);
      expect(bst.has(15)).toBe(true);
      expect(bst.has(3)).toBe(true);
      expect(bst.has(7)).toBe(true);
    });

    it('should return true when searching for existing values', () => {
      bst.add(10);
      bst.add(5);
      bst.add(15);

      expect(bst.has(10)).toBe(true);
      expect(bst.has(5)).toBe(true);
      expect(bst.has(15)).toBe(true);
    });

    it('should return false when searching for non-existing values', () => {
      bst.add(10);
      bst.add(5);
      bst.add(15);

      expect(bst.has(20)).toBe(false);
      expect(bst.has(1)).toBe(false);
    });

    it('should return false when searching in an empty tree', () => {
      expect(bst.has(10)).toBe(false);
    });

    it('should handle adding duplicate values', () => {
      bst.add(10);
      bst.add(10);
      expect(bst.has(10)).toBe(true);
    });

    it('should maintain correct structure after multiple additions', () => {
      bst.add(10);
      bst.add(5);
      bst.add(15);
      bst.add(3);
      bst.add(7);
      bst.add(13);
      bst.add(17);

      expect(bst.has(3)).toBe(true);
      expect(bst.has(7)).toBe(true);
      expect(bst.has(13)).toBe(true);
      expect(bst.has(17)).toBe(true);
    });

    it('should handle edge case of adding a single child', () => {
      bst.add(10);
      bst.add(5);
      expect(bst.has(5)).toBe(true);
      expect(bst.has(10)).toBe(true);
      expect(bst.has(15)).toBe(false);
    });

    it('should delete root when only root exists', () => {
      bst.add(5);
      bst.delete(5);
      expect(bst.has(5)).toBe(false);

      // Check if works afterwards
      bst.add(5);
      expect(bst.has(5)).toBe(true);
      bst.add(10);
      expect(bst.has(5)).toBe(true);
      expect(bst.has(10)).toBe(true);
    });

    it('should delete a leaf node', () => {
      bst.add(10);
      bst.add(5);
      bst.add(15);
      bst.add(3);
      bst.add(7);

      bst.delete(3);
      expect(bst.has(3)).toBe(false);
      expect(bst.has(5)).toBe(true);
      expect(bst.has(7)).toBe(true);
    });

    it('should delete a node with one child', () => {
      bst.add(10);
      bst.add(5);
      bst.add(15);
      bst.add(3);
      bst.add(7);
      bst.add(6);

      bst.delete(7);
      expect(bst.has(7)).toBe(false);
      expect(bst.has(6)).toBe(true);
      expect(bst.has(3)).toBe(true);
    });

    it('should delete a node with two children', () => {
      bst.add(10);
      bst.add(5);
      bst.add(15);
      bst.add(3);
      bst.add(7);
      bst.add(6);
      bst.add(8);

      bst.delete(5);
      expect(bst.has(5)).toBe(false);
      expect(bst.has(6)).toBe(true);
      expect(bst.has(7)).toBe(true);
      expect(bst.has(8)).toBe(true);
    });

    it('should delete the root node', () => {
      bst.add(10);
      bst.add(5);
      bst.add(15);

      bst.delete(10);
      expect(bst.has(10)).toBe(false);
      expect(bst.has(5)).toBe(true);
      expect(bst.has(15)).toBe(true);
    });

    it('should handle deleting non-existing values', () => {
      bst.add(10);
      bst.add(5);
      bst.add(15);

      bst.delete(20);
      expect(bst.has(10)).toBe(true);
      expect(bst.has(5)).toBe(true);
      expect(bst.has(15)).toBe(true);
    });
  });

  describe('Conversion operations', () => {
    describe('toSortedArray', () => {
      it('should return an empty array for an empty tree', () => {
        expect(bst.toSortedArray()).toEqual([]);
      });

      it('should return a single-element array for a tree with one node', () => {
        bst.add(10);
        expect(bst.toSortedArray()).toEqual([10]);
      });

      it('should return a sorted array for a tree with multiple nodes', () => {
        bst.add(10);
        bst.add(5);
        bst.add(15);
        bst.add(3);
        bst.add(7);
        bst.add(13);
        bst.add(17);
        expect(bst.toSortedArray()).toEqual([3, 5, 7, 10, 13, 15, 17]);
      });

      it('should handle a tree with only left children', () => {
        bst.add(10);
        bst.add(9);
        bst.add(8);
        bst.add(7);
        bst.add(6);
        expect(bst.toSortedArray()).toEqual([6, 7, 8, 9, 10]);
      });

      it('should handle a tree with only right children', () => {
        bst.add(10);
        bst.add(11);
        bst.add(12);
        bst.add(13);
        bst.add(14);
        expect(bst.toSortedArray()).toEqual([10, 11, 12, 13, 14]);
      });

      it('should handle duplicate values', () => {
        bst.add(10);
        bst.add(5);
        bst.add(5);
        bst.add(10);
        bst.add(15);
        expect(bst.toSortedArray()).toEqual([5, 5, 10, 10, 15]);
      });

      it('should handle complex tree structures', () => {
        bst.add(10);
        bst.add(15);
        bst.add(5);
        bst.add(1);
        bst.add(8);
        bst.add(12);
        bst.add(18);
        bst.add(6);
        bst.add(9);
        expect(bst.toSortedArray()).toEqual([1, 5, 6, 8, 9, 10, 12, 15, 18]);
      });
    });

    describe('toSortedArrayRecursive', () => {
      it('should return an empty array for an empty tree', () => {
        expect(bst.toSortedArrayRecursive()).toEqual([]);
      });

      it('should return a single-element array for a tree with one node', () => {
        bst.add(10);
        expect(bst.toSortedArrayRecursive()).toEqual([10]);
      });

      it('should return a sorted array for a tree with multiple nodes', () => {
        bst.add(10);
        bst.add(5);
        bst.add(15);
        bst.add(3);
        bst.add(7);
        bst.add(13);
        bst.add(17);
        expect(bst.toSortedArrayRecursive()).toEqual([3, 5, 7, 10, 13, 15, 17]);
      });

      it('should handle a tree with only left children', () => {
        bst.add(10);
        bst.add(9);
        bst.add(8);
        bst.add(7);
        bst.add(6);
        expect(bst.toSortedArrayRecursive()).toEqual([6, 7, 8, 9, 10]);
      });

      it('should handle a tree with only right children', () => {
        bst.add(10);
        bst.add(11);
        bst.add(12);
        bst.add(13);
        bst.add(14);
        expect(bst.toSortedArrayRecursive()).toEqual([10, 11, 12, 13, 14]);
      });

      it('should handle duplicate values', () => {
        bst.add(10);
        bst.add(5);
        bst.add(5);
        bst.add(10);
        bst.add(15);
        expect(bst.toSortedArrayRecursive()).toEqual([5, 5, 10, 10, 15]);
      });

      it('should handle complex tree structures', () => {
        bst.add(10);
        bst.add(15);
        bst.add(5);
        bst.add(1);
        bst.add(8);
        bst.add(12);
        bst.add(18);
        bst.add(6);
        bst.add(9);
        expect(bst.toSortedArrayRecursive()).toEqual([1, 5, 6, 8, 9, 10, 12, 15, 18]);
      });
    });

    describe('toFullBinaryTreeArray', () => {
      it('should return an empty array for an empty tree', () => {
        expect(bst.toFullBinaryTreeArray()).toEqual([]);
      });

      it('should return a single-element array for a tree with one node', () => {
        bst.add(10);
        expect(bst.toFullBinaryTreeArray()).toEqual([10]);
      });

      it('should handle a tree with multiple levels', () => {
        bst.add(10);
        bst.add(5);
        bst.add(15);
        bst.add(2);
        bst.add(7);
        bst.add(12);
        bst.add(17);
        expect(bst.toFullBinaryTreeArray()).toEqual([10, 5, 15, 2, 7, 12, 17]);
      });

      it('should handle a left-skewed tree', () => {
        bst.add(10);
        bst.add(9);
        bst.add(8);
        expect(bst.toFullBinaryTreeArray()).toEqual([10, 9, undefined, 8, undefined, undefined, undefined]);
      });

      it('should handle a right-skewed tree', () => {
        bst.add(10);
        bst.add(11);
        bst.add(12);
        expect(bst.toFullBinaryTreeArray()).toEqual([10, undefined, 11, undefined, undefined, undefined, 12]);
      });

      it('should handle a tree with missing children', () => {
        bst.add(10);
        bst.add(5);
        bst.add(15);
        bst.add(3);
        bst.add(7);
        bst.add(12);
        expect(bst.toFullBinaryTreeArray()).toEqual([10, 5, 15, 3, 7, 12, undefined]);
      });
    });
  });
});
