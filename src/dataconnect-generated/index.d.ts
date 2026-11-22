import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Comment_Key {
  id: UUIDString;
  __typename?: 'Comment_Key';
}

export interface Earthquake_Key {
  usgsEventId: string;
  __typename?: 'Earthquake_Key';
}

export interface FeltReport_Key {
  id: UUIDString;
  __typename?: 'FeltReport_Key';
}

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

export interface Member_Key {
  authUid: string;
  __typename?: 'Member_Key';
}

export interface UpsertMemberData {
  member_upsert: Member_Key;
}

export interface UpsertMemberVariables {
  email: string;
  displayName: string;
  createdAt: TimestampString;
}

interface ListEarthquakesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListEarthquakesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListEarthquakesData, undefined>;
  operationName: string;
}
export const listEarthquakesRef: ListEarthquakesRef;

export function listEarthquakes(options?: ExecuteQueryOptions): QueryPromise<ListEarthquakesData, undefined>;
export function listEarthquakes(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListEarthquakesData, undefined>;

interface UpsertMemberRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertMemberVariables): MutationRef<UpsertMemberData, UpsertMemberVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertMemberVariables): MutationRef<UpsertMemberData, UpsertMemberVariables>;
  operationName: string;
}
export const upsertMemberRef: UpsertMemberRef;

export function upsertMember(vars: UpsertMemberVariables): MutationPromise<UpsertMemberData, UpsertMemberVariables>;
export function upsertMember(dc: DataConnect, vars: UpsertMemberVariables): MutationPromise<UpsertMemberData, UpsertMemberVariables>;

