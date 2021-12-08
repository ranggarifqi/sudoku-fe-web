import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSudokuBoard } from "../../common/api";

export const getNewSudokuBoard = createAsyncThunk(
  "sudokuBoard/getNewBoard",
  async () => {
    const response = await getSudokuBoard();
    return response;
  }
);
