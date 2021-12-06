import classNames from "classnames";

type Props = {
  value: number;
  rowIdx: number;
  colIdx: number;
};

export const Cell = ({ value, rowIdx, colIdx }: Props) => {
  const curClassName = classNames(
    "w-14",
    "h-14",
    "border",
    "border-black",
    "text-center",
    {
      "border-b-2": (rowIdx + 1) % 3 === 0,
      "border-r-2": (colIdx + 1) % 3 === 0,
    }
  );

  return <td className={curClassName}>{value}</td>;
};
