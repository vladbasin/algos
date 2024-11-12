[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / DisjointSet

# Class: DisjointSet

Disjoint Set (Union-Find) data structure with path compression and union by rank.
Efficiently maintains a partition of elements into disjoint sets.

## Constructors

### new DisjointSet()

> **new DisjointSet**(`size`): [`DisjointSet`](DisjointSet.md)

Creates a new DisjointSet data structure.
Initially, each element is in its own singleton set.

#### Parameters

• **size**: `number`

The number of elements in the set (0 to size-1)

#### Returns

[`DisjointSet`](DisjointSet.md)

#### Throws

If size is not positive

#### Defined in

[dataStructures/DisjointSet.ts:13](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/DisjointSet.ts#L13)

## Methods

### areInSameSet()

> **areInSameSet**(`element1`, `element2`): `boolean`

Checks if two elements are in the same set.
Uses path compression for efficiency.

#### Parameters

• **element1**: `number`

First element

• **element2**: `number`

Second element

#### Returns

`boolean`

True if elements are in the same set

#### Defined in

[dataStructures/DisjointSet.ts:33](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/DisjointSet.ts#L33)

***

### union()

> **union**(`element1`, `element2`): `void`

Merges the sets containing the two elements.
Uses union by rank for balanced trees.

#### Parameters

• **element1**: `number`

First element

• **element2**: `number`

Second element

#### Returns

`void`

#### Defined in

[dataStructures/DisjointSet.ts:44](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/DisjointSet.ts#L44)
