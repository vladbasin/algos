import { SkipList } from '../../lib/dataStructures/SkipList';

describe('SkipList', () => {
  describe('Add Operations', () => {
    it('should add when empty', () => {
      const list = new SkipList();
      list.add(1);
      expect(list.has(1)).toBeTruthy();
      expect(list.toArray(0)).toEqual([1]);
    });

    it('should add to the beginning', () => {
      const list = new SkipList();
      list.add(2);
      list.add(1);
      expect(list.toArray(0)).toEqual([1, 2]);
      expect(list.has(1)).toBeTruthy();
      expect(list.has(2)).toBeTruthy();
      expect(list.has(0)).toBeFalsy();
      expect(list.has(3)).toBeFalsy();

      list.add(1);
      expect(list.toArray(0)).toEqual([1, 1, 2]);
    });

    it('should add to the end', () => {
      const list = new SkipList();
      list.add(2);
      list.add(3);
      expect(list.toArray(0)).toEqual([2, 3]);
      expect(list.has(2)).toBeTruthy();
      expect(list.has(3)).toBeTruthy();
      expect(list.has(1)).toBeFalsy();
      expect(list.has(4)).toBeFalsy();

      list.add(3);
      expect(list.toArray(0)).toEqual([2, 3, 3]);
      expect(list.has(3)).toBeTruthy();
    });

    it('should add in the middle', () => {
      const list = new SkipList();
      list.add(1);
      list.add(3);
      list.add(2);
      expect(list.toArray(0)).toEqual([1, 2, 3]);
      expect(list.has(2)).toBeTruthy();
      expect(list.has(3)).toBeTruthy();
      expect(list.has(1)).toBeTruthy();

      list.add(2);
      expect(list.toArray(0)).toEqual([1, 2, 2, 3]);
      expect(list.has(2)).toBeTruthy();
    });

    it('should add non-consecutive elements', () => {
      const list = new SkipList();
      list.add(1);
      list.add(3);
      list.add(5);
      expect(list.toArray(0)).toEqual([1, 3, 5]);
      expect(list.has(1)).toBeTruthy();
      expect(list.has(3)).toBeTruthy();
      expect(list.has(5)).toBeTruthy();

      list.add(2);
      expect(list.toArray(0)).toEqual([1, 2, 3, 5]);
      expect(list.has(2)).toBeTruthy();
    });
  });

  describe('Remove Operations', () => {
    it('should handle removal when empty', () => {
      const list = new SkipList();
      list.remove(1);
      expect(list.toArray(0)).toEqual([]);
      expect(list.has(1)).toBeFalsy();
    });

    it('should remove the first element', () => {
      const list = new SkipList();
      list.add(1);
      list.add(3);
      list.add(5);
      list.add(2);
      list.remove(1);
      expect(list.toArray(0)).toEqual([2, 3, 5]);
      expect(list.has(1)).toBeFalsy();
      expect(list.has(2)).toBeTruthy();
      expect(list.has(3)).toBeTruthy();
      expect(list.has(5)).toBeTruthy();
    });

    it('should remove the first element with duplicates', () => {
      const list = new SkipList();
      list.add(1);
      list.add(3);
      list.add(5);
      list.add(1);
      list.add(2);
      list.remove(1);
      expect(list.toArray(0)).toEqual([1, 2, 3, 5]);
      expect(list.has(1)).toBeTruthy();
      expect(list.has(2)).toBeTruthy();
      expect(list.has(3)).toBeTruthy();
      expect(list.has(5)).toBeTruthy();

      list.remove(1);
      expect(list.toArray(0)).toEqual([2, 3, 5]);
      expect(list.has(1)).toBeFalsy();
      expect(list.has(2)).toBeTruthy();
      expect(list.has(3)).toBeTruthy();
      expect(list.has(5)).toBeTruthy();
    });

    it('should remove the last element', () => {
      const list = new SkipList();
      list.add(1);
      list.add(3);
      list.add(5);
      list.add(2);
      list.remove(5);
      expect(list.toArray(0)).toEqual([1, 2, 3]);
      expect(list.has(1)).toBeTruthy();
      expect(list.has(2)).toBeTruthy();
      expect(list.has(3)).toBeTruthy();
      expect(list.has(5)).toBeFalsy();
    });

    it('should remove the last element with duplicates', () => {
      const list = new SkipList();
      list.add(1);
      list.add(3);
      list.add(5);
      list.add(2);
      list.add(5);
      list.remove(5);
      expect(list.toArray(0)).toEqual([1, 2, 3, 5]);
      expect(list.has(1)).toBeTruthy();
      expect(list.has(2)).toBeTruthy();
      expect(list.has(3)).toBeTruthy();
      expect(list.has(5)).toBeTruthy();

      list.remove(5);
      expect(list.toArray(0)).toEqual([1, 2, 3]);
      expect(list.has(1)).toBeTruthy();
      expect(list.has(2)).toBeTruthy();
      expect(list.has(3)).toBeTruthy();
      expect(list.has(5)).toBeFalsy();
    });

    it('should remove an element in the middle', () => {
      const list = new SkipList();
      list.add(1);
      list.add(3);
      list.add(5);
      list.add(2);
      list.remove(3);
      expect(list.toArray(0)).toEqual([1, 2, 5]);
      expect(list.has(1)).toBeTruthy();
      expect(list.has(2)).toBeTruthy();
      expect(list.has(3)).toBeFalsy();
      expect(list.has(5)).toBeTruthy();
    });

    it('should remove an element in the middle with duplicates', () => {
      const list = new SkipList();
      list.add(1);
      list.add(3);
      list.add(5);
      list.add(2);
      list.add(3);
      list.remove(3);
      expect(list.toArray(0)).toEqual([1, 2, 3, 5]);
      expect(list.has(1)).toBeTruthy();
      expect(list.has(2)).toBeTruthy();
      expect(list.has(3)).toBeTruthy();
      expect(list.has(5)).toBeTruthy();

      list.remove(3);
      expect(list.toArray(0)).toEqual([1, 2, 5]);
      expect(list.has(1)).toBeTruthy();
      expect(list.has(2)).toBeTruthy();
      expect(list.has(3)).toBeFalsy();
      expect(list.has(5)).toBeTruthy();
    });
  });

  describe('Search Operations', () => {
    it('should search by index', () => {
      const list = new SkipList();
      expect(list.searchByIndex(0)).toBe(undefined);
      expect(list.searchByIndex(1)).toBe(undefined);
      list.add(1);
      expect(list.searchByIndex(0)).toBe(1);
      expect(list.searchByIndex(1)).toBe(undefined);
      list.add(2);
      expect(list.searchByIndex(0)).toBe(1);
      expect(list.searchByIndex(1)).toBe(2);
      expect(list.searchByIndex(2)).toBe(undefined);
      list.add(5);
      expect(list.searchByIndex(0)).toBe(1);
      expect(list.searchByIndex(1)).toBe(2);
      expect(list.searchByIndex(2)).toBe(5);
      list.add(3);
      expect(list.searchByIndex(0)).toBe(1);
      expect(list.searchByIndex(1)).toBe(2);
      expect(list.searchByIndex(2)).toBe(3);
      expect(list.searchByIndex(3)).toBe(5);
      list.add(3);
      expect(list.searchByIndex(0)).toBe(1);
      expect(list.searchByIndex(1)).toBe(2);
      expect(list.searchByIndex(2)).toBe(3);
      expect(list.searchByIndex(3)).toBe(3);
      expect(list.searchByIndex(4)).toBe(5);
      list.add(5);
      expect(list.searchByIndex(0)).toBe(1);
      expect(list.searchByIndex(1)).toBe(2);
      expect(list.searchByIndex(2)).toBe(3);
      expect(list.searchByIndex(3)).toBe(3);
      expect(list.searchByIndex(4)).toBe(5);
      expect(list.searchByIndex(5)).toBe(5);
      expect(list.searchByIndex(6)).toBe(undefined);
      list.add(1);
      expect(list.searchByIndex(0)).toBe(1);
      expect(list.searchByIndex(1)).toBe(1);
      expect(list.searchByIndex(2)).toBe(2);
      expect(list.searchByIndex(3)).toBe(3);
      expect(list.searchByIndex(4)).toBe(3);
      expect(list.searchByIndex(5)).toBe(5);
      expect(list.searchByIndex(6)).toBe(5);
      expect(list.searchByIndex(7)).toBe(undefined);
      list.remove(5);
      expect(list.searchByIndex(0)).toBe(1);
      expect(list.searchByIndex(1)).toBe(1);
      expect(list.searchByIndex(2)).toBe(2);
      expect(list.searchByIndex(3)).toBe(3);
      expect(list.searchByIndex(4)).toBe(3);
      expect(list.searchByIndex(5)).toBe(5);
      expect(list.searchByIndex(6)).toBe(undefined);
      list.remove(2);
      expect(list.searchByIndex(0)).toBe(1);
      expect(list.searchByIndex(1)).toBe(1);
      expect(list.searchByIndex(2)).toBe(3);
      expect(list.searchByIndex(3)).toBe(3);
      expect(list.searchByIndex(4)).toBe(5);
      expect(list.searchByIndex(5)).toBe(undefined);
    });
  });

  describe('Comprehensive Tests', () => {
    it('should pass basic test case', () => {
      const list = new SkipList();
      list.add(0);
      list.add(5);
      list.add(2);
      list.add(1);
      expect(list.toArray(0)).toEqual([0, 1, 2, 5]);
      expect(list.has(0)).toBeTruthy();
    });

    it('should pass complicated test case', () => {
      const list = new SkipList();
      list.add(16);
      list.add(5);
      list.add(14);
      list.add(13);
      list.add(0);
      list.add(3);
      list.add(12);
      list.add(9);
      list.add(12);
      list.remove(3);
      expect(list.has(6)).toBeFalsy();
      list.add(7);
      list.remove(0);
      list.remove(1);
      list.remove(10);
      list.add(5);
      expect(list.has(12)).toBeTruthy();
      expect(list.has(7)).toBeTruthy();
      expect(list.has(16)).toBeTruthy();
      list.remove(7);
      expect(list.has(0)).toBeFalsy();
      list.add(9);
      list.add(16);
      list.add(3);
      list.remove(2);
      expect(list.has(17)).toBeFalsy();
      list.add(2);
      expect(list.has(17)).toBeFalsy();
      list.remove(0);
      expect(list.has(9)).toBeTruthy();
      expect(list.has(14)).toBeTruthy();
      list.remove(1);
      list.remove(6);
      list.add(1);
      list.remove(16);
      expect(list.has(9)).toBeTruthy();
      list.remove(10);
      list.remove(9);
      expect(list.has(2)).toBeTruthy();
      list.add(3);
      list.add(16);
      list.remove(15);
      list.remove(12);
      list.remove(7);
      list.add(4);
      list.remove(3);
      list.add(2);
      list.remove(1);
      list.remove(14);
      list.add(13);
      list.add(12);
      list.add(3);
      expect(list.has(6)).toBeFalsy();
      expect(list.has(17)).toBeFalsy();
      list.add(2);
      list.remove(3);
      expect(list.has(14)).toBeFalsy();
      list.add(11);
      list.add(0);
      expect(list.has(13)).toBeTruthy();
      list.add(2);
      expect(list.has(1)).toBeFalsy();
      list.remove(10);
      list.remove(17);
      expect(list.has(0)).toBeTruthy();
      expect(list.has(5)).toBeTruthy();
      list.remove(8);
      expect(list.has(9)).toBeTruthy();
      list.add(8);
      list.remove(11);
      expect(list.has(10)).toBeFalsy();
      list.remove(11);
      expect(list.has(10)).toBeFalsy();
      list.remove(9);
      list.remove(8);
      expect(list.has(15)).toBeFalsy();
      expect(list.has(14)).toBeFalsy();
      list.add(1);
      list.add(6);
      list.add(17);
      list.add(16);
      expect(list.has(13)).toBeTruthy();
      expect(list.has(4)).toBeTruthy();
      expect(list.has(5)).toBeTruthy();
      expect(list.has(4)).toBeTruthy();
      expect(list.has(17)).toBeTruthy();
      expect(list.has(16)).toBeTruthy();
      expect(list.has(7)).toBeFalsy();
      expect(list.has(14)).toBeFalsy();
      expect(list.has(1)).toBeTruthy();
    });
  });
});
