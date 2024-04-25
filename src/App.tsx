import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index';
import Hello from './pages/Hello';
import Time from './pages/Time';
import Links from './components/Links'

function App() {
  return (
    <BrowserRouter>
      <Links />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/hello/:name" element={<Hello />} />
        <Route path="/time" element={<Time />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
