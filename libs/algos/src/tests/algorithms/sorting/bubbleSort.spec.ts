import { bubbleSort } from '../../../lib';

describe('bubbleSort', () => {
  it('should not modify the original array', () => {
    const arr = [5, 3, 8, 4, 2];
    bubbleSort(arr);
    expect(arr).toEqual([5, 3, 8, 4, 2]);
  });

  it('should sort an array of numbers in ascending order', () => {
    const arr = [3, 6, 8, 10, 1, 2, 1];
    expect(bubbleSort(arr)).toEqual([1, 1, 2, 3, 6, 8, 10]);
  });

  it('should handle an empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it('should handle a single element array', () => {
    expect(bubbleSort([5])).toEqual([5]);
  });

  it('should handle an already sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(bubbleSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle a reversed array', () => {
    const arr = [5, 4, 3, 2, 1];
    expect(bubbleSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an array with duplicate elements', () => {
    const arr = [1, 4, 3, 4, 5, 3];
    expect(bubbleSort(arr)).toEqual([1, 3, 3, 4, 4, 5]);
  });

  it('should handle an array with negative numbers', () => {
    const arr = [3, -1, 0, 2, -2, 5];
    expect(bubbleSort(arr)).toEqual([-2, -1, 0, 2, 3, 5]);
  });

  it('should handle an array with identical elements', () => {
    const arr = [5, 5, 5, 5];
    expect(bubbleSort(arr)).toEqual([5, 5, 5, 5]); // No change, since all elements are identical
  });

  it('should handle an array with both positive and negative numbers', () => {
    const arr = [7, -3, 2, 5, -6, 0, 8];
    expect(bubbleSort(arr)).toEqual([-6, -3, 0, 2, 5, 7, 8]);
  });
});
