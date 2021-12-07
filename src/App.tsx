import { useCallback, useEffect, useState } from "react";

import { getSudokuBoard } from "./common/api";
import { SudokuBoard } from "./common/model";
import Board from "./components/Board";

import "./index.css";

// TODO: Use Redux to prevent prop drilling
function App() {
  const [board, setBoard] = useState<SudokuBoard>({ board: [], key: "" });

  useEffect(() => {
    const getBoard = async () => {
      const board = await getSudokuBoard();
      setBoard(board);
    };
    getBoard();
  }, []);

  const setCellValue = useCallback(
    (rowIdx: number, colIdx: number, value: number) => {
      const newBoard = [...board.board];
      newBoard[rowIdx][colIdx] = value;
      setBoard({
        ...board,
        board: newBoard,
      });
    },
    [board]
  );

  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <Board data={board} setCellValue={setCellValue} />
    </div>
  );
}

export default App;
