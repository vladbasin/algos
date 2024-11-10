/**
 * Generate all permutations of a given set. Example: generatePermutations([1, 2, 3]) -> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
 * @param source - The input array.
 * @returns {T[][]} All permutations of the input array.
 */
export const generatePermutations = <T>(source: T[]): T[][] => {
  return generatePermutationsBySwapping([...source], 0);
};

const generatePermutationsBySwapping = <T>(source: T[], start: number): T[][] => {
  if (start === source.length - 1) {
    return [[...source]];
  }

  const results: T[][] = [];

  for (let i = start; i < source.length; i++) {
    [source[start], source[i]] = [source[i], source[start]];
    results.push(...generatePermutationsBySwapping(source, start + 1));
    [source[i], source[start]] = [source[start], source[i]];
  }

  return results;
};
