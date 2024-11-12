[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / HuffmanTreeNode

# Class: HuffmanTreeNode

Represents a node in a Huffman Tree used for text compression.
Extends the base BinaryTreeNode with additional properties for storing character information.

## Extends

- [`BinaryTreeNodeBase`](BinaryTreeNodeBase.md)\<[`HuffmanTreeNode`](HuffmanTreeNode.md)\>

## Constructors

### new HuffmanTreeNode()

> **new HuffmanTreeNode**(`value`, `char`, `parent`?, `left`?, `right`?): [`HuffmanTreeNode`](HuffmanTreeNode.md)

Creates a new instance of HuffmanTreeNode.

#### Parameters

• **value**: `number`

The frequency or value of the node (used for Huffman coding).

• **char**: `undefined` \| `string`

The character represented by this node (if any).

• **parent?**: [`HuffmanTreeNode`](HuffmanTreeNode.md)

(Optional) The parent node in the tree.

• **left?**: [`HuffmanTreeNode`](HuffmanTreeNode.md)

(Optional) The left child node.

• **right?**: [`HuffmanTreeNode`](HuffmanTreeNode.md)

(Optional) The right child node.

#### Returns

[`HuffmanTreeNode`](HuffmanTreeNode.md)

#### Overrides

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`constructor`](BinaryTreeNodeBase.md#constructors)

#### Defined in

[dataStructures/HuffmanTreeNode.ts:17](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/HuffmanTreeNode.ts#L17)

## Properties

### char

> **char**: `undefined` \| `string`

The character represented by this node (if any).

#### Defined in

[dataStructures/HuffmanTreeNode.ts:19](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/HuffmanTreeNode.ts#L19)

***

### left?

> `optional` **left**: [`HuffmanTreeNode`](HuffmanTreeNode.md)

(Optional) The left child node.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`left`](BinaryTreeNodeBase.md#left)

#### Defined in

[dataStructures/HuffmanTreeNode.ts:21](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/HuffmanTreeNode.ts#L21)

***

### parent?

> `optional` **parent**: [`HuffmanTreeNode`](HuffmanTreeNode.md)

(Optional) The parent node in the tree.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`parent`](BinaryTreeNodeBase.md#parent)

#### Defined in

[dataStructures/HuffmanTreeNode.ts:20](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/HuffmanTreeNode.ts#L20)

***

### right?

> `optional` **right**: [`HuffmanTreeNode`](HuffmanTreeNode.md)

(Optional) The right child node.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`right`](BinaryTreeNodeBase.md#right)

#### Defined in

[dataStructures/HuffmanTreeNode.ts:22](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/HuffmanTreeNode.ts#L22)

***

### value

> **value**: `number`

The frequency or value of the node (used for Huffman coding).

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`value`](BinaryTreeNodeBase.md#value)

#### Defined in

[dataStructures/HuffmanTreeNode.ts:18](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/HuffmanTreeNode.ts#L18)

## Methods

### asNode()

> `protected` **asNode**(): [`HuffmanTreeNode`](HuffmanTreeNode.md)

Helper method to cast the current object as a node of type T.

#### Returns

[`HuffmanTreeNode`](HuffmanTreeNode.md)

- The current node cast as type T.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`asNode`](BinaryTreeNodeBase.md#asnode)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:406](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L406)

***

### detachFromParent()

> **detachFromParent**(): `void`

Detaches the node from its parent, effectively removing it from the tree.

#### Returns

`void`

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`detachFromParent`](BinaryTreeNodeBase.md#detachfromparent)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:131](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L131)

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

> `optional` **node**: [`HuffmanTreeNode`](HuffmanTreeNode.md)

##### path

> **path**: [`HuffmanTreeNode`](HuffmanTreeNode.md)[]

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`findNodeWithValue`](BinaryTreeNodeBase.md#findnodewithvalue)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:181](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L181)

***

### findSuccessor()

> **findSuccessor**(): `undefined` \| `object`

Finds the in-order successor of the node.

#### Returns

`undefined` \| `object`

- The successor node and the path to it, or undefined if no successor exists.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`findSuccessor`](BinaryTreeNodeBase.md#findsuccessor)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:160](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L160)

***

### getCloseNephew()

> **getCloseNephew**(): `undefined` \| [`HuffmanTreeNode`](HuffmanTreeNode.md)

Retrieves the close nephew (left child of the node's sibling if this node is left child, or right child of the node's sibling otherwise).

#### Returns

`undefined` \| [`HuffmanTreeNode`](HuffmanTreeNode.md)

- The close nephew, or undefined if not applicable.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`getCloseNephew`](BinaryTreeNodeBase.md#getclosenephew)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:113](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L113)

***

### getDistantNephew()

> **getDistantNephew**(): `undefined` \| [`HuffmanTreeNode`](HuffmanTreeNode.md)

Retrieves the distant nephew (right child of the node's sibling if this node is left child, or left child of the node's sibling otherwise).

#### Returns

`undefined` \| [`HuffmanTreeNode`](HuffmanTreeNode.md)

- The distant nephew, or undefined if not applicable.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`getDistantNephew`](BinaryTreeNodeBase.md#getdistantnephew)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:123](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L123)

***

### getNotNilChild()

> **getNotNilChild**(): `undefined` \| [`HuffmanTreeNode`](HuffmanTreeNode.md)

Returns the non-nil child of the node, if one exists.

#### Returns

`undefined` \| [`HuffmanTreeNode`](HuffmanTreeNode.md)

- The non-nil child of the node, or undefined if both children are nil.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`getNotNilChild`](BinaryTreeNodeBase.md#getnotnilchild)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:86](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L86)

***

### getSibling()

> **getSibling**(): `undefined` \| [`HuffmanTreeNode`](HuffmanTreeNode.md)

Retrieves the sibling of the current node, if it has one.

#### Returns

`undefined` \| [`HuffmanTreeNode`](HuffmanTreeNode.md)

- The sibling of the node, or undefined if no sibling exists.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`getSibling`](BinaryTreeNodeBase.md#getsibling)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:101](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L101)

***

### hasAnyChild()

> **hasAnyChild**(): `boolean`

Determines if the node has any child nodes.

#### Returns

`boolean`

- True if the node has either a left or right child.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`hasAnyChild`](BinaryTreeNodeBase.md#hasanychild)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:32](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L32)

***

### hasAnyNotNilChild()

> **hasAnyNotNilChild**(): `boolean`

Determines if the node has any non-nil child nodes.

#### Returns

`boolean`

- True if the node has at least one non-nil child.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`hasAnyNotNilChild`](BinaryTreeNodeBase.md#hasanynotnilchild)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:41](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L41)

***

### hasBothChildren()

> **hasBothChildren**(): `boolean`

Determines if the node has both left and right children.

#### Returns

`boolean`

- True if both children are present, false otherwise.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`hasBothChildren`](BinaryTreeNodeBase.md#hasbothchildren)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:50](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L50)

***

### hasBothNotNilChildren()

> **hasBothNotNilChildren**(): `boolean`

Determines if both children of the node are non-nil.

#### Returns

`boolean`

- True if both children are present and non-nil.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`hasBothNotNilChildren`](BinaryTreeNodeBase.md#hasbothnotnilchildren)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:59](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L59)

***

### isLeftChild()

> **isLeftChild**(): `boolean`

Checks if the node is a left child of its parent.

#### Returns

`boolean`

- True if the node is the left child of its parent.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`isLeftChild`](BinaryTreeNodeBase.md#isleftchild)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:68](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L68)

***

### isNilNode()

> **isNilNode**(): `boolean`

Checks if the current node is a Nil node (undefined value).

#### Returns

`boolean`

- True if the node has an undefined value, otherwise false.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`isNilNode`](BinaryTreeNodeBase.md#isnilnode)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:23](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L23)

***

### isRightChild()

> **isRightChild**(): `boolean`

Checks if the node is a right child of its parent.

#### Returns

`boolean`

- True if the node is the right child of its parent.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`isRightChild`](BinaryTreeNodeBase.md#isrightchild)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:77](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L77)

***

### replaceWith()

> **replaceWith**(`node`): `void`

Replaces the current node with another node.

#### Parameters

• **node**: `undefined` \| [`HuffmanTreeNode`](HuffmanTreeNode.md)

The node to replace the current one, or undefined to remove it.

#### Returns

`void`

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`replaceWith`](BinaryTreeNodeBase.md#replacewith)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:140](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L140)

***

### rotateLeft()

> **rotateLeft**(`setRootNode`): [`HuffmanTreeNode`](HuffmanTreeNode.md)

Performs a left rotation on the node.

#### Parameters

• **setRootNode**

Function to set the root node of the tree, if it was affected by rotation.

#### Returns

[`HuffmanTreeNode`](HuffmanTreeNode.md)

- The new root node after the rotation.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`rotateLeft`](BinaryTreeNodeBase.md#rotateleft)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:203](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L203)

***

### rotateRight()

> **rotateRight**(`setRootNode`): [`HuffmanTreeNode`](HuffmanTreeNode.md)

Performs a right rotation on the node.

#### Parameters

• **setRootNode**

Function to set the root node of the tree, if it was affected by rotation.

#### Returns

[`HuffmanTreeNode`](HuffmanTreeNode.md)

- The new root node after the rotation.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`rotateRight`](BinaryTreeNodeBase.md#rotateright)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:238](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L238)

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

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`toFullBinaryTreeArray`](BinaryTreeNodeBase.md#tofullbinarytreearray)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:272](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L272)

***

### toString()

> **toString**(): `string`

Returns a string representation of the Huffman Tree node.
By default, it shows the character represented by the node or a space if the node is a non-leaf.

#### Returns

`string`

string - A string representing the node.

#### Overrides

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`toString`](BinaryTreeNodeBase.md#tostring)

#### Defined in

[dataStructures/HuffmanTreeNode.ts:33](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/HuffmanTreeNode.ts#L33)

***

### traverseInOrder()

> **traverseInOrder**(): (`undefined` \| `number`)[]

Traverses the tree in in-order traversal and returns an array of node values.

#### Returns

(`undefined` \| `number`)[]

- An array of values in in-order traversal order.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`traverseInOrder`](BinaryTreeNodeBase.md#traverseinorder)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:350](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L350)

***

### traverseInOrderAsNodes()

> **traverseInOrderAsNodes**(): [`HuffmanTreeNode`](HuffmanTreeNode.md)[]

Traverses the tree in in-order traversal and returns an array of nodes.

#### Returns

[`HuffmanTreeNode`](HuffmanTreeNode.md)[]

- An array of nodes in in-order traversal order.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`traverseInOrderAsNodes`](BinaryTreeNodeBase.md#traverseinorderasnodes)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:359](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L359)

***

### traverseInOrderRecursive()

> **traverseInOrderRecursive**(`node`?): (`undefined` \| `number`)[]

Traverses the tree recursively in in-order traversal and returns an array of node values.

#### Parameters

• **node?**: [`HuffmanTreeNode`](HuffmanTreeNode.md)

The node to start traversal from, or defaults to the current node.

#### Returns

(`undefined` \| `number`)[]

- An array of values in in-order traversal order.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`traverseInOrderRecursive`](BinaryTreeNodeBase.md#traverseinorderrecursive)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:387](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L387)
