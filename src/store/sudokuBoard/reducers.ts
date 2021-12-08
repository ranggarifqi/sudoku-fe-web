import { PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { SudokuBoardState } from ".";

interface SetCellValuePayload {
  rowIdx: number;
  colIdx: number;
  value: number;
}
export const setCellValueHandler = (
  state: WritableDraft<SudokuBoardState>,
  action: PayloadAction<SetCellValuePayload>
) => {
  const { rowIdx, colIdx, value } = action.payload;
  const newBoard = [...state.board];
  newBoard[rowIdx][colIdx] = value;
  state.board = newBoard;
};
