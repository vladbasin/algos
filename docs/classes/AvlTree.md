[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / AvlTree

# Class: AvlTree

Class representing an AVL Tree, a self-balancing binary search tree.

## Constructors

### new AvlTree()

> **new AvlTree**(): [`AvlTree`](AvlTree.md)

#### Returns

[`AvlTree`](AvlTree.md)

## Methods

### add()

> **add**(`value`): `void`

Adds a value to the AVL tree. If the tree is empty, a root node is created.
Otherwise, the value is inserted into the appropriate position and the tree is balanced.

#### Parameters

• **value**: `number`

The value to be added to the tree.

#### Returns

`void`

#### Defined in

[dataStructures/binaryTrees/AvlTree.ts:14](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/AvlTree.ts#L14)

***

### delete()

> **delete**(`value`): `void`

Deletes a value from the AVL tree if it exists. The tree is balanced after deletion.

#### Parameters

• **value**: `number`

The value to be deleted from the tree.

#### Returns

`void`

#### Defined in

[dataStructures/binaryTrees/AvlTree.ts:59](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/AvlTree.ts#L59)

***

### has()

> **has**(`value`): `boolean`

Checks if a value exists in the AVL tree.

#### Parameters

• **value**: `number`

The value to search for in the tree.

#### Returns

`boolean`

- True if the value exists in the tree, otherwise false.

#### Defined in

[dataStructures/binaryTrees/AvlTree.ts:49](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/AvlTree.ts#L49)

***

### toFullBinaryTreeArray()

> **toFullBinaryTreeArray**(): (`undefined` \| `number`)[]

Converts the AVL tree to an array representing a full binary tree.

#### Returns

(`undefined` \| `number`)[]

- An array representing the tree in full binary tree format.

#### Defined in

[dataStructures/binaryTrees/AvlTree.ts:111](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/AvlTree.ts#L111)

***

### toSortedArray()

> **toSortedArray**(): (`undefined` \| `number`)[]

Converts the AVL tree to a sorted array.

#### Returns

(`undefined` \| `number`)[]

- An array of values from the tree in sorted order.

#### Defined in

[dataStructures/binaryTrees/AvlTree.ts:102](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/AvlTree.ts#L102)

***

### toString()

> **toString**(): `string`

Converts the AVL tree to a string representation.

#### Returns

`string`

- A string representation of the tree. Returns "Tree is empty" if there are no nodes.

#### Defined in

[dataStructures/binaryTrees/AvlTree.ts:120](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/AvlTree.ts#L120)
