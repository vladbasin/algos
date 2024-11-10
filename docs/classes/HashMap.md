[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / HashMap

# Class: HashMap\<TKey, TValue\>

Class representing a hash map, a data structure that allows for fast retrieval
of key-value pairs using a hash function. Uses separate chaining with linked lists to handle collisions.

## Type Parameters

• **TKey**

• **TValue**

## Constructors

### new HashMap()

> **new HashMap**\<`TKey`, `TValue`\>(`_capacity`): [`HashMap`](HashMap.md)\<`TKey`, `TValue`\>

Creates a new HashMap instance with a specified capacity.

#### Parameters

• **\_capacity**: `number`

The initial number of buckets in the hash map.

#### Returns

[`HashMap`](HashMap.md)\<`TKey`, `TValue`\>

#### Defined in

[dataStructures/HashMap.ts:19](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/HashMap.ts#lines-19)

## Methods

### get()

> **get**(`key`): `undefined` \| `TValue`

Retrieves the value associated with a given key.

#### Parameters

• **key**: `TKey`

The key to look up in the hash map.

#### Returns

`undefined` \| `TValue`

- The value if found, otherwise undefined.

#### Defined in

[dataStructures/HashMap.ts:51](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/HashMap.ts#lines-51)

***

### has()

> **has**(`key`): `boolean`

Checks if the hash map contains a specific key.

#### Parameters

• **key**: `TKey`

The key to check for in the hash map.

#### Returns

`boolean`

- True if the key exists, otherwise false.

#### Defined in

[dataStructures/HashMap.ts:61](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/HashMap.ts#lines-61)

***

### put()

> **put**(`key`, `value`): `void`

Adds or updates a key-value pair in the hash map.

#### Parameters

• **key**: `TKey`

The key for the value.

• **value**: `TValue`

The value to be stored in the hash map.

#### Returns

`void`

#### Defined in

[dataStructures/HashMap.ts:30](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/HashMap.ts#lines-30)

***

### remove()

> **remove**(`key`): `undefined` \| `TValue`

Removes a key-value pair from the hash map by its key.

#### Parameters

• **key**: `TKey`

The key of the pair to remove.

#### Returns

`undefined` \| `TValue`

- The value of the removed key, or undefined if the key was not found.

#### Defined in

[dataStructures/HashMap.ts:71](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/HashMap.ts#lines-71)
