import React from 'react'
import Sudoku from './Sudoku'
import './Games.css'

const Games = () => {
  return (
    <section id="games" className="games-section">
      <div className="games-container">
        <h2 className="games-title">Play Games</h2>
        <p className="games-subtitle">
          Take a break and enjoy some games!
        </p>
        
        <div className="games-content">
          <Sudoku />
        </div>
      </div>
    </section>
  )
}

export default Games
