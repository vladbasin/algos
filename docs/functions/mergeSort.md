[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / mergeSort

# Function: mergeSort()

> **mergeSort**(`target`, `fromIndex`?, `toIndex`?): `number`[]

Sorts an array of numbers using the merge sort algorithm.

## Parameters

• **target**: `number`[]

The array of numbers to be sorted.

• **fromIndex?**: `number`

The starting index of the portion of the array to sort. Defaults to 0.

• **toIndex?**: `number`

The ending index of the portion of the array to sort. Defaults to the last index of the array.

## Returns

`number`[]

A new sorted array containing the elements from the specified portion of the input array.

## Throws

Error if the provided indices are out of bounds or invalid.

## Examples

```ts
const sortedArray = mergeSort([5, 3, 8, 1, 2]);
// sortedArray will be [1, 2, 3, 5, 8]
```

```ts
const sortedPartialArray = mergeSort([5, 3, 8, 1, 2], 1, 3);
// sortedPartialArray will be [1, 2, 3]
```

## Defined in

[algorithms/sorting/mergeSort.ts:18](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/algorithms/sorting/mergeSort.ts#L18)
