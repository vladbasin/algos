/**
 * Sets the specified bit of a number to 1, leaving other bits unchanged.
 *
 * @param target - The integer in which the bit will be set
 * @param bitIndex - The zero-based position of the bit to set (rightmost bit is 0)
 * @throws {TypeError} If target or bitIndex is not an integer
 * @throws {RangeError} If bitIndex is not between 0 and 30 inclusive
 * @returns {number} A new number with the specified bit set to 1
 * @example
 * setBit(4, 0)   // Returns 5  (binary: 100 -> 101)
 * setBit(4, 1)   // Returns 6  (binary: 100 -> 110)
 * setBit(4, 2)   // Returns 4  (binary: 100 -> 100) // bit was already set
 */
export const setBit = (target: number, bitIndex: number): number => {
  // Validate integer input
  if (!Number.isInteger(target)) {
    throw new TypeError('Target must be an integer');
  }
  if (!Number.isInteger(bitIndex)) {
    throw new TypeError('Bit index must be an integer');
  }

  // Range validation
  if (bitIndex < 0 || bitIndex >= 31) {
    throw new RangeError(`Bit index must be between 0 and 30 (inclusive), received: ${bitIndex}`);
  }

  return target | (1 << bitIndex);
};
