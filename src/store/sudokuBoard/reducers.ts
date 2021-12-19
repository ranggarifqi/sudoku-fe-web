import { PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { SudokuBoardState } from ".";

interface CellRowCol {
  rowIdx: number;
  colIdx: number;
}

export interface SetCellValuePayload extends CellRowCol {
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

export const lockCellValueHandler = (
  state: WritableDraft<SudokuBoardState>,
  action: PayloadAction<CellRowCol>
) => {
  const { rowIdx, colIdx } = action.payload;
  const newLock = [...state.lock];
  newLock[rowIdx][colIdx] = true;
  state.lock = newLock;
};
