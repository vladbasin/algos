/**
 * Generates all possible subsets (power set) of a given array using backtracking.
 * The power set includes the empty set and the set itself.
 *
 * @param source - The input array to generate subsets from
 * @returns {T[][]} Array containing all possible subsets
 * @example
 * generatePowerset([1, 2])    // Returns [[], [1], [1,2], [2]]
 * generatePowerset([1, 2, 3]) // Returns [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]
 * generatePowerset([])        // Returns [[]]
 */
export const generatePowerset = <T>(source: T[]): T[][] => {
  const backtrack = (path: T[], start: number): T[][] => {
    // Always include the current path
    const result: T[][] = [[...path]];

    // Try including each remaining element
    for (let i = start; i < source.length; i++) {
      path.push(source[i]);
      result.push(...backtrack(path, i + 1));
      path.pop(); // Backtrack by removing the last element
    }

    return result;
  };

  return backtrack([], 0);
};
