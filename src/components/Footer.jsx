import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} iOS Developer Portfolio
        </p>
        <p className="footer-subtext">
          Built with React
        </p>
      </div>
    </footer>
  )
}

export default Footer
