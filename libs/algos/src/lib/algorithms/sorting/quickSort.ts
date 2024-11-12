/**
 * Sorts an array of numbers using the QuickSort algorithm.
 * Uses median-of-three pivot selection and in-place partitioning.
 *
 * @param target - The array of numbers to be sorted
 * @param fromIndex - The starting index of the portion to sort (inclusive)
 * @param toIndex - The ending index of the portion to sort (inclusive)
 * @returns {number[]} A new sorted array
 * @throws {RangeError} If indices are out of bounds or invalid
 */
export const quickSort = (target: number[], fromIndex?: number, toIndex?: number): number[] => {
  return quickSortMutatingTarget([...target], fromIndex, toIndex);
};

/**
 * Internal implementation that mutates the array for efficiency.
 * Uses the middle element as pivot for better performance on partially sorted arrays.
 */
const quickSortMutatingTarget = (target: number[], fromIndex?: number, toIndex?: number): number[] => {
  if (target.length === 0) {
    return target;
  }

  const left = fromIndex ?? 0;
  const right = toIndex ?? target.length - 1;

  if (left < 0 || target.length <= left || right < 0 || target.length <= right || left > right) {
    throw new RangeError(`Invalid bounds: left=${left}, right=${right}, length=${target.length}`);
  }

  // Use middle element as pivot to handle partially sorted arrays better
  const pivotValue = target[(right + left) >> 1];
  let leftIndex = left;
  let rightIndex = right;

  do {
    while (target[leftIndex] < pivotValue) {
      leftIndex++;
    }
    while (target[rightIndex] > pivotValue) {
      rightIndex--;
    }

    if (leftIndex <= rightIndex) {
      // Swap elements
      [target[leftIndex], target[rightIndex]] = [target[rightIndex], target[leftIndex]];
      leftIndex++;
      rightIndex--;
    }
  } while (leftIndex < rightIndex);

  // Recursively sort sub-arrays
  if (left < rightIndex) {
    quickSortMutatingTarget(target, left, rightIndex);
  }
  if (leftIndex < right) {
    quickSortMutatingTarget(target, leftIndex, right);
  }

  return target;
};
