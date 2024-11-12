[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / HashMap

# Class: HashMap\<TKey, TValue\>

Generic HashMap implementation using separate chaining for collision resolution.
Provides constant-time average case operations through efficient hashing.

## Type Parameters

• **TKey**

Type of keys in the hash map

• **TValue**

Type of values in the hash map

## Constructors

### new HashMap()

> **new HashMap**\<`TKey`, `TValue`\>(`_capacity`): [`HashMap`](HashMap.md)\<`TKey`, `TValue`\>

Creates a new HashMap with specified capacity.

#### Parameters

• **\_capacity**: `number`

Initial number of buckets

#### Returns

[`HashMap`](HashMap.md)\<`TKey`, `TValue`\>

#### Defined in

[dataStructures/HashMap.ts:22](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/HashMap.ts#L22)

## Methods

### get()

> **get**(`key`): `undefined` \| `TValue`

Retrieves the value associated with a given key.

#### Parameters

• **key**: `TKey`

The key to look up

#### Returns

`undefined` \| `TValue`

The value if found, undefined otherwise

#### Defined in

[dataStructures/HashMap.ts:52](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/HashMap.ts#L52)

***

### has()

> **has**(`key`): `boolean`

Checks if a key exists in the hash map.

#### Parameters

• **key**: `TKey`

The key to check

#### Returns

`boolean`

True if key exists, false otherwise

#### Defined in

[dataStructures/HashMap.ts:62](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/HashMap.ts#L62)

***

### put()

> **put**(`key`, `value`): `void`

Adds or updates a key-value pair in the hash map.

#### Parameters

• **key**: `TKey`

The key for the entry

• **value**: `TValue`

The value to store

#### Returns

`void`

#### Defined in

[dataStructures/HashMap.ts:31](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/HashMap.ts#L31)

***

### remove()

> **remove**(`key`): `undefined` \| `TValue`

Removes a key-value pair from the hash map.

#### Parameters

• **key**: `TKey`

The key to remove

#### Returns

`undefined` \| `TValue`

The removed value if found, undefined otherwise

#### Defined in

[dataStructures/HashMap.ts:72](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/HashMap.ts#L72)
