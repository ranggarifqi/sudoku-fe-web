import { getAxiosInstance } from "../axios";
import { SudokuBoard } from "./model";

export const getSudokuBoard = async (
  difficulty: number = 2
): Promise<SudokuBoard> => {
  const api = getAxiosInstance();
  const { data } = await api.post<SudokuBoard>("/new-board", {
    difficulty,
  });

  const lock = data.board.map((row) => {
    return row.map((cell) => {
      return cell !== 0;
    });
  });

  return {
    ...data,
    lock,
  };
};
