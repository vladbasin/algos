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

[dataStructures/Stack.ts:43](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/Stack.ts#L43)

## Methods

### peek()

> **peek**(): `undefined` \| `T`

Returns the item at the top of the stack without removing it.

#### Returns

`undefined` \| `T`

- The item at the top of the stack, or undefined if the stack is empty.

#### Defined in

[dataStructures/Stack.ts:34](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/Stack.ts#L34)

***

### pop()

> **pop**(): `undefined` \| `T`

Removes and returns the item from the top of the stack.

#### Returns

`undefined` \| `T`

- The item from the top of the stack, or undefined if the stack is empty.

#### Defined in

[dataStructures/Stack.ts:25](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/Stack.ts#L25)

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

[dataStructures/Stack.ts:16](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/Stack.ts#L16)
