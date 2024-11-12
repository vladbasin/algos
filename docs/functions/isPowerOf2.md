[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / isPowerOf2

# Function: isPowerOf2()

> **isPowerOf2**(`target`): `boolean`

Determines if a given number is a power of 2.

A number is considered a power of 2 if it is greater than 0 and
there is only one bit set in its binary representation.
Examples: 1 (2^0), 2 (2^1), 4 (2^2), 8 (2^3), 16 (2^4), etc.

## Parameters

• **target**: `number`

The integer to check

## Returns

`boolean`

True if the number is a power of 2, false otherwise

## Throws

If target is not an integer

## Example

```ts
isPowerOf2(8)   // Returns true  (binary: 1000)
isPowerOf2(6)   // Returns false (binary: 0110)
isPowerOf2(0)   // Returns false
isPowerOf2(-4)  // Returns false
```

## Defined in

[algorithms/bitManipulation/isPowerOf2.ts:17](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/algorithms/bitManipulation/isPowerOf2.ts#L17)
