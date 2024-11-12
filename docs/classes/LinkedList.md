[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / LinkedList

# Class: LinkedList\<T\>

Class representing a doubly linked list, where each node points to both its previous and next node.
Provides methods for adding, removing, searching, and iterating over elements in the list.

## Type Parameters

• **T**

## Constructors

### new LinkedList()

> **new LinkedList**\<`T`\>(): [`LinkedList`](LinkedList.md)\<`T`\>

#### Returns

[`LinkedList`](LinkedList.md)\<`T`\>

## Accessors

### head

> `get` **head**(): `undefined` \| `T`

Returns the value at the head of the linked list.

#### Returns

`undefined` \| `T`

- The value at the head, or undefined if the list is empty.

#### Defined in

[dataStructures/LinkedList.ts:352](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L352)

***

### headElement

> `get` **headElement**(): `undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

Returns the element at the head of the linked list.

#### Returns

`undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

- The element at the head, or undefined if the list is empty.

#### Defined in

[dataStructures/LinkedList.ts:361](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L361)

***

### length

> `get` **length**(): `number`

Returns the current length of the linked list.

#### Returns

`number`

- The number of elements in the list.

#### Defined in

[dataStructures/LinkedList.ts:343](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L343)

***

### tail

> `get` **tail**(): `undefined` \| `T`

Returns the value at the tail of the linked list.

#### Returns

`undefined` \| `T`

- The value at the tail, or undefined if the list is empty.

#### Defined in

[dataStructures/LinkedList.ts:370](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L370)

***

### tailElement

> `get` **tailElement**(): `undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

Returns the element at the tail of the linked list.

#### Returns

`undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

- The element at the tail, or undefined if the list is empty.

#### Defined in

[dataStructures/LinkedList.ts:379](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L379)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<`T`\>

Allows the linked list to be iterable using `for...of` loops.

#### Returns

`IterableIterator`\<`T`\>

- An iterator over the values in the list.

#### Defined in

[dataStructures/LinkedList.ts:412](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L412)

***

### addAfterElement()

> **addAfterElement**(`element`, `value`): [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

Adds a new element after a given element in the list.

#### Parameters

• **element**: [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

The element after which the new value should be added.

• **value**: `T`

The value to be added.

#### Returns

[`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

- The newly created element.

#### Defined in

[dataStructures/LinkedList.ts:118](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L118)

***

### addAtIndex()

> **addAtIndex**(`index`, `value`): `undefined` \| `T`

Adds a value at a specified index in the list.

#### Parameters

• **index**: `number`

The index at which to add the value.

• **value**: `T`

The value to be added.

#### Returns

`undefined` \| `T`

- The added value, or undefined if the index is out of bounds.

#### Defined in

[dataStructures/LinkedList.ts:310](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L310)

***

### addBeforeElement()

> **addBeforeElement**(`element`, `value`): [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

Adds a new element before a given element in the list.

#### Parameters

• **element**: [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

The element before which the new value should be added.

• **value**: `T`

The value to be added.

#### Returns

[`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

- The newly created element.

#### Defined in

[dataStructures/LinkedList.ts:90](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L90)

***

### addElementAtIndex()

> **addElementAtIndex**(`index`, `value`): `undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

Adds an element at a specified index in the list.

#### Parameters

• **index**: `number`

The index at which to add the element.

• **value**: `T`

The value to be added.

#### Returns

`undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

- The newly created element, or undefined if the index is out of bounds.

#### Defined in

[dataStructures/LinkedList.ts:321](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L321)

***

### addHead()

> **addHead**(`value`): `void`

Adds a new value at the head of the linked list.

#### Parameters

• **value**: `T`

The value to be added.

#### Returns

`void`

#### Defined in

[dataStructures/LinkedList.ts:52](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L52)

***

### addHeadElement()

> **addHeadElement**(`value`): [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

Adds a new element at the head of the linked list and returns the newly created element.

#### Parameters

• **value**: `T`

The value to be added.

#### Returns

[`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

- The newly created element.

#### Defined in

[dataStructures/LinkedList.ts:62](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L62)

***

### addTail()

> **addTail**(`value`): `void`

Adds a new value at the tail of the linked list.

#### Parameters

• **value**: `T`

The value to be added.

#### Returns

`void`

#### Defined in

[dataStructures/LinkedList.ts:14](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L14)

***

### addTailElement()

> **addTailElement**(`value`): [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

Adds a new element at the tail of the linked list and returns the newly created element.

#### Parameters

• **value**: `T`

The value to be added.

#### Returns

[`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

- The newly created element.

#### Defined in

[dataStructures/LinkedList.ts:24](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L24)

***

### iterate()

> **iterate**(): `IterableIterator`\<`T`\>

Returns an iterator for the values in the linked list.

#### Returns

`IterableIterator`\<`T`\>

- An iterator over the values in the list.

#### Defined in

[dataStructures/LinkedList.ts:388](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L388)

***

### iterateElements()

> **iterateElements**(): `IterableIterator`\<[`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>\>

Returns an iterator for the elements in the linked list.

#### Returns

`IterableIterator`\<[`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>\>

- An iterator over the elements in the list.

#### Defined in

[dataStructures/LinkedList.ts:399](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L399)

***

### removeAtIndex()

> **removeAtIndex**(`index`): `undefined` \| `T`

Removes the element at a given index from the list and returns its value.

#### Parameters

• **index**: `number`

The index of the element to remove.

#### Returns

`undefined` \| `T`

- The value of the removed element, or undefined if the index is out of bounds.

#### Defined in

[dataStructures/LinkedList.ts:236](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L236)

***

### removeElement()

> **removeElement**(`element`): `undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

Removes a given element from the list.

#### Parameters

• **element**: [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

The element to be removed.

#### Returns

`undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

- The removed element, or undefined if not found.

#### Defined in

[dataStructures/LinkedList.ts:209](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L209)

***

### removeElementAtIndex()

> **removeElementAtIndex**(`index`): `undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

Removes the element at a given index from the list and returns the element.

#### Parameters

• **index**: `number`

The index of the element to remove.

#### Returns

`undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

- The removed element, or undefined if the index is out of bounds.

#### Defined in

[dataStructures/LinkedList.ts:246](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L246)

***

### removeHead()

> **removeHead**(): `undefined` \| `T`

Removes the head element from the list and returns its value.

#### Returns

`undefined` \| `T`

- The value of the removed element, or undefined if the list is empty.

#### Defined in

[dataStructures/LinkedList.ts:144](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L144)

***

### removeHeadElement()

> **removeHeadElement**(): `undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

Removes the head element from the list and returns the element.

#### Returns

`undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

- The removed element, or undefined if the list is empty.

#### Defined in

[dataStructures/LinkedList.ts:153](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L153)

***

### removeTail()

> **removeTail**(): `undefined` \| `T`

Removes the tail element from the list and returns its value.

#### Returns

`undefined` \| `T`

- The value of the removed element, or undefined if the list is empty.

#### Defined in

[dataStructures/LinkedList.ts:176](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L176)

***

### removeTailElement()

> **removeTailElement**(): `undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

Removes the tail element from the list and returns the element.

#### Returns

`undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

- The removed element, or undefined if the list is empty.

#### Defined in

[dataStructures/LinkedList.ts:185](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L185)

***

### searchByIndex()

> **searchByIndex**(`index`): `undefined` \| `T`

Searches for the value at a given index in the list.

#### Parameters

• **index**: `number`

The index to search for.

#### Returns

`undefined` \| `T`

- The value at the specified index, or undefined if out of bounds.

#### Defined in

[dataStructures/LinkedList.ts:273](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L273)

***

### searchElementByIndex()

> **searchElementByIndex**(`index`): `undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

Searches for the element at a given index in the list.

#### Parameters

• **index**: `number`

The index to search for.

#### Returns

`undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

- The element at the specified index, or undefined if out of bounds.

#### Defined in

[dataStructures/LinkedList.ts:283](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L283)

***

### toArray()

> **toArray**(): `T`[]

Converts the linked list to an array.

#### Returns

`T`[]

- An array containing all the values in the list.

#### Defined in

[dataStructures/LinkedList.ts:421](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/LinkedList.ts#L421)
