import { HashMap } from '../../lib';

describe('HashMap', () => {
  describe('Basic Operations', () => {
    it('should handle duplicates', () => {
      const map = new HashMap<string, number>(100);
      map.put('1', 1);
      map.put('2', 2);
      map.put('1', 2);
      expect(map.get('1')).toBe(2);
      expect(map.get('2')).toBe(2);
      map.remove('1');
      expect(map.get('1')).toBe(undefined);
    });

    it('should handle insertion and retrieval', () => {
      const map = new HashMap<string, number>(100);
      map.put('key1', 10);
      map.put('key2', 20);
      expect(map.get('key1')).toBe(10);
      expect(map.get('key2')).toBe(20);
    });

    it('should handle removal of elements', () => {
      const map = new HashMap<string, number>(100);
      map.put('key1', 10);
      map.put('key2', 20);
      map.remove('key1');
      expect(map.get('key1')).toBe(undefined);
      expect(map.get('key2')).toBe(20);
    });

    it('should return undefined for non-existent keys', () => {
      const map = new HashMap<string, number>(100);
      expect(map.get('nonExistentKey')).toBe(undefined);
    });
  });

  describe('Collision Handling', () => {
    it('should handle hash collisions', () => {
      const map = new HashMap<number, string>(10);
      // Create two different keys with the same hash
      const key1 = 1;
      const key2 = 11; // Assuming a simple mod-based hash function
      map.put(key1, 'value1');
      map.put(key2, 'value2');
      expect(map.get(key1)).toBe('value1');
      expect(map.get(key2)).toBe('value2');
    });

    it('should handle updating values with hash collisions', () => {
      const map = new HashMap<number, string>(10);
      const key1 = 1;
      const key2 = 11;
      map.put(key1, 'value1');
      map.put(key2, 'value2');
      map.put(key1, 'newValue1');
      expect(map.get(key1)).toBe('newValue1');
      expect(map.get(key2)).toBe('value2');
    });
  });

  describe('Edge Cases', () => {
    it('should handle null and undefined keys', () => {
      const map = new HashMap<unknown, number>(100);
      map.put(null, 1);
      map.put(undefined, 2);
      expect(map.get(null)).toBe(1);
      expect(map.get(undefined)).toBe(2);
    });

    it('should handle null and undefined values', () => {
      const map = new HashMap<string, unknown>(100);
      map.put('nullValue', null);
      map.put('undefinedValue', undefined);
      expect(map.get('nullValue')).toBe(null);
      expect(map.get('undefinedValue')).toBe(undefined);
    });

    it('should handle special character keys', () => {
      const map = new HashMap<string, number>(100);
      map.put('!@#$', 1);
      map.put('😊', 2);
      expect(map.get('!@#$')).toBe(1);
      expect(map.get('😊')).toBe(2);
    });

    it('should handle very large keys', () => {
      const map = new HashMap<string, number>(100);
      const largeKey = 'a'.repeat(1000);
      map.put(largeKey, 1);
      expect(map.get(largeKey)).toBe(1);
    });
  });
});
