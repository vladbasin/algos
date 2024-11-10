[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / SkipList

# Class: SkipList

Class representing a Skip List, a data structure that allows fast search, insertion, and deletion
by maintaining multiple levels of linked lists, where higher levels skip over multiple elements.

## Constructors

### new SkipList()

> **new SkipList**(): [`SkipList`](SkipList.md)

#### Returns

[`SkipList`](SkipList.md)

## Accessors

### lowestLevel

> `get` **lowestLevel**(): [`LinkedList`](LinkedList.md)\<[`SkipListElementType`](../type-aliases/SkipListElementType.md)\>

Returns the lowest level of the skip list.

#### Returns

[`LinkedList`](LinkedList.md)\<[`SkipListElementType`](../type-aliases/SkipListElementType.md)\>

- The linked list representing the lowest level of the skip list.

#### Defined in

[dataStructures/SkipList.ts:214](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/SkipList.ts#L214)

## Methods

### add()

> **add**(`value`): `void`

Adds a new value to the skip list. It determines how many levels the new element should be added to
based on random probability.

#### Parameters

• **value**: `number`

The value to be added to the skip list.

#### Returns

`void`

#### Defined in

[dataStructures/SkipList.ts:18](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/SkipList.ts#L18)

***

### has()

> **has**(`value`): `boolean`

Checks if a value exists in the skip list by searching for it in the appropriate levels.

#### Parameters

• **value**: `number`

The value to check.

#### Returns

`boolean`

- True if the value exists, false otherwise.

#### Defined in

[dataStructures/SkipList.ts:105](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/SkipList.ts#L105)

***

### remove()

> **remove**(`value`): `void`

Removes a value from the skip list by traversing down through all levels and adjusting pointers and segment lengths.

#### Parameters

• **value**: `number`

The value to be removed from the skip list.

#### Returns

`void`

#### Defined in

[dataStructures/SkipList.ts:69](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/SkipList.ts#L69)

***

### searchByIndex()

> **searchByIndex**(`index`): `undefined` \| `number`

Searches for a value by its index in the skip list.

#### Parameters

• **index**: `number`

The index of the value to search for.

#### Returns

`undefined` \| `number`

- The value at the specified index, or undefined if not found.

#### Defined in

[dataStructures/SkipList.ts:117](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/SkipList.ts#L117)

***

### toArray()

> **toArray**(`levelIndex`): `number`[]

Converts the skip list to an array of values at a given level.

#### Parameters

• **levelIndex**: `number`

The level to convert to an array.

#### Returns

`number`[]

- An array of values in the skip list at the specified level.

#### Defined in

[dataStructures/SkipList.ts:160](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/SkipList.ts#L160)

***

### toElementsArray()

> **toElementsArray**(`levelIndex`): [`SkipListElementType`](../type-aliases/SkipListElementType.md)[]

Converts the skip list elements at a given level to an array.

#### Parameters

• **levelIndex**: `number`

The level to convert.

#### Returns

[`SkipListElementType`](../type-aliases/SkipListElementType.md)[]

- An array of skip list elements at the specified level.

#### Defined in

[dataStructures/SkipList.ts:172](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/SkipList.ts#L172)

***

### toElementsString()

> **toElementsString**(): `string`

Returns a string representation of all levels of the skip list.

#### Returns

`string`

- A string representation of the entire skip list.

#### Defined in

[dataStructures/SkipList.ts:202](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/SkipList.ts#L202)

***

### toElementsStringArray()

> **toElementsStringArray**(`levelIndex`): `string`

Returns a string representation of the skip list elements at a given level.

#### Parameters

• **levelIndex**: `number`

The level to represent as a string.

#### Returns

`string`

- A string representation of the elements at the specified level.

#### Defined in

[dataStructures/SkipList.ts:191](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/SkipList.ts#L191)
