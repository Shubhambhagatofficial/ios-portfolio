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
              I have around 5 years of professional experience developing large-scale applications in iOS.
              Expertise in Swift and SwiftUI, leading architecture and migrations for Angel One, Furlenco, and CREX. 
              Developed and published apps serving 7M+ daily active users.
            </p>
            
            <div className="profile-details">
              <div className="detail-item">
                <h3>Experience</h3>
                <p>~5 Years in iOS Development</p>
              </div>
              
              <div className="detail-item">
                <h3>Specialization</h3>
                <p>Swift, SwiftUI, UIKit, iOS, GoLang</p>
              </div>
              
              <div className="detail-item">
                <h3>Impact</h3>
                <p>7M+ Daily Active Users</p>
                <p>App Store Published Apps: 5</p>
              </div>
            </div>

            <div className="profile-skills">
              <h3>Key Skills</h3>
              <div className="skills-list">
                <span className="skill-tag">SwiftUI</span>
                <span className="skill-tag">UIKit</span>
                <span className="skill-tag">MVVM</span>
                <span className="skill-tag">VIPER</span>
                <span className="skill-tag">Go</span>
                <span className="skill-tag">Claude AI</span>
                <span className="skill-tag">AI Tools</span>
                <span className="skill-tag">SWIFT</span>
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">Team Leader</span>
                <span className="skill-tag">App Management</span>
                <span className="skill-tag">Cursor</span>
                <span className="skill-tag">Combine</span>
                <span className="skill-tag">Core Data</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">CI/CD</span>
              </div>
            </div>

            <div className="profile-education">
              <h3>Education</h3>
              <div className="education-item">
                <div className="education-header">
                  <h4>B.Tech. in Computer Science and Engineering</h4>
                  <span className="education-year">2017-2021</span>
                </div>
                <p className="education-institution">College of Engineering Roorkee (COER)</p>
              </div>
            </div>

            <div className="profile-languages">
              <h3>Languages</h3>
              <div className="languages-list">
                <span className="language-tag">Hindi</span>
                <span className="language-tag">English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyProfile
