/**
 * Sorts an array of numbers using the bubble sort algorithm.
 *
 * The bubble sort algorithm repeatedly steps through the list,
 * compares adjacent elements, and swaps them if they are in the
 * wrong order. The pass through the list is repeated until the
 * list is sorted.
 *
 * @param source - An array of numbers to be sorted.
 * @returns A new array containing the sorted numbers.
 *
 * @example
 * const sortedArray = bubbleSort([5, 3, 8, 4, 2]);
 * console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
 */
export const bubbleSort = (source: number[]): number[] => {
  const target = [...source];

  for (let i = 0; i < target.length; i++) {
    for (let j = 0; j < target.length - 1 - i; j++) {
      if (target[j] > target[j + 1]) {
        const tmp = target[j];
        target[j] = target[j + 1];
        target[j + 1] = tmp;
      }
    }
  }

  return target;
};
