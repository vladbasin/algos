import { isPowerOf2 } from '../../../lib';

describe('isPowerOf2', () => {
  it('should return true for 1 (2^0)', () => {
    expect(isPowerOf2(1)).toBe(true); // 1 is 2^0
  });

  it('should return true for 2 (2^1)', () => {
    expect(isPowerOf2(2)).toBe(true); // 2 is 2^1
  });

  it('should return true for 4 (2^2)', () => {
    expect(isPowerOf2(4)).toBe(true); // 4 is 2^2
  });

  it('should return true for 8 (2^3)', () => {
    expect(isPowerOf2(8)).toBe(true); // 8 is 2^3
  });

  it('should return true for large powers of 2', () => {
    expect(isPowerOf2(1024)).toBe(true); // 1024 is 2^10
    expect(isPowerOf2(1048576)).toBe(true); // 1048576 is 2^20
    expect(isPowerOf2(1073741824)).toBe(true); // 1073741824 is 2^30
  });

  it('should return false for non-powers of 2', () => {
    expect(isPowerOf2(3)).toBe(false); // 3 is not a power of 2
    expect(isPowerOf2(5)).toBe(false); // 5 is not a power of 2
    expect(isPowerOf2(6)).toBe(false); // 6 is not a power of 2
    expect(isPowerOf2(9)).toBe(false); // 9 is not a power of 2
    expect(isPowerOf2(100)).toBe(false); // 100 is not a power of 2
  });

  it('should return false for 0', () => {
    expect(isPowerOf2(0)).toBe(false); // 0 is not a power of 2
  });

  it('should return false for negative numbers', () => {
    expect(isPowerOf2(-1)).toBe(false); // Negative numbers are not powers of 2
    expect(isPowerOf2(-16)).toBe(false); // Negative numbers are not powers of 2
    expect(isPowerOf2(-1024)).toBe(false); // Negative numbers are not powers of 2
  });

  it('should handle edge case for non-power of 2 very large numbers', () => {
    expect(isPowerOf2(1073741823)).toBe(false); // Just under 2^30
  });
});
