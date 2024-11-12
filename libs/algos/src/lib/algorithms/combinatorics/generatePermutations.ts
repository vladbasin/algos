/**
 * Generates all permutations of a given array using the optimized swapping algorithm.
 *
 * @param source - The input array to generate permutations from
 * @returns {T[][]} Array containing all possible permutations
 * @example
 * generatePermutations([1, 2])    // Returns [[1,2], [2,1]]
 * generatePermutations([1, 2, 3]) // Returns [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
 * generatePermutations([])        // Returns [[]]
 * generatePermutations([1])       // Returns [[1]]
 */
export const generatePermutations = <T>(source: T[]): T[][] => {
  return generatePermutationsBySwapping([...source], 0);
};

/**
 * Helper function that generates permutations using the swapping algorithm.
 * @private
 */
const generatePermutationsBySwapping = <T>(source: T[], start: number): T[][] => {
  // Base case: if we've reached the end, return the current permutation
  if (start === source.length - 1) {
    return [[...source]];
  }

  const results: T[][] = [];

  // Try swapping the current position with each position including itself
  for (let i = start; i < source.length; i++) {
    // Swap elements
    [source[start], source[i]] = [source[i], source[start]];

    // Recursively generate permutations for the rest of the array
    results.push(...generatePermutationsBySwapping(source, start + 1));

    // Backtrack: restore the original order
    [source[i], source[start]] = [source[start], source[i]];
  }

  return results;
};
