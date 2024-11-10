[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / RedBlackTree

# Class: RedBlackTree

Class representing a Red-Black Tree, a self-balancing binary search tree.
This tree maintains balance through color properties and rotations to ensure efficient operations.

## Constructors

### new RedBlackTree()

> **new RedBlackTree**(): [`RedBlackTree`](RedBlackTree.md)

#### Returns

[`RedBlackTree`](RedBlackTree.md)

## Accessors

### root

> `get` **root**(): [`RedBlackNode`](RedBlackNode.md)

Retrieves the root node of the Red-Black Tree.

#### Returns

[`RedBlackNode`](RedBlackNode.md)

- The root node of the tree.

#### Defined in

[dataStructures/binaryTrees/RedBlackTree.ts:140](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/RedBlackTree.ts#lines-140)

## Methods

### add()

> **add**(`value`): `void`

Adds a value to the Red-Black Tree. If the tree is empty, the root node is created.
After insertion, the tree is rebalanced to maintain Red-Black Tree properties.

#### Parameters

• **value**: `number`

The value to be added to the tree.

#### Returns

`void`

#### Defined in

[dataStructures/binaryTrees/RedBlackTree.ts:15](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/RedBlackTree.ts#lines-15)

***

### delete()

> **delete**(`value`): `void`

Deletes a value from the Red-Black Tree. After deletion, the tree is rebalanced
to maintain the Red-Black Tree properties.

#### Parameters

• **value**: `number`

The value to be deleted from the tree.

#### Returns

`void`

#### Defined in

[dataStructures/binaryTrees/RedBlackTree.ts:51](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/RedBlackTree.ts#lines-51)

***

### has()

> **has**(`value`): `boolean`

Checks if a value exists in the Red-Black Tree.

#### Parameters

• **value**: `number`

The value to search for.

#### Returns

`boolean`

- True if the value exists, otherwise false.

#### Defined in

[dataStructures/binaryTrees/RedBlackTree.ts:103](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/RedBlackTree.ts#lines-103)

***

### toFullBinaryTreeArray()

> **toFullBinaryTreeArray**(`ignoreNilNodes`?): (`undefined` \| `number`)[]

Converts the Red-Black Tree to a full binary tree array, which includes nil nodes.

#### Parameters

• **ignoreNilNodes?**: `boolean`

If true, nil nodes will be excluded from the array.

#### Returns

(`undefined` \| `number`)[]

- An array representing the full binary tree.

#### Defined in

[dataStructures/binaryTrees/RedBlackTree.ts:122](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/RedBlackTree.ts#lines-122)

***

### toSortedArray()

> **toSortedArray**(): (`undefined` \| `number`)[]

Converts the Red-Black Tree to a sorted array.

#### Returns

(`undefined` \| `number`)[]

- An array of values in sorted order.

#### Defined in

[dataStructures/binaryTrees/RedBlackTree.ts:112](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/RedBlackTree.ts#lines-112)

***

### toString()

> **toString**(): `string`

Converts the Red-Black Tree to a string representation, showing node values and their colors.

#### Returns

`string`

- A string representation of the tree. If the tree is empty, it returns "Tree is empty".

#### Defined in

[dataStructures/binaryTrees/RedBlackTree.ts:131](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/RedBlackTree.ts#lines-131)