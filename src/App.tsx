import { useEffect } from "react";

import { useAppDispatch } from "./common/hooks";
import RenderBoard from "./components/RenderBoard";

import "./index.css";
import { getNewSudokuBoard } from "./store/sudokuBoard/thunks";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNewSudokuBoard());
  }, []);

  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <RenderBoard />
    </div>
  );
}

export default App;
