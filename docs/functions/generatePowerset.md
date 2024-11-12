[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / generatePowerset

# Function: generatePowerset()

> **generatePowerset**\<`T`\>(`source`): `T`[][]

Generates all possible subsets (power set) of a given array using backtracking.
The power set includes the empty set and the set itself.

## Type Parameters

• **T**

## Parameters

• **source**: `T`[]

The input array to generate subsets from

## Returns

`T`[][]

Array containing all possible subsets

## Example

```ts
generatePowerset([1, 2])    // Returns [[], [1], [1,2], [2]]
generatePowerset([1, 2, 3]) // Returns [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]
generatePowerset([])        // Returns [[]]
```

## Defined in

[algorithms/combinatorics/generatePowerset.ts:12](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/algorithms/combinatorics/generatePowerset.ts#L12)
