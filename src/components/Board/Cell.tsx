import classNames from "classnames";
import isFinite from "lodash/isFinite";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { decreaseLife } from "../../store/healthPoint";
import { setCellValue } from "../../store/sudokuBoard";
import { sltSudokuBoardSolution } from "../../store/sudokuBoard/selectors";

type Props = {
  value: number;
  rowIdx: number;
  colIdx: number;
  width: number;
  selectedRow: number | null;
  selectedCol: number | null;
  setSelectedCell: (rowIdx: number | null, colIdx: number | null) => void;
  locked: boolean;
};

export const Cell = ({
  value,
  rowIdx,
  colIdx,
  width,
  selectedRow,
  selectedCol,
  setSelectedCell,
  locked,
}: Props) => {
  const dispatch = useAppDispatch();

  const solution = useAppSelector(sltSudokuBoardSolution);

  const selected = selectedRow === rowIdx && selectedCol === colIdx;
  const isIncorrectValue = value !== 0 && solution[rowIdx][colIdx] !== value;

  useEffect(() => {
    if (isIncorrectValue) {
      dispatch(decreaseLife(1));
    }
  }, [isIncorrectValue]);

  const curClassName = classNames("border", "border-black", "text-center", {
    "border-b-2": (rowIdx + 1) % 3 === 0,
    "border-r-2": (colIdx + 1) % 3 === 0,
    "bg-green-200": selected,
    "bg-gray-100": locked,
    "bg-red-200": isIncorrectValue,
  });

  const onKeyUp = (event: React.KeyboardEvent<HTMLTableCellElement>) => {
    if (selected) {
      const digit = parseInt(event.key);
      const isDigit = isFinite(digit);

      if (isDigit && digit >= 1 && digit <= 9) {
        dispatch(
          setCellValue({
            rowIdx,
            colIdx,
            value: digit,
          })
        );
        setSelectedCell(null, null);

        return;
      }

      if (event.key === "Backspace") {
        dispatch(
          setCellValue({
            rowIdx,
            colIdx,
            value: 0,
          })
        );
        setSelectedCell(null, null);
        return;
      }
    }
  };

  return (
    <td
      className={curClassName}
      style={{
        width: width + "px",
        height: width + "px",
      }}
      onClick={() => {
        if (!locked) {
          setSelectedCell(rowIdx, colIdx);
        }
      }}
      onKeyUp={onKeyUp}
      tabIndex={0}
    >
      {value === 0 ? "" : value}
    </td>
  );
};
