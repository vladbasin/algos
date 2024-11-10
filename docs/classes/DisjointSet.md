[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / DisjointSet

# Class: DisjointSet

Disjoint Set is a data structure that keeps track of a partition of a set into disjoint (non-overlapping) subsets.

## Constructors

### new DisjointSet()

> **new DisjointSet**(`size`): [`DisjointSet`](DisjointSet.md)

#### Parameters

• **size**: `number`

The size of the set.

#### Returns

[`DisjointSet`](DisjointSet.md)

#### Defined in

[dataStructures/DisjointSet.ts:8](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/DisjointSet.ts#L8)

## Methods

### areInSameSet()

> **areInSameSet**(`element1`, `element2`): `boolean`

Checks if two elements are in the same set.

#### Parameters

• **element1**: `number`

The first element.

• **element2**: `number`

The second element.

#### Returns

`boolean`

True if the elements are in the same set, false otherwise.

#### Defined in

[dataStructures/DisjointSet.ts:26](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/DisjointSet.ts#L26)

***

### union()

> **union**(`element1`, `element2`): `void`

Unions two sets.

#### Parameters

• **element1**: `number`

The first element.

• **element2**: `number`

The second element.

#### Returns

`void`

#### Defined in

[dataStructures/DisjointSet.ts:35](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/DisjointSet.ts#L35)
