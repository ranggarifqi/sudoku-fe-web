import { useAppDispatch } from "../common/hooks";
import { getNewSudokuBoard } from "../store/sudokuBoard/thunks";
import Button from "./Buttons/Button";

const Congratulation = () => {
  const dispatch = useAppDispatch();

  const onTryAgain = () => {
    dispatch(getNewSudokuBoard());
  };

  return (
    <div className="flex flex-col text-center space-y-2">
      <span>Congratulations!!!</span>
      <Button onClick={onTryAgain}>Try Again ?</Button>
    </div>
  );
};

export default Congratulation;
