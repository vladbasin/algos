import { generateCombinationsOfSize } from '../../lib/';

describe('generateCombinationsOfSize', () => {
  it('should generate for a basic case k = 1', () => {
    const input = [1, 2, 3, 4];
    const expected = [[1], [2], [3], [4]];
    expect(generateCombinationsOfSize(input, 1)).toEqual(expect.arrayContaining(expected));
  });

  it('should generate for a basic case k = 2', () => {
    const input = [1, 2, 3, 4];
    const expected = [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4],
    ];
    expect(generateCombinationsOfSize(input, 2)).toEqual(expect.arrayContaining(expected));
  });

  it('should return an empty combination when length is 0', () => {
    const input = [1, 2, 3];
    const expected = [[]];
    expect(generateCombinationsOfSize(input, 0)).toEqual(expected);
  });

  it('should return the source array as the only combination when length equals source length', () => {
    const input = [1, 2, 3];
    const expected = [[1, 2, 3]];
    expect(generateCombinationsOfSize(input, 3)).toEqual(expected);
  });

  it('should throw an error when length is greater than source length', () => {
    const input = [1, 2, 3];
    expect(() => generateCombinationsOfSize(input, 4)).toThrow();
  });

  it('should return an array with an empty array when source is empty and length is 0', () => {
    const input: number[] = [];
    const expected = [[]];
    expect(generateCombinationsOfSize(input, 0)).toEqual(expected);
  });

  it('should throw an error when source is empty and length is greater than 0', () => {
    const input: number[] = [];
    expect(() => generateCombinationsOfSize(input, 1)).toThrow();
  });

  it('should generate combinations correctly when source contains duplicate elements', () => {
    const input = [1, 1, 2];
    const expected = [
      [1, 1],
      [1, 2],
      [1, 2],
    ];
    const result = generateCombinationsOfSize(input, 2);
    expect(result.length).toBe(3);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it('should generate combinations with strings', () => {
    const input = ['a', 'b', 'c'];
    const expected = [
      ['a', 'b'],
      ['a', 'c'],
      ['b', 'c'],
    ];
    expect(generateCombinationsOfSize(input, 2)).toEqual(expect.arrayContaining(expected));
  });

  it('should throw an error when length is negative', () => {
    const input = [1, 2, 3];
    expect(() => generateCombinationsOfSize(input, -1)).toThrow();
  });

  it('should return an empty array when length is non-integer', () => {
    const input = [1, 2, 3];
    expect(generateCombinationsOfSize(input, 1.5)).toEqual([]);
  });

  it('should generate combinations with objects', () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const obj3 = { id: 3 };
    const input = [obj1, obj2, obj3];
    const expected = [
      [obj1, obj2],
      [obj1, obj3],
      [obj2, obj3],
    ];
    expect(generateCombinationsOfSize(input, 2)).toEqual(expect.arrayContaining(expected));
  });

  it('should generate combinations when source contains null or undefined', () => {
    const input = [null, undefined, 1];
    const expected = [
      [null, undefined],
      [null, 1],
      [undefined, 1],
    ];
    expect(generateCombinationsOfSize(input, 2)).toEqual(expect.arrayContaining(expected));
  });

  it('should handle source with a single element', () => {
    const input = [1];
    const expectedLength0 = [[]];
    const expectedLength1 = [[1]];
    expect(generateCombinationsOfSize(input, 0)).toEqual(expectedLength0);
    expect(generateCombinationsOfSize(input, 1)).toEqual(expectedLength1);
  });

  it('should handle repeated elements when length equals source length', () => {
    const input = [1, 1, 1];
    const expected = [[1, 1, 1]];
    expect(generateCombinationsOfSize(input, 3)).toEqual(expected);
  });
});
