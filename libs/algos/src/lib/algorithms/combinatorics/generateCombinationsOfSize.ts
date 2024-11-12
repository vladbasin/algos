/**
 * Generates all possible combinations of elements of a specified length from a source array.
 *
 * @param source - The array of elements to generate combinations from
 * @param length - The desired length of each combination
 * @throws {RangeError} If length is negative or greater than source array length
 * @returns {T[][]} Array of all possible combinations, where each combination is an array of length elements
 * @example
 * generateCombinationsOfSize([1, 2, 3], 2)  // Returns [[1,2], [1,3], [2,3]]
 * generateCombinationsOfSize([1, 2], 0)     // Returns [[]]
 * generateCombinationsOfSize([1, 2], 1)     // Returns [[1], [2]]
 */
export const generateCombinationsOfSize = <T>(source: T[], length: number): T[][] => {
  if (length < 0) {
    throw new RangeError(`Length cannot be negative, received: ${length}`);
  }
  if (length > source.length) {
    throw new RangeError(`Length cannot be greater than source array length (${source.length}), received: ${length}`);
  }

  if (length === 0) {
    return [[]];
  }

  const backtrack = (path: T[], start: number): T[][] => {
    if (path.length === length) {
      return [[...path]];
    }

    const result: T[][] = [];

    for (let i = start; i < source.length; i++) {
      path.push(source[i]);
      result.push(...backtrack(path, i + 1));
      path.pop();
    }

    return result;
  };

  return backtrack([], 0);
};
