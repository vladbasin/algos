/**
 * Flips (inverts) the bit at the specified index in a given number.
 * A 0 becomes 1, and a 1 becomes 0 at the specified position.
 *
 * @param target - The integer whose bit will be flipped
 * @param bitIndex - The zero-based position of the bit to flip (rightmost bit is 0)
 * @throws {TypeError} If target or bitIndex is not an integer
 * @throws {RangeError} If bitIndex is not between 0 and 30 inclusive
 * @returns {number} A new number with the specified bit flipped
 * @example
 * flipBit(5, 0)  // Returns 4 (binary: 101 -> 100)
 * flipBit(5, 1)  // Returns 7 (binary: 101 -> 111)
 */
export const flipBit = (target: number, bitIndex: number): number => {
  // Validate integer input
  if (!Number.isInteger(target)) {
    throw new TypeError('Target must be an integer');
  }
  if (!Number.isInteger(bitIndex)) {
    throw new TypeError('Bit index must be an integer');
  }

  // Range validation
  if (bitIndex < 0 || bitIndex >= 31) {
    throw new RangeError(`Bit index must be between 0 and 30, received: ${bitIndex}`);
  }

  return target ^ (1 << bitIndex);
};
