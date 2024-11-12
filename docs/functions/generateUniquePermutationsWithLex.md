[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / generateUniquePermutationsWithLex

# Function: generateUniquePermutationsWithLex()

> **generateUniquePermutationsWithLex**(`source`): `number`[][]

Generates all unique permutations of a given array using lexicographical ordering.

## Parameters

• **source**: `number`[]

The input array of numbers to generate permutations from

## Returns

`number`[][]

Array containing all unique permutations in lexicographical order

## Example

```ts
generateUniquePermutationsWithLex([1, 1, 2]) // Returns [[1,1,2], [1,2,1], [2,1,1]]
generateUniquePermutationsWithLex([1, 2, 2]) // Returns [[1,2,2], [2,1,2], [2,2,1]]
generateUniquePermutationsWithLex([])        // Returns []
```

## Defined in

[algorithms/combinatorics/generateUniquePermutationsWithLex.ts:13](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/algorithms/combinatorics/generateUniquePermutationsWithLex.ts#L13)
