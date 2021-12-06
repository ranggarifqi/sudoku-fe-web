import { useEffect, useState } from "react";

import { getSudokuBoard } from "./common/api";
import { decodeSolution } from "./common/encryption";
import { SudokuBoard } from "./common/model";
import { Cell } from "./components/Cell";

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

  // const decodedSolution = decodeSolution(board.key);

  return (
    <div className="container mx-auto">
      <table className="table-fixed border-collapse border-2 border-black">
        <tbody>
          {board.board.map((row, i) => {
            return (
              <tr className="border border-indigo-800">
                {row.map((col, j) => {
                  return (
                    <Cell value={col} rowIdx={i} colIdx={j} />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
