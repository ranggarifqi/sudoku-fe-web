import { combineReducers } from "redux";
import sudokuBoardReducer from "./sudokuBoard";

const rootReducer = combineReducers({
  sudokuBoard: sudokuBoardReducer,
});

export default rootReducer;
