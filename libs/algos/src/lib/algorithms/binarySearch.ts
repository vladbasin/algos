/**
 * Performs a binary search on a sorted array to find the index of a target value.
 *
 * @param target - A sorted array of numbers in which to search for the target.
 * @param search - The number to search for within the target array.
 * @returns The index of the target value in the array if found; otherwise, -1.
 *
 * @example
 * const index = binarySearch([1, 2, 3, 4, 5], 3);
 * console.log(index); // Output: 2
 *
 * @example
 * const index = binarySearch([1, 2, 3, 4, 5], 6);
 * console.log(index); // Output: -1
 */
export const binarySearch = (target: number[], search: number): number => {
  if (target.length === 0) {
    return -1;
  }

  let l = 0;
  let r = target.length - 1;

  while (l < r) {
    const m = (l + r) >> 1;

    if (target[m] > search) {
      r = m - 1;
    } else if (target[m] < search) {
      l = m + 1;
    } else {
      return m;
    }
  }

  return target[l] === search ? l : -1;
};
