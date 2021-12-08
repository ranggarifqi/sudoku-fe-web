import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SudokuBoard } from "../../common/api/model";
import { decodeSolution } from "../../common/encryption";

export interface SudokuBoardState {
  board: number[][];
  solution: number[][];
  lock: boolean[][];
}

const initialState: SudokuBoardState = {
  board: [],
  solution: [],
  lock: [],
};

export const sudokuBoardSlice = createSlice({
  name: "sudokuBoard",
  initialState,
  reducers: {
    setBoard: (state, action: PayloadAction<SudokuBoard>) => {
      state.board = action.payload.board;
      state.solution = decodeSolution(action.payload.key);
      state.lock = action.payload.board.map((row) => {
        return row.map((cell) => {
          return cell !== 0;
        });
      });
    },
  },
});

export const { setBoard } = sudokuBoardSlice.actions;

export default sudokuBoardSlice.reducer;
