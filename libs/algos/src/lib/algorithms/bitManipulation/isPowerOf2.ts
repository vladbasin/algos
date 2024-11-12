/**
 * Determines if a given number is a power of 2.
 *
 * A number is considered a power of 2 if it is greater than 0 and
 * there is only one bit set in its binary representation.
 * Examples: 1 (2^0), 2 (2^1), 4 (2^2), 8 (2^3), 16 (2^4), etc.
 *
 * @param target - The integer to check
 * @throws {TypeError} If target is not an integer
 * @returns {boolean} True if the number is a power of 2, false otherwise
 * @example
 * isPowerOf2(8)   // Returns true  (binary: 1000)
 * isPowerOf2(6)   // Returns false (binary: 0110)
 * isPowerOf2(0)   // Returns false
 * isPowerOf2(-4)  // Returns false
 */
export const isPowerOf2 = (target: number): boolean => {
  // Validate integer input
  if (!Number.isInteger(target)) {
    throw new TypeError('Target must be an integer');
  }

  return target > 0 && ((target - 1) & target) === 0;
};
