import { useEffect, useState } from 'react'
import { getSudokuBoard } from './common/api'
import { SudokuBoard } from './common/model'

function App() {
  const [board, setBoard] = useState<SudokuBoard>({ board: [], solution: '' })

  useEffect(() => {
    const getBoard = async () => {
      const board = await getSudokuBoard()
      setBoard(board)
    }
    getBoard()
  }, [])

  console.log(board)

  return (
    <div>Hello World</div>
  )
}

export default App
