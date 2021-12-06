import classNames from "classnames";

type Props = {
  value: number;
  rowIdx: number;
  colIdx: number;
  width: number;
};

export const Cell = ({ value, rowIdx, colIdx, width }: Props) => {
  const curClassName = classNames("border", "border-black", "text-center", {
    "border-b-2": (rowIdx + 1) % 3 === 0,
    "border-r-2": (colIdx + 1) % 3 === 0,
  });

  return (
    <td
      className={curClassName}
      style={{
        width: width + "px",
        height: width + "px",
      }}
    >
      {value === 0 ? '' : value}
    </td>
  );
};
