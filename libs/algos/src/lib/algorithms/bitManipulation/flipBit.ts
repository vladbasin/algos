/**
 * Flips the bit at the specified index in a given number.
 *
 * @param target - The number whose bit will be flipped.
 * @param bitIndex - The index of the bit to flip (0-based).
 * @throws {Error} Throws an error if the bit index is out of range (must be between 0 and 30).
 * @returns The new number with the specified bit flipped.
 */
export const flipBit = (target: number, bitIndex: number): number => {
  if (bitIndex < 0 || bitIndex >= 31) {
    throw new Error('Bit index was out of range');
  }

  return target ^ (1 << bitIndex);
};
