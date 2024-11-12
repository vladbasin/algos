/**
 * Sorts an array of numbers using the merge sort algorithm.
 * Implements divide-and-conquer approach with efficient merging.
 *
 * @param target - The array of numbers to be sorted
 * @param fromIndex - The starting index of the portion to sort (inclusive)
 * @param toIndex - The ending index of the portion to sort (inclusive)
 * @returns {number[]} A new sorted array
 * @throws {RangeError} If indices are out of bounds or invalid
 */
export const mergeSort = (target: number[], fromIndex?: number, toIndex?: number): number[] => {
  // Handle empty array
  if (target.length === 0) {
    return [];
  }

  const left = fromIndex ?? 0;
  const right = toIndex ?? target.length - 1;

  // Validate indices
  if (left < 0 || target.length <= left || right < 0 || target.length <= right || left > right) {
    throw new RangeError(`Invalid bounds: left=${left}, right=${right}, length=${target.length}`);
  }

  // Base case: single element
  if (left === right) {
    return [target[left]];
  }

  // Divide array and recursively sort
  const mid = (left + right) >> 1; // Efficient binary division
  const sortedLeft = mergeSort(target, left, mid);
  const sortedRight = mergeSort(target, mid + 1, right);

  // Merge sorted halves
  const result = [];
  let i = 0;
  let j = 0;

  // Merge while both arrays have elements
  while (i < sortedLeft.length && j < sortedRight.length) {
    if (sortedLeft[i] <= sortedRight[j]) {
      result.push(sortedLeft[i++]);
    } else {
      result.push(sortedRight[j++]);
    }
  }

  // Add remaining elements from either array
  while (i < sortedLeft.length) {
    result.push(sortedLeft[i++]);
  }
  while (j < sortedRight.length) {
    result.push(sortedRight[j++]);
  }

  return result;
};
