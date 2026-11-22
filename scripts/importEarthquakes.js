
import { initializeApp } from "firebase/app";
import { getDataConnect, executeMutation } from "firebase/data-connect";
import {
  connectorConfig,
  upsertEarthquakeRef
} from "@dataconnect/generated";

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const dataConnect = getDataConnect(app, connectorConfig);

async function importEarthquakes() {
  const response = await fetch(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
  );

  const result = await response.json();

  for (const feature of result.features) {
    const properties = feature.properties;
    const coordinates = feature.geometry.coordinates;

    if (properties.mag === null) continue;

    const earthquake = {
      usgsEventId: feature.id,
      magnitude: properties.mag,
      locationDescription: properties.place,
      depthKm: coordinates[2],
      latitude: coordinates[1],
      longitude: coordinates[0],
      eventTimestamp: new Date(properties.time).toISOString()
    };

    await executeMutation(
      upsertEarthquakeRef(dataConnect, earthquake)
    );

    console.log("Imported:", earthquake.locationDescription);
  }

  console.log("Earthquake import complete!");
}

importEarthquakes().catch(console.error);
