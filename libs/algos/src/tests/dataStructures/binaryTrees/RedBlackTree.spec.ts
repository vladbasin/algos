import { RedBlackTree, RedBlackNode, Stack } from '../../../lib';

describe('RedBlackTree', () => {
  let rbt: RedBlackTree;

  const ensureRbtValid = (): void => {
    if (rbt.root.color !== 'black') {
      throw new Error('Root must be black');
    }

    let leafBlackCount: number | undefined;

    const stack = new Stack<{ node: RedBlackNode; blackCount: number }>();
    stack.push({ node: rbt.root, blackCount: 0 });
    while (stack.length > 0) {
      const current = stack.pop();
      if (!current) {
        continue;
      }

      const { node, blackCount } = current;

      if (node.isNilNode()) {
        if (node.color !== 'black') {
          throw new Error('Leaf nil node must be black');
        }
        if (node.hasAnyChild()) {
          throw new Error('Leaf nil node must not have children');
        }
        if (node.color === 'black') {
          if (leafBlackCount === undefined) {
            leafBlackCount = blackCount;
          } else {
            if (leafBlackCount !== blackCount) {
              throw new Error('Any path down from a node to any leaf must have the same number of black nodes');
            }
          }
        }
      } else if (!node.hasAnyChild()) {
        console.log(rbt.toString());
        throw new Error(`Leaf node must be nil. Problematic node: ${node.value}`);
      }

      if (node.color === 'red') {
        if (!node.left || !node.right) {
          throw new Error('Red node must always have 2 children (which may be nil)');
        }
        if (node.left.color !== 'black' || node.right.color !== 'black') {
          throw new Error(`Red node must always have 2 black children. Problematic node: ${node.value}`);
        }
      }

      if (node.left) {
        stack.push({ node: node.left, blackCount: node.left.color === 'black' ? blackCount + 1 : blackCount });
      }
      if (node.right) {
        stack.push({ node: node.right, blackCount: node.right.color === 'black' ? blackCount + 1 : blackCount });
      }
    }
  };

  beforeEach(() => {
    rbt = new RedBlackTree();
  });

  describe('Tree Operations', () => {
    it('should handle adding a node to an empty tree', () => {
      rbt.add(10);
      expect(rbt.has(10)).toBe(true);
      expect(ensureRbtValid).not.toThrow();
    });

    it('should correctly add and position multiple nodes', () => {
      rbt.add(10);
      rbt.add(5);
      rbt.add(15);
      rbt.add(3);
      rbt.add(7);

      expect(rbt.has(10)).toBe(true);
      expect(rbt.has(5)).toBe(true);
      expect(rbt.has(15)).toBe(true);
      expect(rbt.has(3)).toBe(true);
      expect(rbt.has(7)).toBe(true);
      expect(ensureRbtValid).not.toThrow();
    });

    it('should return true when searching for existing values', () => {
      rbt.add(10);
      rbt.add(5);
      rbt.add(15);

      expect(rbt.has(10)).toBe(true);
      expect(rbt.has(5)).toBe(true);
      expect(rbt.has(15)).toBe(true);
      expect(ensureRbtValid).not.toThrow();
    });

    it('should return false when searching for non-existing values', () => {
      rbt.add(10);
      rbt.add(5);
      rbt.add(15);

      expect(rbt.has(20)).toBe(false);
      expect(rbt.has(1)).toBe(false);
      expect(ensureRbtValid).not.toThrow();
    });

    it('should return false when searching in an empty tree', () => {
      expect(rbt.has(10)).toBe(false);
      expect(ensureRbtValid).not.toThrow();
    });

    it('should handle adding duplicate values', () => {
      rbt.add(10);
      rbt.add(10);
      expect(rbt.has(10)).toBe(true);
      expect(ensureRbtValid).not.toThrow();
    });

    it('should maintain correct structure after multiple additions', () => {
      rbt.add(10);
      rbt.add(5);
      rbt.add(15);
      rbt.add(3);
      rbt.add(7);
      rbt.add(13);
      rbt.add(17);

      expect(rbt.has(3)).toBe(true);
      expect(rbt.has(7)).toBe(true);
      expect(rbt.has(13)).toBe(true);
      expect(rbt.has(17)).toBe(true);
      expect(ensureRbtValid).not.toThrow();
    });

    it('should handle edge case of adding a single child', () => {
      rbt.add(10);
      rbt.add(5);
      expect(rbt.has(5)).toBe(true);
      expect(rbt.has(10)).toBe(true);
      expect(rbt.has(15)).toBe(false);
      expect(ensureRbtValid).not.toThrow();
    });

    it('should balance for left child right parent case', () => {
      rbt.add(10);
      rbt.add(12);
      rbt.add(11);
      expect(rbt.has(10)).toBe(true);
      expect(rbt.has(12)).toBe(true);
      expect(rbt.has(11)).toBe(true);
      expect(ensureRbtValid).not.toThrow();
    });

    it('should delete root when only root exists', () => {
      rbt.add(5);
      rbt.delete(5);
      expect(rbt.has(5)).toBe(false);

      // Check if works afterwards
      rbt.add(5);
      expect(rbt.has(5)).toBe(true);
      rbt.add(10);
      expect(rbt.has(5)).toBe(true);
      expect(rbt.has(10)).toBe(true);
      expect(ensureRbtValid).not.toThrow();
    });

    it('should delete a leaf node', () => {
      rbt.add(10);
      rbt.add(5);
      rbt.add(15);
      rbt.add(3);
      rbt.add(7);

      rbt.delete(3);
      expect(rbt.has(3)).toBe(false);
      expect(rbt.has(5)).toBe(true);
      expect(rbt.has(7)).toBe(true);
      expect(ensureRbtValid).not.toThrow();
    });

    it('should delete a node with one child', () => {
      rbt.add(10);
      rbt.add(5);
      rbt.add(15);
      rbt.add(3);
      rbt.add(7);
      rbt.add(6);

      rbt.delete(7);
      expect(rbt.has(7)).toBe(false);
      expect(rbt.has(6)).toBe(true);
      expect(rbt.has(3)).toBe(true);
      expect(ensureRbtValid).not.toThrow();
    });

    it('should delete a node with two children', () => {
      rbt.add(10);
      rbt.add(5);
      rbt.add(15);
      rbt.add(3);
      rbt.add(7);
      rbt.add(6);
      rbt.add(8);

      rbt.delete(5);
      expect(rbt.has(5)).toBe(false);
      expect(rbt.has(6)).toBe(true);
      expect(rbt.has(7)).toBe(true);
      expect(rbt.has(8)).toBe(true);
      expect(ensureRbtValid).not.toThrow();
    });

    it('should delete the root node', () => {
      rbt.add(10);
      rbt.add(5);
      rbt.add(15);

      rbt.delete(10);
      expect(rbt.has(10)).toBe(false);
      expect(rbt.has(5)).toBe(true);
      expect(rbt.has(15)).toBe(true);
      expect(ensureRbtValid).not.toThrow();
    });

    it('should handle deleting non-existing values', () => {
      rbt.add(10);
      rbt.add(5);
      rbt.add(15);

      rbt.delete(20);
      expect(rbt.has(10)).toBe(true);
      expect(rbt.has(5)).toBe(true);
      expect(rbt.has(15)).toBe(true);
      expect(ensureRbtValid).not.toThrow();
    });

    it('should re-balance for Case 6: The sibling S is black, S’s distant child D is red.', () => {
      rbt.add(10);
      rbt.add(5);
      rbt.add(20);
      rbt.add(15);
      rbt.add(25);

      expect(rbt.has(10)).toBe(true);
      expect(rbt.has(5)).toBe(true);
      expect(rbt.has(20)).toBe(true);
      expect(rbt.has(15)).toBe(true);
      expect(rbt.has(25)).toBe(true);

      rbt.delete(5);

      expect(rbt.has(10)).toBe(true);
      expect(rbt.has(5)).toBe(false);
      expect(rbt.has(20)).toBe(true);
      expect(rbt.has(15)).toBe(true);
      expect(rbt.has(25)).toBe(true);
      expect(ensureRbtValid).not.toThrow();
    });

    it('should re-balance for Case 5: The sibling S is black, S’s close child C is red, and S’s distant child D is black.', () => {
      rbt.add(30);
      rbt.add(20);
      rbt.add(40);
      rbt.add(10);
      rbt.add(25);
      rbt.add(35);
      rbt.add(50);
      rbt.add(45);
      rbt.add(31);
      rbt.add(38);
      rbt.add(36);
      rbt.add(37);
      rbt.add(49);
      rbt.add(48);

      expect(rbt.has(30)).toBe(true);
      expect(rbt.has(20)).toBe(true);
      expect(rbt.has(40)).toBe(true);
      expect(rbt.has(10)).toBe(true);
      expect(rbt.has(25)).toBe(true);
      expect(rbt.has(35)).toBe(true);
      expect(rbt.has(50)).toBe(true);
      expect(rbt.has(45)).toBe(true);
      expect(rbt.has(31)).toBe(true);
      expect(rbt.has(38)).toBe(true);
      expect(rbt.has(36)).toBe(true);
      expect(rbt.has(37)).toBe(true);
      expect(rbt.has(49)).toBe(true);
      expect(rbt.has(48)).toBe(true);

      rbt.delete(49);

      expect(rbt.has(30)).toBe(true);
      expect(rbt.has(20)).toBe(true);
      expect(rbt.has(40)).toBe(true);
      expect(rbt.has(10)).toBe(true);
      expect(rbt.has(25)).toBe(true);
      expect(rbt.has(35)).toBe(true);
      expect(rbt.has(50)).toBe(true);
      expect(rbt.has(45)).toBe(true);
      expect(rbt.has(31)).toBe(true);
      expect(rbt.has(38)).toBe(true);
      expect(rbt.has(36)).toBe(true);
      expect(rbt.has(37)).toBe(true);
      expect(rbt.has(49)).toBe(false);
      expect(rbt.has(48)).toBe(true);
      expect(ensureRbtValid).not.toThrow();
    });
  });

  describe('Conversion operations', () => {
    describe('toSortedArray', () => {
      it('should return an empty array for an empty tree', () => {
        expect(rbt.toSortedArray()).toEqual([]);
      });

      it('should return a single-element array for a tree with one node', () => {
        rbt.add(10);
        expect(rbt.toSortedArray()).toEqual([10]);
        expect(ensureRbtValid).not.toThrow();
      });

      it('should return a sorted array for a tree with multiple nodes', () => {
        rbt.add(10);
        rbt.add(5);
        rbt.add(15);
        rbt.add(3);
        rbt.add(7);
        rbt.add(13);
        rbt.add(17);
        expect(rbt.toSortedArray()).toEqual([3, 5, 7, 10, 13, 15, 17]);
        expect(ensureRbtValid).not.toThrow();
      });

      it('should handle a tree with only left children', () => {
        rbt.add(10);
        rbt.add(9);
        rbt.add(8);
        rbt.add(7);
        rbt.add(6);
        expect(rbt.toSortedArray()).toEqual([6, 7, 8, 9, 10]);
        expect(ensureRbtValid).not.toThrow();
      });

      it('should handle a tree with only right children', () => {
        rbt.add(10);
        rbt.add(11);
        rbt.add(12);
        rbt.add(13);
        rbt.add(14);
        expect(rbt.toSortedArray()).toEqual([10, 11, 12, 13, 14]);
        expect(ensureRbtValid).not.toThrow();
      });

      it('should handle duplicate values', () => {
        rbt.add(10);
        rbt.add(5);
        rbt.add(5);
        rbt.add(10);
        rbt.add(15);
        expect(rbt.toSortedArray()).toEqual([5, 5, 10, 10, 15]);
        expect(ensureRbtValid).not.toThrow();
      });

      it('should handle complex tree structures', () => {
        rbt.add(10);
        rbt.add(15);
        rbt.add(5);
        rbt.add(1);
        rbt.add(8);
        rbt.add(12);
        rbt.add(18);
        rbt.add(6);
        rbt.add(9);
        expect(rbt.toSortedArray()).toEqual([1, 5, 6, 8, 9, 10, 12, 15, 18]);
        expect(ensureRbtValid).not.toThrow();
      });
    });

    describe('toFullBinaryTreeArray', () => {
      it('should return an empty array for an empty tree', () => {
        expect(rbt.toFullBinaryTreeArray()).toEqual([]);
      });

      it('should return a single-element array for a tree with one node', () => {
        rbt.add(10);
        expect(rbt.toFullBinaryTreeArray()).toEqual([10]);
      });

      it('should handle a tree with multiple levels', () => {
        rbt.add(10);
        rbt.add(5);
        rbt.add(15);
        rbt.add(2);
        rbt.add(7);
        rbt.add(12);
        rbt.add(17);
        expect(rbt.toFullBinaryTreeArray()).toEqual([10, 5, 15, 2, 7, 12, 17]);
        expect(ensureRbtValid).not.toThrow();
      });

      it('should handle a left-skewed tree and rebalance', () => {
        rbt.add(10);
        rbt.add(9);
        rbt.add(8);
        expect(rbt.toFullBinaryTreeArray()).toEqual([9, 8, 10]);
        expect(ensureRbtValid).not.toThrow();
      });

      it('should handle a right-skewed tree and rebalance', () => {
        rbt.add(10);
        rbt.add(11);
        rbt.add(12);
        expect(rbt.toFullBinaryTreeArray()).toEqual([11, 10, 12]);
        expect(ensureRbtValid).not.toThrow();
      });

      it('should handle a tree with missing children', () => {
        rbt.add(10);
        rbt.add(5);
        rbt.add(15);
        rbt.add(3);
        rbt.add(7);
        rbt.add(12);
        expect(rbt.toFullBinaryTreeArray()).toEqual([10, 5, 15, 3, 7, 12, undefined]);
        expect(ensureRbtValid).not.toThrow();
      });

      it('should handle complex insertions and rebalancing', () => {
        rbt.add(10);
        rbt.add(20);
        rbt.add(30);
        rbt.add(40);
        rbt.add(50);
        rbt.add(25);
        expect(rbt.toFullBinaryTreeArray()).toEqual([
          20,
          10,
          40,
          undefined,
          undefined,
          30,
          50,
          undefined,
          undefined,
          undefined,
          undefined,
          25,
          undefined,
          undefined,
          undefined,
        ]);
        expect(ensureRbtValid).not.toThrow();
      });

      it('should handle large balanced tree', () => {
        for (let i = 1; i <= 15; i++) {
          rbt.add(i);
        }
        expect(rbt.toFullBinaryTreeArray()).toEqual([
          4,
          2,
          8,
          1,
          3,
          6,
          10,
          undefined,
          undefined,
          undefined,
          undefined,
          5,
          7,
          9,
          12,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          11,
          14,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          13,
          15,
        ]);
        expect(ensureRbtValid).not.toThrow();
      });

      it('should handle deletion and rebalance - case 1', () => {
        rbt.add(10);
        rbt.add(5);
        rbt.add(15);
        rbt.add(2);
        rbt.add(7);
        rbt.add(12);
        rbt.add(17);
        rbt.delete(5);
        expect(rbt.toFullBinaryTreeArray()).toEqual([10, 7, 15, 2, undefined, 12, 17]);
        expect(ensureRbtValid).not.toThrow();
      });

      it('should handle deletion and rebalance - case 2', () => {
        rbt.add(10);
        rbt.add(20);
        rbt.add(30);
        rbt.add(40);
        rbt.add(50);
        rbt.add(25);
        rbt.delete(30);
        expect(rbt.toFullBinaryTreeArray()).toEqual([20, 10, 40, undefined, undefined, 25, 50]);
        expect(ensureRbtValid).not.toThrow();
      });

      it('should handle deletion and rebalance - case 3', () => {
        for (let i = 1; i <= 15; i++) {
          rbt.add(i);
        }
        rbt.delete(8);
        expect(ensureRbtValid).not.toThrow();
        expect(rbt.toFullBinaryTreeArray(true)).toEqual([
          4,
          2,
          9,
          1,
          3,
          6,
          12,
          undefined,
          undefined,
          undefined,
          undefined,
          5,
          7,
          10,
          14,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          11,
          13,
          15,
          undefined,
          undefined,
          undefined,
          undefined,
        ]);
      });

      it('should handle deletion and rebalance - case 4', () => {
        rbt.add(10);
        rbt.add(5);
        rbt.add(15);
        rbt.add(12);
        rbt.add(17);
        rbt.delete(15);
        expect(rbt.toFullBinaryTreeArray()).toEqual([10, 5, 17, undefined, undefined, 12, undefined]);
        expect(ensureRbtValid).not.toThrow();
      });
    });
  });
});
7;
