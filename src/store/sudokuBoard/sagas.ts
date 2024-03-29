import { PayloadAction } from "@reduxjs/toolkit";
import { all, put, select, takeEvery } from "redux-saga/effects";
import { lockCellValue, setCellValue, sltSudokuBoardSolution } from ".";
import { decreaseLife } from "../healthPoint";
import { SetCellValuePayload } from "./reducers";

function* setCellValueSaga(action: PayloadAction<SetCellValuePayload>) {
  const {
    payload: { colIdx, rowIdx, value },
  } = action;
  const solution: number[][] = yield select(sltSudokuBoardSolution);

  /** If correct, then we lock the cell so it can't be edited anymore */
  if (solution[rowIdx][colIdx] === value) {
    yield put(
      lockCellValue({
        colIdx,
        rowIdx,
      })
    );
    return;
  }

  /** If incorrect, we decrease 1 life */
  yield put(decreaseLife(1));
}

export function* setCellValueWatcher() {
  yield takeEvery(setCellValue, setCellValueSaga);
}

export default function* rootSudokuBoardSaga() {
  yield all([setCellValueWatcher()]);
}
