/**
 * Checks if a specific bit is set in a given number.
 *
 * @param target - The number to check.
 * @param bitIndex - The index of the bit to check (0-based).
 * @returns True if the bit at the specified index is set, otherwise false.
 * @throws {Error} if the bitIndex is less than 0 or greater than or equal to 31.
 */
export const isBitSet = (target: number, bitIndex: number): boolean => {
  if (bitIndex < 0 || bitIndex >= 31) {
    throw new Error('Bit index was out of range');
  }

  return ((target >> bitIndex) & 1) === 1;
};
