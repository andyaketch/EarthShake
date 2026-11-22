
import { useEffect, useState } from "react";
import { listEarthquakes } from "@dataconnect/generated";
import { dataConnect } from "./firebase";
import "./App.css";

function App() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getEarthquakes() {
      try {
        const result = await listEarthquakes(dataConnect);
        setEarthquakes(result.data.earthquakes);
      } catch (err) {
        console.error(err);
        setError("Could not load earthquake data.");
      } finally {
        setLoading(false);
      }
    }

    getEarthquakes();
  }, []);

  return (
    <main className="earthquake-page">
      <header>
        <h1>EarthShake</h1>
        <p>Understanding earthquakes. Staying prepared.</p>
      </header>

      <section>
        <h2>Recent Earthquakes</h2>

        {loading && <p>Loading earthquake records...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && earthquakes.length === 0 && (
          <p>No earthquake records available yet.</p>
        )}

        <div className="earthquake-list">
          {earthquakes.map((quake) => (
            <article className="earthquake-card" key={quake.usgsEventId}>
              <h3>
                Magnitude {quake.magnitude}
              </h3>

              <p>{quake.locationDescription}</p>

              <p>Depth: {quake.depthKm} km</p>

              <p>
                Coordinates: {quake.latitude}, {quake.longitude}
              </p>

              <p>
                Date: {new Date(quake.eventTimestamp).toLocaleString()}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
