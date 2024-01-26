import { useState } from 'react'
import './App.css'
import Home from './Home'
import HomeTopic from './HomeTopic'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AccordionPage from './AccordionPage'

function App() {
  const [page, setPage] = useState('home')

  return (
    <Router>
      <Routes>
        <Route path="/accordion" element={<AccordionPage />} />
        <Route path="/home-topic" element={<HomeTopic />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
