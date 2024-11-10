/**
 * Generate the next lexicographical permutation of a sequence.
 * @param source - The sequence to generate the next permutation of.
 * @returns The next lexicographical permutation of the sequence.
 * @throws An error if no next permutation exists.
 */
export const generateNextLexPermutation = (source: number[]): number[] => {
  let k: number | undefined;
  for (let i = source.length - 2; i >= 0; i--) {
    if (source[i] < source[i + 1]) {
      k = i;
      break;
    }
  }

  if (k === undefined) {
    throw new Error('No next permutation');
  }

  let m: number | undefined;
  for (let i = source.length - 1; i >= 0; i--) {
    if (source[i] > source[k]) {
      m = i;
      break;
    }
  }

  if (m === undefined) {
    throw new Error('No next permutation');
  }

  const result = [...source];
  [result[k], result[m]] = [result[m], result[k]];

  for (let i = 1; i <= (source.length - k) >> 1; i++) {
    const from = k + i;
    const to = source.length - i;
    [result[from], result[to]] = [result[to], result[from]];
  }

  return result;
};
