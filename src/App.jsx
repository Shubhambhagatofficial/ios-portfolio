import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import AppsSection from './components/AppsSection'
import AppDetail from './components/AppDetail'
import Footer from './components/Footer'
import './App.css'

function App() {
  // Get the base path for GitHub Pages
  const basename = import.meta.env.PROD ? '/ios-portfolio' : ''

  return (
    <Router basename={basename}>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <AppsSection />
              <Footer />
            </>
          } />
          <Route path="/app/:id" element={
            <>
              <AppDetail />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
