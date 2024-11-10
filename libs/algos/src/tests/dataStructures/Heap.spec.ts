import { Heap } from '../../lib';

describe('Heap', () => {
  describe('Max Heap', () => {
    let heap: Heap<{ value: number }>;

    beforeEach(() => {
      heap = new Heap('max');
    });

    it('should handle empty heap', () => {
      expect(heap.peek()?.value).toBe(undefined);
      expect(heap.pop()?.value).toBe(undefined);
    });

    it('should add and remove single element', () => {
      heap.add({ value: 1 });
      expect(heap.size).toBe(1);
      expect(heap.peek()?.value).toBe(1);
      expect(heap.pop()?.value).toBe(1);
      expect(heap.size).toBe(0);
      expect(heap.peek()?.value).toBe(undefined);
    });

    it('should handle multiple elements in correct order', () => {
      heap.add({ value: 1 });
      heap.add({ value: 2 });
      heap.add({ value: 3 });
      expect(heap.size).toBe(3);
      expect(heap.peek()?.value).toBe(3);
      expect(heap.pop()?.value).toBe(3);
      expect(heap.size).toBe(2);
      expect(heap.peek()?.value).toBe(2);
      expect(heap.pop()?.value).toBe(2);
      expect(heap.peek()?.value).toBe(1);
      expect(heap.pop()?.value).toBe(1);
    });

    it('should handle duplicate elements', () => {
      heap.add({ value: 1 });
      heap.add({ value: 2 });
      heap.add({ value: 2 });
      heap.add({ value: 3 });
      expect(heap.size).toBe(4);
      expect(heap.peek()?.value).toBe(3);
      expect(heap.pop()?.value).toBe(3);
      expect(heap.size).toBe(3);
      expect(heap.peek()?.value).toBe(2);
      expect(heap.pop()?.value).toBe(2);
      expect(heap.peek()?.value).toBe(2);
      expect(heap.pop()?.value).toBe(2);
      expect(heap.peek()?.value).toBe(1);
    });

    it('should handle large number of elements', () => {
      const largeNumber = 10000;
      for (let i = 0; i < largeNumber; i++) {
        heap.add({ value: i });
      }
      expect(heap.size).toBe(largeNumber);
      expect(heap.peek()?.value).toBe(largeNumber - 1);
      for (let i = largeNumber - 1; i >= 0; i--) {
        expect(heap.pop()?.value).toBe(i);
      }
      expect(heap.size).toBe(0);
      expect(heap.peek()?.value).toBe(undefined);
    });

    it('should maintain heap properties after multiple operations', () => {
      const elements = [5, 3, 8, 1, 2, 7, 4, 6];
      elements.forEach((e) => heap.add({ value: e }));
      expect(heap.size).toBe(elements.length);
      expect(heap.peek()?.value).toBe(8);
      heap.pop();
      expect(heap.peek()?.value).toBe(7);
      heap.add({ value: 10 });
      expect(heap.peek()?.value).toBe(10);
      heap.pop();
      expect(heap.peek()?.value).toBe(7);
    });

    it('should handle mixed operations correctly', () => {
      heap.add({ value: 10 });
      heap.add({ value: 15 });
      expect(heap.peek()?.value).toBe(15);
      heap.pop();
      heap.add({ value: 5 });
      heap.add({ value: 30 });
      expect(heap.peek()?.value).toBe(30);
      heap.pop();
      heap.add({ value: 20 });
      expect(heap.peek()?.value).toBe(20);
    });
  });

  describe('Min Heap', () => {
    let heap: Heap<{ value: number }>;

    beforeEach(() => {
      heap = new Heap('min');
    });

    it('should handle empty heap', () => {
      expect(heap.peek()?.value).toBe(undefined);
      expect(heap.pop()?.value).toBe(undefined);
    });

    it('should add and remove single element', () => {
      heap.add({ value: 1 });
      expect(heap.size).toBe(1);
      expect(heap.peek()?.value).toBe(1);
      expect(heap.pop()?.value).toBe(1);
      expect(heap.size).toBe(0);
      expect(heap.peek()?.value).toBe(undefined);
    });

    it('should handle multiple elements in correct order', () => {
      heap.add({ value: 3 });
      heap.add({ value: 2 });
      heap.add({ value: 1 });
      expect(heap.size).toBe(3);
      expect(heap.peek()?.value).toBe(1);
      expect(heap.pop()?.value).toBe(1);
      expect(heap.size).toBe(2);
      expect(heap.peek()?.value).toBe(2);
      expect(heap.pop()?.value).toBe(2);
      expect(heap.peek()?.value).toBe(3);
      expect(heap.pop()?.value).toBe(3);
    });

    it('should handle duplicate elements', () => {
      heap.add({ value: 3 });
      heap.add({ value: 2 });
      heap.add({ value: 2 });
      heap.add({ value: 1 });
      expect(heap.size).toBe(4);
      expect(heap.peek()?.value).toBe(1);
      expect(heap.pop()?.value).toBe(1);
      expect(heap.size).toBe(3);
      expect(heap.peek()?.value).toBe(2);
      expect(heap.pop()?.value).toBe(2);
      expect(heap.peek()?.value).toBe(2);
      expect(heap.pop()?.value).toBe(2);
      expect(heap.peek()?.value).toBe(3);
    });

    it('should handle large number of elements', () => {
      const largeNumber = 10000;
      for (let i = 0; i < largeNumber; i++) {
        heap.add({ value: i });
      }
      expect(heap.size).toBe(largeNumber);
      expect(heap.peek()?.value).toBe(0);
      for (let i = 0; i < largeNumber; i++) {
        expect(heap.pop()?.value).toBe(i);
      }
      expect(heap.size).toBe(0);
      expect(heap.peek()?.value).toBe(undefined);
    });

    it('should maintain heap properties after multiple operations', () => {
      const elements = [5, 3, 8, 1, 2, 7, 4, 6];
      elements.forEach((e) => heap.add({ value: e }));
      expect(heap.size).toBe(elements.length);
      expect(heap.peek()?.value).toBe(1);
      heap.pop();
      expect(heap.peek()?.value).toBe(2);
      heap.add({ value: 0 });
      expect(heap.peek()?.value).toBe(0);
      heap.pop();
      expect(heap.peek()?.value).toBe(2);
    });

    it('should handle mixed operations correctly', () => {
      heap.add({ value: 10 });
      heap.add({ value: 5 });
      expect(heap.peek()?.value).toBe(5);
      heap.pop();
      heap.add({ value: 15 });
      heap.add({ value: 3 });
      expect(heap.peek()?.value).toBe(3);
      heap.pop();
      heap.add({ value: 20 });
      expect(heap.peek()?.value).toBe(10);
    });
  });
});
