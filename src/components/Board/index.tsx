import { useCallback, useEffect, useState } from "react";
import { SudokuBoard } from "../../common/api/model";
import { Cell } from "../Cell";

type Props = {
  data: SudokuBoard;
  setCellValue: (rowIdx: number, colIdx: number, value: number) => void;
};

const WIDTH = 45;

const Board = ({ data, setCellValue }: Props) => {
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
        {data.board.map((row, i) => {
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
                    locked={data.lock ? data.lock[i][j] : false}
                    setCellValue={setCellValue}
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
