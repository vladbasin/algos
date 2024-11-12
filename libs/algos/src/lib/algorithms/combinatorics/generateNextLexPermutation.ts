/**
 * Generates the next lexicographically greater permutation of a sequence.
 * Uses the optimized algorithm to find the next permutation in-place.
 *
 * @param source - The array of numbers to generate the next permutation from
 * @throws {RangeError} If no next permutation exists (sequence is in descending order)
 * @returns {number[]} The next lexicographically greater permutation
 * @example
 * generateNextLexPermutation([1, 2, 3])  // Returns [1, 3, 2]
 * generateNextLexPermutation([1, 3, 2])  // Returns [2, 1, 3]
 * generateNextLexPermutation([3, 2, 1])  // Throws RangeError (no next permutation)
 */
export const generateNextLexPermutation = (source: number[]): number[] => {
  // Find the largest index k such that source[k] < source[k + 1]
  let k = source.length - 2;
  while (k >= 0 && source[k] >= source[k + 1]) {
    k--;
  }

  // If no such index exists, the permutation is the last permutation
  if (k < 0) {
    throw new RangeError('No next permutation exists - sequence is in descending order');
  }

  // Find the largest index m such that source[m] > source[k]
  let m = source.length - 1;
  while (source[m] <= source[k]) {
    m--;
  }

  // Create new array and swap the k and m elements
  const result = [...source];
  [result[k], result[m]] = [result[m], result[k]];

  // Reverse the sequence from k+1 to end
  let left = k + 1;
  let right = result.length - 1;
  while (left < right) {
    [result[left], result[right]] = [result[right], result[left]];
    left++;
    right--;
  }

  return result;
};
