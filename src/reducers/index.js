import { combineReducers } from "redux";
import { timeReducer } from "./Reducers";

export default combineReducers({
  allReducer: timeReducer
});
