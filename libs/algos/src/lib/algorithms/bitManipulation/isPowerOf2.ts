/**
 * Determines if a given number is a power of 2.
 *
 * A number is considered a power of 2 if it is greater than 0 and
 * there is only one bit set in its binary representation.
 *
 * @param target - The number to check.
 * @returns True if the number is a power of 2, otherwise false.
 */
export const isPowerOf2 = (target: number): boolean => {
  return target > 0 && ((target - 1) & target) === 0;
};
