
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { initializeApp } from "firebase/app";
import { getDataConnect } from "firebase/data-connect";
import {
  connectorConfig,
  upsertEarthquake
} from "@dataconnect/generated";

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

initializeApp(firebaseConfig);

const dataConnect = getDataConnect(connectorConfig);

const response = await fetch(
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
);

if (!response.ok) {
  throw new Error("Could not retrieve earthquake data.");
}

const data = await response.json();

for (const feature of data.features.slice(0, 30)) {
  const [longitude, latitude, depthKm] = feature.geometry.coordinates;
  const properties = feature.properties;

  if (properties.mag === null || !feature.geometry) continue;

  await upsertEarthquake(dataConnect, {
    usgsEventId: feature.id,
    magnitude: properties.mag,
    locationDescription: properties.place ?? null,
    depthKm,
    latitude,
    longitude,
    eventTimestamp: new Date(properties.time).toISOString()
  });
}

console.log("Earthquake records imported successfully.");
