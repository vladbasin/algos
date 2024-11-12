[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / setBit

# Function: setBit()

> **setBit**(`target`, `bitIndex`): `number`

Sets the specified bit of a number to 1, leaving other bits unchanged.

## Parameters

• **target**: `number`

The integer in which the bit will be set

• **bitIndex**: `number`

The zero-based position of the bit to set (rightmost bit is 0)

## Returns

`number`

A new number with the specified bit set to 1

## Throws

If target or bitIndex is not an integer

## Throws

If bitIndex is not between 0 and 30 inclusive

## Example

```ts
setBit(4, 0)   // Returns 5  (binary: 100 -> 101)
setBit(4, 1)   // Returns 6  (binary: 100 -> 110)
setBit(4, 2)   // Returns 4  (binary: 100 -> 100) // bit was already set
```

## Defined in

[algorithms/bitManipulation/setBit.ts:14](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/algorithms/bitManipulation/setBit.ts#L14)
