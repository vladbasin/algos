[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / Heap

# Class: Heap\<THeapEntry\>

Class representing a binary heap data structure, which can be either a min-heap or a max-heap.
A heap is a complete binary tree where the parent node is either greater (max-heap) or smaller (min-heap) than its children.

## Type Parameters

• **THeapEntry** *extends* [`HeapEntryType`](../type-aliases/HeapEntryType.md)

## Constructors

### new Heap()

> **new Heap**\<`THeapEntry`\>(`_type`): [`Heap`](Heap.md)\<`THeapEntry`\>

Creates a new Heap instance, either as a min-heap or a max-heap.

#### Parameters

• **\_type**: `"min"` \| `"max"`

Specifies the type of heap ('min' for min-heap, 'max' for max-heap).

#### Returns

[`Heap`](Heap.md)\<`THeapEntry`\>

#### Defined in

[dataStructures/Heap.ts:15](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/Heap.ts#lines-15)

## Accessors

### size

> `get` **size**(): `number`

Returns the number of elements in the heap.

#### Returns

`number`

- The current size of the heap.

#### Defined in

[dataStructures/Heap.ts:61](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/Heap.ts#lines-61)

## Methods

### add()

> **add**(`entry`): `void`

Adds a new value to the heap and maintains the heap property.

#### Parameters

• **entry**: `THeapEntry`

The entry to be added to the heap.

#### Returns

`void`

#### Defined in

[dataStructures/Heap.ts:23](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/Heap.ts#lines-23)

***

### peek()

> **peek**(): `undefined` \| `THeapEntry`

Returns the root value of the heap (the minimum value for a min-heap or the maximum value for a max-heap)
without removing it from the heap.

#### Returns

`undefined` \| `THeapEntry`

- The root value of the heap, or undefined if the heap is empty.

#### Defined in

[dataStructures/Heap.ts:34](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/Heap.ts#lines-34)

***

### pop()

> **pop**(): `undefined` \| `THeapEntry`

Removes and returns the root value of the heap (the minimum or maximum value) while maintaining the heap property.

#### Returns

`undefined` \| `THeapEntry`

- The root value of the heap, or undefined if the heap is empty.

#### Defined in

[dataStructures/Heap.ts:43](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/Heap.ts#lines-43)
