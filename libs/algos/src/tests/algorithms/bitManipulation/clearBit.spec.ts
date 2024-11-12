import { clearBit } from '../../../lib';

describe('clearBit', () => {
  it('should clear the bit at index 0', () => {
    expect(clearBit(1, 0)).toBe(0); // 0001 & ~0001 = 0000 (0 in decimal)
  });

  it('should clear the bit at index 1', () => {
    expect(clearBit(3, 1)).toBe(1); // 0011 & ~0010 = 0001 (1 in decimal)
  });

  it('should clear the bit at index 2', () => {
    expect(clearBit(7, 2)).toBe(3); // 0111 & ~0100 = 0011 (3 in decimal)
  });

  it('should not change the number if the bit is already clear', () => {
    expect(clearBit(1, 1)).toBe(1); // 0001 & ~0010 = 0001 (1 in decimal)
  });

  it('should throw an error if the bit index is negative', () => {
    expect(() => clearBit(1, -1)).toThrow();
  });

  it('should throw an error if the bit index is out of range (greater than or equal to 31)', () => {
    expect(() => clearBit(1, 31)).toThrow();
    expect(() => clearBit(1, 32)).toThrow();
  });

  it('should handle large numbers and clear the bit correctly', () => {
    expect(clearBit(1023, 9)).toBe(511); // 1111111111 & ~1000000000 = 0111111111 (511 in decimal)
  });

  it('should clear multiple bits at different indices', () => {
    let result = clearBit(15, 0); // 1111 & ~0001 = 1110 (14)
    result = clearBit(result, 2); // 1110 & ~0100 = 1010 (10)
    expect(result).toBe(10); // Final result should be 1010 (10)
  });

  it('should clear the bit at index 30', () => {
    expect(clearBit(1073741824, 30)).toBe(0); // Clear the highest bit in a 31-bit range
  });

  it('should not change a number when clearing a bit that is already 0', () => {
    expect(clearBit(8, 3)).toBe(0); // 1000 & ~1000 = 0000 (0 in decimal)
  });

  it('should return the original number if clearing a bit at a higher index does not affect lower bits', () => {
    expect(clearBit(15, 4)).toBe(15); // 1111 & ~10000 = 1111 (15 in decimal), bit 4 is out of range for the number
  });
});
