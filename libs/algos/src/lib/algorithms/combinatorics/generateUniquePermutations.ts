/**
 * Generates all unique permutations of a given array, ignoring duplicates.
 * Uses backtracking with sorting to skip duplicate permutations.
 *
 * @param source - The input array to generate permutations from
 * @returns {number[][]} Array containing all unique permutations
 * @example
 * generateUniquePermutations([1, 1, 2]) // Returns [[1,1,2], [1,2,1], [2,1,1]]
 * generateUniquePermutations([1, 2, 2]) // Returns [[1,2,2], [2,1,2], [2,2,1]]
 * generateUniquePermutations([])        // Returns [[]]
 */
export const generateUniquePermutations = (source: number[]): number[][] => {
  const result: number[][] = [];

  // Handle empty array case
  if (source.length === 0) {
    return [[]];
  }

  // Sort to handle duplicates efficiently
  source.sort((a, b) => a - b);

  const backtrack = (path: number[], used: boolean[]): void => {
    // Base case: path is complete
    if (path.length === source.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < source.length; i++) {
      // Skip if already used or if it's a duplicate (because used before)
      if (used[i] || (i > 0 && source[i] === source[i - 1] && !used[i - 1])) {
        continue;
      }

      used[i] = true;
      path.push(source[i]);
      backtrack(path, used);
      path.pop();
      used[i] = false;
    }
  };

  backtrack([], new Array(source.length).fill(false));
  return result;
};
