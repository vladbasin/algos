/**
 * Generates all combinations of a given size from a source array.
 * @param source - The array to generate combinations from.
 * @param length - The desired length of the combinations.
 * @returns An array of arrays, where each inner array is a combination of the specified length.
 */
export const generateCombinationsOfSize = <T>(source: T[], length: number): T[][] => {
  if (length > source.length || length < 0) {
    throw new Error('Desired length is bigger than source length');
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
