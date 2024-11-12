import { isBitSet } from '../../../lib';

describe('isBitSet', () => {
  it('should return true if the bit at index 0 is set', () => {
    expect(isBitSet(1, 0)).toBe(true); // 0001 & 0001 = 0001
  });

  it('should return false if the bit at index 0 is not set', () => {
    expect(isBitSet(0, 0)).toBe(false); // 0000 & 0001 = 0000
  });

  it('should return true if the bit at index 1 is set', () => {
    expect(isBitSet(2, 1)).toBe(true); // 0010 & 0010 = 0010
  });

  it('should return false if the bit at index 1 is not set', () => {
    expect(isBitSet(1, 1)).toBe(false); // 0001 & 0010 = 0000
  });

  it('should return true if the bit at index 2 is set', () => {
    expect(isBitSet(4, 2)).toBe(true); // 0100 & 0100 = 0100
  });

  it('should return false if the bit at index 2 is not set', () => {
    expect(isBitSet(3, 2)).toBe(false); // 0011 & 0100 = 0000
  });

  it('should return true if the bit at index 30 is set', () => {
    expect(isBitSet(1073741824, 30)).toBe(true); // 0100...0000 & 0100...0000 = 0100...0000
  });

  it('should return false if the bit at index 30 is not set', () => {
    expect(isBitSet(0, 30)).toBe(false); // 0000 & 0100...0000 = 0000
  });

  it('should throw an error if the bit index is negative', () => {
    expect(() => isBitSet(1, -1)).toThrow();
  });

  it('should throw an error if the bit index is out of range (>= 31)', () => {
    expect(() => isBitSet(1, 31)).toThrow();
    expect(() => isBitSet(1, 32)).toThrow();
  });

  it('should return false if checking a bit that is beyond the effective size of the number', () => {
    expect(isBitSet(15, 5)).toBe(false); // 1111 (no bit set beyond index 3)
  });

  it('should correctly check multiple bits', () => {
    const target = 5; // 0101
    expect(isBitSet(target, 0)).toBe(true); // Bit 0 is set (1)
    expect(isBitSet(target, 1)).toBe(false); // Bit 1 is not set (0)
    expect(isBitSet(target, 2)).toBe(true); // Bit 2 is set (1)
  });
});
