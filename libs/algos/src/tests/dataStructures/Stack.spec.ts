import { Stack } from '../../lib';

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  describe('Initialization', () => {
    it('should initialize with length 0', () => {
      expect(stack.length).toBe(0);
    });
  });

  describe('Push', () => {
    it('should push elements correctly', () => {
      stack.push(1);
      expect(stack.length).toBe(1);
      expect(stack.peek()).toBe(1);

      stack.push(2);
      expect(stack.length).toBe(2);
      expect(stack.peek()).toBe(2);
    });

    it('should handle multiple pushes correctly', () => {
      for (let i = 1; i <= 10; i++) {
        stack.push(i);
        expect(stack.length).toBe(i);
        expect(stack.peek()).toBe(i);
      }
    });
  });

  describe('Pop', () => {
    it('should pop elements correctly', () => {
      stack.push(1);
      stack.push(2);

      expect(stack.length).toBe(2);
      expect(stack.pop()).toBe(2);
      expect(stack.length).toBe(1);
      expect(stack.peek()).toBe(1);

      expect(stack.pop()).toBe(1);
      expect(stack.length).toBe(0);
      expect(stack.peek()).toBe(undefined);
    });

    it('should handle pop from an empty stack correctly', () => {
      expect(stack.pop()).toBe(undefined);
      expect(stack.length).toBe(0);
    });

    it('should maintain correct order after multiple pops', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.pop()).toBe(3);
      expect(stack.pop()).toBe(2);
      expect(stack.pop()).toBe(1);
      expect(stack.length).toBe(0);
    });
  });

  describe('Peek', () => {
    it('should peek the top element correctly', () => {
      stack.push(1);
      stack.push(2);

      expect(stack.peek()).toBe(2);
      expect(stack.length).toBe(2);
    });

    it('should handle peek on an empty stack correctly', () => {
      expect(stack.peek()).toBe(undefined);
      expect(stack.length).toBe(0);
    });
  });

  describe('Integration Tests', () => {
    it('should handle sequential operations correctly', () => {
      stack.push(1);
      expect(stack.peek()).toBe(1);
      stack.push(2);
      expect(stack.peek()).toBe(2);
      stack.pop();
      expect(stack.peek()).toBe(1);
      stack.pop();
      expect(stack.peek()).toBe(undefined);
    });
  });

  describe('Edge Cases', () => {
    it('should handle push and pop on large number of elements', () => {
      for (let i = 1; i <= 1000; i++) {
        stack.push(i);
      }
      expect(stack.length).toBe(1000);

      for (let i = 1000; i >= 1; i--) {
        expect(stack.pop()).toBe(i);
      }
      expect(stack.length).toBe(0);
    });

    it('should handle alternating push and pop operations', () => {
      stack.push(1);
      expect(stack.pop()).toBe(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()).toBe(3);
      expect(stack.peek()).toBe(2);
    });
  });
});
