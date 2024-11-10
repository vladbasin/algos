import { generatePowerset } from '../../lib';

describe('generatePowerset', () => {
  it('should generate correct powers', () => {
    const input: number[] = [1, 2, 3];
    const expected = [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]];
    const result = generatePowerset(input);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it('should return [[]] when input is an empty array', () => {
    const input: number[] = [];
    const expectedOutput: number[][] = [[]];
    expect(generatePowerset(input)).toEqual(expectedOutput);
  });

  it('should return correct powerset for a single-element array', () => {
    const input = [1];
    const expectedOutput = [[], [1]];
    expect(generatePowerset(input)).toEqual(expectedOutput);
  });

  it('should return correct powerset for a two-element array', () => {
    const input = [1, 2];
    const expectedOutput = [[], [1], [2], [1, 2]];
    expect(generatePowerset(input)).toEqual(expect.arrayContaining(expectedOutput));
  });

  it('should return correct powerset for a three-element array', () => {
    const input = [1, 2, 3];
    const expectedOutput = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];
    expect(generatePowerset(input)).toEqual(expect.arrayContaining(expectedOutput));
  });

  it('should handle arrays with duplicate elements', () => {
    const input = [1, 1];
    const expectedOutput = [[], [1], [1], [1, 1]];
    expect(generatePowerset(input)).toEqual(expect.arrayContaining(expectedOutput));
  });

  it('should handle arrays with different data types', () => {
    const input = [1, 'a'];
    const expectedOutput = [[], [1], ['a'], [1, 'a']];
    expect(generatePowerset(input)).toEqual(expect.arrayContaining(expectedOutput));
  });

  it('should not mutate the input array', () => {
    const input = [1, 2, 3];
    const inputCopy = [...input];
    generatePowerset(input);
    expect(input).toEqual(inputCopy);
  });

  it('should return subsets with correct elements', () => {
    const input = [1, 2];
    const result = generatePowerset(input);
    expect(result).toEqual(expect.arrayContaining([[], [1], [2], [1, 2]]));
  });

  it('should handle arrays with objects', () => {
    const obj1 = { key: 'value1' };
    const obj2 = { key: 'value2' };
    const input = [obj1, obj2];
    const expectedOutput = [[], [obj1], [obj2], [obj1, obj2]];
    expect(generatePowerset(input)).toEqual(expect.arrayContaining(expectedOutput));
  });

  it('should handle large arrays without performance issues', () => {
    const input = Array.from({ length: 10 }, (_, i) => i);
    const result = generatePowerset(input);
    expect(result.length).toBe(2 ** 10);
  });

  it('should correctly handle nested arrays as elements', () => {
    const input = [1, [2, 3]];
    const expectedOutput = [[], [1], [[2, 3]], [1, [2, 3]]];
    expect(generatePowerset(input)).toEqual(expect.arrayContaining(expectedOutput));
  });

  // Edge case to uncover potential bugs
  it('should correctly handle elements with the same stringified value', () => {
    const input = [NaN, NaN];
    const result = generatePowerset(input);
    expect(result).toEqual(expect.arrayContaining([[], [NaN], [NaN], [NaN, NaN]]));
  });
});
