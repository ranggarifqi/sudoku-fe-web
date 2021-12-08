export interface SudokuBoard {
  board: number[][]
  key: string
  lock?: boolean[][] // to determine which value is considered as the "problem", and which value is considered as the "solution"
}
