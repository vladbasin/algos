[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / generateCombinationsOfSize

# Function: generateCombinationsOfSize()

> **generateCombinationsOfSize**\<`T`\>(`source`, `length`): `T`[][]

Generates all possible combinations of elements of a specified length from a source array.

## Type Parameters

• **T**

## Parameters

• **source**: `T`[]

The array of elements to generate combinations from

• **length**: `number`

The desired length of each combination

## Returns

`T`[][]

Array of all possible combinations, where each combination is an array of length elements

## Throws

If length is negative or greater than source array length

## Example

```ts
generateCombinationsOfSize([1, 2, 3], 2)  // Returns [[1,2], [1,3], [2,3]]
generateCombinationsOfSize([1, 2], 0)     // Returns [[]]
generateCombinationsOfSize([1, 2], 1)     // Returns [[1], [2]]
```

## Defined in

[algorithms/combinatorics/generateCombinationsOfSize.ts:13](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/algorithms/combinatorics/generateCombinationsOfSize.ts#L13)
