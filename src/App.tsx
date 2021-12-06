import { useEffect, useState } from 'react'

import { getSudokuBoard } from './common/api'
import { decodeSolution } from './common/encryption'
import { SudokuBoard } from './common/model'

function App() {
  const [board, setBoard] = useState<SudokuBoard>({ board: [], key: '' })

  useEffect(() => {
    const getBoard = async () => {
      const board = await getSudokuBoard()
      setBoard(board)
    }
    getBoard()
  }, [])

  const decodedSolution = decodeSolution(board.key)
  console.log(decodedSolution)

  return (
    <div>Hello World</div>
  )
}

export default App
