import React from 'react'
import './MyProfile.css'

const MyProfile = () => {
  return (
    <section id="my-profile" className="profile-section">
      <div className="profile-container">
        <h2 className="profile-title">About Me</h2>
        
        <div className="profile-content">
          <div className="profile-text">
            <ul className="profile-description-list">
              <li>~5 years of professional iOS development experience building large-scale, production-grade applications</li>
              <li>Expert in Swift & SwiftUI with deep proficiency in UIKit, MVVM, and VIPER architecture patterns</li>
              <li>Led architecture design and major migrations at Angel One, Furlenco, and CREX — driving performance, scalability, and code quality</li>
              <li>Published 5 apps on the App Store, collectively serving <strong>7M+ daily active users</strong></li>
              <li>Experienced team lead — managing engineering teams, mentoring developers, and delivering features at scale</li>
            </ul>
            
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
                <span className="skill-tag">SwiftUI <span className="skill-years">4y</span></span>
                <span className="skill-tag">UIKit <span className="skill-years">6y</span></span>
                <span className="skill-tag">MVVM <span className="skill-years">6y</span></span>
                <span className="skill-tag">VIPER <span className="skill-years">4y</span></span>
                <span className="skill-tag">Go <span className="skill-years">2y</span></span>
                <span className="skill-tag">Claude AI <span className="skill-years">1y</span></span>
                <span className="skill-tag">AI Tools <span className="skill-years">1y</span></span>
                <span className="skill-tag">SWIFT <span className="skill-years">6y</span></span>
                <span className="skill-tag">Spring Boot <span className="skill-years">3y</span></span>
                <span className="skill-tag">Team Leader <span className="skill-years">6y</span></span>
                <span className="skill-tag">App Management <span className="skill-years">6y</span></span>
                <span className="skill-tag">Cursor <span className="skill-years">1y</span></span>
                <span className="skill-tag">Combine <span className="skill-years">4y</span></span>
                <span className="skill-tag">Core Data <span className="skill-years">6y</span></span>
                <span className="skill-tag">REST APIs <span className="skill-years">6y</span></span>
                <span className="skill-tag">Git <span className="skill-years">6y</span></span>
                <span className="skill-tag">CI/CD <span className="skill-years">4y</span></span>
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
