[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / setBit

# Function: setBit()

> **setBit**(`target`, `bitIndex`): `number`

Sets the specified bit of a number to 1.

## Parameters

• **target**: `number`

The number in which the bit will be set.

• **bitIndex**: `number`

The index of the bit to set (0-based). Must be in the range [0, 30].

## Returns

`number`

The new number with the specified bit set to 1.

## Throws

Error if the bitIndex is less than 0 or greater than or equal to 31.

## Defined in

[algorithms/bitManipulation/setBit.ts:9](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/algorithms/bitManipulation/setBit.ts#L9)
