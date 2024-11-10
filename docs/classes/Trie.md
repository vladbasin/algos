[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / Trie

# Class: Trie

Class representing a Trie (prefix tree) data structure.
This Trie supports fast operations for adding words, checking for word or prefix existence, and removing words.

## Constructors

### new Trie()

> **new Trie**(): [`Trie`](Trie.md)

#### Returns

[`Trie`](Trie.md)

## Methods

### add()

> **add**(`text`): `void`

Adds a word to the Trie. If the word already exists, it marks the end node as complete.

#### Parameters

• **text**: `string`

The word to be added to the Trie.

#### Returns

`void`

#### Throws

- If the provided text is empty.

#### Defined in

[dataStructures/Trie.ts:15](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/Trie.ts#lines-15)

***

### has()

> **has**(`text`, `mode`): `boolean`

Checks if the specified text exists in the Trie. The search mode can be either 'prefix' or 'complete' (full word).

#### Parameters

• **text**: `string`

The text to search for in the Trie.

• **mode**: `"prefix"` \| `"complete"`

The search mode: 'prefix' checks if the text is a prefix, 'complete' checks for a full word.

#### Returns

`boolean`

- True if the text is found according to the search mode, otherwise false.

#### Throws

- If the provided text is empty.

#### Defined in

[dataStructures/Trie.ts:38](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/Trie.ts#lines-38)

***

### remove()

> **remove**(`text`): `void`

Removes a word from the Trie. If the word doesn't exist, no action is taken.
It will remove unnecessary nodes that do not form part of any other word in the Trie.

#### Parameters

• **text**: `string`

The word to be removed from the Trie.

#### Returns

`void`

#### Throws

- If the provided text is empty.

#### Defined in

[dataStructures/Trie.ts:68](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/Trie.ts#lines-68)
