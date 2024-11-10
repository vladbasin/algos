/**
 * Generate all subsets of a given set. Example: generatePowerset([1, 2, 3]) -> [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]
 * @param source - The input array.
 * @returns {T[][]} All subsets of the input array.
 */
export const generatePowerset = <T>(source: T[]): T[][] => {
  const backtrack = (path: T[], start: number): T[][] => {
    const result: T[][] = [];

    result.push([...path]);

    for (let i = start; i < source.length; i++) {
      path.push(source[i]);
      result.push(...backtrack(path, i + 1));
      path.pop();
    }

    return result;
  };

  return backtrack([], 0);
};
