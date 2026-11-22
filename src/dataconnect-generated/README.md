# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `default`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListEarthquakes*](#listearthquakes)
- [**Mutations**](#mutations)
  - [*UpsertMember*](#upsertmember)
  - [*UpsertEarthquake*](#upsertearthquake)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `default`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `default` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListEarthquakes
You can execute the `ListEarthquakes` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listEarthquakes(options?: ExecuteQueryOptions): QueryPromise<ListEarthquakesData, undefined>;

interface ListEarthquakesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListEarthquakesData, undefined>;
}
export const listEarthquakesRef: ListEarthquakesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listEarthquakes(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListEarthquakesData, undefined>;

interface ListEarthquakesRef {
  ...
  (dc: DataConnect): QueryRef<ListEarthquakesData, undefined>;
}
export const listEarthquakesRef: ListEarthquakesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listEarthquakesRef:
```typescript
const name = listEarthquakesRef.operationName;
console.log(name);
```

### Variables
The `ListEarthquakes` query has no variables.
### Return Type
Recall that executing the `ListEarthquakes` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListEarthquakesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListEarthquakesData {
  earthquakes: ({
    usgsEventId: string;
    magnitude: number;
    locationDescription?: string | null;
    depthKm: number;
    latitude: number;
    longitude: number;
    eventTimestamp: TimestampString;
  } & Earthquake_Key)[];
}
```
### Using `ListEarthquakes`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listEarthquakes } from '@dataconnect/generated';


// Call the `listEarthquakes()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listEarthquakes();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listEarthquakes(dataConnect);

console.log(data.earthquakes);

// Or, you can use the `Promise` API.
listEarthquakes().then((response) => {
  const data = response.data;
  console.log(data.earthquakes);
});
```

### Using `ListEarthquakes`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listEarthquakesRef } from '@dataconnect/generated';


// Call the `listEarthquakesRef()` function to get a reference to the query.
const ref = listEarthquakesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listEarthquakesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.earthquakes);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.earthquakes);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `default` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## UpsertMember
You can execute the `UpsertMember` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
upsertMember(vars: UpsertMemberVariables): MutationPromise<UpsertMemberData, UpsertMemberVariables>;

interface UpsertMemberRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertMemberVariables): MutationRef<UpsertMemberData, UpsertMemberVariables>;
}
export const upsertMemberRef: UpsertMemberRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertMember(dc: DataConnect, vars: UpsertMemberVariables): MutationPromise<UpsertMemberData, UpsertMemberVariables>;

interface UpsertMemberRef {
  ...
  (dc: DataConnect, vars: UpsertMemberVariables): MutationRef<UpsertMemberData, UpsertMemberVariables>;
}
export const upsertMemberRef: UpsertMemberRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertMemberRef:
```typescript
const name = upsertMemberRef.operationName;
console.log(name);
```

### Variables
The `UpsertMember` mutation requires an argument of type `UpsertMemberVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpsertMemberVariables {
  email: string;
  displayName: string;
  createdAt: TimestampString;
}
```
### Return Type
Recall that executing the `UpsertMember` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertMemberData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertMemberData {
  member_upsert: Member_Key;
}
```
### Using `UpsertMember`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertMember, UpsertMemberVariables } from '@dataconnect/generated';

// The `UpsertMember` mutation requires an argument of type `UpsertMemberVariables`:
const upsertMemberVars: UpsertMemberVariables = {
  email: ..., 
  displayName: ..., 
  createdAt: ..., 
};

// Call the `upsertMember()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertMember(upsertMemberVars);
// Variables can be defined inline as well.
const { data } = await upsertMember({ email: ..., displayName: ..., createdAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertMember(dataConnect, upsertMemberVars);

console.log(data.member_upsert);

// Or, you can use the `Promise` API.
upsertMember(upsertMemberVars).then((response) => {
  const data = response.data;
  console.log(data.member_upsert);
});
```

### Using `UpsertMember`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertMemberRef, UpsertMemberVariables } from '@dataconnect/generated';

// The `UpsertMember` mutation requires an argument of type `UpsertMemberVariables`:
const upsertMemberVars: UpsertMemberVariables = {
  email: ..., 
  displayName: ..., 
  createdAt: ..., 
};

// Call the `upsertMemberRef()` function to get a reference to the mutation.
const ref = upsertMemberRef(upsertMemberVars);
// Variables can be defined inline as well.
const ref = upsertMemberRef({ email: ..., displayName: ..., createdAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertMemberRef(dataConnect, upsertMemberVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.member_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.member_upsert);
});
```

## UpsertEarthquake
You can execute the `UpsertEarthquake` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
upsertEarthquake(vars: UpsertEarthquakeVariables): MutationPromise<UpsertEarthquakeData, UpsertEarthquakeVariables>;

interface UpsertEarthquakeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertEarthquakeVariables): MutationRef<UpsertEarthquakeData, UpsertEarthquakeVariables>;
}
export const upsertEarthquakeRef: UpsertEarthquakeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertEarthquake(dc: DataConnect, vars: UpsertEarthquakeVariables): MutationPromise<UpsertEarthquakeData, UpsertEarthquakeVariables>;

interface UpsertEarthquakeRef {
  ...
  (dc: DataConnect, vars: UpsertEarthquakeVariables): MutationRef<UpsertEarthquakeData, UpsertEarthquakeVariables>;
}
export const upsertEarthquakeRef: UpsertEarthquakeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertEarthquakeRef:
```typescript
const name = upsertEarthquakeRef.operationName;
console.log(name);
```

### Variables
The `UpsertEarthquake` mutation requires an argument of type `UpsertEarthquakeVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpsertEarthquakeVariables {
  usgsEventId: string;
  magnitude: number;
  locationDescription?: string | null;
  depthKm: number;
  latitude: number;
  longitude: number;
  eventTimestamp: TimestampString;
}
```
### Return Type
Recall that executing the `UpsertEarthquake` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertEarthquakeData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertEarthquakeData {
  earthquake_upsert: Earthquake_Key;
}
```
### Using `UpsertEarthquake`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertEarthquake, UpsertEarthquakeVariables } from '@dataconnect/generated';

// The `UpsertEarthquake` mutation requires an argument of type `UpsertEarthquakeVariables`:
const upsertEarthquakeVars: UpsertEarthquakeVariables = {
  usgsEventId: ..., 
  magnitude: ..., 
  locationDescription: ..., // optional
  depthKm: ..., 
  latitude: ..., 
  longitude: ..., 
  eventTimestamp: ..., 
};

// Call the `upsertEarthquake()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertEarthquake(upsertEarthquakeVars);
// Variables can be defined inline as well.
const { data } = await upsertEarthquake({ usgsEventId: ..., magnitude: ..., locationDescription: ..., depthKm: ..., latitude: ..., longitude: ..., eventTimestamp: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertEarthquake(dataConnect, upsertEarthquakeVars);

console.log(data.earthquake_upsert);

// Or, you can use the `Promise` API.
upsertEarthquake(upsertEarthquakeVars).then((response) => {
  const data = response.data;
  console.log(data.earthquake_upsert);
});
```

### Using `UpsertEarthquake`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertEarthquakeRef, UpsertEarthquakeVariables } from '@dataconnect/generated';

// The `UpsertEarthquake` mutation requires an argument of type `UpsertEarthquakeVariables`:
const upsertEarthquakeVars: UpsertEarthquakeVariables = {
  usgsEventId: ..., 
  magnitude: ..., 
  locationDescription: ..., // optional
  depthKm: ..., 
  latitude: ..., 
  longitude: ..., 
  eventTimestamp: ..., 
};

// Call the `upsertEarthquakeRef()` function to get a reference to the mutation.
const ref = upsertEarthquakeRef(upsertEarthquakeVars);
// Variables can be defined inline as well.
const ref = upsertEarthquakeRef({ usgsEventId: ..., magnitude: ..., locationDescription: ..., depthKm: ..., latitude: ..., longitude: ..., eventTimestamp: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertEarthquakeRef(dataConnect, upsertEarthquakeVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.earthquake_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.earthquake_upsert);
});
```

