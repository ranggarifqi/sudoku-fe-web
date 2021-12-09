import { combineReducers } from "redux";
import sudokuBoardReducer from "./sudokuBoard";
import healthPointReducer from "./healthPoint";

const rootReducer = combineReducers({
  sudokuBoard: sudokuBoardReducer,
  healthPoint: healthPointReducer,
});

export default rootReducer;
