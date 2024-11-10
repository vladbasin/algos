import { generatePermutations } from '../../lib';

describe('generatePermutations', () => {
  it('should return [[]] when input is an empty array', () => {
    const input: number[] = [];
    const result = generatePermutations(input);
    expect(result).toEqual([]);
  });

  it('should return [[1]] when input is [1]', () => {
    const input = [1];
    const expected = [[1]];
    const result = generatePermutations(input);
    expect(result).toEqual(expected);
  });

  it('should return correct permutations for [1, 2]', () => {
    const input = [1, 2];
    const expected = [
      [1, 2],
      [2, 1],
    ];
    const result = generatePermutations(input);
    expect(result).toEqual(expected);
  });

  it('should return correct permutations for [1, 2, 3]', () => {
    const input = [1, 2, 3];
    const expected = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 2, 1],
      [3, 1, 2],
    ];
    const result = generatePermutations(input);
    expect(result.length).toBe(6);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it('should handle arrays with duplicate elements [1, 1, 2]', () => {
    const input = [1, 1, 2];
    const expected = [
      [1, 1, 2],
      [1, 2, 1],
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
      [2, 1, 1],
    ];
    const result = generatePermutations(input);
    expect(result.length).toBe(6);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it('should handle arrays with all duplicate elements [1, 1, 1]', () => {
    const input = [1, 1, 1];
    const expected = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ];
    const result = generatePermutations(input);
    expect(result.length).toBe(6);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it('should not modify the original input array', () => {
    const input = [1, 2, 3];
    const copy = [...input];
    generatePermutations(input);
    expect(input).toEqual(copy);
  });

  it('should handle arrays with null elements', () => {
    const input = [null, 1, 2];
    const expected = [
      [null, 1, 2],
      [null, 2, 1],
      [1, null, 2],
      [1, 2, null],
      [2, 1, null],
      [2, null, 1],
    ];
    const result = generatePermutations(input);
    expect(result.length).toBe(6);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it('should handle arrays with undefined elements', () => {
    const input = [undefined, 1, 2];
    const expected = [
      [undefined, 1, 2],
      [undefined, 2, 1],
      [1, undefined, 2],
      [1, 2, undefined],
      [2, 1, undefined],
      [2, undefined, 1],
    ];
    const result = generatePermutations(input);
    expect(result.length).toBe(6);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it('should handle arrays of strings', () => {
    const input = ['a', 'b', 'c'];
    const expected = [
      ['a', 'b', 'c'],
      ['a', 'c', 'b'],
      ['b', 'a', 'c'],
      ['b', 'c', 'a'],
      ['c', 'b', 'a'],
      ['c', 'a', 'b'],
    ];
    const result = generatePermutations(input);
    expect(result.length).toBe(6);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it('should handle arrays of objects', () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const obj3 = { id: 3 };
    const input = [obj1, obj2, obj3];
    const result = generatePermutations(input);
    expect(result.length).toBe(6);
    expect(result).toEqual(
      expect.arrayContaining([
        [obj1, obj2, obj3],
        [obj1, obj3, obj2],
        [obj2, obj1, obj3],
        [obj2, obj3, obj1],
        [obj3, obj1, obj2],
        [obj3, obj2, obj1],
      ])
    );
  });

  it('should handle arrays with special numeric values', () => {
    const input = [NaN, Infinity, -Infinity];
    const expected = [
      [NaN, Infinity, -Infinity],
      [NaN, -Infinity, Infinity],
      [Infinity, NaN, -Infinity],
      [Infinity, -Infinity, NaN],
      [-Infinity, NaN, Infinity],
      [-Infinity, Infinity, NaN],
    ];
    const result = generatePermutations(input);
    expect(result.length).toBe(6);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it('should handle arrays with mixed types', () => {
    const input = [1, 'a'];
    const expected = [
      [1, 'a'],
      ['a', 1],
    ];
    const result = generatePermutations(input);
    expect(result.length).toBe(2);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it('should return 24 permutations for [1, 2, 3, 4]', () => {
    const input = [1, 2, 3, 4];
    const result = generatePermutations(input);
    expect(result.length).toBe(24);
  });

  it('should handle sparse arrays with empty slots', () => {
    const input = [1, undefined, 3]; // Sparse array with an empty slot
    const expected = [
      [1, undefined, 3],
      [1, 3, undefined],
      [undefined, 1, 3],
      [undefined, 3, 1],
      [3, undefined, 1],
      [3, 1, undefined],
    ];
    const result = generatePermutations(input);
    expect(result.length).toBe(6);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
