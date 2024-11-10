[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / TrieNode

# Class: TrieNode

Class representing a node in a Trie (prefix tree).
Each node contains part of a word, a flag indicating if it completes a word, and references to its parent and children.

## Constructors

### new TrieNode()

> **new TrieNode**(`text`, `isComplete`, `parent`): [`TrieNode`](TrieNode.md)

Creates a new TrieNode instance.

#### Parameters

• **text**: `string`

The text fragment stored in this node.

• **isComplete**: `boolean`

A flag indicating whether this node completes a word.

• **parent**: `undefined` \| [`TrieNode`](TrieNode.md)

A reference to the parent node, or undefined if this node is the root.

#### Returns

[`TrieNode`](TrieNode.md)

#### Defined in

[dataStructures/TrieNode.ts:13](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/TrieNode.ts#lines-13)

## Properties

### isComplete

> **isComplete**: `boolean`

A flag indicating whether this node completes a word.

#### Defined in

[dataStructures/TrieNode.ts:13](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/TrieNode.ts#lines-13)

***

### parent

> `readonly` **parent**: `undefined` \| [`TrieNode`](TrieNode.md)

A reference to the parent node, or undefined if this node is the root.

#### Defined in

[dataStructures/TrieNode.ts:13](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/TrieNode.ts#lines-13)

***

### text

> `readonly` **text**: `string`

The text fragment stored in this node.

#### Defined in

[dataStructures/TrieNode.ts:13](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/TrieNode.ts#lines-13)

## Methods

### getChild()

> **getChild**(`text`): `undefined` \| [`TrieNode`](TrieNode.md)

Retrieves the child node with the specified text.

#### Parameters

• **text**: `string`

The text of the child node to retrieve.

#### Returns

`undefined` \| [`TrieNode`](TrieNode.md)

- The child node if found, or undefined otherwise.

#### Defined in

[dataStructures/TrieNode.ts:69](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/TrieNode.ts#lines-69)

***

### getOrCreateChild()

> **getOrCreateChild**(`text`, `creator`): [`TrieNode`](TrieNode.md)

Retrieves the child node with the specified text, or creates it using the provided creator function if it doesn't exist.

#### Parameters

• **text**: `string`

The text of the child node to retrieve or create.

• **creator**

A function that creates a new TrieNode if the child doesn't exist.

#### Returns

[`TrieNode`](TrieNode.md)

- The existing or newly created child node.

#### Defined in

[dataStructures/TrieNode.ts:80](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/TrieNode.ts#lines-80)

***

### hasAnyChild()

> **hasAnyChild**(): `boolean`

Checks if this node has any children.

#### Returns

`boolean`

- True if the node has one or more children, false otherwise.

#### Defined in

[dataStructures/TrieNode.ts:30](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/TrieNode.ts#lines-30)

***

### hasChild()

> **hasChild**(`text`): `boolean`

Checks if this node has a child node with the specified text.

#### Parameters

• **text**: `string`

The text of the child node to check for.

#### Returns

`boolean`

- True if the child node exists, false otherwise.

#### Defined in

[dataStructures/TrieNode.ts:21](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/TrieNode.ts#lines-21)

***

### removeChild()

> **removeChild**(`text`): `void`

Removes the child node with the specified text from this node.

#### Parameters

• **text**: `string`

The text of the child node to remove.

#### Returns

`void`

#### Defined in

[dataStructures/TrieNode.ts:40](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/TrieNode.ts#lines-40)

***

### removeSelf()

> **removeSelf**(): `void`

Removes this node from its parent. Throws an error if this node does not have a parent.

#### Returns

`void`

#### Throws

- If this node does not have a parent.

#### Defined in

[dataStructures/TrieNode.ts:55](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/TrieNode.ts#lines-55)