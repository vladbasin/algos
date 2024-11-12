/**
 * Checks if a specific bit is set (equals 1) in a given number.
 *
 * @param target - The integer to check
 * @param bitIndex - The zero-based position of the bit to check (rightmost bit is 0)
 * @throws {TypeError} If target or bitIndex is not an integer
 * @throws {RangeError} If bitIndex is not between 0 and 30 inclusive
 * @returns {boolean} True if the bit at the specified position is 1, false if it's 0
 * @example
 * isBitSet(5, 0)  // Returns true (binary: 101)
 * isBitSet(5, 1)  // Returns false (binary: 101)
 * isBitSet(5, 2)  // Returns true (binary: 101)
 */
export const isBitSet = (target: number, bitIndex: number): boolean => {
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

  return ((target >> bitIndex) & 1) === 1;
};
