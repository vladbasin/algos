/**
 * Sorts an array of numbers using the bubble sort algorithm.
 * Implements optimized bubble sort with early termination.
 *
 * @param source - The input array to be sorted
 * @returns {number[]} A new sorted array, preserving the original
 */
export const bubbleSort = (source: number[]): number[] => {
  const target = [...source];
  let hasSwapped: boolean;

  // Optimization: reduce iterations by i as largest elements bubble to end
  for (let i = 0; i < target.length - 1; i++) {
    hasSwapped = false;

    // Compare adjacent elements and swap if needed
    for (let j = 0; j < target.length - 1 - i; j++) {
      if (target[j] > target[j + 1]) {
        // Swap using destructuring
        [target[j], target[j + 1]] = [target[j + 1], target[j]];
        hasSwapped = true;
      }
    }

    // Early termination if no swaps occurred (array is sorted)
    if (!hasSwapped) {
      break;
    }
  }

  return target;
};
