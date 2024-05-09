import './App.css'
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index';
import Time from './pages/Time';
import Links from './components/Links'

function App() {
  return (
    <BrowserRouter>
      <Links />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/time" element={<Time />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
