import { AvlTree } from '../../../lib';

describe('AvlTree', () => {
  let avl: AvlTree;

  beforeEach(() => {
    avl = new AvlTree();
  });

  describe('Tree Operations', () => {
    it('should handle adding a node to an empty tree', () => {
      avl.add(10);
      expect(avl.has(10)).toBe(true);
    });

    it('should correctly add and position multiple nodes', () => {
      avl.add(10);
      avl.add(5);
      avl.add(15);
      avl.add(3);
      avl.add(7);

      expect(avl.has(10)).toBe(true);
      expect(avl.has(5)).toBe(true);
      expect(avl.has(15)).toBe(true);
      expect(avl.has(3)).toBe(true);
      expect(avl.has(7)).toBe(true);
    });

    it('should return true when searching for existing values', () => {
      avl.add(10);
      avl.add(5);
      avl.add(15);

      expect(avl.has(10)).toBe(true);
      expect(avl.has(5)).toBe(true);
      expect(avl.has(15)).toBe(true);
    });

    it('should return false when searching for non-existing values', () => {
      avl.add(10);
      avl.add(5);
      avl.add(15);

      expect(avl.has(20)).toBe(false);
      expect(avl.has(1)).toBe(false);
    });

    it('should return false when searching in an empty tree', () => {
      expect(avl.has(10)).toBe(false);
    });

    it('should handle adding duplicate values', () => {
      avl.add(10);
      avl.add(10);
      expect(avl.has(10)).toBe(true);
    });

    it('should maintain correct structure after multiple additions', () => {
      avl.add(10);
      avl.add(5);
      avl.add(15);
      avl.add(3);
      avl.add(7);
      avl.add(13);
      avl.add(17);

      expect(avl.has(3)).toBe(true);
      expect(avl.has(7)).toBe(true);
      expect(avl.has(13)).toBe(true);
      expect(avl.has(17)).toBe(true);
    });

    it('should handle edge case of adding a single child', () => {
      avl.add(10);
      avl.add(5);
      expect(avl.has(5)).toBe(true);
      expect(avl.has(10)).toBe(true);
      expect(avl.has(15)).toBe(false);
    });

    it('should delete root when only root exists', () => {
      avl.add(5);
      avl.delete(5);
      expect(avl.has(5)).toBe(false);

      // Check if works afterwards
      avl.add(5);
      expect(avl.has(5)).toBe(true);
      avl.add(10);
      expect(avl.has(5)).toBe(true);
      expect(avl.has(10)).toBe(true);
    });

    it('should delete a leaf node', () => {
      avl.add(10);
      avl.add(5);
      avl.add(15);
      avl.add(3);
      avl.add(7);

      avl.delete(3);
      expect(avl.has(3)).toBe(false);
      expect(avl.has(5)).toBe(true);
      expect(avl.has(7)).toBe(true);
    });

    it('should delete a node with one child', () => {
      avl.add(10);
      avl.add(5);
      avl.add(15);
      avl.add(3);
      avl.add(7);
      avl.add(6);

      avl.delete(7);
      expect(avl.has(7)).toBe(false);
      expect(avl.has(6)).toBe(true);
      expect(avl.has(3)).toBe(true);
    });

    it('should delete a node with two children', () => {
      avl.add(10);
      avl.add(5);
      avl.add(15);
      avl.add(3);
      avl.add(7);
      avl.add(6);
      avl.add(8);

      avl.delete(5);
      expect(avl.has(5)).toBe(false);
      expect(avl.has(6)).toBe(true);
      expect(avl.has(7)).toBe(true);
      expect(avl.has(8)).toBe(true);
    });

    it('should delete the root node', () => {
      avl.add(10);
      avl.add(5);
      avl.add(15);

      avl.delete(10);
      expect(avl.has(10)).toBe(false);
      expect(avl.has(5)).toBe(true);
      expect(avl.has(15)).toBe(true);
    });

    it('should handle deleting non-existing values', () => {
      avl.add(10);
      avl.add(5);
      avl.add(15);

      avl.delete(20);
      expect(avl.has(10)).toBe(true);
      expect(avl.has(5)).toBe(true);
      expect(avl.has(15)).toBe(true);
    });
  });

  describe('Conversion operations', () => {
    describe('toSortedArray', () => {
      it('should return an empty array for an empty tree', () => {
        expect(avl.toSortedArray()).toEqual([]);
      });

      it('should return a single-element array for a tree with one node', () => {
        avl.add(10);
        expect(avl.toSortedArray()).toEqual([10]);
      });

      it('should return a sorted array for a tree with multiple nodes', () => {
        avl.add(10);
        avl.add(5);
        avl.add(15);
        avl.add(3);
        avl.add(7);
        avl.add(13);
        avl.add(17);
        expect(avl.toSortedArray()).toEqual([3, 5, 7, 10, 13, 15, 17]);
      });

      it('should handle a tree with only left children', () => {
        avl.add(10);
        avl.add(9);
        avl.add(8);
        avl.add(7);
        avl.add(6);
        expect(avl.toSortedArray()).toEqual([6, 7, 8, 9, 10]);
      });

      it('should handle a tree with only right children', () => {
        avl.add(10);
        avl.add(11);
        avl.add(12);
        avl.add(13);
        avl.add(14);
        expect(avl.toSortedArray()).toEqual([10, 11, 12, 13, 14]);
      });

      it('should handle duplicate values', () => {
        avl.add(10);
        avl.add(5);
        avl.add(5);
        avl.add(10);
        avl.add(15);
        expect(avl.toSortedArray()).toEqual([5, 5, 10, 10, 15]);
      });

      it('should handle complex tree structures', () => {
        avl.add(10);
        avl.add(15);
        avl.add(5);
        avl.add(1);
        avl.add(8);
        avl.add(12);
        avl.add(18);
        avl.add(6);
        avl.add(9);
        expect(avl.toSortedArray()).toEqual([1, 5, 6, 8, 9, 10, 12, 15, 18]);
      });
    });

    describe('toFullBinaryTreeArray', () => {
      it('should return an empty array for an empty tree', () => {
        expect(avl.toFullBinaryTreeArray()).toEqual([]);
      });

      it('should return a single-element array for a tree with one node', () => {
        avl.add(10);
        expect(avl.toFullBinaryTreeArray()).toEqual([10]);
      });

      it('should handle a tree with multiple levels', () => {
        avl.add(10);
        avl.add(5);
        avl.add(15);
        avl.add(2);
        avl.add(7);
        avl.add(12);
        avl.add(17);
        expect(avl.toFullBinaryTreeArray()).toEqual([10, 5, 15, 2, 7, 12, 17]);
      });

      it('should handle a left-skewed tree and rebalance', () => {
        avl.add(10);
        avl.add(9);
        avl.add(8);
        expect(avl.toFullBinaryTreeArray()).toEqual([9, 8, 10]);
      });

      it('should handle a right-skewed tree and rebalance', () => {
        avl.add(10);
        avl.add(11);
        avl.add(12);
        expect(avl.toFullBinaryTreeArray()).toEqual([11, 10, 12]);
      });

      it('should handle a tree with missing children', () => {
        avl.add(10);
        avl.add(5);
        avl.add(15);
        avl.add(3);
        avl.add(7);
        avl.add(12);
        expect(avl.toFullBinaryTreeArray()).toEqual([10, 5, 15, 3, 7, 12, undefined]);
      });

      it('should handle complex insertions and rebalancing', () => {
        avl.add(10);
        avl.add(20);
        avl.add(30);
        avl.add(40);
        avl.add(50);
        avl.add(25);
        expect(avl.toFullBinaryTreeArray()).toEqual([30, 20, 40, 10, 25, undefined, 50]);
      });

      it('should handle large balanced tree', () => {
        for (let i = 1; i <= 15; i++) {
          avl.add(i);
        }
        expect(avl.toFullBinaryTreeArray()).toEqual([8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15]);
      });

      it('should handle deletion and rebalance - case 1', () => {
        avl.add(10);
        avl.add(5);
        avl.add(15);
        avl.add(2);
        avl.add(7);
        avl.add(12);
        avl.add(17);
        avl.delete(5);
        expect(avl.toFullBinaryTreeArray()).toEqual([10, 7, 15, 2, undefined, 12, 17]);
      });

      it('should handle deletion and rebalance - case 2', () => {
        avl.add(10);
        avl.add(20);
        avl.add(30);
        avl.add(40);
        avl.add(50);
        avl.add(25);
        avl.delete(30);
        expect(avl.toFullBinaryTreeArray()).toEqual([40, 20, 50, 10, 25]);
      });

      it('should handle deletion and rebalance - case 3', () => {
        for (let i = 1; i <= 15; i++) {
          avl.add(i);
        }
        avl.delete(8);
        expect(avl.toFullBinaryTreeArray()).toEqual([
          9,
          4,
          12,
          2,
          6,
          10,
          14,
          1,
          3,
          5,
          7,
          undefined,
          11,
          13,
          15,
          undefined,
        ]);
      });

      it('should handle deletion and rebalance - case 4', () => {
        avl.add(10);
        avl.add(5);
        avl.add(15);
        avl.add(12);
        avl.add(17);
        avl.delete(15);
        expect(avl.toFullBinaryTreeArray()).toEqual([10, 5, 17, undefined, undefined, 12, undefined]);
      });
    });
  });
});
