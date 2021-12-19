import { Loader } from "react-feather";
import { useAppSelector } from "../common/hooks";
import { sltHealthPointLive } from "../store/healthPoint";
import {
  sltIsSudokuBoardFinished,
  sltSudokuBoardErrorMsg,
  sltSudokuBoardIsLoading,
} from "../store/sudokuBoard";
import Board from "./Board";
import Congratulation from "./Congratulation";
import GameOver from "./GameOver";

const RenderBoard = () => {
  const isLoading = useAppSelector(sltSudokuBoardIsLoading);
  const errorMsg = useAppSelector(sltSudokuBoardErrorMsg);

  const life = useAppSelector(sltHealthPointLive);
  const isSudokuBoardFinished = useAppSelector(sltIsSudokuBoardFinished);

  if (isLoading) {
    return <Loader className="animate-spin-slow" />;
  }

  if (errorMsg) {
    return <div>{errorMsg}</div>;
  }

  if (life <= 0) {
    return <GameOver />;
  }

  if (isSudokuBoardFinished) {
    return <Congratulation />;
  }

  return <Board />;
};

export default RenderBoard;
