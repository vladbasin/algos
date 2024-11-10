import { Queue } from '../../lib';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  describe('Initialization', () => {
    it('should initialize with length 0', () => {
      expect(queue.length).toBe(0);
    });
  });

  describe('Enqueue', () => {
    it('should enqueue elements correctly', () => {
      queue.enqueue(1);
      expect(queue.length).toBe(1);
      expect(queue.peek()).toBe(1);

      queue.enqueue(2);
      expect(queue.length).toBe(2);
      expect(queue.peek()).toBe(1);
    });

    it('should handle multiple enqueues correctly', () => {
      for (let i = 1; i <= 10; i++) {
        queue.enqueue(i);
        expect(queue.length).toBe(i);
        expect(queue.peek()).toBe(1);
      }
    });
  });

  describe('Dequeue', () => {
    it('should dequeue elements correctly', () => {
      queue.enqueue(1);
      queue.enqueue(2);

      expect(queue.length).toBe(2);
      expect(queue.peek()).toBe(1);

      expect(queue.dequeue()).toBe(1);
      expect(queue.length).toBe(1);
      expect(queue.peek()).toBe(2);

      expect(queue.dequeue()).toBe(2);
      expect(queue.length).toBe(0);
      expect(queue.peek()).toBe(undefined);
    });

    it('should handle dequeue from an empty queue correctly', () => {
      expect(queue.dequeue()).toBe(undefined);
      expect(queue.length).toBe(0);
    });

    it('should maintain correct order after multiple dequeues', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.dequeue()).toBe(1);
      expect(queue.dequeue()).toBe(2);
      expect(queue.dequeue()).toBe(3);
      expect(queue.length).toBe(0);
    });
  });

  describe('Peek', () => {
    it('should peek the front element correctly', () => {
      queue.enqueue(1);
      queue.enqueue(2);

      expect(queue.peek()).toBe(1);
      expect(queue.length).toBe(2);
    });

    it('should handle peek on an empty queue correctly', () => {
      expect(queue.peek()).toBe(undefined);
      expect(queue.length).toBe(0);
    });
  });

  describe('Integration Tests', () => {
    it('should handle sequential operations correctly', () => {
      queue.enqueue(1);
      expect(queue.peek()).toBe(1);
      queue.enqueue(2);
      expect(queue.peek()).toBe(1);
      queue.dequeue();
      expect(queue.peek()).toBe(2);
      queue.dequeue();
      expect(queue.peek()).toBe(undefined);
    });
  });

  describe('Edge Cases', () => {
    it('should handle enqueue and dequeue on large number of elements', () => {
      for (let i = 1; i <= 1000; i++) {
        queue.enqueue(i);
      }
      expect(queue.length).toBe(1000);

      for (let i = 1; i <= 1000; i++) {
        expect(queue.dequeue()).toBe(i);
      }
      expect(queue.length).toBe(0);
    });

    it('should handle alternating enqueue and dequeue operations', () => {
      queue.enqueue(1);
      expect(queue.dequeue()).toBe(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.dequeue()).toBe(2);
      expect(queue.peek()).toBe(3);
    });
  });
});
