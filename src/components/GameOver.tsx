import { useAppDispatch } from "../common/hooks";
import { getNewSudokuBoard } from "../store/sudokuBoard/thunks";
import Button from "./Buttons/Button";

// TODO: Button to show the solution
const GameOver = () => {
  const dispatch = useAppDispatch();

  const onTryAgain = () => {
    dispatch(getNewSudokuBoard());
  };

  return (
    <div className="flex flex-col text-center space-y-2">
      <span>Game Over</span>
      <Button onClick={onTryAgain}>Try Again ?</Button>
    </div>
  );
};

export default GameOver;
