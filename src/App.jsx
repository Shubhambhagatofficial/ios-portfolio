import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Hero from './components/Hero'
import AppsSection from './components/AppsSection'
import AppDetail from './components/AppDetail'
import MyProfile from './components/MyProfile'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  // Get the base path for GitHub Pages
  const basename = import.meta.env.PROD ? '/ios-portfolio' : ''

  return (
    <ThemeProvider>
      <Router basename={basename}>
        <div className="App">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <MyProfile />
                <AppsSection />
                <Contact />
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
    </ThemeProvider>
  )
}

export default App
