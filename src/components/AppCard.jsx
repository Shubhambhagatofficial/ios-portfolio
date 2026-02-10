import React from 'react'
import { useNavigate } from 'react-router-dom'
import './AppCard.css'

const AppCard = ({ app }) => {
  const navigate = useNavigate()

  const handleCardClick = (e) => {
    // Don't navigate if clicking on links
    if (e.target.closest('.app-links')) {
      return
    }
    navigate(`/app/${app.id}`)
  }

  return (
    <div className="app-card" onClick={handleCardClick}>
      <div className="app-card-content">
        <div className="app-icon-placeholder">
          {app.icon ? (
            <img src={app.icon} alt={app.name || 'App Icon'} className="app-icon" />
          ) : (
            <div className="app-icon-default">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M9 9h6v6H9z" />
              </svg>
            </div>
          )}
        </div>
        
        <h3 className="app-name">
          {app.name || 'App Name'}
        </h3>
        
        <p className="app-description">
          {app.description || 'App description will appear here...'}
        </p>
        
        {app.technologies && app.technologies.length > 0 && (
          <div className="app-technologies">
            {app.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}
        
        <div className="app-links" onClick={(e) => e.stopPropagation()}>
          {app.appStoreLink && (
            <a 
              href={app.appStoreLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="app-link app-store-link"
            >
              App Store
            </a>
          )}
          {app.githubLink && (
            <a 
              href={app.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="app-link github-link"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default AppCard
