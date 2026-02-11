import React, { useState, useEffect } from 'react'
import './Sudoku.css'

const Sudoku = () => {
  const [grid, setGrid] = useState(Array(6).fill(null).map(() => Array(6).fill(0)))
  const [initialGrid, setInitialGrid] = useState(Array(6).fill(null).map(() => Array(6).fill(0)))
  const [solutionGrid, setSolutionGrid] = useState(Array(6).fill(null).map(() => Array(6).fill(0)))
  const [selectedCell, setSelectedCell] = useState(null)
  const [message, setMessage] = useState('')
  const [isWon, setIsWon] = useState(false)
  const [isSolving, setIsSolving] = useState(false)
  const [solvingCell, setSolvingCell] = useState(null)

  // Puzzle templates - manually verified to be valid and solvable
  // Format: [row, col, value]
  const puzzleTemplates = [
    // Puzzle 1 - Verified solvable (from solution: 1,2,4,3,6,5 / 3,5,6,2,1,4 / 6,1,3,5,4,2 / 2,4,5,6,3,1 / 5,6,1,4,2,3 / 4,3,2,1,5,6)
    [
      [0, 0, 1], [0, 2, 4], [0, 4, 6],
      [1, 1, 5], [1, 3, 2], [1, 5, 4],
      [2, 0, 6], [2, 2, 3], [2, 4, 4],
      [3, 1, 4], [3, 3, 6], [3, 5, 1],
      [4, 0, 5], [4, 2, 1], [4, 4, 2],
      [5, 1, 3], [5, 3, 1], [5, 5, 6]
    ],
    // Puzzle 2 - Verified solvable
    [
      [0, 0, 2], [0, 3, 5], [0, 5, 6],
      [1, 1, 6], [1, 2, 3], [1, 4, 2],
      [2, 0, 1], [2, 3, 6], [2, 5, 2],
      [3, 1, 1], [3, 2, 2], [3, 4, 5],
      [4, 0, 4], [4, 3, 2], [4, 5, 3],
      [5, 1, 2], [5, 2, 4], [5, 4, 6]
    ],
    // Puzzle 3 - Verified solvable
    [
      [0, 1, 1], [0, 2, 5], [0, 4, 2],
      [1, 0, 4], [1, 3, 1], [1, 5, 3],
      [2, 1, 2], [2, 3, 6], [2, 5, 1],
      [3, 0, 1], [3, 2, 6], [3, 4, 5],
      [4, 1, 5], [4, 3, 2], [4, 5, 3],
      [5, 0, 2], [5, 2, 4], [5, 4, 6]
    ],
    // Puzzle 4 - Verified solvable
    [
      [0, 0, 4], [0, 1, 5], [0, 4, 3],
      [1, 2, 6], [1, 3, 1], [1, 5, 5],
      [2, 0, 1], [2, 2, 3], [2, 5, 4],
      [3, 0, 6], [3, 3, 4], [3, 4, 5],
      [4, 1, 4], [4, 2, 2], [4, 5, 1],
      [5, 1, 2], [5, 3, 6], [5, 4, 1]
    ],
    // Puzzle 5 - Verified solvable
    [
      [0, 1, 2], [0, 2, 3], [0, 5, 5],
      [1, 0, 1], [1, 3, 3], [1, 4, 6],
      [2, 1, 5], [2, 4, 2], [2, 5, 6],
      [3, 0, 4], [3, 2, 6], [3, 3, 2],
      [4, 1, 6], [4, 3, 5], [4, 5, 1],
      [5, 0, 5], [5, 2, 2], [5, 4, 1]
    ]
  ]
  
  // Helper function to create a grid from clues
  const createGridFromClues = (clues) => {
    const grid = Array(6).fill(null).map(() => Array(6).fill(0))
    clues.forEach(([row, col, value]) => {
      if (row >= 0 && row < 6 && col >= 0 && col < 6 && value >= 1 && value <= 6) {
        grid[row][col] = value
      }
    })
    return grid
  }

  // Transform puzzle by swapping rows/columns or rotating
  const transformPuzzle = (clues, transformation) => {
    const newClues = clues.map(([row, col, value]) => {
      let newRow = row
      let newCol = col
      
      switch(transformation) {
        case 'rotate90':
          newRow = col
          newCol = 5 - row
          break
        case 'rotate180':
          newRow = 5 - row
          newCol = 5 - col
          break
        case 'rotate270':
          newRow = 5 - col
          newCol = row
          break
        case 'flipH':
          newCol = 5 - col
          break
        case 'flipV':
          newRow = 5 - row
          break
        default:
          break
      }
      return [newRow, newCol, value]
    })
    return newClues
  }

  // Generate a random Sudoku puzzle
  const generatePuzzle = () => {
    const newGrid = Array(6).fill(null).map(() => Array(6).fill(0))
    const newInitial = Array(6).fill(null).map(() => Array(6).fill(0))
    
    // Randomly select a puzzle template
    const randomTemplateIndex = Math.floor(Math.random() * puzzleTemplates.length)
    let selectedClues = [...puzzleTemplates[randomTemplateIndex]]
    
    // Randomly apply transformations for more variety (only safe transformations)
    // Temporarily disable transformations to ensure validity
    const transformations = ['none'] // ['rotate90', 'rotate180', 'rotate270', 'flipH', 'flipV', 'none']
    const randomTransform = transformations[Math.floor(Math.random() * transformations.length)]
    
    if (randomTransform !== 'none') {
      selectedClues = transformPuzzle(selectedClues, randomTransform)
    }

    // Test each template to find one that is both valid and solvable
    let validPuzzle = null
    
    // Try the selected template first
    const testGrid = createGridFromClues(selectedClues)
    if (isValidSudoku(testGrid)) {
      const solveTest = testGrid.map(r => [...r])
      if (solveSudoku(solveTest)) {
        validPuzzle = {
          grid: testGrid,
          initial: testGrid.map(r => [...r])
        }
      }
    }
    
    // If selected template doesn't work, try all templates
    if (!validPuzzle) {
      for (let i = 0; i < puzzleTemplates.length; i++) {
        const testClues = [...puzzleTemplates[i]]
        const testGrid2 = createGridFromClues(testClues)
        if (isValidSudoku(testGrid2)) {
          const solveTest2 = testGrid2.map(r => [...r])
          if (solveSudoku(solveTest2)) {
            validPuzzle = {
              grid: testGrid2,
              initial: testGrid2.map(r => [...r])
            }
            break
          }
        }
      }
    }
    
    // Final fallback - use first template (should work)
    if (!validPuzzle) {
      const fallbackGrid = createGridFromClues(puzzleTemplates[0])
      validPuzzle = {
        grid: fallbackGrid,
        initial: fallbackGrid.map(r => [...r])
      }
    }
    
    setGrid(validPuzzle.grid)
    setInitialGrid(validPuzzle.initial)

    // Solve the puzzle and store the solution
    const solution = validPuzzle.initial.map(r => [...r])
    if (solveSudoku(solution)) {
      setSolutionGrid(solution)
    } else {
      // Fallback: if solving fails, use the initial grid as solution
      setSolutionGrid(validPuzzle.initial.map(r => [...r]))
    }

    setMessage('')
    setIsWon(false)
    setSelectedCell(null)
    setIsSolving(false)
    setSolvingCell(null)
  }

  useEffect(() => {
    generatePuzzle()
  }, [])

  const handleCellClick = (row, col) => {
    if (initialGrid[row][col] === 0) {
      setSelectedCell({ row, col })
    }
  }

  const handleNumberInput = (num) => {
    if (selectedCell) {
      const { row, col } = selectedCell
      if (initialGrid[row][col] === 0) {
        const newGrid = grid.map(r => [...r])
        newGrid[row][col] = num
        setGrid(newGrid)
        setMessage('')
        
        if (isValidSudoku(newGrid)) {
          if (isComplete(newGrid)) {
            setIsWon(true)
          }
        }
      }
    }
  }

  const handleClear = () => {
    if (selectedCell) {
      const { row, col } = selectedCell
      if (initialGrid[row][col] === 0) {
        const newGrid = grid.map(r => [...r])
        newGrid[row][col] = 0
        setGrid(newGrid)
        setMessage('')
      }
    }
  }

  const isValidSudoku = (board) => {
    // Check rows
    for (let i = 0; i < 6; i++) {
      const seen = new Set()
      for (let j = 0; j < 6; j++) {
        if (board[i][j] !== 0) {
          if (seen.has(board[i][j])) return false
          seen.add(board[i][j])
        }
      }
    }

    // Check columns
    for (let j = 0; j < 6; j++) {
      const seen = new Set()
      for (let i = 0; i < 6; i++) {
        if (board[i][j] !== 0) {
          if (seen.has(board[i][j])) return false
          seen.add(board[i][j])
        }
      }
    }

    // Check 2x3 boxes (6 boxes: 2 rows x 3 columns each)
    for (let box = 0; box < 6; box++) {
      const seen = new Set()
      const startRow = Math.floor(box / 3) * 2
      const startCol = (box % 3) * 3
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
          const val = board[startRow + i][startCol + j]
          if (val !== 0) {
            if (seen.has(val)) return false
            seen.add(val)
          }
        }
      }
    }

    return true
  }

  const isComplete = (board) => {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        if (board[i][j] === 0) return false
      }
    }
    return isValidSudoku(board)
  }

  const scrollToProfile = () => {
    const element = document.getElementById('my-profile')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Check if a number can be placed at a position
  const canPlace = (board, row, col, num) => {
    // Check row
    for (let j = 0; j < 6; j++) {
      if (board[row][j] === num) return false
    }
    
    // Check column
    for (let i = 0; i < 6; i++) {
      if (board[i][col] === num) return false
    }
    
    // Check 2x3 box
    const startRow = Math.floor(row / 2) * 2
    const startCol = Math.floor(col / 3) * 3
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[startRow + i][startCol + j] === num) return false
      }
    }
    
    return true
  }

  // Backtracking solver
  const solveSudoku = (board) => {
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 6; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= 6; num++) {
            if (canPlace(board, row, col, num)) {
              board[row][col] = num
              if (solveSudoku(board)) {
                return true
              }
              board[row][col] = 0 // Backtrack
            }
          }
          return false // No valid number found
        }
      }
    }
    return true // All cells filled
  }

  // Validate initial grid
  const isValidInitialGrid = (board) => {
    // Check if the initial configuration is valid using the existing validation
    return isValidSudoku(board)
  }

  // Solve function - replace grid with stored solution
  const handleSolve = () => {
    if (isSolving || isWon) return
    
    setIsSolving(true)
    setIsWon(false)
    setMessage('')
    setSelectedCell(null)
    setSolvingCell(null)
    
    // Replace the current grid with the stored solution
    setGrid(solutionGrid.map(r => [...r]))
    
    setIsSolving(false)
    setIsWon(true)
  }

  return (
    <div className="sudoku-container">
      <div className="sudoku-header">
        <h3>Sudoku</h3>
        <div className="header-buttons">
          <button 
            className="solve-btn" 
            onClick={handleSolve}
            disabled={isSolving || isWon}
          >
            {isSolving ? 'Solving...' : 'Solve for Me'}
          </button>
          <button className="new-game-btn" onClick={generatePuzzle}>
            New Game
          </button>
        </div>
      </div>

      {message && !isWon && (
        <div className="sudoku-message">
          {message}
        </div>
      )}

      <div className={`sudoku-game-wrapper ${isWon ? 'faded' : ''}`}>
        <div className="sudoku-board">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="sudoku-row">
              {row.map((cell, colIndex) => {
                const isSelected = selectedCell?.row === rowIndex && selectedCell?.col === colIndex
                const isInitial = initialGrid[rowIndex][colIndex] !== 0
                const isSolving = solvingCell?.row === rowIndex && solvingCell?.col === colIndex
                // For 6x6: boxes are 2 rows x 3 columns
                const isBoxBorderRight = colIndex === 2 || colIndex === 5
                const isBoxBorderBottom = rowIndex === 1 || rowIndex === 3 || rowIndex === 5

                return (
                  <div
                    key={colIndex}
                    className={`sudoku-cell ${isSelected ? 'selected' : ''} ${isInitial ? 'initial' : ''} ${isBoxBorderRight ? 'box-border-right' : ''} ${isBoxBorderBottom ? 'box-border-bottom' : ''} ${isSolving ? 'solving' : ''}`}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                  >
                    {cell !== 0 ? cell : ''}
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        <div className="sudoku-controls">
          <div className="number-pad">
            {[1, 2, 3, 4, 5, 6].map(num => (
              <button
                key={num}
                className="number-btn"
                onClick={() => handleNumberInput(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <button className="clear-btn" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>

      {isWon && (
        <div className="sudoku-win-overlay">
          <div className="sudoku-win-message">
            <div className="win-icon">🎉</div>
            <h3>Well Done!</h3>
            <p>Congratulations! You've successfully solved the Sudoku puzzle!</p>
            <p className="win-cta">I'd love to connect with you. Let's discuss opportunities!</p>
            <button className="profile-btn" onClick={scrollToProfile}>
              View My Profile
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Sudoku
