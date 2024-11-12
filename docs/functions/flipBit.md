[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / flipBit

# Function: flipBit()

> **flipBit**(`target`, `bitIndex`): `number`

Flips (inverts) the bit at the specified index in a given number.
A 0 becomes 1, and a 1 becomes 0 at the specified position.

## Parameters

• **target**: `number`

The integer whose bit will be flipped

• **bitIndex**: `number`

The zero-based position of the bit to flip (rightmost bit is 0)

## Returns

`number`

A new number with the specified bit flipped

## Throws

If target or bitIndex is not an integer

## Throws

If bitIndex is not between 0 and 30 inclusive

## Example

```ts
flipBit(5, 0)  // Returns 4 (binary: 101 -> 100)
flipBit(5, 1)  // Returns 7 (binary: 101 -> 111)
```

## Defined in

[algorithms/bitManipulation/flipBit.ts:14](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/algorithms/bitManipulation/flipBit.ts#L14)
