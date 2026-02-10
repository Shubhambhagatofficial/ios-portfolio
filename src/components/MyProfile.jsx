import React from 'react'
import './MyProfile.css'

const MyProfile = () => {
  return (
    <section id="my-profile" className="profile-section">
      <div className="profile-container">
        <h2 className="profile-title">About Me</h2>
        
        <div className="profile-content">
          <div className="profile-text">
            <p className="profile-description">
              A seasoned iOS developer with over 4.5 years of experience developing large-scale applications. 
              Expertise in Swift and SwiftUI, leading architecture and migrations for Angel One, Furlenco, and CREX. 
              Developed and published apps serving 7M+ daily active users.
            </p>
            
            <div className="profile-details">
              <div className="detail-item">
                <h3>Experience</h3>
                <p>4.5+ Years in iOS Development</p>
              </div>
              
              <div className="detail-item">
                <h3>Specialization</h3>
                <p>Swift, SwiftUI, Architecture</p>
              </div>
              
              <div className="detail-item">
                <h3>Impact</h3>
                <p>7M+ Daily Active Users</p>
              </div>
            </div>

            <div className="profile-skills">
              <h3>Key Skills</h3>
              <div className="skills-list">
                <span className="skill-tag">Swift</span>
                <span className="skill-tag">SwiftUI</span>
                <span className="skill-tag">UIKit</span>
                <span className="skill-tag">iOS Architecture</span>
                <span className="skill-tag">MVVM</span>
                <span className="skill-tag">Combine</span>
                <span className="skill-tag">Core Data</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyProfile
