import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Maps.css';

export function initBasemap(containerId = 'map-container', center = [-1.2864, 36.8172], zoom = 13) {
  const map = L.map(containerId).setView(center, zoom);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  return map;
}

export default function Maps() {
  useEffect(() => {
    const map = initBasemap('map-container');

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map-container" />;
}