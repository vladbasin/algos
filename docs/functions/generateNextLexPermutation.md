[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / generateNextLexPermutation

# Function: generateNextLexPermutation()

> **generateNextLexPermutation**(`source`): `number`[]

Generates the next lexicographically greater permutation of a sequence.
Uses the optimized algorithm to find the next permutation in-place.

## Parameters

• **source**: `number`[]

The array of numbers to generate the next permutation from

## Returns

`number`[]

The next lexicographically greater permutation

## Throws

If no next permutation exists (sequence is in descending order)

## Example

```ts
generateNextLexPermutation([1, 2, 3])  // Returns [1, 3, 2]
generateNextLexPermutation([1, 3, 2])  // Returns [2, 1, 3]
generateNextLexPermutation([3, 2, 1])  // Throws RangeError (no next permutation)
```

## Defined in

[algorithms/combinatorics/generateNextLexPermutation.ts:13](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/algorithms/combinatorics/generateNextLexPermutation.ts#L13)
