[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / bubbleSort

# Function: bubbleSort()

> **bubbleSort**(`source`): `number`[]

Sorts an array of numbers using the bubble sort algorithm.

The bubble sort algorithm repeatedly steps through the list,
compares adjacent elements, and swaps them if they are in the
wrong order. The pass through the list is repeated until the
list is sorted.

## Parameters

• **source**: `number`[]

An array of numbers to be sorted.

## Returns

`number`[]

A new array containing the sorted numbers.

## Example

```ts
const sortedArray = bubbleSort([5, 3, 8, 4, 2]);
console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
```

## Defined in

[algorithms/sorting/bubbleSort.ts:16](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/algorithms/sorting/bubbleSort.ts#lines-16)
