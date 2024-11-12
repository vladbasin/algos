[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / Heap

# Class: Heap\<THeapEntry\>

Generic binary heap implementation supporting both min-heap and max-heap.

## Type Parameters

• **THeapEntry** *extends* [`HeapEntryType`](../type-aliases/HeapEntryType.md)

Type of elements stored in heap, must include a numeric value property

## Constructors

### new Heap()

> **new Heap**\<`THeapEntry`\>(`_type`): [`Heap`](Heap.md)\<`THeapEntry`\>

Creates a new Heap instance.

#### Parameters

• **\_type**: `"min"` \| `"max"`

'min' for min-heap or 'max' for max-heap

#### Returns

[`Heap`](Heap.md)\<`THeapEntry`\>

#### Defined in

[dataStructures/Heap.ts:19](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/Heap.ts#L19)

## Accessors

### size

> `get` **size**(): `number`

Current number of elements in the heap.

#### Returns

`number`

The heap size

#### Defined in

[dataStructures/Heap.ts:63](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/Heap.ts#L63)

## Methods

### add()

> **add**(`entry`): `void`

Adds a new entry to the heap and maintains heap property.

#### Parameters

• **entry**: `THeapEntry`

The entry to add

#### Returns

`void`

#### Defined in

[dataStructures/Heap.ts:26](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/Heap.ts#L26)

***

### peek()

> **peek**(): `undefined` \| `THeapEntry`

Returns the root value without removing it.

#### Returns

`undefined` \| `THeapEntry`

The root entry or undefined if empty

#### Defined in

[dataStructures/Heap.ts:36](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/Heap.ts#L36)

***

### pop()

> **pop**(): `undefined` \| `THeapEntry`

Removes and returns the root value.

#### Returns

`undefined` \| `THeapEntry`

The root entry or undefined if empty

#### Defined in

[dataStructures/Heap.ts:45](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/Heap.ts#L45)
