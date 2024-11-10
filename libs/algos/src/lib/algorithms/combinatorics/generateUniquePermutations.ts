/**
 * Generate all unique permutations of a given set ignoring duplicates.
 * Example: generateUniquePermutations([1, 1, 3], (a, b) => a === b) -> [[1, 1, 3], [1, 3, 1], [3, 1, 1]]
 * @param source - The input array.
 * @returns {[][]} All unique permutations of the input array.
 */
export const generateUniquePermutations = (source: number[]): number[][] => {
  const result: number[][] = [];
  source.sort((a, b) => a - b);

  const backtrack = (path: number[], used: boolean[]): void => {
    if (path.length === source.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < source.length; i++) {
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
