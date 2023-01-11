import { combineReducers } from "redux";

import RequestStageReducer from "./requestStage.reducer";
//Reducers

const rootReducer = combineReducers({
  requestStage: RequestStageReducer,
});

export default rootReducer;
