[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / isBitSet

# Function: isBitSet()

> **isBitSet**(`target`, `bitIndex`): `boolean`

Checks if a specific bit is set (equals 1) in a given number.

## Parameters

• **target**: `number`

The integer to check

• **bitIndex**: `number`

The zero-based position of the bit to check (rightmost bit is 0)

## Returns

`boolean`

True if the bit at the specified position is 1, false if it's 0

## Throws

If target or bitIndex is not an integer

## Throws

If bitIndex is not between 0 and 30 inclusive

## Example

```ts
isBitSet(5, 0)  // Returns true (binary: 101)
isBitSet(5, 1)  // Returns false (binary: 101)
isBitSet(5, 2)  // Returns true (binary: 101)
```

## Defined in

[algorithms/bitManipulation/isBitSet.ts:14](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/algorithms/bitManipulation/isBitSet.ts#L14)
