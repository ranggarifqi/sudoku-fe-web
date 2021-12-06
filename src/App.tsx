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
  const flatBoard = board.board.flat()

  return (
    <div className="container mx-auto">
      <div className="grid gap-0 grid-cols-9 border-2 border-black">
        {flatBoard.map((v, i) => {
          return <Cell value={v} key={`cell-${i}`}></Cell>
        })}
      </div>
    </div>
  );
}

export default App;
