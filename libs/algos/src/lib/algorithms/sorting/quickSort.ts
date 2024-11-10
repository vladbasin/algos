/**
 * Sorts an array of numbers using the QuickSort algorithm.
 *
 * @param target - The array of numbers to be sorted.
 * @param fromIndex - The starting index of the portion of the array to sort. Defaults to 0.
 * @param toIndex - The ending index of the portion of the array to sort. Defaults to the last index of the array.
 * @returns A new sorted array of numbers.
 * @throws Error if the provided indices are out of bounds or invalid.
 *
 * @example
 * const sortedArray = quickSort([3, 1, 4, 1, 5, 9]);
 * // sortedArray will be [1, 1, 3, 4, 5, 9]
 */
export const quickSort = (target: number[], fromIndex?: number, toIndex?: number): number[] => {
  return quickSortMutatingTarget([...target], fromIndex, toIndex);
};

const quickSortMutatingTarget = (target: number[], fromIndex?: number, toIndex?: number): number[] => {
  if (target.length === 0) {
    return target;
  }

  const left = fromIndex ?? 0;
  const right = toIndex ?? target.length - 1;

  if (left < 0 || target.length <= left || right < 0 || target.length <= right || left > right) {
    throw new Error('Invalid bounds');
  }

  // IMPORTANT to use value instead index
  const key = target[(right + left) >> 1];
  let leftIndex = left;
  let rightIndex = right;

  do {
    while (target[leftIndex] < key) {
      leftIndex++;
    }
    while (target[rightIndex] > key) {
      rightIndex--;
    }

    if (leftIndex <= rightIndex) {
      const tmp = target[leftIndex];
      target[leftIndex] = target[rightIndex];
      target[rightIndex] = tmp;

      leftIndex++;
      rightIndex--;
    }
  } while (leftIndex < rightIndex);

  if (leftIndex < right) {
    quickSortMutatingTarget(target, leftIndex, right);
  }

  if (left < rightIndex) {
    quickSortMutatingTarget(target, left, rightIndex);
  }

  return target;
};
