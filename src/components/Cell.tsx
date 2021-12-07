import classNames from "classnames";

type Props = {
  value: number;
  rowIdx: number;
  colIdx: number;
  width: number;
  selectedRow: number | null;
  selectedCol: number | null;
  setSelectedCell: (rowIdx: number, colIdx: number) => void;
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
  const selected = selectedRow === rowIdx && selectedCol === colIdx;
  const curClassName = classNames("border", "border-black", "text-center", {
    "border-b-2": (rowIdx + 1) % 3 === 0,
    "border-r-2": (colIdx + 1) % 3 === 0,
    "bg-green-200": selected,
    "bg-gray-100": locked,
  });

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
    >
      {value === 0 ? "" : value}
    </td>
  );
};
