[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / AdjacencyMatrixGraph

# Class: AdjacencyMatrixGraph

Class representing a graph using an adjacency matrix, where each vertex is represented by an array
and each entry in the array holds the weight of the edge to another vertex.

## Implements

- [`IGraph`](../interfaces/IGraph.md)

## Constructors

### new AdjacencyMatrixGraph()

> **new AdjacencyMatrixGraph**(`size`): [`AdjacencyMatrixGraph`](AdjacencyMatrixGraph.md)

Creates a new graph with the specified number of vertices.

#### Parameters

• **size**: `number`

The number of vertices in the graph.

#### Returns

[`AdjacencyMatrixGraph`](AdjacencyMatrixGraph.md)

#### Defined in

[dataStructures/graphs/AdjacencyMatrixGraph.ts:13](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/graphs/AdjacencyMatrixGraph.ts#L13)

## Properties

### numberOfVertices

> `readonly` **numberOfVertices**: `number`

The number of vertices in the graph.

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`numberOfVertices`](../interfaces/IGraph.md#numberofvertices)

#### Defined in

[dataStructures/graphs/AdjacencyMatrixGraph.ts:24](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/graphs/AdjacencyMatrixGraph.ts#L24)

***

### size

> `readonly` **size**: `number`

The number of vertices in the graph.

#### Defined in

[dataStructures/graphs/AdjacencyMatrixGraph.ts:13](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/graphs/AdjacencyMatrixGraph.ts#L13)

## Methods

### add()

> **add**(`edge`): `void`

Adds an edge to the graph with the specified weight.

#### Parameters

• **edge**: [`GraphEdge`](GraphEdge.md)

The edge to be added, including the from vertex, to vertex, and weight.

#### Returns

`void`

#### Throws

- If either vertex is out of bounds.

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`add`](../interfaces/IGraph.md#add)

#### Defined in

[dataStructures/graphs/AdjacencyMatrixGraph.ts:33](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/graphs/AdjacencyMatrixGraph.ts#L33)

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

[dataStructures/graphs/AdjacencyMatrixGraph.ts:122](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/graphs/AdjacencyMatrixGraph.ts#L122)

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

[dataStructures/graphs/AdjacencyMatrixGraph.ts:50](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/graphs/AdjacencyMatrixGraph.ts#L50)

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

[dataStructures/graphs/AdjacencyMatrixGraph.ts:67](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/graphs/AdjacencyMatrixGraph.ts#L67)

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

[dataStructures/graphs/AdjacencyMatrixGraph.ts:109](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/graphs/AdjacencyMatrixGraph.ts#L109)

***

### iterateEdgesFrom()

> **iterateEdgesFrom**(`from`): `IterableIterator`\<[`GraphEdge`](GraphEdge.md)\>

Returns an iterator for all edges originating from a specific vertex.

#### Parameters

• **from**: `number`

The vertex from which the edges originate.

#### Returns

`IterableIterator`\<[`GraphEdge`](GraphEdge.md)\>

- An iterator over the edges from the vertex.

#### Throws

- If the vertex is out of bounds.

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`iterateEdgesFrom`](../interfaces/IGraph.md#iterateedgesfrom)

#### Defined in

[dataStructures/graphs/AdjacencyMatrixGraph.ts:93](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/graphs/AdjacencyMatrixGraph.ts#L93)

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

[dataStructures/graphs/AdjacencyMatrixGraph.ts:79](https://github.com/vladbasin/algos/blob/fda865971d7b618faddb3d2c9e423105a63674ca/libs/algos/src/lib/dataStructures/graphs/AdjacencyMatrixGraph.ts#L79)
