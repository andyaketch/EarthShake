# EarthShake

Understanding earthquakes. Staying prepared.

EarthShake is a secure dashboard that shows recent earthquakes in one clean place. Earthquake data is public, but it is buried in raw feeds and jargon. Sign in, and you see every magnitude 4.5+ earthquake from the past 7 days, live from the USGS.

**Live site:** [EarthShake web app](https://andyaketch.github.io/EarthShake/)

## Features

- Register, log in and log out with email and password
- Sign in with Google
- Live earthquake data from the USGS API, with magnitude, location, depth, time and a link to the official report
- Loading and error messages

## Built with

React, Vite, Firebase Authentication, Material UI, Bootstrap, Tailwind CSS, Vitest and React Testing Library. GitHub Actions runs the build and tests.

## Run it locally

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
```

Create a `.env.local` file in the project root with your own Firebase values:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

Then:

```bash
npm run dev
npm test
```

## What is next

A map view, saving earthquakes, and comments.
