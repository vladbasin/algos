[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / generateUniquePermutations

# Function: generateUniquePermutations()

> **generateUniquePermutations**(`source`): `number`[][]

Generates all unique permutations of a given array, ignoring duplicates.
Uses backtracking with sorting to skip duplicate permutations.

## Parameters

• **source**: `number`[]

The input array to generate permutations from

## Returns

`number`[][]

Array containing all unique permutations

## Example

```ts
generateUniquePermutations([1, 1, 2]) // Returns [[1,1,2], [1,2,1], [2,1,1]]
generateUniquePermutations([1, 2, 2]) // Returns [[1,2,2], [2,1,2], [2,2,1]]
generateUniquePermutations([])        // Returns [[]]
```

## Defined in

[algorithms/combinatorics/generateUniquePermutations.ts:12](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/algorithms/combinatorics/generateUniquePermutations.ts#L12)
