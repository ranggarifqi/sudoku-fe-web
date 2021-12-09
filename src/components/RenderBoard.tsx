import { useAppSelector } from "../common/hooks";
import { sltHealthPointLive } from "../store/healthPoint";
import Board from "./Board";
import GameOver from "./GameOver";

const RenderBoard = () => {
  const life = useAppSelector(sltHealthPointLive);

  if (life <= 0) {
    return <GameOver />;
  }

  return <Board />;
};

export default RenderBoard;
