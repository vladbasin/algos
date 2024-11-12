[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / generatePermutations

# Function: generatePermutations()

> **generatePermutations**\<`T`\>(`source`): `T`[][]

Generates all permutations of a given array using the optimized swapping algorithm.

## Type Parameters

• **T**

## Parameters

• **source**: `T`[]

The input array to generate permutations from

## Returns

`T`[][]

Array containing all possible permutations

## Example

```ts
generatePermutations([1, 2])    // Returns [[1,2], [2,1]]
generatePermutations([1, 2, 3]) // Returns [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
generatePermutations([])        // Returns [[]]
generatePermutations([1])       // Returns [[1]]
```

## Defined in

[algorithms/combinatorics/generatePermutations.ts:12](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/algorithms/combinatorics/generatePermutations.ts#L12)
