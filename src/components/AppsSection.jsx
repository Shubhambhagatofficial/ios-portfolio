import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AppCard from './AppCard'
import { builtFromScratch, contributedHeavily } from '../data/appsData'
import './AppsSection.css'

const AppsSection = () => {
  const location = useLocation()

  useEffect(() => {
    // Restore scroll position when coming back from detail page
    if (location.pathname === '/') {
      const savedScrollPosition = sessionStorage.getItem('homeScrollPosition')
      if (savedScrollPosition) {
        // Use requestAnimationFrame to ensure the page has rendered
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            window.scrollTo({
              top: parseInt(savedScrollPosition, 10),
              behavior: 'auto'
            })
            // Clear the saved position after restoring
            sessionStorage.removeItem('homeScrollPosition')
          })
        })
      }
    }
  }, [location.pathname])

  return (
    <section className="apps-section">
      <div className="apps-container">
        {/* Built from Scratch Section */}
        <div className="apps-subsection">
          <h2 className="apps-section-title">Built from Scratch</h2>
          <p className="apps-section-subtitle">
            iOS applications I've developed from the ground up
          </p>
          <div className="apps-grid">
            {builtFromScratch.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>

        {/* Contributed Heavily Section */}
        <div className="apps-subsection">
          <h2 className="apps-section-title">Major Contributions</h2>
          <p className="apps-section-subtitle">
            Apps where I've made significant contributions and improvements
          </p>
          <div className="apps-grid apps-grid--centered">
            {contributedHeavily.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppsSection
