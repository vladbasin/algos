[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / AdjacencyListGraph

# Class: AdjacencyListGraph

Class representing a graph using an adjacency list, where each vertex
has a linked list of edges to represent the connections in the graph.

## Implements

- [`IGraph`](../interfaces/IGraph.md)

## Constructors

### new AdjacencyListGraph()

> **new AdjacencyListGraph**(`size`): [`AdjacencyListGraph`](AdjacencyListGraph.md)

Creates a new graph with the specified number of vertices.

#### Parameters

• **size**: `number`

The number of vertices in the graph.

#### Returns

[`AdjacencyListGraph`](AdjacencyListGraph.md)

#### Defined in

[dataStructures/graphs/AdjacencyListGraph.ts:15](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/graphs/AdjacencyListGraph.ts#L15)

## Properties

### numberOfVertices

> `readonly` **numberOfVertices**: `number`

The number of vertices in the graph.

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`numberOfVertices`](../interfaces/IGraph.md#numberofvertices)

#### Defined in

[dataStructures/graphs/AdjacencyListGraph.ts:26](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/graphs/AdjacencyListGraph.ts#L26)

***

### size

> `readonly` **size**: `number`

The number of vertices in the graph.

#### Defined in

[dataStructures/graphs/AdjacencyListGraph.ts:15](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/graphs/AdjacencyListGraph.ts#L15)

## Methods

### add()

> **add**(`edge`): `void`

Adds an edge to the graph.

#### Parameters

• **edge**: [`GraphEdge`](GraphEdge.md)

The edge to be added to the graph.

#### Returns

`void`

#### Throws

- If the vertex is out of bounds.

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`add`](../interfaces/IGraph.md#add)

#### Defined in

[dataStructures/graphs/AdjacencyListGraph.ts:35](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/graphs/AdjacencyListGraph.ts#L35)

***

### ensureVertexBounds()

> **ensureVertexBounds**(`vertex`): `void`

Ensures that the vertex is within the bounds of the graph.

#### Parameters

• **vertex**: `number`

The vertex to check.

#### Returns

`void`

#### Throws

- If the vertex is out of bounds.

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`ensureVertexBounds`](../interfaces/IGraph.md#ensurevertexbounds)

#### Defined in

[dataStructures/graphs/AdjacencyListGraph.ts:135](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/graphs/AdjacencyListGraph.ts#L135)

***

### get()

> **get**(`from`, `to`): `undefined` \| [`GraphEdge`](GraphEdge.md)

Retrieves an edge between two vertices if it exists.

#### Parameters

• **from**: `number`

The starting vertex of the edge.

• **to**: `number`

The ending vertex of the edge.

#### Returns

`undefined` \| [`GraphEdge`](GraphEdge.md)

- The edge if found, otherwise undefined.

#### Throws

- If either vertex is out of bounds.

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`get`](../interfaces/IGraph.md#get)

#### Defined in

[dataStructures/graphs/AdjacencyListGraph.ts:50](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/graphs/AdjacencyListGraph.ts#L50)

***

### has()

> **has**(`from`, `to`): `boolean`

Checks if an edge exists between two vertices.

#### Parameters

• **from**: `number`

The starting vertex of the edge.

• **to**: `number`

The ending vertex of the edge.

#### Returns

`boolean`

- True if the edge exists, otherwise false.

#### Throws

- If either vertex is out of bounds.

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`has`](../interfaces/IGraph.md#has)

#### Defined in

[dataStructures/graphs/AdjacencyListGraph.ts:73](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/graphs/AdjacencyListGraph.ts#L73)

***

### iterateAllEdges()

> **iterateAllEdges**(): `IterableIterator`\<[`GraphEdge`](GraphEdge.md)\>

Returns an iterator for all edges in the graph.

#### Returns

`IterableIterator`\<[`GraphEdge`](GraphEdge.md)\>

- An iterator over all edges in the graph.

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`iterateAllEdges`](../interfaces/IGraph.md#iteratealledges)

#### Defined in

[dataStructures/graphs/AdjacencyListGraph.ts:122](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/graphs/AdjacencyListGraph.ts#L122)

***

### iterateEdgesFrom()

> **iterateEdgesFrom**(`vertex`): `IterableIterator`\<[`GraphEdge`](GraphEdge.md)\>

Returns an iterator for edges originating from a specific vertex.

#### Parameters

• **vertex**: `number`

The vertex from which the edges originate.

#### Returns

`IterableIterator`\<[`GraphEdge`](GraphEdge.md)\>

- An iterator over the edges from the vertex.

#### Throws

- If the vertex is out of bounds.

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`iterateEdgesFrom`](../interfaces/IGraph.md#iterateedgesfrom)

#### Defined in

[dataStructures/graphs/AdjacencyListGraph.ts:109](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/graphs/AdjacencyListGraph.ts#L109)

***

### remove()

> **remove**(`from`, `to`): `void`

Removes an edge between two vertices if it exists.

#### Parameters

• **from**: `number`

The starting vertex of the edge.

• **to**: `number`

The ending vertex of the edge.

#### Returns

`void`

#### Throws

- If either vertex is out of bounds.

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`remove`](../interfaces/IGraph.md#remove)

#### Defined in

[dataStructures/graphs/AdjacencyListGraph.ts:85](https://github.com/vladbasin/algos/blob/896f4802dfe6dc549179fbc3b973d06095c49e3e/libs/algos/src/lib/dataStructures/graphs/AdjacencyListGraph.ts#L85)
