import { combineReducers } from "redux";
import productReducer from "./produces.reducers";

const rootReducer = combineReducers({
  produce: productReducer,
});

export default rootReducer;
