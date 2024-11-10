import { flipBit } from '../../../lib';

describe('flipBit', () => {
  it('should flip the bit at index 0 from 0 to 1', () => {
    expect(flipBit(0, 0)).toBe(1); // 0000 ^ 0001 = 0001 (1 in decimal)
  });

  it('should flip the bit at index 0 from 1 to 0', () => {
    expect(flipBit(1, 0)).toBe(0); // 0001 ^ 0001 = 0000 (0 in decimal)
  });

  it('should flip the bit at index 1 from 0 to 1', () => {
    expect(flipBit(0, 1)).toBe(2); // 0000 ^ 0010 = 0010 (2 in decimal)
  });

  it('should flip the bit at index 1 from 1 to 0', () => {
    expect(flipBit(2, 1)).toBe(0); // 0010 ^ 0010 = 0000 (0 in decimal)
  });

  it('should flip the bit at index 2', () => {
    expect(flipBit(4, 2)).toBe(0); // 0100 ^ 0100 = 0000 (0 in decimal)
    expect(flipBit(0, 2)).toBe(4); // 0000 ^ 0100 = 0100 (4 in decimal)
  });

  it('should flip the bit at index 30', () => {
    expect(flipBit(0, 30)).toBe(1073741824); // 0000...0000 ^ 0100...0000 = 1073741824 (set bit at index 30)
    expect(flipBit(1073741824, 30)).toBe(0); // 0100...0000 ^ 0100...0000 = 0000...0000 (unset bit at index 30)
  });

  it('should flip multiple bits correctly', () => {
    let result = flipBit(0, 0); // Flip bit 0: 0000 ^ 0001 = 0001
    result = flipBit(result, 1); // Flip bit 1: 0001 ^ 0010 = 0011
    expect(result).toBe(3); // 0011 (3 in decimal)

    result = flipBit(result, 0); // Flip bit 0 again: 0011 ^ 0001 = 0010
    expect(result).toBe(2); // 0010 (2 in decimal)
  });

  it('should not change the number if flipping a bit that does not affect other bits', () => {
    expect(flipBit(15, 4)).toBe(31); // 1111 ^ 10000 = 11111 (31 in decimal)
  });

  it('should throw an error if the bit index is negative', () => {
    expect(() => flipBit(1, -1)).toThrow('Bit index was out of range');
  });

  it('should throw an error if the bit index is out of range (>= 31)', () => {
    expect(() => flipBit(1, 31)).toThrow('Bit index was out of range');
    expect(() => flipBit(1, 32)).toThrow('Bit index was out of range');
  });

  it('should return the original number if flipping a bit that is out of the effective range of the number', () => {
    expect(flipBit(15, 5)).toBe(47); // 1111 ^ 100000 = 101111 (47 in decimal)
  });
});
