import { all, takeEvery } from "redux-saga/effects";
import { setCellValue } from ".";

function* setCellValueSaga() {
  console.log("set Cell Value side effect");
}

export function* setCellValueWatcher() {
  yield takeEvery(setCellValue, setCellValueSaga);
}

export default function* rootSudokuBoardSaga() {
  yield all([setCellValueWatcher()]);
}
