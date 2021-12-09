import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSudokuBoard } from "../../common/api";
import { resetLife } from "../healthPoint";

export const getNewSudokuBoard = createAsyncThunk(
  "sudokuBoard/getNewBoard",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(resetLife());
    const response = await getSudokuBoard();
    return response;
  }
);
