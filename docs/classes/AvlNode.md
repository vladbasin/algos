[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / AvlNode

# Class: AvlNode

Class representing a node in an AVL Tree. Extends the BinaryTreeNodeBase class
by adding a height property, which is crucial for maintaining the balance of the tree.

## Extends

- [`BinaryTreeNodeBase`](BinaryTreeNodeBase.md)\<[`AvlNode`](AvlNode.md)\>

## Constructors

### new AvlNode()

> **new AvlNode**(`value`, `height`, `parent`?, `left`?, `right`?): [`AvlNode`](AvlNode.md)

Creates a new AVL Tree node.

#### Parameters

• **value**: `number`

The value stored in the node.

• **height**: `number`

The height of the node, which helps in balancing the tree.

• **parent?**: [`AvlNode`](AvlNode.md)

The parent of the current node, if any.

• **left?**: [`AvlNode`](AvlNode.md)

The left child of the node.

• **right?**: [`AvlNode`](AvlNode.md)

The right child of the node.

#### Returns

[`AvlNode`](AvlNode.md)

#### Overrides

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`constructor`](BinaryTreeNodeBase.md#constructors)

#### Defined in

[dataStructures/binaryTrees/AvlNode.ts:17](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/AvlNode.ts#lines-17)

## Properties

### height

> **height**: `number`

The height of the node, which helps in balancing the tree.

#### Defined in

[dataStructures/binaryTrees/AvlNode.ts:19](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/AvlNode.ts#lines-19)

***

### left?

> `optional` **left**: [`AvlNode`](AvlNode.md)

The left child of the node.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`left`](BinaryTreeNodeBase.md#left)

#### Defined in

[dataStructures/binaryTrees/AvlNode.ts:21](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/AvlNode.ts#lines-21)

***

### parent?

> `optional` **parent**: [`AvlNode`](AvlNode.md)

The parent of the current node, if any.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`parent`](BinaryTreeNodeBase.md#parent)

#### Defined in

[dataStructures/binaryTrees/AvlNode.ts:20](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/AvlNode.ts#lines-20)

***

### right?

> `optional` **right**: [`AvlNode`](AvlNode.md)

The right child of the node.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`right`](BinaryTreeNodeBase.md#right)

#### Defined in

[dataStructures/binaryTrees/AvlNode.ts:22](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/AvlNode.ts#lines-22)

***

### value

> **value**: `number`

The value stored in the node.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`value`](BinaryTreeNodeBase.md#value)

#### Defined in

[dataStructures/binaryTrees/AvlNode.ts:18](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/AvlNode.ts#lines-18)

## Methods

### asNode()

> `protected` **asNode**(): [`AvlNode`](AvlNode.md)

Helper method to cast the current object as a node of type T.

#### Returns

[`AvlNode`](AvlNode.md)

- The current node cast as type T.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`asNode`](BinaryTreeNodeBase.md#asnode)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:406](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-406)

***

### detachFromParent()

> **detachFromParent**(): `void`

Detaches the node from its parent, effectively removing it from the tree.

#### Returns

`void`

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`detachFromParent`](BinaryTreeNodeBase.md#detachfromparent)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:131](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-131)

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

> `optional` **node**: [`AvlNode`](AvlNode.md)

##### path

> **path**: [`AvlNode`](AvlNode.md)[]

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`findNodeWithValue`](BinaryTreeNodeBase.md#findnodewithvalue)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:181](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-181)

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

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:160](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-160)

***

### getCloseNephew()

> **getCloseNephew**(): `undefined` \| [`AvlNode`](AvlNode.md)

Retrieves the close nephew (left child of the node's sibling if this node is left child, or right child of the node's sibling otherwise).

#### Returns

`undefined` \| [`AvlNode`](AvlNode.md)

- The close nephew, or undefined if not applicable.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`getCloseNephew`](BinaryTreeNodeBase.md#getclosenephew)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:113](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-113)

***

### getDistantNephew()

> **getDistantNephew**(): `undefined` \| [`AvlNode`](AvlNode.md)

Retrieves the distant nephew (right child of the node's sibling if this node is left child, or left child of the node's sibling otherwise).

#### Returns

`undefined` \| [`AvlNode`](AvlNode.md)

- The distant nephew, or undefined if not applicable.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`getDistantNephew`](BinaryTreeNodeBase.md#getdistantnephew)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:123](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-123)

***

### getNotNilChild()

> **getNotNilChild**(): `undefined` \| [`AvlNode`](AvlNode.md)

Returns the non-nil child of the node, if one exists.

#### Returns

`undefined` \| [`AvlNode`](AvlNode.md)

- The non-nil child of the node, or undefined if both children are nil.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`getNotNilChild`](BinaryTreeNodeBase.md#getnotnilchild)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:86](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-86)

***

### getSibling()

> **getSibling**(): `undefined` \| [`AvlNode`](AvlNode.md)

Retrieves the sibling of the current node, if it has one.

#### Returns

`undefined` \| [`AvlNode`](AvlNode.md)

- The sibling of the node, or undefined if no sibling exists.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`getSibling`](BinaryTreeNodeBase.md#getsibling)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:101](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-101)

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

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:32](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-32)

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

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:41](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-41)

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

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:50](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-50)

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

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:59](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-59)

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

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:68](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-68)

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

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:23](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-23)

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

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:77](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-77)

***

### replaceWith()

> **replaceWith**(`node`): `void`

Replaces the current node with another node.

#### Parameters

• **node**: `undefined` \| [`AvlNode`](AvlNode.md)

The node to replace the current one, or undefined to remove it.

#### Returns

`void`

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`replaceWith`](BinaryTreeNodeBase.md#replacewith)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:140](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-140)

***

### rotateLeft()

> **rotateLeft**(`setRootNode`): [`AvlNode`](AvlNode.md)

Performs a left rotation on the node.

#### Parameters

• **setRootNode**

Function to set the root node of the tree, if it was affected by rotation.

#### Returns

[`AvlNode`](AvlNode.md)

- The new root node after the rotation.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`rotateLeft`](BinaryTreeNodeBase.md#rotateleft)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:203](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-203)

***

### rotateRight()

> **rotateRight**(`setRootNode`): [`AvlNode`](AvlNode.md)

Performs a right rotation on the node.

#### Parameters

• **setRootNode**

Function to set the root node of the tree, if it was affected by rotation.

#### Returns

[`AvlNode`](AvlNode.md)

- The new root node after the rotation.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`rotateRight`](BinaryTreeNodeBase.md#rotateright)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:238](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-238)

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

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:272](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-272)

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

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`toString`](BinaryTreeNodeBase.md#tostring)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:298](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-298)

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

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:350](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-350)

***

### traverseInOrderAsNodes()

> **traverseInOrderAsNodes**(): [`AvlNode`](AvlNode.md)[]

Traverses the tree in in-order traversal and returns an array of nodes.

#### Returns

[`AvlNode`](AvlNode.md)[]

- An array of nodes in in-order traversal order.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`traverseInOrderAsNodes`](BinaryTreeNodeBase.md#traverseinorderasnodes)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:359](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-359)

***

### traverseInOrderRecursive()

> **traverseInOrderRecursive**(`node`?): (`undefined` \| `number`)[]

Traverses the tree recursively in in-order traversal and returns an array of node values.

#### Parameters

• **node?**: [`AvlNode`](AvlNode.md)

The node to start traversal from, or defaults to the current node.

#### Returns

(`undefined` \| `number`)[]

- An array of values in in-order traversal order.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`traverseInOrderRecursive`](BinaryTreeNodeBase.md#traverseinorderrecursive)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:387](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#lines-387)
