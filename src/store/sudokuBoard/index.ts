import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SudokuBoard } from "../../common/api/model";
import { decodeSolution } from "../../common/encryption";
import { getNewSudokuBoard } from "./api";

export interface SudokuBoardState {
  board: number[][];
  solution: number[][];
  lock: boolean[][];
  isLoading: boolean;
  errorMsg: string | null;
}

export const initialState: SudokuBoardState = {
  board: [],
  solution: [],
  lock: [],
  isLoading: false,
  errorMsg: null,
};

export const sudokuBoardSlice = createSlice({
  name: "sudokuBoard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNewSudokuBoard.pending, (state) => {
      state.isLoading = true;
      state.errorMsg = null;
    });
    builder.addCase(getNewSudokuBoard.fulfilled, (state, action) => {
      state.isLoading = false;
      state.errorMsg = null;
      state.board = action.payload.board;
      state.solution = decodeSolution(action.payload.key);
      state.lock = action.payload.board.map((row) => {
        return row.map((cell) => {
          return cell !== 0;
        });
      });
    });
    builder.addCase(getNewSudokuBoard.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.error.message ?? "Error getting new sudoku board";
    });
  },
});

export default sudokuBoardSlice.reducer;
