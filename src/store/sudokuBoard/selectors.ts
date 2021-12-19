import { createSelector } from "reselect";
import { RootState } from "..";

const sltSudokuBoard = (state: RootState) => state.sudokuBoard;

export const sltSudokuBoardIsLoading = createSelector(
  sltSudokuBoard,
  (state) => state.isLoading
);
export const sltSudokuBoardErrorMsg = createSelector(
  sltSudokuBoard,
  (state) => state.errorMsg
);
export const sltBoard = createSelector(sltSudokuBoard, (state) => state.board);
export const sltSudokuBoardLock = createSelector(
  sltSudokuBoard,
  (state) => state.lock
);
export const sltSudokuBoardSolution = createSelector(
  sltSudokuBoard,
  (state) => state.solution
);

export const sltIsSudokuBoardFinished = createSelector(
  sltSudokuBoardLock,
  (locks) => {
    let isFinished = true;
    locks.forEach((rows) => {
      rows.forEach((cell) => {
        if (!cell) {
          isFinished = false;
          return;
        }
      });

      if (!isFinished) {
        return;
      }
    });

    return isFinished;
  }
);
