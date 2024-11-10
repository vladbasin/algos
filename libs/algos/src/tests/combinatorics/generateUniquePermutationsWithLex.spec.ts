import { generateUniquePermutationsWithLex } from '../../lib';

describe('generateUniquePermutationsWithLex', () => {
  it('should handle basic duplicate case', () => {
    const input = [1, 1, 2];
    const expected = [
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
    ];
    expect(generateUniquePermutationsWithLex(input)).toEqual(expect.arrayContaining(expected));
  });

  it('should handle no duplicates case', () => {
    const input = [1, 2, 3];
    const expected = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ];
    expect(generateUniquePermutationsWithLex(input)).toEqual(expect.arrayContaining(expected));
  });

  it('should multiple duplicates case', () => {
    const input = [1, 1, 2, 2];
    const expected = [
      [1, 1, 2, 2],
      [1, 2, 1, 2],
      [1, 2, 2, 1],
      [2, 1, 1, 2],
      [2, 1, 2, 1],
      [2, 2, 1, 1],
    ];
    expect(generateUniquePermutationsWithLex(input)).toEqual(expect.arrayContaining(expected));
  });

  it('should handle empty array', () => {
    const input: number[] = [];
    const expected: number[][] = [];
    expect(generateUniquePermutationsWithLex(input)).toEqual(expected);
  });

  it('should handle single element array', () => {
    const input = [1];
    const expected = [[1]];
    expect(generateUniquePermutationsWithLex(input)).toEqual(expected);
  });

  it('should handle all duplicates', () => {
    const input = [1, 1, 1];
    const expected = [[1, 1, 1]];
    expect(generateUniquePermutationsWithLex(input)).toEqual(expected);
  });

  it('should handle multiple duplicates with larger counts', () => {
    const input = [1, 1, 1, 2, 2, 2];
    const expectedNumberOfPermutations = 20; // 6! / (3! * 3!) = 720 / 36 = 20
    const result = generateUniquePermutationsWithLex(input);
    expect(result.length).toBe(expectedNumberOfPermutations);
  });

  it('should handle negative numbers and duplicates', () => {
    const input = [-1, -1, 2];
    const expected = [
      [-1, -1, 2],
      [-1, 2, -1],
      [2, -1, -1],
    ];
    expect(generateUniquePermutationsWithLex(input)).toEqual(expect.arrayContaining(expected));
    expect(generateUniquePermutationsWithLex(input).length).toBe(expected.length);
  });

  it('should handle array with multiple duplicates and non-adjacent duplicates', () => {
    const input = [1, 2, 1, 3];
    const expected = [
      [1, 1, 2, 3],
      [1, 1, 3, 2],
      [1, 2, 1, 3],
      [1, 2, 3, 1],
      [1, 3, 1, 2],
      [1, 3, 2, 1],
      [2, 1, 1, 3],
      [2, 1, 3, 1],
      [2, 3, 1, 1],
      [3, 1, 1, 2],
      [3, 1, 2, 1],
      [3, 2, 1, 1],
    ];
    expect(generateUniquePermutationsWithLex(input)).toEqual(expect.arrayContaining(expected));
    expect(generateUniquePermutationsWithLex(input).length).toBe(expected.length);
  });

  it('should handle large arrays', () => {
    const input = [1, 2, 2, 3, 3];
    const expectedNumberOfPermutations = 30; // 5! / (2! * 2!) = 120 / 4 = 30
    const result = generateUniquePermutationsWithLex(input);
    expect(result.length).toBe(expectedNumberOfPermutations);
  });
});
