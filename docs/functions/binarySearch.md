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

[algorithms/binarySearch.ts:16](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/algorithms/binarySearch.ts#lines-16)
