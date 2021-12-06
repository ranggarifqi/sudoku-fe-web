import classNames from "classnames";
import { SudokuBoard } from "../../common/model";
import { Cell } from "../Cell";

type Props = {
  data: SudokuBoard;
};

const WIDTH = 45;

const Board = ({ data }: Props) => {
  return (
    <table className="table-fixed border-collapse border-2 border-black">
      <tbody>
        {data.board.map((row, i) => {
          return (
            <tr className="border border-indigo-800">
              {row.map((col, j) => {
                return <Cell value={col} rowIdx={i} colIdx={j} width={WIDTH} />;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Board
