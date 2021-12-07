import classNames from "classnames";
import isFinite from "lodash/isFinite";

type Props = {
  value: number;
  rowIdx: number;
  colIdx: number;
  width: number;
  selectedRow: number | null;
  selectedCol: number | null;
  setSelectedCell: (rowIdx: number, colIdx: number) => void;
  locked: boolean;
  setCellValue: (rowIdx: number, colIdx: number, value: number) => void;
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
  setCellValue,
}: Props) => {
  const selected = selectedRow === rowIdx && selectedCol === colIdx;
  const curClassName = classNames("border", "border-black", "text-center", {
    "border-b-2": (rowIdx + 1) % 3 === 0,
    "border-r-2": (colIdx + 1) % 3 === 0,
    "bg-green-200": selected,
    "bg-gray-100": locked,
  });

  const onKeyUp = (event: React.KeyboardEvent<HTMLTableCellElement>) => {
    if (selected) {
      const digit = parseInt(event.key);
      const isDigit = isFinite(digit);

      if (isDigit && digit >= 1 && digit <= 9) {
        setCellValue(rowIdx, colIdx, digit);
        return;
      }

      if (event.key === "Backspace") {
        setCellValue(rowIdx, colIdx, 0);
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
