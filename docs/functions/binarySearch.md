[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / binarySearch

# Function: binarySearch()

> **binarySearch**(`target`, `search`): `number`

Performs a binary search on a sorted array to find the index of a target value.

## Parameters

• **target**: `number`[]

A sorted array of numbers in which to search for the target.

• **search**: `number`

The number to search for within the target array.

## Returns

`number`

The index of the target value in the array if found; otherwise, -1.

## Examples

```ts
const index = binarySearch([1, 2, 3, 4, 5], 3);
console.log(index); // Output: 2
```

```ts
const index = binarySearch([1, 2, 3, 4, 5], 6);
console.log(index); // Output: -1
```

## Defined in

[algorithms/binarySearch.ts:16](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/algorithms/binarySearch.ts#L16)
