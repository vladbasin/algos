/**
 * Clears (sets to 0) the bit at the specified index in the given target number.
 *
 * @param target - The integer number from which the bit will be cleared
 * @param bitIndex - The zero-based index of the bit to clear (0 represents least significant bit)
 * @returns A new number with the specified bit cleared
 * @throws {TypeError} When target is not an integer
 * @throws {RangeError} When bitIndex is not between 0 and 30 inclusive
 * @example
 * ```typescript
 * clearBit(10, 1);  // Returns 8 (clears bit at index 1: 1010 -> 1000)
 * ```
 */
export const clearBit = (target: number, bitIndex: number): number => {
  // Validate integer input
  if (!Number.isInteger(target)) {
    throw new TypeError('Target must be an integer');
  }

  // More descriptive error message for bit index validation
  if (bitIndex < 0 || bitIndex >= 31) {
    throw new RangeError(`Bit index must be between 0 and 30 inclusive. Received: ${bitIndex}`);
  }

  return target & ~(1 << bitIndex);
};
