/**
 * Clears the bit at the specified index in the given target number.
 *
 * @param target - The number from which the bit will be cleared.
 * @param bitIndex - The index of the bit to clear (0-based).
 * @returns The new number with the specified bit cleared.
 * @throws {Error} if the bitIndex is less than 0 or greater than or equal to 31.
 */
export const clearBit = (target: number, bitIndex: number): number => {
  if (bitIndex < 0 || bitIndex >= 31) {
    throw new Error('Bit index was out of range');
  }

  return target & ~(1 << bitIndex);
};
