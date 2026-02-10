import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './AppDetail.css'

// Import app data - in a real app, this would come from a data store or API
import { getAllApps } from '../data/appsData'

const AppDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const app = getAllApps().find(a => a.id === parseInt(id))

  // Scroll to top when detail page opens
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  const handleBackClick = () => {
    // Navigate back - scroll position will be restored by AppsSection
    navigate('/')
  }

  if (!app) {
    return (
      <div className="app-detail-container">
        <div className="app-detail-content">
          <h1>App not found</h1>
          <button onClick={handleBackClick} className="back-button">
            Go Back
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="app-detail-container">
      <div className="app-detail-content">
        <button onClick={handleBackClick} className="back-button">
          ← Back to Portfolio
        </button>

        <div className="app-detail-header">
          <div className="app-detail-icon">
            {app.icon ? (
              <img src={app.icon} alt={app.name} className="app-detail-icon-img" />
            ) : (
              <div className="app-icon-default">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M9 9h6v6H9z" />
                </svg>
              </div>
            )}
          </div>
          <div className="app-detail-title-section">
            <h1 className="app-detail-name">{app.name}</h1>
            {app.technologies && app.technologies.length > 0 && (
              <div className="app-detail-technologies">
                {app.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag-large">{tech}</span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="app-detail-body">
          <div className="app-detail-section">
            <h2 className="app-detail-section-title">Description</h2>
            <p className="app-detail-description">{app.description}</p>
          </div>

          {app.workedOn && app.workedOn.length > 0 && (
            <div className="app-detail-section">
              <h2 className="app-detail-section-title">What I Worked On</h2>
              <ul className="worked-on-list">
                {app.workedOn.map((item, index) => (
                  <li key={index} className="worked-on-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="app-detail-links">
            {app.appStoreLink && (
              <a 
                href={app.appStoreLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="app-link-large app-store-link"
              >
                View on App Store
              </a>
            )}
            {app.githubLink && (
              <a 
                href={app.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="app-link-large github-link"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppDetail
