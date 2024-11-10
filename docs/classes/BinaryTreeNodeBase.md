[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / BinaryTreeNodeBase

# Class: `abstract` BinaryTreeNodeBase\<T\>

Base class for binary tree nodes, providing essential operations
for interacting with tree structure such as rotation, traversal, and node relationships.

## Extended by

- [`HuffmanTreeNode`](HuffmanTreeNode.md)
- [`AvlNode`](AvlNode.md)
- [`BinarySearchTreeNode`](BinarySearchTreeNode.md)
- [`RedBlackNode`](RedBlackNode.md)

## Type Parameters

• **T** *extends* [`BinaryTreeNodeBase`](BinaryTreeNodeBase.md)\<`T`\>

## Constructors

### new BinaryTreeNodeBase()

> **new BinaryTreeNodeBase**\<`T`\>(`value`?, `parent`?, `left`?, `right`?): [`BinaryTreeNodeBase`](BinaryTreeNodeBase.md)\<`T`\>

Constructor for creating a binary tree node.

#### Parameters

• **value?**: `number`

The value stored in the node.

• **parent?**: `T`

The parent of the current node.

• **left?**: `T`

The left child of the current node.

• **right?**: `T`

The right child of the current node.

#### Returns

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md)\<`T`\>

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:16](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L16)

## Properties

### left?

> `optional` **left**: `T`

The left child of the current node.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:16](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L16)

***

### parent?

> `optional` **parent**: `T`

The parent of the current node.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:16](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L16)

***

### right?

> `optional` **right**: `T`

The right child of the current node.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:16](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L16)

***

### value?

> `optional` **value**: `number`

The value stored in the node.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:16](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L16)

## Methods

### asNode()

> `protected` **asNode**(): `T`

Helper method to cast the current object as a node of type T.

#### Returns

`T`

- The current node cast as type T.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:406](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L406)

***

### detachFromParent()

> **detachFromParent**(): `void`

Detaches the node from its parent, effectively removing it from the tree.

#### Returns

`void`

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:131](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L131)

***

### findNodeWithValue()

> **findNodeWithValue**(`value`): `object`

Finds a node with a specific value in the tree.

#### Parameters

• **value**: `number`

The value to search for.

#### Returns

`object`

- The node and the path to it if found, otherwise an empty path.

##### node?

> `optional` **node**: `T`

##### path

> **path**: `T`[]

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:181](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L181)

***

### findSuccessor()

> **findSuccessor**(): `undefined` \| `object`

Finds the in-order successor of the node.

#### Returns

`undefined` \| `object`

- The successor node and the path to it, or undefined if no successor exists.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:160](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L160)

***

### getCloseNephew()

> **getCloseNephew**(): `undefined` \| `T`

Retrieves the close nephew (left child of the node's sibling if this node is left child, or right child of the node's sibling otherwise).

#### Returns

`undefined` \| `T`

- The close nephew, or undefined if not applicable.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:113](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L113)

***

### getDistantNephew()

> **getDistantNephew**(): `undefined` \| `T`

Retrieves the distant nephew (right child of the node's sibling if this node is left child, or left child of the node's sibling otherwise).

#### Returns

`undefined` \| `T`

- The distant nephew, or undefined if not applicable.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:123](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L123)

***

### getNotNilChild()

> **getNotNilChild**(): `undefined` \| `T`

Returns the non-nil child of the node, if one exists.

#### Returns

`undefined` \| `T`

- The non-nil child of the node, or undefined if both children are nil.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:86](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L86)

***

### getSibling()

> **getSibling**(): `undefined` \| `T`

Retrieves the sibling of the current node, if it has one.

#### Returns

`undefined` \| `T`

- The sibling of the node, or undefined if no sibling exists.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:101](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L101)

***

### hasAnyChild()

> **hasAnyChild**(): `boolean`

Determines if the node has any child nodes.

#### Returns

`boolean`

- True if the node has either a left or right child.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:32](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L32)

***

### hasAnyNotNilChild()

> **hasAnyNotNilChild**(): `boolean`

Determines if the node has any non-nil child nodes.

#### Returns

`boolean`

- True if the node has at least one non-nil child.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:41](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L41)

***

### hasBothChildren()

> **hasBothChildren**(): `boolean`

Determines if the node has both left and right children.

#### Returns

`boolean`

- True if both children are present, false otherwise.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:50](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L50)

***

### hasBothNotNilChildren()

> **hasBothNotNilChildren**(): `boolean`

Determines if both children of the node are non-nil.

#### Returns

`boolean`

- True if both children are present and non-nil.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:59](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L59)

***

### isLeftChild()

> **isLeftChild**(): `boolean`

Checks if the node is a left child of its parent.

#### Returns

`boolean`

- True if the node is the left child of its parent.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:68](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L68)

***

### isNilNode()

> **isNilNode**(): `boolean`

Checks if the current node is a Nil node (undefined value).

#### Returns

`boolean`

- True if the node has an undefined value, otherwise false.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:23](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L23)

***

### isRightChild()

> **isRightChild**(): `boolean`

Checks if the node is a right child of its parent.

#### Returns

`boolean`

- True if the node is the right child of its parent.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:77](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L77)

***

### replaceWith()

> **replaceWith**(`node`): `void`

Replaces the current node with another node.

#### Parameters

• **node**: `undefined` \| `T`

The node to replace the current one, or undefined to remove it.

#### Returns

`void`

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:140](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L140)

***

### rotateLeft()

> **rotateLeft**(`setRootNode`): `T`

Performs a left rotation on the node.

#### Parameters

• **setRootNode**

Function to set the root node of the tree, if it was affected by rotation.

#### Returns

`T`

- The new root node after the rotation.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:203](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L203)

***

### rotateRight()

> **rotateRight**(`setRootNode`): `T`

Performs a right rotation on the node.

#### Parameters

• **setRootNode**

Function to set the root node of the tree, if it was affected by rotation.

#### Returns

`T`

- The new root node after the rotation.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:238](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L238)

***

### toFullBinaryTreeArray()

> **toFullBinaryTreeArray**(`ignoreNilNodes`?): (`undefined` \| `number`)[]

Converts the tree to an array representing a full binary tree.

#### Parameters

• **ignoreNilNodes?**: `boolean`

If true, nil nodes are ignored in the resulting array.

#### Returns

(`undefined` \| `number`)[]

- An array representing the full binary tree.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:272](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L272)

***

### toString()

> **toString**(`extraLength`?, `getExtraSuffix`?): `string`

Converts the tree to a string representation.

#### Parameters

• **extraLength?**: `number`

Additional length to pad each node value.

• **getExtraSuffix?**

A function to add an extra suffix to each node value in the string representation.

#### Returns

`string`

- The string representation of the tree.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:298](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L298)

***

### traverseInOrder()

> **traverseInOrder**(): (`undefined` \| `number`)[]

Traverses the tree in in-order traversal and returns an array of node values.

#### Returns

(`undefined` \| `number`)[]

- An array of values in in-order traversal order.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:350](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L350)

***

### traverseInOrderAsNodes()

> **traverseInOrderAsNodes**(): `T`[]

Traverses the tree in in-order traversal and returns an array of nodes.

#### Returns

`T`[]

- An array of nodes in in-order traversal order.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:359](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L359)

***

### traverseInOrderRecursive()

> **traverseInOrderRecursive**(`node`?): (`undefined` \| `number`)[]

Traverses the tree recursively in in-order traversal and returns an array of node values.

#### Parameters

• **node?**: `T`

The node to start traversal from, or defaults to the current node.

#### Returns

(`undefined` \| `number`)[]

- An array of values in in-order traversal order.

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:387](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L387)
