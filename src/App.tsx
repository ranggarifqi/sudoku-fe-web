import { useEffect, useState } from "react";

import { getSudokuBoard } from "./common/api";
import { SudokuBoard } from "./common/model";
import Board from "./components/Board";

import "./index.css";

function App() {
  const [board, setBoard] = useState<SudokuBoard>({ board: [], key: "" });

  useEffect(() => {
    const getBoard = async () => {
      const board = await getSudokuBoard();
      setBoard(board);
    };
    getBoard();
  }, []);

  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <Board data={board} />
    </div>
  );
}

export default App;
