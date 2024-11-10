[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / Stack

# Class: Stack\<T\>

Class representing a stack data structure, which operates on a Last-In-First-Out (LIFO) basis.
This stack is backed by a linked list for efficient pushing and popping of elements.

## Type Parameters

• **T**

The type of elements stored in the stack.

## Constructors

### new Stack()

> **new Stack**\<`T`\>(): [`Stack`](Stack.md)\<`T`\>

#### Returns

[`Stack`](Stack.md)\<`T`\>

## Accessors

### length

> `get` **length**(): `number`

Returns the number of items currently in the stack.

#### Returns

`number`

- The number of items in the stack.

#### Defined in

[dataStructures/Stack.ts:43](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/Stack.ts#lines-43)

## Methods

### peek()

> **peek**(): `undefined` \| `T`

Returns the item at the top of the stack without removing it.

#### Returns

`undefined` \| `T`

- The item at the top of the stack, or undefined if the stack is empty.

#### Defined in

[dataStructures/Stack.ts:34](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/Stack.ts#lines-34)

***

### pop()

> **pop**(): `undefined` \| `T`

Removes and returns the item from the top of the stack.

#### Returns

`undefined` \| `T`

- The item from the top of the stack, or undefined if the stack is empty.

#### Defined in

[dataStructures/Stack.ts:25](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/Stack.ts#lines-25)

***

### push()

> **push**(`item`): `void`

Pushes an item onto the top of the stack.

#### Parameters

• **item**: `T`

The item to be added to the stack.

#### Returns

`void`

#### Defined in

[dataStructures/Stack.ts:16](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/Stack.ts#lines-16)
