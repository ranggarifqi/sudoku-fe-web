import { all } from "redux-saga/effects";

import rootSudokuBoardSaga from "./sudokuBoard/sagas";

export default function* rootSaga() {
  yield all([rootSudokuBoardSaga()]);
}
