import { generateNextLexPermutation } from './generateNextLexPermutation';

/**
 * Generates all unique permutations of a given array using lexicographical ordering.
 *
 * @param source - The input array of numbers to generate permutations from
 * @returns {number[][]} Array containing all unique permutations in lexicographical order
 * @example
 * generateUniquePermutationsWithLex([1, 1, 2]) // Returns [[1,1,2], [1,2,1], [2,1,1]]
 * generateUniquePermutationsWithLex([1, 2, 2]) // Returns [[1,2,2], [2,1,2], [2,2,1]]
 * generateUniquePermutationsWithLex([])        // Returns []
 */
export const generateUniquePermutationsWithLex = (source: number[]): number[][] => {
  // Handle empty array case
  if (source.length === 0) {
    return [];
  }

  // Start with sorted array to get lexicographical ordering
  let iteration = [...source].sort((a, b) => a - b);
  const result: number[][] = [[...iteration]];

  let hasNext = true;
  // Generate permutations until no next permutation exists
  while (hasNext) {
    try {
      const next = generateNextLexPermutation(iteration);
      result.push(next);
      iteration = next;
    } catch {
      hasNext = false;
    }
  }

  return result;
};
