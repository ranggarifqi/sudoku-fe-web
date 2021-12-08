import { useEffect } from "react";

import { useAppDispatch } from "./common/hooks";
import Board from "./components/Board";

import "./index.css";
import { getNewSudokuBoard } from "./store/sudokuBoard/thunks";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNewSudokuBoard());
  }, []);

  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <Board />
    </div>
  );
}

export default App;
