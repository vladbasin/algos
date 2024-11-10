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

[dataStructures/LinkedList.ts:356](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-356)

***

### headElement

> `get` **headElement**(): `undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

Returns the element at the head of the linked list.

#### Returns

`undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

- The element at the head, or undefined if the list is empty.

#### Defined in

[dataStructures/LinkedList.ts:365](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-365)

***

### length

> `get` **length**(): `number`

Returns the current length of the linked list.

#### Returns

`number`

- The number of elements in the list.

#### Defined in

[dataStructures/LinkedList.ts:347](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-347)

***

### tail

> `get` **tail**(): `undefined` \| `T`

Returns the value at the tail of the linked list.

#### Returns

`undefined` \| `T`

- The value at the tail, or undefined if the list is empty.

#### Defined in

[dataStructures/LinkedList.ts:374](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-374)

***

### tailElement

> `get` **tailElement**(): `undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

Returns the element at the tail of the linked list.

#### Returns

`undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

- The element at the tail, or undefined if the list is empty.

#### Defined in

[dataStructures/LinkedList.ts:383](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-383)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<`T`\>

Allows the linked list to be iterable using `for...of` loops.

#### Returns

`IterableIterator`\<`T`\>

- An iterator over the values in the list.

#### Defined in

[dataStructures/LinkedList.ts:416](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-416)

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

[dataStructures/LinkedList.ts:122](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-122)

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

[dataStructures/LinkedList.ts:314](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-314)

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

[dataStructures/LinkedList.ts:94](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-94)

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

[dataStructures/LinkedList.ts:325](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-325)

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

[dataStructures/LinkedList.ts:56](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-56)

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

[dataStructures/LinkedList.ts:66](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-66)

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

[dataStructures/LinkedList.ts:18](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-18)

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

[dataStructures/LinkedList.ts:28](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-28)

***

### iterate()

> **iterate**(): `IterableIterator`\<`T`\>

Returns an iterator for the values in the linked list.

#### Returns

`IterableIterator`\<`T`\>

- An iterator over the values in the list.

#### Defined in

[dataStructures/LinkedList.ts:392](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-392)

***

### iterateElements()

> **iterateElements**(): `IterableIterator`\<[`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>\>

Returns an iterator for the elements in the linked list.

#### Returns

`IterableIterator`\<[`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>\>

- An iterator over the elements in the list.

#### Defined in

[dataStructures/LinkedList.ts:403](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-403)

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

[dataStructures/LinkedList.ts:240](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-240)

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

[dataStructures/LinkedList.ts:213](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-213)

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

[dataStructures/LinkedList.ts:250](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-250)

***

### removeHead()

> **removeHead**(): `undefined` \| `T`

Removes the head element from the list and returns its value.

#### Returns

`undefined` \| `T`

- The value of the removed element, or undefined if the list is empty.

#### Defined in

[dataStructures/LinkedList.ts:148](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-148)

***

### removeHeadElement()

> **removeHeadElement**(): `undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

Removes the head element from the list and returns the element.

#### Returns

`undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

- The removed element, or undefined if the list is empty.

#### Defined in

[dataStructures/LinkedList.ts:157](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-157)

***

### removeTail()

> **removeTail**(): `undefined` \| `T`

Removes the tail element from the list and returns its value.

#### Returns

`undefined` \| `T`

- The value of the removed element, or undefined if the list is empty.

#### Defined in

[dataStructures/LinkedList.ts:180](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-180)

***

### removeTailElement()

> **removeTailElement**(): `undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

Removes the tail element from the list and returns the element.

#### Returns

`undefined` \| [`LinkedListElementType`](../type-aliases/LinkedListElementType.md)\<`T`\>

- The removed element, or undefined if the list is empty.

#### Defined in

[dataStructures/LinkedList.ts:189](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-189)

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

[dataStructures/LinkedList.ts:277](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-277)

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

[dataStructures/LinkedList.ts:287](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-287)

***

### toArray()

> **toArray**(): `T`[]

Converts the linked list to an array.

#### Returns

`T`[]

- An array containing all the values in the list.

#### Defined in

[dataStructures/LinkedList.ts:425](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/LinkedList.ts#lines-425)