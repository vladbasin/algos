[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / clearBit

# Function: clearBit()

> **clearBit**(`target`, `bitIndex`): `number`

Clears (sets to 0) the bit at the specified index in the given target number.

## Parameters

• **target**: `number`

The integer number from which the bit will be cleared

• **bitIndex**: `number`

The zero-based index of the bit to clear (0 represents least significant bit)

## Returns

`number`

A new number with the specified bit cleared

## Throws

When target is not an integer

## Throws

When bitIndex is not between 0 and 30 inclusive

## Example

```typescript
clearBit(10, 1);  // Returns 8 (clears bit at index 1: 1010 -> 1000)
```

## Defined in

[algorithms/bitManipulation/clearBit.ts:14](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/algorithms/bitManipulation/clearBit.ts#L14)
