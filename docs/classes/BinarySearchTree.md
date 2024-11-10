[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / BinarySearchTree

# Class: BinarySearchTree

Class representing a Binary Search Tree (BST), a data structure that stores items in sorted order.

## Constructors

### new BinarySearchTree()

> **new BinarySearchTree**(): [`BinarySearchTree`](BinarySearchTree.md)

#### Returns

[`BinarySearchTree`](BinarySearchTree.md)

## Methods

### add()

> **add**(`value`): `void`

Adds a value to the Binary Search Tree. If the tree is empty, a root node is created.
Otherwise, the value is inserted in the appropriate position based on BST rules.

#### Parameters

• **value**: `number`

The value to be added to the tree.

#### Returns

`void`

#### Defined in

[dataStructures/binaryTrees/BinarySearchTree.ts:14](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinarySearchTree.ts#lines-14)

***

### delete()

> **delete**(`value`): `void`

Deletes a value from the Binary Search Tree if it exists. The structure of the tree is maintained after deletion.

#### Parameters

• **value**: `number`

The value to be deleted from the tree.

#### Returns

`void`

#### Defined in

[dataStructures/binaryTrees/BinarySearchTree.ts:54](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinarySearchTree.ts#lines-54)

***

### has()

> **has**(`value`): `boolean`

Checks if a value exists in the Binary Search Tree.

#### Parameters

• **value**: `number`

The value to search for in the tree.

#### Returns

`boolean`

- True if the value exists in the tree, otherwise false.

#### Defined in

[dataStructures/binaryTrees/BinarySearchTree.ts:44](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinarySearchTree.ts#lines-44)

***

### toFullBinaryTreeArray()

> **toFullBinaryTreeArray**(): (`undefined` \| `number`)[]

Converts the Binary Search Tree to an array representing a full binary tree.

#### Returns

(`undefined` \| `number`)[]

- An array representing the tree in full binary tree format.

#### Defined in

[dataStructures/binaryTrees/BinarySearchTree.ts:110](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinarySearchTree.ts#lines-110)

***

### toSortedArray()

> **toSortedArray**(): (`undefined` \| `number`)[]

Converts the Binary Search Tree to a sorted array.

#### Returns

(`undefined` \| `number`)[]

- An array of values from the tree in sorted order.

#### Defined in

[dataStructures/binaryTrees/BinarySearchTree.ts:92](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinarySearchTree.ts#lines-92)

***

### toSortedArrayRecursive()

> **toSortedArrayRecursive**(): (`undefined` \| `number`)[]

Converts the Binary Search Tree to a sorted array using a recursive method.

#### Returns

(`undefined` \| `number`)[]

- An array of values from the tree in sorted order.

#### Defined in

[dataStructures/binaryTrees/BinarySearchTree.ts:101](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinarySearchTree.ts#lines-101)

***

### toString()

> **toString**(): `string`

Converts the Binary Search Tree to a string representation.

#### Returns

`string`

- A string representation of the tree. Returns "Tree is empty" if there are no nodes.

#### Defined in

[dataStructures/binaryTrees/BinarySearchTree.ts:119](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinarySearchTree.ts#lines-119)