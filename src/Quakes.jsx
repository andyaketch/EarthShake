import { useEffect, useState } from "react";
import QuakeCard from "./QuakeCard";

// usgs feed, 4.5 and above in the last 7 days. no key needed
const USGS_URL =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

function Quakes() {
  const [quakes, setQuakes] = useState([]);
  const [stillLoading, setStillLoading] = useState(true);
  const [oops, setOops] = useState("");

  useEffect(() => {
    async function getQuakes() {
      try {
        const res = await fetch(USGS_URL);
        if (!res.ok) {
          throw new Error("usgs not happy");
        }
        const data = await res.json();
        setQuakes(data.features); // the list of earthquakes is inside features
      } catch (err) {
        console.log(err);
        setOops("Could not load the earthquakes. Try again later.");
      }
      setStillLoading(false);
    }

    getQuakes();
  }, []);

  return (
    <section className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-1">Recent Earthquakes</h2>
      <p className="mb-4 text-sm">Magnitude 4.5+ from the past 7 days, source USGS</p>

      {/* && means: if the left side is true then show the right side */}
      {stillLoading && <p>Loading earthquake records...</p>}
      {oops && <p>{oops}</p>}

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* map = loop over the list and make a card for each one. key helps react track them */}
        {quakes.slice(0, 30).map((q) => (
          <QuakeCard
            key={q.id}
            mag={q.properties.mag}
            place={q.properties.place}
            time={q.properties.time}
            link={q.properties.url}
            depth={q.geometry.coordinates[2]}
          />
        ))}
      </div>
    </section>
  );
}

export default Quakes;
