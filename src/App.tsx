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
    <div className="container mx-auto h-screen flex flex-col justify-center items-center">
      <RenderBoard />
      <div className="footer space-x-1">
        <span>© 2021-2022</span>
        <a href="https://ranggarifqi.com" target="_blank">
          Rangga Rifqi Pratama
        </a>
      </div>
    </div>
  );
}

export default App;
