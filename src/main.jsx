
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

console.log("1. Main.jsx loaded");
console.log("2. App imported:", App);

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(<App />);
