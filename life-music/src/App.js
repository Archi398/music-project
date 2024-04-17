import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";

import Navigation from './pages/Navigation';
import Home from './pages/Home';
import SynthKeyboard from './pages/SynthKeyboard';

function App() {
  return (
    <div className="py-24 w-full h-full max-w-screen-xl flex flex-wrap items-center justify-center mx-auto">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/synth-keyboard" element={<SynthKeyboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;