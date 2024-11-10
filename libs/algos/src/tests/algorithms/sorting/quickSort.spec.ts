import { quickSort } from '../../../lib';

describe('quickSort', () => {
  it('should not modify the original array', () => {
    const arr = [5, 3, 8, 4, 2];
    quickSort(arr);
    expect(arr).toEqual([5, 3, 8, 4, 2]);
  });

  it('should sort an array of numbers in ascending order', () => {
    const arr = [3, 6, 8, 10, 1, 2, 1];
    expect(quickSort(arr)).toEqual([1, 1, 2, 3, 6, 8, 10]);
  });

  it('should handle an empty array', () => {
    expect(quickSort([])).toEqual([]);
  });

  it('should handle a single element array', () => {
    expect(quickSort([5])).toEqual([5]);
  });

  it('should handle an already sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(quickSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle a reversed array', () => {
    const arr = [5, 4, 3, 2, 1];
    expect(quickSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an array with duplicate elements', () => {
    const arr = [1, 4, 3, 4, 5, 3];
    expect(quickSort(arr)).toEqual([1, 3, 3, 4, 4, 5]);
  });

  it('should handle an array with negative numbers', () => {
    const arr = [3, -1, 0, 2, -2, 5];
    expect(quickSort(arr)).toEqual([-2, -1, 0, 2, 3, 5]);
  });

  it('should throw an error when left index is out of bounds', () => {
    const arr = [3, 6, 8, 10, 1, 2, 1];
    expect(() => quickSort(arr, -1, 5)).toThrow('Invalid bounds');
    expect(() => quickSort(arr, 7, 5)).toThrow('Invalid bounds');
  });

  it('should throw an error when right index is out of bounds', () => {
    const arr = [3, 6, 8, 10, 1, 2, 1];
    expect(() => quickSort(arr, 0, 7)).toThrow('Invalid bounds');
    expect(() => quickSort(arr, 2, -1)).toThrow('Invalid bounds');
  });

  it('should throw an error when left index is greater than right index', () => {
    const arr = [3, 6, 8, 10, 1, 2, 1];
    expect(() => quickSort(arr, 5, 2)).toThrow('Invalid bounds');
  });

  it('should sort the array from left to the end when only left index is provided', () => {
    const arr = [3, 6, 8, 10, 1, 2, 1];
    expect(quickSort(arr, 3)).toEqual([3, 6, 8, 1, 1, 2, 10]); // Sorts from index 3 to the end
  });

  it('should sort part of the array between left and right indices', () => {
    const arr = [3, 6, 8, 10, 1, 2, 1];
    expect(quickSort(arr, 1, 4)).toEqual([3, 1, 6, 8, 10, 2, 1]); // Only sorts the part between index 1 and 4
  });

  it('should handle an array with identical elements', () => {
    const arr = [5, 5, 5, 5];
    expect(quickSort(arr)).toEqual([5, 5, 5, 5]); // No change, since all elements are identical
  });

  it('should handle an array with both positive and negative numbers', () => {
    const arr = [7, -3, 2, 5, -6, 0, 8];
    expect(quickSort(arr)).toEqual([-6, -3, 0, 2, 5, 7, 8]);
  });
});
