import { combineReducers } from "redux";
import setDate from "../reducers/setdate";
import newState from "../reducers/newstate";
import dayIndex from "../reducers/dayindex";
import userAuth from "../reducers/userauth";

const rootReducer = combineReducers({
  setDate,
  newState,
  dayIndex,
  userAuth,
});

export default rootReducer;
