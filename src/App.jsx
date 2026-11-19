import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import './Design.jsx'


function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center gap-6">

      <h1 className="text-4xl font-bold text-blue-700">
        EarthShake
      </h1>

      <p className="text-gray-600">
        Tailwind CSS is being tested.
      </p>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
        Test Button
      </button>

    </div>
  )
}

export default App

