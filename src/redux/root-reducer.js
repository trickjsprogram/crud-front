import { combineReducers } from "redux";
import taskReducer from "./task.reducer";

const rootReducer = combineReducers({
  app: taskReducer,
});

export default rootReducer;
