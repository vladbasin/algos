import { generateNextLexPermutation } from '../../lib';

describe('generateNextLexPermutation', () => {
  it('generates first', () => {
    const input = [1, 2, 3, 4];
    const expected = [1, 2, 4, 3];
    expect(generateNextLexPermutation(input)).toEqual(expected);
  });

  it('generates second', () => {
    const input = [1, 2, 4, 3];
    const expected = [1, 3, 2, 4];
    expect(generateNextLexPermutation(input)).toEqual(expected);
  });

  it('generates third', () => {
    const input = [1, 3, 2, 4];
    const expected = [1, 3, 4, 2];
    expect(generateNextLexPermutation(input)).toEqual(expected);
  });

  it('generates fourth', () => {
    const input = [1, 3, 4, 2];
    const expected = [1, 4, 2, 3];
    expect(generateNextLexPermutation(input)).toEqual(expected);
  });

  it('generates next which changes first element', () => {
    const input = [3, 4, 2, 1];
    const expected = [4, 1, 2, 3];
    expect(generateNextLexPermutation(input)).toEqual(expected);
  });

  it('generates last', () => {
    const input = [4, 3, 1, 2];
    const expected = [4, 3, 2, 1];
    expect(generateNextLexPermutation(input)).toEqual(expected);
  });

  it('throws an error for empty array', () => {
    expect(() => generateNextLexPermutation([])).toThrow('No next permutation');
  });

  it('throws an error for single element array', () => {
    expect(() => generateNextLexPermutation([1])).toThrow('No next permutation');
  });

  it('throws an error for descending array', () => {
    expect(() => generateNextLexPermutation([3, 2, 1])).toThrow('No next permutation');
  });

  it('handles duplicate elements', () => {
    const input = [1, 2, 2, 3];
    const expected = [1, 2, 3, 2];
    expect(generateNextLexPermutation(input)).toEqual(expected);
  });

  it('handles negative numbers', () => {
    const input = [-2, -1, 0];
    const expected = [-2, 0, -1];
    expect(generateNextLexPermutation(input)).toEqual(expected);
  });

  it('throws an error when all elements are identical', () => {
    expect(() => generateNextLexPermutation([1, 1, 1, 1])).toThrow('No next permutation');
  });

  it('correctly computes next permutation when swapping first and last elements', () => {
    const input = [1, 5, 1];
    const expected = [5, 1, 1];
    expect(generateNextLexPermutation(input)).toEqual(expected);
  });

  it('correctly computes next permutation that involves reversing a portion of the array', () => {
    const input = [1, 3, 2];
    const expected = [2, 1, 3];
    expect(generateNextLexPermutation(input)).toEqual(expected);
  });

  it('correctly computes next permutation involving first element', () => {
    const input = [1, 4, 3, 2];
    const expected = [2, 1, 3, 4];
    expect(generateNextLexPermutation(input)).toEqual(expected);
  });

  it('handles duplicates in the array', () => {
    const input = [2, 3, 1, 3];
    const expected = [2, 3, 3, 1];
    expect(generateNextLexPermutation(input)).toEqual(expected);
  });

  it('handles arrays containing zero', () => {
    const input = [0, 1, 2];
    const expected = [0, 2, 1];
    expect(generateNextLexPermutation(input)).toEqual(expected);
  });

  it('correctly computes next permutation with decreasing suffix', () => {
    const input = [1, 2, 3, 6, 5, 4];
    const expected = [1, 2, 4, 3, 5, 6];
    expect(generateNextLexPermutation(input)).toEqual(expected);
  });

  it('correctly computes next permutation with zero in the array', () => {
    const input = [1, 2, 3, 0];
    const expected = [1, 3, 0, 2];
    expect(generateNextLexPermutation(input)).toEqual(expected);
  });
});
