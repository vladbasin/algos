[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / RedBlackNode

# Class: RedBlackNode

Class representing a node in a Red-Black Tree. Extends the BinaryTreeNodeBase class with
additional properties such as node color and automatic nil node creation.

## Extends

- [`BinaryTreeNodeBase`](BinaryTreeNodeBase.md)\<[`RedBlackNode`](RedBlackNode.md)\>

## Constructors

### new RedBlackNode()

> **new RedBlackNode**(`value`, `color`, `parent`?, `left`?, `right`?): [`RedBlackNode`](RedBlackNode.md)

Creates a Red-Black Tree node.

#### Parameters

• **value**: `undefined` \| `number`

The value stored in the node, or undefined for nil nodes.

• **color**: `"red"` \| `"black"`

The color of the node, either 'red' or 'black'.

• **parent?**: [`RedBlackNode`](RedBlackNode.md)

The parent of the current node, if any.

• **left?**: [`RedBlackNode`](RedBlackNode.md)

The left child of the node.

• **right?**: [`RedBlackNode`](RedBlackNode.md)

The right child of the node.

#### Returns

[`RedBlackNode`](RedBlackNode.md)

#### Overrides

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`constructor`](BinaryTreeNodeBase.md#constructors)

#### Defined in

[dataStructures/binaryTrees/RedBlackNode.ts:17](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/RedBlackNode.ts#L17)

## Properties

### color

> **color**: `"red"` \| `"black"`

The color of the node, either 'red' or 'black'.

#### Defined in

[dataStructures/binaryTrees/RedBlackNode.ts:19](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/RedBlackNode.ts#L19)

***

### left?

> `optional` **left**: [`RedBlackNode`](RedBlackNode.md)

The left child of the node.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`left`](BinaryTreeNodeBase.md#left)

#### Defined in

[dataStructures/binaryTrees/RedBlackNode.ts:21](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/RedBlackNode.ts#L21)

***

### parent?

> `optional` **parent**: [`RedBlackNode`](RedBlackNode.md)

The parent of the current node, if any.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`parent`](BinaryTreeNodeBase.md#parent)

#### Defined in

[dataStructures/binaryTrees/RedBlackNode.ts:20](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/RedBlackNode.ts#L20)

***

### right?

> `optional` **right**: [`RedBlackNode`](RedBlackNode.md)

The right child of the node.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`right`](BinaryTreeNodeBase.md#right)

#### Defined in

[dataStructures/binaryTrees/RedBlackNode.ts:22](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/RedBlackNode.ts#L22)

***

### value

> **value**: `undefined` \| `number`

The value stored in the node, or undefined for nil nodes.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`value`](BinaryTreeNodeBase.md#value)

#### Defined in

[dataStructures/binaryTrees/RedBlackNode.ts:18](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/RedBlackNode.ts#L18)

## Methods

### asNode()

> `protected` **asNode**(): [`RedBlackNode`](RedBlackNode.md)

Helper method to cast the current object as a node of type T.

#### Returns

[`RedBlackNode`](RedBlackNode.md)

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

> `optional` **node**: [`RedBlackNode`](RedBlackNode.md)

##### path

> **path**: [`RedBlackNode`](RedBlackNode.md)[]

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

> **getCloseNephew**(): `undefined` \| [`RedBlackNode`](RedBlackNode.md)

Retrieves the close nephew (left child of the node's sibling if this node is left child, or right child of the node's sibling otherwise).

#### Returns

`undefined` \| [`RedBlackNode`](RedBlackNode.md)

- The close nephew, or undefined if not applicable.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`getCloseNephew`](BinaryTreeNodeBase.md#getclosenephew)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:113](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L113)

***

### getDistantNephew()

> **getDistantNephew**(): `undefined` \| [`RedBlackNode`](RedBlackNode.md)

Retrieves the distant nephew (right child of the node's sibling if this node is left child, or left child of the node's sibling otherwise).

#### Returns

`undefined` \| [`RedBlackNode`](RedBlackNode.md)

- The distant nephew, or undefined if not applicable.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`getDistantNephew`](BinaryTreeNodeBase.md#getdistantnephew)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:123](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L123)

***

### getNotNilChild()

> **getNotNilChild**(): `undefined` \| [`RedBlackNode`](RedBlackNode.md)

Returns the non-nil child of the node, if one exists.

#### Returns

`undefined` \| [`RedBlackNode`](RedBlackNode.md)

- The non-nil child of the node, or undefined if both children are nil.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`getNotNilChild`](BinaryTreeNodeBase.md#getnotnilchild)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:86](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L86)

***

### getSibling()

> **getSibling**(): `undefined` \| [`RedBlackNode`](RedBlackNode.md)

Retrieves the sibling of the current node, if it has one.

#### Returns

`undefined` \| [`RedBlackNode`](RedBlackNode.md)

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

• **node**: `undefined` \| [`RedBlackNode`](RedBlackNode.md)

The node to replace the current one, or undefined to remove it.

#### Returns

`void`

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`replaceWith`](BinaryTreeNodeBase.md#replacewith)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:140](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L140)

***

### rotateLeft()

> **rotateLeft**(`setRootNode`): [`RedBlackNode`](RedBlackNode.md)

Performs a left rotation on the node.

#### Parameters

• **setRootNode**

Function to set the root node of the tree, if it was affected by rotation.

#### Returns

[`RedBlackNode`](RedBlackNode.md)

- The new root node after the rotation.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`rotateLeft`](BinaryTreeNodeBase.md#rotateleft)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:203](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L203)

***

### rotateRight()

> **rotateRight**(`setRootNode`): [`RedBlackNode`](RedBlackNode.md)

Performs a right rotation on the node.

#### Parameters

• **setRootNode**

Function to set the root node of the tree, if it was affected by rotation.

#### Returns

[`RedBlackNode`](RedBlackNode.md)

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

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:298](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L298)

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

> **traverseInOrderAsNodes**(): [`RedBlackNode`](RedBlackNode.md)[]

Traverses the tree in in-order traversal and returns an array of nodes.

#### Returns

[`RedBlackNode`](RedBlackNode.md)[]

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

• **node?**: [`RedBlackNode`](RedBlackNode.md)

The node to start traversal from, or defaults to the current node.

#### Returns

(`undefined` \| `number`)[]

- An array of values in in-order traversal order.

#### Inherited from

[`BinaryTreeNodeBase`](BinaryTreeNodeBase.md).[`traverseInOrderRecursive`](BinaryTreeNodeBase.md#traverseinorderrecursive)

#### Defined in

[dataStructures/binaryTrees/BinaryTreeNodeBase.ts:387](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/BinaryTreeNodeBase.ts#L387)

***

### createBlackNilNode()

> `static` **createBlackNilNode**(): [`RedBlackNode`](RedBlackNode.md)

Creates a black nil node for the Red-Black Tree.
Nil nodes are represented by undefined values and black color.

#### Returns

[`RedBlackNode`](RedBlackNode.md)

- A RedBlackNode with undefined value and black color.

#### Defined in

[dataStructures/binaryTrees/RedBlackNode.ts:37](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/binaryTrees/RedBlackNode.ts#L37)
