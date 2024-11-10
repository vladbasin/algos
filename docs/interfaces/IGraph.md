[**@algos/libs**](../README.md) • **Docs**

***

[@algos/libs](../globals.md) / IGraph

# Interface: IGraph

Interface for a graph data structure that handles edges between vertices.

## Properties

### numberOfVertices

> `readonly` **numberOfVertices**: `number`

The number of vertices in the graph.

#### Defined in

[dataStructures/graphs/contracts/IGraph.ts:12](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/graphs/contracts/IGraph.ts#lines-12)

## Methods

### add()

> **add**(`edge`): `void`

Adds an edge to the graph.

#### Parameters

• **edge**: [`GraphEdge`](../classes/GraphEdge.md)

The edge to be added to the graph.

#### Returns

`void`

#### Defined in

[dataStructures/graphs/contracts/IGraph.ts:20](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/graphs/contracts/IGraph.ts#lines-20)

***

### ensureVertexBounds()

> **ensureVertexBounds**(`vertex`): `void`

Ensures that the vertex is within the bounds of the graph.

#### Parameters

• **vertex**: `number`

The vertex to check.

#### Returns

`void`

#### Defined in

[dataStructures/graphs/contracts/IGraph.ts:70](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/graphs/contracts/IGraph.ts#lines-70)

***

### get()

> **get**(`from`, `to`): `undefined` \| [`GraphEdge`](../classes/GraphEdge.md)

Retrieves an edge between two vertices if it exists.

#### Parameters

• **from**: `number`

The starting vertex of the edge.

• **to**: `number`

The ending vertex of the edge.

#### Returns

`undefined` \| [`GraphEdge`](../classes/GraphEdge.md)

- The edge if found, otherwise undefined.

#### Defined in

[dataStructures/graphs/contracts/IGraph.ts:29](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/graphs/contracts/IGraph.ts#lines-29)

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

- True if the edge exists, false otherwise.

#### Defined in

[dataStructures/graphs/contracts/IGraph.ts:38](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/graphs/contracts/IGraph.ts#lines-38)

***

### iterateAllEdges()

> **iterateAllEdges**(): `IterableIterator`\<[`GraphEdge`](../classes/GraphEdge.md)\>

Returns an iterator for all edges in the graph.

#### Returns

`IterableIterator`\<[`GraphEdge`](../classes/GraphEdge.md)\>

- An iterator over all edges in the graph.

#### Defined in

[dataStructures/graphs/contracts/IGraph.ts:62](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/graphs/contracts/IGraph.ts#lines-62)

***

### iterateEdgesFrom()

> **iterateEdgesFrom**(`vertex`): `IterableIterator`\<[`GraphEdge`](../classes/GraphEdge.md)\>

Returns an iterator for edges originating from a specific vertex.

#### Parameters

• **vertex**: `number`

The vertex from which the edges originate.

#### Returns

`IterableIterator`\<[`GraphEdge`](../classes/GraphEdge.md)\>

- An iterator over the edges from the vertex.

#### Defined in

[dataStructures/graphs/contracts/IGraph.ts:55](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/graphs/contracts/IGraph.ts#lines-55)

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

#### Defined in

[dataStructures/graphs/contracts/IGraph.ts:47](https://bitbucket.org/vladbasin/algos/src/5a7ff036d2baf511556b0e58f1b60a1888b2ff2f/libs/algos/src/lib/dataStructures/graphs/contracts/IGraph.ts#lines-47)
