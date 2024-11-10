import { generateNextLexPermutation } from './generateNextLexPermutation';

/**
 * Generate all unique permutations of a given set ignoring duplicates.
 * Example: generateUniquePermutations([1, 1, 3], (a, b) => a === b) -> [[1, 1, 3], [1, 3, 1], [3, 1, 1]]
 * @param source - The input array.
 * @returns {[][]} All unique permutations of the input array.
 */
export const generateUniquePermutationsWithLex = (source: number[]): number[][] => {
  if (source.length === 0) {
    return [];
  }

  let iteration = [...source].sort((a, b) => a - b);
  const result: number[][] = [[...iteration]];

  let hasNext = true;

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
