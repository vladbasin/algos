[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / Queue

# Class: Queue\<T\>

Class representing a queue data structure, which operates on a First-In-First-Out (FIFO) basis.
This queue is backed by a linked list for efficient enqueuing and dequeuing operations.

## Type Parameters

• **T**

The type of elements stored in the queue.

## Constructors

### new Queue()

> **new Queue**\<`T`\>(): [`Queue`](Queue.md)\<`T`\>

#### Returns

[`Queue`](Queue.md)\<`T`\>

## Accessors

### length

> `get` **length**(): `number`

Returns the number of items currently in the queue.

#### Returns

`number`

- The number of items in the queue.

#### Defined in

[dataStructures/Queue.ts:43](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/Queue.ts#lines-43)

## Methods

### dequeue()

> **dequeue**(): `undefined` \| `T`

Removes and returns the item from the front of the queue (dequeues the item).

#### Returns

`undefined` \| `T`

- The item from the front of the queue, or undefined if the queue is empty.

#### Defined in

[dataStructures/Queue.ts:25](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/Queue.ts#lines-25)

***

### enqueue()

> **enqueue**(`item`): `void`

Adds an item to the back of the queue (enqueues the item).

#### Parameters

• **item**: `T`

The item to be added to the queue.

#### Returns

`void`

#### Defined in

[dataStructures/Queue.ts:16](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/Queue.ts#lines-16)

***

### peek()

> **peek**(): `undefined` \| `T`

Returns the item at the front of the queue without removing it.

#### Returns

`undefined` \| `T`

- The item at the front of the queue, or undefined if the queue is empty.

#### Defined in

[dataStructures/Queue.ts:34](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/Queue.ts#lines-34)
