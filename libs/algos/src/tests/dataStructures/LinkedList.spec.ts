import { LinkedList } from '../../lib';

describe('LinkedList', () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  describe('Initialization', () => {
    it('should initialize with length 0', () => {
      expect(list.length).toBe(0);
    });
  });

  describe('Addition', () => {
    it('should add elements at the tail correctly', () => {
      list.addTail(1);
      list.addTail(2);
      list.addTail(3);

      expect(list.length).toBe(3);
      expect(list.tail).toBe(3);
      expect(list.head).toBe(1);
    });

    it('should add elements at the head correctly', () => {
      list.addHead(3);
      list.addHead(2);
      list.addHead(1);

      expect(list.length).toBe(3);
      expect(list.head).toBe(1);
      expect(list.tail).toBe(3);
    });

    it('should add elements at specific indices correctly', () => {
      list.addElementAtIndex(0, 1);
      list.addElementAtIndex(1, 3);
      list.addElementAtIndex(1, 2);

      expect(list.length).toBe(3);
      expect(list.searchByIndex(0)).toBe(1);
      expect(list.searchByIndex(1)).toBe(2);
      expect(list.searchByIndex(2)).toBe(3);
    });

    it('should add elements before a specific element correctly', () => {
      list.addTailElement(1);
      const third = list.addTailElement(3);
      list.addBeforeElement(third, 2);

      expect(list.length).toBe(3);
      expect(list.searchByIndex(1)).toBe(2);
    });

    it('should add elements after a specific element correctly', () => {
      const first = list.addTailElement(1);
      list.addTailElement(2);
      list.addAfterElement(first, 1.5);

      expect(list.length).toBe(3);
      expect(list.searchByIndex(1)).toBe(1.5);
    });
  });

  describe('Removal', () => {
    it('should remove head correctly', () => {
      list.addTail(1);
      list.addTail(2);
      list.addTail(3);

      expect(list.removeHead()).toBe(1);
      expect(list.head).toBe(2);
    });

    it('should remove tail correctly', () => {
      list.addTail(1);
      list.addTail(2);
      list.addTail(3);

      expect(list.removeTail()).toBe(3);
      expect(list.tail).toBe(2);
    });

    it('should remove element at specific index correctly', () => {
      list.addTail(1);
      list.addTail(2);
      list.addTail(3);

      expect(list.removeAtIndex(1)).toBe(2);
      expect(list.searchByIndex(1)).toBe(3);
    });

    it('should remove specific element correctly', () => {
      list.addTailElement(1);
      const second = list.addTailElement(2);
      list.addTailElement(3);

      expect(list.removeElement(second)).toBe(second);
      expect(list.searchByIndex(1)).toBe(3);
    });
  });

  describe('Searching', () => {
    it('should search elements by index correctly', () => {
      list.addTail(1);
      list.addTail(2);
      list.addTail(3);

      expect(list.searchByIndex(0)).toBe(1);
      expect(list.searchByIndex(1)).toBe(2);
      expect(list.searchByIndex(2)).toBe(3);
      expect(list.searchByIndex(3)).toBe(undefined);
      expect(list.searchByIndex(-1)).toBe(undefined);
    });
  });

  describe('Integration Tests', () => {
    it('should pass after combination of commands', () => {
      list.addHead(1);
      list.addTail(3);
      list.addAtIndex(1, 2);
      expect(list.searchByIndex(1)).toBe(2);
      list.removeAtIndex(1);
      expect(list.searchByIndex(1)).toBe(3);
    });
  });

  describe('Iteration', () => {
    it('should iterate values', () => {
      list.addTail(1);
      list.addTail(2);
      list.addTail(3);

      expect(Array.from(list)).toEqual([1, 2, 3]);
    });
  });
});
