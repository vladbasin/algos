/**
 * Sorts an array of numbers using the merge sort algorithm.
 *
 * @param target - The array of numbers to be sorted.
 * @param fromIndex - The starting index of the portion of the array to sort. Defaults to 0.
 * @param toIndex - The ending index of the portion of the array to sort. Defaults to the last index of the array.
 * @returns A new sorted array containing the elements from the specified portion of the input array.
 * @throws Error if the provided indices are out of bounds or invalid.
 *
 * @example
 * const sortedArray = mergeSort([5, 3, 8, 1, 2]);
 * // sortedArray will be [1, 2, 3, 5, 8]
 *
 * @example
 * const sortedPartialArray = mergeSort([5, 3, 8, 1, 2], 1, 3);
 * // sortedPartialArray will be [1, 2, 3]
 */
export const mergeSort = (target: number[], fromIndex?: number, toIndex?: number): number[] => {
  if (target.length === 0) {
    return [];
  }

  const left = fromIndex ?? 0;
  const right = toIndex ?? target.length - 1;

  if (left < 0 || target.length <= left || right < 0 || target.length <= right || left > right) {
    throw new Error('Invalid bounds');
  }

  if (left === right) {
    return [target[left]];
  }

  const mid = (left + right) >> 1;
  const sortedLeft = mergeSort(target, left, mid);
  const sortedRight = mergeSort(target, mid + 1, right);

  const result = [];
  let i = 0;
  let j = 0;
  while (i < sortedLeft.length && j < sortedRight.length) {
    if (sortedLeft[i] < sortedRight[j]) {
      result.push(sortedLeft[i]);
      i++;
    } else {
      result.push(sortedRight[j]);
      j++;
    }
  }

  while (i < sortedLeft.length) {
    result.push(sortedLeft[i]);
    i++;
  }

  while (j < sortedRight.length) {
    result.push(sortedRight[j]);
    j++;
  }

  return result;
};
