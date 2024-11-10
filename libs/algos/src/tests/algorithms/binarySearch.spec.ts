import { binarySearch } from '../../lib';

describe('binarySearch', () => {
  // Edge Case 1: Empty array
  it('should return -1 for empty array', () => {
    expect(binarySearch([], 5)).toBe(-1);
  });

  // Edge Case 2: Single-element array (target is present)
  it('should return 0 for single-element array with matching target', () => {
    expect(binarySearch([7], 7)).toBe(0);
  });

  // Edge Case 3: Single-element array (target is absent)
  it('should return -1 for single-element array with no matching target', () => {
    expect(binarySearch([7], 5)).toBe(-1);
  });

  // Regular Case 1: Target found in middle of the array
  it('should return the correct index when target is in the middle', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  // Regular Case 2: Target found at the start of the array
  it('should return the correct index when target is at the start', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
  });

  // Regular Case 3: Target found at the end of the array
  it('should return the correct index when target is at the end', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  // Regular Case 4: Target not found (out of bounds - too large)
  it('should return -1 when the target is larger than any element in the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 10)).toBe(-1);
  });

  // Regular Case 5: Target not found (out of bounds - too small)
  it('should return -1 when the target is smaller than any element in the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], -1)).toBe(-1);
  });

  // Edge Case 4: Array with duplicate elements (target found)
  it('should return the index of one of the target elements in a duplicated array', () => {
    expect(binarySearch([1, 2, 2, 2, 3], 2)).toBeGreaterThanOrEqual(1); // Can be index 1, 2, or 3
  });

  // Edge Case 5: Array with duplicate elements (target not found)
  it('should return -1 when the target is not found in an array with duplicates', () => {
    expect(binarySearch([1, 2, 2, 2, 3], 4)).toBe(-1);
  });

  // Large Input: Performance test case (optional)
  it('should return the correct index for a large input array', () => {
    const largeArray = Array.from({ length: 1000000 }, (_, i) => i + 1); // [1, 2, 3, ..., 1000000]
    expect(binarySearch(largeArray, 999999)).toBe(999998); // 0-based index
  });

  // Edge Case 6: Array with negative numbers
  it('should return the correct index when the target is a negative number', () => {
    expect(binarySearch([-10, -5, 0, 5, 10], -5)).toBe(1);
  });

  // Regular Case 6: Even-length array, target in middle
  it('should return the correct index for an even-length array with target in middle', () => {
    expect(binarySearch([1, 2, 3, 4], 2)).toBe(1);
  });
});
