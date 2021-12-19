import { useCallback, useState } from "react";
import { useAppSelector } from "../../common/hooks";
import { sltBoard, sltSudokuBoardLock } from "../../store/sudokuBoard";
import { Cell } from "./Cell";
import HealthPoint from "./HealthPoint";

const WIDTH = 45;

// TODO: Add functionlity to increase life, similiar to Minecraft's hunger. When we set the correct answer, it will increase the hunger. If hunger = 5, 1 live will be added
// TODO: Add Note Feature
const Board = () => {
  const board = useAppSelector(sltBoard);
  const boardLock = useAppSelector(sltSudokuBoardLock);

  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [selectedCol, setSelectedCol] = useState<number | null>(null);

  const setSelectedCell = useCallback(
    (rowIdx: number | null, colIdx: number | null) => {
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
    <div className="space-y-2">
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
      <HealthPoint />
    </div>
  );
};

export default Board;
