/**
 * Performs a binary search on a sorted array to find the index of a target value.
 *
 * @param target - A sorted array of numbers to search in
 * @param search - The value to search for
 * @returns {number} Index of the value if found, -1 if not found
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
