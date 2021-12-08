import { useCallback, useState } from "react";
import { useAppSelector } from "../../common/hooks";
import {
  sltBoard,
  sltSudokuBoardLock,
} from "../../store/sudokuBoard/selectors";
import { Cell } from "../Cell";

const WIDTH = 45;

const Board = () => {
  const board = useAppSelector(sltBoard);
  const boardLock = useAppSelector(sltSudokuBoardLock);

  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [selectedCol, setSelectedCol] = useState<number | null>(null);

  const setSelectedCell = useCallback(
    (rowIdx: number, colIdx: number) => {
      if (selectedRow === rowIdx && selectedCol === colIdx) {
        setSelectedRow(null);
        setSelectedCol(null);
        return;
      }
      setSelectedRow(rowIdx);
      setSelectedCol(colIdx);
    },
    [selectedRow, selectedCol]
  );

  return (
    <table className="table-fixed border-collapse border-2 border-black cursor-default">
      <tbody>
        {board.map((row, i) => {
          return (
            <tr key={`row-${i}`} className="border border-indigo-800">
              {row.map((col, j) => {
                return (
                  <Cell
                    key={`cell-${i}-${j}`}
                    value={col}
                    rowIdx={i}
                    colIdx={j}
                    width={WIDTH}
                    selectedRow={selectedRow}
                    selectedCol={selectedCol}
                    setSelectedCell={setSelectedCell}
                    locked={boardLock ? boardLock[i][j] : false}
                  />
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Board;
