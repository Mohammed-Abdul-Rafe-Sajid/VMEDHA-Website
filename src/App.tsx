import React from 'react'
import ScrollToTop from "./components/ScrollToTop";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Achievements from './pages/Achievements'
import Collaborations from './pages/Collaborations'
import Contact from './pages/Contact'
import './styles/globals.css'
import Event1 from "./pages/events/event-1";  // <-- import page
import Event2 from "./pages/events/event-2"; 
import Event3 from "./pages/events/event-3"; 


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/collaborations" element={<Collaborations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events/event-1" element={<Event1 />} />
            <Route path="/events/event-2" element={<Event2 />} />
            <Route path="/events/event-3" element={<Event3 />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
