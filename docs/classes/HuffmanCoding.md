[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / HuffmanCoding

# Class: HuffmanCoding

Class implementing Huffman Coding for text compression and decompression.

## Constructors

### new HuffmanCoding()

> **new HuffmanCoding**(): [`HuffmanCoding`](HuffmanCoding.md)

#### Returns

[`HuffmanCoding`](HuffmanCoding.md)

## Methods

### buildMap()

> **buildMap**(`huffmanTree`): [`HuffmanCodingMap`](../type-aliases/HuffmanCodingMap.md)

Builds a Huffman Coding Map from the given Huffman Tree.
The map contains the encoding for each character in the input text.

#### Parameters

• **huffmanTree**: [`HuffmanTreeNode`](HuffmanTreeNode.md)

The root node of the Huffman Tree.

#### Returns

[`HuffmanCodingMap`](../type-aliases/HuffmanCodingMap.md)

- A map containing characters and their respective Huffman codes.

#### Defined in

[dataStructures/HuffmanCoding.ts:68](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/HuffmanCoding.ts#lines-68)

***

### buildTree()

> **buildTree**(`text`): [`HuffmanTreeNode`](HuffmanTreeNode.md)

Builds a Huffman Tree from a given text string.
The tree is used to encode characters based on their frequency in the text.

#### Parameters

• **text**: `string`

The input text to build the Huffman Tree from.

#### Returns

[`HuffmanTreeNode`](HuffmanTreeNode.md)

- The root node of the constructed Huffman Tree.

#### Throws

Error - Throws an error if the input text is empty.

#### Defined in

[dataStructures/HuffmanCoding.ts:25](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/HuffmanCoding.ts#lines-25)

***

### decode()

> **decode**(`encodedText`, `map`): `string`

Decodes a Huffman encoded string back to its original text using the given Huffman coding map.

#### Parameters

• **encodedText**: `string`

The encoded string to decode.

• **map**: [`HuffmanCodingMap`](../type-aliases/HuffmanCodingMap.md)

The Huffman coding map used for encoding.

#### Returns

`string`

string - The decoded original text.

#### Throws

Error - Throws an error if the encoding map is incorrect or the text is malformed.

#### Defined in

[dataStructures/HuffmanCoding.ts:133](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/HuffmanCoding.ts#lines-133)

***

### encode()

> **encode**(`text`): [`HuffmanEncodingResult`](../type-aliases/HuffmanEncodingResult.md)

Encodes a given text string using Huffman Coding.

#### Parameters

• **text**: `string`

The input text to encode.

#### Returns

[`HuffmanEncodingResult`](../type-aliases/HuffmanEncodingResult.md)

- The encoded string and the corresponding Huffman coding map.

#### Throws

Error - Throws an error if the input contains characters not present in the map.

#### Defined in

[dataStructures/HuffmanCoding.ts:104](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/HuffmanCoding.ts#lines-104)
