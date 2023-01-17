import { combineReducers } from "redux";
import RequesterReducer from "./requester.reducer";

import RequestStageReducer from "./requestStage.reducer";
//Reducers

const rootReducer = combineReducers({
  requestStage: RequestStageReducer,
  requester: RequesterReducer,
});

export default rootReducer;
