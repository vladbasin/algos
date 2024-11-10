[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / quickSort

# Function: quickSort()

> **quickSort**(`target`, `fromIndex`?, `toIndex`?): `number`[]

Sorts an array of numbers using the QuickSort algorithm.

## Parameters

• **target**: `number`[]

The array of numbers to be sorted.

• **fromIndex?**: `number`

The starting index of the portion of the array to sort. Defaults to 0.

• **toIndex?**: `number`

The ending index of the portion of the array to sort. Defaults to the last index of the array.

## Returns

`number`[]

A new sorted array of numbers.

## Throws

Error if the provided indices are out of bounds or invalid.

## Example

```ts
const sortedArray = quickSort([3, 1, 4, 1, 5, 9]);
// sortedArray will be [1, 1, 3, 4, 5, 9]
```

## Defined in

[algorithms/sorting/quickSort.ts:14](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/algorithms/sorting/quickSort.ts#L14)
