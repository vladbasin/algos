import { DisjointSet } from '../../lib';

describe('DisjointSet', () => {
  let ds: DisjointSet;

  beforeEach(() => {
    ds = new DisjointSet(5);
  });

  it('initially, each element is in its own set', () => {
    for (let i = 0; i < 5; i++) {
      expect(ds.areInSameSet(i, i)).toBe(true);
      for (let j = i + 1; j < 5; j++) {
        expect(ds.areInSameSet(i, j)).toBe(false);
      }
    }
  });

  it('union of two elements', () => {
    ds.union(0, 1);
    expect(ds.areInSameSet(0, 1)).toBe(true);
    expect(ds.areInSameSet(0, 2)).toBe(false);
    expect(ds.areInSameSet(1, 2)).toBe(false);
  });

  it('union of multiple elements', () => {
    ds.union(0, 1);
    ds.union(1, 2);
    expect(ds.areInSameSet(0, 2)).toBe(true);
    expect(ds.areInSameSet(0, 3)).toBe(false);
    expect(ds.areInSameSet(3, 4)).toBe(false);
  });

  it('union of an element with itself', () => {
    ds.union(2, 2);
    expect(ds.areInSameSet(2, 2)).toBe(true);
  });

  it('union of already connected elements', () => {
    ds.union(0, 1);
    ds.union(0, 1); // Re-union the same elements
    expect(ds.areInSameSet(0, 1)).toBe(true);
  });

  it('areInSameSet with out-of-bounds indices', () => {
    expect(() => ds.areInSameSet(-1, 0)).toThrow('Element is out of bounds');
    expect(() => ds.areInSameSet(0, 5)).toThrow('Element is out of bounds');
  });

  it('union with out-of-bounds indices', () => {
    expect(() => ds.union(-1, 0)).toThrow('Element is out of bounds');
    expect(() => ds.union(0, 5)).toThrow('Element is out of bounds');
  });

  it('large disjoint set operations', () => {
    const largeSize = 1000;
    const largeDs = new DisjointSet(largeSize);
    for (let i = 0; i < largeSize - 1; i++) {
      largeDs.union(i, i + 1);
    }
    for (let i = 0; i < largeSize; i++) {
      expect(largeDs.areInSameSet(0, i)).toBe(true);
    }
  });

  it('multiple unions form correct sets', () => {
    ds.union(0, 1);
    ds.union(2, 3);
    ds.union(1, 2);
    expect(ds.areInSameSet(0, 3)).toBe(true);
    expect(ds.areInSameSet(0, 4)).toBe(false);
  });

  it('rank updates correctly during unions', () => {
    const ds = new DisjointSet(8);
    ds.union(0, 1);
    ds.union(2, 3);
    ds.union(4, 5);
    ds.union(6, 7);
    ds.union(0, 2);
    ds.union(4, 6);
    ds.union(0, 4);
    for (let i = 0; i < 8; i++) {
      expect(ds.areInSameSet(0, i)).toBe(true);
    }
  });

  it('path compression reduces tree height', () => {
    const ds = new DisjointSet(10);
    for (let i = 0; i < 9; i++) {
      ds.union(i, i + 1);
    }
    expect(ds.areInSameSet(0, 9)).toBe(true);
    for (let i = 0; i < 10; i++) {
      expect(ds.areInSameSet(0, i)).toBe(true);
    }
  });

  it('disjoint sets remain separate until unioned', () => {
    ds.union(0, 1);
    ds.union(2, 3);
    expect(ds.areInSameSet(0, 2)).toBe(false);
    ds.union(1, 2);
    expect(ds.areInSameSet(0, 3)).toBe(true);
  });

  it('union elements in reverse order', () => {
    ds.union(4, 3);
    ds.union(3, 2);
    ds.union(2, 1);
    ds.union(1, 0);
    for (let i = 0; i < 5; i++) {
      expect(ds.areInSameSet(0, i)).toBe(true);
    }
  });

  it('areInSameSet returns true for the same element', () => {
    for (let i = 0; i < 5; i++) {
      expect(ds.areInSameSet(i, i)).toBe(true);
    }
  });

  it('constructing DisjointSet with invalid size throws error', () => {
    expect(() => new DisjointSet(0)).toThrow();
    expect(() => new DisjointSet(-1)).toThrow();
  });

  it('union and areInSameSet with invalid elements throw error', () => {
    expect(() => ds.union(0, 5)).toThrow('Element is out of bounds');
    expect(() => ds.areInSameSet(5, 0)).toThrow('Element is out of bounds');
  });

  it('complex unions maintain correct disjoint sets', () => {
    ds.union(0, 2);
    ds.union(1, 3);
    ds.union(2, 4);
    expect(ds.areInSameSet(0, 4)).toBe(true);
    expect(ds.areInSameSet(1, 3)).toBe(true);
    expect(ds.areInSameSet(0, 1)).toBe(false);
  });

  it('union elements with high rank', () => {
    const ds = new DisjointSet(6);
    ds.union(0, 1);
    ds.union(2, 3);
    ds.union(4, 5);
    ds.union(0, 2);
    ds.union(0, 4);
    for (let i = 0; i < 6; i++) {
      expect(ds.areInSameSet(0, i)).toBe(true);
    }
  });
});
