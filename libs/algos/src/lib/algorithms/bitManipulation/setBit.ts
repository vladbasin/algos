/**
 * Sets the specified bit of a number to 1.
 *
 * @param target - The number in which the bit will be set.
 * @param bitIndex - The index of the bit to set (0-based). Must be in the range [0, 30].
 * @returns The new number with the specified bit set to 1.
 * @throws Error if the bitIndex is less than 0 or greater than or equal to 31.
 */
export const setBit = (target: number, bitIndex: number): number => {
  if (bitIndex < 0 || bitIndex >= 31) {
    throw new Error('Bit index was out of range');
  }

  return target | (1 << bitIndex);
};
