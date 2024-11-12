[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / LinkedListElementType

# Type Alias: LinkedListElementType\<T\>

> **LinkedListElementType**\<`T`\>: `object`

Type representing a node in a doubly linked list.
Each node contains a value and references to both the next and previous nodes in the list.

## Type Parameters

• **T**

The type of the value stored in the node.

## Type declaration

### next

> **next**: [`LinkedListElementType`](LinkedListElementType.md)\<`T`\> \| `undefined`

A reference to the next node in the list, or undefined if this is the last node.

### prev

> **prev**: [`LinkedListElementType`](LinkedListElementType.md)\<`T`\> \| `undefined`

A reference to the previous node in the list, or undefined if this is the first node.

### value

> **value**: `T`

The value stored in the linked list node.

## Defined in

[dataStructures/contracts/LinkedListElementType.ts:7](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/contracts/LinkedListElementType.ts#L7)
