[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / SkipListElementType

# Type Alias: SkipListElementType

> **SkipListElementType**: `object`

Type representing a node in a skip list, a data structure that supports fast search, insertion, and deletion.
Each node contains a value, metadata for counting occurrences, segment lengths, and a pointer to a lower level element.

## Type declaration

### count

> **count**: `number`

The number of occurrences of the value or node count for this element.

### isNil

> **isNil**: `boolean`

Indicates whether the element is a nil element (a no-operation element used for boundaries or placeholders).

### lowerLevelElement

> **lowerLevelElement**: [`LinkedListElementType`](LinkedListElementType.md)\<[`SkipListElementType`](SkipListElementType.md)\> \| `undefined`

A pointer to the corresponding element in the lower level of the skip list.
This allows for fast traversal between levels of the skip list.

### segmentLength

> **segmentLength**: `number`

The segment length, which represents the distance or span between this node and the next in the skip list level.

### value

> **value**: `number`

The value stored in the skip list node.

## Defined in

[dataStructures/contracts/SkipListElementType.ts:7](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/contracts/SkipListElementType.ts#L7)
