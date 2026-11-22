const { queryRef, executeQuery, validateArgsWithOptions, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'earthshake',
  location: 'europe-west1'
};
exports.connectorConfig = connectorConfig;

const listEarthquakesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListEarthquakes');
}
listEarthquakesRef.operationName = 'ListEarthquakes';
exports.listEarthquakesRef = listEarthquakesRef;

exports.listEarthquakes = function listEarthquakes(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listEarthquakesRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const upsertMemberRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertMember', inputVars);
}
upsertMemberRef.operationName = 'UpsertMember';
exports.upsertMemberRef = upsertMemberRef;

exports.upsertMember = function upsertMember(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(upsertMemberRef(dcInstance, inputVars));
}
;

const upsertEarthquakeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertEarthquake', inputVars);
}
upsertEarthquakeRef.operationName = 'UpsertEarthquake';
exports.upsertEarthquakeRef = upsertEarthquakeRef;

exports.upsertEarthquake = function upsertEarthquake(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(upsertEarthquakeRef(dcInstance, inputVars));
}
;
