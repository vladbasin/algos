import { setBit } from '../../../lib';

describe('setBit', () => {
  it('should set the bit at index 0', () => {
    expect(setBit(0, 0)).toBe(1); // 0000 | 0001 = 0001 (1 in decimal)
    expect(setBit(1, 0)).toBe(1); // 0001 | 0001 = 0001 (1 in decimal)
  });

  it('should set the bit at index 1', () => {
    expect(setBit(0, 1)).toBe(2); // 0000 | 0010 = 0010 (2 in decimal)
    expect(setBit(1, 1)).toBe(3); // 0001 | 0010 = 0011 (3 in decimal)
  });

  it('should set the bit at index 2', () => {
    expect(setBit(0, 2)).toBe(4); // 0000 | 0100 = 0100 (4 in decimal)
    expect(setBit(3, 2)).toBe(7); // 0011 | 0100 = 0111 (7 in decimal)
  });

  it('should set the bit at a high index', () => {
    expect(setBit(0, 10)).toBe(1024); // 0000 | 10000000000 (1024 in decimal)
  });

  it('should not change the number if the bit is already set', () => {
    expect(setBit(5, 0)).toBe(5); // 0101 | 0001 = 0101 (5 in decimal)
    expect(setBit(5, 2)).toBe(5); // 0101 | 0100 = 0101 (5 in decimal)
  });

  it('should set multiple bits in different positions', () => {
    let result = setBit(0, 0); // 0000 | 0001 = 0001 (1)
    result = setBit(result, 3); // 0001 | 1000 = 1001 (9)
    expect(result).toBe(9);
  });

  it('should throw an error if the bit index is bigger than allowed for number to avoid overflow', () => {
    expect(() => setBit(0, 31)).toThrow();
  });

  it('should throw an error if the bit index is negative', () => {
    expect(() => setBit(0, -1)).toThrow();
  });

  it('should return the original number when the bit index is 0 on a positive number', () => {
    expect(setBit(15, 0)).toBe(15);
  });

  it('should throw TypeError with correct error messages', () => {
    expect(() => setBit(3.14, 1)).toThrow('Target must be an integer');
    expect(() => setBit(1, 1.5)).toThrow('Bit index must be an integer');
  });

  it('should throw TypeError if number is not an integer', () => {
    expect(() => setBit(3.14, 1)).toThrow(TypeError);
    expect(() => setBit(NaN, 1)).toThrow(TypeError);
  });

  it('should throw TypeError if index is not an integer', () => {
    expect(() => setBit(1, 1.5)).toThrow(TypeError);
    expect(() => setBit(1, NaN)).toThrow(TypeError);
  });

  it('should throw TypeError if arguments are not numbers', () => {
    // @ts-expect-error Testing invalid input
    expect(() => setBit('1', 1)).toThrow(TypeError);
    // @ts-expect-error Testing invalid input
    expect(() => setBit(1, '1')).toThrow(TypeError);
  });
});
