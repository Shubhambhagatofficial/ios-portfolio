import React from 'react'
import Menu from './Menu'
import ThemeToggle from './ThemeToggle'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <Menu />
      <ThemeToggle />
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Shubham Kumar
          </h1>
          <h2 className="hero-title2">
            Senior Software Engineer, iOS
          </h2>
          <p className="hero-subtitle">
            Crafting beautiful and intuitive mobile experiences
          </p>
          <p className="hero-description">
            A seasoned iOS developer with around 5 years of experience developing large-scale applications. 
            Expertise in Swift and SwiftUI, leading architecture and migrations for Angel One, Furlenco, and CREX. 
            Developed and published apps serving 7M+ daily active users. Passionate about optimizing user experiences 
            through advanced coding practices and team leadership.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
